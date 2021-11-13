import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SimpleDiv, SimpleText } from '@fedeviotti/common';

import './index.scss';

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <SimpleDiv />
    <SimpleText name="Federico">My name is</SimpleText>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
