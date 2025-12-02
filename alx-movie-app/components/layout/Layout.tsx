import Header from "./Header"
import Footer from "./Footer"
import Button from "./Button"

const Layout: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="h-screen">
                Layout content.
            </main>
            <Footer />
        </div>
    )
}
export default Layout;