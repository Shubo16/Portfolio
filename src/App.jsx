import React, { createContext, useEffect, useState } from "react";
import AnimationScroll from "./components/header/animationScroll";
import DesktopHeader from "./components/header/DesktopHeader";
import MobileHeader from "./components/header/MobileHeader";
import HomeScreen from "./components/landing/HomeScreen";
import Hero from "./components/about-me/Hero";
import Cards2 from "./components/cards/Projects";

import Footer from "./components/footer/footer";
export const ThemeContext = createContext(null);

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 700);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 799);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((current) => {
      const newTheme = current === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AnimationScroll />
      <div className={`App ${theme}`}>
        {isDesktop ? <DesktopHeader /> : <MobileHeader />}
        <HomeScreen />
        <Hero />
        <Cards2 />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
