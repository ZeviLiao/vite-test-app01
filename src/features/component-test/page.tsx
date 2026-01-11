import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function ComponentsTest() {
  const [selectedOption, setSelectedOption] = useState('Option 1')
  const [clickCount, setClickCount] = useState(0)

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="absolute top-4 right-4">
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

        {/* Button Component Test */}
        <Card>
          <CardHeader>
            <CardTitle>1. Button 元件</CardTitle>
            <CardDescription>測試不同的 Button 變體和尺寸</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-3">不同變體：</h3>
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
              <h3 className="text-sm font-medium mb-3">不同尺寸：</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">互動測試：</h3>
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

        {/* DropdownMenu Component Test */}
        <Card>
          <CardHeader>
            <CardTitle>2. DropdownMenu 元件</CardTitle>
            <CardDescription>測試下拉選單的功能和樣式</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-3">基本下拉選單：</h3>
              <div className="flex items-center gap-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      {selectedOption}
                      <ChevronDown className="ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>選擇選項</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => setSelectedOption('Option 1')}
                    >
                      Option 1
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setSelectedOption('Option 2')}
                    >
                      Option 2
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setSelectedOption('Option 3')}
                    >
                      Option 3
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      刪除選項
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <span className="text-sm text-muted-foreground">
                  當前選擇: {selectedOption}
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">多個動作選單：</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    動作
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuLabel>可用動作</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>編輯</DropdownMenuItem>
                  <DropdownMenuItem>複製</DropdownMenuItem>
                  <DropdownMenuItem>分享</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    刪除
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>

        {/* Card Component Test */}
        <Card>
          <CardHeader>
            <CardTitle>3. Card 元件</CardTitle>
            <CardDescription>測試卡片元件的各個部分</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">簡單卡片</CardTitle>
                  <CardDescription>這是一個基本的卡片範例</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Card 元件包含 Header、Content 和 Footer 三個主要部分，
                    可以靈活組合使用。
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">
                    了解更多
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">互動卡片</CardTitle>
                  <CardDescription>帶有按鈕的卡片</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    這張卡片展示了如何在 Card 中整合其他元件。
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm">主要動作</Button>
                    <Button size="sm" variant="secondary">
                      次要動作
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Summary Card */}
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>測試總結</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p>✓ Button 元件 - 測試了 6 種變體和 3 種尺寸</p>
              <p>✓ DropdownMenu 元件 - 測試了基本選單和動作選單</p>
              <p>✓ Card 元件 - 測試了卡片的各個組成部分</p>
            </div>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            所有元件都來自 shadcn/ui 並使用 Tailwind CSS 樣式
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default ComponentsTest
