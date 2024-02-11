[Hue For You]
Place a word in the text-box and you'll be given 4 colors that relate to that word!


Getting Started
To get this project up and running locally, follow these steps.

Prerequisites
Python 3.7+
An OpenAI API key (https://openai.com/api/)

Installation
Clone the repository:
git clone https://github.com/[username]/[hueforyou].git

Navigate to the project directory:
cd hueforyou

Create a virtual environment (optional, but recommended):
python3 -m venv venv
source venv/bin/activate 

Install dependencies:
pip install openai flask-cors requests flask

Environment Variables
Create a .env file in the root directory of your project and add the following line, replacing with your actual key: OPENAI_API_KEY=your_openai_api_key

Important: Never commit your .env file to version control to protect your API key. 
Add .env to your .gitignore file.


Usage:
Run color_generator after adding an api key for gpt-3.5 turbo, then run the web.html.

