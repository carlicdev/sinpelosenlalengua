import Comments from '@/app/components/Comments';
import LastComments from '@/app/components/LastComments';
import PostActions from '@/app/components/PostActions';
import PostDetail from '@/app/components/PostDetail';


const PostPage = ({params}) => {
    const { slug } = params;
  return (
    <div className='max-w-7xl mx-auto w-full mt-16 '>
        <div className='w-full grid grid-cols-10 gap-2'>
            <div className='col-span-1 flex justify-center'>
                <PostActions />
            </div>
            <div className='col-span-9 lg:col-span-6 flex flex-col'>
                <PostDetail />
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