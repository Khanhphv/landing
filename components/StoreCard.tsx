import Image from './Image'
import Link from './Link'

const StoreCard = ({ title = '', description = '', imgSrc, href }) => (
  <div className="md max-w-[544px]  p-4 md:w-1/3">
    <div className={`${imgSrc}  flex flex-col overflow-hidden rounded-md  border-2`}>
      <>
        <Image
          alt={title}
          src={imgSrc}
          className="h-full w-full bg-transparent object-cover object-cover"
          width={250}
          height={250}
        />
        <div className="p-2">
          <p>{title}</p>
          <p>Starting at: ${description}</p>
        </div>
      </>
    </div>
  </div>
)

export default StoreCard
