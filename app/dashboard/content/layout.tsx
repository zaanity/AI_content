import React from "react";
import SideNav from "../_components/SideNav";
import Header from "../_components/Header";

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="bg-slate-50 h-screen">
			<Header />
			{children}
		</div>
	);
}
