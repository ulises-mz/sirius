import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, company, service, message } = body;

        // Validación básica
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'Todos los campos obligatorios deben ser completados' },
                { status: 400 }
            );
        }

        // Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Email inválido' },
                { status: 400 }
            );
        }

        // Configura el transporter SMTP con variables de entorno
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true, // true para puerto 465
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email bonito para el admin
        const adminMailOptions = {
            from: `"Contacto Web" <${process.env.SMTP_USER}>`,
            to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER,
            subject: `Nuevo mensaje de contacto de ${name}`,
            replyTo: email,
            html: `
        <div style="font-family:'Genova',sans-serif;max-width:600px;margin:auto;border:1px solid #eee;padding:24px;background:#fafcff;">
          <h2 style="color:#1a237e;">Nuevo mensaje de contacto</h2>
          <table style="width:100%;margin-bottom:16px;">
            <tr><td><strong>Nombre:</strong></td><td>${name}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
            <tr><td><strong>Teléfono:</strong></td><td>${phone}</td></tr>
            <tr><td><strong>Empresa:</strong></td><td>${company || 'No especificada'}</td></tr>
            <tr><td><strong>Servicio:</strong></td><td>${service || 'No especificado'}</td></tr>
          </table>
          <div style="margin-bottom:16px;"><strong>Mensaje:</strong><br/><div style="background:#f5f5f5;padding:12px;border-radius:6px;">${message}</div></div>
          <hr style="margin:24px 0;"/>
          <p style="font-size:14px;color:#333;">Recibido el ${new Date().toLocaleString('es-CR')}</p>
        </div>
      `,
        };

        // Email automático para el cliente con diseño elegante y SVG
        const calendlyUrl = 'https://calendly.com/admin-siriusx/30min';
        const clientMailOptions = {
            from: `"CodeINVEST" <${process.env.SMTP_USER}>`,
            to: email,
            subject: '¡Gracias por contactar a CodeINVEST!',
            html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                body {
                    font-family: 'Inter', sans-serif;
                    color: #FFFFFF;
                    line-height: 1.6;
                    margin: 0;
                    padding: 0;
                    background-color: #050F1D;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #0F172A;
                }
                .header {
                    background: linear-gradient(90deg, #04BE78 0%, #13FFDA 100%);
                    padding: 25px 20px;
                    text-align: center;
                }
                .company-name {
                    color: #0F172A;
                    font-weight: bold;
                    font-size: 28px;
                    letter-spacing: 1px;
                    margin: 0;
                }
                .content {
                    padding: 30px;
                }
                .greeting {
                    color: #FFFFFF;
                    font-size: 24px;
                    margin-bottom: 20px;
                    font-weight: 600;
                }
                .message {
                    margin-bottom: 25px;
                    color: #9CA3AF;
                    font-size: 16px;
                    line-height: 1.6;
                }
                .calendly-button {
                    display: block;
                    width: 250px;
                    margin: 0 auto 30px;
                    padding: 15px 0;
                    background-color: #04BE78;
                    color: #0F172A;
                    text-align: center;
                    text-decoration: none;
                    font-weight: bold;
                    border-radius: 10px;
                    font-size: 16px;
                    transition: all 0.3s ease;
                }
                .calendly-button:hover {
                    background-color: #039a63;
                    transform: translateY(-2px);
                }
                .signature-container {
                    background-color: #08111E;
                    border-radius: 10px;
                    overflow: hidden;
                    margin-top: 30px;
                    border: 1px solid #1E293B;
                }
                .signature-header {
                    background: linear-gradient(90deg, #04BE78 0%, #13FFDA 100%);
                    padding: 15px 20px;
                    text-align: center;
                }
                .signature-body {
                    padding: 25px;
                    color: #FFFFFF;
                }
                .contact-info {
                    margin-bottom: 20px;
                }
                .contact-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 15px;
                }
                .contact-icon {
                    width: 30px;
                    color: #13FFDA;
                    margin-right: 15px;
                }
                .contact-text {
                    color: #FFFFFF;
                    text-decoration: none;
                    font-size: 15px;
                    transition: color 0.3s ease;
                }
                .contact-text:hover {
                    color: #13FFDA;
                }
                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin-top: 25px;
                    padding-top: 20px;
                    border-top: 1px solid #1E293B;
                }
                .social-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 45px;
                    height: 45px;
                    background-color: #053132;
                    color: #13FFDA;
                    border-radius: 50%;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .social-icon:hover {
                    background-color: #04BE78;
                    color: #0F172A;
                    transform: translateY(-3px);
                }
                .tagline {
                    color: #13FFDA;
                    font-style: italic;
                    margin-top: 20px;
                    font-size: 14px;
                    text-align: center;
                }
                .footer {
                    text-align: center;
                    padding: 20px;
                    color: #9CA3AF;
                    font-size: 12px;
                    border-top: 1px solid #1E293B;
                }
                .svg-icon {
                    width: 20px;
                    height: 20px;
                    fill: currentColor;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="company-name">CODEINVEST</div>
                </div>
                
                <div class="content">
                    <h2 class="greeting">¡Hola ${name}!</h2>
                    
                    <div class="message">
                        <p>Espero que estés muy bien. Hemos recibido tu mensaje y pronto uno de nuestros especialistas te responderá personalmente.</p>
                        <p>Si deseas avanzar más rápido, puedes agendar una cita gratuita con nuestro equipo:</p>
                    </div>
                    
                    <a href="${calendlyUrl}" class="calendly-button">Agendar cita en Calendly</a>
                    
                    <div class="signature-container">
                        <div class="signature-header">
                            <div class="company-name">CONTACTO</div>
                        </div>
                        
                        <div class="signature-body">
                            <div class="contact-info">
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <svg class="svg-icon" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                                        </svg>
                                    </div>
                                    <a href="https://codeinvestcr.com" class="contact-text">https://codeinvestcr.com</a>
                                </div>
                                
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <svg class="svg-icon" viewBox="0 0 24 24">
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                        </svg>
                                    </div>
                                    <a href="tel:+50661274805" class="contact-text">+506 6127-4805</a>
                                </div>
                                
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <svg class="svg-icon" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                                        </svg>
                                    </div>
                                    <a href="mailto:info@codeinvestcr.com" class="contact-text">info@codeinvestcr.com</a>
                                </div>
                            </div>
                            
                            <div class="social-links">
                                <a href="https://www.instagram.com/codeinvestcr" class="social-icon">
                                    <svg class="svg-icon" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                    </svg>
                                </a>
                                <a href="https://wa.me/50661274805" class="social-icon">
                                    <svg class="svg-icon" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.49"/>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/codeinvestcr" class="social-icon">
                                    <svg class="svg-icon" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                                <a href="https://codeinvestcr.com" class="social-icon">
                                    <svg class="svg-icon" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                    </svg>
                                </a>
                            </div>
                            
                            <div class="tagline">
                                Transformando ideas en soluciones digitales
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="footer">
                    <p>Este es un mensaje automático, por favor no responder directamente a este correo.</p>
                    <p>© ${new Date().getFullYear()} CodeINVEST. Todos los derechos reservados.</p>
                </div>
            </div>
        </body>
        </html>
      `,
        };

        // Enviar ambos correos
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(clientMailOptions);

        return NextResponse.json(
            {
                success: true,
                message: 'Mensaje enviado exitosamente. Te contactaremos pronto.'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}