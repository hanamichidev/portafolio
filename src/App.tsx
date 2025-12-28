import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from '@pages/Main'
import ErrorPage from '@pages/Error'

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
  ])

function App() {
  const router = getRouter()

  return (
    <ChakraProvider value={defaultSystem}>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
