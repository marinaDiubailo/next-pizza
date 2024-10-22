import React from 'react'

import s from './Header.module.scss'
import clsx from 'clsx'
import { Button, Container, Input } from '@/shared/ui'
import { User, ShoppingCart } from 'lucide-react'

export const Header: React.FC<React.ComponentProps<'header'>> = ({ className }) => {
  return (
    <header className={clsx(s.header, className)}>
      <Container className={s.container}>
        <span className={s.logo}>Mammy Pizza</span>
        <form className={s.form}>
          <Input type={'search'} placeholder={'Поиск пиццы'} />
        </form>
        <div className={s.actions}>
          <Button>
            <User size={20} />
            <span>Войти</span>
          </Button>
          <Button variant={'outlined'}>
            <ShoppingCart />
          </Button>
        </div>
      </Container>
    </header>
  )
}
