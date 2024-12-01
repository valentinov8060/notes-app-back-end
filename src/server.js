const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const process = require('process');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    // same-origin policy
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // Menambahkan rute
  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();