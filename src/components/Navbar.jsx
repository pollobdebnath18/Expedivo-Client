import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
          <li>
            <Link href={"/signin"}>SignIn</Link>
          </li>
          <li>
            <Link href={"/signup"}>SignUp</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
