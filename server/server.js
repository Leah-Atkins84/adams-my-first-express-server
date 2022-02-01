// require express
// gives us a function
const express = require('express');

// create an instance of express by calling the function
// gives us an object
const app = express();

const port = 5000;

// express static file serving
// folder name is server/public
app.use(express.static('server/public'));

// let quoteList = [
//     { text: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
//     { text: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
//     { text: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
//   ];
  const quoteList = require('./modules/quoteList.js');

  // when we visit localhost:500/quotes in our browser, express will call this function
  app.get('/quotes', function(req, res){
     console.log('Request at /quotes was made', req);
     res.send(quoteList);
     //res.sendStatus(500);
  })

// start up our server
app.listen(port, function () {
    console.log('listening to port', port);
});


