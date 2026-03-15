import ReactDOM from 'react-dom/client';
import App from '@/App';
import { ThemeProvider } from '@/context/ThemeContext';
import { BrandProvider } from '@/context/BrandContext';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <BrandProvider>
      <App />
    </BrandProvider>
  </ThemeProvider>
);
