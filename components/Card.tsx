import Image from './Image'
import Link from './Link'

const Card = ({ title = '', description = '', imgSrc, href }) => (
  <div className="md max-w-[544px] p-4 md:w-1/3">
    <div className={`${imgSrc && 'h-full'}  overflow-hidden rounded-md `}>
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="h-full w-full object-cover object-center"
              width={250}
              height={250}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="h-full w-full bg-transparent object-cover object-cover"
            width={250}
            height={250}
          />
        ))}
    </div>
  </div>
)

export default Card
