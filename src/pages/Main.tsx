import { Box } from '@chakra-ui/react'
import Menu from '@/components/shared/Navbar/Menu'
import PresentationBlock from '@shared/PresentationBlock/PresentationBlock'
import StepsComponent from '@shared/StepsComponent/StepsComponent'
import ProjectsCarousel from '@shared/ProjectsCarousel/ProjectsCarousel'
import { useState } from 'react'
import ContactComponent from '@/components/shared/ContactComponent/ContactComponent'

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
        return <ContactComponent />
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
