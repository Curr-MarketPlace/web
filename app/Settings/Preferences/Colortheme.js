"use client"
import React, { useEffect, useState } from 'react';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';

const ColorTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(() => {
  if(isDarkMode || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    document.documentElement.classList.add("dark")
    console.log("if calisti");
  }else{
    document.documentElement.classList.remove("dark")
    console.log("else calisti",localStorage.getItem("theme"));

  }
}, [isDarkMode])


  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      localStorage.setItem('theme', 'light');
    } else {
      setIsDarkMode(true);
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button className='dark:bg-black bg-red-500' onClick={toggleTheme}>
      {isDarkMode ? (
        <BsSunFill size={20} />
      ) : (
        <BsFillMoonFill size={20} />
      )}
    </button>
  );
};

export default ColorTheme;
