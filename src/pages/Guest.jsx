function Guest() {

  const products = [
    {
      id: 1,
      name: "Burger Sedap",
      price: "Rp 25.000",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Pizza Special",
      price: "Rp 45.000",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Ayam Crispy",
      price: "Rp 30.000",
      image:
        "https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Andi",
      review: "Makanannya enak banget!",
    },
    {
      id: 2,
      name: "Budi",
      review: "Pengiriman cepat dan aman.",
    },
    {
      id: 3,
      name: "Citra",
      review: "Harga murah kualitas premium.",
    },
    {
      id: 4,
      name: "Dina",
      review: "Aplikasinya sangat mudah dipakai.",
    },
    {
      id: 5,
      name: "Eko",
      review: "Recommended banget.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <h1 className="text-3xl font-bold text-orange-500">
            Sedap
          </h1>

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Product</a>
            <a href="#">Testimoni</a>
          </nav>

          <div className="flex gap-3">
            <button className="px-5 py-2 border border-orange-500 text-orange-500 rounded-lg">
              Login
            </button>

            <button className="px-5 py-2 bg-orange-500 text-white rounded-lg">
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-orange-100 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Nikmati Makanan
              <span className="text-orange-500"> Lezat </span>
              Bersama Sedap
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Sedap hadir memberikan pengalaman kuliner terbaik
              dengan berbagai pilihan makanan favorit.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl">
              Pesan Sekarang
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
              alt="food"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Tentang Kami
          </h2>

          <p className="text-gray-600 leading-8 text-lg">
            Sedap adalah platform kuliner modern yang menyediakan
            berbagai makanan berkualitas dengan harga terbaik.
          </p>
        </div>
      </section>

      {/* Produk */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Produk Unggulan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {item.name}
                  </h3>

                  <p className="text-orange-500 font-bold text-xl">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Testimoni Pengguna
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">

                  <img
                    src="https://avatar-placeholder.iran.liara.run/"
                    alt={item.name}
                    className="w-14 h-14 rounded-full"
                  />

                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>
                </div>

                <p className="text-gray-600">
                  "{item.review}"
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-14 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Sedap
            </h2>

            <p>Email : sedap@gmail.com</p>
            <p>Phone : 0812-3456-7890</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Sosial Media
            </h2>

            <p>Instagram</p>
            <p>Facebook</p>
            <p>Tiktok</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Partner
            </h2>

            <div className="flex gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/92/Gojek_logo_2022.svg"
                className="w-20 bg-white p-2 rounded"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/86/Grab_logo.svg"
                className="w-20 bg-white p-2 rounded"
              />
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default Guest;