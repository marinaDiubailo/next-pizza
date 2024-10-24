'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import { Category } from '@/entiites/category'
import { categories } from '../../model/consts/categories'
import s from './CategorySelect.module.scss'

export const CategorySelect: React.FC<React.ComponentProps<'ul'>> = ({ className }) => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0)

  return (
    <ul className={clsx(s.categories, className)}>
      {categories.map((category, idx) => (
        <li key={idx}>
          <Category
            category={category}
            isActive={idx === activeCategoryIdx}
            onClick={() => setActiveCategoryIdx(idx)}
          />
        </li>
      ))}
    </ul>
  )
}
