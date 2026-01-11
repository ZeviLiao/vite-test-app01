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

type Theme =
  | 'default'
  | 'blue'
  | 'green'
  | 'orange'
  | 'red'
  | 'rose'
  | 'violet'
  | 'yellow'

const themes = [
  { name: 'Default', value: 'default' as Theme },
  { name: 'Blue', value: 'blue' as Theme },
  { name: 'Green', value: 'green' as Theme },
  { name: 'Orange', value: 'orange' as Theme },
  { name: 'Red', value: 'red' as Theme },
  { name: 'Rose', value: 'rose' as Theme },
  { name: 'Violet', value: 'violet' as Theme },
  { name: 'Yellow', value: 'yellow' as Theme },
]

export function StyleSwitcher() {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'default'
  })

  useEffect(() => {
    const root = document.documentElement
    if (selectedTheme === 'default') {
      root.removeAttribute('data-theme')
    } else {
      root.setAttribute('data-theme', selectedTheme)
    }
  }, [selectedTheme])

  const handleThemeChange = (theme: Theme) => {
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
