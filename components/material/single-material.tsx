import Image from 'next/image'

type Props = {
  title: string,
  image: string
}

const SingleMaterial = ({title, image}: Props) => {
  return (
    <div className='flex flex-col items-center w-full gap-y-4'>
        <div className='w-full h-64 p-4 rounded-tr-[70px] bg-light_blue rounded-lg'>
            <div className='flex items-center justify-center rounded-tr-[70px] rounded-lg rounded-bl-[70px] h-full bg-white'>
                <Image src={image} className='w-3/5 h-3/5 sm:w-4/5 sm:h-4/5 ' width={170} height={170} alt={title} />
            </div>
        </div>
        <h3 className='text-lg font-bold text-primary'>{title}</h3>
    </div>
  )
}

export default SingleMaterial