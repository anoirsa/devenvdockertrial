import React, { ClassAttributes, DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes, LegacyRef, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';

import Todos from './components/todo/Todos';

function App() {
  const [name, setName] = useState<string>('')
  const inputRef = useRef<HTMLElement>();
 // inputRef.current?.onFocus
  return (
    <>
      <p>Life is stange</p>
      <ul>
       
        <li data-testid="listmemeber" >Apple</li>
        <li data-testid="listmemeber">Banana</li>
        <li data-testid="listmemeber">Rose</li>
        <p title='sum'>{(5 + 2) as number}</p>
      </ul>
    </>
  );
}

export default App;
