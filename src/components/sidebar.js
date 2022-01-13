import { Transition } from "@headlessui/react";
import React, { useState, forwardRef, useImperativeHandle } from "react";
import BarBtn from "./barBtn";

const Sidebar = forwardRef((props, ref) => {
  const [isShowing, setIsShowing] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setIsShowing(!isShowing);
    },
  }));

  return (
    <div
      className={`absolute w-full h-full top-0 ${
        isShowing ? "" : "pointer-events-none"
      }`}
    >
      <Transition show={isShowing}>
        <Transition.Child
          enter="transition-opacity ease-linear duration-800"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-800"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="absolute w-full h-screen bg-[#000000B3] top-0"
            onClick={() => setIsShowing(!isShowing)}
          ></div>
        </Transition.Child>
        <Transition.Child
          enter="transition ease-in-out duration-800 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-800 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="text-white text-2xl h-full w-72 absolute bg-[#333333]">
            <div className="text-center py-10 font-bold">EXAMKIT</div>
            <div className="px-3">
              <BarBtn icon="i" text="CREATE QUIZ" active={true} />
              <BarBtn icon="i" text="HOME" />
              <BarBtn icon="i" text="COLLEGE YEARS" />
              <BarBtn icon="i" text="HISTORY" />
              <BarBtn icon="i" text="HOW TO USE" />
              <BarBtn icon="i" text="SHORT NOTE" />
            </div>
          </div>
        </Transition.Child>
      </Transition>
    </div>
  );
});

export default Sidebar;
