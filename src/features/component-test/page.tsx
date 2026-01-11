import { StyleSwitcher } from '@/components/style-switcher'
import { ThemeToggle } from '@/components/theme-toggle'
import { ButtonDemo } from './components/button-demo'
import { CardDemo } from './components/card-demo'
import { ColorPalette } from './components/color-palette'
import { DropdownDemo } from './components/dropdown-demo'
import { SummaryCard } from './components/summary-card'

function ComponentsTest() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="absolute top-4 right-4 flex gap-2">
        <StyleSwitcher />
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            shadcn/ui Components Test
          </h1>
          <p className="text-muted-foreground">
            測試三個 shadcn/ui 元件：Button、DropdownMenu、Card
          </p>
        </div>

        <ColorPalette />
        <ButtonDemo />
        <DropdownDemo />
        <CardDemo />
        <SummaryCard />
      </div>
    </div>
  )
}

export default ComponentsTest
