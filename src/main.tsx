import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './global/themeProvider.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './global/router.tsx';
import { TeamProvider } from './global/teamProvider.tsx';
import { TurnierProvider } from './global/turnierProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TurnierProvider>
      <TeamProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </TeamProvider>
    </TurnierProvider>
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
