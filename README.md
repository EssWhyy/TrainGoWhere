# TrainGoWhere: An Interactive, In-depth MRT Map

This project was done as part of NUS Orbital 2021 (https://orbital.comp.nus.edu.sg/).

## Overview

The MRT system in Singapore is frequently used by locals and tourists alike. However, with over 130 stations, some locals may be unaware of the stations and regions outside of their usual commute, let alone tourists visiting the country for the first time. Existing websites and apps for the MRT system usually only show a static map and has very little functionality for users. As such, we decided to make a comprehensive MRT web app that offers details on train timings and shows visual station-to-station routes. We also aim to showcase the amenities and services around each station for various categories. This allows users to better navigate to their places of interest and understand the areas outside their day-to-day commute.

<img width="313" alt="Screenshot 2021-05-05 at 9 46 21 AM" src="https://user-images.githubusercontent.com/39799639/117091840-235a9680-ad8f-11eb-879f-bcf47f186912.png">

## Features 

### Interactive system map
A map of the entire MRT system with clickable stations and highlightable routes, with zoom/move functionality
Seeks user’s input for embarkation and destination station/place:
1. Calculates the train fare based on the user’s fare group (Adult/Student/Senior Citizens etc.)
2. Suggests optimal routes based on 2 metrics: 
a. LeastTransfers
b. Shortest Travel Time
3. Provides real-time estimates of trains’ arrival timings based on peak/off-peak hour timings and whether there are delays in the network

### Directory of amenities situated around each station
1. Users can search for their desired place through directories catered for each station and through searching directly from the map
2. Indicates the closest MRT exit for different amenities and estimated walking time
3. Pictures of attractions/places around
4. Allow users to bookmark/favourite frequent places

### User Feedback/Suggestions
1. Users can submit modifications/amendments to existing content should there be a change to the amenities available in that area --> Feedback will be reviewed by content moderators before the actual changes are implemented

### Possible Extensions
1. Show amenities/attractions on map directly when selecting a station
2. Allow users to mark their own places in the map (locally) and calculate closest station/shortest routes between them.


## Technologies used

### Front End
1. HTML/CSS/JavaScript 
2. React.js
3. Google Map API (for zoomable custom map)

### Back End
1. SQL/Oracle
2. Node.js + Express.js
3. Amazon Web Server Hosting
4. LTA DataMall API (to check for delays, unavailability & passenger density of train services)

## Current Status
Designing the front end structure of the website (HTML/CSS/JS/React)





