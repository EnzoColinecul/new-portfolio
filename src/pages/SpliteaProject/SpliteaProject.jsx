import { useEffect } from 'react';
import Cover from './sections/Cover';
import Problem from './sections/Problem';
import Product from './sections/Product';
import AddExpense from './sections/AddExpense';
import Architecture from './sections/Architecture';
import AIWorkflow from './sections/AIWorkflow';
import Roadmap from './sections/Roadmap';
import Closing from './sections/Closing';
import './splitea.css';

function SpliteaProject() {
  useEffect(() => {
    document.title = 'Splitea — Shared expenses, sorted';
  }, []);

  return (
    <main className="splitea">
      <Cover />
      <Problem />
      <Product />
      <AddExpense />
      <Architecture />
      <AIWorkflow />
      <Roadmap />
      <Closing />
    </main>
  );
}

export default SpliteaProject;
