import Templates from "@/app/(data)/Templates";
import React, { useEffect, useState } from "react";
import TemplateCard from "../TemplateCard";

export type Template = {
	id: number;
	name: string;
	desc: string;
	icon: string;
	category: string;
	slug: string;
	aiPrompt: string;
	form?: Form[];
};

export type Form = {
	label: string;
	field: string;
	name: string;
	required?: boolean;
};

type TemplateListSectionProps = {
	userSearchInput: string | undefined;
};

export default function TemplateListSection({
	userSearchInput,
}: TemplateListSectionProps) {
	const [TemplateList, setTemplateList] = useState(Templates);

	useEffect(() => {
		if (userSearchInput) {
			const filterData = Templates.filter((item) =>
				item.name.toLowerCase().includes(userSearchInput.toLowerCase())
			);
			setTemplateList(filterData);
		} else {
			setTemplateList(Templates);
		}
	}, [userSearchInput]);

	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
			{TemplateList.map((item: Template) => {
				return <TemplateCard {...item} key={item.id} />;
			})}
		</div>
	);
}
