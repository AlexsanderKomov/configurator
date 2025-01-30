"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function page() {
  const searchPathname = usePathname();

  useEffect(() => {
    const current = searchPathname.split("/");
    for (const currentUrl of current) {
      if (currentUrl === "privateHouse") {
        console.log(currentUrl);
      } else if (currentUrl === "apartmentBuilding") {
        console.log(currentUrl);
      } else if (currentUrl === "largeObject") {
        console.log(currentUrl);
      } else if (currentUrl === "other") {
        console.log(currentUrl);
      }
    }
  }, []);
  return <div>page</div>;
}

export default page;
