import fs from 'fs';
import {FOLDER_EXISTS_ERROR, PROJECT_PATH} from '../constants.js';
import createPackage from './createPackage.js';
import createENV from './createEnv.js';
import createServer from './createServer.js';
import createApp from './createApp.js';

// create the project folder
export const generateProject = (name, port, author, description, mongooseConnection) => {
	// check if a folder with the project name exists
	try {
		// if it exists
		if (fs.existsSync(`.${PROJECT_PATH}/${name}`)) {
			console.log(FOLDER_EXISTS_ERROR);
		} else {
			// if it doesn't exist, create the folder
			fs.mkdir(`.${PROJECT_PATH}/${name}`, (err) => {
				if (err) throw err;
			});
			// create the .env file
			fs.writeFileSync(`.${PROJECT_PATH}/${name}/.env`, createENV(mongooseConnection), (err) => {
				if (err) throw err;
			});
			// create the package.json file
			fs.writeFileSync(`.${PROJECT_PATH}/${name}/package.json`, createPackage(name, description, author), (err) => {
				if (err) throw err;
			});
			// create the src folder
			fs.mkdir(`.${PROJECT_PATH}/${name}/src`, (err) => {
				if (err) throw err;
			});
			// create the server.js file
			fs.writeFileSync(`.${PROJECT_PATH}/${name}/src/server.js`, createServer(port), (err) => {
				if (err) throw err;
			});

			// create the app.js file
			fs.writeFileSync(`.${PROJECT_PATH}/${name}/src/app.js`, createApp(), (err) => {
				if (err) throw err;
			});
		}
	} catch (err) {
		console.log(err);
	}
};

const generateenvFile = (name, mongooseConnection) => {};
