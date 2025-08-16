import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";


interface navbarItem {
    href: string;
    children: React.ReactNode
}

interface NavbarSideProps {
    items: navbarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const NavbarSidebar = ({
    items,
    open,
    onOpenChange
}: NavbarSideProps) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="left"
                className="p-0 transition-none"
            >
                <SheetHeader className="p-4 border-b">
                    <div className="flex items-center">
                        <SheetTitle className="">Menu</SheetTitle>
                    </div>
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => onOpenChange(false)}
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                        >
                            {item.children}
                        </Link>
                    ))}
                    <div className="border-t">
                        <Link
                            href="/sign-in"
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                        >
                            Log in
                        </Link>
                        <Link href="/sign-up" className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium text-lg">
                            Start selling
                        </Link>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}

export default NavbarSidebar;