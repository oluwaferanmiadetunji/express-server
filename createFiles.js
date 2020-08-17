import fs from 'fs';
import {FOLDER_EXISTS_ERROR, PROJECT_PATH} from './constants.js';

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
			fs.writeFileSync(`.${PROJECT_PATH}/${name}/.env`, `MONGO_DB_URI=${mongooseConnection}`, (err) => {
				if (err) throw err;
				else console.log('File created suuccessfully');
			});
		}
	} catch (err) {
		console.log(err);
	}
};

const generateenvFile = (name, mongooseConnection) => {};
