import React from 'react';

function Header(props) {
    return (
        <header className="bg-blue-800 font-bold text-white py-4 shadow-md">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="text-2xl font-bold hover:text-red-500">
                    <span>MyWebsite</span>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#home" className="hover:text-yellow-300">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-yellow-300">About</a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-yellow-300">Services</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-yellow-300">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
