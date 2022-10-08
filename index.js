const {Request} = require('./ServerCode/respond.js')
const {PullMedia} = require('./media-manager.js')

const fetch = require('fetch')
const fs = require('fs')
const express = require('express');//Set up the express module
const app = express();
const router = express.Router();
const path = require('path')
router.get('/', function(req, res){
	
	Request(req.get('host')+req.url, res)
  
});
app.use('/', router);
let server = app.listen(3000, function(){
  console.log("App server is running on port 3000");
  console.log("to end press Ctrl + C");
});
router.get('/download', function(req, res){

	PullMedia(req.get('host')+req.url, res)
});