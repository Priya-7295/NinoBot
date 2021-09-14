module.exports.config = {
	name:"ôm",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Duy Cute UwU",
	description: "Ôm nhau :))",
	commandCategory: "Tag",
	usages: "ôm",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('http://api-botchat.xyz/om.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	var mention = Object.keys(event.mentions)[0];
	let tag = event.mentions[mention].replace("@", "");
	let callback = function () {
					api.sendMessage({
					  body: tag + ", Bạn và tôi vừa ôm nhau ❤️",
                      mentions: [{
                        tag: tag,
                        id: mention
                      }],
						attachment: fs.createReadStream(__dirname + `/cache/cosplay.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cosplay.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/cosplay.${ext}`)).on("close", callback);
			})
}