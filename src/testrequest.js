const request = require('request');

request('http://datamall2.mytransport.sg/ltaodataservice/PV/Train', {
        'AccountKey': 'WeuEX17ESWagD8F/CYKbBw==',
        'accept': 'application/json'
    } , (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
});