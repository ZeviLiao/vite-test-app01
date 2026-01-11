import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { getSystemThemeLabel } from '@/lib/theme'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const getThemeIcon = () => {
    if (theme === 'light') return '☀️'
    if (theme === 'dark') return '🌙'
    return '💻'
  }

  const getThemeLabel = () => {
    if (theme === 'light') return 'Light'
    if (theme === 'dark') return 'Dark'
    return 'System'
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span>{getThemeIcon()}</span>
          <span className="sr-only">
            Current theme: {getThemeLabel()}. Click to change theme.
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          ☀️ Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          🌙 Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          💻 System ({getSystemThemeLabel()})
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
