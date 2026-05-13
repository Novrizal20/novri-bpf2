import { Link } from "react-router-dom";
import BannerImage from "../../assets/hero-banner.png";

export default function PageHeader() {

    return (

        <section className="min-h-screen bg-linear-to-r from-[#07112d] to-[#0b1b43] text-white flex items-center overflow-hidden pt-32">

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

                {/* Left Content */}
                <div>

                    <span className="bg-orange-500/20 text-orange-400 px-5 py-2 rounded-full text-sm font-semibold border border-orange-500/20">
                        #1 Modern Food Platform
                    </span>

                    <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight mt-8">

                        Delicious Food
                        <span className="text-orange-500">
                            {" "}For Your
                        </span>
                        Lifestyle

                    </h1>

                    <p className="mt-8 text-lg text-gray-300 leading-9 max-w-2xl">

                        Nikmati berbagai makanan terbaik dengan kualitas premium,
                        harga terjangkau, dan pengiriman super cepat langsung ke rumahmu.

                    </p>

                    {/* Button */}
                    <div className="mt-10 flex items-center gap-5">

                        <Link
                            to="/menu"
                            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl font-semibold text-lg transition duration-300 shadow-2xl hover:-translate-y-1"
                        >
                            Pesan Sekarang
                        </Link>

                        <Link
                            to="/promo"
                            className="border border-white/20 hover:border-orange-500 hover:bg-orange-500/10 px-8 py-4 rounded-2xl font-semibold transition duration-300"
                        >
                            Explore Menu
                        </Link>

                    </div>

                </div>

                {/* Right Image */}
                <div className="relative flex justify-center">

                    {/* Blur Effect */}
                    <div className="absolute w-112.5 h-112.5 bg-orange-500/30 blur-[120px] rounded-full"></div>

                    <img
                        src={BannerImage}
                        alt="Food Banner"
                        className="relative w-full max-w-162.5 object-contain drop-shadow-[0_20px_80px_rgba(0,0,0,0.7)] hover:scale-105 transition duration-500"
                    />

                </div>

            </div>

        </section>

    );
}