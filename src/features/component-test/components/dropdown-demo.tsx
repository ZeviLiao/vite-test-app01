import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
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

export function DropdownDemo() {
  const [selectedOption, setSelectedOption] = useState('Option 1')

  return (
    <Card>
      <CardHeader>
        <CardTitle>2. DropdownMenu 元件</CardTitle>
        <CardDescription>測試下拉選單的功能和樣式</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm mb-3">基本下拉選單：</h3>
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
                <DropdownMenuItem onClick={() => setSelectedOption('Option 1')}>
                  Option 1
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedOption('Option 2')}>
                  Option 2
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedOption('Option 3')}>
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
          <h3 className="text-sm mb-3">多個動作選單：</h3>
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
              <DropdownMenuItem variant="destructive">刪除</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  )
}
