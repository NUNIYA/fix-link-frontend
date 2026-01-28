import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from "./context/AuthContext";
import { MockServiceProvider } from "./context/MockServiceContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <MockServiceProvider>
        <App />
      </MockServiceProvider>
    </AuthProvider>
  </StrictMode>,
)
