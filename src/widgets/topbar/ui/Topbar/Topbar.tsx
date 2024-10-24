import React from 'react'
import { CategorySelect } from '@/features/category-select'
import { SortSelect } from '@/features/sort-select'
import { Container } from '@/shared/ui'
import s from './Topbar.module.scss'

type Props = {}

export const Topbar: React.FC<Props> = () => {
  return (
    <div className={s.topbar}>
      <Container className={s.selectors}>
        <CategorySelect />
        <SortSelect />
      </Container>
    </div>
  )
}
