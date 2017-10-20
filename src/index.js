// @flow
function say (str: string): string | number {
  console.log(str)

  return 1234
}

let result = say('123')

console.log(result)
