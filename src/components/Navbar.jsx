"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/destination", label: "Destination" },
    { href: "/add-destination", label: "Add Destination" },
    { href: "/my-bookings", label: "My Bookings" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <div className="bg-white shadow-sm">
      <nav className="flex items-center justify-between py-4 max-w-6xl mx-auto px-4">
        {/* LEFT - Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* CENTER LOGO */}
        <div className="hidden md:block ">
          <Image
            src={"/assets/Expedivo.png"}
            alt="logo"
            width={180}
            height={180}
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  isActive(link.href)
                    ? "text-black font-bold border-b-2 border-black"
                    : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT AUTH */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Avatar>
                <Avatar.Image referrerPolicy="no-referrer" src={user?.image} />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button size="sm" variant="danger" onClick={handleSignOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link href="/signin" className="text-sm">
                Sign In
              </Link>
              <Link href="/signup" className="text-sm">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-2 ${
                isActive(link.href) ? "text-black font-bold" : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
