import clsx from 'clsx'
import React from 'react'
import s from './Container.module.scss'

export const Container: React.FC<React.ComponentProps<'div'>> = props => {
  const { children, className, ...rest } = props
  return (
    <div className={clsx(s.container, className)} {...rest}>
      {children}
    </div>
  )
}
