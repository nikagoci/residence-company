import Image from "next/image"

const Gallery = () => {
  return (
    <section className="py-8 bg-white border-b">
      <div className="container max-w-5xl m-8 mx-auto">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Gallery
        </h2>
        <div className="w-full mb-4">
          <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-col justify-center w-5/6 p-6 sm:w-1/2">
            <h3 className="mb-3 text-3xl font-bold leading-none text-gray-800">
                Exterior
            </h3>
            <p className="mb-8 leading-8 text-gray-600">
              Best exterior you've ever seen: pool, court, park, diverse nature and a lot more. All of that fun for free. Enjoy living outside with family or friends.

            </p>
          </div>
          <div className="w-full p-6 sm:w-1/2">
            <Image src='/images/exterior.webp' alt='exterier' className="w-full mx-auto rounded-full sm:h-64" width={460} height={255} />
          </div>
        </div>
        <div className="flex flex-col-reverse flex-wrap sm:flex-row">
          <div className="w-full p-6 mt-6 sm:w-1/2">
            <Image src='/images/interior.jpg' alt='interior' className="w-full mx-auto rounded-full sm:h-64" width={390} height={255} />
          </div>
          <div className="w-full p-6 mt-6 sm:w-1/2">
            <div className="flex flex-col justify-center h-full align-middle">
              <h3 className="mb-3 text-3xl font-bold leading-none text-gray-800">
                Interior
              </h3>
              <p className="mb-8 text-gray-600">
                The houses are big size over 80 square metres. Most of them have luxury design with newest furniture and electronic devices. The house is fully smart and can be controlled by remote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery