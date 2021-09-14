module.exports.config = {
	name:"upt",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HTHB",
	description: "Random ảnh theo api - uptime",
	commandCategory: "system",
	cooldowns: 3
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	const moment = require("moment-timezone");
	var d = new Date();
var dd = d.getDate()-1
var yyyy = d.getFullYear()
var mm = d.getMonth()+1
var ngay = "";
var day = d.getDay()
if(day == 0) ngay = "chủ nhật";
if (day == 1) ngay = "Thứ hai";
if (day == 2) ngay = "Thứ ba";
if (day == 3) ngay = "Thứ tư";
if (day == 4) ngay = "Thứ Năm";
if (day == 5) ngay = "Thứ sáu";
if (day == 6) ngay = "Thứ bảy";
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	const timeStart = Date.now();
	axios.get('https://api-botchat.xyz/nino.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `» Time : ${gio}\n» Uptime : ${hours}:${minutes}:${seconds}.\n» Prefix : ${global.config.PREFIX}\n» Version: 1.2.15\n» User : ${global.data.allUserID.length}\n» Box : ${global.data.allThreadID.length}\n» Cpu : ${pidusage.cpu.toFixed(1)} %\n» Ram : ${byte2mb(pidusage.memory)}\n» Ping : ${Date.now() - timeStart}ms`,
						attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})
}