
export default async function findRestaurant(req, res, next) {
    var request = require('request');
    try {
        var key = "AIzaSyAAx50iyb6a1pLEQcwdB6QAkpnAWTe4jAQ";
        var location = "13.820569, 100.526574";//"13.805389,100.538056";
        var radius = 2000;
        var sensor = false;
        var types = "restaurant";
        var keyword = "บางซื่อ";
        var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" + "key=" + key + "&location=" + location + "&radius=" + radius + "&sensor=" + sensor + "&type=" + types + "&keyword=" + keyword;
        console.log(url);
        request(encodeURI(url), function (error, response, body) {
            // console.log('error:', error); // Print the error if one occurred
            // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            // console.log('body:', body); // Print the HTML for the Google homepage.
            const rs = JSON.parse(body);
            
            res.send({ "count": rs.results.length ,"results" :rs.results});

        });
    } catch (error) {
        res.send({ "error": error });
    }

    // res.send(provinceResponse)
}
// exports.randeats = function (req, res) {
//     var key = req.query.key;
//     var location = encodeURIComponent(req.query.location);
//     var radius = 16000;
//     var sensor = false;
//     var types = "restaurant";
//     var keyword = "fast";

//     var https = require('https');
//     var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" + "key=" + key + "&location=" + location + "&radius=" + radius + "&sensor=" + sensor + "&types=" + types + "&keyword=" + keyword;
//     console.log(url);
//     https.get(url, function (response) {
//         var body = '';
//         response.on('data', function (chunk) {
//             body += chunk;
//         });

//         response.on('end', function () {
//             var places = JSON.parse(body);
//             var locations = places.results;
//             var randLoc = locations[Math.floor(Math.random() * locations.length)];

//             res.json(randLoc);
//         });
//     }).on('error', function (e) {
//         console.log("Got error: " + e.message);
//     });
// };