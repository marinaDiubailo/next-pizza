'use client'
import { Checkbox, RadioGroup, Input, Slider } from '@/shared/ui'
import s from './Sidebar.module.scss'
import { useState } from 'react'

const options = [
  {
    value: 'traditional',
    label: 'Традиционное',
  },
  {
    value: 'thin',
    label: 'Тонкое',
  },
]
export const Sidebar = () => {
  const [priceFilter, setPriceFilter] = useState([6.99, 55])

  return (
    <div className={s.sidebar}>
      <h2 className={s.title}>Фильтрация</h2>
      <form className={s.form}>
        <div className={s.checkboxContainer}>
          <Checkbox label={'Можно собирать'} />
          <Checkbox label={'Новинки'} />
        </div>
        <div className={s.priceWrapper}>
          <h3 className={s.subTitle}>Цена от и до:</h3>
          <div className={s.priceContaner}>
            <Input
              type={'number'}
              min={6.99}
              max={55}
              step={0.01}
              placeholder={'6.99'}
              addonRight={<span className={s.priceTag}>руб.</span>}
            />
            <Input
              type={'number'}
              min={6.99}
              max={55}
              step={0.01}
              placeholder={'55'}
              addonRight={<span className={s.priceTag}>руб.</span>}
            />
          </div>
          <Slider
            value={priceFilter}
            min={6.99}
            max={50}
            step={1}
            onValueChange={setPriceFilter}
            withLabel
          />
        </div>
        <div>
          <h3 className={s.subTitle}>Тип теста:</h3>
          <RadioGroup options={options} defaultValue={options[0].value} />
        </div>
      </form>
    </div>
  )
}
