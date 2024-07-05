"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import CheckoutPage from "@/components/CheckoutPage";

// import CheckoutPage from "../components/CheckoutForm";
// import ConvertTiSubCurrency from "../components/CheckoutForm";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
	throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Billing() {
	const amount = 19.99;
	return (
		<div className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
			<div className="mb-10">
				<h1 className="text-4xl font-extrabold mb-2">10000 Credits</h1>
				<h2 className="text-2xl">
					has requested <span className="font-bold">${amount}</span>
				</h2>
			</div>

			<Elements
				options={{
					mode: "payment",
					amount: convertToSubcurrency(amount),
					currency: "eur",
				}}
				stripe={stripePromise}
			>
				<CheckoutPage amount={amount} />
			</Elements>
		</div>
	);
}
