"use client";
import { Button } from "@/components/ui/button";
import { aiOutput } from "@/utils/Backend/Schema";
import { db } from "@/utils/Backend/db";
import { useUser } from "@clerk/nextjs";
import React, { useContext, useEffect, useState } from "react";
import { eq } from "drizzle-orm";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";

type Result = {
	id: number;
	formData: string;
	aiResponse: string | null;
	templateSlug: string;
	createdBy?: string;
	createdAt?: string;
};

export function UsageTrack() {
	const { user } = useUser();
	const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

	const getData = async () => {
		if (!user || !user.primaryEmailAddress?.emailAddress) return;

		const result = await db
			.select()
			.from(aiOutput)
			.where(
				eq(aiOutput.createBy, user.primaryEmailAddress.emailAddress)
			);

		getTotalUsage(result);
	};

	useEffect(() => {
		if (user) getData();
	}, [user]);

	const getTotalUsage = (result: Result[]) => {
		const total = result.reduce(
			(sum, element) => sum + (element.aiResponse?.length || 0),
			0
		);
		setTotalUsage(total);
	};

	return (
		<div className="m-5">
			<div className="bg-primary text-white p-3 rounded-lg">
				<h2 className="font-medium">Credits</h2>
				<div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
					<div
						className="h-2 bg-white rounded-full"
						style={{ width: `${(totalUsage / 10000) * 100}%` }}
					></div>
				</div>
				<h2 className="text-sm my-2">
					{totalUsage}/10,000 Credits used
				</h2>
			</div>
			{/* <Button variant="secondary" className="w-full my-3 text-primary">
				Upgrade
			</Button> */}
		</div>
	);
}
