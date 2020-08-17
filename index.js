import {createInterface} from 'readline';
import {DEFAULT_PORT} from './constants.js';

const rl = createInterface(process.stdin, process.stdout);

let port, projectName;

rl.question('What is your project name: ', (name) => {
	rl.question('What port do you want to run it on? (5000) ', (portInput) => {
		projectName = name.toLowerCase();
		port = portInput ? portInput : DEFAULT_PORT;
		rl.close();
	});
});

rl.on('close', function () {
	console.log(`Your project (${projectName})'s server will run on port ${port}`);
	process.exit();
});
