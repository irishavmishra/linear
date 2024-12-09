import { Container } from "./container";
import Link from "next/link";
import { Logo } from "./icons/logo";
import { Twitter } from "./icons/twitter";
import { Github } from "./icons/github";
import { Slack } from "./icons/slack";

const footerLinkes = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms & Service", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

export const Footer = () => (
  <footer className="border-t mt-12 border-border-white py-[5.6rem] text-md">
    <Container className="flex flex-col md:flex-row justify-between">
      <div>
        <div className="flex flex-row lg:flex-col justify-between h-full">
          <div className="text-grey items-center flex">
            <Logo className="mr-4 w-4 h-4 " />
            Linear - Designed worldwide
          </div>
          <div className="mt-auto flex space-x-4 text-grey">
            <Twitter />
            <Github />
            <Slack />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        {footerLinkes.map((column) => (
          <div className="lg:min-w-[18rem] mt-10 min-w-[50%] lg:mt-0">
            <h3 className="font-medium mb-3">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li className="[&_a]:last:mb-0">
                  <Link
                    className="text-grey mb-3 hover:text-off-white transition-colors block"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);
