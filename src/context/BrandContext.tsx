import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Brand = 'portfolio' | 'fintech' | 'saas' | 'editorial' | 'neon';

interface BrandContextType {
  brand: Brand;
  setBrand: (brand: Brand) => void;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

interface BrandProviderProps {
  children: ReactNode;
}

export const BrandProvider = ({ children }: BrandProviderProps) => {
  const [brand, setBrandState] = useState<Brand>('portfolio');

  useEffect(() => {
    if (brand === 'portfolio') {
      document.documentElement.removeAttribute('data-brand');
    } else {
      document.documentElement.setAttribute('data-brand', brand);
    }
  }, [brand]);

  const setBrand = (next: Brand) => setBrandState(next);

  return <BrandContext.Provider value={{ brand, setBrand }}>{children}</BrandContext.Provider>;
};

export const useBrand = () => {
  const context = useContext(BrandContext);

  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }

  return context;
};
