module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Duy Cute UwU",
  description: "Kiểm tra thông tin Admin",
  commandCategory: "Thông Tin",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "fs-extra": "",
    "request": ""
}
};

module.exports.run = async({ api, event, args, Currencies}) => {
  const fs = global.nodemodule["fs-extra"];
	const request = global.nodemodule["request"];
	if (!args[0]) {
	let data = await api.getUserInfo(646492314);
    let url = data[646492314].profileUrl;
    let k = (await Currencies.getData(646492314)).money;
    let name = await data[646492314].name;
    var sex = await data[646492314].gender;
    var gender = sex == 2 ? "Nam ♂️" : sex == 1 ? "Nữ ♀️" : "Trần Đức Bo";
    var content = args.join(" ");
    var callback = () => api.sendMessage({
      body: `🔰 Tên: ${name} ✅\n⚛️ UID: 646492314\n🔗 Link FB: ${url}\n🚻 Giới tính: ${gender}\n🥺 Zalo: 0963648822\n✡️ Sở thích: Nghe nhạc, học code dạo và đặc biệt là xem Anime` , attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
    return request(encodeURI(`https://graph.facebook.com/646492314/picture?width=512&height=512&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
	}
}