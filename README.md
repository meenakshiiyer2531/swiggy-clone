# Swiggy Clone - Fullstack Food Order App

This project is a clone of Swiggy, a popular online food ordering and delivery platform. It is a full-stack application built using ReactJS, TypeScript, Tailwind CSS, and Firebase. The project aims to replicate some of the core features and functionalities of the original Swiggy application.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization using Firebase Authentication.
- Browse restaurants and their menus.
- Search for specific dishes or restaurants.
- Add items to the cart.
- Place orders and make payments.
- View order history.
- Track order status in real-time.
- Rate and review restaurants.
- Admin panel for restaurant owners to manage their menu and orders.

## Technologies Used

- **Frontend**:
  - ReactJS - Frontend library for building user interfaces.
  - TypeScript - Typed superset of JavaScript that compiles to plain JavaScript.
  - Tailwind CSS - Utility-first CSS framework for rapid UI development.
  - React Router - Declarative routing for React applications.
- **Backend**:
  - Firebase Firestore - NoSQL cloud database for storing and syncing data in real-time.
  - Firebase Authentication - Provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.
- **Deployment**:
  - Firebase Hosting - Fast and secure web hosting for deploying your web app.
  
## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js & npm - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. npm is the package manager for JavaScript.
- Firebase Account - Sign up for a Firebase account at [Firebase Console](https://console.firebase.google.com/).

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/swiggy-clone.git
   ```

2. **Install dependencies**:

   ```bash
   cd swiggy-clone
   npm install
   ```

3. **Set up Firebase**:
   - Create a new Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable Firebase Authentication and Firestore in the Firebase Console.
   - Obtain your Firebase config object.
   - Create a `.env` file in the root directory and add your Firebase config:

     ```
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

## Usage

1. **Start the development server**:

   ```bash
   npm start
   ```

2. **Open the browser**:

   Your app should now be running at [http://localhost:3000](http://localhost:3000).

## Deployment

1. **Build your app**:

   ```bash
   npm run build
   ```

2. **Deploy to Firebase Hosting**:

   ```bash
   firebase deploy
   ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request for any improvements or additional features.

## License

This project is licensed under the [MIT License](LICENSE).
```

Feel free to modify and expand upon this README.md file to suit the specific details and requirements of your Swiggy clone project.
