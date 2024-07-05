"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { UsageTrack } from "../UsageTrack";

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
		<div className="h-screen p-5 relative shadow-sm border bg-white z-10 w-[300px] md:w-full">
			<div className="flex justify-center">
				<Image src={"/logo.svg"} alt="logo" width={120} height={100} />
			</div>

			<hr className="my-6 border" />

			<div className="mt-3">
				{MenuList.map((menu) => {
					return (
						<Link
							href={menu.path}
							key={menu.id}
							className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
								path === menu.path
									? "bg-primary text-white"
									: ""
							}`}
						>
							<menu.icon className="w-6 h-6" />
							<h2 className="text-lg">{menu.name}</h2>
						</Link>
					);
				})}
			</div>
			<div className="absolute bottom-10 left-0 w-full">
				<UsageTrack />
			</div>
		</div>
	);
}
