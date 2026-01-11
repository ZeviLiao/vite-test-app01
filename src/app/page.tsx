import { useState } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Vite + React 19 + Tailwind v4
          </h1>
          <p className="text-muted-foreground text-lg">
            With shadcn/ui components
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 p-8 border rounded-lg bg-card">
          <div className="text-2xl font-semibold">Count: {count}</div>

          <div className="flex gap-3">
            <Button onClick={() => setCount((count) => count + 1)}>
              Increment
            </Button>
            <Button variant="secondary" onClick={() => setCount(0)}>
              Reset
            </Button>
            <Button
              variant="outline"
              onClick={() => setCount((count) => count - 1)}
            >
              Decrement
            </Button>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            Edit{' '}
            <code className="bg-muted px-2 py-1 rounded">src/app/page.tsx</code>{' '}
            to test HMR
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-4 border rounded-lg">
            <div className="text-2xl font-bold text-primary">⚡</div>
            <div className="text-sm font-medium">Vite</div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="text-2xl font-bold text-primary">⚛️</div>
            <div className="text-sm font-medium">React 19</div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="text-2xl font-bold text-primary">🎨</div>
            <div className="text-sm font-medium">Tailwind v4</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
