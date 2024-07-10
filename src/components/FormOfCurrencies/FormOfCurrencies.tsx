import { ChangeEvent, FC } from 'react'

import { TCurrencies } from '../../shared/constants/type'

type FormOfCurrenciesProps = {
  currencies: TCurrencies
  setValueUsd: (newValue: string) => void
  setValueEur: (newValue: string) => void
}

export const FormOfCurrencies: FC<FormOfCurrenciesProps> = ({ currencies, setValueUsd, setValueEur }) => {
  const handleChangeUsdField = (e: ChangeEvent<HTMLInputElement>) => {
    setValueUsd(e.target.value)
  }

  const handleChangeEurField = (e: ChangeEvent<HTMLInputElement>) => {
    setValueEur(e.target.value)
  }

  return (
    <form>
      <div>
        <h4>USD</h4>
        <input type="text" onChange={handleChangeUsdField} value={currencies.valueUsd} />
        <span></span>
      </div>
      <div>
        <h4>EUR</h4>
        <input type="text" onChange={handleChangeEurField} value={currencies.valueEur} />
        <span></span>
      </div>
    </form>
  )
}
