const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");
require("dotenv").config();

const http = require("http")
const server = http.createServer(app)
const socket = require("socket.io")
const io = socket(server)

// io.on("connection")

io.on('connection', socket => {
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })
  })
})

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Start the API server
db.sequelize.sync({}).then(function () {
  server.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}`);
  });
});
