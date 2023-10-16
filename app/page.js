
import Sidebar from './components/Sidebar'
import PopularCategories from './components/PopularCategories'
import LastComments from './components/LastComments'
import PostList from './components/PostList'
import { getPosts } from './services/graphql'

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className='max-w-7xl mx-auto w-full mt-16'>
      <div className='grid grid-cols-10 gap-2'>
        <div className='col-span-2'>
          <Sidebar/>
        </div>
        <div className='col-span-5'>
          {
            posts && <PostList posts={posts} />
          }    
        </div>
        <div className='col-span-3 flex flex-col gap-2'>
          <PopularCategories />
          <LastComments />
        </div>
      </div>
    </main>
  )
}
