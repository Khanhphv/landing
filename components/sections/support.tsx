import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import siteMetadata from '@/data/siteMetadata'

export default function Support() {
  return (
    <>
      <div className="">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Support
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Maintaining fun and fair gameplay is essential!
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Cheating has become a major issue in today's multiplayer games, threatening to disrupt
            entire communities. While various anti-cheat solutions exist, few effectively tackle the
            problem at its core.
          </p>
          <p className="font-bold text-gray-500 dark:text-gray-400">
            {siteMetadata.brand} is the gold standard in anti-cheat services because we relentlessly
            pursue and eliminate hacks, evolving constantly to make cheating increasingly difficult.
            Our dedication to protecting games is unwavering, with 24/7 support, 365 days a year.
            For us, anti-cheat isn’t just a business—it's a commitment. We maintain direct
            communication with you, the developer, keeping you informed about behind-the-scenes
            developments and seeking your feedback to enhance game security. Trust is at the core of
            everything we do. Most importantly, player satisfaction is our ultimate success metric.
            We believe an anti-cheat solution should focus on its mission—protecting games—without
            disrupting the player experience.
          </p>
        </div>
        {/* <div className="container py-12">
          <div className="-m-4 flex flex-wrap justify-center">
            {projectsData.map((d) => (
              <Card
                key={d?.title}
                title={d?.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div> */}
      </div>
    </>
  )
}
