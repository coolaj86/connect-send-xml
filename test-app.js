'use strict';

var connect = require('connect')
  , app = connect()
  , send = require('./index')
  , port = 8070
  ;

app
  .use(send.xml())
  .use(function (req, res) {
    res.statusCode = 400;
    res.xml('<?xml version="1.0" encoding="UTF-8"?>'
      + '<Error>'
      + '<Message '
        + 'attachment="http://twitpic.com/3ccz0i">'
            + 'What the XMhell are you doing!?!?'
      + '</Message>'
      + '</Error>'
    );
  })
  ;

app.listen(port, function () {
  console.log('Listening on http://localhost:' + port);
});
