// server.js
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/getVideo', async (req, res) => {
    const fbUrl = req.query.url;
    if(!fbUrl) return res.json({success:false});

    try{
        // Third-party service API (example) to get video URL
        const apiResponse = await axios.get(`https://api.savefrom.net/?url=${encodeURIComponent(fbUrl)}`);
        // Let's assume apiResponse.data.video contains the direct download URL
        const videoUrl = apiResponse.data.video;
        res.json({success:true, videoUrl});
    }catch(e){
        res.json({success:false});
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
