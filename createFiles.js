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
			});
			// create the package.json file
			fs.writeFileSync(
				`.${PROJECT_PATH}/${name}/package.json`,
				`
{
	"name": "${name}",
	"version": "1.0.0",
	"description": "${description}",
	"main": "src/server.js",
	"scripts": {
		"start": "nodemon src/server.js"
	},
	"keywords": [],
	"author": "${author}",
	"license": "ISC",
	"dependencies": {
		"body-parser": "^1.19.0",
		"cors": "^2.8.5",
		"express": "^4.17.1",
		"mongoose": "^5.10.0"
	},
	"devDependencies": {
		"dotenv": "^8.2.0",
		"nodemon": "^2.0.4"
	}
}
			`,
				(err) => {
					if (err) throw err;
				}
			);
		}
	} catch (err) {
		console.log(err);
	}
};

const generateenvFile = (name, mongooseConnection) => {};
