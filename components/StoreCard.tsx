import Image from './Image'

const StoreCard = ({ title = '', description = '', imgSrc }) => (
  <div className="transform  p-4 ">
    <div
      className={`${imgSrc}  flex flex-col overflow-hidden rounded-md  border-2 hover:scale-105 hover:bg-slate-900`}
    >
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
