"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    company?: string;
    rating?: number;
    result?: string;
    image?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicar items para efecto infinito
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  
  return (
    <>
      <style jsx global>{`
        @keyframes scroll-infinite-cards {
          to {
            transform: translate(calc(-50% - 0.5rem));
          }
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite-cards var(--animation-duration, 40s) 
                     var(--animation-direction, forwards) 
                     linear infinite;
        }
        
        .testimonial-card {
          position: relative;
          width: 380px;
          max-width: 100%;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%);
          backdrop-filter: blur(16px);
          border-radius: 20px;
          padding: 32px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(58, 200, 255, 0.15);
          box-shadow:
            0 10px 40px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 320px;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          border-color: rgba(58, 200, 255, 0.4);
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 40px rgba(58, 200, 255, 0.15);
        }
        
        .quote-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          opacity: 0.1;
          transform: scale(1.8);
        }
        
        .rating-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
          position: relative;
          z-index: 2;
        }

        .rating-stars svg {
          width: 18px;
          height: 18px;
          fill: #fbbf24;
          filter: drop-shadow(0 2px 4px rgba(251, 191, 36, 0.3));
        }

        .quote-content {
          flex-grow: 1;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
          font-size: 1rem;
          line-height: 1.75;
          color: #e2e8f0;
          font-weight: 400;
        }

        .author-info {
          display: flex;
          align-items: center;
          position: relative;
          z-index: 2;
          margin-bottom: 12px;
        }
        
        .avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3ac8ff, #2a9fd9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-weight: 700;
          margin-right: 14px;
          flex-shrink: 0;
          font-size: 1.3rem;
          box-shadow: 0 4px 15px rgba(58, 200, 255, 0.3);
        }

        .author-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .author-name {
          font-weight: 700;
          color: #ffffff;
          font-size: 1rem;
          line-height: 1.3;
        }

        .author-title {
          font-size: 0.875rem;
          color: #cbd5e1;
          line-height: 1.3;
        }

        .author-company {
          font-size: 0.8rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .result-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, rgba(58, 200, 255, 0.15), rgba(58, 200, 255, 0.05));
          color: #3ac8ff;
          padding: 8px 16px;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 700;
          border: 1px solid rgba(58, 200, 255, 0.3);
          backdrop-filter: blur(8px);
          position: relative;
          z-index: 2;
        }

        .result-badge svg {
          width: 16px;
          height: 16px;
          fill: currentColor;
        }
        
        .card-accent {
          position: absolute;
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, rgba(4, 190, 120, 0.15), transparent);
          border-radius: 50%;
          bottom: -40px;
          left: -40px;
          z-index: 1;
        }
        
        .card-highlight {
          position: absolute;
          top: 0;
          right: 0;
          width: 60%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #04BE78);
          border-radius: 3px;
        }
        
        .scroller {
          position: relative;
          z-index: 20;
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent,
            var(--color-background) 10%,
            var(--color-background) 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            var(--color-background) 10%,
            var(--color-background) 90%,
            transparent
          );
          padding: 40px 0;
        }
        
        .card-list {
          display: flex;
          min-width: max-content;
          flex-shrink: 0;
          flex-wrap: nowrap;
          gap: 32px;
          padding: 8px 0;
        }

        /* Añadido margen horizontal extra */
        .testimonial-card {
          margin: 0 8px;
        }

        @media (max-width: 768px) {
          .testimonial-card {
            width: 340px;
            padding: 24px;
            min-height: 300px;
          }

          .avatar {
            width: 44px;
            height: 44px;
            font-size: 1.1rem;
          }

          .quote-content {
            font-size: 0.95rem;
          }
        }
      `}</style>
      
      <div
        ref={containerRef}
        className={cn(
          "scroller",
          className,
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "card-list",
            start && "animate-scroll-infinite",
            pauseOnHover && "hover:[animation-play-state:paused]",
          )}
        >
          {items.map((item, idx) => (
            <li
              className="relative w-[380px] max-w-full shrink-0"
              key={`${item.name}-${idx}`}
            >
              <div className="testimonial-card">
                <div className="card-highlight"></div>
                <div className="card-accent"></div>

                <svg
                  className="quote-icon"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 17H10C11.6569 17 13 15.6569 13 14V11C13 9.34315 11.6569 8 10 8H7V17ZM7 17V21H3V16C3 13.7909 4.79086 12 7 12M17 17H20C21.6569 17 23 15.6569 23 14V11C23 9.34315 21.6569 8 20 8H17V17ZM17 17V21H13V16C13 13.7909 14.7909 12 17 12"
                        stroke="#3ac8ff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"/>
                </svg>

                {/* Rating Stars */}
                {item.rating && (
                  <div className="rating-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}

                <div className="quote-content">
                  <div className="relative z-20 leading-relaxed font-normal">
                    {item.quote}
                  </div>
                </div>

                <div className="author-info">
                  <div className="avatar">
                    {item.name.charAt(0)}
                  </div>
                  <div className="author-details">
                    <span className="author-name">{item.name}</span>
                    <span className="author-title">{item.title}</span>
                    {item.company && (
                      <span className="author-company">{item.company}</span>
                    )}
                  </div>
                </div>

                {item.result && (
                  <div className="result-badge">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    {item.result}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};