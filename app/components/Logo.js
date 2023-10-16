import Image from "next/image"

const Logo = () => {
  return (
    <div className='flex gap-1'>
        <p className='text-3xl font-black special-text'>SinPelosEnLa</p>
        <Image src={'/cartoon-1293830.svg'} alt='logo' width={30} height={30} />
    </div>
  )
}

export default Logo