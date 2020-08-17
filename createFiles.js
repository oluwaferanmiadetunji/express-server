import fs from 'fs';
import {FOLDER_EXISTS_ERROR} from './constants.js';

export const generateProject = (name, port, author, description, mongooseConnection) => {
	createProjectFolder(name);
};

const createProjectFolder = (name) => {
	try {
		if (fs.existsSync(`./${name}`)) {
			throw FOLDER_EXISTS_ERROR;
		} else {
			fs.mkdir(`./${name}`, (err) => {
				if (err) {
					console.log(err);
				} else {
					return;
				}
			});
		}
	} catch (e) {
		console.log(e);
	}
};
