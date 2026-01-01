import { Box, Code, VStack, HStack, Image } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import hackerImage from '@assets/images/hacker.png'

interface PresentationBlockProps {
  skipTyping?: boolean
}

export default function PresentationBlock({ skipTyping = false }: PresentationBlockProps) {
  const { t } = useTranslation()
  const [displayText1, setDisplayText1] = useState('')
  const [displayText2, setDisplayText2] = useState('')
  const [displayText3, setDisplayText3] = useState('')
  const [currentLine, setCurrentLine] = useState(1)
  const [showCursor, setShowCursor] = useState(true)

  const text1 = t('name')
  const text2 = t('occupation')
  const text3 = t('education')

  useEffect(() => {
    if (skipTyping) {
      setDisplayText1(text1)
      setDisplayText2(text2)
      setDisplayText3(text3)
      setCurrentLine(3)
      return
    }

    const typeText = (text: string, setDisplay: (text: string) => void, lineNumber: number) => {
      let index = 0
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplay(text.slice(0, index))
          index++
        } else {
          clearInterval(interval)
          if (lineNumber < 3) {
            setCurrentLine(lineNumber + 1)
          }
        }
      }, 50)
    }

    if (currentLine === 1) {
      typeText(text1, setDisplayText1, 1)
    } else if (currentLine === 2) {
      typeText(text2, setDisplayText2, 2)
    } else if (currentLine === 3) {
      typeText(text3, setDisplayText3, 3)
    }
  }, [currentLine, text1, text2, text3, skipTyping])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  const CodeSection = () => (
    <VStack 
      align="center"
      spacing={4}
      fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
      w={{ base: 'full', lg: '50%' }}
    >
      <Code 
        variant="solid"
        fontSize="inherit"
        p={2}
        borderRadius="md"
        lineHeight="1.2"
        textAlign="center"
        w="fit-content"
      >
        {displayText1}
        {currentLine === 1 && showCursor && '|'}
      </Code>
      
      {(currentLine >= 2 || skipTyping) && (
        <Code 
          variant="solid"
          fontSize="inherit"
          p={2}
          borderRadius="md"
          lineHeight="1.2"
          textAlign="center"
          w="fit-content"
        >
          {displayText2}
          {currentLine === 2 && showCursor && '|'}
        </Code>
      )}
      
      {(currentLine >= 3 || skipTyping) && (
        <Code 
          variant="solid"
          fontSize="inherit"
          p={2}
          borderRadius="md"
          lineHeight="1.3"
          textAlign="center"
          w="fit-content"
        >
          {displayText3}
          {currentLine === 3 && showCursor && '|'}
        </Code>
      )}
    </VStack>
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
        maxW={{ base: "500px", lg: "1200px" }}
        w="full"
        bg="white"
        borderRadius="xl"
        boxShadow="0 10px 30px rgba(0,0,0,0.08)"
        border="1px solid #e2e2e2"
        p={{ base: 8, lg: 12 }}
      >
        {/* Desktop Layout - Horizontal */}
        <HStack 
          display={{ base: 'none', lg: 'flex' }}
          align="center"
          justify="center"
          spacing={12}
          h="full"
        >
          <CodeSection />
          
          <Box w="50%" display="flex" justifyContent="center">
            <Image 
              src={hackerImage} 
              alt="Hacker illustration"
              maxW="400px"
              w="full"
              h="auto"
              objectFit="contain"
            />
          </Box>
        </HStack>

        {/* Mobile Layout - Vertical */}
        <VStack 
          display={{ base: 'flex', lg: 'none' }}
          align="center"
          spacing={8}
          justify="center"
          h="full"
        >
          <Box w="full" display="flex" justifyContent="center">
            <Image 
              src={hackerImage} 
              alt="Hacker illustration"
              maxW="300px"
              w="80%"
              h="auto"
              objectFit="contain"
            />
          </Box>
          
          <CodeSection />
        </VStack>
      </Box>
    </Box>
  )
}