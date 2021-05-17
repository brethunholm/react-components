import React, { useState } from 'react';
import Accordion from './components/Accordion';	import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';	import Search from './components/Search';


const items = [	const items = [
@@ -17,11 +18,32 @@ const items = [
  },	  },
];	];


const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A shade of blue',
    value: 'blue',
  },
];

export default function App() {	export default function App() {
  const [selected, setSelected] = useState(options[0]);
  return (}	}
 43  widgets/widgets/src/components/Dropdown.js 
@@ -0,0 +1,43 @@
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

export default function Dropdown({ options, selected, onSelectedChange }) {
  const [open, setOpen] = useState(false);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color </label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}
