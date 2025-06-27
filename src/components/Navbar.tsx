'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

// Mendefinisikan komponen sebagai React.FC (Functional Component)
// Ini adalah praktik umum di TypeScript untuk komponen fungsional.
const Navbar: React.FC = () => {
    // Menambahkan tipe data <boolean> pada useState untuk kejelasan dan type safety
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    // Fungsi ini tidak memerlukan tipe tambahan karena TypeScript dapat menyimpulkannya
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Begitu pula dengan fungsi-fungsi ini
    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        // Sisa dari JSX tidak berubah sama sekali
        <nav className='fixed top-0 left-0 w-full bg-transparent text-white p-4 z-50'>
            <div className='container mx-auto flex justify-between items-center'>
                {/* Logo */}
                <Link href='/' className='text-2xl font-bold flex items-center'>
                    <Image
                        src='/botanic-logo.png'
                        alt='Botanic Logo'
                        width={120}
                        height={40}
                    />
                </Link>

                {/* Desktop Menu - Centered with Glassmorphism Effect */}
                <div className='hidden md:flex justify-center items-center flex-grow'>
                    <ul className='flex items-center space-x-4 bg-black/20 backdrop-blur-md rounded-full px-8 py-3 text-white'>
                        <li>
                            <Link
                                href='#'
                                className='hover:text-yellow-400 transition-colors duration-300'
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='#'
                                className='hover:text-yellow-400 transition-colors duration-300'
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='#'
                                className='hover:text-yellow-400 transition-colors duration-300'
                            >
                                Service
                            </Link>
                        </li>
                        <li
                            className='relative'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className='flex items-center hover:text-yellow-400 transition-colors duration-300'>
                                Pages <IoIosArrowDown className='ml-1' />
                            </button>
                            {isDropdownOpen && (
                                <ul className='absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white text-black rounded-lg shadow-lg p-2 w-32'>
                                    <li>
                                        <Link
                                            href='/store'
                                            className='block px-4 py-2 hover:bg-gray-200 rounded'
                                        >
                                            Store
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link
                                href='#'
                                className='hover:text-yellow-400 transition-colors duration-300'
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Sign Up Button - Desktop */}
                <div className='hidden md:flex'>
                    <button className='bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg text-[14px]'>
                        Sign Up Now
                    </button>
                </div>

                {/* Mobile Menu Button (Hamburger) */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-2xl'>
                        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Panel with Slide Animation */}
            <div
                className={`md:hidden fixed top-0 left-0 w-3/4 h-full bg-gray-900/95 backdrop-blur-lg shadow-xl transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className='p-5 flex flex-col h-full'>
                    <h2 className='text-2xl font-bold mb-8'>Botanic</h2>
                    <ul className='flex flex-col space-y-6 text-lg'>
                        <li>
                            <Link href='#' onClick={toggleMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='#' onClick={toggleMenu}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href='#' onClick={toggleMenu}>
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link href='/store' onClick={toggleMenu}>
                                Store
                            </Link>
                        </li>
                        <li>
                            <Link href='#' onClick={toggleMenu}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div className='mt-auto'>
                        <button className='w-full bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition-all duration-300'>
                            Sign Up Now
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;