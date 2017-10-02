import React from 'react'
import Countdown from './components/Countdown'

const App = () => {
  return (
    <div>
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>
                        React Countdown Timer
                    </li>
          </ul>
        </div>
      </div>
      <div className='row'>
        <div className='columns medium-6 large-4 small-centered'>
          <Countdown />
        </div>
      </div>
    </div>
  )
}

export default App
