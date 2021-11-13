import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SimpleDiv from '@fedeviotti/common/src/components/simple-div';

import './index.scss';

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <SimpleDiv />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
