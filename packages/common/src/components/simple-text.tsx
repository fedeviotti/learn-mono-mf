import * as React from 'react';

interface SimpleTextProps {
  name: string;
  children: React.ReactNode;
}

const SimpleText: React.FC<SimpleTextProps> = ({ name, children }) => {
  return (
    <div>
      {children} {name}
    </div>
  );
};

export { SimpleText };
