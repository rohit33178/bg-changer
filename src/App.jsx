import { useState } from 'react'
import ListButton from './components/ListButton'

function App() {
  const [bg, setBg] = useState('olive')
  return (
    <div className='w-full h-screen text-sm duration-500 p-2' style={{background: bg}}>
      <ListButton parentHandler={setBg} />
    </div>
  )
}

export default App
