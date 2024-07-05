"use client";
import React, { useEffect, useState } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { aiOutput } from "@/utils/Backend/Schema";
import { db } from "@/utils/Backend/db";
import { asc, desc, eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import { handleCopyClick } from "@/utils/handleCopyClick";

export default function History() {
	const [historyData, setHistoryData] = useState<any[]>([]);
	const { user } = useUser();

	useEffect(() => {
		const fetchHistoryData = async () => {
			try {
				if (
					!user ||
					!user.emailAddresses ||
					user.emailAddresses.length === 0
				) {
					if (user) {
						console.error("No email address found for the user.");
					}
					return;
				}

				const emailAddress = user.emailAddresses[0].emailAddress;

				const result = await db
					.select({
						id: aiOutput.id,
						template: aiOutput.templateSlug,
						aiResp: aiOutput.aiResponse,
						date: aiOutput.createAt,
					})
					.from(aiOutput)
					.where(eq(aiOutput.createBy, emailAddress))
					.orderBy(asc(aiOutput.createAt))
					.execute();

				const dataWithWordsLength = result.map((item) => ({
					...item,
					words: item?.aiResp?.length,
				}));

				setHistoryData(dataWithWordsLength);
			} catch (error) {
				console.error(
					"Erreur lors de la récupération des données :",
					error
				);
			}
		};

		fetchHistoryData();
	}, [user]);

	return (
		<div className="p-10">
			<div className="shadow-md rounded-md border bg-white">
				<div className="p-5">
					<h2 className="text-2xl">History</h2>
					<span>Search your previously generated AI content</span>

					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">
									Template
								</TableHead>
								<TableHead>AI Resp</TableHead>
								<TableHead>Date</TableHead>
								<TableHead>Words</TableHead>
								<TableHead>Copy</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{historyData.map((row, index) => (
								<TableRow key={row.id}>
									<TableCell>{row.template}</TableCell>
									<TableCell>{row.aiResp}</TableCell>
									<TableCell>{row.date}</TableCell>
									<TableCell>{row.words}</TableCell>
									<TableCell>
										<button
											className="text-purple-500"
											onClick={() =>
												handleCopyClick(row.aiResp)
											}
										>
											Copy
										</button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		</div>
	);
}
