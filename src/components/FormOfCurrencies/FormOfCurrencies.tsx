import { ChangeEvent, useState } from 'react'

import { exchangeRate } from '../../shared/constants/vars'
import { checkValidCurrensi, numberFixed } from '../../shared/utils/pureFunc'

const startUsdValue = '1'

export const FormOfCurrencies = () => {
  const [value, setValue] = useState(startUsdValue)
  const [value2, setValue2] = useState(exchangeRate.toString())

  const handleChangeUsdField = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(prev => {
      if (e.target.value === '') {
        setValue2('')
        return ''
      }
      if (!checkValidCurrensi(e.target.value)) {
        return prev
      }
      setValue2(numberFixed(+e.target.value * exchangeRate, 2).toString())
      return e.target.value
    })
  }

  const handleChangeEurField = (e: ChangeEvent<HTMLInputElement>) => {
    setValue2(prev => {
      if (e.target.value === '') {
        setValue('')
        return ''
      }
      if (!checkValidCurrensi(e.target.value)) {
        return prev
      }
      setValue(numberFixed(+e.target.value / exchangeRate, 2).toString())
      return e.target.value
    })
  }

  return (
    <form>
      <div>
        <h4>USD</h4>
        <input type="text" onChange={handleChangeUsdField} value={value} />
        <span></span>
      </div>
      <div>
        <h4>EUR</h4>
        <input type="text" onChange={handleChangeEurField} value={value2} />
        <span></span>
      </div>
    </form>
  )
}
