export default function Footer() {

    return (

        <footer className="bg-linear-to-r from-[#07112d] to-[#0b1b43] text-white pt-24 pb-10">

            <div className="max-w-7xl mx-auto px-6">

                {/* Top Footer */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 pb-16 border-b border-white/10">

                    {/* Brand */}
                    <div>

                        <h1 className="text-4xl font-extrabold text-orange-500 mb-6">
                            Foodies
                        </h1>

                        <p className="text-gray-300 leading-8">

                            Foodies adalah platform makanan modern
                            yang menghadirkan pengalaman kuliner terbaik
                            dengan layanan cepat dan tampilan premium.

                        </p>

                    </div>

                    {/* Navigation */}
                    <div>

                        <h3 className="text-2xl font-bold mb-6">
                            Navigation
                        </h3>

                        <ul className="space-y-4 text-gray-300">

                            <li className="hover:text-orange-400 transition cursor-pointer">
                                Home
                            </li>

                            <li className="hover:text-orange-400 transition cursor-pointer">
                                Menu
                            </li>

                            <li className="hover:text-orange-400 transition cursor-pointer">
                                Promo
                            </li>

                            <li className="hover:text-orange-400 transition cursor-pointer">
                                About
                            </li>

                            <li className="hover:text-orange-400 transition cursor-pointer">
                                Contact
                            </li>

                        </ul>

                    </div>

                    {/* Contact */}
                    <div>

                        <h3 className="text-2xl font-bold mb-6">
                            Contact
                        </h3>

                        <div className="space-y-5 text-gray-300">

                            <p>
                                📧 foodies@gmail.com
                            </p>

                            <p>
                                📞 +62 812 3456 7890
                            </p>

                            <p>
                                📍 Pekanbaru, Indonesia
                            </p>

                        </div>

                    </div>

                    {/* Social */}
                    <div>

                        <h3 className="text-2xl font-bold mb-6">
                            Social Media
                        </h3>

                        <div className="flex gap-4">

                            <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500 transition duration-300 flex items-center justify-center cursor-pointer text-xl">
                                📷
                            </div>

                            <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500 transition duration-300 flex items-center justify-center cursor-pointer text-xl">
                                f
                            </div>

                            <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500 transition duration-300 flex items-center justify-center cursor-pointer text-xl">
                                🐦
                            </div>

                        </div>

                        <p className="text-gray-400 mt-6 leading-8">

                            Follow social media kami untuk mendapatkan
                            informasi promo terbaru setiap hari.

                        </p>

                    </div>

                </div>

                {/* Bottom */}
                <div className="pt-8 text-center text-gray-400 text-sm">

                    © 2026 Foodies. All Rights Reserved.

                </div>

            </div>

        </footer>

    );
}