from flask import Flask, request, jsonify
import os
import json

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload():
    if 'insights' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['insights']
    if not file.filename.endswith('.json'):
        return jsonify({"error": "Invalid file type"}), 400

    insights = json.load(file)
    # Example parsed insights
    parsed_data = {
        "trade": [{"name": "Offer 1", "value": 740}],
        "recipe": {"coffee": 1.5, "water": 6}
    }
    return jsonify(parsed_data)

if __name__ == '__main__':
    app.run(debug=True)
