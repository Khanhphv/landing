import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Support from '@/components/sections/support'
import About from '@/components/sections/about'
import Features from '@/components/sections/feaures'
import Brand from '@/components/sections/brand'
import FairPlay from '@/components/sections/fairplay'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div id="home">
        <Brand />
      </div>
      <FairPlay />
      <div id="features">
        <Features />
      </div>

      <div id="support">
        <Support />
      </div>
      <div id="about">
        <About />
      </div>
    </>
  )
}
