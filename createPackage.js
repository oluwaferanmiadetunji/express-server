export default (name, description, author) => {
	return `{
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
  `;
};
