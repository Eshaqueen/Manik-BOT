const fs = require("fs");

module.exports.config = {

 name: "funny",

    version: "1.0.1",

 hasPermssion: 0,

 credits: "MR CHAND", 

 description: "no prefix",

 commandCategory: "No command marks needed",

 usages: "...",

    cooldowns: 1, 

};



module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {

 var { threadID, messageID } = event;

 if (event.body.indexOf("🥹")==0 || (event.body.indexOf("😂")==0 || (event.body.indexOf("single")==0 || (event.body.indexOf("block")==0)))) {

  var msg = {

    body: "😬😬",

    attachment: fs.createReadStream(__dirname + `/noprefix/chand.jpg`)

   }

   api.sendMessage(msg, threadID, messageID);

  }

 }

 module.exports.run = function({ api, event, client, __GLOBAL }) {



}
