// LangflowClient class definition and other methods

class LangflowClient {
    constructor(baseURL, applicationToken) {
        this.baseURL = baseURL;
        this.applicationToken = applicationToken;
    }

    async post(endpoint, body, headers = {"Content-Type": "application/json"}) {
        headers["Authorization"] = `Bearer ${this.applicationToken}`;
        headers["Content-Type"] = "application/json";
        const url = `${this.baseURL}${endpoint}`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            });

            const responseMessage = await response.json();
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText} - ${JSON.stringify(responseMessage)}`);
            }
            return responseMessage;
        } catch (error) {
            console.error('Request Error:', error.message);
            throw error;
        }
    }

    async initiateSession(flowId, langflowId, inputValue, inputType = 'chat', outputType = 'chat', stream = false, tweaks = {}) {
        const endpoint = `/lf/${langflowId}/api/v1/run/${flowId}?stream=${stream}`;
        return this.post(endpoint, { input_value: inputValue, input_type: inputType, output_type: outputType, tweaks: tweaks });
    }

    handleStream(streamUrl, onUpdate, onClose, onError) {
        const eventSource = new EventSource(streamUrl);

        eventSource.onmessage = event => {
            const data = JSON.parse(event.data);
            onUpdate(data);
        };

        eventSource.onerror = event => {
            console.error('Stream Error:', event);
            onError(event);
            eventSource.close();
        };

        eventSource.addEventListener("close", () => {
            onClose('Stream closed');
            eventSource.close();
        });

        return eventSource;
    }

    async runFlow(flowIdOrName, langflowId, inputValue, inputType = 'chat', outputType = 'chat', tweaks = {}, stream = false, onUpdate, onClose, onError) {
        try {
            const initResponse = await this.initiateSession(flowIdOrName, langflowId, inputValue, inputType, outputType, stream, tweaks);
            console.log('Init Response:', initResponse);
            if (stream && initResponse && initResponse.outputs && initResponse.outputs[0].outputs[0].artifacts.stream_url) {
                const streamUrl = initResponse.outputs[0].outputs[0].artifacts.stream_url;
                console.log(`Streaming from: ${streamUrl}`);
                this.handleStream(streamUrl, onUpdate, onClose, onError);
            }
            return initResponse;
        } catch (error) {
            console.error('Error running flow:', error);
            onError('Error initiating session');
        }
    }
}

// Main function to integrate with HTML form
async function main(inputValue, inputType = 'chat', outputType = 'chat', stream = false) {
    const flowIdOrName = '6844f05b-4269-4bdd-a3e8-a1619b866bfd';
    const langflowId = 'bd63c452-ef26-4f97-b668-197665196e86';
    const applicationToken = 'AstraCS:SZimuGzMFJGUkafIByPrMKQD:ca497a6f4002ef4d60a090599b6c2a1863f3ebb53eb4527cfa355e6197f822ac';
    const langflowClient = new LangflowClient('https://astra.datastax.com/', applicationToken);

    try {
        const tweaks = {
            "ChatInput-HPDEw": {
                "input_value": inputValue,
                "sender": "User",
                "sender_name": "User",
                "should_store_message": true
            },
            "ChatOutput-IgUdM": {
                "input_value": "",
                "sender": "AI",
                "sender_name": "AI",
                "should_store_message": true
            }
        };

        const response = await langflowClient.runFlow(
            flowIdOrName,
            langflowId,
            inputValue,
            inputType,
            outputType,
            tweaks,
            stream,
            (data) => {
                console.log("Received:", data.chunk);
                document.getElementById("responseText").textContent = data.chunk; // Update the response
            }, // onUpdate
            (message) => console.log("Stream Closed:", message), // onClose
            (error) => console.log("Stream Error:", error) // onError
        );
        if (!stream && response && response.outputs) {
            const flowOutputs = response.outputs[0];
            const firstComponentOutputs = flowOutputs.outputs[0];
            const output = firstComponentOutputs.outputs.message;
            console.log("Final Output:", output.message.text);
            document.getElementById("responseText").textContent = output.message.text; // Display final output
        }
    } catch (error) {
        console.error('Main Error', error.message);
        document.getElementById("responseText").textContent = 'Error: ' + error.message; // Display error
    }
}

// Event listener for form submission
document.getElementById('langflowForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue = document.getElementById('message').value;
    const inputType = document.getElementById('inputType').value;
    const outputType = document.getElementById('outputType').value;
    const stream = document.getElementById('streaming').checked;

    main(inputValue, inputType, outputType, stream);
});
