import { Button } from "@/components/ui/button";
import { handleCopyClick } from "@/utils/handleCopyClick";
import { Copy } from "lucide-react";
import React, { useEffect, useRef } from "react";
require("@toast-ui/editor/dist/toastui-editor.css");
const { Editor } = require("@toast-ui/react-editor");

type OutputSectionProps = {
	aiOutput: string;
};

export default function OutputSection({ aiOutput }: OutputSectionProps) {
	const editorRef: any = useRef();

	useEffect(() => {
		const editorInstance = editorRef.current.getInstance();
		editorInstance.setMarkdown(aiOutput);
	}, [aiOutput]);

	return (
		<div className="bg-white shadow-lg border rounded-lg">
			<div className="flex justify-between items-center p-5">
				<h2 className="font-medium text-lg">Your Result</h2>
				<Button
					className="flex gap-2 items-center"
					onClick={() => handleCopyClick(aiOutput)}
				>
					<Copy className="w-4 h-4" /> Copy
				</Button>
			</div>
			<Editor
				ref={editorRef}
				initialValue="result"
				initialEditType="markdown"
				height="600px"
				useCommandShortcut={true}
				onChange={() =>
					console.log(editorRef.current.getInstance().getMarkdown())
				}
			/>
		</div>
	);
}
