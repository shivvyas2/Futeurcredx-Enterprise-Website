"use client";
import clsx from "clsx";
import Link from "next/link";
import NavMobile from "./NavMobile";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavigationItem } from "@/common/constant/NavigationItem";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { ButtonSpot } from "../element/ButtonSpot";
import ButtonViewAll from "../element/ButtonViewAll";
import H1Hover from "../element/H1Hover";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scroll, setScrolled] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 10);
    });
  }, []);

  return (
    <motion.div
      className={clsx(
        scroll ? "backdrop-blur-sm bg-[#f6f5f2e3] border-[#bebebd69]" : " bg-transparent border-transparent",
        `w-full transition-all duration-300 mx-auto  border-b-[1px]  max-w-[1600px]   py-5 px-5 2xl:rounded-3xl  lg:px-10 fixed top-0 z-[99]`
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex w-full z-[999] items-start justify-start">
          <Link
            href="/"
            className="group relative w-auto flex flex-col justify-start items-start gap-0"
          >
            {/* <Logo w={25} h={25} /> */}
            <h1 className="text-3xl text-[#696969] tracking-[0.05em] font-bold uppercase">
              FuteurCredX
            </h1>
            <span className="text-xs text-[#696969] font-light tracking-wide">
              For Enterprise
            </span>
          </Link>
        </div>
        <div className="lg:flex hidden relative justify-center gap-10 items-center w-full">
          {/* Enterprise Solutions Dropdown (contains Products) */}
          <NavDropdown
            title="Enterprise Solutions"
            showCategories={true}
            items={[
              {
                category: "Products",
                subItems: [
                  {
                    title: "For Banks",
                    description: "Enterprise solutions for banking institutions",
                    href: "/products/banks",
                    icon: "/NavbarIcons/Bank.svg",
                  },
                  {
                    title: "For Fintechs",
                    description: "Infrastructure for fintech platforms",
                    href: "/products/fintechs",
                    icon: "/NavbarIcons/Fintech.svg",
                  },
                ],
              },
            ]}
            pathname={pathname}
          />

          {/* Use Cases Dropdown */}
          <NavDropdown
            title="Use Cases"
            showCategories={true}
            items={[
              {
                category: "Use Cases",
                subItems: [
                  {
                    title: "For Banks",
                    description: "Banking use cases and solutions",
                    href: "/use-cases/banks",
                    icon: "/NavbarIcons/Bank.svg",
                    nestedItems: [
                      {
                        title: "Chase",
                        description: "Solutions for Chase Bank",
                        href: "https://chase.futeurcredx.com",
                      },
                      {
                        title: "Wells Fargo",
                        description: "Solutions for Wells Fargo",
                        href: "https://wells-fargo.futeurcredx.com",
                      },
                      {
                        title: "Citibank",
                        description: "Solutions for Citibank",
                        href: "https://citibank.futeurcredx.com",
                      },
                    ],
                  },
                  {
                    title: "For Fintech",
                    description: "Fintech use cases and solutions",
                    href: "/products/fintechs/about",
                    icon: "/NavbarIcons/Fintech.svg",
                  },
                ],
              },
            ]}
            pathname={pathname}
          />

          {/* Developers Dropdown */}
          <NavDropdown
            title="Developers"
            showCategories={false}
            items={[
              {
                category: "Developers",
                subItems: [
                  {
                    title: "Quickstart",
                    description: "Get started in minutes",
                    href: "/developers/quickstart",
                    icon: "/NavbarIcons/quickstart.svg",
                  },
                  {
                    title: "Docs",
                    description: "Comprehensive documentation",
                    href: "https://docs.futeurcredx.com",
                    icon: "/NavbarIcons/document.svg",
                  },
                  {
                    title: "API Reference",
                    description: "Complete API documentation",
                    href: "/developers/api",
                    icon: "/NavbarIcons/ApiReference.svg",
                  },
                ],
              },
            ]}
            pathname={pathname}
          />

        </div>

        <div className="lg:hidden flex  items-center">
          <NavMobile open={open} handleOpen={handleOpen} close={close} />
        </div>

        <div className="lg:flex hidden  w-full items-end justify-end">
          <Link href="/contact" className=" flex justify-end">
            <ButtonViewAll
              title="Contact Us"
              className="hover:!bg-[#EEEEEE] transition-colors duration-300 overflow-hidden !bg-transparent outline outline-1 outline-[#494949]  w-auto !py-2"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
