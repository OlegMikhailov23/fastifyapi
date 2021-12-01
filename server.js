const app = require("fastify")({logger: true});
const PORT = 5000;

app.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {title: 'fastify-api'},
    },
});
app.register(require('./routes/itemRoutes'));

const start = async () => {
    try {
        await app.listen(PORT);
    } catch (e) {
        app.log.error(e);
        process.exit(1);
    }
}

start();
