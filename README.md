# Getting Started with Photo Grid

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setups before you run the project

### Obtain Pexels API key
Visit [Pexels](https://www.pexels.com) website, sign in and obtain an API key
to put it in environment variables for later.

### Setup environment variables
Copy the `.env.template` file located in the root folder
to `.env.development.local` file and set your obtain Pexels API key in the file.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## How it works
The Photo Grid requests photos from Pexels API and displayed them in a masonry grid layout.
Infinite scrolling is used for fetching photos chunk by chunk and displaying them to user.

### Performance optimization
The following techniques are used for optimizing performance of website:
1. Intersection Observer API is used for loading photos chunks one after another when the last part of latest chunk becomes visible in the viewport
2. Intersection Observer API is used for loading the images which are present in the viewport
3. Connections are initiated to Pexels API and Pexels Images Service websites for performing part or all of the TCP handshake and saving that time while loading the cross-origin resources
4. React memorization and lazy loading techniques are used for avoiding extra rendering of some components and calculations.

## Deployed website

Check the [https://masonry-photo-grid.netlify.app](https://masonry-photo-grid.netlify.app) for seeing the already deployed website