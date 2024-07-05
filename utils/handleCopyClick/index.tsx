export const handleCopyClick = async (aiResp: string) => {
	try {
		await navigator.clipboard.writeText(aiResp);
		alert("AI Response copied to clipboard!");
	} catch (error) {
		console.error("Failed to copy AI Response:", error);
		alert("Failed to copy AI Response. Please try again.");
	}
};
