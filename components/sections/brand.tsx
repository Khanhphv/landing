'use client'
import siteMetadata from '@/data/siteMetadata'
import Lottie from 'lottie-web'
import { useEffect, useState } from 'react'
const data = [
  {
    title: 'Protection',
    desc: `BattlEye offers proactive, kernel-level protection combined with rapid dynamic and permanent scanning of players' systems, utilizing both specific and heuristic detection methods for maximum efficiency.`,
  },
]
export default function Brand() {
  const [isloaded, setisloaded] = useState(false)

  useEffect(() => {
    setisloaded(true)
  }, [])
  useEffect(() => {
    console.log('loading lottie')
    const element = document.getElementById('lottie')
    isloaded &&
      element &&
      Lottie.loadAnimation({
        container: element, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json',
      })
  }, [isloaded])

  return (
    <>
      <div className="">
        <div className="flex flex-row items-center space-y-2 pb-8 pt-6 max-sm:flex-col md:space-y-5">
          {isloaded && <div id="lottie"></div>}

          {/* <iframe src="https://lottie.host/embed/219d89e9-4c76-4fbe-b642-35b2768fddcc/qu4VCek3BM.json"></iframe>
           */}
          {/* <Image src="/logo.svg" width={400} height={400} alt="logo" /> */}
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
