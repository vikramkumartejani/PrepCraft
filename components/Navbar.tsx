import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className="h-[65px] w-full max-w-[1180px] mx-auto flex items-center justify-between">
            <Image src="/assets/navbar-logo.svg" alt="logo" width={179} height={43} />

            {/* Links */}
            <div className="text-white">
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
                        <Link href="/">FAQ</Link>
                    </li>
                </ul>
            </div>

            {/* Open App Button */}
            <button className="w-[178px] rounded-[90px]   h-[50px] md:h-[65px] flex items-center gap-3" style={{background:"linear-gradient(28.63deg, #3B6EFF 10.71%, #3DAEFF 86.11%)"}}>
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
    );
};

export default Navbar;
