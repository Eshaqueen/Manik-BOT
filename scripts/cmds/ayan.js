module.exports = {
    config: {
        name: "MANIK",
        version: "1.0",
        author: "MD.MANIK KHAN", //** original author fb I'd : https://m.me/MR.AYAN.2X **//
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "ayan") return message.reply("আমাকে বলতে পারেন বস ঘুমাইছে-!!🥀");
}
}; 
