import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from '@pages/Main'
import ErrorPage from '@pages/Error'
import './locales/i18n'

// Basename condicional para GitHub Pages
const basename = window.location.hostname === 'hanamichidev.github.io' ? '/portafolio' : ''

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
    basename: basename  // Agregar el basename aquí
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
