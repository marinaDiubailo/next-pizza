import React, { forwardRef } from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import s from './RadioGroup.module.scss'
import clsx from 'clsx'

export type RadioGroupOption = {
  label: string
  value: string
}
export type RadioGroupProps = {
  options: RadioGroupOption[]
} & React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>

type RadioGroupRef = React.ElementRef<typeof RadioGroupPrimitive.Root>

export const RadioGroup = forwardRef<RadioGroupRef, RadioGroupProps>(
  ({ className, options, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Root className={clsx(s.root, className)} {...props} ref={ref}>
        {options.map(({ value, label }) => (
          <label key={value} className={s.group}>
            <RadioGroupPrimitive.Item className={s.item} value={value}>
              <RadioGroupPrimitive.Indicator className={s.indicator} />
            </RadioGroupPrimitive.Item>
            <span className={s.label}>{label}</span>
          </label>
        ))}
      </RadioGroupPrimitive.Root>
    )
  }
)
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName
