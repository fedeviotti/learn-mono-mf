import * as React from 'react';

interface SimpleTextProps {
  info: { name: string };
  children: React.ReactNode;
}

const SimpleText: React.FC<SimpleTextProps> = ({ info, children }) => {
  return (
    <div>
      {children} {info.name}
    </div>
  );
};

export { SimpleText };
