import products from "../../data/products.json";

export default function Products() {

    return (

        <section className="bg-linear-to-r from-[#07112d] to-[#0b1b43] text-white py-28">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-20">

                    <span className="text-orange-400 font-semibold uppercase tracking-widest">
                        Our Products
                    </span>

                    <h2 className="text-5xl font-extrabold mt-5">
                        Best Popular Foods
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">

                        Nikmati berbagai pilihan makanan favorit dengan kualitas terbaik
                        dan rasa yang menggugah selera.

                    </p>

                </div>

                {/* Product Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {products.map((product) => (

                        <div
                            key={product.id}
                            className="
                            bg-white/10
                            backdrop-blur-lg
                            border border-white/10
                            rounded-3xl
                            p-6
                            hover:-translate-y-3
                            hover:shadow-2xl
                            transition-all duration-300
                            "
                        >

                            {/* Image */}
                            <div className="bg-white rounded-2xl p-6 flex justify-center">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-40 h-40 object-contain hover:scale-110 transition duration-300"
                                />

                            </div>

                            {/* Product Info */}
                            <div className="mt-8">

                                <h3 className="text-2xl font-bold">
                                    {product.name}
                                </h3>

                                <p className="text-orange-400 text-xl font-semibold mt-3">
                                    Rp {product.price.toLocaleString("id-ID")}
                                </p>

                                <button
                                    className="
                                    mt-6
                                    w-full
                                    bg-orange-500
                                    hover:bg-orange-600
                                    py-3
                                    rounded-2xl
                                    font-semibold
                                    transition duration-300
                                    "
                                >
                                    Order Now
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}