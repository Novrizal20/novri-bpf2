import { useState } from "react";
import { LoginAPI } from "../services/LoginAPI";
import AlertBox from "../components/AlertBox";

export default function Register1() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle perubahan nilai input form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // Handle form submission untuk register
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi kecocokan password di client-side
    if (dataForm.password !== dataForm.confirmPassword) {
      setError("Terjadi kesalahan: Password dan Konfirmasi Password tidak cocok!");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      // Kirim data ke service LoginAPI (Sudah diperbaiki)
      await LoginAPI.register(dataForm);

      setSuccess("Registrasi berhasil! Silakan cek email Anda untuk konfirmasi.");

      // Kosongkan Form setelah Success
      setDataForm({ name: "", email: "", password: "", confirmPassword: "" });

      // Hilangkan pesan Success setelah 5 detik
      setTimeout(() => setSuccess(""), 5000);
    } catch (err) {
      // Mengambil pesan error spesifik dari Supabase jika ada
      const errMsg = err.response?.data?.msg || err.message;
      setError(`Terjadi kesalahan: ${errMsg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Register Akun</h2>
      </div>

      {error && <AlertBox type="error">{error}</AlertBox>}

      {success && <AlertBox type="success">{success}</AlertBox>}

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Buat Akun Baru
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={dataForm.name}
            placeholder="Nama Lengkap"
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                        focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                        duration-200"
          />

          <input
            type="email"
            name="email"
            value={dataForm.email}
            placeholder="Alamat Email"
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                        focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                        duration-200"
          />

          <input
            type="password"
            name="password"
            value={dataForm.password}
            placeholder="Password (Minimal 6 karakter)"
            onChange={handleChange}
            disabled={loading}
            required
            minLength={6}
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                        focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                        duration-200"
          />

          <input
            type="password"
            name="confirmPassword"
            value={dataForm.confirmPassword}
            placeholder="Konfirmasi Password"
            onChange={handleChange}
            disabled={loading}
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                        focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all
                        duration-200"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold
                        rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500
                        focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                        transition-all duration-200 shadow-lg"
          >
            {loading ? "Mohon Tunggu..." : "Daftar Akun"}
          </button>
        </form>
      </div>
    </div>
  );
}