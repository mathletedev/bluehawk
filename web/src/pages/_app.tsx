import {
	ApolloClient,
	ApolloProvider,
	createHttpLink,
	InMemoryCache
} from "@apollo/client";
import { AppProps } from "next/app";
import { FC } from "react";
import { __serverUri__ } from "../lib/constants";

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: createHttpLink({
		uri: __serverUri__,
		credentials: "include"
	})
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
};

export default App;
