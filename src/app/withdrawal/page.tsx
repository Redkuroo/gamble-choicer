'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaHistory, FaWallet, FaBitcoin, FaUniversity } from 'react-icons/fa';
import { IoPhonePortraitOutline } from "react-icons/io5";

const WithdrawalPage = () => {
  const [activeTab, setActiveTab] = useState('E wallet');

  const tabs = [
    { name: 'E wallet', icon: <FaWallet /> },
    { name: 'Crypto Wallet', icon: <FaBitcoin /> },
    { name: 'Bank Account', icon: <FaUniversity /> },
  ];

  return (
    <div className="min-h-screen bg-[#18180f] text-white flex flex-col">
      {/* Header */}
      <header className="bg-[#23232a] p-4 flex items-center justify-between sticky top-0 z-10">
        <Link href="/" className="text-xl">
            <FaArrowLeft />
        </Link>
        <h1 className="text-xl font-semibold">Withdrawal</h1>
        <button className="text-xl">
          <FaHistory />
        </button>
      </header>

      {/* Tabs */}
      <nav className="bg-[#23232a] flex">
        {tabs.map(tab => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex-1 flex items-center justify-center p-4 text-sm font-medium border-b-2 transition ${
              activeTab === tab.name
                ? 'border-red-500 text-red-500'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <span className="mr-2 text-lg">{tab.icon}</span>
            {tab.name}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 relative">
        <div className="w-full max-w-md mx-auto">
          <p className="text-gray-400 mb-4">Bound E wallet (0/5)</p>
          
          <div className="bg-[#2a2a32] rounded-lg p-8 flex flex-col items-center justify-center mb-6 text-center">
            <IoPhonePortraitOutline className="text-7xl text-gray-500 mb-4" />
            <p className="text-gray-500">Empty E-Wallet</p>
          </div>

          <div className="absolute right-6 -mt-12">
            <button className="bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-lg">
                +
            </button>
          </div>

          <div className="text-sm text-gray-400 space-y-2 mb-6">
            <p>Withdrawal time: 24 hours</p>
            <p>Daily withdrawal 10 (Times), Remaining withdrawal 10 (Times)</p>
            <p>Main Wallet : ₱ 12.19</p>
            <p>Available Amount : ₱ 12.19</p>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 mb-6">
            Recall Balance
          </button>

          <div>
            <label className="text-sm font-medium text-gray-300 mb-2 block">Withdrawal Amount:</label>
            <input 
              type="text" 
              className="w-full bg-[#1a1a1f] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 mb-4"
              placeholder="Amount 300 ~ 50,000"
            />
            <input 
              type="password" 
              className="w-full bg-[#1a1a1f] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="Transaction Password"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default WithdrawalPage; 