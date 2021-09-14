module.exports.config = {
	name: "top",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Duy Cute UwU",
   description: "Bảng xếp hạng",
	commandCategory: "Hệ Thống",
	usages: "",
	cooldowns: 1,
	dependencies: [],
  
};

module.exports.run = async({api,event,args,Currencies}) => {
	var fs = require("fs-extra");
	var request = require("request");  // Covernt exp to level
    function expToLevel(point) {
	if (point < 0) return 0;
	return Math.floor((Math.sqrt(1 + (4 * point) / 3) + 1) / 2);
    }
    if(args.length == 0) api.sendMessage("Bạn đang muốn xem loại Top nào :\n.top user\n.top tinnhan\n.top money", event.threadID, event.messageID)
    //level
    if (args[0] == "user") { 
    let all = await Currencies.getAll(['userID', 'exp']);
				all.sort((a, b) => b.exp - a.exp);
				let num = 0;
	             let msg = {
					body: '» Top 10 người dùng rank cao nhất sever «',
					
				}
				for (var i = 0; i < 10; i++) {
					    let data = await api.getUserInfo(all[i].userID);
   
					let level = expToLevel(all[i].exp);
					let name = await data[all[i].userID].name;
  
					num += 1;
					msg.body += '\n' + num + '. ' + name + ' - Level ' + level;}
                    api.sendMessage(msg, event.threadID, event.messageID)
		}
	
 if (args[0] == "money") { 
    let all = await Currencies.getAll(['userID', 'money']);
				all.sort((a, b) => b.money - a.money);
				let num = 0;
	             let msg = {
					body: '» Top 10 người dùng giàu nhất sever «',
					
				}
				for (var i = 0; i < 10; i++) {
					    let data = await api.getUserInfo(all[i].userID);
   
					let level = all[i].money;
					let name = await data[all[i].userID].name;
                    
					num += 1;
					msg.body += '\n' + num + '. ' + name + ': ' + level + " VND";}
                    console.log(msg.body)
                    api.sendMessage(msg, event.threadID, event.messageID)
		}
  if (args[0] == "tinnhan") { 
    let all = await Currencies.getAll(['userID', 'exp']);
				all.sort((a, b) => b.exp - a.exp);
				let num = 0;
	             let msg = {
					body: '» Top 10 đứa lắm mồm nhất sever «',
					
				}
				for (var i = 0; i < 10; i++) {
					    let data = await api.getUserInfo(all[i].userID);
   
					let level = all[i].exp;
					let name = await data[all[i].userID].name;
                    
					num += 1;
					msg.body += '\n' + num + '. ' + name + ': ' + level + " tin nhắn";}
                    console.log(msg.body)
                    api.sendMessage(msg, event.threadID, event.messageID)
		}
	}