
# Login and Registration Form

This project is a simple login and registration form built using HTML, CSS, and JavaScript. It supports both Sign Up and Sign In functionality and utilizes `localStorage` to store and verify user credentials.

## Demo

The form provides:
- A **Sign Up** form to register new users.
- A **Sign In** form to log in existing users.
- A **password suggestion link** for user guidance.

### Features:
- **Responsive Design**: The form adjusts to various screen sizes and resolutions.
- **Font Awesome Icons**: Icons are used for input fields (username, email, and password).
- **LocalStorage for Authentication**: User credentials (name, email, and password) are stored in the browser’s `localStorage`.
- **Validation**: Users must fill out all fields in the Sign-Up form before submitting.
- **Feedback**: Upon login or registration, success or error messages are shown.
- **Toggle Forms**: The Sign-Up and Sign-In forms toggle dynamically without refreshing the page.

---

## Technologies Used

- **HTML5**: Structure of the form.
- **CSS3**: Custom styles for form layout, buttons, and background image.
- **JavaScript**: Handles form behavior, validation, and `localStorage` interactions.
- **Font Awesome**: Provides the icons used for input fields.
- **Google Fonts**: Uses the "Poppins" font family for a modern look.

---

## Project Setup

### Prerequisites

- A modern browser (Google Chrome, Firefox, etc.) is required to run this project.
- No external backend or database is required, as the project only uses `localStorage`.

### Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   ```

2. **Open the Project**
   Open the `index.html` file in your preferred browser.

---

## Project Structure

```
.
├── index.html          # Main HTML file for the login and registration form
├── style.css           # Custom CSS for styling the form and elements
├── fun.js              # JavaScript file for handling form interactions and localStorage
└── README.md           # Instructions and overview of the project
```

### Files Overview

1. **index.html**: Contains the form structure with both "Sign Up" and "Sign In" sections.
2. **style.css**: Defines the layout and styles for the form, including a background image, buttons, and responsive design.
3. **fun.js**: 
   - Handles toggling between the "Sign In" and "Sign Up" forms.
   - Manages `localStorage` for saving and verifying user credentials.
   - Provides feedback to the user based on the form action (successful registration, login error, etc.).

---

## Key Functionalities

### 1. Sign Up
- **Form Fields**: Name, Email, and Password.
- **Behavior**: When the "Sign Up" button is clicked, the user details are saved in `localStorage` if all fields are filled. The fields are then cleared, and a success message is shown.

### 2. Sign In
- **Form Fields**: Email and Password.
- **Behavior**: When the "Sign In" button is clicked, it compares the input email and password with the saved values in `localStorage`. If they match, a success message is shown; otherwise, an error message is displayed.

### 3. Password Suggestions
- A link under the password input field provides suggestions for creating strong passwords.

---

## Customization

1. **Background Image**: You can change the background image by replacing the URL in the `.container` CSS class.
   ```css
   .container{
       background-image: url("your-image-url.jpg");
   }
   ```
2. **Font Family**: The project uses the **Poppins** font family. You can replace it by editing the `<link>` tag in the `index.html` file.
   ```html
   <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=YourFontFamily"/>
   ```

3. **Validation**: Add more complex validation logic inside the `signupbtn` and `signinbtn` event listeners in the `fun.js` file if necessary.

---

## Future Improvements

- Implement password encryption for storing sensitive information.
- Add input validation for stronger password requirements (special characters, numbers, etc.).
- Introduce a backend service for user authentication and persistent data storage.
- Add form animations for a smoother user experience.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- **Font Awesome** for providing the input icons.
- **Google Fonts** for the "Poppins" font.
- Background image from **Pixelstalk**.

---

## Author

- **Abdullah Nazmus-sakib**  
Feel free to reach out for any questions or suggestions via GitHub issues or pull requests.

---

This README will give other developers an understanding of how your project works, and how to get it up and running locally.
