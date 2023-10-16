import Comments from '@/app/components/Comments';
import LastComments from '@/app/components/LastComments';
import PostActions from '@/app/components/PostActions';
import PostDetail from '@/app/components/PostDetail';
import { getPostDetails } from '@/app/services/graphql';


const PostPage = async ({params}) => {
    const { slug } = params;
    const post = await getPostDetails(slug)
  return (
    <div className='max-w-7xl mx-auto w-full mt-16 '>
        <div className=' w-full grid grid-cols-10 gap-2'>
            <div className='hidden lg:flex lg:col-span-1  justify-center'>
                <PostActions />
            </div>
            <div className='col-span-10 lg:col-span-6 flex flex-col'>
                {post && <PostDetail post={post}/> }
                <Comments />
            </div>
            <div className='col-span-10 lg:col-span-3'>
                <LastComments />
            </div>
        </div>
    </div>
  )
}

export default PostPage