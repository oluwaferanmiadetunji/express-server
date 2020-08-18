import fs from 'fs';
import {FOLDER_EXISTS_ERROR} from '../constants.js';
import createPackage from './createPackage.js';
import createENV from './createEnv.js';
import createServer from './createServer.js';
import createApp from './createApp.js';
import createConnection from './createConnection.js';
import createConfig from './createConfig.js';

// create the project folder
export const generateProject = (name, port, author, description, mongooseConnection) => {
	// check if a folder with the project name exists
	try {
		// if it exists
		if (fs.existsSync(`./${name}`)) {
			console.log(FOLDER_EXISTS_ERROR);
		} else {
			// if it doesn't exist, create the folder
			fs.mkdir(`./${name}`, (err) => {
				if (err) throw err;
			});

			// create the .env file
			fs.writeFileSync(`./${name}/.env`, createENV(mongooseConnection), (err) => {
				if (err) throw err;
			});

			// create the package.json file
			fs.writeFileSync(`./${name}/package.json`, createPackage(name, description, author), (err) => {
				if (err) throw err;
			});

			// create the src folder
			fs.mkdir(`./${name}/src`, (err) => {
				if (err) throw err;
			});

			// create the server.js file
			fs.writeFileSync(`./${name}/src/server.js`, createServer(port), (err) => {
				if (err) throw err;
			});

			// create the app.js file
			fs.writeFileSync(`./${name}/src/app.js`, createApp(), (err) => {
				if (err) throw err;
			});

			// create the utils folder
			fs.mkdir(`./${name}/src/utils`, (err) => {
				if (err) throw err;
			});

			// create the config.js file
			fs.writeFileSync(`./${name}/src/utils/config.js`, createConfig(), (err) => {
				if (err) throw err;
			});

			// create the connection.js file
			fs.writeFileSync(`./${name}/src/utils/connection.js`, createConnection(), (err) => {
				if (err) throw err;
			});
		}
	} catch (err) {
		console.log(err);
	}
};
