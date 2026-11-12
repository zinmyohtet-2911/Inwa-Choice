import React from "react";
import { useRef } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Show from "./Show.jsx"
import Display from "./Display.jsx"

export default function App(){
  const phoneRef = useRef(null);
  const tabletRef = useRef(null);
  const laptopRef = useRef(null);
  return(
    <div>
<Header />
<Show />
<Display />
    </div>
  )
}