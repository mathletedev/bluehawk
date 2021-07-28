import { ApolloServer } from "apollo-server-express";
import "dotenv-safe/config";
import express from "express";
import { connect } from "mongoose";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { __clientUri__, __port__ } from "./lib/constants";
import { HelloResolver } from "./resolvers/hello";
import { UserResolver } from "./resolvers/user";

(async () => {
	await connect(process.env.MONGO_URI!, {
		dbName: "bluehawk",
		useCreateIndex: true
	});

	console.log("Connected to MongoDB");

	const app = express();

	const server = new ApolloServer({
		schema: await buildSchema({
			resolvers: [HelloResolver, UserResolver],
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
