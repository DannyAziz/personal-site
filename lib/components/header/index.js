import { useState, useEffect } from "react";
import { Sun, MoonStars } from "phosphor-react";

import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import * as Styled from "./styled";

const mobileMenuAnim = {
  open: {
    height: "calc(100% - 79px)",
    transition: {
      delay: 0.25,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  },
  closed: {
    height: 0,
    transition: {
      delay: 0.25,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const mobileMenuItemsAnim = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
      staggerDirection: -1
    }
  }
};

const variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    opacity: 0,
    y: -50,
    transition: {
      stiffness: 1000,
      velocity: 100
    }
  }
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  />
);

export const MenuToggle = ({ isOpen }) => (
  <motion.svg
    width="35"
    height="24"
    viewBox="0 0 35 18"
    initial={false}
    animate={isOpen ? "open" : "closed"}
  >
    <Path
      variants={{
        closed: { d: "M 5.46875 6.5 L 29.5312 6.5" },
        open: { d: "M8.99262 20.0073L26.0074 2.99257" }
      }}
      stroke={"currentcolor"}
    />
    <Path
      variants={{
        closed: { d: "M 5.46875 15.25 L 29.5312 15.25" },
        open: { d: "M9 3L26.0148 20.0148" }
      }}
      stroke={"currentcolor"}
    />
  </motion.svg>
);

const Header = ({ theme, setTheme }) => {
  const [initialTheme, _] = useState(theme);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleSideMenu = () => setSideMenuOpen(!sideMenuOpen);

  return (
    <Styled.Header>
      <Styled.MobileNavContainer
        as={motion.div}
        initial={false}
        animate={sideMenuOpen ? "open" : "closed"}
        variants={mobileMenuAnim}
        open={sideMenuOpen}
      >
        <Styled.MobileUl as={motion.ul} variants={mobileMenuItemsAnim}>
          {["Posts", "Projects"].map((item, index) => (
            <Link href={`/${item.toLowerCase()}`} key={index} passHref>
              <Styled.NavLi
                as={motion.li}
                variants={variants}
                onClick={toggleSideMenu}
                // whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.95 }}
              >
                {item}
              </Styled.NavLi>
            </Link>
          ))}
        </Styled.MobileUl>
      </Styled.MobileNavContainer>

      <Styled.LogoContainer>
        <Link href="/" passHref>
          <Styled.Logo>Danny Aziz</Styled.Logo>
        </Link>
      </Styled.LogoContainer>

      <Styled.DesktopNavContainer>
        <Styled.DesktopUl>
          {["Posts", "Projects"].map((item, index) => (
            <Link href={`/${item.toLowerCase()}`} key={index} passHref>
              <Styled.NavLi>{item}</Styled.NavLi>
            </Link>
          ))}
        </Styled.DesktopUl>
      </Styled.DesktopNavContainer>

      <Styled.ThemeToggleContainer onClick={toggleTheme}>
        <AnimatePresence>
          {theme === "light" && (
            <motion.div
              key={"light"}
              initial={
                initialTheme === "light" ? false : { x: 30, y: -30, opacity: 0 }
              }
              animate={{
                x: 0,
                y: 0,
                opacity: 1
              }}
              exit={{ x: 30, y: -30, opacity: 0 }}
              transition={{ type: "spring", mass: 2 }}
              exitBeforeEnter
            >
              <Sun size={28} />
            </motion.div>
          )}
          {theme === "dark" && (
            <motion.div
              key={"dark"}
              initial={
                initialTheme === "dark" ? false : { x: -30, y: 30, opacity: 0 }
              }
              animate={{
                x: 0,
                y: 0,
                opacity: 1
              }}
              exit={{ x: -30, y: 30, opacity: 0 }}
              transition={{ type: "spring", mass: 2 }}
              exitBeforeEnter
            >
              <MoonStars size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </Styled.ThemeToggleContainer>

      <Styled.SideMenuButtonContainer onClick={toggleSideMenu}>
        <MenuToggle isOpen={sideMenuOpen} />
      </Styled.SideMenuButtonContainer>
    </Styled.Header>
  );
};

export default Header;
