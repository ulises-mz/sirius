# Componentes Reutilizables CodeINVEST

Esta librería de componentes reutilizables está diseñada para mantener consistencia visual y funcional en todo el sitio web de CodeINVEST.

## Componentes Disponibles

### 🔘 Button
Botón versátil con múltiples variantes y tamaños.

```tsx
import { Button } from '@/components/shared';

// Ejemplos de uso
<Button variant="primary" size="large" href="/contacto">
  Contactar
</Button>

<Button variant="secondary" onClick={() => console.log('clicked')}>
  Secundario
</Button>

<Button 
  variant="urgent" 
  icon={<SomeIcon />}
  href="https://wa.me/50687634371"
  target="_blank"
>
  WhatsApp Urgente
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'urgent' | 'massive'
- `size`: 'small' | 'medium' | 'large'
- `href`: string (opcional) - Si se proporciona, renderiza como Link o anchor
- `onClick`: función (opcional)
- `icon`: ReactNode (opcional)
- `disabled`: boolean

### 🏷️ Tag
Etiquetas para categorizar contenido, tecnologías, etc.

```tsx
import { Tag } from '@/components/shared';

<Tag variant="tech">React</Tag>
<Tag variant="category">Desarrollo Web</Tag>
<Tag variant="badge">Nuevo</Tag>
```

**Props:**
- `variant`: 'default' | 'tech' | 'category' | 'badge' | 'urgent'
- `size`: 'small' | 'medium' | 'large'
- `icon`: ReactNode (opcional)
- `onClick`: función (opcional)

### 🎯 Badge
Insignias destacadas para promociones, alertas, etc.

```tsx
import { Badge } from '@/components/shared';

<Badge variant="urgent" animate>
  ¡Oferta limitada!
</Badge>

<Badge variant="success" icon={<CheckIcon />}>
  Completado
</Badge>
```

**Props:**
- `variant`: 'default' | 'urgent' | 'limited' | 'success' | 'warning'
- `size`: 'small' | 'medium' | 'large'
- `icon`: ReactNode (opcional)
- `animate`: boolean

### 📦 Section
Contenedor de sección con diferentes backgrounds y espaciados.

```tsx
import { Section } from '@/components/shared';

<Section background="gradient" padding="large">
  <h2>Mi contenido</h2>
</Section>

<Section background="gray" padding="medium" id="about">
  <p>Contenido con fondo gris</p>
</Section>
```

**Props:**
- `background`: 'default' | 'gray' | 'dark' | 'gradient'
- `padding`: 'small' | 'medium' | 'large' | 'none'
- `className`: string (opcional)
- `containerClassName`: string (opcional)
- `id`: string (opcional)

### 📊 Stats
Componente para mostrar estadísticas importantes.

```tsx
import { Stats } from '@/components/shared';

const statsData = [
  {
    icon: <ClockIcon />,
    number: "48h",
    label: "Respuesta garantizada"
  },
  {
    icon: <StarIcon />,
    number: "97%",
    label: "Clientes satisfechos"
  }
];

<Stats stats={statsData} variant="urgency" />
```

**Props:**
- `stats`: Array de objetos con `icon`, `number`, `label`
- `variant`: 'default' | 'urgency' | 'highlight'
- `className`: string (opcional)

### 💬 TestimonialCard & TestimonialsGrid
Tarjetas de testimonios con calificaciones por estrellas.

```tsx
import { TestimonialsGrid } from '@/components/shared';

const testimonials = [
  {
    text: "Excelente servicio y resultados increíbles",
    author: "María González",
    position: "CEO",
    company: "TechCorp",
    rating: 5
  }
];

<TestimonialsGrid testimonials={testimonials} columns={3} />
```

**Props TestimonialsGrid:**
- `testimonials`: Array de testimonios
- `columns`: 1 | 2 | 3
- `className`: string (opcional)

### 🔄 ProcessSteps
Muestra pasos de un proceso con iconos y numeración.

```tsx
import { ProcessSteps } from '@/components/shared';

const steps = [
  {
    number: "01",
    icon: <AnalysisIcon />,
    title: "Análisis",
    description: "Estudiamos tu negocio..."
  }
];

<ProcessSteps
  title="Nuestro Proceso"
  subtitle="Metodología probada"
  steps={steps}
/>
```

### 🛠️ TechnologiesGrid
Grid de tecnologías organizadas por categorías.

```tsx
import { TechnologiesGrid } from '@/components/shared';

const techCategories = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <ReactIcon /> },
      { name: "Next.js", icon: <NextIcon /> }
    ]
  }
];

<TechnologiesGrid
  title="Tecnologías"
  categories={techCategories}
/>
```

### 📞 ContactOptions
Opciones de contacto con iconos y enlaces.

```tsx
import { ContactOptions } from '@/components/shared';

const contacts = [
  {
    icon: <PhoneIcon />,
    title: "Teléfono",
    value: "+506 8763-4371",
    href: "tel:+50687634371",
    primary: true
  },
  {
    icon: <WhatsAppIcon />,
    title: "WhatsApp",
    value: "Mensaje directo",
    href: "https://wa.me/50687634371"
  }
];

<ContactOptions options={contacts} variant="grid" />
```

## Ejemplo Completo

Mira `src/components/examples/ServicesPageExample.tsx` para ver un ejemplo completo de cómo usar todos estos componentes juntos para crear una página de servicios.

## Estilos CSS

Los componentes utilizan las clases CSS existentes del proyecto (portafolio-page.css) y clases de Tailwind CSS. Asegúrate de que estos archivos estén importados:

```tsx
import "@/styles/globals.css";
import "@/styles/portafolio-page.css"; // Para los estilos específicos
```

## Importación

```tsx
// Importar componentes individuales
import { Button, Tag, Badge } from '@/components/shared';

// O importar todo
import * as SharedComponents from '@/components/shared';
```

### 🔍 ServiceIcon
Iconos consistentes para diferentes tipos de servicios.

```tsx
import { ServiceIcon } from '@/components/shared';

<ServiceIcon iconType="desarrollo" className="w-8 h-8" />
<ServiceIcon iconType="ecommerce" />
<ServiceIcon iconType="marketing" />
```

**Props:**
- `iconType`: 'desarrollo' | 'marketing' | 'diseño' | 'consultoria' | 'ecommerce' | 'hosting'
- `className`: string (opcional)

### ✅ FeatureList
Listas de características y beneficios con iconos.

```tsx
import { FeatureList } from '@/components/shared';

<FeatureList
  title="Características incluidas"
  items={["SEO optimizado", "Diseño responsive", "Carga rápida"]}
  variant="features"
/>

<FeatureList
  title="Beneficios que obtienes"
  items={["Más ventas", "Mayor visibilidad", "Mejor conversión"]}
  variant="benefits"
/>
```

**Props:**
- `title`: string
- `items`: string[]
- `variant`: 'features' | 'benefits'
- `className`: string (opcional)

### ❓ FAQSection
Sección de preguntas frecuentes con acordeón.

```tsx
import { FAQSection } from '@/components/shared';

const faqs = [
  {
    question: "¿Cuánto tiempo toma el desarrollo?",
    answer: "Entre 2-4 semanas para proyectos estándar..."
  }
];

<FAQSection
  title="Preguntas Frecuentes"
  faqs={faqs}
/>
```

**Props:**
- `faqs`: Array de objetos con `question` y `answer`
- `title`: string (opcional)
- `className`: string (opcional)

## Ejemplo Completo de Página de Servicio

```tsx
import {
  Button,
  Badge,
  Section,
  ServiceIcon,
  FeatureList,
  ProcessSteps,
  FAQSection,
  Tag
} from '@/components/shared';

const ServicePage = ({ service }) => {
  return (
    <div>
      {/* Header con Badge */}
      <Section background="gradient" padding="large">
        {service.popular && (
          <Badge variant="success" icon={<StarIcon />}>
            Servicio Popular
          </Badge>
        )}
        
        <div className="service-pricing-icon">
          <ServiceIcon iconType={service.icon} />
        </div>
        
        <h1>{service.title}</h1>
        <p>{service.description}</p>
        
        <Button variant="primary" href="/contacto">
          Contactar ahora
        </Button>
      </Section>

      {/* Características y Beneficios */}
      <FeatureList
        title="Características incluidas"
        items={service.features}
        variant="features"
      />
      
      <FeatureList
        title="Beneficios que obtendrás"
        items={service.benefits}
        variant="benefits"
      />

      {/* Proceso */}
      <Section background="gray" padding="large">
        <ProcessSteps
          title="Nuestro proceso de trabajo"
          steps={processSteps}
        />
      </Section>

      {/* Tecnologías */}
      <Section>
        <h2>Tecnologías que utilizamos</h2>
        <div className="tech-tags">
          {service.technologies.map((tech, index) => (
            <Tag key={index} variant="tech">{tech}</Tag>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <FAQSection
        title={`Preguntas sobre ${service.title}`}
        faqs={service.faq}
      />

      {/* CTA Final */}
      <Section background="gradient" padding="large">
        <h2>¿Listo para comenzar?</h2>
        <Button variant="massive" href="/contacto">
          SOLICITAR COTIZACIÓN
        </Button>
      </Section>
    </div>
  );
};
```

## Beneficios

✅ **Consistencia**: Todos los botones, tags y componentes se ven y comportan igual  
✅ **Reutilización**: Escribe una vez, usa en cualquier lugar  
✅ **Mantenimiento**: Cambios centralizados se propagan automáticamente  
✅ **Tipado**: TypeScript para prevenir errores  
✅ **Flexibilidad**: Props opcionales y variantes para diferentes casos de uso

## Próximos Pasos

Para usar estos componentes en la página de servicios existente:

1. Importa los componentes necesarios
2. Reemplaza gradualmente los elementos HTML con los componentes
3. Ajusta los datos/props según tus necesidades
4. Mantén las clases CSS existentes que ya funcionan
