import openai
from flask import Flask, request, jsonify

# Configure your OpenAI API key
openai.api_key = "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"

app = Flask(__name__)

def get_color_palette(word):
    prompt = f"""Suggest a color palette of 4 hex color codes that would best represent the word "{word}"."""

    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )

    color_description = response.choices[0].message.content

    # Note: The response will be textual. You might need additional parsing 
    # logic to extract specific color names or hex codes if you want to 
    # use them directly for visualization.

    return color_description 

@app.route('/color_generator', methods=['POST'])
def get_colors():
    word = request.json['word']
    print("Received word:", word)  # Log the received word
    colors = get_color_palette(word)
    print("Generated colors:", colors)  # Log the colors from OpenAI
    return jsonify({'colors': colors})
 
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4999)   # Enable debug mode during development
 
# Main Interaction Loop
while True:
    user_word = input("Enter a word: ")
    if user_word.lower() == "quit":
        break
    colors = get_color_palette(user_word)
    print(f"Suggested color palette for '{user_word}':\n{colors}")