import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <Container maxW="container.md" h="100vh" display="flex" alignItems="center">
      <VStack spacing={6} align="center" textAlign="center">
        <Heading as="h1" size="2xl">
          404
        </Heading>
        <Heading as="h2" size="lg">
          Página no encontrada
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Lo sentimos, la página que buscas no existe.
        </Text>
        <Button colorScheme="blue" onClick={() => navigate('/')}>
          Volver al inicio
        </Button>
      </VStack>
    </Container>
  )
}
