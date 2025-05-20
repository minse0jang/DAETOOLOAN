// src/App.js
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 헤더 */}
      <header className="bg-blue-700 text-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">대한투자대부</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:underline">회사소개</a></li>
              <li><a href="#products" className="hover:underline">대출상품</a></li>
              <li><a href="#contact" className="hover:underline">상담문의</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="flex-grow max-w-6xl mx-auto p-6">
        {/* 회사소개 */}
        <section id="about" className="mb-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">신뢰와 정직의 대부업체, 대한투자대부</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            대전 지역에서 오랜 경험과 신뢰를 쌓아온 대한투자대부는 고객님의 금융 고민을 해결해 드립니다.
            빠르고 간편한 상담과 다양한 맞춤형 대출 상품을 제공합니다.
          </p>
        </section>

        {/* 대출상품 */}
        <section id="products" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">대출 상품 안내</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">개인 대출</h3>
              <p className="text-gray-700 mb-4">
                쉽고 빠르게 필요한 자금을 마련하세요. 합리적인 금리와 편리한 상환 조건을 제공합니다.
              </p>
              <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">
                상담 신청하기
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">사업자 대출</h3>
              <p className="text-gray-700 mb-4">
                사업 성장을 위한 맞춤형 대출 상품. 신속한 승인과 유연한 상환 플랜을 제공합니다.
              </p>
              <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">
                상담 신청하기
              </button>
            </div>
          </div>
        </section>

        {/* 상담 문의 */}
        <section id="contact" className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">상담 문의</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">이름</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-medium mb-1">연락처</label>
              <input
                type="tel"
                id="phone"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="전화번호를 입력하세요"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-1">문의 내용</label>
              <textarea
                id="message"
                rows="4"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="문의 내용을 입력하세요"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded font-semibold hover:bg-blue-800"
            >
              상담 신청하기
            </button>
          </form>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-blue-700 text-white text-center py-4">
        <p>© 2025 대한투자대부. 대전광역시 서구 둔산북로 121, 아너스빌오피스텔 205호</p>
        <p>문의 전화: 042-123-4567</p>
      </footer>
    </div>
  );
}

export default App;
