'use client'

import React, { useId, forwardRef } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import s from './Checkbox.module.scss'
import clsx from 'clsx'

export type CheckboxProps = {
  label?: string
} & React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>

type CheckboxRef = React.ElementRef<typeof CheckboxPrimitive.Root>

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const { className, label, id, ...rest } = props
  const generatedId = useId()
  const checkboxId = id ?? generatedId

  return (
    <div className={clsx(s.root, className)}>
      <CheckboxPrimitive.Root ref={ref} className={s.checkbox} id={checkboxId} {...rest}>
        <CheckboxPrimitive.Indicator className={s.indicator}>
          <Check size={16} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && (
        <label htmlFor={checkboxId} className={s.label}>
          {label}
        </label>
      )}
    </div>
  )
})

Checkbox.displayName = CheckboxPrimitive.Root.displayName
