import Image from 'next/image'
import './style.css'
import StoreCard from '@/components/StoreCard'
export default function Page() {
  return (
    <>
      <div className="container flex flex-wrap items-center  justify-start sm:justify-center">
        {[
          {
            id: 1,
            title: 'Application 1',
            description: '10',
            imgSrc: '/games/x.png',
          },
          {
            id: 1,
            title: 'Application 1',
            description: '10',
            imgSrc: '/games/x.png',
          },
          {
            id: 1,
            title: 'Application 1',
            description: '10',
            imgSrc: '/games/x.png',
          },
          {
            id: 1,
            title: 'Application 1',
            description: '10',
            imgSrc: '/games/x.png',
          },
        ].map((e, index) => {
          return <StoreCard key={index} {...e}></StoreCard>
        })}
      </div>
    </>
  )
}
