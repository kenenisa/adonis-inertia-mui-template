import { Helmet } from 'react-helmet-async'

import { LoginView } from 'src/sections/login'
import { HelmetProvider } from 'react-helmet-async'
// import App from '@src/app'
import { Suspense } from 'react'
import Main from 'src/layouts/dashboard/main'
import Nav from 'src/layouts/dashboard/nav'
import Box from '@mui/material/Box'
import ThemeProvider from 'src/theme'

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | Minimal UI </title>
      </Helmet>

      <LoginView />
    </>
  )
}
LoginPage.layout = (page) => (
  <ThemeProvider>
    <HelmetProvider>
      <Suspense>
        <Box
          sx={{
            minHeight: 1,
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
          }}
        >

          <Main>{page}</Main>
        </Box>
      </Suspense>
    </HelmetProvider>
  </ThemeProvider>
)
