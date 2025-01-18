import CreatePost from "@/components/app/create-post";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
	const user = await currentUser();
	return (
		<div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
			<div className="hidden lg:block lg:col-span-6">
				{user && <CreatePost />}
			</div>
			<div className="hidden lg:block lg:col-span-4">
				{/* <WhoToFollow/> */}
				Who to follow
			</div>
		</div>
	);
}
