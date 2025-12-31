import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import Menu from '@/components/shared/Navbar/Menu'
import PresentationBlock from '@shared/PresentationBlock/PresentationBlock'
import StepsComponent from '@shared/StepsComponent/StepsComponent'
import { useState } from 'react'

export default function Main() {
  const [activeSection, setActiveSection] = useState('home')

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <PresentationBlock />
      case 'about':
        return <StepsComponent />
      case 'projects':
        return (
          <Container maxW="container.xl" py={16}>
            <VStack align="center" textAlign="center">
              <Heading as="h2" size="lg" mb={4}>
                Proyectos
              </Heading>
              <Text>Contenido de la sección projects - En construcción</Text>
            </VStack>
          </Container>
        )
      case 'contact':
        return (
          <Container maxW="container.xl" py={16}>
            <VStack align="center" textAlign="center">
              <Heading as="h2" size="lg" mb={4}>
                Contacto
              </Heading>
              <Text>Contenido de la sección contact - En construcción</Text>
            </VStack>
          </Container>
        )
      default:
        return <PresentationBlock />
    }
  }

  return (
    <Box>
      {/* Menu Component */}
      <Menu
        onNavigate={setActiveSection}
        activeSection={activeSection}
      />

      {/* Render solo la sección activa */}
      {renderActiveSection()}
    </Box>
  )
}
