"use client";
import React, { useContext, useState } from "react";
import FormSection from "./_components/FormSection";
import OutputSection from "./_components/OutputSection";
import { Template } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/Backend/db";
import { aiOutput as aiOutputSchema } from "@/utils/Backend/Schema";
import { useUser } from "@clerk/nextjs";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";

type Props = {
	params: {
		"template-slug": string;
	};
};

export type FormData = {
	niche?: string;
	outline?: string;
};

export default function CreateNewContent(props: Props) {
	const selectedTemplate: Template | undefined = Templates?.find(
		(item) => item.slug === props.params["template-slug"]
	);
	const [loading, setLoading] = useState(false);
	const [aiOutput, setAiOutput] = useState<string>("");
	const router = useRouter();
	const { user } = useUser();
	const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

	const GenerateAIContent = async (formData: FormData) => {
		if (totalUsage >= 10000) {
			router.push("dashboard/billing");
			return;
		}
		setLoading(true);
		const SelectedPrompt = selectedTemplate?.aiPrompt;

		if (!formData || !SelectedPrompt) {
			console.error(
				"Données du formulaire ou prompt sélectionné manquants"
			);
			setLoading(false);
			return;
		}

		const FinalAIPrompt = `${JSON.stringify(formData)} , ${SelectedPrompt}`;

		try {
			const result = await chatSession.sendMessage(FinalAIPrompt);

			const responseText = await result.response.text();
			console.log(responseText);
			setAiOutput(responseText);
			await saveInDB(
				formData,
				selectedTemplate?.slug,
				result.response.text()
			);
		} catch (error) {
			console.error("Erreur lors de l'appel à l'API :", error);
			setAiOutput(
				"Une erreur est survenue lors de la génération du contenu."
			);
		} finally {
			setLoading(false);
		}
	};

	const saveInDB = async (
		formData: FormData,
		slug: string,
		aiRes: string
	) => {
		const currentDate = new Date();
		const formattedDate = `${currentDate
			.getDate()
			.toString()
			.padStart(2, "0")}/${(currentDate.getMonth() + 1)
			.toString()
			.padStart(2, "0")}/${currentDate.getFullYear()}`;

		try {
			const result = await db.insert(aiOutputSchema).values({
				formData: JSON.stringify(formData),
				templateSlug: slug,
				aiResponse: aiRes,
				createBy: user?.primaryEmailAddress?.emailAddress || "",
				createAt: formattedDate,
			});
			console.log("result", result);
		} catch (error) {
			console.error(
				"Erreur lors de l'insertion dans la base de données :",
				error
			);
		}
	};

	return (
		<div className="p-5">
			<Link href={"/dashboard"}>
				<Button>
					<ArrowLeft />
					Back
				</Button>
			</Link>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5">
				<FormSection
					selectedTemplate={selectedTemplate}
					userFormInput={(v: FormData) => {
						GenerateAIContent(v);
						console.log("v", v);
					}}
					loading={loading}
				/>
				<div className="lg:col-span-2">
					<OutputSection aiOutput={aiOutput} />
				</div>
			</div>
		</div>
	);
}
