// src/components/shared/portfolio-card.tsx
import LoadingLink from '@/components/shared/loading-link';
import '@/styles/portfolio-card.css';

interface PortfolioItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  backgroundImage: string;
  technologies: string[];
  content: string;
  keywords: string;
}

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="portfolio-card"> {/* Aquí va la clase */}
<div
  className="portfolio-image-placeholder"
  style={{
    backgroundImage: `url(${item.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  &nbsp; {/* contenido invisible para asegurar render */}
</div>


      <div className="portfolio-card-content">
        <h3 className="portfolio-card-title">{item.title}</h3>
        <p className="portfolio-card-description">{item.description}</p>
        <LoadingLink href={`/portafolio/${item.slug}`} className="portfolio-card-link mt-auto">
          Ver caso de estudio
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="portfolio-card-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </LoadingLink>
      </div>
    </div>
  );
}
