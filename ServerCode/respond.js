//---------------------------
//Respond.js
// Purpose: Respond to requests
//---------------------------
const {serverjson,rootfolder, serverurl} = require('/home/runner/FreeChatServerTemplate/server-info.js')


//Set Global Variables
const {ConsoleColors} = require('./consolestyle.js')
const fs = require('fs')
var server;
fs.readFile(serverjson,(err, data)=>{
	var ndata = JSON.parse(data.toString())
	server = ndata;
	return ndata;
})
var GLOBAL_RES

function Send(nbt){
	var realNBT = JSON.parse(nbt)
	for(i=0;i<server.TextChannels.length;i++){
		if(server.TextChannels.length[id] == realNBT.channelid){
			server.TextChannels.length[id].Messages[server.TextChannels.length[id].Messages.length] = realNBT.message
		}
	}
}

function SendResponse(json){
		fs.writeFile("./ServerCode/response.json",json, function(err) {
    if(err) {
        return console.error(err);
    }
		GLOBAL_RES.sendFile(rootfolder+'ServerCode/response.json');
    console.log("File saved successfully!");
});
}

function ServerData(nbt){
console.log(nbt)
	if(nbt === "{NULL}"||null||undefined){
		//get if warn is null
		var warn = `"${server.ServerWarn}"`
		if( server.ServerWarn == null){
			warn = `${server.ServerWarn}`
		}
		SendResponse(`{ "Error":{}, "Result":{"ServerName":"${server.ServerName}","ServerDesc":"${server.ServerDesc}","ServerWarn":${warn},"MediaIcon":"${server.MediaIcon}"} }`)
	}else{
		var realNBT = JSON.parse(nbt)
		if(realNBT.Type === "Channel"&&realNBT.Key === "NULL"){
			try{
				//Get response, then push it, I can't belive you don't have your key!
				var userid = 0;
				var channels = server.TextChannels;
				var resultchannels = []
				for(i=0; i < server.TextChannels.length; i++){
					if(channels[i].Blacklist.length == 0){
						resultchannels[resultchannels.length] = channels[i]
					}
					for(ib=0; ib < channels[i].Blacklist.length; ib++){
						if(channels[i].Blacklist[ib].UserID == userid&&channels[i].Blacklist[ib].Viewable == false){
							var chanel = channels[i];
							chanel.Messages = null
							resultchannels[resultchannels.length] = chanel
						}else{
							resultchannels[resultchannels.length] = channels[i]
						}
					}
				}
				SendResponse(`{"Error":{},"Result":{"Channels":${JSON.stringify(resultchannels)}}}`)
			}catch(e){
				
			}
		}
	}
	
}

function Ping(){
SendResponse('{ "Error":{}, "Result":"Pong!" }')
	
}








function Request(request, res) {
	//Reload Server.json
	fs.readFile(serverjson,(err, data)=>{
	var ndata = JSON.parse(data.toString())
	server = ndata;
	return ndata;
})
	//Take order
	console.log(request)
	console.log(ConsoleColors.blue,'Received Response! ')
	try{
		//Get command and json
		request = request.replaceAll('%7B','{')
		request = request.replaceAll('%7D','}')
		request = request.replaceAll('%22','"')
		var command = request.split('/?')[1].split('{')[0]
		try{
		var nbt = request.replace(request.split('/?')[0]+'/?'+command,'')
		}catch(e){
			nbt = null;
		}
		//Commands
		GLOBAL_RES = res
		if(command == "ping")
			Ping() //Voids do not need nbt data	
		if(command == "serverData")
			ServerData(nbt)
		if(command == "send")
			SendMessage(nbt) 
		if(command != "send"&&command != "ping"&&command != "serverData"){
			console.log(ConsoleColors.yellow, "Passed Error Code 1")
			SendResponse('{ "Error":{ "Code":1, "Text":"Function does not exist!" }, "Result":{} }')
	}
		
	}catch(e){
		GLOBAL_RES = res
		console.log(ConsoleColors.yellow,'Could Not Read Request')
		//console.log(e)
			SendResponse('{ "Error":{ "Code":0, "Text":"The server cannot handle your request!" }, "Result":{} }')
	}
}



const methods = {Request}
module.exports = methods;