/**
 * Created by Anthony on 3/4/2016.
 */
var express = require('./node_modules/express');
var app = express();


app.all('/gets', function(req, res)
{
    if(req.method === 'GET'){
        res.set('Content-Type', 'text/html');
        var s = "<html><body><table>";
        for (var name in req.headers) s += '<tr><td>' + name + '</td><td>' + req.headers[name] + '</td></tr>';
        s += "</table></body></html>";
        res.send(s);
    }
    else
        res.send('Error, invalid request');
});

app.all('/posts', function(req, res)
{
    if(req.method === 'POST'){
        res.set('Content-Type', 'text/html');
        var s = "<html><body><table>";
        for (var name in req.headers) s += '<tr><td>' + name + '</td><td>' + req.headers[name] + '</td></tr>';
        s += "</table></body></html>";
        res.send(s);
    }
    else
        res.send('Error, invalid request');
});

app.all('/puts', function(req, res)
{
    if(req.method === 'PUT'){
        res.set('Content-Type', 'text/html');
        var s = "<html><body><table>";
        for (var name in req.headers) s += '<tr><td>' + name + '</td><td>' + req.headers[name] + '</td></tr>';
        s += "</table></body></html>";
        res.send(s);
    }
    else
        res.send('Error, invalid request');
});

app.all('/deletes', function(req, res)
{
    if(req.method === 'DELETE'){
        res.set('Content-Type', 'text/html');
        var s = "<html><body><table>";
        for (var name in req.headers) s += '<tr><td>' + name + '</td><td>' + req.headers[name] + '</td></tr>';
        s += "</table></body></html>";
        res.send(s);
    }
    else
        res.send('Error, invalid request');
});


app.use('*', function(req, res, next) {
    var err = new Error();
    err.status = 404;
    err.message = "Not a valid request";
    next(err);
});

// handling 404 errors
app.use(function(err, req, res, next) {
    if(err.status !== 404) {
        return next();
    }

    res.send(err.message || '** no unicorns here **');
});

app.listen(3001);
console.log("server running on http://localhost:3001/gets");