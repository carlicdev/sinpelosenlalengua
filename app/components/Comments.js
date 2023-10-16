import React from 'react'

const Comments = () => {
  return (
    <div className='w-full bg-white mt-3 rounded-lg p-3'>
        <div className='flex flex-col'>
            <h4 className='text-3xl font-black text-gray-900 mb-3'>Comentarios <span>(22)</span></h4>
            <textarea 
                rows={3}
                className='w-full p-1 outline-none focus:outline-orange-500 rounded-lg border border-gray-200'
                placeholder='Únete a la discusión...'
            />
        </div>
    </div>
  )
}

export default Comments