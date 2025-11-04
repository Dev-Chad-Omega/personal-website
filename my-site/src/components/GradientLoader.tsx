"use client";
import { useEffect } from "react";

export default function GradientLoader(){
useEffect(() => {
(async () => {
const mod = await import("../../public/gradient.js");
const Gradient = mod.default;
const g = new Gradient();
g.initGradient("#gradient-canvas");
})();
}, []);
return null;
}
