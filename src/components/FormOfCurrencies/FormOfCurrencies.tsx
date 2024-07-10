import { ChangeEvent, useState } from 'react'

import { checkValidCurrensi } from '../../shared/utils/pureFunc'

export const FormOfCurrencies = () => {
  const [value, setValue] = useState('')

  const handleChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(prev => {
      if (!checkValidCurrensi(e.target.value)) {
        return prev
      }
      return e.target.value
    })
  }

  return (
    <form>
      <div>
        <h4>USD</h4>
        <input type="text" onChange={handleChangeField} value={value} />
        <span></span>
      </div>
      <div>
        <h4>EUR</h4>
        <input type="text" />
        <span></span>
      </div>
    </form>
  )
}
