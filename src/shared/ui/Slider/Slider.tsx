import React, { forwardRef } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'
import clsx from 'clsx'

import s from './Slider.module.scss'

export type SliderProps = { withLabel?: boolean } & React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
>

export const Slider = forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, withLabel, ...props }, ref) => {
    const value = props.value || props.defaultValue

    return (
      <SliderPrimitive.Root className={clsx(s.root, className)} ref={ref} {...props}>
        <SliderPrimitive.Track className={s.track}>
          <SliderPrimitive.Range className={s.range} />
        </SliderPrimitive.Track>
        {value?.map((item, i) => {
          if (withLabel) {
            return (
              <SliderPrimitive.Thumb key={i} asChild>
                <div className={s.thumb}>
                  <span className={s.label} aria-hidden>
                    {item}
                  </span>
                </div>
              </SliderPrimitive.Thumb>
            )
          }
          return <SliderPrimitive.Thumb className={s.thumb} key={i} />
        })}
      </SliderPrimitive.Root>
    )
  }
)

Slider.displayName = SliderPrimitive.Root.displayName
