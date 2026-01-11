import { Palette } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import type { ColorTheme } from '@/types/theme'

const themes: Array<{ name: string; value: ColorTheme }> = [
  { name: 'Default', value: 'default' },
  { name: 'Blue', value: 'blue' },
  { name: 'Green', value: 'green' },
  { name: 'Orange', value: 'orange' },
  { name: 'Red', value: 'red' },
  { name: 'Rose', value: 'rose' },
  { name: 'Violet', value: 'violet' },
  { name: 'Yellow', value: 'yellow' },
]

export function StyleSwitcher() {
  const [selectedTheme, setSelectedTheme] = useState<ColorTheme>(() => {
    return (localStorage.getItem('theme') as ColorTheme) || 'default'
  })

  useEffect(() => {
    const root = document.documentElement
    if (selectedTheme === 'default') {
      root.removeAttribute('data-theme')
    } else {
      root.setAttribute('data-theme', selectedTheme)
    }
  }, [selectedTheme])

  const handleThemeChange = (theme: ColorTheme) => {
    setSelectedTheme(theme)
    localStorage.setItem('theme', theme)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle style</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => handleThemeChange(theme.value)}
          >
            {theme.name}
            {selectedTheme === theme.value && ' ✓'}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
