import WhiteLogo from "public/whiteLogo.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4 md:px-8">
        {/* 로고 및 회사 정보 */}
        <div className="flex items-center gap-4">
          <WhiteLogo className="flex-shrink-0 w-12 h-12" />
          <div>
            <h1 className="font-bold text-xl">대광PC</h1>
            <p className="text-sm">DaeKwang Precast Concrete Installation</p>
          </div>
        </div>

        {/* 이메일 */}
        <div className="text-center md:text-left">
          <p className="text-sm">
            <span className="font-medium">e-mail: </span>
            <a
              href="mailto:pyw4733@hanmail.net"
              className="underline hover:text-gray-200"
            >
              pyw4733@hanmail.net
            </a>
          </p>
        </div>

        {/* 주소 및 FAX */}
        <div className="text-center md:text-right text-sm">
          <p>
            <span className="font-medium">FAX:</span> 062-961-6408
          </p>
          <p>
            <span className="font-medium">주소:</span> 광주광역시 광산구 사암로
            340번길 30
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
