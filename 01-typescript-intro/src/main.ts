import './style.css'
import { setupCounter } from './counter.ts'
// import { charmander } from './bases/04-injection.ts'
// import { charmander } from './bases/05-decorators.ts'
import { charmander } from './bases/06-decoratorsv2.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>
      holi c: ${charmander.name}
    </h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
