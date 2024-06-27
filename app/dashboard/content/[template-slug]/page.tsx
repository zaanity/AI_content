"use client";
import React, { useState } from "react";
import FormSection from "./_components/FormSection";
import OutputSection from "./_components/OutputSection";
import { Template } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModal";

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

	const GenerateAIContent = async (formData: FormData) => {
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
		} catch (error) {
			console.error("Erreur lors de l'appel à l'API :", error);
			setAiOutput(
				"Une erreur est survenue lors de la génération du contenu."
			);
		} finally {
			setLoading(false);
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
						GenerateAIContent(v), console.log("v", v);
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
