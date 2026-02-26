import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Desarrollo Web en San José Costa Rica | Sirius',
  description: 'Servicios de desarrollo web profesional en San José, Costa Rica. Páginas web, apps móviles y e-commerce para empresas josefinas. Consulta gratuita.',
  keywords: [
    'desarrollo web San José',
    'páginas web San José Costa Rica',
    'diseño web centro San José',
    'aplicaciones móviles San José',
    'desarrolladores web San José',
    'agencia digital San José',
    'e-commerce San José CR'
  ],
  openGraph: {
    title: 'Desarrollo Web San José Costa Rica | Sirius',
    description: 'Transformamos negocios josefinos con soluciones web profesionales.',
    url: 'https://www.siriusx.net/ubicaciones/san-jose',
  },
};

export default function SanJosePage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Desarrollo Web Profesional en San José, Costa Rica
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Sirius es la agencia líder en desarrollo web en San José. Ayudamos a empresas 
            josefinas a crecer con páginas web modernas, aplicaciones móviles y tiendas online.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">¿Por qué elegir Sirius en San José?</h2>
              <ul className="space-y-3">
                <li>✓ Atención personalizada en el centro de San José</li>
                <li>✓ +100 proyectos exitosos para empresas josefinas</li>
                <li>✓ Soporte técnico local en español</li>
                <li>✓ Conocimiento del mercado costarricense</li>
                <li>✓ Reuniones presenciales disponibles</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Servicios en San José</h2>
              <ul className="space-y-3">
                <li>🌐 Páginas web responsivas</li>
                <li>📱 Aplicaciones móviles iOS/Android</li>
                <li>🛒 Tiendas online con pasarelas de pago CR</li>
                <li>🔍 SEO local para aparecer en Google San José</li>
                <li>⚡ Hosting rápido con servidores locales</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Empresas de San José que confían en nosotros</h3>
            <p className="text-gray-600 mb-6">
              Hemos trabajado con restaurantes en Barrio Escalante, tiendas en Paseo Colón, 
              oficinas en Santa Ana, y startups en el centro josefino. Conocemos las necesidades 
              específicas de cada zona de San José.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-blue-50 rounded">
                <h4 className="font-semibold">Centro de San José</h4>
                <p className="text-sm text-gray-600">Oficinas y comercios</p>
              </div>
              <div className="p-4 bg-blue-50 rounded">
                <h4 className="font-semibold">Escazú y Santa Ana</h4>
                <p className="text-sm text-gray-600">Empresas corporativas</p>
              </div>
              <div className="p-4 bg-blue-50 rounded">
                <h4 className="font-semibold">Barrios residenciales</h4>
                <p className="text-sm text-gray-600">Pequeños negocios</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
