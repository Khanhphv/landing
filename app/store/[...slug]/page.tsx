import StoreCard from '@/components/StoreCard'
export default function Page({ params: { slug } }: { params: { slug: string } }) {
  return (
    <div className="flex grow flex-col justify-center">
      <h2 className="text-center text-2xl font-bold uppercase">{slug}</h2>
      <div className="flex flex-wrap items-center justify-center">
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
    </div>
  )
}
