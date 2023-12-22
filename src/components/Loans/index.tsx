import style from './index.module.css';

import LoanCard from '@components/LoanCard';

import { loans } from '@/utils/constants';

const Loans = () => {
  return (
    <div className={style.loans}>
      {loans.map((item, index) => (
        <LoanCard key={index} {...item} id={item.id} />
      ))}
    </div>
  );
};

export default Loans;
