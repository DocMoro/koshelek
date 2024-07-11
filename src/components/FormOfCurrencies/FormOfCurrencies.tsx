import clsx from 'clsx'
import { ChangeEvent, FC } from 'react'

import { TCurrencies } from '../../shared/constants/type'
import s from './FormOfCurrencies.module.css'

type FormOfCurrenciesProps = {
  currencies: TCurrencies
  setValueUsd: (newValue: string) => void
  setValueEur: (newValue: string) => void
  textErr: string
  className?: string
}

export const FormOfCurrencies: FC<FormOfCurrenciesProps> = ({
  currencies,
  setValueUsd,
  setValueEur,
  textErr,
  className
}) => {
  const handleChangeUsdField = (e: ChangeEvent<HTMLInputElement>) => {
    setValueUsd(e.target.value)
  }

  const handleChangeEurField = (e: ChangeEvent<HTMLInputElement>) => {
    setValueEur(e.target.value)
  }

  return (
    <form className={clsx(s.Form, className && className)}>
      <div className={s.Container}>
        <div>
          <h4 className={s.Title}>USD</h4>
          <input type="text" onChange={handleChangeUsdField} value={currencies.valueUsd} />
        </div>
        <div>
          <h4 className={s.Title}>EUR</h4>
          <input type="text" onChange={handleChangeEurField} value={currencies.valueEur} />
        </div>
      </div>
      <span className={s.TextErr}>{textErr}</span>
    </form>
  )
}
