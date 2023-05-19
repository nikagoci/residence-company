import Floor from '@/components/floor'
import { useRouter } from 'next/router'

const SingeFloor = () => {
  const { query } = useRouter();
  const floorNum = query.floorId as string


  return (
    <Floor floorNum={floorNum} />
  )
}

export default SingeFloor