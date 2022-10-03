import { SocialIcon } from 'react-social-icons';
import { Social } from '../typings';


type Props = {
  socials: Social[]
}

export default function Footer({ socials }: Props) {
  const navigation = {
    main: [
      { name: "Home", href: "#" },
      { name: "Projects", href: "#" },
      { name: "About", href: "#" },
      { name: "Contact", href: "#" }
    ],

  };
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor='#3f3d56'
              bgColor='transparent'
              className="h-6 w-6"
            />
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2022 Andre Jarboe, All rights reserved.
        </p>
      </div>
    </footer>
  );
}
