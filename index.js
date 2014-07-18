'use strict';

module.exports.xml = function (opts) {
  opts = opts || {};

  function sendResponse(data) {
    /*jshint validthis:true*/
    var res = this
      ;

    if (!res) {
      throw new Error('You called `xml()`, detatched send from the response object');
    }

    if (data) {
      res.setHeader('Content-Type', 'application/xml');
      // TODO ensure valid xml?
      // add <?xml version="1.0" encoding="UTF-8"?> if not present?
    } else {
      data = undefined;
    }

    res.end(data);
  }

  function attach(req, res, next) {
    if (!res.xml) {
      res.xml = sendResponse;
    }
    next();
  }

  return attach;
};
