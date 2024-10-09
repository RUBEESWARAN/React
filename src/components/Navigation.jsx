import React from 'react'

function Navigation({title}) {
  return (
    <div class="bg-black flex flex-col">
    <div className="bg-blue-800 p-4">
        <h1 className="text-white text-2xl">Navigation</h1>
    </div>
    <div className='bg-pink-500'>
        <h1 className='text-black text-2xl'>Menu</h1>
    </div>
    </div>
  )
}

export default Navigation