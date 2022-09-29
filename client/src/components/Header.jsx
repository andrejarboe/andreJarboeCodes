import Link from "next/link";
import { useState } from "react";

function MenuIcon(props) {
  return (
    // <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    //   <path
    //     d="M5 6h14M5 18h14M5 12h14"
    //     strokeWidth={2}
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

const data = {
  company: "Andre Jarboe",
  transparent: false,
  siteMap: [
    { name: "Home", href: "/" },
    { name: "projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Header(
  {
    //   transparent,
    //   siteMap,
    //   logo,
    //   company,
    //   siteData,
  }
) {
  const [show, setShow] = useState(false);

  const { transparent, siteMap, company } = data;
  console.log("company: " + company);
  console.log("siteM " + company);
  return (
    <nav className="text-gray-600 shadow-lg border-b border-gray-700">
      <div className="mx-auto flex max-w-7xl flex-col justify-between px-4 py-4 md:flex-row md:py-6">
        {/* left header  */}
        <div
          className={
            "flex items-center justify-between pb-4 md:pb-0" +
            " " +
            (show ? "pb-4" : "pb-0")
          }
        >
          <Link href="/">
            <a className="text-2xl font-bold text-red-500 drop-shadow-2xl">
              {company}
            </a>
          </Link>
          <button
            title="menu icon"
            onClick={() => setShow(!show)}
            className="flex items-center justify-center md:hidden"
          >
            {/* <FaBars className="flex h-8 w-auto items-center justify-center text-2xl text-red-500 " /> */}
            <MenuIcon className="h-6 w-6 text-red-500" />
          </button>
        </div>
        {/* right header */}
        <div
          className={
            "flex flex-col items-center justify-end space-y-4 text-center capitalize  md:flex md:flex-row md:space-x-4 md:space-y-0" +
            " " +
            (show ? "block" : "hidden")
          }
        >
          {siteMap.map((link, index, siteMap) => {
            if (index === siteMap.length - 1) {
              return (
                <div
                  key={index}
                  className="w-full border-t pt-6 pb-4 md:border-t-0 md:p-0"
                >
                  <Link href={link.href}>
                    <a className="rounded bg-red-300 p-3 text-red-700 shadow transition duration-500 hover:bg-red-200 hover:text-red-600 hover:shadow-xl">
                      {link.name}
                    </a>
                  </Link>
                </div>
              );
            } else {
              return (
                <Link
                  key={index}
                  href={link.href}
                  //   activeClassName="text-purple-600"
                >
                  <a className="w-full border-t pt-4 font-bold hover:text-gray-900 md:border-t-0 md:pt-0">
                    {link.name}
                  </a>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </nav>
  );
}
