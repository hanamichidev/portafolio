// Definition of Application Types
export interface Step {
  id: string
  title: string
  label: string
  description: string
  icon: React.ReactNode
  showEvidence?: boolean // Nueva propiedad para mostrar/ocultar evidencias
  evidenceItems?: string[] // Array de viñetas que tendrán botón de evidencia
}