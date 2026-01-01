import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from '@pages/Main'
import ErrorPage from '@pages/Error'
import './locales/i18n'

// Basename condicional más específico
const basename = import.meta.env.PROD && window.location.hostname.includes('github.io') ? '/portafolio' : ''

const getRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
    },
    {
      path: '*',
      element: <ErrorPage />,
    },
  ], {
    basename: basename
  })

function App() {
  const router = getRouter()

  return (
    <ChakraProvider value={defaultSystem}>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
