"use client";
import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import SideNav from "../SideNav";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		// Cleanup function to remove event listener
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div>
			<div className="p-5 shadow-sm border-b-2 bg-white flex justify-between items-center md:justify-end">
				<div className="p-1 md:hidden">
					<button
						onClick={toggleMenu}
						className="text-gray-500 focus:outline-none z-50 relative"
					>
						{isOpen ? (
							<XIcon className="w-6 h-6" />
						) : (
							<MenuIcon className="w-6 h-6" />
						)}
					</button>
				</div>
				<div className="p-1">
					<UserButton />
				</div>
			</div>

			{isOpen && (
				<div className="absolute top-0">
					<SideNav />
				</div>
			)}
		</div>
	);
}
