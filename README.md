# TrainGoWhere: An Interactive, In-depth MRT Map

Video Demonstration of App: https://drive.google.com/file/d/1vAfQ9onxWNKRmjob02xcwct0cjnc6G0B/view?usp=sharing

Full README: https://docs.google.com/document/d/1wmIvktqEhvrgPTsyZdyrSKitsBtQlBkZYFhzKY5CBx4/edit?usp=sharing

## Overview

Traingowhere is a comprehensive MRT web app which features an interactive MRT map that offers details on train timings and shows visual station-to-station routes. It also showcases the places-of-interest in the vicinity of each station and offer place details and photos about them. This allows tourists to better explore Singapore and for locals to be more familiar with areas beyond their usual day-to-day commute.

![Milestone 3](https://user-images.githubusercontent.com/39799639/128197929-b3eda424-881c-423a-9dc3-67ddb4b86ee5.png)



## User Stories

- As a commuter travelling on Singapore's MRT, I want to be able to quickly find the fastest train route and timings to and from various stations, as well as whether there are any delays/congestion.
- As a Singaporean who wants to be more knowledgeable about my country, I want to have an interactive way to learn about the various regions of the country in a condensed and enriching manner.
- As a Singaporean who might be venturing to a region that I might be unfamiliar with, I want to have an overview of the amenities and services around me in order to better navigate after arriving at the station.
- As a tourist visiting Singapore, I want to have an all-in-one app from which I can obtain information on the attractions of Singapore as well as transit information so that I can have a better and seamless holiday experience.


# Features 

## Interactive system map
A map of the entire MRT & LRT network with clickable stations and highlightable routes, with zoom/move functionality has been completed and incorporated into the Web App. Listed below is a summary of this component’s features:

- User can provide input by clicking on a node/station and selecting it as the Origin/Destination
- Calculates the train fare based on the user’s chosen fare group (via the dropdown list)
- Displays optimal route based on Shortest Travel Time
- Indicates real-time operability of MRT & LRT Network and alerts users to delays in the network via LTA’s API


## Directory of amenities situated around each station
- Users can search for their desired place through directories catered for each station after choosing a station from the map
- Key information on attractions/places around a station
- Leverages on Google Places API to showcase information related to the selected place-of-interest


## User Feedback/Suggestions
- In order for this application to remain relevant and current, users are invited to submit modifications or proposed amendments to existing content should they observe a change to the amenities available in that area. The feedback obtained will be reviewed by content moderators before the actual changes are implemented. 

## Possible Future Extensions
- Allow users to add in custom personal places for a certain station
- Allow users search up amenities directly and bookmark stations or places for ease of search


# Technologies used

### Front End
1. HTML/CSS/JavaScript 
2. React.js
3. Bootstrap

### Back End
1. Node.js + Express.js
2. Heroku Web Hosting
3. LTA DataMall API (https://datamall.lta.gov.sg/content/datamall/en.html)
4. Google Places and Photos API (https://developers.google.com/maps/documentation/places/web-service/overview)





