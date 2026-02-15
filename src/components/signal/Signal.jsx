import { useEffect, useState } from "react";

export default function Signal({ color, isActive, message }) {
  return (
    <>
      <div
        className="signal"
        style={{ backgroundColor: `${isActive ? color : ""}` }}
      ></div>
      <h1>{message}</h1>
    </>
  );
}
