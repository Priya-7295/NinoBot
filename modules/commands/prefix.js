module.exports.config = {
	name: " ",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Duy Cute UwU",
	description: "nothing",
	commandCategory: "Admin",
	usages: "",
	cooldowns: 5
};

module.exports.run = async function({ api, event }) {
       let dny = ["Bạn đã biết.","Duy là một thằng ấu dâm.","Ngực là chân lý.","Gái gú chỉ là phù du, Nino mới là bất diệt.","Duy là một admin cute.","Bạn đang thở.","Đây là Nino Bot.","Nino không dùng sim để chém gió","Trái đất hình vuông.","Kẹo sữa Milkita được làm từ sữa.","Chim cánh cụt có thể bay."];
       api.sendMessage('[ Bạn có biết ] : ' + dny[Math.floor(Math.random()*dny.length)],event.threadID,event.messageID);
}