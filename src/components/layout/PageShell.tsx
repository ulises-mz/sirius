"use client";

import { usePathname } from "next/navigation";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WhatsAppFloat from '@/components/layout/whatsapp-float';
import ScrollToTop from '@/components/layout/ScrollToTop';

interface PageShellProps {
    children: React.ReactNode;
    siteConfig: any;
}

export default function PageShell({ children, siteConfig }: PageShellProps) {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith("/admin");

    if (isAdmin) {
        return <>{children}</>;
    }

    return (
        <>
            <ScrollToTop />
            <Header />
            {children}
            <WhatsAppFloat />
            <Footer siteConfig={siteConfig} />
        </>
    );
}
