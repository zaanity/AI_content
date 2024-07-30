/** @type { import("drizzle-kit").Config } */
export default {
	schema: "./utils/Backend/Schema/index.tsx",
	dialect: "postgresql",
	dbCredentials: {
		url: "postgresql://AI-Content-Generator_owner:2uMQJ3DzFIdr@ep-bold-base-a1omjxzn-pooler.ap-southeast-1.aws.neon.tech/AI-CONTENT?sslmode=require",
	},
};
