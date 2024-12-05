import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOutsideClick = (e: MouseEvent) => {
        const drawer = document.getElementById("drawer-menu");
        if (drawer && !drawer.contains(e.target as Node)) {
            setIsDrawerOpen(false);
        }
    };

    useEffect(() => {
        if (isDrawerOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [isDrawerOpen]);

    return (
        <div className="md:px-8 px-4">
            <div className="h-[50px] lg:h-[65px] w-full max-w-[1180px] mx-auto flex items-center justify-between">
                <Image
                    src="/assets/navbar-logo.svg"
                    alt="logo"
                    width={179}
                    height={43}
                />

                {/* Menu Icon (Visible Below lg) */}
                <div className="lg:hidden text-white text-2xl cursor-pointer">
                    <FiMenu onClick={() => setIsDrawerOpen(true)} />
                </div>
                {/* Links */}
                <div className="lg:flex hidden text-white">
                    <ul className="flex items-center gap-11">
                        <li className="text-[16px] font-medium leading-[24px] list-disc pl-4">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-[16px] font-medium leading-[24px] list-disc pl-4">
                            <Link href="/">Our programs</Link>
                        </li>
                        <li className="text-[16px] font-medium leading-[24px] list-disc pl-4">
                            <Link href="/">About Us</Link>
                        </li>
                        <li className="text-[16px] font-medium leading-[24px] list-disc pl-4">
                            <Link href="/#faq">FAQ</Link>
                        </li>
                    </ul>
                </div>

                {/* Open App Button */}
                <button
                    className="lg:flex hidden w-[178px] rounded-[90px]   h-[50px] md:h-[65px] items-center gap-3"
                    style={{
                        background:
                            "linear-gradient(28.63deg, #3B6EFF 10.71%, #3DAEFF 86.11%)",
                    }}
                >
                    <Image
                        src="/assets/open-app.svg"
                        alt="open-app"
                        width={45}
                        height={45}
                        className="ml-2.5 lg:h-[45px] md:w-[45px] w-[35px] h-[35px]"
                    />
                    <h2 className="text-[#F8FAFB] font-semibold text-base md:text-lg leading-[27px]">
                        Open App
                    </h2>
                </button>
            </div>

            {/* Drawer Menu */}
            <div
                className={`fixed inset-0 z-50 transition-all duration-300 ${isDrawerOpen
                        ? "bg-black bg-opacity-75"
                        : "bg-opacity-0 pointer-events-none"
                    }`}
            >
                <div
                    id="drawer-menu"
                    className={`fixed right-0 top-0 h-full w-3/4 max-w-[300px] bg-[#071125] p-6 text-white transition-transform duration-300 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {/* Close Icon */}
                    <div className="text-white text-2xl md:mb-10 mb-8 cursor-pointer">
                        <FiX onClick={() => setIsDrawerOpen(false)} />
                    </div>

                    {/* Links */}
                    <ul className="flex flex-col items-center justify-center gap-6">
                        <li className="text-[16px] font-medium leading-[24px]">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-[16px] font-medium leading-[24px]">
                            <Link href="/">Our programs</Link>
                        </li>
                        <li className="text-[16px] font-medium leading-[24px]">
                            <Link href="/">About Us</Link>
                        </li>
                        <li className="text-[16px] font-medium leading-[24px]">
                            <Link href="/#faq">FAQ</Link>
                        </li>
                    </ul>
                    {/* Open App Button */}
                    <button
                        className="mt-6 w-[178px] mx-auto rounded-[90px] h-[50px] flex items-center gap-3 justify-center"
                        style={{
                            background:
                                "linear-gradient(28.63deg, #3B6EFF 10.71%, #3DAEFF 86.11%)",
                        }}
                    >
                        <Image
                            src="/assets/open-app.svg"
                            alt="open-app"
                            width={45}
                            height={45}
                            className="w-[35px] h-[35px]"
                        />
                        <h2 className="text-[#F8FAFB] font-semibold text-base md:text-lg leading-[27px]">
                            Open App
                        </h2>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
