import React from 'react';
import { Font } from 'three';

interface TextProps {
  text: string;
};

const Text: React.FC<TextProps> = props => {
  const { text } = props;
  return (
    <mesh>
      {/* <textGeometry
        args={[text, {
          font: new Font()
        }]}
      /> */}
    </mesh>
  );
};