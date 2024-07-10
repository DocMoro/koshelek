import { regexValidCurrensi } from '../constants/vars'

export const checkValidCurrensi = (numStr: string) => regexValidCurrensi.test(numStr)
export const numberFixed = (number: number, fixed: number) => {
  const numStr = String(number)
  const split = numStr.split('.')
  if (split.length > 1) {
    const left = split[0]
    const right = split[1].slice(0, !fixed ? 4 : fixed).replace(/0*$/, '')
    return Number(left + (fixed !== 0 && right ? '.' + right : ''))
  }
  return number
}
