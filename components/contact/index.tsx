import {
  OfficeBuildingIcon,
  MailIcon,
  PhoneIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";

const Contact = () => {
  const { t } = useTranslation("common");

  return (
    <section id="contact" className="bg-white">
      <div className="px-4 py-12 mx-auto my-8 max-w-7xl sm:px-6 lg:py-24 lg:px-8">
        <div className="mt-24 divide-y-2 divide-gray-200">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="relative">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl before:content-[''] before:absolute before:-top-6 before:left-0 before:w-16 before:h-[2px] before:bg-primary">
                {t("home.contact.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-12 mt-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {t("home.contact.address")}
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div className="flex gap-x-2">
                    <OfficeBuildingIcon className="w-6 h-auto" />
                    <dd>14 Fabritsius St, Kutaisi</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {t("home.contact.phone")}
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div className="flex gap-x-2">
                    <PhoneIcon className="w-6 h-auto" />
                    <dd>+(995) 577 150 051</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {t("home.contact.email")}
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div className="flex gap-x-2">
                    <MailIcon className="w-6 h-auto" />
                    <dd>eliteresidence@gmail.com</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {t("home.contact.website")}
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div className="flex gap-x-2">
                    <GlobeAltIcon className="w-6 h-auto" />
                    <dd>https://eliteresidence.com</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
