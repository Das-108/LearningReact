import { createRoot } from "react-dom/client"
import './style.css'
import ReactLogo from './assets/react.svg'

const root = createRoot(document.getElementById('root'))

function Header () {
  return (
    <header>
      <img src={ReactLogo} alt="react logo" />
      <h1>Reasons to learn React</h1>
    </header>
  )
}

function Page() {
  return(
    <>
      <Header />

      <ol>
        <li> React is a popular libaray , so I will be able to fit in with all the coolest devs out there!</li>
        <li>i am more likely to get a job as a frontend developer if i know react</li>
      </ol>

      <footer> 2025 Gaihre development, All rights reserves.</footer>
    </>
  )
}

root.render(
  <Page />
)