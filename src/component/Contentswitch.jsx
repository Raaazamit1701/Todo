import React, { useState } from "react";

export default function Contentswitch() {
  const [data, setData] = useState();
  return (
    <div className=" bg-slate-700 flex items-center w-[500px] h-[400px] border border-black m-auto mt-36">
      <div className=" flex bg-white text-black items-center justify-center ml-20">
        <button
          className="w-[100px]  border border-black "
          onClick={() => {
            setData("content for Tab 1");
            // console.log(e);
          }}
        >
          Tab 1
        </button>
        <button
          className="w-[100px]  border border-black"
          onClick={() => {
            setData("content for Tab 2");
            // console.log(e);
          }}
        >
          Tab 2
        </button>
        <button
          className="w-[100px] border border-black"
          onClick={() => {
            setData("content for Tab 3");
            // console.log(e);
          }}
        >
          Tab 3
        </button>
        
      </div>
      <p>{data}</p>
    </div>
  );
}
