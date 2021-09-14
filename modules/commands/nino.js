module.exports.config = {
    name:"nino",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DungUwU",
    description: "Nói chiện zới bot nino cute",
    commandCategory: "General",
    usages: "nino hỏi",
    cooldowns: 5
};

const axios = require('axios');

module.exports.run = async ({ api, event, args }) => {
    if (!args[0]) { api.sendMessage('hỏi gì hỏi đi ;-;', event.threadID, event.messageID) } else {
    axios.get(`https://api-ninoreply-adreno.herokuapp.com/get/${args.join(" ")}`).then(res => {
        return api.sendMessage(res.data.reply, event.threadID, event.messageID);
    })
    }
}