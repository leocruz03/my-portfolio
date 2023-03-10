import AboutMe from "./components/banners/about_me"
import Contact from "./components/banners/contact"
import Presentation from "./components/banners/presentation"
import Projects from "./components/banners/projects"
import Technologies from "./components/banners/technologies"
import Footer from "./components/footer/footer"
import Navbar from "./components/navigation/navbar"

export default function App() {
    return (
        <div className="w-full">
            <Navbar />
            <main className="w-full px-4 md:px-12 mx-auto max-w-7xl">
                <Presentation />
                <AboutMe />
                <Projects />
                <Technologies />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}