// Output a prompt
var command = require('./command');
// var userCommand = 'pwd';
// var userCommand ='ls';

// command[userCommand]();

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
 		 var cmd = data.toString().trim(); // remove the newline
 		 var inputString = cmd.split(" ");
 		 var commandInput = inputString[0];
 		 var additionalInput = inputString.slice(1).join(" ");
 		 //var input= argumentsString.split(" ");
 		 command[commandInput](additionalInput);
});

