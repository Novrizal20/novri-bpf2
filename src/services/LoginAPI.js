import axios from 'axios'

const API_URL = "https://dnuunszymmgxhztriihi.supabase.co/rest/v1/register"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRudXVuc3p5bW1neGh6dHJpaWhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzYwOTksImV4cCI6MjA5NzIxMjA5OX0.-hyl50iwq5WNGDQ_RpXyRWlo6yY1lqaOituRym_Aa5M"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const LoginAPI = {
    // Fungsi register yang sudah kita buat sebelumnya
    async register(userData) {
        const body = {
            name: userData.name,
            email: userData.email,
            password: userData.password,
            confirmPassword: userData.confirmPassword
        }
        const response = await axios.post(API_URL, body, { headers })
        return response.data
    },

    // Tambahkan FUNGSI LOGIN Baru di bawah ini
    async login(email, password) {
        // Melakukan filter query menggunakan format REST API Supabase:
        // ?email=eq.nilai_email&password=eq.nilai_password
        const response = await axios.get(`${API_URL}?email=eq.${email}&password=eq.${password}`, { headers })
        
        // Supabase REST API akan mengembalikan Array. 
        // Jika data ditemukan, panjang array pasti lebih dari 0.
        if (response.data.length === 0) {
            throw new Error("Email atau Password salah!");
        }

        // Mengembalikan data user yang berhasil login (index ke-0)
        return response.data[0];
    }
}