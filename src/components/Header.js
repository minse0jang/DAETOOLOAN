import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      {/* 최상단 바: 대전-589(대부업), 영업시간, 상담 가능 */}
      <div className="flex justify-between items-center text-xs text-gray-600 px-6 py-1 border-b border-gray-200">
        <div>대전-589(대부업)</div>
        <div>영업시간 09:00 ~ 18:00 | 상담 가능</div>
      </div>

      {/* 메인 헤더: 로고, 네비게이션, 전화번호 */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* 로고 */}
        <div className="font-bold text-3xl text-blue-700 select-none cursor-default">
          대한투자대부
        </div>

        {/* 네비게이션 메뉴 */}
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="/status" className="hover:text-blue-700 transition">대출현황</a>
          <a href="/products" className="hover:text-blue-700 transition">대출상품</a>
          <a href="/process" className="hover:text-blue-700 transition">진행절차</a>
          <a href="/apply" className="hover:text-blue-700 transition">대출신청</a>
        </nav>

        {/* 전화번호 영역 */}
        <div className="flex items-center space-x-2 text-gray-700 font-semibold">
          {/* 심플 전화기 아이콘 (SVG 직접 넣음) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5h2l3.6 7.59-1.35 2.44a1 1 0 001.45 1.37L13 13l3.4 3.4a1 1 0 001.45-1.37l-1.35-2.44L19 5h2"
            />
          </svg>
          <span>042-487-8838</span>
        </div>
      </div>
    </header>
  );
}
