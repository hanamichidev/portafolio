import { Box, VStack, HStack, Text, Heading, Icon, Link, useBreakpointValue } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

// Iconos personalizados
const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10C21 17L12 23L3 10C3 6.134 7.134 2 12 2C16.866 2 21 6.134 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8A6 6 0 0 1 22 14V21H18V14A2 2 0 0 0 14 14V21H10V9H14V11A6 6 0 0 1 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2"/>
    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 19C4 20.5 4 16.5 2 16M22 16V21.5C22 21.776 21.776 22 21.5 22H16.5C16.224 22 16 21.776 16 21.5V19.5C16 18.5 15.5 18 15 18C18 18 22 16 22 10C22 8 21 6 20 6C20 4 19 2 17 2C15 2 14 3 12 3C10 3 9 2 7 2C5 2 4 4 4 6C3 6 2 8 2 10C2 16 6 18 9 18C8.5 18 8 18.5 8 19.5V21.5C8 21.776 8.224 22 8.5 22H13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function ContactComponent() {
  const { t } = useTranslation()
  const isMobile = useBreakpointValue({ base: true, md: false })

  const ContactItem = ({ icon, label, value, link, isEmail = false }: {
    icon: React.ReactNode
    label: string
    value: string
    link?: string
    isEmail?: boolean
  }) => (
    <HStack 
      spacing={4} 
      align="flex-start" 
      w="full"
      p={4}
      borderRadius="lg"
      _hover={{ bg: "#f8f9fa", transform: "translateX(4px)" }}
      transition="all 0.2s ease"
    >
      <Box color="#333" mt={1} flexShrink={0}>
        {icon}
      </Box>
      <VStack align="flex-start" spacing={1} flex={1} minW={0}>
        <Text fontSize="sm" color="#666" fontWeight="medium">
          {label}
        </Text>
        {link ? (
          <Link 
            href={isEmail ? `mailto:${value}` : link}
            target="_blank"
            rel="noopener noreferrer"
            color="#333"
            fontWeight="bold"
            _hover={{ color: "#555", textDecoration: "underline" }}
            wordBreak={isEmail ? "break-all" : "normal"}
            fontSize={{ base: isEmail ? "sm" : "md", md: "md" }}
            lineHeight="1.3"
          >
            {value}
          </Link>
        ) : (
          <Text 
            color="#333" 
            fontWeight="bold"
            wordBreak="break-word"
            fontSize={{ base: "sm", md: "md" }}
          >
            {value}
          </Text>
        )}
      </VStack>
    </HStack>
  )

  return (
    <Box 
      py={16}
      px={4}
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Card contenedor blanca */}
      <Box
        maxW={{ base: "500px", md: "600px", lg: "800px" }}
        w="full"
        bg="white"
        borderRadius="xl"
        boxShadow="0 10px 30px rgba(0,0,0,0.08)"
        border="1px solid #e2e2e2"
        p={{ base: 8, lg: 12 }}
      >
        <VStack spacing={8} align="center" w="full">
          {/* Encabezado */}
          <VStack spacing={4} textAlign="center">
            <Heading 
              as="h2" 
              size={{ base: "xl", md: "2xl" }}
              color="#333"
              fontWeight="bold"
            >
              ¡Hablemos!
            </Heading>
            <Text 
              fontSize={{ base: "md", md: "lg" }}
              color="#666"
              lineHeight="tall"
              maxW="600px"
            >
              Estoy disponible para colaborar en proyectos de{" "}
              <Text as="span" fontWeight="bold" color="#333">
                desarrollo y modernización de software
              </Text>
              . Si buscas transformar{" "}
              <Text as="span" fontWeight="bold" color="#333">
                sistemas complejos
              </Text>
              {" "}en{" "}
              <Text as="span" fontWeight="bold" color="#333">
                experiencias digitales de alto desempeño
              </Text>
              , no dudes en contactarme:
            </Text>
          </VStack>

          {/* Información de contacto */}
          <VStack 
            spacing={2} 
            w="full" 
            maxW="500px"
            bg="#fafafa"
            borderRadius="xl"
            p={6}
            border="1px solid #f0f0f0"
          >
            <ContactItem
              icon={<LocationIcon />}
              label="📍 Ubicación"
              value="Querétaro, México"
            />

            <ContactItem
              icon={<EmailIcon />}
              label="📧 Email"
              value="emmanuelcruz.personal@gmail.com"
              link="mailto:emmanuelcruz.personal@gmail.com"
              isEmail={true}
            />

            <ContactItem
              icon={<LinkedInIcon />}
              label="🔗 LinkedIn"
              value="linkedin.com/in/emmanuel-c-6416ba229"
              link="https://linkedin.com/in/emmanuel-c-6416ba229"
            />

            <ContactItem
              icon={<GitHubIcon />}
              label="💻 GitHub"
              value="github.com/hanamichidev"
              link="https://github.com/hanamichidev"
            />

          </VStack>

          {/* Call to action adicional */}
          <Box 
            textAlign="center" 
            p={6}
            bg="linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"
            borderRadius="lg"
            w="full"
            border="1px solid #e2e2e2"
          >
            <Text 
              fontSize={{ base: "sm", md: "md" }}
              color="#555"
              fontStyle="italic"
            >
              "La mejor forma de predecir el futuro es{" "}
              <Text as="span" fontWeight="bold" color="#333">
                creándolo
              </Text>
              ."
            </Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}