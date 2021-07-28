import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User, UserModel } from "../entities/user";

@Resolver()
export class UserResolver {
	@Query(() => [User])
	public async users() {
		return await UserModel.find();
	}

	@Mutation(() => User, { nullable: true })
	public async createUser(@Arg("name") name: string) {
		const user = new UserModel({ name } as User);
		await user.save();

		return user;
	}
}
