import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'

const data = [
  {
    title: 'Protection',
    desc: `BattlEye offers proactive, kernel-level protection combined with rapid dynamic and permanent scanning of players' systems, utilizing both specific and heuristic detection methods for maximum efficiency.`,
  },
]
export default function Brand() {
  return (
    <>
      <div className="">
        <div className="flex flex-row items-center space-y-2 pb-8 pt-6 max-sm:flex-col md:space-y-5">
          <Image src="/logo.svg" width={400} height={400} alt="logo" />
          <div className="text-center">
            <p className="text-3xl font-extrabold">{siteMetadata.description}</p>
            <p className="text-gray-500">
              {siteMetadata.brand} is the industry leader in anti-cheat services, combating hacking
              and cheating in multiplayer PC games through a powerful combination of advanced hybrid
              detection mechanisms.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
