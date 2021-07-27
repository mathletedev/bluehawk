import { ApolloServer } from "apollo-server-express";
import "dotenv-safe/config";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { __clientUri__, __port__ } from "./lib/constants";
import { HelloResolver } from "./resolvers/hello";

(async () => {
	const app = express();

	const server = new ApolloServer({
		schema: await buildSchema({
			resolvers: [HelloResolver],
			validate: false
		})
	});

	server.applyMiddleware({
		app,
		cors: { origin: __clientUri__, credentials: true }
	});

	app.listen(__port__, () =>
		console.log(
			`🚀 Server started at http://localhost:${__port__}${server.graphqlPath}`
		)
	);
})();
