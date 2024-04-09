"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const itemNavbar = [
  {
    text: "Accueil",
    link: "/",
  },
  {
    text: "Nos Expertises",
    link: "/nos-expertises",
    subItems: [
      {
        title: "Sûreté",
        link: "/nos-expertises/surete",
      },
      {
        title: "Sécurité Incendie",
        link: "/nos-expertises/securite-incendie",
      },
      {
        title: "Eclairage de sécurité",
        link: "/nos-expertises/eclairage-de-securite",
      },
    ],
    isActive: (pathname) => pathname.startsWith("/nos-expertises"),
  },
  {
    text: "Actualités",
    link: "/actualites",
  },
  {
    text: "A Propos",
    link: "/a-propos",
  },
  {
    text: "Contactez-nous",
    link: "/contactez-nous",
  },
  // {
  //   text: "Login",
  //   link: "/api/auth/signin",
  // },
];

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //! DROPDOWN MENU
  const [isFirstItemClicked, setIsFirstItemClicked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Quand on clique à l'extérieur du dropdown, on ferme le dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsFirstItemClicked(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropdownRef = useRef(null);

  //! BURGER TO CROSS + AFFICHE LA NAVBAR MOBILE
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    setNavActive(!navActive);
  };

  //! NAVBAR SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const pathname = usePathname();

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            className={styles.headerLogo}
            src="/Logo/ideksys_white_inline.png"
            width={300}
            height={300}
            alt="Fresque logo"
            onClick={() => setNavActive(false)}
          />
        </Link>
        <div
          className={`${styles.nav__menuBar} ${
            isActive ? styles.activeBurger : ""
          }`}
          onClick={handleClick}
        >
          <div className={`${styles.line} ${styles.l1}`}></div>
          <div className={`${styles.line} ${styles.l2}`}></div>
          <div className={`${styles.line} ${styles.l3}`}></div>
        </div>

        <div
          className={`${navActive ? styles.active : ""} ${
            styles.nav__menuList
          }`}
        >
          {itemNavbar.map((item, index) => {
            const active = item.isActive
              ? item.isActive(pathname)
              : pathname === item.link;
            return (
              <div
                key={index}
                onClick={() => {
                  if (index === 1) {
                    setIsFirstItemClicked(!isFirstItemClicked);
                  } else if (!item.subItems) {
                    handleClick();
                  }
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {index === 1 ? (
                  <div className={styles.nav__item}>{item.text}</div>
                ) : (
                  <Link
                    href={item.link}
                    className={`${styles.nav__item} ${
                      active ? styles.activeLink : ""
                    }`}
                  >
                    {item.text}
                  </Link>
                )}
                {activeIndex === index &&
                  isFirstItemClicked &&
                  item.subItems &&
                  index === 1 && (
                    <div ref={dropdownRef} className={styles.dropdownMenu}>
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.link}
                          className={styles.dropdownItem}
                          onClick={() => handleClick()}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
