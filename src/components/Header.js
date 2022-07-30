import { LoginIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Link from "next/link";

export default function header() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="container mx-auto max-w-full relative ">
        <nav className="p-5 bg-white flex justify-between border-b-2 border-light-gray fixed top-0 left-0 right-0">
          <Link href="/">
            <img src="./img/logo.png" className="cursor-pointer" />
          </Link>
          <div class="flex space-x-2 cursor-pointer mt-2">
            <LoginIcon className="h-5 w-5 mt-0.5" />
            <h4 className="text-md text-gray"> Log Out</h4>
          </div>
        </nav>
      </div>
    </div>
  );
}
