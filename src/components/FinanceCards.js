// FinanceCard.jsx
import React from 'react';
import logo from "../Images/bank3.png"

const FinanceCard = ({ financeCards }) => {

  return (
    <div className="flex flex-wrap -mx-4">
      {financeCards.map((card, index) => (
        <div key={index} className="w-1/2 px-4 mb-4">
          <div className='p-1 bg-white mb-4 rounded-sm'>
            <div key={index} className={`flex flex-col items-start p-4 shadow-md ${card.bgColor}`}>
              <div className='flex justify-between items-center'>
                <img src={logo} alt={`${card.bankName} logo`} className="h-12 w-12 mb-2 mr-4" />
                <h3 className="font-semibold">{card.bankName}</h3>
              </div>
              <div className="flex flex-wrap">
                {card.features.map((feature, idx) => (
                  <div key={idx} className={`flex items-center mr-2 md:mb-0 mb-2 px-3 py-2 rounded-sm ${feature.bgColor} ${feature.opacity && feature.opacity}`}>


                    <span className={`flex items-center justify-center h-4 w-4 mr-2 rounded-full ${feature.color}`}>
                      <svg className="w-3 h-3  text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>

                    <span className="text-sm text-[#1A1B1E]">{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 self-stretch flex justify-between items-center">
                <div className='text-[#1A1B1E]'>
                  <span className='opacity-[0.6]'>Interest Upto</span>
                  <p className="text-lg font-bold">{card.interestRate}</p>
                </div>
                <button className={` py-2 px-4 rounded text-white ${card.buttonColor} transition-colors`}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default FinanceCard;
