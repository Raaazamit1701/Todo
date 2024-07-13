import React, { useState } from "react";

export default function Accordion() {
  const [acc1, setAcc1] = useState("");
  const [acc2, setAcc2] = useState("");
  const [acc3, setAcc3] = useState("");

  return (
    <div className="border border-blue-700 m-10 p-4">
      <h2>Accordion</h2>
      <div className="border border-red-500 m-5 p-2 flex flex-col relative">
        <div>What is your name?</div>
        <button
          className="absolute top-0 right-0"
          onClick={() => {
            setAcc1(acc1 ? "" : "My name is Amit");
          }}
        >
          V
        </button>
        {acc1 && <p className="mt-2">{acc1}</p>}
      </div>
      <div className="border border-red-500 m-5 p-2 flex flex-col relative">
        <div>What is your age?</div>
        <button
          className="absolute top-0 right-0"
          onClick={() => {
            setAcc2(acc2 ? "" : "My age is 21");
          }}
        >
          V
        </button>
        {acc2 && <p className="mt-2">{acc2}</p>}
      </div>
      <div className="border border-red-500 m-5 p-2 flex flex-col relative">
        <div>What is your dream?</div>
        <button
          className="absolute top-0 right-0"
          onClick={() => {
            setAcc3(acc3 ? "" : "My dream is enjoying life");
          }}
        >
          V
        </button>
        {acc3 && <p className="mt-2">{acc3}</p>}
      </div>
    </div>
  );
}
