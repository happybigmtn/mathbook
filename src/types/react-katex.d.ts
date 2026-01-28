declare module 'react-katex' {
  import { ReactNode } from 'react';
  
  interface InlineMathProps {
    math: string;
  }
  
  interface BlockMathProps {
    math: string;
  }
  
  export function InlineMath(props: InlineMathProps): ReactNode;
  export function BlockMath(props: BlockMathProps): ReactNode;
}
