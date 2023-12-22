import React from "react";
import "./styles.css";

function Smiley({ isHappy }) {
  const smiley = isHappy ? "😊" : "😢";
  return <h1> {smiley} </h1>;
}

export default function App() {
  return <Smiley isHappy={true} />;
}
