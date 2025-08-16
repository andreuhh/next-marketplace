
import Footer from "./footer";
import { Navbar } from "./navbar";

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />
            <div className="flex-1">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;