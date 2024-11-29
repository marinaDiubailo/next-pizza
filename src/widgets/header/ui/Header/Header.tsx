import React from 'react'

import s from './Header.module.scss'
import clsx from 'clsx'
import { Button, Container, Input } from '@/shared/ui'
import { User, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export const Header: React.FC<React.ComponentProps<'header'>> = ({ className }) => {
  return (
    <header className={clsx(s.header, className)}>
      <Container className={s.container}>
        <span className={s.logo}>Mammy Pizza</span>
        <form className={s.form}>
          <Input type={'search'} placeholder={'Поиск пиццы'} />
        </form>
        <div className={s.actions}>
          <Button variant={'tertiary'}>
            <User size={20} />
            <span>Войти</span>
          </Button>
          <Button>
            {/* <b>520 p</b>
            <span className={s.devider} />
            <ShoppingCart />
            <b className={s.count}>3</b> */}
            Корзина
          </Button>
        </div>
      </Container>
    </header>
  )
}
