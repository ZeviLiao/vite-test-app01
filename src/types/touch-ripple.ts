// Type definitions for MUI TouchRipple
export interface TouchRippleActions {
  start: (
    event: React.MouseEvent | React.TouchEvent,
    options?: { center?: boolean },
  ) => void
  stop: (event: React.MouseEvent | React.TouchEvent) => void
}
