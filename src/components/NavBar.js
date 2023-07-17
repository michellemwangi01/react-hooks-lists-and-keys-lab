import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navItems = links.map((link,index) => <a key={index} href={`#${link}`}>{link}</a>)

  return <nav>{
    /* display an <a> tag for each link here */
    navItems
    }</nav>;
}

export default NavBar;
