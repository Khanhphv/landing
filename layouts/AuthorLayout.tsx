import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, discord, telegram } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start  pb-8">
          <div className="flex flex-col space-x-2 pt-8">
            {/* <Image
              src={'/logo.svg'}
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            /> */}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.title}
            </h3>
            <p>{siteMetadata.description}</p>

            <div className="flex space-x-3 py-2">
              <SocialIcon kind="discord" href={discord} />
              <SocialIcon kind="telegram" href={telegram} />
            </div>
          </div>
          Copyright © 2004-2024 by {siteMetadata.title} Innovations. All rights reserved.
        </div>
      </div>
    </>
  )
}
