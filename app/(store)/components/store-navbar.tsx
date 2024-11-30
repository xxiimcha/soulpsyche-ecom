"use client";

import { Button } from "@/components/ui/button";
import { Book, Menu, ShoppingBag }  from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SoulePsycleLogo from "@/public/logo.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
	useUser,
} from "@clerk/nextjs";

const StoreNavbar = () => {
	const pathname = usePathname();

	const { isLoaded, isSignedIn, user } = useUser();

	const [bagCount, setBagCount] = useState<number>(0);

	// Static user ID for now
	const userId = "c816e27a-e9dd-411f-b0d4-75e384e71005";

	useEffect(() => {
		// Fetch bag count based on userId
		const fetchBagCount = async () => {
			try {
				const response = await fetch(`/api/bag/count?userId=${userId}`);
				const data = await response.json();
				setBagCount(data.count || 0);
			} catch (error) {
				console.error("Error fetching bag count:", error);
			}
		};

		fetchBagCount();
	}, []);

	const isAdmin =
		user?.emailAddresses[0].emailAddress === "soulepsycle1201@gmail.com";

	if (!isLoaded || !isSignedIn) {
		return null;
	}

	console.log("user", user);

	const links = [
		{
			href: "/",
			label: "Home",
			active: pathname === "/",
		},
		{
			href: "/shop",
			label: "Shop",
			active: pathname === "/shop",
		},
	];

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center">
				<Link href="/" className="flex items-center space-x-2">
					<Image
						src={SoulePsycleLogo}
						alt="Logo"
						className="h-8 w-8"
					/>
					<span className="font-bold">SoulePsycle</span>
				</Link>
				<nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:flex">
					{links.map((link) => {
						const { href, label, active } = link;

						return (
							<Button
								key={href}
								asChild
								variant={active ? "default" : "ghost"}
							>
								<Link href={href}>{label}</Link>
							</Button>
						);
					})}
					{isAdmin && (
						<Button asChild variant={"ghost"}>
							<Link href={"/admin"}>Admin Panel</Link>
						</Button>
					)}
				</nav>
				<div className="flex items-center space-x-4 ml-auto">
					<Button
						variant="ghost"
						size="icon"
						className="relative"
						asChild
					>
						<Link href={"/account/address-book"}>
							<Book className="h-6 w-6" />
						</Link>
					</Button>

					{/* Shopping Bag Icon */}
					<Button
						variant="ghost"
						size="icon"
						className="relative"
						asChild
					>
						<Link href={"/shop/bag"}>
							<ShoppingBag className="h-6 w-6" />
							{bagCount > 0 && (
								<span className="absolute top-0 right-0 h-5 w-5 text-[10px] font-bold rounded-full bg-primary text-primary-foreground flex items-center justify-center">
									{bagCount}
								</span>
							)}
						</Link>
					</Button>

					{/* Clerk Avatar | Sign In/Up */}
					<div>
						<SignedOut>
							<SignInButton />
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</div>

					{/* Mobile Viewing Navbar */}
					<Sheet>
						<SheetTrigger className="block md:hidden">
							<Menu className="h-6 w-6" />
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>
									<Image
										src={SoulePsycleLogo}
										alt="SoulePsycle-Logo"
										className="w-16 h-16"
									/>
								</SheetTitle>
								<SheetDescription>Shop now!</SheetDescription>
							</SheetHeader>

							<nav className="mt-12 flex flex-col gap-4">
								{links.map((link) => {
									const { href, label, active } = link;

									return (
										<Button
											key={href}
											asChild
											variant={active ? "link" : "ghost"}
											className={cn(
												"w-fit text-lg",
												active &&
													"underline underline-offset-4"
											)}
										>
											<Link href={href}>{label}</Link>
										</Button>
									);
								})}
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
};

export default StoreNavbar;
