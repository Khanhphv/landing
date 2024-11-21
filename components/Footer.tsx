import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center  bg-blue-600 ">
        <div className="mb-3 flex space-x-4">
          {/* <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} /> */}
          {/* <SocialIcon kind="github" href={siteMetadata.github} size={6} /> */}
          {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} /> */}
          {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} /> */}
          {/* <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} /> */}
          {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} /> */}
          {/* <SocialIcon kind="x" href={siteMetadata.x} size={6} /> */}
          <SocialIcon kind="discord" href={siteMetadata.discord} size={6} />
          {/* <SocialIcon kind="telegram" href={siteMetadata.x} size={6} /> */}
          {/* <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} /> */}
          {/* <SocialIcon kind="threads" href={siteMetadata.threads} size={6} /> */}
        </div>
        <div className="mb-2 flex space-x-2 px-5 text-sm text-white dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-white">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            {siteMetadata.description}
          </Link>
        </div>
      </div>
    </footer>
  )
}
