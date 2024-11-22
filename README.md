# Email Sending Form

This project is a simple email-sending form that validates user input and provides feedback for required fields and
proper email formats. It features a spinner animation during the submission process and displays success or error
messages based on user interaction.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [How to Use](#how-to-use)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- Form fields for:
    - Recipient email (`Email`)
    - Carbon copy (`Cc`)
    - Subject
    - Message body
- Input validation for required fields and email format.
- Spinner animation during the email "sending" process.
- Success alert upon submission.
- Reset button to clear the form.

## Technologies Used

- **HTML5**: Structure of the web page.
- **CSS3**: Styling for layout and spinner animation.
- **JavaScript (ES6)**: Form validation, dynamic state management, and event handling.

## How to Use

1. Clone or download the repository.
2. Open the `index.html` file in a web browser.
3. Fill out the form fields:
    - Enter the recipient's email address.
    - Optionally add a `Cc` email address.
    - Provide a subject and message.
4. Click "Send" to simulate sending the email.
5. Use the "Reset" button to clear the form.

## Project Structure

The project structure is organized as follows:

- `css/` - Contains stylesheets for the application.
    - `app.css` - Custom styles for the form layout.
    - `spinner.css` - Styles for the spinner animation.
- `js/` - Contains JavaScript logic.
    - `app.js` - Handles form validation, input state, and feedback mechanisms.
- `index.html` - Main HTML file for the form structure and layout.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

© 2024 Aarón Más Murro
