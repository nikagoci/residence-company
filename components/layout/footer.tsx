const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 footer footer-center bg-[#f8f8f8] text-base-content">
      <div>
        <p>
          Copyright © {currentYear} - All right reserved by TURCVG Industries Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
