import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function CardDemo() {
  return (
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
  )
}
