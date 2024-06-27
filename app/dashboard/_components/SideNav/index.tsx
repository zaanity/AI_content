"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function SideNav() {
	const MenuList = [
		{
			name: "Home",
			icon: Home,
			path: "/dashboard",
			id: 1,
		},
		{
			name: "History",
			icon: FileClock,
			path: "/dashboard/history",
			id: 2,
		},
		{
			name: "Billing",
			icon: WalletCards,
			path: "/dashboard/billing",
			id: 3,
		},
		{
			name: "Setting",
			icon: Settings,
			path: "/dashboard/setting",
			id: 4,
		},
	];

	const path = usePathname();
	// useEffect(() => {
	// 	console.log(path);
	// }, []);

	return (
		<div className="h-screen p-5 shadow-sm border bg-white">
			<div className="flex justify-center">
				<Image src={"/logo.svg"} alt="logo" width={120} height={100} />
			</div>

			<hr className="my-6 border" />
			<div className="mt-3">
				{MenuList.map((menu) => {
					return (
						<div
							key={menu.id}
							className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
								path === menu.path
									? "bg-primary text-white"
									: ""
							}`}
						>
							<menu.icon className="w-6 h-6" />
							<h2 className="text-lg">{menu.name}</h2>
						</div>
					);
				})}
			</div>
		</div>
	);
}
