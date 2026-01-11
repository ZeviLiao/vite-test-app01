import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ButtonDemo() {
  const [clickCount, setClickCount] = useState(0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>1. Button 元件</CardTitle>
        <CardDescription>測試不同的 Button 變體和尺寸</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm mb-3">不同變體：</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        <div>
          <h3 className="text-sm mb-3">不同尺寸：</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div>
          <h3 className="text-sm mb-3">互動測試：</h3>
          <div className="flex items-center gap-3">
            <Button onClick={() => setClickCount(clickCount + 1)}>
              點擊我
            </Button>
            <span className="text-sm text-muted-foreground">
              點擊次數: {clickCount}
            </span>
            <Button
              variant="outline"
              onClick={() => setClickCount(0)}
              size="sm"
            >
              重置
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
