"use client";
import { useEffect } from "react";

function Monitor() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/configurator/private_house", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "monitor" }),
      });

      if (!response.ok) {
        console.log("ERROR");
      }

      const data = await response.json();
      console.log(data);
    };

    fetchData();
  }, []);

  return <div>Monitor</div>;
}

export default Monitor;
