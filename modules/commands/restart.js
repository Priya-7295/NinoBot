module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Khởi Động Lại Bot.",
	commandCategory: "Hệ Thống",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Bot đang khởi động lại, vui lòng chờ trong giây lát 😘",event.threadID, () =>process.exit(1))