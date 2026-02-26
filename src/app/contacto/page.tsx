import ContactClient from "./contact-client";
import { getConfig } from "@/lib/cms-data";

export const revalidate = 60; // ISR for contact page config updates

export const metadata = {
    title: "Contacto | Sirius - Agencia Digital",
    description: "Ponte en contacto con Sirius. Hablemos de tu próximo proyecto digital, desarrollo web o automatización.",
};

export default async function ContactPage() {
    const config = await getConfig();

    return <ContactClient config={config} />;
}
