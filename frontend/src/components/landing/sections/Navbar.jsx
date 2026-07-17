import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Logo from "../ui/Logo";
import NavLinks from "../ui/NavLinks";
import MobileMenu from "../ui/MobileMenu";

export default function Navbar() {

  const [open,setOpen]=useState(false);

  const [scrolled,setScrolled]=useState(false);

  useEffect(()=>{

    const handleScroll=()=>{

      setScrolled(window.scrollY>20);

    };

    window.addEventListener("scroll",handleScroll);

    return()=>window.removeEventListener("scroll",handleScroll);

  },[]);

  return(

<header className="fixed top-0 left-0 z-50 w-full px-6 pt-5">

<motion.nav

initial={{
y:-80
}}

animate={{
y:0
}}

transition={{
duration:.6
}}

className={`

mx-auto

max-w-7xl

rounded-3xl

border

px-8

py-5

transition-all

duration-300

${
scrolled
?
"border-white/10 bg-slate-900/70 backdrop-blur-2xl shadow-2xl"
:
"border-transparent"
}

`}
>

<div className="flex items-center justify-between">

<Logo/>

<NavLinks/>

<div className="hidden items-center gap-5 lg:flex">

<Link
to="/login"
className="text-slate-300 hover:text-white transition"
>

Login

</Link>

<button
className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:scale-105"
>

Get Started

<ArrowRight size={18}/>

</button>

</div>

<button

onClick={()=>setOpen(!open)}

className="text-white lg:hidden"

>

{open?<X/>:<Menu/>}

</button>

</div>

<MobileMenu

open={open}

setOpen={setOpen}

/>

</motion.nav>

</header>

  );

}