"use client"
import React,{useState} from 'react'
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';

const DarkModeButton = () => {
    const { systemTheme, theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    const toggleTheme = () => {
        if (theme=="dark") {
            setTheme('light')
            setIsDarkMode(true)
        } else {
            setTheme("dark")
            setIsDarkMode(false)
        }
      };
    return (

        // 
        <button  onClick={toggleTheme}>
      {isDarkMode ? (
        <BsSunFill size={20} />
      ) : (
        <BsFillMoonFill size={20} />
      )}
    </button>

        
    )
}

export default DarkModeButton