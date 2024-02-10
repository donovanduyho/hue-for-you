import openai
from flask import Flask, request, jsonify, render_template

# Configure your OpenAI API key
openai.api_key = " "

app = Flask(__name__)

def get_color_palette(word):
    prompt = f"""Suggest a color palette of 4 hex color codes that would best represent the word "{word}"."""

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )

    color_description = response.choices[0].message.content

    # Note: The response will be textual. You might need additional parsing 
    # logic to extract specific color names or hex codes if you want to 
    # use them directly for visualization.

    return color_description.split("\n")  # Split the colors by newline

@app.route('/color_generator', methods=['POST'])
def get_colors():
    word = request.json['word']
    print("Received word:", word)  # Log the received word
    colors = get_color_palette(word)
    print("Generated colors:", colors)  # Log the colors from OpenAI
    return jsonify(colors=colors)  # Return a JSON response


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4999)   # Enable debug mode during development
