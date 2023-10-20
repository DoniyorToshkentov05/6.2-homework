import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './copmanent/Header/Header'
import Content from './copmanent/Content/Content'
import Footer from './copmanent/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Content/>
     <Footer/>
    </>
  )
}

export default App
