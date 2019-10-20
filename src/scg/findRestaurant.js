import config from '../config';
export default async function findRestaurant(req, res, next) {
    var request = require('request');
    try {
        // var key = "AIzaSyAAx50iyb6a1pLEQcwdB6QAkpnAWTe4jAQ";
        var key = config.keyid;
        var location = "13.820569, 100.526574";//"13.805389,100.538056";
        var radius = 2000;
        var sensor = false;
        var types = "restaurant";
        var keyword = "บางซื่อ";
        var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" + "key=" + key + "&location=" + location + "&radius=" + radius + "&sensor=" + sensor + "&type=" + types + "&keyword=" + keyword;
        request(encodeURI(url), function (error, response, body) {
            const rs = JSON.parse(body);
            
            res.send({ 'data' :rs.results});

        });
    } catch (error) {
        res.send({ "error": error });
    }

}
