const express = require('express');
const morgan = require('morgan');
const expHbs = require('express-handlebars');
const path = require('path');

// Initializanions
const app = express();

// Settings
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expHbs({ // Only the motor is configured but isnt being used
    defaultLayout: 'main', // Commons parts the own application
    layoutsDir: path.join(app.get('views'), 'layouts'), // /home/leo/Proyectos/GestionCuentas/src/views/layouts
    partialsDir: path.join('views', 'partials'), // /home/leo/Proyectos/GestionCuentas/src/views/partials
    extname: '.hbs', // The file extension will be .hbs instead .handlebars,
    helpers: require('./lib/handlebars') // File to create functions
}));
app.set('view engine', '.hbs'); // Using motor

// Middlewares: Functions that are executed every time a client makes a request to the server
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); // Only accepts string data from form but no complex files like images
app.use(express.json()); // Allow to receive json data from forms

// Global variables
app.use((req, res, next) => {
    next();
});

// Routes
app.use(require('./routes/index.js'));

// Public
app.use(express.static(path.join(__dirname, 'public')))

// Starting the server
app.listen(app.get('port'), () => { // Port created in the line 7
    console.warn('Server on the port: ', app.get('port'));
});