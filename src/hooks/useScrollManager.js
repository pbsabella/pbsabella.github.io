import { useState, useEffect } from 'react';

export const useScrollManager = () => {
    const [headerClass, setHeaderClass] = useState('header--transparent');
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            let newClass = '';

            // Transparent at top
            if (scrollTop === 0) {
                newClass = 'header--transparent';
            } else {
                newClass = '';
            }

            // Hide when scrolling down significantly
            if (scrollTop > lastScrollY && scrollTop > 100) {
                newClass += ' header--hidden';
            }

            setHeaderClass(newClass);
            setLastScrollY(scrollTop);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return { headerClass };
};
