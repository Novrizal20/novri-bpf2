import testimonials from "../../data/testimonials.json";

export default function Testimonials() {
     return (

        <section className="bg-[#07112d] text-white py-28">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-20">

                    <span className="text-orange-400 uppercase tracking-widest font-semibold">
                        Testimonials
                    </span>

                    <h2 className="text-5xl font-extrabold mt-5">
                        What Our Customers Say
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">

                        Pendapat pelanggan kami tentang pengalaman menggunakan
                        layanan Foodies.

                    </p>

                </div>

                {/* Testimonial Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {testimonials.map((item) => (

                        <div
                            key={item.id}
                            className="
                            rounded-3xl
                            bg-[#13295f]
                            p-8
                            border border-white/10
                            hover:border-orange-500/30
                            hover:-translate-y-2
                            transition duration-300
                            "
                        >

                            {/* Avatar */}
                            <div className="flex items-center gap-4 mb-6">

                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-16 h-16 rounded-full border-2 border-orange-500"
                                />

                                <div>

                                    <h3 className="text-xl font-bold">
                                        {item.name}
                                    </h3>

                                    <p className="text-orange-400 text-sm">
                                        Customer
                                    </p>

                                </div>

                            </div>

                            {/* Review */}
                            <p className="text-gray-300 leading-8">

                                "{item.review}"

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}