import {createInterface} from 'readline';
import {DEFAULT_PORT} from './constants.js';

const rl = createInterface(process.stdin, process.stdout);

let port, name, description, author;

rl.question('What is your project name: ', (projectName) => {
	rl.question('What port do you want to run it on? (5000) ', (projectPort) => {
		rl.question('Project Author: ', (projectAuthor) => {
			rl.question('Project Description: ', (projectDescription) => {
				name = projectName.trim().toLowerCase();
				port = projectPort ? projectPort : DEFAULT_PORT;
				description = projectDescription ? projectDescription.trim() : '';
				author = projectAuthor ? projectAuthor.trim() : '';
				rl.close();
			});
		});
	});
});

rl.on('close', function () {
	console.log(`Your project (${name})'s server will run on port ${port}, author: ${author}, description: ${description}`);
	process.exit();
});
