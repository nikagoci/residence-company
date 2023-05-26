import { OfficeBuildingIcon, MailIcon, PhoneIcon, GlobeAltIcon } from "@heroicons/react/outline"

const Contact = () => {
    return (
      <section id='contact' className="bg-white">
        
        <div className="px-4 py-16 mx-auto my-8 max-w-7xl sm:px-6 lg:py-24 lg:px-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Residence Descriprition
        </h2>
          <div className="mt-24 divide-y-2 divide-gray-200">
            
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Get in touch</h2>
              <div className="grid grid-cols-1 gap-12 mt-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Address</h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div className="flex gap-x-2">
                        <OfficeBuildingIcon className="w-6 h-auto" />
                      <dd>14 Fabritsius St, Kutaisi</dd>
                    </div>

                  </dl>
                </div>
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Phone Number</h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div className="flex gap-x-2">
                        <PhoneIcon className="w-6 h-auto" />
                      <dd>+(995) 577 150 051</dd>
                    </div>

                  </dl>
                </div>
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Email Address</h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div className="flex gap-x-2">
                        <MailIcon className="w-6 h-auto" />
                      <dd>turcvg@gmail.com</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Website</h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div className="flex gap-x-2">
                        <GlobeAltIcon className="w-6 h-auto" />
                      <dd>https://turcvg.com</dd>
                    </div>

                  </dl>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
  }
  
  export default Contact