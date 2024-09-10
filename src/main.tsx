import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const manifestUrl = "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";

import { Buffer } from 'buffer';
//window.Buffer = Buffer || Buffer ;
window.Buffer = Buffer;
/*
import * as buffer from "buffer";

if (typeof(window as any).global === "undefined") {
  (window as any).global = window;
}

if (typeof(window as any).Buffer === "undefined") {
  (window as any).Buffer = buffer.Buffer;
}
*/

createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <StrictMode>
      <App />
    </StrictMode>
  </TonConnectUIProvider>
);
