import { Transition } from "@headlessui/react";
import React from "react";
import { useState } from "react";
import BarBtn from './barBtn'

const Sidebar = () => {
  const sidebarStyle = {
    height: "100%",
    width: "278px",
    position: "absolute",
    background: "#333333",
  };

  const [isShowing, setIsShowing] = useState(false);

  return (
    <div>
      <button
        style={{ position: "absolute" }}
        onClick={() => setIsShowing(true)}
      >
        Show
      </button>
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
            style={{
              position: "absolute",
              width: "100%",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.7)",
							top: "0"
            }}
            onClick={() => setIsShowing(false)}
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
          <div
            className='text-white text-2xl'
            style={sidebarStyle}
          >
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
};

export default Sidebar;
