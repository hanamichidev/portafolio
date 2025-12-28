import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import Menu from '@shared/Navbar/Menu'
import PresentationBlock from '@shared/PresentationBlock/PresentationBlock'

export default function Main() {
  return (
    <Box>
      {/* Menu Component */}
      <Menu />

      {/* Presentation Block */}
      <PresentationBlock />

      {/* Main Content */}
      <Container maxW="container.xl" py={16}>
        <VStack align="center" textAlign="center">
          <Heading as="h1" size="2xl">
            Bienvenido a mi Portfolio
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Este es el contenido principal de tu sitio web
          </Text>

          {/* Secciones */}
          <Box w="full" mt={8}>
            <Heading as="h2" size="lg" mb={4} id="home">
              Home
            </Heading>
            <Text>Contenido de la sección home</Text>
          </Box>

          <Box w="full">
            <Heading as="h2" size="lg" mb={4} id="about">
              Acerca de
            </Heading>
            <Text>Contenido de la sección about</Text>
          </Box>

          <Box w="full">
            <Heading as="h2" size="lg" mb={4} id="projects">
              Proyectos
            </Heading>
            <Text>Contenido de la sección projects</Text>
          </Box>

          <Box w="full">
            <Heading as="h2" size="lg" mb={4} id="contact">
              Contacto
            </Heading>
            <Text>Contenido de la sección contact</Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
