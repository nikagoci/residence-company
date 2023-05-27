import Floor from '@/components/floor'
import Modal from '@/components/shared/modal';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import {GET_SINGLE_FLAT} from '@/libs/graphql/queries'

type SingleFlat = {
  Flat: Flat
}

const SingeFloor = () => {

  const [openModal, setOpenModal] = useState(false);
  const { query, push } = useRouter();
  const { data, loading, error } = useQuery<SingleFlat>(GET_SINGLE_FLAT, {
    variables: { flatNum: query.flat && +query.flat }
  })

  const floorNum = query.floorId as string

  useEffect(() => {
    if(floorNum && +floorNum <= 0 || +floorNum > 5){
      push('/residence')
    }
  }, [floorNum])

  useEffect(() => {
    if(query.flat){
      setOpenModal(true)
    }
  }, [query])

  return (

    
    <>
    <Modal flat={data?.Flat} loading={loading} error={error} openModal={openModal} setOpenModal={setOpenModal} />

    <Floor floorNum={floorNum} />
    
    </>
  )
}

export default SingeFloor