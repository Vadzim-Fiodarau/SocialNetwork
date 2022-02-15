export const required = (value: string) => {
  if(value) return undefined
  return 'Filed is required'
}

export const maxLengthCreator = (maxLength: number) => {
  return function (value: string){
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
  }
}