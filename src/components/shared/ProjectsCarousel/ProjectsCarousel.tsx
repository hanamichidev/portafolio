import { Box, VStack, Heading, Text, HStack, IconButton, useBreakpointValue, Badge, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import caloxEvidence from '@assets/images/Evidencia Calox.PNG'
import vampEvidence from '@assets/images/Evidencia Vamp.jpeg'

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
  const [activeIndex, setActiveIndex] = useState(0) // Ya inicia en 0 (primera card)
  const isMobile = useBreakpointValue({ base: true, md: false })

  // Datos de proyectos
  const projects: Project[] = [
    {
      id: '1',
      title: 'Calox Sistema Web Contable',
      description: 'Arquitectura y despliegue de una plataforma web integral para la gestión financiera de Calox CR. Desarrollada con una interfaz de alto desempeño en React y un robusto ecosistema de servicios en C#, la solución automatiza la consolidación fiscal y la generación de proyecciones financieras complejas mediante dashboards ejecutivos de visualización en tiempo real.',
      image: 'https://www.grupocalox.com/assets/img/gallery/Calox_logo_movil.png',
      technologies: ['React', '.Net C#', 'SQL Server'],
      hasEvidence: true
    },
    {
      id: '2',
      title: 'Aplicación Ruta Cartago',
      description: 'Ruta Cartago es la aplicación de la Municipalidad de Cartago que le facilita al visitante conocer la ciudad, visitando sitios históricos impresionantes, además de contar con una guía de los locales comerciales y gastronómicos, medios de transporte y hospedaje.',
      image: 'https://play-lh.googleusercontent.com/002bpgEp-gVKyUgTYxa9eNFWFL9xO6irRPOdqqpTvDviITFqInxtLZ8FJPZ2SaX41w',
      technologies: ['Angular', 'Ionic', 'Node.js', 'Android'],
      hasEvidence: true
    },
    {
      id: '3',
      title: 'Rediseño Aplicación VAMPP BOBINO',
      description: 'Rediseño y modernización de la interfaz de usuario para la plataforma Vamp Bovino. Mediante el desarrollo de componentes personalizados en JavaFX y Swing, transformé una estética legacy en una experiencia visual de vanguardia, integrando controles de diseño propio que optimizan la usabilidad sin comprometer la integridad funcional de la lógica de negocio preexistente.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jK6ONmgCY9tf0fVfm77cP682IvcXpTR1og&s',
      technologies: ['Java', 'HTML', 'CSS', 'WEB'],
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
    if (projectTitle === 'Calox Sistema Web Contable') {
      window.open(caloxEvidence, '_blank', 'noopener,noreferrer')
    } else if (projectTitle === 'Aplicación Ruta Cartago') {
      window.open('https://play.google.com/store/apps/details?id=prod.cartago.activa&hl=es', '_blank', 'noopener,noreferrer')
    } else if (projectTitle === 'Rediseño Aplicación VAMPP BOBINO') {
      window.open(vampEvidence, '_blank', 'noopener,noreferrer')
    }
  }

  // Auto-avance cada 8 segundos (más tiempo razonable que 25 segundos)
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject()
    }, 8000)

    return () => clearInterval(interval)
  }, []) // Dependencias vacías para que funcione correctamente

  // Función para generar gradientes grises elegantes y sutiles
  const getProjectGradient = (index: number) => {
    const gradients = [
      'linear-gradient(135deg, #ffffff 0%, #f1f3f4 100%)', // Blanco a gris muy claro
      'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', // Gris muy claro a claro
      'linear-gradient(135deg, #f1f3f4 0%, #dee2e6 100%)', // Gris claro neutral
      'linear-gradient(135deg, #e9ecef 0%, #ced4da 100%)', // Gris claro a medio
      'linear-gradient(135deg, #dee2e6 0%, #adb5bd 100%)'  // Gris medio elegante
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
        <VStack spacing={8} maxW="450px" w="full">
          <Heading as="h2" size="lg" color="#333" textAlign="center">
            Últimos Proyectos
          </Heading>

          <Box
            w="full"
            h="650px"
            bg="white"
            borderRadius="lg"
            boxShadow="0 10px 30px rgba(0,0,0,0.15)"
            overflow="hidden"
            position="relative"
            cursor="pointer"
            border="1px solid #e2e2e2"
          >
            <Box h="220px" w="full" position="relative">
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
                  backgroundSize={
                    projects[activeIndex].title === 'Calox Sistema Web Contable' || 
                    projects[activeIndex].title === 'Aplicación Ruta Cartago' ||
                    projects[activeIndex].title === 'Rediseño Aplicación VAMPP BOBINO'
                      ? "contain" 
                      : "cover"
                  }
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
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
              h="calc(100% - 220px)"
              justify="space-between"
              p={7}
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

  // Vista desktop - aquí está la lógica principal corregida
  return (
    <Box 
      py={16} 
      px={4} 
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={12} maxW="1300px" w="full">
        <Heading as="h2" size="xl" color="#333" textAlign="center">
          Últimos Proyectos
        </Heading>

        <HStack spacing={4} w="full" justify="center" overflow="hidden">
          {projects.map((project, index) => (
            <Box
              key={project.id}
              w={activeIndex === index ? "450px" : "90px"} // La card activa es grande, las demás pequeñas
              h="650px"
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
              {/* Contenido completo para la card ACTIVA */}
              {activeIndex === index && (
                <>
                  <Box h="280px" w="full" position="relative">
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
                        backgroundSize={
                          project.title === 'Calox Sistema Web Contable' || 
                          project.title === 'Aplicación Ruta Cartago' ||
                          project.title === 'Rediseño Aplicación VAMPP BOBINO'
                            ? "contain" 
                            : "cover"
                        }
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
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
                    h="calc(100% - 280px)"
                    justify="space-between"
                    p={7}
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

              {/* Título vertical para cards INACTIVAS */}
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
