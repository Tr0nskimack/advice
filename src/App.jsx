import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [advice, setadvice] = useState("");

  const getData = async () => {
    try {
      const consulta = await axios.get("https://api.adviceslip.com/advice");
      const advice = await consulta.data.slip
      setadvice(advice)
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="bg-[#1f2632] h-screen flex justify-center items-center transition-all">
      {/* card */}
      <div className="bg-[#323a49] relative w-[370px] h-[230px] shadow-xl rounded-lg flex  items-center flex-col">
        <div className=" mt-6">
          <h1 className="text-center uppercase tracking-widest font-semibold text-[#52ffa8] text-[12px]">
            <p>advice: #{advice.id}</p>
          </h1>
          <p className="mt-4 px-8 text-[#cee3e9] text-[18px] font-semibold text-center">
            "{advice.advice}."
          </p>
          <img
            src="pattern-divider-desktop.svg"
            className="px-10 pt-12"
            alt="divider"
          />
        </div>

        <button className="bg-[#52ffa8] p-3 cursor-pointer rounded-full absolute transform -translate-x-[0px] translate-y-[208px] hover:shadow-lg hover:shadow-[color:hsl(150,100%,66%)] transition" onClick={getData} >
          <img src="icon-dice.svg" className="w-[16px]" alt="dado" />
        </button>
      </div>
    </div>
  );
};

export default App;
