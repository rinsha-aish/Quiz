# Quiz App

![quizapp](https://github.com/user-attachments/assets/d1262cb9-d6ad-493b-9ca1-d7c8233efee2)


A simple quiz application built using HTML, CSS, and JavaScript that fetches questions from an external API and allows users to answer them with immediate feedback on correctness. The app tracks the score and displays it at the end of the quiz.

## Features
- Fetches questions from the [QuizAPI.io](https://quizapi.io/) API.
- Displays multiple-choice questions with four possible answers.
- Provides immediate feedback on correct and incorrect answers.
- Tracks and displays the user's score at the end of the quiz.
- Option to replay the quiz after completion.

## Technologies Used
- **HTML5** for the structure of the web page.
- **CSS3** for styling and layout.
- **JavaScript (ES6)** for dynamic content and API integration.

## How to Run the Project
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/quiz-app.git
2. Navigate to the project directory:
3. ```bash
   cd quiz-app
4. Open the 'index.html' file in your browser to view the app.

### API Integration
This project uses the QuizAPI.io to fetch quiz questions. You can modify the API URL in the script.js file to change the difficulty, category, or number of questions.
   ```bash
const apiUrl = "https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&difficulty=Easy&limit=5";


Replace YOUR_API_KEY with your QuizAPI.io key to fetch quiz questions.


