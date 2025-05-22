import React, { useState } from 'react';

export default function LoanCalculator() {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    // 예시: 간단한 이자 계산 (연 5%, 단리)
    const principal = parseFloat(amount);
    const years = parseFloat(term);
    if (isNaN(principal) || isNaN(years) || principal <= 0 || years <= 0) {
      alert('Please enter valid numbers for amount and term.');
      return;
    }
    const interest = principal * 0.05 * years;
    const total = principal + interest;
    setResult({ interest, total });
  };

  return (
    <section id="calculator" className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md mt-10">
      <h2 className="text-xl font-semibold mb-4">Loan Calculator</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="number"
          placeholder="Loan Amount (₩)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded p-2 flex-1"
        />
        <input
          type="number"
          placeholder="Term (years)"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="border rounded p-2 flex-1"
        />
        <button
          onClick={calculate}
          className="bg-blue-700 text-white rounded px-4 py-2 hover:bg-blue-800"
        >
          Calculate
        </button>
      </div>
      {result && (
        <div className="mt-4 text-gray-700">
          <p>Interest: ₩{result.interest.toLocaleString()}</p>
          <p>Total to pay: ₩{result.total.toLocaleString()}</p>
        </div>
      )}
    </section>
  );
}
