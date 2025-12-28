import { Box, Code, VStack } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function PresentationBlock() {
  const [displayText1, setDisplayText1] = useState('')
  const [displayText2, setDisplayText2] = useState('')
  const [displayText3, setDisplayText3] = useState('')
  const [currentLine, setCurrentLine] = useState(1)
  const [showCursor, setShowCursor] = useState(true)

  const text1 = 'Emmanuel Cruz Reyes'
  const text2 = 'Full Stack Software Developer'
  const text3 = 'Ingeniero en Sistemas Computacionales'

  useEffect(() => {
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
      }, 100)
    }

    if (currentLine === 1) {
      typeText(text1, setDisplayText1, 1)
    } else if (currentLine === 2) {
      typeText(text2, setDisplayText2, 2)
    } else if (currentLine === 3) {
      typeText(text3, setDisplayText3, 3)
    }
  }, [currentLine])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <Box py={8} px={4}>
      <VStack 
        align="flex-start" 
        spacing={4} 
        maxW="container.xl" 
        mx="auto"
        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
      >
        <Code 
          colorScheme="green" 
          fontSize="inherit"
          p={2}
          borderRadius="md"
        >
          {displayText1}
          {currentLine === 1 && showCursor && '|'}
        </Code>
        
        {currentLine >= 2 && (
          <Code 
            colorScheme="blue" 
            fontSize="inherit"
            p={2}
            borderRadius="md"
          >
            {displayText2}
            {currentLine === 2 && showCursor && '|'}
          </Code>
        )}
        
        {currentLine >= 3 && (
          <Code 
            colorScheme="purple" 
            fontSize="inherit"
            p={2}
            borderRadius="md"
          >
            {displayText3}
            {currentLine === 3 && showCursor && '|'}
          </Code>
        )}
      </VStack>
    </Box>
  )
}