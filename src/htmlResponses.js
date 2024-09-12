const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

// this function can call either client2 or client3.html
const getPage = (request, response, filePath) => {
  const page = fs.readFileSync(filePath);
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getPage = getPage;

