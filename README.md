# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


 <!-- I added  some description here -->
 <!-- read this for understanding about project -->
 # User Dashboard Application

This project is a simple user management application built using React and Material-UI. It allows users to view a list of users, add new users, edit existing user details, and view individual user details.

## Features

- **User List:** Displays a list of users fetched from a mock API.(JsonPlaceholder)
- **Add User:** Allows users to add new users with their name, email, and city.
- **Edit User:** Enables users to edit existing user details.
- **User Details:** Provides detailed information about a specific user when we click on arrow icon then we will navigate to route where we can get specific detail of a user.

## Installation

1. Install dependencies: `npm install`
2. Run the application: `npm start`

## Components

### UserList

The `UserList` component fetches and displays a list of users. It allows users to edit and delete user data and navigate to individual user details.

### AddUser

The `AddUser` component manages the addition and editing of user details. It contains a form to input user information and saves or edits user data accordingly.

### UserDetail

The `UserDetail` component shows detailed information about a specific user. It retrieves data based on the selected user ID.

## Usage

1. **View User List:** Access the User List via the dashboard.
2. **Add User:** Click the "Add User" button to input new user details.
3. **Edit User:** Click the "Edit" button beside a user to modify their information.
4. **User Details:** Click on a user to view their detailed information.

## Additional Notes

- This project uses mock data from a placeholder API for demonstration purposes.

## Acknowledgments

- This project was created as a learning exercise in React and Material-UI.
- Inspiration and API data were derived from jsonplaceholder.typicode.com.
