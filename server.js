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
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
     
else if (page == '/api') {
    // Object for food types
      
        res.writeHead(200, {'Content-Type': 'application/json'});
        const typeOfCuisine = {
          '1': {
            'typeOfFood': 'Italian',
        },
    
        '2': {
          'typeOfFood': 'Chinese',
        },
    
        '3': {
            'typeOfFood': 'French',
        },

        '4': {
           'typeOfFood': 'Mexican',
        },

        '5': {
           'typeOfFood': 'Indian',
        },

        '6': {
           'typeOfFood': 'Greek',
        },

        '7': {
           'typeOfFood': 'Thai',
        },

        '8': {
           'typeOfFood': 'Japanese',
        },

        '9': {
           'typeOfFood': 'Pakistani',
        },

        '10': {
           'typeOfFood': 'Korean',
        }

      }
    //math.random function
      const totalCuisineTypes = Object.keys(typeOfCuisine).length;
      const randomIndex = Math.floor(Math.random() * totalCuisineTypes) + 1;
      const randomKey = randomIndex.toString();
      const randomValue = typeOfCuisine[randomKey];
  
    //respond with the random value as a json
    res.end(JSON.stringify(randomValue));

  }

  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
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
