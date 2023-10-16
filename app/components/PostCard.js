import Link from "next/link"
import Image from "next/image"
import { AiOutlineHeart, AiOutlineMessage, AiOutlineShareAlt } from 'react-icons/ai'

const PostCard = () => {
  return (
    <div className='bg-white p-3 rounded-lg flex flex-col justify-center'>
        <div className='w-full flex gap-2 items-center justify-start'>
            <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center'>
                <Image src={'/cartoon-1293830.svg'} alt='profileImg' width={30} height={30} />
            </div>
            <div className="flex flex-col">
                <p className="text-gray-600 font-medium tracking-tight">Nombre de Autor</p>
                <p className="text-xs font-light">14 de Septiembre</p>
            </div>
        </div>
        <div className="flex flex-col p-5">
            <Link href={`/post/un-post-cualquiera`}>
                <p className='text-2xl text-gray-900 font-bold mb-3 cursor-pointer hover:text-blue-800'>¿Por qué las feministas pierden incluso ganando?</p>
            </Link>
            <div className="flex gap-3 flex-wrap">
            <p className='px-1 bg-gray-200 rounded-full'>#categoría1</p>
            <p className='px-1 bg-gray-200 rounded-full'>#catdos</p>
            <p className='px-1 bg-gray-200 rounded-full'>#uno</p>
            </div>
        </div>
        <div className="flex justify-around">
            <div className="flex items-center gap-1">
                <span className="text-2xl text-red-600"><AiOutlineHeart /></span>
                <p>2</p>
            </div>
            <div className="flex items-center gap-1">
                <span className="text-2xl text-blue-600"><AiOutlineMessage /></span>
                <p>5</p>
            </div>
            <div className="flex items-center gap-1">
                <span className="text-2xl text-yellow-600"><AiOutlineShareAlt /></span>
                <p>5</p>
            </div>
        </div>
    </div>
  )
}

export default PostCard