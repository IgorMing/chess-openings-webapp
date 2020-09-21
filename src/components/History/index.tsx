import React from 'react';
import Styled from './styles';

interface HistoryProps {
  data: Array<string>;
}

const History: React.FC<HistoryProps> = ({ data }) => {
  return (
    <Styled>
      <span>Histórico</span>
      <section className="list-inline">
        {data.map((each, index) => (
          <div key={index} className="list-inline--item">
            {index + 1}. {each}
          </div>
        ))}
      </section>
    </Styled>
  );
};

export default History;
