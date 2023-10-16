import Link from "next/link"
import Image from "next/image"
import styleDate from "../utils/date"
import { AiOutlineHeart, AiOutlineMessage, AiOutlineShareAlt } from 'react-icons/ai'

const PostCard = ({post, index}) => {
    
  return (
    <div className='bg-white rounded-lg flex flex-col justify-center'>
        {
            index === 0 && (
                <div className="w-full h-[250px] rounded-t-lg">
                    <img src={post.featuredImage.url} alt='postImg' className="w-full h-[250px] rounded-t-lg" />
                </div>
            )
        }
        <div className="p-3 flex flex-col justify-center">
            <div className='w-full flex gap-2 items-center justify-start'>
                <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center'>
                    <Image src={'/cartoon-1293830.svg'} alt='profileImg' width={30} height={30} />
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-600 font-medium tracking-tight">{post.author.name}</p>
                    <p className="text-xs font-light">{styleDate(post.createdAt)}</p>
                </div>
            </div>
            <div className="flex flex-col p-5">
                <Link href={`/post/${post.slug}`}>
                    <p className='text-2xl text-gray-900 font-bold mb-3 cursor-pointer hover:text-blue-800'>{post.title}</p>
                </Link>
                <div className="flex gap-3 flex-wrap">
                    {
                        post.categories.map((tag, index) => (
                            <p className='px-1 bg-gray-200 rounded-full' key={index}>#{tag.name}</p>
                        ))
                    }
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
    </div>
  )
}

export default PostCard