import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/app/navbar";
import Sidebar from "@/components/app/sidebar";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "VibeNet",
	description: "Social media app built with Next.js, Clerk, and Prisma.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						<div className="min-h-screen">
							<Navbar />
							<main className="py-8">
								<div className="max-w-7xl mx-auto px-4">
									<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
										<div className="hidden lg:block lg:col-span-3">
											<Sidebar />
										</div>
										<div className="lg:col-span-9">
											{children}
										</div>
									</div>
								</div>
							</main>
						</div>

						<Toaster />
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
