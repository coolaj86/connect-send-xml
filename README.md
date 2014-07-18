connect-send-xml
=================

Adds the `response.xml()` middleware to connect and connect-like http stacks.

Usage
=====

```javascript
'use strict';

var connect = require('connect')
  , app = connect()
  , send = require('connect-send-xml')
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
    });
  })
  ;

module.exports = app;
```
