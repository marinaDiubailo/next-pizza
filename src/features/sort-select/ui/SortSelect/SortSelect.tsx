'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import { ArrowDownUp } from 'lucide-react'
import * as SelectPrimitive from '@radix-ui/react-select'
import s from './SortSelect.module.scss'

const sortOptions = [
  {
    value: 'raiting',
    label: 'по рейтингу',
  },
  {
    value: 'price',
    label: 'по цене',
  },
]

export const SortSelect = () => {
  const [value, setValue] = useState(sortOptions[0].value)

  return (
    <SelectPrimitive.Root
      value={value}
      onValueChange={setValue}
      defaultValue={sortOptions[0].value}
    >
      <SelectPrimitive.Trigger className={s.trigger}>
        <SelectPrimitive.Icon className={s.triggerIcon}>
          <ArrowDownUp size={16} />
        </SelectPrimitive.Icon>
        <span>Cортировка:</span>
        <SelectPrimitive.Value data-value={true} />
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className={s.content} position={'popper'} sideOffset={2}>
          <SelectPrimitive.Viewport className={s.viewport}>
            {sortOptions.map((option, idx) => (
              <SelectItem key={idx} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Item className={clsx(s.item, className)} {...props} ref={forwardedRef}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
})
