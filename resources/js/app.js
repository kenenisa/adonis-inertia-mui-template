import { Suspense } from 'react'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import DashboardLayout from 'src/layouts/dashboard';
import ThemeProvider from 'src/theme';
import { HelmetProvider } from 'react-helmet-async';
createInertiaApp({
  // Webpack
  resolve: name => {
    const page = require(`./pages/${name}`)
    if (page) {
      page.default.layout = page.default.layout || (page => (
        <HelmetProvider>
          <ThemeProvider>
            <DashboardLayout>
              <div>
                <Suspense>
                  {page}
                </Suspense>
              </div>
            </DashboardLayout>
          </ThemeProvider>
        </HelmetProvider>
      ))
    }
    return page
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})


