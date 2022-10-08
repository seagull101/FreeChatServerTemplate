function PullMedia(request, res){
	try{
	var command = request.split('/?=')[1]
	  const file = `${__dirname}/Server-Media/`+command;
	res.sendFile(file)
  //res.download(file); // Set disposition and send it.
	}catch(e){
		
	}
}

module.exports = {PullMedia}