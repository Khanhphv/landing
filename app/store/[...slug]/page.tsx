import StoreCard from '@/components/StoreCard'
export default function Page({ params: { slug } }: { params: { slug: string } }) {
  return (
    <div className="flex grow flex-col justify-center">
      <h2 className="text-center text-2xl font-bold uppercase">{slug}</h2>
      <div className="flex flex-wrap items-center justify-center">
        {[
          {
            title: 'illusion',
            download: '25.235',
            imgSrc: '/games/illusion_swapper.png',
          },
          {
            title: 'Elsify',
            download: '379.847',
            imgSrc: '/games/Elsify.png',
          },
          {
            title: 'Custom Lobby',
            download: '17.138',
            imgSrc: '/games/Custom_Lobby_Tool.png',
          },
          {
            title: 'ValStretcher',
            download: '5.104',
            imgSrc: '/games/stretched.png',
          },
          {
            title: 'FBS Boost',
            download: '11.163',
            imgSrc: '/games/frozentweaks_frostchanger.png',
          },
        ].map((e, index) => {
          return <StoreCard key={index} {...e}></StoreCard>
        })}
      </div>
    </div>
  )
}
