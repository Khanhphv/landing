import Card from '@/components/Card'

export default function Applications() {
  return (
    <>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {[
            {
              id: 1,
              title: 'Valorant',
              description: 'Application 1 description',
              href: '/store/1',
              imgSrc: '/games/x.png',
            },
          ].map((app, index) => {
            return (
              <>
                <Card key={index} {...app}></Card>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
