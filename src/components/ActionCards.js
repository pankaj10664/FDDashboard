import React from 'react';

const ActionCard = ({ actionCards }) => {
  return (
    <>
      {actionCards.map((card, index) => (
        <div key={index} className="bg-white p-6 mb-1 rounded-lg shadow-md flex flex-col">
          <h3 className="font-semibold mb-2">{card.title}</h3>
         
          <div className="my-2 justify-between flex items-start text-[#1A1B1E] opacity-[60]">
            <div>
            <div className="text-sm text-gray-500">{card.details.status}</div>
            <div className='text-3xl mt-3 text-center bg-[#1A1B1E] bg-opacity-5 px-[18px] py-2 font-bold'>{card.details.dateNo}</div>
            <div className="text-[12px] px-2 py-1 bg-[#CE5151] text-white font-normal">{card.details.date}</div>
            </div>
            <div className="flex flex-col ml-3">
            <div className="font-medium">{card.details.planName}</div>
            <div className='flex justify-between'>
            <div className="mr-2">
            <div className="text-sm text-gray-500">Deposit Amount</div>
            <div className="font-medium">{card.details.depositAmt}</div>
          </div>
          <div className="mr-2">
            <div className="text-sm text-gray-500">Tenure</div>
            <div className="font-medium">{card.details.tenure}</div>
          </div>
          <div className="">
            <div className="text-sm text-gray-500">Interest Rate</div>
            <div className="font-medium">{card.details.interestRate}</div>
          </div>
            </div>
          </div>
          </div>
        
          <div className='flex justify-between'>
          <button className='bg-[#3B39D9] mt-2 py-2 px-4  max-w-[40%] rounded text-white transition duration-300 ease-in-out'>
            {card.buttonLabel1}
          </button>
          <button className='border border-indigo-600 mt-2 py-2 px-4 max-w-[%] rounded text-[#3B39D9] transition duration-300 ease-in-out'>
            {card.buttonLabel2}
          </button>
          </div>
         
        </div>
      ))}
    </>
  );
};

export default ActionCard;
