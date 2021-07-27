import { gql, useQuery } from "@apollo/client";
import { FC } from "react";
import Loading from "../components/common/Loading";

const HELLO_QUERY = gql`
	query Hello {
		hello
	}
`;

const Index: FC = () => {
	const { loading, data } = useQuery(HELLO_QUERY);
	if (loading) return <Loading />;

	return <p>{data.hello}</p>;
};

export default Index;
