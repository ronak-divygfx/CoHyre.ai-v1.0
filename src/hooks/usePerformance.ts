import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
    fps: number;
    memoryUsage?: number;
    renderTime: number;
}

export const usePerformance = () => {
    const measurePerformance = useCallback(() => {
        const metrics: PerformanceMetrics = {
            fps: 0,
            renderTime: 0
        };

        // Measure FPS
        let lastTime = performance.now();
        let frameCount = 0;

        const measureFPS = () => {
            frameCount++;
            const currentTime = performance.now();

            if (currentTime - lastTime >= 1000) {
                metrics.fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                frameCount = 0;
                lastTime = currentTime;
            }

            requestAnimationFrame(measureFPS);
        };

        // Start FPS measurement
        requestAnimationFrame(measureFPS);

        // Measure memory usage if available
        if ('memory' in performance) {
            const memory = (performance as any).memory;
            metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
        }

        return metrics;
    }, []);

    const optimizeAnimations = useCallback(() => {
        // Reduce animation complexity on low-end devices
        const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

        if (isLowEndDevice) {
            // Disable complex animations
            document.documentElement.style.setProperty('--animation-duration', '0.1s');
            document.documentElement.style.setProperty('--transition-duration', '0.1s');
        }
    }, []);

    const enableSmoothScrolling = useCallback(() => {
        // Enable smooth scrolling with performance optimizations
        document.documentElement.style.scrollBehavior = 'smooth';
        document.documentElement.style.scrollPaddingTop = '80px';

        // Optimize scroll performance
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    // Scroll handling logic here
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        optimizeAnimations();
        const cleanup = enableSmoothScrolling();

        return cleanup;
    }, [optimizeAnimations, enableSmoothScrolling]);

    return {
        measurePerformance,
        optimizeAnimations,
        enableSmoothScrolling
    };
};
