import { useState } from "react";
import { LoginAPI } from "../services/LoginAPI";
import AlertBox from "../components/AlertBox";

export default function Login1() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  // Handle perubahan nilai input form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // Handle form submission untuk Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      // Memanggil fungsi login dari service
      const user = await LoginAPI.login(dataForm.email, dataForm.password);

      setSuccess(`Selamat datang kembali, ${user.name}! Login berhasil.`);
      
      // Simpan data login ke localStorage (opsional, agar status login tersimpan)
      localStorage.setItem("user_session", JSON.stringify(user));

      // Kosongkan form setelah sukses
      setDataForm({ email: "", password: "" });

    } catch (err) {
      // Menangkap pesan error "Email atau Password salah!" dari service
      setError(`Login gagal: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Login Akun</h2>
      </div>

      {error && <AlertBox type="error">{error}</AlertBox>}

      {success && <AlertBox type="success">{success}</AlertBox>}

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Masuk ke Aplikasi
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Alamat Email
            </label>
            <input
              type="email"
              name="email"
              value={dataForm.email}
              placeholder="contoh@email.com"
              onChange={handleChange}
              disabled={loading}
              required
              className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                          focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                          duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={dataForm.password}
              placeholder="Masukkan password Anda"
              onChange={handleChange}
              disabled={loading}
              required
              className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                          focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                          duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold
                        rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500
                        focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                        transition-all duration-200 shadow-lg"
          >
            {loading ? "Mohon Tunggu..." : "Masuk"}
          </button>
        </form>
      </div>
    </div>
  );
}