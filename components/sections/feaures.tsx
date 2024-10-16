import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import siteMetadata from '@/data/siteMetadata'

const data = [
  {
    title: 'Protection',
    desc: `BattlEye provides proactive, kernel-level defense with dynamic, real-time scanning of players' systems. It employs specific and heuristic detection techniques to ensure maximum effectiveness against cheats.`,
  },
  {
    title: 'On-The-Fly Scanning',
    desc: `BattlEye’s advanced detection routines use dynamic, on-the-fly scanning, continuously updated by the backend, making it nearly impossible for hackers to develop lasting bypasses.`,
  },
  {
    title: 'Global Bans',
    desc: `BattlEye offers a secure global ban system, linked to SteamID or account-based bans, providing a higher level of effectiveness than VAC. Over 150,000 bans have been enforced in just 15 months.`,
  },
  {
    title: 'Server Administration',
    desc: `BattlEye retains full control of game servers, enabling rapid responses to violations and instant player removal. It also includes a comprehensive RCon interface, giving admins precise server management tools.`,
  },
  {
    title: 'Customization',
    desc: `BattlEye offers tailored solutions for each game, including highly effective script detection, as seen in the ArmA series.`,
  },
  {
    title: 'Reliability',
    desc: `With a secure, self-sufficient architecture, BattlEye eliminates reliance on third-party network connections. Developers retain full control over updates, ensuring stability and preventing unexpected issues.`,
  },
]

export default function Features() {
  return (
    <>
      <div className="pb-8">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Features
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.brand} is the industry leader in anti-cheat services, combating hacking
            and cheating in multiplayer PC games through a powerful combination of advanced hybrid
            detection mechanisms.
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
