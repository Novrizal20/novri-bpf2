export default function About() {

    return (

        <section className="bg-[#07112d] text-white py-28">

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

                {/* Left */}
                <div>

                    <span className="text-orange-400 font-semibold tracking-widest uppercase">
                        About Foodies
                    </span>

                    <h2 className="text-5xl font-extrabold leading-tight mt-6">

                        Platform Makanan Modern
                        Untuk Semua Orang

                    </h2>

                    <p className="mt-8 text-gray-300 leading-9 text-lg">

                        Foodies hadir untuk membantu pengguna menemukan
                        makanan terbaik dengan cepat dan mudah.
                        Kami menyediakan berbagai pilihan makanan berkualitas
                        dengan sistem pemesanan modern dan pengiriman cepat.

                    </p>

                    <p className="mt-6 text-gray-400 leading-8">

                        Dengan tampilan modern dan pengalaman pengguna yang nyaman,
                        Foodies menjadi solusi terbaik untuk kebutuhan kuliner harianmu.

                    </p>

                </div>

                {/* Right */}
                <div className="grid grid-cols-2 gap-6">

                    {/* Card 1 */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">

                        <h3 className="text-4xl font-extrabold text-orange-500">
                            10K+
                        </h3>

                        <p className="mt-4 text-gray-300">
                            Pelanggan Aktif
                        </p>

                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">

                        <h3 className="text-4xl font-extrabold text-orange-500">
                            500+
                        </h3>

                        <p className="mt-4 text-gray-300">
                            Partner Restaurant
                        </p>

                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">

                        <h3 className="text-4xl font-extrabold text-orange-500">
                            24/7
                        </h3>

                        <p className="mt-4 text-gray-300">
                            Customer Support
                        </p>

                    </div>

                    {/* Card 4 */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">

                        <h3 className="text-4xl font-extrabold text-orange-500">
                            100%
                        </h3>

                        <p className="mt-4 text-gray-300">
                            Fast Delivery
                        </p>

                    </div>

                </div>

            </div>

        </section>

    );
}