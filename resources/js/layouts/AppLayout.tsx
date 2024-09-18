import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { Head } from "@inertiajs/react";
import { PropsWithChildren } from "react";

const AppLayout = ({
    title,
    footer = false,
    children,
}: PropsWithChildren<{ title: string; footer: boolean }>) => {
    return (
        <>
            <Head title={title} />
            <NavBar />

            <div className="flex">{children}</div>
            {footer && <Footer />}
        </>
    );
};

export default AppLayout;
