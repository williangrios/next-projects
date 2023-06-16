"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import ButtonSearch from "./ButtonSearch";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  const router = useRouter();

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }

  async function randomSearch() {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-300 px-5 py-3 rounded-full hover:shadow-md transition-shadow justify-between focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-700 mr-3" />
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill className="text-xl text-gray-700 mr-3" />
      </form>
      <div className="flex flex-col space-y-2 justify-center sm:space-y-0 sm:space-x-4 sm:flex-row mt-8">
        <ButtonSearch onClick={handleSubmit} disabled={false}>Google Search</ButtonSearch>
        <ButtonSearch onClick={randomSearch} disabled={randomSearchLoading}>{randomSearchLoading ? <img src='loading.svg' alt="Loading..." className="h-6 text-center" /> : 'I am felling lucky'}</ButtonSearch>
      </div>
    </>
  );
}
