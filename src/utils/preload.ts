// Preload critical resources for better performance
export const preloadCriticalResources = () => {
    // Preload critical images
    const criticalImages = [
        '/src/assets/68103d75ced3e12824c7641bed8696f744171b5c.png',
        '/src/assets/ad2405c1fa2fb7d0603759ca50008c28645770ac.png',
        '/src/assets/b78e5963a56bd265f08754b6b9974661f15e4697.png'
    ];

    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });

    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    fontLink.href = '/fonts/inter-var.woff2';
    document.head.appendChild(fontLink);
};

// Preload next page resources when hovering over navigation
export const preloadPageResources = (pageName: string) => {
    const pageMap: Record<string, string[]> = {
        'pricing': ['/src/components/PricingPage.tsx'],
        'about': ['/src/components/AboutPage.tsx'],
        'contact': ['/src/components/ContactPage.tsx'],
        'jobs': ['/src/components/JobsPage.tsx'],
        'testimonials': ['/src/components/TestimonialsPage.tsx']
    };

    const resources = pageMap[pageName];
    if (resources) {
        resources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = resource;
            document.head.appendChild(link);
        });
    }
};

// Optimize resource loading
export const optimizeResourceLoading = () => {
    // Add resource hints
    const resourceHints = [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
    ];

    resourceHints.forEach(hint => {
        const link = document.createElement('link');
        Object.entries(hint).forEach(([key, value]) => {
            link.setAttribute(key, value as string);
        });
        document.head.appendChild(link);
    });
};
