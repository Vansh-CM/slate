import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';

export const Portal = ({ children }) => {
  const el = useMemo(() => document.createElement('div'), []);

  React.useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(children, el);
};