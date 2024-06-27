"use client";
import React from "react";
import FormSection from "./_components/FormSection";
import OutputSection from "./_components/OutputSection";
import { Template } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

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

	const GenerateAIContent = (formData: FormData) => {};

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
				/>
				<div className="lg:col-span-2">
					<OutputSection />
				</div>
			</div>
		</div>
	);
}
