from openai import OpenAI
from flask_cors import CORS
from flask import Flask, request, jsonify

# Configure your OpenAI API key
client = OpenAI(api_key="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")
app = Flask(__name__)
CORS(app)

def get_color_palette(word):
    prompt = f"""Suggest a color palette of 5 hex color codes (ONLY THE CODES DO NOT GIVE ME THE NAME OF THE COLOR) that would best represent the word "{word}"."""

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a designer with expertise in color theory and choose colors that mesh well together."},
            {"role": "user", "content": prompt}
        ]
    )

    color_description = response.choices[0].message.content
    
    hex_codes = []
    for line in color_description.splitlines():
        if line.startswith('#'):
            hex_codes.append(line.strip())
        if not hex_codes:  # Check for an empty list 
            return "Something went wrong! Could not generate colors for this word."  # Return an error message
    return '\n'.join(hex_codes)
 
@app.route('/get_colors', methods=['POST'])
def get_colors():
    word = request.json['word']
    print("Received word:", word)  # Log the received word
    colors = get_color_palette(word)
    print("Generated colors:", colors)  # Log the colors from OpenAI
    return jsonify({'colors': colors})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5005) 
