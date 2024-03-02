const express = require('express');
const app = express();
const path = require('path');

app.use('projects/slovarica', express.static(path.join(__dirname, 'projects/slovarica')));
app.use('projects/dentalcentar', express.static(path.join(__dirname, 'projects/dentalcentar')));
app.use('projects/oliveoil', express.static(path.join(__dirname, 'projects/oliveoil')));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(function (req, res) {
	res.redirect('/');
});

app.listen(3000, function () {
	console.log('Server is running on port 3000!');
});
