export default (data) => {
	return `const http = require('http');
const app = require('./app');
const connection = require('./utils/dbConnection');

// setting server post
const PORT = process.env.PORT || ${data};

// creatinng the server
const server = http.createServer(app);

connection.on('open', () => {
  console.log('Connection to MongoDB Atlas established successfully');
});

server.listen(PORT, () => console.log('Server running at PORT: ', PORT));
  `;
};
