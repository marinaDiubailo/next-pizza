import React, { forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './Button.module.scss'

import type { PolymorphPropsWithRef, PolymorphRef } from '../../types/polymorph'

type ButtonVariant = 'outlined' | 'primary' | 'secondary' | 'tertiary'

type ElementProps = {
  fullWidth?: boolean
  variant?: ButtonVariant
}

type TagComponent = <T extends React.ElementType = 'button'>(
  props: PolymorphPropsWithRef<T, ElementProps>
) => React.ReactNode

const ButtonPolymorph: TagComponent = forwardRef(
  <T extends React.ElementType = 'button'>(
    props: PolymorphPropsWithRef<T>,
    ref?: PolymorphRef<T>
  ) => {
    const {
      as: Tag = 'button',
      children,
      className,
      disabled,
      fullWidth,
      variant = 'primary',
      ...rest
    } = props

    const tagClassName = clsx(
      s.button,
      s[variant],
      fullWidth && s.fullWidth,
      className,
      disabled && 'href' in rest && s.disabled
    )

    return (
      <Tag className={tagClassName} disabled={disabled} ref={ref} {...rest}>
        {children}
      </Tag>
    )
  }
)

export const Button = ButtonPolymorph
