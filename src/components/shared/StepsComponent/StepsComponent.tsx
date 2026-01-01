import RewardsIcon from '@/assets/icons/rewards'
import StackIcon from '@/assets/icons/stackicon'
import StudyIcon from '@/assets/icons/studyicon'
import { Step } from '@/types'
import { Box, VStack, HStack, Text, Heading, Badge, Button, useBreakpointValue } from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function StepsComponent() {
  const { t } = useTranslation()
  const [activeStep, setActiveStep] = useState(0)
  
  // Detectar si es mobile
  const isMobile = useBreakpointValue({ base: true, md: false })

  const steps: Step[] = [
    {
      id: 'achievements',
      title: t('steps.achievements.title'),
      label: t('steps.achievements.label'),
      description: t('steps.achievements.description'),
      icon: <RewardsIcon />,
      showEvidence: true,
      evidenceItems: [
        '• Ganador de Hackatons'
      ]
    },
    {
      id: 'expertise',
      title: t('steps.expertise.title'),
      label: t('steps.expertise.label'),
      description: t('steps.expertise.description'),
      icon: <StudyIcon />,
      showEvidence: false
    },
    {
      id: 'stack',
      title: t('steps.stack.title'),
      label: t('steps.stack.label'),
      description: t('steps.stack.description'),
      icon: <StackIcon />,
      showEvidence: false
    }
  ]

  const formatDescription = (description: string, step: Step) => {
    return description.split('\n\n').map((line, index) => {
      if (line.includes(':')) {
        const [beforeColon, afterColon] = line.split(':')
        
        const shouldShowBadge = step.showEvidence && 
                               step.evidenceItems?.includes(beforeColon)
        
        const badgeText = getBadgeText(beforeColon)
        
        return (
          <Box key={index} mb={4}>
            <Text textAlign="left">
              <Text as="span" fontWeight="bold">
                {beforeColon}:
              </Text>
              <Text as="span">{afterColon}</Text>
            </Text>
            {shouldShowBadge && (
              <Badge
                bg="#333"
                color="white"
                px={3}
                py={1}
                borderRadius="full"
                cursor="pointer"
                _hover={{ bg: "#555", transform: "scale(1.05)" }}
                transition="all 0.2s ease"
                onClick={() => handleEvidenceClick(beforeColon)}
                fontSize="xs"
                fontWeight="600"
                mt={2}
                display="inline-block"
              >
                {badgeText}
              </Badge>
            )}
          </Box>
        )
      }
      return <Text key={index} mb={2} textAlign="left">{line}</Text>
    })
  }

  const getBadgeText = (category: string) => {
    switch(category) {
      case '• Escalabilidad Real':
        return 'Escalabilidad Real - Evidencia'
      case '• Innovación & Robótica':
        return 'Innovación & Robótica - Evidencia'
      case '• Ganador de Hackatons':
        return 'Ganador Hackaton - Evidencia'
      case '• Sector Bancario Senior':
        return 'Sector Bancario - Evidencia'
      case '• Infraestructura Robusta':
        return 'Infraestructura - Evidencia'
      case '• Sector Público y Modernización':
        return 'Sector Público - Evidencia'
      case '• Mobile':
        return 'Mobile - Evidencia'
      case '• Backend':
        return 'Backend - Evidencia'
      case '• Web':
        return 'Web - Evidencia'
      case '• Especialidad':
        return 'Especialidad - Evidencia'
      default:
        return 'Evidencia'
    }
  }

  const getEvidenceUrl = (category: string) => {
    switch(category) {
      case '• Ganador de Hackatons':
        return 'https://reporteguerrero.ucq.edu.mx/es/halcones-crean-capat'
      default:
        return '#'
    }
  }

  const handleEvidenceClick = (category: string) => {
    const url = getEvidenceUrl(category)
    if (url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      console.log(`No evidence URL configured for: ${category}`)
    }
  }

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length)
  }

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)
  }

  if (isMobile) {
    // Vista mobile - contenido centrado con botones de navegación
    return (
      <Box py={16} px={4}>
        <Box
          maxW="400px"
          minH="600px"
          mx="auto"
          bg="white"
          boxShadow="0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
          borderRadius="md"
          p={6}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          {/* Contenido */}
          <VStack spacing={6} align="center" flex="1">
            {/* Indicador de paso */}
            <HStack spacing={2}>
              {steps.map((_, index) => (
                <Box
                  key={index}
                  w="8px"
                  h="8px"
                  borderRadius="full"
                  bg={activeStep === index ? "#E74C3C" : "rgba(51, 51, 51, 0.2)"}
                  transition="all 0.3s ease"
                />
              ))}
            </HStack>

            {/* Icono */}
            <Box
              w="80px"
              h="80px"
              fill="rgba(51, 51, 51, 0.5)"
            >
              {steps[activeStep].icon}
            </Box>
            
            {/* Título */}
            <Heading
              as="h1"
              fontWeight="800"
              color="#333"
              textAlign="center"
              size="lg"
              px={2}
            >
              {steps[activeStep].title}
            </Heading>
            
            {/* Descripción */}
            <Box
              color="#333"
              fontWeight="500"
              textAlign="left"
              lineHeight="tall"
              width="100%"
              overflowY="auto"
              maxH="300px"
            >
              {formatDescription(steps[activeStep].description, steps[activeStep])}
            </Box>
          </VStack>

          {/* Botones de navegación */}
          <HStack justify="space-between" mt={6} pt={4} borderTop="1px solid" borderColor="gray.200">
            <Button
              onClick={prevStep}
              variant="outline"
              borderColor="#333"
              color="#333"
              _hover={{ bg: "#333", color: "white" }}
              size="sm"
              isDisabled={activeStep === 0}
            >
              Anterior
            </Button>
            
            <Text fontSize="sm" color="gray.500">
              {activeStep + 1} de {steps.length}
            </Text>
            
            <Button
              onClick={nextStep}
              bg="#E74C3C"
              color="white"
              _hover={{ bg: "#c0392b" }}
              size="sm"
              isDisabled={activeStep === steps.length - 1}
            >
              Siguiente
            </Button>
          </HStack>
        </Box>
      </Box>
    )
  }

  // Vista desktop - diseño original con más altura
  return (
    <Box py={16} px={4} mx="auto" maxW="container.xl">
      <Box
        maxW="900px"
        h="600px"
        mx="auto"
        bg="white"
        boxShadow="0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        overflow="hidden"
        borderRadius="md"
      >
        {/* Left Side - Navigation */}
        <Box
          h="80%"
          w="25%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack spacing={3} align="stretch">
            {steps.map((step, index) => (
              <HStack
                key={step.id}
                py={3}
                cursor="pointer"
                color={activeStep === index ? "#333" : "rgba(51, 51, 51, 0.5)"}
                fontWeight="500"
                _hover={{ color: "#333" }}
                transition="all 0.2s ease-out"
                onClick={() => setActiveStep(index)}
                lineHeight="34px"
              >
                <Box
                  w="32px"
                  h="32px"
                  display="block"
                  fill={activeStep === index ? "#E74C3C" : "rgba(51, 51, 51, 0.5)"}
                  mr={5}
                  transition="all 0.2s ease-out"
                  _groupHover={{ fill: activeStep === index ? "#E74C3C" : "#333" }}
                >
                  {step.icon}
                </Box>
                <Text>{step.label}</Text>
              </HStack>
            ))}
          </VStack>
        </Box>

        {/* Border Line */}
        <Box h="450px" w="1px" bg="rgba(51, 51, 51, 0.2)" position="relative">
          <Box
            w="5px"
            h="54px"
            bg="#000000ff"
            ml="-2px"
            mt={`${50 + (activeStep * 80)}px`}
            transition="all 0.4s ease-in-out"
          />
        </Box>

        {/* Right Side - Content */}
        <Box h="500px" w="75%" overflow="hidden" position="relative">
          {steps.map((step, index) => (
            <VStack
              key={step.id}
              position="absolute"
              h="500px"
              w="100%"
              align="center"
              justify="center"
              spacing={8}
              px={8}
              transform={activeStep === index ? "translateY(0)" : "translateY(-550px)"}
              opacity={activeStep === index ? 1 : 0}
              transition="all 0.6s ease-in-out"
            >
              <Box
                w="80px"
                h="80px"
                fill="rgba(51, 51, 51, 0.5)"
              >
                {step.icon}
              </Box>
              
              <Heading
                as="h1"
                fontWeight="800"
                color="#333"
                textAlign="center"
                size="xl"
                mb={4}
              >
                {step.title}
              </Heading>
              
              <Box
                color="#333"
                fontWeight="500"
                textAlign="left"
                lineHeight="tall"
                maxW="100%"
                fontSize="md"
              >
                {formatDescription(step.description, step)}
              </Box>
            </VStack>
          ))}
        </Box>
      </Box>
    </Box>
  )
}