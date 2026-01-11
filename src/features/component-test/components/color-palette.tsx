import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ColorPalette() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Color Palette</CardTitle>
        <CardDescription>當前 Base Color 的所有顏色變數</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-background border" />
              <div>
                <div className="text-sm">background</div>
                <div className="text-xs text-muted-foreground">背景色</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-foreground" />
              <div>
                <div className="text-sm">foreground</div>
                <div className="text-xs text-muted-foreground">前景色</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-primary" />
              <div>
                <div className="text-sm">primary</div>
                <div className="text-xs text-muted-foreground">主色</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-secondary" />
              <div>
                <div className="text-sm">secondary</div>
                <div className="text-xs text-muted-foreground">次要色</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-muted" />
              <div>
                <div className="text-sm">muted</div>
                <div className="text-xs text-muted-foreground">柔和色</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-accent" />
              <div>
                <div className="text-sm">accent</div>
                <div className="text-xs text-muted-foreground">強調色</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-destructive" />
              <div>
                <div className="text-sm">destructive</div>
                <div className="text-xs text-muted-foreground">警告色</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md border border-border bg-card" />
              <div>
                <div className="text-sm">border</div>
                <div className="text-xs text-muted-foreground">邊框色</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md border-2 border-input bg-background" />
              <div>
                <div className="text-sm">input</div>
                <div className="text-xs text-muted-foreground">輸入框</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-card border" />
              <div>
                <div className="text-sm">card</div>
                <div className="text-xs text-muted-foreground">卡片色</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
