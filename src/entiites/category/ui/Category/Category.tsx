import clsx from 'clsx'
import React from 'react'
import s from './Category.module.scss'

type Props = {
  isActive?: boolean
  category: string
} & React.ComponentProps<'button'>

export const Category: React.FC<Props> = ({ isActive, category, ...rest }) => {
  return (
    <button className={clsx(s.category, isActive && s.active)} {...rest}>
      {category}
    </button>
  )
}
