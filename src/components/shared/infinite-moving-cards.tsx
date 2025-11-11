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
          width: 320px;
          max-width: 100%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 30px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .testimonial-card:hover {
          transform: translateY(-5px);
          border-color: rgba(4, 190, 120, 0.3);
        }
        
        .quote-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          opacity: 0.1;
          transform: scale(1.8);
        }
        
        .quote-content {
          flex-grow: 1;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
          font-size: 0.95rem;
          line-height: 1.7;
          color: #cbd5e1;
        }
        
        .author-info {
          display: flex;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        
        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #04BE78, #13FFDA);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f172a;
          font-weight: bold;
          margin-right: 15px;
          flex-shrink: 0;
          font-size: 1.2rem;
        }
        
        .author-details {
          display: flex;
          flex-direction: column;
        }
        
        .author-name {
          font-weight: 600;
          color: #f8fafc;
          font-size: 1rem;
        }
        
        .author-title {
          font-size: 0.85rem;
          color: #94a3b8;
        }
        
        .testimonial-tag {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: rgba(4, 190, 120, 0.15);
          color: #13FFDA;
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 500;
          backdrop-filter: blur(5px);
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
          gap: 64px; /* Espacio horizontal aumentado */
          padding: 8px 0;
        }
        
        /* Añadido margen horizontal extra */
        .testimonial-card {
          margin: 0 8px;
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
              className="relative w-[320px] max-w-full shrink-0"
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
                        stroke="#13FFDA" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"/>
                </svg>
                
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
                  </div>
                </div>
                
                <div className="testimonial-tag">Testimonio</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};