import Floor from '@/components/floor'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

const SingeFloor = () => {
  const { query, push } = useRouter();
  const floorNum = query.floorId as string

  useEffect(() => {
    if(floorNum && +floorNum <= 0 || +floorNum > 5){
      push('/residence')
      console.log('tru')
    }
    if(floorNum) {
      console.log(+floorNum)
    }
  }, [floorNum])

  return (
    <Floor floorNum={floorNum} />
  )
}

export default SingeFloor