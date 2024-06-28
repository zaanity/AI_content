/** @type { import("drizzle-kit").Config } */
export default {
	schema: "./utils/Backend/Schema/index.tsx",
	dialect: "postgresql",
	dbCredentials: {
		url: "postgresql://AI-Content-Generator_owner:2mwurWgyT8Ea@ep-wild-star-a2qp5yvz.eu-central-1.aws.neon.tech/AI-Content-Generator?sslmode=require",
	},
};
