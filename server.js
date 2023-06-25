const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

  else if (page == '/api') {
    // Object for food types
    const typeOfCuisine = [
      { 'typeOfFood': 'Italian' },
      { 'typeOfFood': 'Chinese' },
      { 'typeOfFood': 'French' },
      { 'typeOfFood': 'Mexican' },
      { 'typeOfFood': 'Indian' },
      { 'typeOfFood': 'Greek' },
      { 'typeOfFood': 'Thai' },
      { 'typeOfFood': 'Japanese' },
      { 'typeOfFood': 'Pakistani' },
      { 'typeOfFood': 'Korean' }
    ];

    //math.random function
    const randomIndex = Math.floor(Math.random() * typeOfCuisine.length);
    const randomValue = typeOfCuisine[randomIndex];
  
    res.writeHead(200, { 'Content-Type': 'application/json' });
    //respond with the random value as a json
    res.end(JSON.stringify(randomValue));

  }

  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
