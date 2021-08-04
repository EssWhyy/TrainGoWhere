import React from 'react';
import {useState, useEffect} from 'react'
import {ArrowLeft, ArrowRight, Star, Globe, StarFill, Telephone, House} from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';


function PlaceDetailBox({ PlaceInfo, setActivePlace}){
    
    

    const samplereviews = [{
        "author_name": "",
        "author_url": "",
        "language": "",
        "profile_photo_url": "",
        "rating": "",
        "relative_time_description": "",
        "text": "",
        "time": ""
    }]

    const [name, getName] = useState("Placeholder")
    const [phone, getPhone] = useState("Phone Number")
    const [website, getWebsite] = useState("Website Link")
    const [address, getAddress] = useState("Address")
    const [rating, getRating] = useState("rating")
    const [ratingCount, getRatingCount] = useState("ratingCount") 

    const [photoIDs, setphotoIDs] = useState(["XXXXX"])
    const [photoURL, setphotoURL] = useState("https://via.placeholder.com/400x200")
    const [reviews, setReviews] = useState(samplereviews)
    //review contains rating, relative_time_description and text

    
    //executed when PlaceInfo starts/renders.
    //gets place details and photoIDs
    useEffect(() => {
        console.log("details update")
        fetch('https://testapi8888.herokuapp.com/api/google', {
            method: "POST",
            cache: "no-cache",
            headers: {
                "content_type": "text/plain",
            },
            body: PlaceInfo
        }).then(res => res.json())
            .then(data => {
                getName(data.name);
                getAddress(data.address);
                getWebsite(data.website);
                getPhone(data.phone);
                getRatingCount(data.rating_count);
                getRating(data.rating); 
                setphotoIDs(data.photos);
                setReviews(data.reviews);
            });
    }, [PlaceInfo]);

    //upon place photo ID fetch, calls google photos API to render images.
    useEffect(() => {
        console.log("Google Photos API Called")
        fetch('https://testapi8888.herokuapp.com/api/photos',
            {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "content_type": "text/plain",
                },
                body: photoIDs[0]
            }).then(res => res.text())
            .then(data => {
                setphotoURL(data)
            })
    }, [photoIDs])

    const toggle = (direction) => {
        //brings first element to back.
        if (direction === "right") {

            var ary = [...photoIDs];
            ary.push(ary.shift());
            setphotoIDs(ary);
            console.log(photoIDs);

        } else if (direction === "left") {
            //bring last element to front
            var ary = [...photoIDs];
            var last = ary.pop();
            ary.push(last);
            setphotoIDs(ary);
            console.log(photoIDs);
        }
    }

    return(
        <div style={(!(PlaceInfo == "")) ? { zIndex: '1', position: 'absolute', width: '60vw', left:'25%', margin:'auto' , opacity: '0.85'} : { display: 'none' }}>
        <div className="modal-content">
            <div className="container" style={{padding:'5%'}}>
                <h1 className="button display-topright" onClick={() => {setActivePlace("")}}>&times;</h1>
                <h1>{name}</h1>
                <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                
                
                <img src={photoURL} style={{ maxWidth: '600px', maxHeight: '500px' }}></img>
                
                    
                </div>

                <button onClick={() => { toggle("right") }}>See More Images</button>
                <hr />
                <h5><Telephone /> {phone}</h5>
                <h5><Globe />{website}</h5>
                <h5><House/>{address}</h5>

                <h4><StarFill />{rating}/5.0, {ratingCount} reviews</h4>
                <hr/>
                <h3>Sample reviews</h3>
                    <div id="reviews">{reviews.map((e) => {
                        return (<p><Star />{e["rating"]} {e["text"]} {e["relative_time_description"]}</p>);
                    })}</div>

                    <Button variant="success" onClick={() => {
                        const prefix = "https://www.google.com.sg/search?q=";
                        const searchterms = name.split(" "); //array of words
                        var suffix = searchterms.join("+")
                        var googleURL = prefix + suffix
                        window.open(googleURL, "_blank");
                    }}>Search on Google</Button>
                
            </div>
        </div>
    </div>


    )
}

export default PlaceDetailBox;