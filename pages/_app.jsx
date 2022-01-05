import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "react-pro-sidebar/dist/css/styles.css";

import { createContext } from 'react';
import { ThemeProvider } from "../provider/Theme";
import '../components/styles/login.modules.css'
import '../components/styles/table.modules.css'
import '../components/styles/checkout.modules.css'
import '../components/styles/calendario.modules.css'
import '../components/styles/togle.modules.css'
import "../components/styles/DataViewDemo.css";

export const RTLContext = createContext();


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
