"use client";

import { useRef, useState } from "react";

const Menu = () => {
	const container = useRef(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	return <nav ref={container}>Menu</nav>;
};

export default Menu;
