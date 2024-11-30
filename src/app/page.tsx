"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-[#0d1321] space-y-10">
      <div className="bg-[#3e5c76] w-40 h-40 flex items-center justify-center relative">
        <h1 className="text-xl text-[#f0ebd8]">Counter</h1>
        <div className="absolute -top-2 right-0 bg-[#aec3b0] text-[#284b63] text-xl rounded-full w-8 h-8 flex items-center justify-center ">
          {count}
        </div>
      </div>
      <div className="space-x-10 text-[#f0ebd8]">
        <button onClick={increaseCount} className="bg-[#284b63] px-4 py-2">
          Increase
        </button>
        <button onClick={decreaseCount} className="bg-[#284b63] px-4 py-2">
          Decrease
        </button>
      </div>
    </section>
  );
}
