import ActionCard from './components/ActionCards';
import AnswerCards from './components/AnswerCards';
import FinanceCard from './components/FinanceCards';
import MaturityTimeline from './components/MaturityTimeline';
import Navbar from './components/Navbar';
import PortfolioSummary from './components/PortfolioSummary';
import WelcomeHeader from './components/WelcomeHeader';


function App() {
  const financeCardsData = [
    {
      bankName: 'Utkarsh Small Finance Bank',
      interestRate: '9.10% p.a',
      features: [
        { text: 'Highest Interest Rate', color: 'bg-purple-500' ,bgColor :'bg-[#EFDDFF]'},
        { text: 'RBI Insured', color: 'bg-purple-500',bgColor :'bg-[#EFDDFF]' }
      ],
      bgColor: 'bg-[#F8F0FF]',
      logo: "../Images/bank3.png", 
      buttonColor: 'bg-[#520B8D] hover:bg-[#520B8D]-700'
    },
    {
      bankName: 'Bajaj Finserv',
      interestRate: '8.80% p.a',
      features: [
        { text: 'Crisil AAA Rated', color: 'bg-[#0072BB]',bgColor :'bg-[#0072BB]', opacity:'bg-opacity-[0.1]' },
        { text: 'No Video KYC required', color:'bg-[#0072BB]',bgColor :'bg-[#0072BB]',opacity:'bg-opacity-[0.1]' }
      ],
      bgColor: 'bg-[#EFF6FF]',
      logo: '/assets/logos/bajaj-logo.png',
      buttonColor: 'bg-[#0072BB] hover:bg-[#0072BB]-700'
    },
    {
      bankName: 'Shriram Finance',
      interestRate: '8.80% p.a',
      features: [
        { text: 'Crisil AAA Rated', color: 'bg-[#1A1B1E]', bgColor :'bg-[#1A1B1E]', opacity:'bg-opacity-[0.1]' },
        { text: 'No Video KYC required', color: 'bg-[#1A1B1E]',bgColor :'bg-[#1A1B1E]', opacity:'bg-opacity-[0.1]' }
      ],
      bgColor: 'bg-[#F4F4F4]',
      logo: '/assets/logos/shriram-logo.png', 
      buttonColor: 'bg-[#010101] hover:bg-[#010101]-700'
    },
    {
      bankName: 'Mahindra Finance',
      interestRate: '8.80% p.a',
      features: [
        { text: 'Crisil AAA Rated', color: 'bg-[#FF0000]', bgColor :'bg-[#FF0000]', opacity:'bg-opacity-[0.1]' },
        { text: 'No Video KYC required', color: 'bg-[#FF0000]', bgColor :'bg-[#FF0000]', opacity:'bg-opacity-[0.1]' }
      ],
      bgColor: 'bg-[#FFEFEF]',
      logo: '/assets/logos/mahindra-logo.png', 
      buttonColor: 'bg-[#FF0000] hover:bg-[#FF0000]-700'
    }
   
  ];
  
  const actionCardsData = [
    {
      title: 'Video KYC',
      details: {
        status:"Scheduled On",
        dateNo:"28",
        date: 'Oct, 2023',
        planName: 'Utkarsh SF Bank FD Plan 2',
        depositAmt: 'Rs. 20,000',
        tenure: '2 Years',
        interestRate: '9.10%'
      },
      buttonLabel1: 'Complete Now',
      buttonLabel2: 'Reschedule',
    },
    {
      title: 'Pending Payment',
      details: {
        status:"Pay On",
        dateNo:"30",
        date: 'Oct, 2023',
        planName: 'Bajaj Finserv Corp FD 1',
        depositAmt: 'Rs. 25,000',
        tenure: '18 Months',
        interestRate: '8.10%'
      },
      buttonLabel1: 'Pay Now',
      buttonLabel2: 'Cancel Application',
    
    },
    {
      title: 'Upcoming FD Maturity',
      details: {
        status:"Renew On",
        dateNo:"30",
        date: 'Oct, 2023',
        planName: 'Bajaj Finserv Corp FD 1',
        depositAmt: 'Rs. 25,000',
        tenure: '18 Months',
        interestRate: '8.10%'
      },
      buttonLabel1: 'Renew Now',
      buttonLabel2: 'Compare other FDs',
    }
  ];
  

  return (
    <>   
<Navbar/>
<div className="container mx-auto">
<WelcomeHeader/>
<div className="flex flex-col md:flex-row -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <PortfolioSummary />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <MaturityTimeline />
        </div>
 </div>
 
 <div className="flex flex-wrap -mx-2 my-8">
      <div className="w-full md:w-2/3 px-2">
        <FinanceCard financeCards={financeCardsData} />
        <AnswerCards/>
      </div>
      <div className="w-full md:w-1/3 px-2">
        <ActionCard actionCards={actionCardsData} />
      </div>
    </div>
    </div>
</>
  );
}

export default App;
