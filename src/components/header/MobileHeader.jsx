import React from "react";
import { useCycle, motion, AnimatePresence } from "framer-motion";

function MobileHeader() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  const navLinks = [
    // { title: "Home", href: "/" },
    { key: 1, title: "About Me", href: "/main-hero" },
    { key: 2, title: "Work", href: "/projects" },
    { key: 3, title: "projects", href: "/" },
    { key: 4, title: "Contact me", href: "/Footer" },
  ];

  const menuVars = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.36, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header className="h-24 w-full bg-lm-dark-green flex items-center justify-between px-5 z-50 sticky ">
      <div>
        <h2 className="text-pink-600 text-2xl font-bold uppercase">
          Rithuan Kobir
        </h2>
      </div>
      <div className="relative z-50 ">
        <motion.button
          animate={mobileNav ? "open" : "closed"}
          onClick={() => toggleMobileNav()}
          className="flex flex-col space-y-2 "
        >
          <motion.span
            variants={{
              closed: {
                rotate: 0,
                transition: {
                  duration: 0.8,
                },
              },
              open: { rotate: 45, y: 12 },
            }}
            className="w-8 h-1 rounded-xl bg-pink-500 block z-50"
          ></motion.span>

          <motion.span
            variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
            className="w-8 h-1 rounded-xl bg-pink-500 block z-50"
          ></motion.span>

          <motion.span
            variants={{ closed: { rotate: 0 }, open: { rotate: -45, y: -12 } }}
            className="w-8 h-1 rounded-xl bg-pink-500 block z-50"
          ></motion.span>
        </motion.button>
      </div>
      <AnimatePresence>
        {mobileNav && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-lm-pastel-green flex flex-col p-10 z-0 "
          >
            <div className="">
              <h1 className="text-pink-600 text-2xl uppercase">Portfolio</h1>
            </div>
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col items-center justify-center gap-5 z-0 w-full h-full"
            >
              {navLinks.map((link, index) => {
                return (
                  <div className="overflow-hidden hover:scale-110">
                    <MobileNavLink
                      key={index}
                      title={link.title}
                      href={link.href}
                    />
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default MobileHeader;

const MobileNavLink = ({ title, href }) => {
  const linkVar = {
    initial: {
      y: "-30svh",
      transition: {
        duration: 0.2,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0, 0.5, 0.45, 1],
      },
    },
  };
  return (
    <motion.div
      variants={linkVar}
      className="text-5xl uppercase text-black hover:text-pink-500 hover:scale-150"
    >
      <a href={href}>{title}</a>
    </motion.div>
  );
};
