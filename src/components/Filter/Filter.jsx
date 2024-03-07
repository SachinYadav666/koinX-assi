import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import style from './Filter.module.css';

const Filter = ({coindata}) => {
  const [activeFilter, setActiveFilter] = useState('Overview');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <div className={style.filters}>
        <ul className={style.filterLinks}>
          <li
            className={`${style.filterLink} ${activeFilter === 'Overview' ? style.active : ''}`}
            onClick={() => handleFilterClick('Overview')}
          >
            Overview
          </li>
          <li
            className={`${style.filterLink} ${activeFilter === 'Fundamentals' ? style.active : ''}`}
            onClick={() => handleFilterClick('Fundamentals')}
          >
            Fundamentals
          </li>
          <li
            className={`${style.filterLink} ${activeFilter === 'News Insights' ? style.active : ''}`}
            onClick={() => handleFilterClick('News Insights')}
          >
            News Insights
          </li>
          <li
            className={`${style.filterLink} ${activeFilter === 'Sentiments' ? style.active : ''}`}
            onClick={() => handleFilterClick('Sentiments')}
          >
            Sentiments
          </li>
          <li
            className={`${style.filterLink} ${activeFilter === 'Team' ? style.active : ''}`}
            onClick={() => handleFilterClick('Team')}
          >
            Team
          </li>
          <li
            className={`${style.filterLink} ${activeFilter === 'Technicals' ? style.active : ''}`}
            onClick={() => handleFilterClick('Technicals')}
          >
            Technicals
          </li>
          <li
            className={`${style.filterLink} ${activeFilter === 'Tokenomics' ? style.active : ''}`}
            onClick={() => handleFilterClick('Tokenomics')}
          >
            Tokenomics
          </li>
        </ul>
      </div>

      
      {(activeFilter === 'Overview' || activeFilter === 'All') && (
        <>
          <Cards performance={true} coindata={coindata}/>
          <Cards sentiment={true} />
          <Cards about={true} />
          <Cards tokonomics={true} />
          <Cards team={true} />
        </>
      )}
      {activeFilter === 'Fundamentals' && <Cards performance={true} coindata={coindata}/>}
      {activeFilter === 'News Insights' && <Cards about={true} />}
      {activeFilter === 'Sentiments' && <Cards sentiment={true}/> }
      {activeFilter === 'Team' && <Cards team={true} />}
      {activeFilter === 'Technicals' && <Cards performance={true} />}
      {activeFilter === 'Tokenomics' && <Cards tokonomics={true} />}
    </div>
  );
};

export default Filter;
