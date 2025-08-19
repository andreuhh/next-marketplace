import { Category } from "@/payload-types";
import configPromise from "@payload-config";
import { getPayload } from "payload";

import Footer from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";

interface Props {
    children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
    const payload = await getPayload({
        config: configPromise
    });

    const data = await payload.find({
        collection: 'categories',
        depth: 1, // Populate subcategories
        pagination: false,
        where: {
            parent: {
                exists: false,
            }
        }
    });

    const formattedData = data.docs.map((doc) => ({
        ...doc,
        subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
            ...(doc as Category),
            subcategories: undefined
        }))
    }));

    console.log(formattedData);

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />
            <SearchFilters data={formattedData} />
            <div className="flex-1">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;