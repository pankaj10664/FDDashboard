import React from 'react'


const AnswerCards = () => {
    return (
        <>
            <h2 className='text-black my-5'>Get Answer</h2>
            <div className='flex justify-between items-center my-5'>
                <p>to all your questions</p>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8 mr-2 cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-70 opacity-50">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8 ml-2 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>

                </div>


            </div>
<div className='flex flex-wrap -mx-4'>
{[1, 2, 3].map((item, index) => (
    <div className='px-4'>
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md md:w-[260px] w-full px-4 mb-6 md:mb-0">
                        <h2 className='font-semibold text-xl mb-4'>How FDs are<br></br> taxed</h2>
                        <p className="mb-2 text-sm md:max-w-52 md:break-words">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    
                        <button className="rounded underline text-[#3B39D9]">
                            Read more....
                        </button>
                    </div>
                    </div>
                ))
            }
</div>
           
        </>


    )
}

export default AnswerCards