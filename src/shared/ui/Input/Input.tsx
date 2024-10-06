'use client'

import React, { forwardRef, useId, useState } from 'react'
import clsx from 'clsx'

import s from './Input.module.scss'

import { Eye, EyeOff, X, Search } from 'lucide-react'

export type InputProps = {
  disabled?: boolean
  errorMessage?: string
  label?: string
  onClearClick?: () => void
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  value?: string
} & React.ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    disabled,
    errorMessage,
    id,
    label,
    onClearClick,
    onEnter,
    onKeyDown,
    type,
    ...rest
  } = props
  const [showPassword, setShowPassword] = useState(false)

  const showError = !!errorMessage && errorMessage.length > 0
  const isSearchField = type === 'search'
  const isPasswordField = type === 'password'
  const isShowClearButton = onClearClick && rest?.value?.length! > 0

  const generatedId = useId()
  const inputId = id ?? generatedId
  const finalType = getFinalType(type, showPassword)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onEnter && e.key === 'Enter') {
      onEnter(e)
    }
    onKeyDown?.(e)
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const classNames = {
    input: clsx(
      s.input,
      showError && s.error,
      isSearchField && s.hasSearchIcon,
      (isPasswordField || isShowClearButton) && s.hasEndIcon
    ),
    inputWrapper: clsx(s.inputWrapper, disabled && s.disabled),
    label: clsx(s.label, disabled && s.disabled),
    root: clsx(s.root, className),
    searchIcon: clsx(s.searchIcon, disabled && s.disabled),
  }

  return (
    <div className={classNames.root}>
      {label && (
        <label className={classNames.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className={classNames.inputWrapper}>
        {isSearchField && (
          <span className={classNames.searchIcon}>
            <Search aria-hidden />
          </span>
        )}
        <input
          className={classNames.input}
          disabled={disabled}
          id={inputId}
          onKeyDown={handleKeyDown}
          ref={ref}
          type={finalType}
          {...rest}
        />
        {isShowClearButton && (
          <button
            className={s.endBtn}
            onClick={onClearClick}
            type={'button'}
            title={'Закрыть поиск'}
          >
            {<X aria-label={'Закрыть поиск'} />}
          </button>
        )}
        {isPasswordField && (
          <button
            aria-label={showPassword ? 'Показать пароль' : 'Скрыть пароль'}
            className={s.endBtn}
            onClick={handleTogglePassword}
            type={'button'}
            title={showPassword ? 'Показать пароль' : 'Скрыть пароль'}
          >
            {showPassword ? <Eye aria-hidden /> : <EyeOff aria-hidden />}
          </button>
        )}
      </div>
      {errorMessage && <p className={s.errorMessage}>{errorMessage}</p>}
    </div>
  )
})

Input.displayName = 'Input'

function getFinalType(
  type: React.ComponentProps<'input'>['type'],
  showPassword: boolean
): React.ComponentProps<'input'>['type'] {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
