const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
	fastify.register(require('fastify-swagger'), {
		routePrefix: '/swagger',
		swagger: {
			info: {
				title: 'Fastify API Posts App',
				description: 'Fastify API Posts App',
				version: '0.1.0',
			},
			host: 'localhost:3000',
			schemes: ['https'],
			consumes: ['application/json'],
			produces: ['application/json'],
		},
		exposeRoute: true,
	})
})
