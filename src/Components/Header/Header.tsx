"use client";
import { useEffect, useState } from "react";
import { ButtonMenu } from "../ButtonMenu/ButtonMenu";
import Link from "next/link";
import logo from "../../../public/assets/Image/logo.png";
import Image from "next/image";
import useMedia from "@/Ultils/Hooks/useMedia";
import { OutSideClick } from "@/Ultils/Function/OutSideClick";

export const Header = () => {
  const mobile = useMedia("(max-width:75rem)");

  const [isVisible, setIsVisible] = useState(false);

  const outside = OutSideClick({ setIsVisible });

  useEffect(() => {
    if (!mobile) {
      setIsVisible(false);
    }
  }, [mobile]);

  return (
    <header className="h-Myheigth w-full flex justify-center items-center bg-bgprimary">
      <nav className="  flex justify-between items-center max-w-myWidth w-full ml-5 mr-5">
        <div>
          <Image src={logo} alt="logo" width={100} priority={true} />
        </div>
        <ButtonMenu
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          mobile={mobile ? mobile.toString() : null}
        />
        <ul
          className={`${
            isVisible && mobile
              ? "block"
              : !isVisible && !mobile
              ? "flex"
              : "hidden"
          } 
          ${
            isVisible
              ? "absolute mt-ulTop right-0 duration-transitionDuration bg-bgprimary  w-ulWidth z-10 pt-ulTop animate-showRigth "
              : ""
          } 
            justify-between text-primary font-bold items-center`}
        >
          <li>
            <Link
              className="p-plink flex hover:after:w-whover hover:after:h-hhover after:absolute after:block after:bg-secondary after:ml-hoverMarginLeft after:mt-hoverMarginTop "
              href="/"
            >
              Partidas
            </Link>
          </li>
          <li>
            <Link
              className="p-plink flex hover:after:w-whover hover:after:h-hhover after:absolute after:block after:bg-secondary after:ml-hoverMarginLeft after:mt-hoverMarginTop "
              href="/ranking"
            >
              Ranking
            </Link>
          </li>
          <li>
            <Link
              className="p-plink flex hover:after:w-whover hover:after:h-hhover after:absolute after:block after:bg-secondary after:ml-hoverMarginLeft after:mt-hoverMarginTop "
              href="https://discord.gg/fXUQGCYDbB"
              target="_blank"
            >
              Discord
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
