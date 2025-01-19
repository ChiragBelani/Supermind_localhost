// Handle form submission for Langflow Client Interface
document.getElementById('langflowForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const message = document.getElementById('message').value;
    const inputType = document.getElementById('inputType').value;
    const outputType = document.getElementById('outputType').value;
    const streaming = document.getElementById('streaming').checked;

    const requestData = {
        message,
        inputType,
        outputType,
        streaming,
    };

    try {
        const response = await fetch('https://api.langflow.com/v1/response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        document.getElementById('responseText').textContent = data.response || 'No response received.';
    } catch (error) {
        console.error('Error fetching Langflow API:', error);
        document.getElementById('responseText').textContent = 'An error occurred while fetching the response.';
    }
});

// Fetch Coffee Insights dynamically from Langflow API
async function fetchCoffeeInsights() {
    try {
        const response = await fetch('https://api.langflow.com/v1/coffee-insights');
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        const insightsList = document.getElementById('insightsList');

        // Clear existing content
        insightsList.innerHTML = '';

        // Populate insights dynamically
        data.insights.forEach((insight) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = insight; // Assuming `insight` contains HTML content
            insightsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching Coffee Insights:', error);
        const insightsList = document.getElementById('insightsList');
        insightsList.innerHTML = '<li>An error occurred while fetching the insights.</li>';
    }
}

// Fetch insights on page load
fetchCoffeeInsights();
