// @flow
function say (str: string): string | number {
  console.log(str)

  return 1234
}

let result = say('123')

console.log(result)

function createEle (tag: string): HTMLElement {
  return document.createElement(tag)
}

function append (node: HTMLElement) {
  let tag = document.querySelector('body')
  if (tag) {
    tag.appendChild(node)
  }
}

let $wrap = createEle('div')
let $title = createEle('h1')

$title.innerHTML = 'Hello World'
$wrap.appendChild($title)

append($wrap)

class Test {
  log (msg: string | number) {
    console.log(msg)
  }
}

let test = new Test()
test.log('123')
