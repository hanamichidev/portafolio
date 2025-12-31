import { Box, VStack, Heading, Text, HStack, IconButton, useBreakpointValue, Badge, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import caloxEvidence from '@assets/images/Evidencia Calox.PNG'

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  hasEvidence?: boolean
}

// Componentes de iconos personalizados
const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function ProjectsCarousel() {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const isMobile = useBreakpointValue({ base: true, md: false })

  // Datos de proyectos
  const projects: Project[] = [
    {
      id: '1',
      title: 'Calox Sistema Contable',
      description: 'Desarrollo de sistema contable para ejecutivos de farmaceuticas Calox CR para sacar proyecciones financieras y reportes fiscales.',
      image: 'https://vip.net.ve/wp-content/uploads/2025/08/IMG_9267.jpeg', // Imagen para mostrar en la card
      technologies: ['React', '.Net C#', 'SQL Server'],
      hasEvidence: true
    },
    {
      id: '2',
      title: 'Sistema de Robótica Automatizada',
      description: 'Integración de robots móviles autónomos (MiR) para automatización de almacenes. Desarrollo de APIs para comunicación en tiempo real con sistemas WMS.',
      image: 'https://picsum.photos/400/250?random=1',
      technologies: ['C#', '.NET', 'React', 'IoT'],
      hasEvidence: false
    },
    {
      id: '3',
      title: 'BAC Credomatic Mobile Banking',
      description: 'Desarrollo y mantenimiento de aplicación móvil bancaria con más de 500,000 usuarios activos. Implementación de microservicios en Java y integración con sistemas core bancarios.',
      image: 'https://picsum.photos/400/250?random=2',
      technologies: ['Java', 'Spring Boot', 'Android', 'Microservicios'],
      hasEvidence: true
    },
    {
      id: '4',
      title: 'Plataforma Gubernamental CR',
      description: 'Modernización de sistemas críticos del Gobierno de Costa Rica. Migración de arquitectura legacy a microservicios con alta disponibilidad.',
      image: 'https://picsum.photos/400/250?random=3',
      technologies: ['Java', 'AWS', 'Angular', 'PostgreSQL'],
      hasEvidence: false
    },
    {
      id: '5',
      title: 'GFT/Sophos Banking Solutions',
      description: 'Desarrollo de soluciones bancarias escalables para múltiples entidades financieras. Implementación de arquitecturas de alta disponibilidad.',
      image: 'https://picsum.photos/400/250?random=4',
      technologies: ['Java', 'Spring', 'Oracle', 'Kubernetes'],
      hasEvidence: true
    }
  ]

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const selectProject = (index: number) => {
    setActiveIndex(index)
  }

  const handleEvidenceClick = (projectTitle: string) => {
    console.log(`Mostrando evidencias para: ${projectTitle}`)
    if (projectTitle === 'Calox Sistema Contable') {
      // Abre la imagen local de evidencia, no la de la card
      window.open(caloxEvidence, '_blank', 'noopener,noreferrer')
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextProject()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  // Función para generar un gradiente temático por proyecto
  const getProjectGradient = (index: number) => {
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ]
    return gradients[index % gradients.length]
  }

  if (isMobile) {
    return (
      <Box 
        py={16} 
        px={4} 
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={8} maxW="400px" w="full">
          <Heading as="h2" size="lg" color="#333" textAlign="center">
            Últimos Proyectos
          </Heading>

          <Box
            w="full"
            h="600px"
            bg="white"
            borderRadius="lg"
            boxShadow="0 10px 30px rgba(0,0,0,0.15)"
            overflow="hidden"
            position="relative"
            cursor="pointer"
            border="1px solid #e2e2e2"
          >
            <Box h="200px" w="full" position="relative">
              <Box
                position="absolute"
                top="0"
                left="0"
                w="full"
                h="full"
                background={getProjectGradient(activeIndex)}
              />
              
              {projects[activeIndex].image && (
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="full"
                  h="full"
                  backgroundImage={`url(${projects[activeIndex].image})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  opacity="0.9"
                />
              )}

              <Box
                position="absolute"
                top="0"
                left="0"
                w="full"
                h="full"
                bg="rgba(0,0,0,0.1)"
              />
            </Box>
            
            <VStack
              h="calc(100% - 200px)"
              justify="space-between"
              p={6}
              spacing={4}
              align="stretch"
            >
              <VStack spacing={3} align="stretch">
                <Heading as="h3" size="md" color="#333">
                  {projects[activeIndex].title}
                </Heading>
                <Text color="#666" fontSize="sm" lineHeight="tall">
                  {projects[activeIndex].description}
                </Text>
                <HStack wrap="wrap" spacing={2}>
                  {projects[activeIndex].technologies.map((tech, idx) => (
                    <Box
                      key={idx}
                      bg="#f8f8f8"
                      color="#333"
                      px={3}
                      py={1}
                      borderRadius="md"
                      fontSize="xs"
                      border="1px solid #e2e2e2"
                    >
                      {tech}
                    </Box>
                  ))}
                </HStack>
              </VStack>

              {projects[activeIndex].hasEvidence && (
                <Button
                  size="sm"
                  bg="#333"
                  color="white"
                  _hover={{ bg: "#555" }}
                  onClick={() => handleEvidenceClick(projects[activeIndex].title)}
                  leftIcon={<span>📊</span>}
                >
                  Ver Evidencias
                </Button>
              )}
            </VStack>
          </Box>

          <HStack spacing={4} align="center">
            <IconButton
              aria-label="Proyecto anterior"
              onClick={prevProject}
              variant="outline"
              borderColor="#333"
              color="#333"
              _hover={{ bg: "#333", color: "white" }}
            >
              <ChevronLeftIcon />
            </IconButton>
            
            <HStack spacing={2}>
              {projects.map((_, index) => (
                <Box
                  key={index}
                  w="8px"
                  h="8px"
                  borderRadius="full"
                  bg={activeIndex === index ? "#333" : "gray.300"}
                  cursor="pointer"
                  onClick={() => selectProject(index)}
                  transition="all 0.2s"
                />
              ))}
            </HStack>
            
            <IconButton
              aria-label="Proyecto siguiente"
              onClick={nextProject}
              bg="#333"
              color="white"
              _hover={{ bg: "#555" }}
            >
              <ChevronRightIcon />
            </IconButton>
          </HStack>
        </VStack>
      </Box>
    )
  }

  // Vista desktop
  return (
    <Box 
      py={16} 
      px={4} 
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={12} maxW="1200px" w="full">
        <Heading as="h2" size="xl" color="#333" textAlign="center">
          Últimos Proyectos
        </Heading>

        <HStack spacing={4} w="full" justify="center" overflow="hidden">
          {projects.map((project, index) => (
            <Box
              key={project.id}
              w={activeIndex === index ? "400px" : "80px"}
              h="600px"
              bg="white"
              borderRadius="lg"
              boxShadow="0 10px 30px rgba(0,0,0,0.15)"
              overflow="hidden"
              position="relative"
              cursor="pointer"
              onClick={() => selectProject(index)}
              transition="all 0.5s ease"
              _hover={{ transform: "translateY(-5px)" }}
              border="1px solid #e2e2e2"
            >
              {activeIndex === index && (
                <>
                  <Box h="250px" w="full" position="relative">
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      w="full"
                      h="full"
                      background={getProjectGradient(index)}
                    />
                    
                    {project.image && (
                      <Box
                        position="absolute"
                        top="0"
                        left="0"
                        w="full"
                        h="full"
                        backgroundImage={`url(${project.image})`}
                        backgroundSize="cover"
                        backgroundPosition="center"
                        opacity="0.9"
                      />
                    )}

                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      w="full"
                      h="full"
                      bg="rgba(0,0,0,0.1)"
                    />
                  </Box>
                  
                  <VStack
                    h="calc(100% - 250px)"
                    justify="space-between"
                    p={6}
                    spacing={4}
                    align="stretch"
                  >
                    <VStack spacing={3} align="stretch">
                      <Heading as="h3" size="lg" color="#333">
                        {project.title}
                      </Heading>
                      <Text color="#666" fontSize="md" lineHeight="tall">
                        {project.description}
                      </Text>
                      <HStack wrap="wrap" spacing={2}>
                        {project.technologies.map((tech, idx) => (
                          <Box
                            key={idx}
                            bg="#f8f8f8"
                            color="#333"
                            px={3}
                            py={1}
                            borderRadius="md"
                            fontSize="sm"
                            border="1px solid #e2e2e2"
                          >
                            {tech}
                          </Box>
                        ))}
                      </HStack>
                    </VStack>

                    {project.hasEvidence && (
                      <Button
                        size="md"
                        bg="#333"
                        color="white"
                        _hover={{ bg: "#555" }}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleEvidenceClick(project.title)
                        }}
                        leftIcon={<span>📊</span>}
                      >
                        Ver Evidencias
                      </Button>
                    )}
                  </VStack>
                </>
              )}

              {/* Título vertical para cards inactivas */}
              {activeIndex !== index && (
                <Box
                  position="absolute"
                  top="50%" 
                  left="50%"
                  transform="translateX(-50%) translateY(-50%) rotate(-90deg)"
                  transformOrigin="center"
                  whiteSpace="nowrap"
                  w="max-content"
                  maxW="500px"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  <Text 
                    color="#333"
                    fontSize="sm" 
                    fontWeight="bold"
                    lineHeight="1"
                    textAlign="center"
                  >
                    {project.title}
                  </Text>
                </Box>
              )}
            </Box>
          ))}
        </HStack>

        <HStack spacing={4}>
          <IconButton
            aria-label="Proyecto anterior"
            onClick={prevProject}
            variant="outline"
            borderColor="#333"
            color="#333"
            _hover={{ bg: "#333", color: "white" }}
          >
            <ChevronLeftIcon />
          </IconButton>
          
          <HStack spacing={3}>
            {projects.map((_, index) => (
              <Box
                key={index}
                w="10px"
                h="10px"
                borderRadius="full"
                bg={activeIndex === index ? "#333" : "gray.300"}
                cursor="pointer"
                onClick={() => selectProject(index)}
                transition="all 0.2s"
                _hover={{ transform: "scale(1.2)" }}
              />
            ))}
          </HStack>
          
          <IconButton
            aria-label="Proyecto siguiente"
            onClick={nextProject}
            bg="#333"
            color="white"
            _hover={{ bg: "#555" }}
          >
            <ChevronRightIcon />
          </IconButton>
        </HStack>
      </VStack>
    </Box>
  )
}
