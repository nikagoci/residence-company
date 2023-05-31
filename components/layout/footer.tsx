import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-10 footer footer-center bg-[#f8f8f8] text-lg">
      <div>
        <p>{t("footer.title")}</p>
      </div>
    </footer>
  );
};

export default Footer;
