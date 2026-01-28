import { useState, useEffect, useRef } from 'react';

export const useScrollManager = () => {
    const [headerClass, setHeaderClass] = useState('header--transparent');

    // Create a "persistent box" for the scroll value
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            let newClass = '';

            // Transparent at top
            if (scrollTop === 0) {
                newClass = 'header--transparent';
            }

            if (scrollTop > lastScrollY.current && scrollTop > 100) {
                newClass += ' header--hidden';
            }

            setHeaderClass(newClass);
            lastScrollY.current = scrollTop;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { headerClass };
};