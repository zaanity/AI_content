import { UserProfile } from "@clerk/nextjs";
import React from "react";

function Settings() {
	return (
		<div className="p-10 w-full">
			<UserProfile routing="hash" />
		</div>
	);
}

export default Settings;
