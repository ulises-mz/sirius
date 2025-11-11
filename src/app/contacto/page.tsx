"use client";
import { useState } from "react";
import "@/styles/globals.css";
import "@/styles/contact-page-new.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const services = [
    "Desarrollo Web",
    "Aplicaciones Móviles",
    "Automatización de Procesos",
    "E-commerce",
    "Branding Digital",
    "Marketing Digital",
    "Consultoría Tecnológica",
    "Otro"
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus('error');
        console.error('Error:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "email":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
        );
      case "phone":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
        );
      case "location":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
        );
      case "whatsapp":
        return (
          <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.243-1.637a11.882 11.882 0 005.74 1.471c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        );
      case "calendar":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5"/>
        );
      case "clock":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
        );
      case "shield-check":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
        );
      case "chat-bubble":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
        );
      case "users-group":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
        );
      case "rocket-launch":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
        );
      case "document-text":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
        );
      case "trophy":
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236S7.5 4.5 12 4.5s6.75-.264 6.75-.264M18.75 4.236c.982.143 1.954.317 2.916.52a6.003 6.003 0 01-5.395 4.972M18.75 4.236V4.5a9.00 9.00 0 01-2.48 5.228m2.48-5.228S16.5 4.5 12 4.5m0 0V9M12 4.5L9.497 14.25M12 4.5l2.503 9.75"/>
        );
      default:
        return (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        );
    }
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <div className="contact-header-container">
          <h1 className="contact-title">CONTACTO</h1>
          <p className="contact-subtitle">
            Estamos listos para ayudarte a transformar tu empresa con soluciones digitales personalizadas.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            
            {/* Contact Info */}
            <div className="contact-info">
              <div>
                <h2>Contáctanos</h2>
                <p>
                  Agenda una reunión gratuita o escríbenos directamente. Nuestro equipo está listo para escuchar tus ideas y convertirlas en realidad.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="contact-methods">
                <div className="contact-method-card">
                  <div className="contact-method-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      {getIcon("email")}
                    </svg>
                  </div>
                  <div className="contact-method-content">
                    <h3>Email</h3>
                    <p>info@codeinvestcr.com</p>
                  </div>
                </div>

                <div className="contact-method-card">
                  <div className="contact-method-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      {getIcon("phone")}
                    </svg>
                  </div>
                  <div className="contact-method-content">
                    <h3>Teléfono</h3>
                    <p>+506 XXXX-XXXX</p>
                  </div>
                </div>

                <div className="contact-method-card">
                  <div className="contact-method-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      {getIcon("location")}
                    </svg>
                  </div>
                  <div className="contact-method-content">
                    <h3>Ubicación</h3>
                    <p>San José, Costa Rica</p>
                  </div>
                </div>

                <div className="contact-method-card">
                  <div className="contact-method-icon whatsapp">
                    <svg fill="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      {getIcon("whatsapp")}
                    </svg>
                  </div>
                  <div className="contact-method-content">
                    <h3>WhatsApp</h3>
                    <a href="https://wa.me/506XXXXXXXX" target="_blank" rel="noopener noreferrer">
                      Chatear ahora
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="quick-actions">
                <h3>Acciones rápidas</h3>
                <div className="quick-actions-buttons">
                  <a 
                    href="https://calendly.com/codeinvestcr/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-cta-button primary"
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      {getIcon("calendar")}
                    </svg>
                    Agendar reunión gratuita
                  </a>
                  <a 
                    href="mailto:info@codeinvestcr.com" 
                    className="contact-cta-button secondary"
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      {getIcon("email")}
                    </svg>
                    Enviar email directo
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>Cuéntanos sobre tu proyecto</h2>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  ❌ Error al enviar el mensaje. Por favor intenta nuevamente.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Tu nombre y apellido"
                  />
                  {errors.name && <p className="form-error">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="+506 XXXX-XXXX"
                  />
                  {errors.phone && <p className="form-error">{errors.phone}</p>}
                </div>

                {/* Company */}
                <div className="form-group">
                  <label htmlFor="company" className="form-label">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                {/* Service */}
                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    placeholder="Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte..."
                  />
                  {errors.message && <p className="form-error">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`submit-btn ${isSubmitting ? '' : 'primary'}`}
                >
                  {isSubmitting ? (
                    <span className="submit-loading">
                      <span className="spinner"></span>
                      Enviando...
                    </span>
                  ) : (
                    'Enviar mensaje'
                  )}
                </button>
              </form>

              <p className="form-note">
                * Campos obligatorios. Tu información está segura con nosotros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="contact-benefits-section">
        <div className="contact-benefits-container">
          <h2 className="contact-benefits-title">
            ¿Por qué contactarnos?
          </h2>
          <div className="contact-benefits-grid">
            <div className="contact-benefit-card">
              <div className="contact-benefit-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  {getIcon("chat-bubble")}
                </svg>
              </div>
              <div className="contact-benefit-content">
                <h3>Consulta Gratuita</h3>
                <p>Evaluamos tu proyecto sin costo y te damos una propuesta personalizada en 24 horas.</p>
              </div>
            </div>

            <div className="contact-benefit-card">
              <div className="contact-benefit-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  {getIcon("shield-check")}
                </svg>
              </div>
              <div className="contact-benefit-content">
                <h3>Garantía de Calidad</h3>
                <p>Respaldamos nuestro trabajo con garantía completa y soporte post-lanzamiento.</p>
              </div>
            </div>

            <div className="contact-benefit-card">
              <div className="contact-benefit-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  {getIcon("users-group")}
                </svg>
              </div>
              <div className="contact-benefit-content">
                <h3>Equipo Especializado</h3>
                <p>Trabajarás directamente con expertos que entienden tu industria y objetivos.</p>
              </div>
            </div>

            <div className="contact-benefit-card">
              <div className="contact-benefit-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  {getIcon("rocket-launch")}
                </svg>
              </div>
              <div className="contact-benefit-content">
                <h3>Entrega Rápida</h3>
                <p>Metodología ágil que garantiza entregas puntuales sin comprometer la calidad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="contact-process-section">
        <div className="contact-process-container">
          <h2 className="contact-process-title">
            Nuestro proceso de trabajo
          </h2>
          <div className="contact-process-timeline">
            <div className="contact-process-step">
              <div className="contact-process-step-number">1</div>
              <div className="contact-process-step-content">
                <h3>Consulta inicial</h3>
                <p>Agenda una videollamada gratuita donde analizamos tus necesidades y objetivos específicos.</p>
              </div>
            </div>

            <div className="contact-process-step">
              <div className="contact-process-step-number">2</div>
              <div className="contact-process-step-content">
                <h3>Propuesta personalizada</h3>
                <p>Te enviamos una propuesta detallada con cronograma, costos y especificaciones técnicas.</p>
              </div>
            </div>

            <div className="contact-process-step">
              <div className="contact-process-step-number">3</div>
              <div className="contact-process-step-content">
                <h3>Desarrollo y seguimiento</h3>
                <p>Iniciamos el proyecto con comunicación constante y entregas parciales para tu aprobación.</p>
              </div>
            </div>

            <div className="contact-process-step">
              <div className="contact-process-step-number">4</div>
              <div className="contact-process-step-content">
                <h3>Lanzamiento y soporte</h3>
                <p>Entregamos tu proyecto completo con capacitación y soporte continuo incluido.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="contact-availability-section">
        <div className="contact-availability-container">
          <h2 className="contact-availability-title">
            Horarios de atención
          </h2>
          <div className="contact-availability-grid">
            <div className="contact-availability-card">
              <div className="contact-availability-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  {getIcon("clock")}
                </svg>
              </div>
              <div className="contact-availability-content">
                <h3>Horario de oficina</h3>
                <p>Lunes a Viernes<br/>8:00 AM - 6:00 PM (GMT-6)</p>
              </div>
            </div>

            <div className="contact-availability-card">
              <div className="contact-availability-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  {getIcon("email")}
                </svg>
              </div>
              <div className="contact-availability-content">
                <h3>Email</h3>
                <p>Respuesta garantizada<br/>en menos de 4 horas</p>
              </div>
            </div>

            <div className="contact-availability-card">
              <div className="contact-availability-icon whatsapp">
                <svg fill="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  {getIcon("whatsapp")}
                </svg>
              </div>
              <div className="contact-availability-content">
                <h3>WhatsApp</h3>
                <p>Soporte inmediato<br/>7 días a la semana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="contact-testimonials-section">
        <div className="contact-testimonials-container">
          <h2 className="contact-testimonials-title">
            Lo que dicen nuestros clientes
          </h2>
          <div className="contact-testimonials-grid">
            <div className="contact-testimonial-card">
              <div className="contact-testimonial-content">
                <p>&quot;Excelente comunicación y entrega puntual. Nuestro sitio web superó todas las expectativas.&quot;</p>
              </div>
              <div className="contact-testimonial-author">
                <div className="contact-testimonial-avatar">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    {getIcon("users-group")}
                  </svg>
                </div>
                <div className="contact-testimonial-info">
                  <h4>María Rodríguez</h4>
                  <p>CEO, TechStartup CR</p>
                </div>
              </div>
            </div>

            <div className="contact-testimonial-card">
              <div className="contact-testimonial-content">
                <p>&quot;El equipo de CodeINVEST transformó completamente nuestra presencia digital. Altamente recomendados.&quot;</p>
              </div>
              <div className="contact-testimonial-author">
                <div className="contact-testimonial-avatar">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    {getIcon("trophy")}
                  </svg>
                </div>
                <div className="contact-testimonial-info">
                  <h4>Carlos Fernández</h4>
                  <p>Director, Innovate Solutions</p>
                </div>
              </div>
            </div>

            <div className="contact-testimonial-card">
              <div className="contact-testimonial-content">
                <p>&quot;Profesionales, creativos y siempre disponibles. Nuestro ROI se incrementó en un 200%.&quot;</p>
              </div>
              <div className="contact-testimonial-author">
                <div className="contact-testimonial-avatar">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    {getIcon("rocket-launch")}
                  </svg>
                </div>
                <div className="contact-testimonial-info">
                  <h4>Ana López</h4>
                  <p>Fundadora, EcoCommerce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">
            Preguntas frecuentes
          </h2>
          
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">¿Cuánto tiempo toma desarrollar un proyecto?</h3>
              <p className="faq-answer">
                Los tiempos varían según la complejidad del proyecto. Un sitio web puede tomar 2-4 semanas, mientras que una aplicación móvil puede requerir 2-6 meses. Te daremos una estimación detallada después de la consulta inicial.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">¿Ofrecen soporte post-lanzamiento?</h3>
              <p className="faq-answer">
                Sí, ofrecemos planes de mantenimiento y soporte continuo para asegurar que tu solución digital se mantenga actualizada y funcionando perfectamente.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">¿Trabajan con empresas de todos los tamaños?</h3>
              <p className="faq-answer">
                Absolutamente. Trabajamos desde startups y emprendedores hasta empresas establecidas, adaptando nuestras soluciones a las necesidades y presupuesto de cada cliente.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">¿Cómo manejan los pagos?</h3>
              <p className="faq-answer">
                Trabajamos con un modelo de pagos flexibles, generalmente divididos en hitos del proyecto. Aceptamos transferencias bancarias y otros métodos de pago seguros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="contact-cta-section">
        <div className="contact-cta-container">
          <h2 className="contact-cta-title">
            ¿Listo para comenzar?
          </h2>
          <p className="contact-cta-description">
            Agenda una consulta gratuita y descubre cómo podemos impulsar tu negocio.
          </p>
          <div className="contact-cta-buttons">
            <a 
              href="https://calendly.com/codeinvestcr/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta-button primary"
            >
              Agendar consulta gratuita
            </a>
            <a 
              href="https://wa.me/506XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta-button secondary"
            >
              Chatear por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
