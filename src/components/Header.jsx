import React from 'react';

function Header(props) {
    return (
        <header className=" font-bold  py-4 shadow-md text-[--theme-color1]">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="text-2xl font-bold hover:text-red-500">
                    <span>MyWebsite</span>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#home" className="hover:text-red-400">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-red-400">About</a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-red-400">Services</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-red-400">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
