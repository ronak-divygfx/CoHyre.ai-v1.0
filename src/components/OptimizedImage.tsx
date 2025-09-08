import React, { memo, useState, useCallback } from 'react';
import { motion } from 'motion/react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    fallback?: string;
    lazy?: boolean;
    priority?: boolean;
    className?: string;
    onLoad?: () => void;
    onError?: () => void;
}

export const OptimizedImage = memo(({
    src,
    alt,
    fallback = '/placeholder.svg',
    lazy = true,
    priority = false,
    className = '',
    onLoad,
    onError,
    ...props
}: OptimizedImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isInView, setIsInView] = useState(!lazy);

    const handleLoad = useCallback(() => {
        setIsLoaded(true);
        onLoad?.();
    }, [onLoad]);

    const handleError = useCallback(() => {
        setHasError(true);
        onError?.();
    }, [onError]);

    const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setIsInView(true);
        }
    }, []);

    // Intersection Observer for lazy loading
    React.useEffect(() => {
        if (lazy && !priority) {
            const observer = new IntersectionObserver(handleIntersection, {
                rootMargin: '50px',
                threshold: 0.1
            });

            const imgElement = document.querySelector(`[data-src="${src}"]`);
            if (imgElement) {
                observer.observe(imgElement);
            }

            return () => {
                if (imgElement) {
                    observer.unobserve(imgElement);
                }
            };
        }
    }, [lazy, priority, src, handleIntersection]);

    const imageSrc = hasError ? fallback : (isInView ? src : '');
    const loading = priority ? 'eager' : 'lazy';

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Skeleton loader */}
            {!isLoaded && !hasError && (
                <div className="absolute inset-0 bg-muted animate-pulse rounded" />
            )}

            {/* Actual image */}
            {isInView && (
                <motion.img
                    src={imageSrc}
                    alt={alt}
                    loading={loading}
                    onLoad={handleLoad}
                    onError={handleError}
                    className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                        } ${className}`}
                    style={{
                        willChange: 'opacity',
                        transform: 'translateZ(0)'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    {...props}
                />
            )}

            {/* Error fallback */}
            {hasError && (
                <div className="flex items-center justify-center w-full h-full bg-muted text-muted-foreground">
                    <span className="text-sm">Image failed to load</span>
                </div>
            )}
        </div>
    );
});

OptimizedImage.displayName = 'OptimizedImage';
