"use client";

import { useState } from "react";

export const metadata = {
  title: "Counter",
  description: "This is the counter page of our application.",
};

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
}
