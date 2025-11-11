import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  icon?: string;
  slug: string;
  keywords: string;
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <div className="p-6">
        <div className="flex items-start mb-4">
          {service.icon && (
            <span className="text-3xl mr-3">{service.icon}</span>
          )}
          <h3 className="text-2xl font-bold">{service.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6">{service.description}</p>
        
        <div className="mb-6">
          <Link 
            href={`/servicios/${service.slug}`}
            className="text-[#1E40AF] font-semibold hover:underline flex items-center"
          >
            Ver detalles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="border-t border-gray-100 pt-4">
          <h4 className="font-semibold mb-2 text-[#3B82F6]">Beneficios clave:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {service.keywords.split(',').slice(0, 3).map((keyword: string, index: number) => (
              <li key={index} className="text-sm text-gray-600">
                {keyword.trim()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}