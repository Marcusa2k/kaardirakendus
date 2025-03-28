const http = require("http");
const fs = require("fs");
const port = 8080;


function readJson(filePath){
	let jsonData = "";
	try {
		const fileData = fs.readFileSync(filePath);
		JSON.parse(fileData);
		jsonData = fileData;

	} catch(error){
		console.error(error);
	}
	return jsonData;
};

const server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "application/json"});
	let applicationPath = __dirname + "/applications/index.json";
	const url = request.url;

	if (url === "/YS001"){
		applicationPath = __dirname + "/applications/YS001.json";
	}

	response.end(readJson(applicationPath));
});

server.listen(port, function(error){
	if (error) {
		console.error("Something went wrong", error)
	} else {
		console.log("Server listening on port", port);
	}
});
