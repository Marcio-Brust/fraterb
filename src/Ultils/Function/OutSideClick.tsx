"use client";
import { Dispatch, SetStateAction } from "react";

interface OutsideProp {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const isBrowser = () => typeof window !== "undefined";
export const OutSideClick = ({ setIsVisible }: OutsideProp) => {
  function handleClick({ target }: Event) {
    const html = document.documentElement;
    const ul = html.querySelector("ul");
    const span = html.querySelector("span");
    const button = html.querySelector("button");
    if (target !== ul && target !== span && target !== button) {
      setIsVisible(false);
      window.removeEventListener("click", handleClick);
    }
  }
  if (isBrowser()) window.addEventListener("click", handleClick);

  return;
};
