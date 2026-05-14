"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div>
      <nav className="flex justify-between bg-white shadow-sm p-4">
        <ul className="flex gap-3">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/destination"}>Destination</Link>
          </li>
          <li>
            <Link href={"/add-destination"}>Add Destination</Link>
          </li>
          <li>
            <Link href="/my-bookings">My Bookings</Link>
          </li>
        </ul>
        <div>
          <Image
            src={"/assets/Expedivo.png"}
            alt={"logo"}
            width={200}
            height={200}
          ></Image>
        </div>
        <ul className="flex gap-3">
          {user ? (
            <div className="flex items-center gap-4">
              <li>
                {" "}
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt="John Doe"
                    src={user?.image}
                  />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </li>
              <Button variant="danger" onClick={handleSignOut}>
                SignOut
              </Button>
            </div>
          ) : (
            <>
              <li className="btn">
                <Button variant="primary">
                  {" "}
                  <Link href={"/signin"}>Sign In</Link>
                </Button>
              </li>
              <li className="btn">
                <Button variant="primary">
                  <Link href={"/signup"}>Sign Up</Link>
                </Button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
