import { Box } from '@chakra-ui/react'
import Menu from '@/components/shared/Navbar/Menu'
import PresentationBlock from '@shared/PresentationBlock/PresentationBlock'
import StepsComponent from '@shared/StepsComponent/StepsComponent'
import ProjectsCarousel from '@shared/ProjectsCarousel/ProjectsCarousel'
import { useState } from 'react'

export default function Main() {
  const [activeSection, setActiveSection] = useState('home')
  const [hasTypedOnce, setHasTypedOnce] = useState(false)

  const handleNavigate = (section: string) => {
    if (activeSection === 'home' && !hasTypedOnce) {
      setHasTypedOnce(true)
    }
    setActiveSection(section)
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <PresentationBlock skipTyping={hasTypedOnce} />
      case 'about':
        return <StepsComponent />
      case 'projects':
        return <ProjectsCarousel />
      case 'contact':
        return (
          <Box 
            minH="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={4}
          >
            <Box textAlign="center">
              <Box as="h2" fontSize="2xl" fontWeight="bold" mb={4} color="#333">
                Contacto
              </Box>
              <Box color="#333">Contenido de la sección contact - En construcción</Box>
            </Box>
          </Box>
        )
      default:
        return <PresentationBlock skipTyping={hasTypedOnce} />
    }
  }

  return (
    <Box bg="#eee" minH="100vh">
      <Box bg="white">
        <Menu
          onNavigate={handleNavigate}
          activeSection={activeSection}
        />
      </Box>

      {renderActiveSection()}
    </Box>
  )
}
