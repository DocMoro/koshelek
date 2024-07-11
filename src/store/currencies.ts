import { create } from 'zustand'

import { TCurrencies } from '../shared/constants/type'
import { exchangeRate, notValidText, startCurrenciesValue } from '../shared/constants/vars'
import { checkValidCurrensi, numberFixed } from '../shared/utils/pureFunc'

type State = {
  currencies: TCurrencies
  textErr: string
}

type Action = {
  setValueUsd: (newValue: string) => void
  setValueEur: (newValue: string) => void
}

type Store = State & Action

const useCurrenciesStore = create<Store>(set => ({
  currencies: startCurrenciesValue,
  textErr: '',
  setValueUsd: (newValue: string) =>
    set(state => {
      if (newValue === '') {
        return {
          currencies: {
            ...state.currencies,
            valueUsd: '',
            valueEur: ''
          },
          textErr: ''
        }
      }
      if (!checkValidCurrensi(newValue)) {
        return {
          currencies: {
            ...state.currencies
          },
          textErr: notValidText
        }
      }
      const newValueEur = numberFixed(+newValue * exchangeRate, 2).toString()
      return {
        currencies: {
          ...state.currencies,
          valueUsd: newValue,
          valueEur: newValueEur
        },
        textErr: ''
      }
    }),
  setValueEur: (newValue: string) =>
    set(state => {
      if (newValue === '') {
        return {
          currencies: {
            ...state.currencies,
            valueUsd: '',
            valueEur: ''
          },
          textErr: ''
        }
      }
      if (!checkValidCurrensi(newValue)) {
        return {
          currencies: {
            ...state.currencies
          },
          textErr: notValidText
        }
      }
      const newValueUsd = numberFixed(+newValue / exchangeRate, 2).toString()
      return {
        currencies: {
          ...state.currencies,
          valueUsd: newValueUsd,
          valueEur: newValue
        },
        textErr: ''
      }
    })
}))

const selectorCurrencies = (state: Store) => state.currencies
const selectorValueEur = (state: Store) => state.setValueEur
const selectorValueUsd = (state: Store) => state.setValueUsd
const selectorTextErr = (state: Store) => state.textErr

export { selectorCurrencies, selectorTextErr, selectorValueEur, selectorValueUsd, useCurrenciesStore }
