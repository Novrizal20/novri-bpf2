import { Link } from "react-router-dom";

export default function Navbar() {

    return (

        <header className="fixed top-0 left-0 w-full z-50 bg-[#0b1b43]/80 backdrop-blur-lg border-b border-white/10">

            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-3xl font-extrabold text-orange-500 tracking-wide">
                    Foodies
                </h1>

                {/* Navigation */}
                <nav className="hidden lg:flex items-center gap-10 text-white font-medium">

                    <Link
                        to="/visitor"
                        className="hover:text-orange-400 transition duration-300"
                    >
                        Home
                    </Link>

                    <Link
                        to="/menu"
                        className="hover:text-orange-400 transition duration-300"
                    >
                        Menu
                    </Link>

                    <Link
                        to="/promo"
                        className="hover:text-orange-400 transition duration-300"
                    >
                        Promo
                    </Link>

                    <Link
                        to="/about"
                        className="hover:text-orange-400 transition duration-300"
                    >
                        About
                    </Link>

                    <Link
                        to="/contact"
                        className="hover:text-orange-400 transition duration-300"
                    >
                        Contact
                    </Link>

                </nav>

                {/* Auth Button */}
                <div className="flex items-center gap-4">

                    <Link
                        to="/login"
                        className="text-white hover:text-orange-400 transition"
                    >
                        Sign In
                    </Link>

                    <Link
                        to="/register"
                        className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-2xl font-semibold shadow-lg transition duration-300"
                    >
                        Sign Up
                    </Link>

                </div>

            </div>

        </header>

    );
}