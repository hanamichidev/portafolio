import { Box, Flex, Link, Menu as ChakraMenu, Portal, useDisclosure, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export interface MenuProps {
  onNavigate: (section: string) => void
  activeSection: string
}

export default function Menu({ onNavigate, activeSection }: MenuProps) {
  const { t } = useTranslation()
  const { open, onOpen, onClose } = useDisclosure()

  const handleNavClick = (sectionKey: string) => {
    onNavigate(sectionKey)
    onClose() // Cierra el menú móvil si está abierto
  }

  const navItems = [
    { key: 'home', label: t('nav.home') },
    { key: 'about', label: t('nav.about') },
    { key: 'projects', label: t('nav.projects') },
    { key: 'contact', label: t('nav.contact') }
  ]

  return (
    <Box py={4}>
      <Flex maxW="container.xl" mx="auto" px={4} align="center" justify="flex-start">
        {/* Desktop Menu */}
        <Flex gap={8} display={{ base: 'none', lg: 'flex' }} align="center">
          {navItems.map((item) => (
            <Text
              key={item.key}
              cursor="pointer"
              color={activeSection === item.key ? "black" : "gray.500"}
              _hover={{ color: "black" }}
              transition="color 0.3s"
              fontSize="3xl"
              fontWeight={activeSection === item.key ? "semibold" : "normal"}
              onClick={() => handleNavClick(item.key)}
            >
              {item.label}
            </Text>
          ))}
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
                  {navItems.map((item) => (
                    <ChakraMenu.Item 
                      key={item.key}
                      value={item.key} 
                      onClick={() => handleNavClick(item.key)}
                    >
                      <Text 
                        fontSize="xl" 
                        fontWeight={activeSection === item.key ? "semibold" : "normal"}
                        color={activeSection === item.key ? "black" : "gray.600"}
                      >
                        {item.label}
                      </Text>
                    </ChakraMenu.Item>
                  ))}
                </ChakraMenu.Content>
              </ChakraMenu.Positioner>
            </Portal>
          </ChakraMenu.Root>
        </Box>
      </Flex>
    </Box>
  )
}
