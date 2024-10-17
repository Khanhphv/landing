const data = [
  {
    title: 'Believing in Positivity',
    desc: 'As passionate gamers, we strongly believe in creating clean and fair gaming experiences. We embrace a positive approach that values every player, avoiding the reliance on endless ban lists as the default solution.',
  },
  {
    title: 'Epic Partnership',
    desc: `With Epic Online Services, we're helping developers streamline and scale their games efficiently, ensuring high-quality experiences for players.`,
  },
  {
    title: 'Prevention Over Punishment',
    desc: `Traditional mass-penalization approaches may work temporarily, but they divide communities and fail to offer sustainable results. We believe cheat prevention is the key to changing player mindsets and fostering long-term positive behavior.

    Our focus on prevention also means rejecting the idea that anti-cheat solutions should inherently be invasive of players' privacy.`,
  },
]
export default function FairPlay() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <p className="text-center text-lg leading-7 text-gray-500 dark:text-gray-400">
            As passionate gamers, we deeply believe in the importance of fair and enjoyable
            gameplay. Our approach prioritizes creating a positive environment where every player is
            valued, rather than relying on endless ban lists as the norm.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {data.map((d, index) => (
              <div key={index} className="md max-w-[544px] p-4 md:w-1/3">
                <div className={`overflow-hidden rounded-md `}>
                  <p className="font-weight-bold text-2xl leading-7 underline-offset-1 hover:underline">
                    {d.title}
                  </p>
                  <p className="mt-4">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
