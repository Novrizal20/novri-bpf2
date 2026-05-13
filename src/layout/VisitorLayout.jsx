// src/layout/VisitorLayout.jsx

import { Outlet } from "react-router-dom";

export default function VisitorLayout() {
    return (

        <div className="min-h-screen bg-gray-100">

            {/* Header khusus visitor */}
            <header className="bg-[#0b1b43] text-white px-8 py-5 shadow-md">

                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    <h1 className="text-3xl font-bold text-[#ff8a65]">
                        Visitor Page
                    </h1>

                    <p className="text-gray-300">
                        Welcome Visitor 👋
                    </p>

                </div>

            </header>

            {/* Content */}
            <main>
                <Outlet />
            </main>

        </div>

    );
}