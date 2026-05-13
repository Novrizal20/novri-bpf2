import Navbar from "../components/Visitor/Navbar";
import PageHeader from "../components/Visitor/PageHeader";
import About from "../components/Visitor/About";
import Products from "../components/Visitor/Products";
import Testimonials from "../components/Visitor/Testimonials";
import Footer from "../components/Visitor/Footer";
export default function Visitor() {

    return (
        <>
            <Navbar />
            <PageHeader />
            <About />
            <Products />
            <Testimonials />
            <Footer />
        </>
    );
}