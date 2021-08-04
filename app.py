from flask import Flask, request
from flask_cors import CORS
import requests
import re

#Enable CORS bypass or it will run into an error.
app = Flask(__name__)
cors = CORS(app)

#For LTA API, gets train service updates, breakdowns and delays. 
ltaurl = "http://datamall2.mytransport.sg/ltaodataservice/TrainServiceAlerts"
headers = {'AccountKey': '',
           'accept': 'application/json'}


@app.route('/api/lta', methods=['GET'])
def get_lta_updates():
    

    r2 = requests.get(ltaurl, headers=headers)
    if r2.status_code != 200:
        return {'status': "All train lines functional, no breakdowns or delays"}
    

    data2 = r2.json()

    if data2['value']['Status'] == "1" or data2['value']['Status'] == 1:
        return {'status': "All train lines functional, no breakdowns or delays"}
    else:
        return {'status': data2['value']['Message'][0]}
    

#For Google Places API, gets info on place, photoID will be sent to Google Photos API (POST)
googleurl = "https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyDElKEFqt0kMfvwwCaT79Jtok9IOTPViVY&place_id=ChIJxSktZdg82jER2AKtkdhJ7yM&fields=formatted_phone_number,website,rating,user_ratings_total"
googlePrefix = "https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyDElKEFqt0kMfvwwCaT79Jtok9IOTPViVY&place_id="
googleSuffix = "&fields=name,formatted_address,photo,formatted_phone_number,website,rating,user_ratings_total,review"

@app.route('/api/google', methods = ["GET", "POST"])
def get_googleplaces_updates():

    placeID = str(request.get_data())[2:-1]
    print(placeID)
    #As requested from the React App
    #Example: "ChIJq8UGJo4a2jER0ypiQDLiXpg"
    
    newurl = googlePrefix + placeID + googleSuffix
    #get the working url for the request

    #get details for each place
    r1 = requests.get(newurl, auth=('user', 'pass'))
    
    if r1.status_code == 200:

        data1 =r1.json()

        #If Place ID is invalid.
        if data1['status'] != "OK":
            print (data1['status'])
            return {
                'name': 'Placeholder',
                'address': 'Failed to Fetch',
                'phone': 'Failed to Fetch',
                'website': 'Failed to Fetch',
                'rating': 'Failed to Fetch',
                'rating_count': 'Failed to Fetch',
                'photos': ['XXXXXXX'],
                'reviews': [{"rating": "", "relative_time_description": "",
                             "text": ""}]
            }

        photoIDs = []
        #limit to 3 photos
        try:
            for photo in data1['result']['photos'][:3]: 
                photoIDs.append(photo['photo_reference'])
        except:
            photoIDs = ['XXXXXXX']
        
        #limit to 3 reviews
        reviews = []
        try:
            for review in data1['result']['reviews'][:3]:
                reviews.append(review)
        except:
            reviews = [{"rating": "", 
            "relative_time_description": "",
            "text": ""}]

        try:
            name = data1['result']['name']
        except:
            name = "N/A"
        try:
            address = data1['result']['formatted_address']
        except:
            address = "N/A"
        try:
            phone = data1['result']['formatted_phone_number']
        except:
            phone = "N/A"
        try:
            website = data1['result']['website']
        except:
            website = "N/A"
        try:
            rating = data1['result']['rating']
        except:
            rating = "N/A"
        try:
            rating_count = data1['result']['user_ratings_total']
        except:
            rating_count = "N/A"



        print("places data get success")
        return {
            'name': name,
            'address': address,
            'phone': phone,
            'website': website,
            'rating': rating,
            'rating_count': rating_count,
            'photos': photoIDs,
            'reviews': reviews
            
        }
    
        
    #If Place ID is unavailable.
    return {
        'name': 'Placeholder',
        'address': 'Failed to Fetch',
        'phone': 'Failed to Fetch',
        'website': 'Failed to Fetch',
        'rating': 'Failed to Fetch',
        'rating_count': 'Failed to Fetch',
        'photos': ['XXXXXXX'],
        'reviews': [{"rating":"", "relative_time_description": "",
        "text": ""}]
    }



photoPrefix = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="
photoSuffix = "&key=AIzaSyDElKEFqt0kMfvwwCaT79Jtok9IOTPViVY"


#For Google Photos API, gets train service updates, breakdowns and delays.
@app.route('/api/photos', methods = ["GET", "POST"])
def get_googlephotos():

    photoRef = str(request.get_data())[2:-1]
    print(photoRef)
    newurl = photoPrefix + photoRef + photoSuffix
    
    
    #response would be a html file/text with link to photo
    r3 = requests.get(newurl, auth=('user', 'pass'),
                      stream=True, allow_redirects=False) #don't redirect.

    if r3.status_code == 302 or r3.status_code == 200:
        try:
            pattern = "<a href=.*>here"
            #Use regex to get the url.
            #<A HREF="https://lh3.googleusercontent.com/p/AF1QipOMBGeyvES0WAgacehgi5G_-O4g7oUX9lEyBUR7=s1600-w400">here</A>
            html = str(r3.content)
            result = re.search(pattern, html, re.IGNORECASE).group(0)[9:-6]
            print("photo get success")
            return result
        except:
            return "https://via.placeholder.com/400x200"

        
    else:
        #If Place ID is invalid/unavailable, return a placeholder photo url
        return "https://via.placeholder.com/400x200"
