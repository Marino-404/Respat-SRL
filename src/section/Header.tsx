import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useAppState } from "../store/app-state";
import Logo from "../../public/img/logo.png";
import { headerTextContent } from "../utils/text-content";
import { HiLanguage } from "react-icons/hi2";
import { useMobileMenu } from "../hooks/useMobileMenu";
import { useSectionObserver } from "../hooks/useSectionObserver";

const Header = () => {
  const {
    lang,
    changeLang,
    currentSection,
    setCurrentSection,
    setNavActive,
    setShowMenu,
  } = useAppState();

  useSectionObserver(["home", "about", "services", "equipment", "contact"]);

  const { showMenu, shouldRenderMenu, toggleMenu } = useMobileMenu();

  const navItems = [
    { id: "home", label: headerTextContent(lang).home },
    { id: "about", label: headerTextContent(lang).sobreNosotros },
    { id: "services", label: headerTextContent(lang).trabajos },
    { id: "equipment", label: headerTextContent(lang).equipo },
    { id: "contact", label: headerTextContent(lang).contacto },
  ];

  const handleNavClick = (sectionId: string) => {
    setCurrentSection(sectionId);
    setNavActive(true);
    setShowMenu(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navStyles =
    "navbar nav-underline min-w-auto flex items-center justify-center cursor-pointer font-normal transition-colors gap-2 items-center justify-center";

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.05,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  return (
    <header className="w-full fixed z-30 transition-all duration-500 ease-in-out text-detail font-normal bg-black/90 h-[72px] xl:h-[80px] flex items-center shadow-md">
      <div className="flex items-center justify-between w-full xl:px-8 px-2 h-full">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0 h-full">
          <img
            src={Logo}
            alt="Logo"
            onClick={scrollToTop}
            className="h-10 xl:h-18 cursor-pointer"
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden xl:flex h-full items-center gap-14">
          <ul className="flex flex-row items-center gap-14">
            {navItems.map(({ id, label }) => (
              <motion.li
                key={id}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <button
                  className={`${navStyles} text-detail transition-colors font-normal text-md ${
                    currentSection === id ? "text-secondary" : ""
                  }`}
                  onClick={() => handleNavClick(id)}
                >
                  {label}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Botón idioma */}
          <span
            className="cursor-pointer hover:text-secondary text-detail transition-colors"
            onClick={() => changeLang(!lang)}
          >
            <HiLanguage className="w-6 h-6" />
          </span>
        </nav>

        {/* Botón idioma + menú en mobile */}
        <div className="flex items-center gap-4 flex-shrink-0 h-full xl:hidden">
          <span
            className="cursor-pointer hover:text-secondary text-detail transition-colors"
            onClick={() => changeLang(!lang)}
          >
            <HiLanguage className="w-6 h-6" />
          </span>

          <button
            className="text-detail relative w-6 h-4 flex flex-col justify-between items-center group z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-full bg-detail transform transition duration-300 ease-in-out ${
                showMenu ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-detail transition-all duration-300 ease-in-out ${
                showMenu ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-detail transform transition duration-300 ease-in-out ${
                showMenu ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {shouldRenderMenu && (
        <motion.nav
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={mobileMenuVariants}
          className={`fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-black text-detail flex flex-col items-start pl-12 gap-6 pt-10 text-xl xl:hidden z-10`}
        >
          <ul className="flex flex-col gap-6">
            {navItems.map(({ id, label }) => (
              <motion.li
                key={id}
                variants={navItemVariants}
                className={`${
                  currentSection === id ? "text-secondary font-normal" : ""
                }`}
              >
                <button
                  className={`${navStyles} text-detail`}
                  onClick={() => handleNavClick(id)}
                >
                  {label}
                </button>
              </motion.li>
            ))}
          </ul>
          <div className="absolute bottom-[50px] pl-12 left-0 text-xl font-normal text-secondary">
            Respat SRL.
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
