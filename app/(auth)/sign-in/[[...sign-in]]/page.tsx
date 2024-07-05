import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<section className="bg-white">
			<div className="lg:grid lg:grid-cols-12">
				<section className="relative flex h-screen items-end bg-gray-900 md:col-span-5 xl:col-span-6">
					<img
						alt="Paris"
						src="https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						className="absolute inset-0  h-full w-full object-cover opacity-80 object-top md:object-bottom lg:object-top"
					/>
				</section>

				<main className="flex items-center justify-center px-8 py-8 sm:px-12 md:col-span-7 md:px-16 md:py-12 xl:col-span-6">
					<div className="max-w-xl md:max-w-3xl flex flex-col items-center">
						<SignIn />
					</div>
				</main>
			</div>
		</section>
	);
}
