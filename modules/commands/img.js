module.exports.config = {
    name: "img",
    version: "3.1.0",
    hasPermssion: 0,
    credits: "Duy Cute UwU",
    description: "Hình Ảnh",
    commandCategory: "Hình Ảnh",
    usages: "[trai/gái/cosplay/nino/sally]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": ""
    }
};

module.exports.run = async function({ api, event, args }) {
    const { createReadStream, unlinkSync, writeFileSync } = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    const { threadID, messageID } = event;
    var type;
    switch (args[0]) {
        case "boy":
        case "trai":
            type = "trai";
        break;
        case "girl":
        case "gái":
            type = "gai";
        break;
        case "senyamiku":
            type = "senyamiku";
        break;
        case "cosplay":
            type = "cosplay";
        break;
        case "nino":
        	type = "nino";
        break;
        case "sally":
            type = "sally";
        break;        
        default:
            return global.utils.throwError(this.config.name, threadID, messageID);
        break;
    }
    
    var { data } = await axios.get(`http://api-botchat.xyz/${type}.php`);
    var path = __dirname + `/cache/${type}.png`;
    if (data.success == false) return api.sendMessage(data.error, threadID, messageID);
    else {
        writeFileSync(path, Buffer.from(data.data, 'utf-8'));
        return api.sendMessage({ attachment: createReadStream(path) }, threadID, () => unlinkSync(path), messageID);       
    }
}
