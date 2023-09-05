import React, { SetStateAction } from "react";

interface ButtonProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<SetStateAction<boolean>>;
  mobile: boolean | string | null;
}

export const ButtonMenu = ({
  isVisible,
  setIsVisible,
  mobile,
}: ButtonProps) => {
  return (
    <button
      onClick={() => {
        setIsVisible(!isVisible);
      }}
      className={`p-5 bg-bgsecondary w-9 rounded-sm h-9 ${
        mobile ? "flex" : "hidden"
      }  items-center justify-center z-30 `}
    >
      <span
        className={`${
          isVisible
            ? " border-none after:rotate-afterSpanRotate after:-top-after before:rotate-beforeSpanRotate"
            : "border-solid "
        }  border-t-secondary border-t-2 w-7 after:w-7  after:mt-btnSpanTop after:h-hbtnspan after:bg-secondary after:block before:w-7 before:mt-btnSpanTop before:h-hbtnspan before:bg-secondary before:block after:relative before:relative  after:duration-transitionDuration  before:duration-transitionDuration `}
      ></span>
    </button>
  );
};
