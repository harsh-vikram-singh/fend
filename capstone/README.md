# Project Instructions

This project was made as a part of Udacity's FrontEnd Nanodegree program. This is the final project with the aim to implement a basic travel planner. The user can search for a location within United States (this would work for a lot of locations outside of USA as well, but the can not be guaranteed), and a date when the trip would start.

They would be then greeted with an image of the location that is fetched from pixabay, and weather forecast for the day of travel.

## Getting started

To install everything:

`cd` into capstone folder and run:
- `npm install`

## Setting up the API

The Aylien API is perhaps different than what you've used before. It has you install a node module to run certain commands through, it will simplify the requests we need to make from our node/express backend.

Set-up the API keys for Geonames api to get location of the place entered by the user, Pixabay api to fetch the image, and weatherbit api to get the weather forecast. This api provides a weather forecast for next 15 days only. If the user selects a date which is more than 15 days into the future, a message is printed into the console. 

## Additional functionality

As per the project requirements, the additional functionality implemented was the ability to add Todo Items, after the user searches for the location and gets the results. An `+ Add todo` button is provided that user can use to add todo items.


## To run the project

Run  `npm run build-prod` in the terminal (opened in a folder named `capstone`) to generate a dist folder that contains the compiled files
Run `npm start` and open `http://localhost:8081/` in your brower to visit the website.

