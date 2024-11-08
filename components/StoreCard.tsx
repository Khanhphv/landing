import Image from './Image'
const StoreCard = ({ title = '', imgSrc, download }) => (
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
        <div className="flex justify-between p-2">
          <p>{title}</p>
          <div className="flex">
            <Image alt={title} src={'/download.webp'} width={16} height={16}></Image>
            {download}
          </div>
        </div>
        <div className="flex justify-between p-2">
          <div>Status</div>
          <div className="text-green-500">Working</div>
        </div>
        <button className="rounded-md bg-gray-700 p-2 text-white">Download</button>
      </>
    </div>
  </div>
)

export default StoreCard
