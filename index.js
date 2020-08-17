const readline = require('readline');
const {DEFAULT_PORT} = require('./constants');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let port;

rl.question('What port do you want to run it on? (5000) ', (portInput) => {
	const pattern = /^\d+$/;
	if (portInput) {
		if (pattern.test(portInput)) {
			port = portInput;
		} else {
			console.log('The port must be of type: Integer');
		}
	} else {
		port = DEFAULT_PORT;
	}

	rl.close();
});

rl.on('close', function () {
	console.log(`Your server will run on port ${port}`);
	process.exit(0);
});
