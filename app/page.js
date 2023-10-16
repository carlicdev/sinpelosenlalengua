
import Sidebar from './components/Sidebar'
import PopularCategories from './components/PopularCategories'
import LastComments from './components/LastComments'
import PostList from './components/PostList'

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto w-full mt-16'>
      <div className='grid grid-cols-10 gap-2'>
        <div className='col-span-2'>
          <Sidebar/>
        </div>
        <div className='col-span-5'>
          <PostList />
        </div>
        <div className='col-span-3 flex flex-col gap-2'>
          <PopularCategories />
          <LastComments />
        </div>
      </div>
    </main>
  )
}
