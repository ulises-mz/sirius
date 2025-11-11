"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/styles/globals.css";
import "@/styles/blog-page-new.css";
import { blogPosts, categories } from "@/data/post";
import { useScrollToTop } from "@/components/layout/ScrollToTop";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const postsPerPage = 21; // Número de posts por página (7x3 grid)
  const postsGridRef = useRef<HTMLDivElement>(null);
  
  // Usar el hook personalizado para scroll suave
  const { scrollToTop } = useScrollToTop();

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Calcular paginación
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Reset página cuando cambian los filtros
  const handleCategoryChange = (category: string) => {
    setIsTransitioning(true);
    setSelectedCategory(category);
    setCurrentPage(1);
    
    // Ejecutar scroll
    scrollToTop();
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
    if (term === "") {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
    }
  };

  // Función para manejar cambios de página con transición suave
  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage) return;
    
    setIsTransitioning(true);
    
    // Ejecutar scroll inmediatamente
    scrollToTop();
    
    // Cambiar página después del scroll
    setTimeout(() => {
      setCurrentPage(newPage);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
    }, 500); // Aumentamos el tiempo para asegurar que el scroll complete
  };

  const recentPosts = blogPosts.slice(0, 4);
  const categoryCount = categories.map(cat => ({
    name: cat,
    count: cat === "Todos" ? blogPosts.length : blogPosts.filter(post => post.category === cat).length
  }));

  return (
    <div className="blog-page">
      <div className="blog-main-layout">
        {/* Main Content Area */}
        <div className="blog-content-area">
          {/* Header */}
          <div className="blog-header">
            <h1 className="blog-title">Blog</h1>
            <p className="blog-subtitle">
              Insights, tendencias y consejos prácticos sobre desarrollo web, marketing digital y tecnología para empresas costarricenses.
            </p>
          </div>

          {/* Search */}
          <div className="blog-search-section">
            <div className="blog-search-container">
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="blog-search-input"
              />
              <svg className="blog-search-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>

          {/* Category Tags */}
          <div className="category-tags">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`category-tag ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="posts-empty">
              <h3 className="posts-empty-title">No se encontraron artículos</h3>
              <p className="posts-empty-description">
                Intenta con otros términos de búsqueda o selecciona una categoría diferente.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Todos");
                  setCurrentPage(1);
                }}
                className="posts-empty-button"
              >
                Ver todos los artículos
              </button>
            </div>
          ) : (
            <>
              <div 
                ref={postsGridRef}
                className={`posts-grid ${isTransitioning ? 'transitioning' : ''}`}
              >
                {currentPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <article className="post-card">
                      <div className="post-card-image">
                        <Image 
                          src={post.image}
                          alt={post.title}
                          className="post-card-thumbnail"
                          width={480}
                          height={270}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="post-card-content">
                        <div className="post-card-date">
                          {new Date(post.publishDate).toLocaleDateString('es-CR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </div>
                        <h3 className="post-card-title">{post.title}</h3>
                        <p className="post-card-excerpt">{post.excerpt}</p>
                        <div className="post-card-footer">
                          <div className="post-card-author">
                            <div className="post-card-author-avatar">
                              {post.author.charAt(0)}
                            </div>
                            <span className="post-card-author-name">{post.author}</span>
                          </div>
                          <span className="post-card-category">{post.category}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Controles de paginación */}
              {totalPages > 1 && (
                <div className={`pagination-controls ${isTransitioning ? 'loading' : ''}`}>
                  <button
                    onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                    disabled={currentPage === 1 || isTransitioning}
                    className="pagination-btn pagination-prev"
                  >
                    Anterior
                  </button>
                  
                  <div className="pagination-numbers">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        disabled={isTransitioning}
                        className={`pagination-number ${currentPage === pageNum ? 'active' : ''}`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                    disabled={currentPage === totalPages || isTransitioning}
                    className="pagination-btn pagination-next"
                  >
                    Siguiente
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Sidebar */}
        <div className="blog-sidebar">
          {/* Recent Posts */}
          <div className="sidebar-section">
            <h3 className="sidebar-title">Recientes</h3>
            {recentPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="recent-post">
                  <div className="recent-post-image">
                    <Image 
                      src={post.image}
                      alt={post.title}
                      className="recent-post-thumbnail"
                      width={80}
                      height={60}
                    />
                  </div>
                  <div className="recent-post-content">
                    <div className="recent-post-date">
                      {new Date(post.publishDate).toLocaleDateString('es-CR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="recent-post-title">{post.title}</div>
                    <div className="recent-post-category">{post.category}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Categories */}
          <div className="sidebar-section">
            <h3 className="sidebar-title">Categorías</h3>
            <ul className="sidebar-categories">
              {categoryCount.map((cat) => (
                <li 
                  key={cat.name}
                  className="sidebar-category"
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  <span className="sidebar-category-name">{cat.name}</span>
                  <span className="sidebar-category-count">{cat.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="sidebar-section">
            <h3 className="sidebar-title">Etiquetas</h3>
            <div className="sidebar-tags">
              {["Transformación Digital", "Tecnología", "Innovación", "Casos de Éxito"].map((tag) => (
                <span key={tag} className="sidebar-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="sidebar-section">
            <div className="newsletter-sidebar">
              <h3 className="newsletter-sidebar-title">
                Suscríbete a nuestro boletín
              </h3>
              <p className="newsletter-sidebar-description">
                Recibe las últimas noticias y actualizaciones directamente en tu correo.
              </p>
              <input
                type="email"
                placeholder="Correo electrónico"
                className="newsletter-sidebar-input"
              />
              <button className="newsletter-sidebar-button">
                Suscríbete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
