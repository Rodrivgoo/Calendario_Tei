import 'react-calendar/dist/Calendar.css'
import '@/styles/global.css'
import '@/styles/typography.css'
import 'react-toastify/dist/ReactToastify.css'

import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { ToastContainer } from 'react-toastify';

import { ModalContent } from '@/components/Modal';
import { EventProvider } from '@/context/EventsContext';
import { StateProvider } from '@/context/StateContext';
import LoginModal from '@/pages/LoginModal';  // Importa el componente LoginModal

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [shouldShowLoginModal, setShouldShowLoginModal] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(true);
  
    // Función para cerrar el modal y cargar la página
    const handleCloseModal = () => {
      setShouldShowLoginModal(false);
      setIsLoading(false);
    };
  
    React.useEffect(() => {
      // Simula un tiempo de carga, por ejemplo, 2 segundos
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      // Limpia el temporizador al desmontar el componente
      return () => clearTimeout(timeout);
    }, []); // Ejecuta este efecto solo en el montaje inicial
  
    return (
      <ThemeProvider forcedTheme={'light'}>
        <EventProvider>
          <StateProvider>
            {/* Mostrar el modal solo si shouldShowLoginModal es verdadero */}
            {shouldShowLoginModal && <LoginModal onClose={handleCloseModal} />}
            {/* Renderizar la aplicación principal solo si isLoading es falso */}
            {!isLoading && !shouldShowLoginModal && (
              <>
                <Component {...pageProps} />
                <ModalContent />
                <ToastContainer className="text-sm" />
              </>
            )}
          </StateProvider>
        </EventProvider>
      </ThemeProvider>
    );
  }
  
  export default MyApp;