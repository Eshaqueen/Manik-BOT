fs = require('fs');
const axios = require('axios');
const path = require('path');

module.exports = {
    config: {
        name: "🙃",
        version: "1.0",
        author: "MD.MANIK KHAN", 
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
    onStart: async function() {}, 
    onChat: async function({ event, message, getLang }) {
        if (event.body && event.body.toLowerCase() == "🙃") {
            const videoUrl = "https://www.kapwing.com/videos/66863ecb541ff366243a23e1"; // Replace with your video URL
            const videoPath = path.resolve(__dirname, 'cliff.mp4');

            try {
                const response = await axios({
                    url: videoUrl,
                    method: 'GET',
                    responseType: 'stream'
                });

                const writer = fs.createWriteStream(videoPath);

                response.data.pipe(writer);

                writer.on('finish', () => {
                    const videoStream = fs.createReadStream(videoPath);
                    return message.reply({
                        body: "🙂💔🥀",
                        attachment: videoStream
                    });
                });

                writer.on('error', () => {
                    throw new Error('Error writing the video to file');
                });
            } catch (error) {
                console.error('Error downloading the video:', error);
                return message.reply("Failed to download the video.");
            }
        }
    }
};
