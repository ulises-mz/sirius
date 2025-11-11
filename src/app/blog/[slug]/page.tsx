import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/blog-post-page.css";
import { blogPosts } from "@/data/post";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post no encontrado | CodeINVEST Blog',
      description: 'El artículo que buscas no existe.',
    };
  }

  return {
    title: `${post.title} | CodeINVEST Blog`,
    description: post.excerpt,
    keywords: [
      ...post.tags,
      'CodeINVEST',
      'blog tecnología Costa Rica',
      'desarrollo web CR',
      'marketing digital',
      post.category.toLowerCase()
    ],
    authors: [{ name: 'CodeINVEST' }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      locale: 'es_CR',
      url: `https://www.codeinvestcr.com/blog/${post.slug}`,
      siteName: 'CodeINVEST',
      publishedTime: post.publishDate,
      modifiedTime: post.publishDate,
      authors: ['CodeINVEST'],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://www.codeinvestcr.com/blog/${post.slug}`,
    },
  };
}

// Function to process markdown content
const processMarkdown = (content: string): string => {
  return content
    // Procesar encabezados primero
    .replace(/^# (.*$)/gm, '<h1 class="blog-content-h1">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="blog-content-h2">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="blog-content-h3">$1</h3>')
    .replace(/^#### (.*$)/gm, '<h4 class="blog-content-h4">$1</h4>')
    // Procesar texto en negrita y cursiva
    .replace(/\*\*(.*?)\*\*/g, '<strong class="blog-content-strong">$1</strong>')
    .replace(/\b\*([^*\s][^*]*[^*\s]|\w)\*\b/g, '<em class="blog-content-em">$1</em>')
    // Procesar listas con viñetas
    .replace(/^- (.*$)/gm, '<li class="blog-content-li">$1</li>')
    .replace(/^\* (.*$)/gm, '<li class="blog-content-li">$1</li>')
    // Procesar listas numeradas
    .replace(/^\d+\. (.*$)/gm, '<li class="blog-content-li-numbered">$1</li>')
    // Agrupar listas consecutivas
    .replace(/(<li class="blog-content-li">[\s\S]*?<\/li>)/g, function(match) {
      return '<ul class="blog-content-ul">' + match + '</ul>';
    })
    .replace(/(<li class="blog-content-li-numbered">[\s\S]*?<\/li>)/g, function(match) {
      return '<ol class="blog-content-ol">' + match + '</ol>';
    })
    // Limpiar listas duplicadas
    .replace(/<\/ul>\s*<ul class="blog-content-ul">/g, '')
    .replace(/<\/ol>\s*<ol class="blog-content-ol">/g, '')
    // Procesar párrafos
    .split('\n')
    .map(line => {
      const trimmed = line.trim();
      if (!trimmed) return '';
      if (trimmed.startsWith('<h') || trimmed.startsWith('<li') || trimmed.startsWith('<ul') || trimmed.startsWith('<ol') || trimmed.startsWith('</')) {
        return trimmed;
      }
      return `<p class="blog-content-p">${trimmed}</p>`;
    })
    .join('\n');
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  return (
    <div className="blog-post-page">
      {/* Breadcrumb */}
      <div className="blog-breadcrumb">
        <nav className="blog-breadcrumb-nav">
          <Link href="/" className="blog-breadcrumb-link">Inicio</Link>
          <span>›</span>
          <Link href="/blog" className="blog-breadcrumb-link">Blog</Link>
          <span>›</span>
          <span className="blog-breadcrumb-current">{post.title}</span>
        </nav>
      </div>

      {/* Article Header */}
      <article className="blog-article">
        <header className="blog-article-header">
          <div className="blog-article-meta">
            <span className="blog-article-category">
              {post.category}
            </span>
            <span className="blog-article-readtime">{post.readTime}</span>
          </div>
          
          <h1 className="blog-article-title">
            {post.title}
          </h1>
          
          <p className="blog-article-excerpt">
            {post.excerpt}
          </p>
          
          <div className="blog-article-author-section">
            <div className="blog-article-author-info">
              <div className="blog-article-author-avatar">
                <span>
                  {post.author.charAt(0)}
                </span>
              </div>
              <div className="blog-article-author-details">
                <div className="blog-article-author-name">{post.author}</div>
                <div className="blog-article-author-date">
                  {new Date(post.publishDate).toLocaleDateString('es-CR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>
            
            <div className="blog-article-social">
              <button className="blog-article-social-button">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="blog-article-social-button">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="blog-article-social-button">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Article Image */}
        <div className="blog-article-image">
          <div className="blog-article-image-container">
            <Image
              src={post.image}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              className="blog-article-main-image"
            />
            <div className="blog-article-image-overlay">
              <span className="blog-article-image-text">
                {post.title}
              </span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="blog-article-content">
          <div 
            dangerouslySetInnerHTML={{ 
              __html: processMarkdown(post.content)
            }}
          />
        </div>

        {/* Tags */}
        <div className="blog-article-tags-section">
          <h3 className="blog-article-tags-title">Etiquetas</h3>
          <div className="blog-article-tags-list">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="blog-article-tag"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="blog-related-posts">
          <h2 className="blog-related-posts-title">
            Artículos Relacionados
          </h2>
          <div className="blog-related-posts-grid">
            {relatedPosts.map((relatedPost) => (
              <article 
                key={relatedPost.id}
                className="blog-related-post-card"
              >
                <div className="blog-related-post-image">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="blog-related-post-main-image"
                  />
                  <div className="blog-related-post-image-overlay">
                    <span className="blog-related-post-image-text">
                      {relatedPost.title}
                    </span>
                  </div>
                </div>
                <div className="blog-related-post-content">
                  <div className="blog-related-post-meta">
                    <span className="blog-related-post-category">
                      {relatedPost.category}
                    </span>
                    <span className="blog-related-post-readtime">{relatedPost.readTime}</span>
                  </div>
                  <h3 className="blog-related-post-title">{relatedPost.title}</h3>
                  <p className="blog-related-post-excerpt">{relatedPost.excerpt}</p>
                  <Link 
                    href={`/blog/${relatedPost.slug}`}
                    className="blog-related-post-link"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="blog-post-cta">
        <div className="blog-post-cta-container">
          <h2 className="blog-post-cta-title">
            ¿Te gustó este artículo?
          </h2>
          <p className="blog-post-cta-description">
            Si necesitas ayuda implementando estas estrategias en tu negocio, estamos aquí para ayudarte.
          </p>
          <div className="blog-post-cta-buttons">
            <Link 
              href="/contacto"
              className="blog-post-cta-primary"
            >
              Consulta gratuita
            </Link>
            <Link 
              href="/blog"
              className="blog-post-cta-secondary"
            >
              Más artículos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
