import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-white p-3 rounded-lg flex flex-col'>
        <p className='text-xl text-gray-900 font-bold mb-2'>Para los que estamos hartos de ser politicamente correctos.</p>
        <p className='text-gray-600 mb-2'>Un lugar en el que escribimos lo que pensamos sobre una gran variedad de temas.</p>
        <button className='border border-orange-500 text-orange-500 py-2 w-full rounded-lg font-medium hover:bg-orange-500 hover:text-white'>
            Suscribirse
        </button>
    </div>
  )
}

export default Sidebar