"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Loader2Icon } from "lucide-react";
import { toggleFollow } from "@/actions/user.action";

export default function FollowButton({ userId }: { userId: string }) {
	const [isLoading, setIsLoading] = useState(false);

	const handleFollow = async () => {
		setIsLoading(true);
		try {
			await toggleFollow(userId);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Button
			variant={"secondary"}
			size={"sm"}
			disabled={isLoading}
			onClick={handleFollow}
			className="w-20"
		>
			{isLoading ? (
				<Loader2Icon className="size-4 animate-spin" />
			) : (
				"Follow"
			)}
		</Button>
	);
}
