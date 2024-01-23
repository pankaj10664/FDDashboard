import ActionCard from './components/ActionCards';
import AnswerCards from './components/AnswerCards';
import FinanceCard from './components/FinanceCards';
import MaturityTimeline from './components/MaturityTimeline';
import Navbar from './components/Navbar';
import PortfolioSummary from './components/PortfolioSummary';
import WelcomeHeader from './components/WelcomeHeader';
import { actionCardsData, financeCardsData } from './components/util';


function App() {

  return (
    <>
      <Navbar />
      <div className="container mx-auto md:px-0 px-[15px]">
        <WelcomeHeader />
        <div className="flex flex-col md:flex-row -mx-2">
          <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
            <PortfolioSummary />
          </div>
          <div className="w-full md:w-2/3 px-4">
            <MaturityTimeline />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 my-8">
          <div className="w-full md:w-2/3 px-2">
            <FinanceCard financeCards={financeCardsData} />
            <AnswerCards />
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
