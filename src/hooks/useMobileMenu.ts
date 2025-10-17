import { useState } from "react";
import { useAppState } from "../store/app-state";

export const useMobileMenu = () => {
  const { showMenu, setShowMenu } = useAppState();
  const [menuAnimatingOut, setMenuAnimatingOut] = useState(false);

  const shouldRenderMenu = showMenu || menuAnimatingOut;

  const toggleMenu = () => {
    if (showMenu) {
      setMenuAnimatingOut(true);
      setTimeout(() => {
        setMenuAnimatingOut(false);
        setShowMenu(false);
      }, 300);
    } else {
      setShowMenu(true);
    }
  };

  return {
    showMenu,
    shouldRenderMenu,
    menuAnimatingOut,
    toggleMenu,
    setShowMenu,
  };
};
