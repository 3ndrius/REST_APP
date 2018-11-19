const restify = require('restify');
const mongoose = require('mongoose');
const config = require('./config');
const rjwt = require('restify-jwt-community');
const corsMiddleware = require('restify-cors-middleware')
const server = restify.createServer();

// Middleware
const cors = corsMiddleware({
  preflightMaxAge: 15, //Optional
  origins: ['http://localhost:3000', 'http://localhost:4000'],
  allowHeaders: ['Authorization'],
  exposeHeaders: ['API-Token-Expiry'],
  credentials: true,
  methods: ['GET','HEAD','PUT','POST','DELETE'],
})

server.pre(cors.preflight);
server.use(cors.actual);

server.use(restify.plugins.bodyParser());

// Protect Routes
server.use(rjwt({ secret: config.JWT_SECRET }).unless({ path: ['/auth', '/customers', '/register'] }));

server.listen(config.PORT, () => {
  mongoose.set('useFindAndModify', false);
  mongoose.connect(
    config.MONGODB_URI,
    { useNewUrlParser: true }
  );
});

const db = mongoose.connection;

db.on('error', err => console.log(err));

db.once('open', () => {
  require('./routes/customers')(server);
  require('./routes/users')(server);
  console.log(`Server started on port ${config.PORT}`);
});