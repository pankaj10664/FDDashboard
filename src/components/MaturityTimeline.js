import React from 'react';

const MaturityTimeline = () => {


  return (
    <div className="bg-white p-4 rounded-lg shadow-md relative">
      <h2 className="font-bold text-xl mb-4">FD Maturity Timeline</h2>

      <div class="flex items-center mb-4">
        <span class="text-sm font-medium text-gray-700  w-[33%] text-center">2024</span>
        <span class="text-sm font-medium text-gray-700  w-[33%] text-center">2025</span>
        <span class="text-sm font-medium text-gray-700 w-[33%] text-center">2026</span>
      </div>
      <div class="flex items-center mb-4 overflow-scroll">
        <div class="text-sm font-medium text-gray-700 md:w-[33%] w-full bg-[#F8F0FF] text-center flex flex-col">
          <div className='flex'>
            {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((month, index) => (
              <div key={index} class="text-xs font-medium text-gray-500 border-l-2 px-[6px] border-white h-[280px]">{month}</div>
            ))
            }
          </div>

        </div>
        <div class="text-sm font-medium text-gray-700 md:w-[33%] w-full bg-[#B9C606] bg-opacity-5 text-center flex flex-col">
          <div className='flex'>
            {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((month, index) => (
              <div key={index} class="text-xs font-medium text-gray-500 border-l-2 px-[6px] border-white h-[280px]">{month}</div>
            ))
            }
          </div>

        </div>
        <div class="text-sm font-medium text-gray-700 md:w-[33%] w-full bg-[#FA9D17]  bg-opacity-5 text-center flex flex-col">
          <div className='flex'>
            {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((month, index) => (
              <div key={index} class="text-xs font-medium text-gray-500 border-l-2 px-[6px] border-white h-[280px]">{month}</div>
            ))
            }
          </div>

        </div> 
      </div>
      <div class="absolute left-[18px] top-1/3 w-[170px] text-sm h-6 bg-[#3B39D9] rounded-xl text-center text-white">Utkarsh FD 1</div>
      <div class="absolute left-[18px] top-[43%] text-sm w-[246px] md:w-[346px] h-6 bg-[#3B39D9] rounded-xl text-center text-white">Shriram FD Plan 2</div>
      <div class="absolute left-[50px] top-[53%] w-[250px] h-6 bg-[#3B39D9] text-sm rounded-xl text-center  text-white">Bajaj Finserv FD 1</div>
      <div class="absolute left-[80px] top-[63%] w-2/3 h-6 text-sm bg-[#3B39D9] rounded-xl text-center  text-white">Mahindra FD Plan 2</div>




    </div >
  );
};

export default MaturityTimeline;
