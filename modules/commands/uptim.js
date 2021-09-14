module.exports.config = {
	name: "upt",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "system",
	cooldowns: 5,
	dependencies: {
		"pidusage": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event }) => {
	function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
 const fetch = global.nodemodule["node-fetch"];
    var fetchcd = await fetch("https://raw.githubusercontent.com/HerokeyVN/API_Ca_Dao/main/CaDao.js")
    var jsoncd =  await fetchcd.json()
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
    const moment = require("moment-timezone");
    let thoigian = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
	const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);

	const pidusage = await global.nodemodule["pidusage"](process.pid);

	const timeStart = Date.now();
	return api.sendMessage("", event.threadID, () => api.sendMessage(` ≻──${pad(hours)}:${pad(minutes) }:${pad(seconds)}──≺\n\nAll Member: ${global.data.allUserID.length}\nAll Box: ${global.data.allThreadID.length}\nThời gian ${thoigian}\nHôm nay: Thứ ${day}\nNgày: ${dd+1}/${mm}/${yyyy}\nCPU: ${pidusage.cpu.toFixed(1)}%\nRAM: ${byte2mb(pidusage.memory)}\nDelay Bot: ${Date.now() - timeStart}ms\nThơ: ${jsoncd.data[String(Math.floor(Math.random() * 268) + 1)]}`, event.threadID, event.messageID));
}