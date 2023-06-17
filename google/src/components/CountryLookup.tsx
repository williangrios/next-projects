"use client";

import { useEffect, useState } from "react";

//use client because we want to get IP of the user, not for server
export default function CountryLookup() {
    const [location, setLocation] = useState('')
  useEffect(() => {
    async function getCountry() {
      await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_API_KEY_EIL}` 
      )
        .then((res) => res.json())
        .then((data) =>  setLocation(`${data.city}, ${data.country}`));
    }
    getCountry();
  }, []);

  return <div>{!location ? '...' : location}</div>;
}
