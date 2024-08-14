import React, { useState } from 'react'
import LigthButton from "../../assets/website/light-mode-button.png"
import DarkButton from "../../assets/website/dark-mode-button.png"

const DarkMode = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "ligth");
  const element = document.documentElement;
  console.log(element);

  React.useEffect(()=>{
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.add("ligth");
      element.classList.remove("dark");
    }
  });
  


  return (
    <div className='relative'>
      <img onClick={()=> setTheme(theme == "dark" ? "light" : "dark")}
      src={LigthButton} 
      alt="" 
      className={`w-12 cursor-pointer absolute right-0 z-10
         ${theme == "dark" ? "opacity-0" : "opacity-100"

      }`} 
      />
      <img onClick={()=> setTheme(theme == "dark" ? "light" : "dark")}
      src={DarkButton} 
      alt="" 
      className={`w-12 cursor-pointer 

      }`} 
      />
      </div>
  )
}

export default DarkMode