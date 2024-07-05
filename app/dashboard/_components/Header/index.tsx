import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

export default function Header() {
	return (
		<div className="p-5 shadow-sm border-b-2 bg-white flex justify-end items-center flex-col md:flex-row">
			<div className="p-1">
				<UserButton />
			</div>
		</div>
	);
}
