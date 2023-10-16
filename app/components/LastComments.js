import React from 'react'

const LastComments = () => {
  return (
    <div className='bg-white p-3 rounded-lg flex flex-col justify-center'>
        <p className='text-xl text-gray-900 font-bold mb-2 text-center'>Últimos Comentarios</p>
        <div className='flex flex-col justify-around'>
            <div className='py-4 border-y border-gray-100'>
                <p className='text-gray-900'>Este es el titulo de algún post</p>
                <p className='text-sm font-light text-gray-600'>2 Comentarios</p>
            </div>
            <div className='py-4 border-y border-gray-100'>
                <p className='text-gray-900'>Este es el titulo de algún post</p>
                <p className='text-sm font-light text-gray-600'>2 Comentarios</p>
            </div>
            <div className='py-4 border-y border-gray-100'>
                <p className='text-gray-900'>Este es el titulo de algún post</p>
                <p className='text-sm font-light text-gray-600'>2 Comentarios</p>
            </div>
            <div className='py-4 border-y border-gray-100'>
                <p className='text-gray-900'>Este es el titulo de algún post</p>
                <p className='text-sm font-light text-gray-600'>2 Comentarios</p>
            </div>
            <div className='py-4 border-y border-gray-100'>
                <p className='text-gray-900'>Este es el titulo de algún post</p>
                <div className='flex w-full'>
                    <div className='bg-orange-500 px-2 rounded flex'>
                        <p className='text-sm text-white'>Nuevo</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LastComments