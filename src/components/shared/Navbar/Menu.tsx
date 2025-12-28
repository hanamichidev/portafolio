import { Box, Flex, Link, Menu as ChakraMenu, Portal, useDisclosure } from '@chakra-ui/react'

export default function Menu() {
  const { open, onOpen, onClose } = useDisclosure()

  return (
    <Box py={4}>
      <Flex maxW="container.xl" mx="auto" px={4} align="center" justify="flex-start">
        {/* Desktop Menu */}
        <Flex gap={8} display={{ base: 'none', lg: 'flex' }} align="center">
          <Link 
            href="#home" 
            color="gray.500" 
            _hover={{ color: "black", textDecoration: "none" }} 
            transition="color 0.3s"
            fontSize="3xl"
            fontWeight="normal"
            textDecoration="none"
          >
            Inicio
          </Link>
          <Link 
            href="#about" 
            color="gray.500" 
            _hover={{ color: "black", textDecoration: "none" }} 
            transition="color 0.3s"
            fontSize="3xl"
            fontWeight="normal"
            textDecoration="none"
          >
            Acerca de
          </Link>
          <Link 
            href="#projects" 
            color="gray.500" 
            _hover={{ color: "black", textDecoration: "none" }} 
            transition="color 0.3s"
            fontSize="3xl"
            fontWeight="normal"
            textDecoration="none"
          >
            Proyectos
          </Link>
          <Link 
            href="#contact" 
            color="gray.500" 
            _hover={{ color: "black", textDecoration: "none" }} 
            transition="color 0.3s"
            fontSize="3xl"
            fontWeight="normal"
            textDecoration="none"
          >
            Contacto
          </Link>
        </Flex>

        {/* Mobile Menu */}
        <Box display={{ base: 'block', lg: 'none' }}>
          <ChakraMenu.Root isOpen={open} onOpen={onOpen} onClose={onClose}>
            <ChakraMenu.Trigger asChild>
              <Box as="button" p={2} fontSize="2xl" color="black">
                ☰
              </Box>
            </ChakraMenu.Trigger>
            <Portal>
              <ChakraMenu.Positioner>
                <ChakraMenu.Content>
                  <ChakraMenu.Item value="home" onClick={onClose}>
                    <Link href="#home" fontSize="xl" fontWeight="normal" textDecoration="none">Inicio</Link>
                  </ChakraMenu.Item>
                  <ChakraMenu.Item value="about" onClick={onClose}>
                    <Link href="#about" fontSize="xl" fontWeight="normal" textDecoration="none">Acerca de</Link>
                  </ChakraMenu.Item>
                  <ChakraMenu.Item value="projects" onClick={onClose}>
                    <Link href="#projects" fontSize="xl" fontWeight="normal" textDecoration="none">Proyectos</Link>
                  </ChakraMenu.Item>
                  <ChakraMenu.Item value="contact" onClick={onClose}>
                    <Link href="#contact" fontSize="xl" fontWeight="normal" textDecoration="none">Contacto</Link>
                  </ChakraMenu.Item>
                </ChakraMenu.Content>
              </ChakraMenu.Positioner>
            </Portal>
          </ChakraMenu.Root>
        </Box>
      </Flex>
    </Box>
  )
}
