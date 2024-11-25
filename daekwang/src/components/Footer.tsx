import whiteLogoSvg from "public/dk-border-white.svg";

const Footer = () => {
  return (
    <div className="min-w-full h-[10rem] bg-primary text-white flex justify-between items-center px-8">
      {/* 로고 */}
      <div className="flex items-center gap-2">
        <whiteLogoSvg className="flex-shrink-0 bg-primary w-10 h-10" />
        <span className="font-bold text-lg">대광PC</span>
        <span>DaeKwang Precast Concrete Installation</span>
      </div>
      {/* 이메일 */}
      <div>
        <span className="text-sm">e-mail: </span>
        <a
          href="mailto:pyw4733@hanmail.net"
          className="underline text-sm hover:text-gray-200"
        >
          pyw4733@hanmail.net
        </a>
      </div>
    </div>
  );
};

export default Footer;
