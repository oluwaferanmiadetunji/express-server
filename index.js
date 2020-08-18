#! /usr/bin/env node
import {createInterface} from 'readline';
import {DEFAULT_PORT, DEFAULT_NAME} from './constants.js';
import {generateProject} from './helperFunctions/createFiles.js';

const rl = createInterface(process.stdin, process.stdout);

let name, port, description, author, mongooseConnection, answer;

rl.question(`Project Name (${DEFAULT_NAME}): `, (projectName) => {
	rl.question(`Port number (${DEFAULT_PORT}): `, (projectPort) => {
		rl.question('Project Author: ', (projectAuthor) => {
			rl.question('Project Description: ', (projectDescription) => {
				rl.question('Mongo DB connection string: ', (projectConnection) => {
					rl.question('Proceed? (Y/n) ', (value) => {
						name = projectName ? projectName.split(' ')[0].trim().toLowerCase() : DEFAULT_NAME;
						port = projectPort ? projectPort : DEFAULT_PORT;
						description = projectDescription ? projectDescription.trim() : '';
						author = projectAuthor ? projectAuthor.trim() : '';
						mongooseConnection = projectConnection ? projectConnection : '';
						answer = value ? value.trim().toLowerCase() : 'y';
						if (answer == 'y' || answer == 'yes') {
							generateProject(name, port, author, description, mongooseConnection);
						}
						rl.close();
					});
				});
			});
		});
	});
});

rl.on('close', function () {
	process.exit();
});
