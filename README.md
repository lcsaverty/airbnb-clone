# Airbnb Clone

A brief description of the project: Mention that this is a React-based Airbnb clone developed during your bootcamp at Le Wagon. Explain the purpose of the application and its main features.

## Table of Contents

1. [Features](#features)
2. [Demo](#demo)
3. [Technologies Used](#technologies-used)
4. [Installation and Setup](#installation-and-setup)
5. [Usage](#usage)
6. [Contribution Guidelines](#contribution-guidelines)
7. [License](#license)

## Features

Describe the main features of your application, such as:

This React application is a simple yet functional real estate listing app with an interactive map. The main features of the application are:

  - Display Flats: The app fetches a list of flats from a provided JSON file and displays them in a list format. Each flat has an image, name, price, latitude, and longitude.

  - Search Filter: Users can search for flats by entering text in the search bar. The application filters the list of flats based on the user's input.

  - Interactive Map: The app integrates with the react-leaflet library to display an interactive map. Markers are placed on the map, representing the location of each flat.

  - Marker Popups: Each marker on the map has a popup that displays the price of the flat. When a user clicks on a marker, the popup is shown.

  - Link Flats to Markers: When users click on a flat from the list, the map pans to the corresponding marker, and the marker's popup is opened automatically.

This application is an excellent starting point for anyone looking to build a more complex real estate listing app or learn more about integrating React with Leaflet maps.

## Demo

https://www.loom.com/share/a27e78354b1146a39b3698c59ab1bcca

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technologies Used

List the main technologies and libraries you used for this project, such as:

  - React: A popular JavaScript library for building user interfaces, primarily focusing on UI components. It allows developers to create reusable UI components and manage the application state efficiently.

  - React-Leaflet: A React wrapper for the Leaflet mapping library, which simplifies the process of integrating Leaflet maps into React applications. It provides React components for common Leaflet elements, such as maps, markers, and popups.

  - Leaflet: A widely used open-source JavaScript library for mobile-friendly interactive maps. It is lightweight, extensible, and compatible with most modern web browsers.

  - CSS: Used for styling the application components and creating a visually appealing layout.

  - Fetch API: A modern, native JavaScript API used for making network requests to fetch the JSON data containing flat information.

## Installation and Setup

Provide step-by-step instructions on how to set up the project locally:

1. *Install Node.js and npm*: To run the project, you need Node.js and npm (Node Package Manager) installed on your computer. You can download Node.js from the official website: https://nodejs.org/. npm is included with Node.js.

2. *Clone the repository:* Clone the project repository to your local machine using Git. Open a terminal or command prompt and run the following command:

git clone <repository_url>
Replace <repository_url> with the URL of your project repository.

3. **Navigate to the project directory: Change your current working directory to the project folder:
cd <project_folder>
Replace <project_folder> with the name of your project folder.

4. **Install dependencies: Install the required project dependencies by running the following command:
npm install
This command reads the package.json file in the project directory and installs the listed dependencies.

5. **Start the development server: Run the following command to start the local development server:
npm start
This command starts the React development server, which automatically opens the project in your default web browser.

6. **View the project: You should now be able to view the project running at http://localhost:3000 or another available port in your web browser.

7. **Make changes: You can now make changes to the project files using your preferred code editor. The development server will automatically reload the browser when you save any changes.

8. **Stop the development server: To stop the development server, press Ctrl + C in the terminal or command prompt where the server is running.

Remember to always follow the best practices and guidelines for the technologies and libraries used in the project. Happy coding!

## Usage

Explain how users can interact with your application, including:

  - Browse flats: Users can browse through a list of flats displayed on the left side of the application. Each flat card contains information such as the flat's name, price, currency, latitude, and longitude.

  - View flat location on map: The application features an interactive map on the right side. Each flat from the list has a corresponding marker on the map. The marker includes a popup displaying the flat's information.

  - Select a flat: Users can click on a flat in the list, and the map will automatically pan to the corresponding marker. The popup for the selected flat will open, displaying its information.

  - Interact with map: Users can interact with the map to zoom in and out or pan around to explore the different flat locations. They can also click on the markers directly to open the popups with the flat's information.

## License

Include information about the project's license, if applicable (e.g., MIT License). You can use a website like choosealicense.com to help you pick an appropriate license for your project.
