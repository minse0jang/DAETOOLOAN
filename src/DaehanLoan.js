import React, { useState, useEffect } from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import callIcon from "./images/call.jpg";
import icon1 from "./images/icon1.jpg";
import icon2 from "./images/icon2.jpg";
import icon3 from "./images/icon3.jpg";
import icon4 from "./images/icon4.jpg";
import logo from "./images/logo.jpg";

export default function DaehanLoan() {
  const slides = [
    {
      title: "개인사업자 대출",
      description: "당일 대출로 꿈을 현실로\n빠른 심사로 자금 확보",
      details: [
        ["신청 대상", "사업자 등록 / 1개월 이상"],
        ["대출 한도", "100만 ~ 2억원"],
        ["대출 금리", "5.22% ~ 20%"],
        ["상환 기간", "1개월 ~ 60개월"],
      ],
      image: img1,
    },
    {
      title: "자영업자 대출",
      description: "영세 자영업자도 OK!\n월 납부 부담 최소화",
      details: [
        ["신청 대상", "3개월 이상인 개인사업자"],
        ["대출 한도", "100만 ~ 3억원"],
        ["대출 금리", "5.22% ~ 20%"],
        ["상환 기간", "1개월 ~ 60개월"],
      ],
      image: img2,
    },
    {
      title: "기업단기대출",
      description: "급전 30분 컷!\n월말 급여대금 해결책",
      details: [
        ["신청 대상", "12개월 이상인 법인사업자"],
        ["대출 한도", "1,000만 ~ 10억원"],
        ["대출 금리", "5.22% ~ 20%"],
        ["상환 기간", "1개월 ~ 60개월"],
      ],
      image: img3,
    },
    {
      title: "법인사업자 대출",
      description: "법인 신용도 100% 반영\n고액 대출 한도 특화",
      details: [
        ["신청 대상", "법인 설립 / 1개월 이상"],
        ["대출 한도", "300만 ~ 10억원"],
        ["대출 금리", "5.22% ~ 20%"],
        ["상환 기간", "1개월 ~ 60개월"],
      ],
      image: img4,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      {/* 상단 헤더 */}
      <header className="bg-[#001a4d] text-white px-6 py-0 flex flex-col z-20 fixed top-0 left-0 w-full shadow-md">
        <div className="flex justify-between items-center text-xs mb-1">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="로고" className="w-12 h-12 object-contain" />
            <span className="font-bold text-4xl">대한투자대부</span>
          </div>
          <div className="flex items-center space-x-1 text-yellow-300">
            <span>평일 9:00 - 18:00 상담 가능</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span>대전-589(대부업)</span>
          <div className="flex items-center space-x-2">
            <img
              src={callIcon}
              alt="전화 아이콘"
              className="w-4 h-4 object-cover"
            />
            <span>042-487-8838</span>
          </div>
        </div>
        <nav className="mt-0">
          <ul className="flex justify-center space-x-12 text-xl font-semibold">
            <li>
              <button className="hover:underline">대출현황</button>
            </li>
            <li>
              <button className="hover:underline">대출상품</button>
            </li>
            <li>
              <button className="hover:underline">진행절차</button>
            </li>
            <li>
              <button className="hover:underline">대출신청</button>
            </li>
          </ul>
        </nav>
      </header>

      <div className="mt-20">{/* 헤더 높이 조정용 */}</div>

      {/* 슬라이더 */}
      <section className="relative w-screen rounded overflow-hidden shadow-lg h-[520px] mt-[15px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000`}
            style={{
              backgroundImage: `url(${slide.image})`,
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 10 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center z-30">
          <div className="max-w-5xl w-full">
            <h2 className="text-3xl font-semibold mb-4">{slides[currentSlide].title}</h2>
            <p className="text-lg whitespace-pre-line mb-6">{slides[currentSlide].description}</p>
            <div className="grid grid-cols-4 border-t border-b border-gray-300 divide-x divide-gray-300 w-full text-sm bg-white bg-opacity-30 rounded-md mb-6">
              {slides[currentSlide].details.map(([label, value], idx) => (
                <div key={idx} className="py-2">
                  <p className="text-gray-200">{label}</p>
                  <p className="font-bold text-lg">{value}</p>
                </div>
              ))}
            </div>
            <form className="flex justify-center space-x-5 items-center bg-white bg-opacity-50 rounded-md p-8 max-w-xl mx-auto">
              <input
                type="text"
                placeholder="이름"
                className="rounded px-3 py-2 w-24 text-black"
                required
              />
              <input
                type="tel"
                placeholder="연락처"
                className="rounded px-3 py-2 w-32 text-black"
                required
              />
              <input
                type="number"
                placeholder="신청금액"
                className="rounded px-3 py-2 w-28 text-black"
                required
              />
              <button
                type="submit"
                className="bg-[#001a4d] text-white px-6 py-2 rounded hover:bg-[#003366] whitespace-nowrap"
              >
                빠른 상담 신청
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WHY US 섹션 */}
      <section className="bg-[#001a4d] text-yellow-300 py-16 px-6 text-center">
        <h2 className="text-4xl mb-6 font-semibold">WHY US</h2>
        <h3 className="text-5xl font-bold mb-4">대한투자대부는</h3>
        <p className="max-w-3xl mx-auto whitespace-pre-line leading-relaxed text-2xl">
          오랜 경력의 은행 대출 전문 인력들이 모여 그동안의 축적된 경험과 노하우를 통하여
          합리적인 대출상품에 대한 안내와 시간적인 여유가 없는 현대인들을 위한 빠른상담 및 당일대출,
          차별화된 한 차원 높은 서비스를 제공합니다
        </p>
      </section>

      {/* 확실하고 빠른 프로세스 섹션 */}
      <section className="bg-[#001a4d] text-yellow-300 py-16 px-6 text-left">
        <h2 className="text-4xl font-semibold mb-8">확실하고 빠른 프로세스</h2>
        <div className="space-y-12">
          <div className="flex items-start space-x-4">
            <img
              src={icon1}
              alt="대출 문의 아이콘"
              className="w-16 h-16 bg-yellow-300 rounded-full"
            />
            <div>
              <h3 className="text-3xl font-bold mb-4">대출 문의</h3>
              <p className="text-xl leading-relaxed">
                대출 전문가가 귀하의 신용등급, 소득 조건을 분석해 최적의 상품을 제안합니다.
                상담 내용은 철저히 비공개로 관리됩니다.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <img
              src={icon2}
              alt="감정 평가 아이콘"
              className="w-20 h-20 bg-yellow-300 rounded-full"
            />
            <div>
              <h3 className="text-3xl font-bold mb-4">감정 평가</h3>
              <p className="text-xl leading-relaxed">
                타 금융사 조회 없이 내부 심사만으로 진행되어 신용 점수에 영향을 주지 않습니다.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <img
              src={icon3}
              alt="약정서 작성 아이콘"
              className="w-20 h-20 bg-yellow-300 rounded-full"
            />
            <div>
              <h3 className="text-3xl font-bold mb-4">약정서 작성</h3>
              <p className="text-xl leading-relaxed">
                계약서 및 근저당 설정 또한 법무사 입회화에 진행됩니다.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <img
              src={icon4}
              alt="승인 즉시 당일 입금 보장 아이콘"
              className="w-20 h-20 bg-yellow-300 rounded-full"
            />
            <div>
              <h3 className="text-3xl font-bold mb-4">승인 즉시 당일 입금 보장</h3>
              <p className="text-xl leading-relaxed">
                오후 5시 이전 승인 시 당일 입금이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 스크롤 탑 버튼 */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-[#001a4d] text-white p-4 rounded-full shadow-lg hover:bg-[#003366] focus:outline-none"
      >
        ⬆
      </button>
      {/* Footer */}
  <footer className="bg-[#001a4d] text-white py-10 px-6 flex justify-between items-start text-xl">
    <div className="space-y-5">
      <p>(주)대한투자대부</p>
      <p>대전-589(대부업)</p>
      <p>대표전화: 042) 487.8838</p>
      <p>광고번호: 010-8451-8837</p>
      <p>대표 이사: 장우영</p>
    </div>
    <div className="space-y-2 text-right text-lg">
      <p>
      ·대출금리 연 20%이내 (연체금리는 약정금리+3%p이내, 최대 연 20%이내) 
      </p>
      <p>
      단,2021.07.07부터 체결, 갱신, 연장되는 계약에 한함.
      </p>
      <p>
        신용조회비용 및 채무증명서 발급비용 외 담보대출에 따라 
      </p>
      <p>
        저당설정•해지비용과 부동산 담보대출의 중도상환 수수료가 발생할 수 있음.
      </p>
      <p>
        부동산 담보대출의 경우 상환 원금의 3%이내로 부과. 
      </p>
      <p>
        단, 이용기간에 따라 상이하며 기납입 이자와 중도상환수수료를 합한
      </p>
      <p>
        금액이 연 20%를 초과하지않음.
      </p>
      <p>중개수수료를 요구하거나 받는 것은 불법입니다.</p>
      <p>과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다.</p>
      <p>
        대출 시 신용등급 또는 개인신용평점 하락으로 다른 금융거래가
        제약받을 수 있습니다.
      </p>
    </div>
  </footer>
  {/* 옅은 가로 실선 */}
  <hr className="border-t border-gray-400 w-full" />

  {/* 저작권 문구 */}
  <p className="text-center text-gray-400 py-4 text-sm bg-[#001a4d]">
    Copyrightⓒ2025 대한투자대부. All Right Reserved.
  </p>
 </div>
    
  );
}
