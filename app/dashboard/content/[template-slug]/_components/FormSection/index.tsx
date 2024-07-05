"use client";
import { Template } from "@/app/dashboard/_components/TemplateListSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { useState } from "react";
import { FormData } from "../../page";
import { Loader2Icon } from "lucide-react";

type FormSectionProps = {
	selectedTemplate?: Template;
	userFormInput: (formData: FormData) => void;
	loading: boolean;
};

export default function FormSection({
	selectedTemplate,
	userFormInput,
	loading,
}: FormSectionProps) {
	const [formData, setFormData] = useState<FormData>({
		niche: "",
		outline: "",
	});

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		userFormInput(formData);
	};

	return (
		<div className="p-5 shadow-md border rounded-lg bg-white">
			{selectedTemplate?.icon ? (
				<Image
					src={selectedTemplate?.icon}
					alt="icon"
					width={70}
					height={70}
				/>
			) : (
				""
			)}
			<h2 className="font-bold text-2xl mb-2 text-primary">
				{selectedTemplate?.name}
			</h2>
			<p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

			<form onSubmit={onSubmit} className="mt-6">
				{selectedTemplate?.form?.map((item, i) => {
					return (
						<div key={i} className="my-2 flex flex-col gap-2 mb-7">
							<label className="font-bold">{item.label}</label>
							{item.field === "input" ? (
								<Input
									name={item.name}
									required={item?.required}
									onChange={handleInputChange}
								/>
							) : item.field === "textarea" ? (
								<Textarea
									name={item.name}
									required={item?.required}
									onChange={handleInputChange}
								/>
							) : null}
						</div>
					);
				})}
				<Button
					type="submit"
					className="w-full py-6"
					disabled={loading}
				>
					{loading ? (
						<Loader2Icon className="animate-spin" />
					) : (
						"Generate Content"
					)}
				</Button>
			</form>
		</div>
	);
}
