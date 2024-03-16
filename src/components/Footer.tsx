"use client";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-5 bg-[#1d1c20]">
      <div className="container">
        <div className="flex justify-between gap-5">
          <Link href="/">
            <Image
              src="/svg/logo.svg"
              width={130}
              height={50}
              alt="Picture of the author"
            />
          </Link>
          <p>© 2023 Matrixly AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
