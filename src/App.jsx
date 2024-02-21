import React from "react";

const App = () => {
  return (
    <div className="bg-[#1f2632] h-screen flex justify-center items-center transition-all ">
      {/* card */}
      <div className="bg-[#323a49] relative w-[370px] h-[230px] shadow-xl rounded-lg flex  items-center flex-col">
        <div className=" mt-6">
          <h1 className="text-center uppercase tracking-widest font-semibold text-[#52ffa8] text-[8px]">
            advice #117
          </h1>
          <p className="mt-4 px-8 text-[#cee3e9] text-[18px] font-semibold text-center">
            "It is easy to shit up and take notice, what's dificult is getting
            up and talking action."
          </p>
          <img src="pattern-divider-desktop.svg" className="px-10 pt-12"  alt="divider" />
        </div>
        <div className="bg-[#52ffa8] p-3 rounded-full absolute transform -translate-x-[0px] translate-y-[208px] ">
        <img src="icon-dice.svg" className="w-[16px]"  alt="dado" />
        </div>
      </div>
    </div>
  );
};

export default App;
