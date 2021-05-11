/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search() {
  const [term, setTerm] = useState('kittens');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    search();
  }, [term]);

  const renderedResults = results.map((result) => (
    <div key={result.pageid} className="item">
      <div className="right loaded content">
        <a
          className="ui button"
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
        >
          Go
        </a>
      </div>
      <div className="content">
        <div className="header">{result.title}</div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
      </div>
    </div>
  ));
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
}
