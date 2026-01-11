/**
 * Get the current system theme preference
 * @returns 'dark' or 'light' based on system preference
 */
export const getSystemTheme = (): 'dark' | 'light' => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

/**
 * Get a readable label for the system theme
 * @returns 'Dark' or 'Light' with capitalization
 */
export const getSystemThemeLabel = (): string => {
  const theme = getSystemTheme()
  return theme.charAt(0).toUpperCase() + theme.slice(1)
}
