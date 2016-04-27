var fs = require('fs');
var request = require('request');

module.exports = {

	pwd: function(file){
  		console.log(process.cwd());
  		process.stdout.write('\nprompt > ');
		
	},

	ls: function(file){
		fs.readdir('.', function(err, files) {
  		if (err) throw err;
  		files.forEach(function(file) {
    		process.stdout.write(file.toString() + "\n");
  		})
  		process.stdout.write("prompt > ");
		});
	},

	echo: function(file){
		console.log(file);
		process.stdout.write("prompt > ");
	},

	cat: function(file){
		fs.readFile(file, 'utf8', function(err, contents){
			console.log(contents)
			process.stdout.write("prompt > ");
		})
	},

	head: function(file){
		fs.readFile(file, 'utf8', function(err, contents){
			var lines = contents.split("\n");
			var headArray = lines.slice(0, 5);
			console.log(headArray.join('\n'));
			process.stdout.write("prompt > ");
		})
		
	},

	tail: function(file){
		fs.readFile(file, 'utf8', function(err, contents){
			var lines = contents.split("\n")
			var headArray = lines.splice(-6);
			console.log(headArray.join('\n'));
			process.stdout.write("prompt > ");
		})

	},



	 curl: function(file){
	 	console.log(file);
		request(file, function(error, response, body){
			if (!error && response.statusCode === 200){
				console.log(body);
				process.stdout.write("prompt > ");
			}
		})
			

	 },



	// sort: function(file){
	// 	fs.readFile(file, 'utf8', function(err, contents){
	// 		var contentArray = contents.split("\n");

	// 		for(var i = 0; i <contentArray.length; i++){
	// 			//do something with content.Array[i]--> charCodeAt(0)
	// 		}
	// 	})
	// },



}