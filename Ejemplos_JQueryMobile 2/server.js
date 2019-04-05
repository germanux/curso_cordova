var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic("D:\Dropbox\Contenido\Javascript\JQueryMobile\workspace")).listen(8080);