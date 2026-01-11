import TouchRipple from '@mui/material/ButtonBase/TouchRipple'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'
import type { TouchRippleActions } from '@/types/touch-ripple'

const buttonVariants = cva(
  'relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const rippleRef = React.useRef<TouchRippleActions | null>(null)
    const buttonRef = React.useRef<HTMLButtonElement | null>(null)

    // Store latest callbacks in refs to avoid recreating handlers
    const onMouseDownRef = React.useRef(props.onMouseDown)
    const onMouseUpRef = React.useRef(props.onMouseUp)

    React.useEffect(() => {
      onMouseDownRef.current = props.onMouseDown
      onMouseUpRef.current = props.onMouseUp
    })

    const handleMouseDown = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        if (rippleRef.current) {
          rippleRef.current.start(event, { center: false })
        }
        onMouseDownRef.current?.(event)
      },
      [],
    )

    const handleMouseUp = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        if (rippleRef.current) {
          rippleRef.current.stop(event)
        }
        onMouseUpRef.current?.(event)
      },
      [],
    )

    const handleRef = React.useCallback(
      (node: HTMLButtonElement | null) => {
        buttonRef.current = node
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ref.current = node
        }
      },
      [ref],
    )

    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      )
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={handleRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        {...props}
      >
        {props.children}
        {/* @ts-expect-error - TouchRipple has complex internal types */}
        <TouchRipple ref={rippleRef} center={false} />
      </button>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
