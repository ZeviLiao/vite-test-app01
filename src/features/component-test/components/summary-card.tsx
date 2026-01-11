import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function SummaryCard() {
  return (
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
  )
}
