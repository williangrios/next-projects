"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation";

export default function SearchBox(){

    const [search, setSearch] = useState("");
    const router = useRouter();

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`);
    }

    return(
        <form className="flex max-w-6xl mx-auto justify-between items-center px-5" onSubmit={handleSubmit}>
            <input type='text' placeholder="Search keywords..." onChange={(e) =>setSearch(e.target.value)} value={search}
                className="w-full flex-1 px-3 py-2 h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent"/>
            <button type="submit" disabled={!search}
                className="text-amber-500 disabled:text-gray-400">Search</button>
        </form>
    )
}