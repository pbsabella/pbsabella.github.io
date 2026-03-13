import { ReactNode } from 'react';
import { tokenize } from 'sugar-high';
import MockupFrame from '@/components/sections/MockupFrame';
import styles from './CodeBlock.module.css';

// Maps sugar-high token index to CSS module class name
// 0=identifier, 1=keyword, 2=string, 3=class/number, 4=property,
// 5=entity, 6=jsxliterals, 7=sign, 8=comment, 9=break, 10=space
const TYPE_CLASSES: Array<string | undefined> = [
  styles.identifier, // 0
  styles.keyword,    // 1
  styles.string,     // 2
  styles.cls,        // 3
  styles.property,   // 4
  styles.entity,     // 5
  styles.markup,     // 6
  styles.sign,       // 7
  styles.comment,    // 8
];

interface CodeBlockProps {
  code: string;
  label?: string;
}

const CodeBlock = ({ code, label }: CodeBlockProps) => {
  const tokens = tokenize(code);

  const header: ReactNode = label ? (
    <span className={styles.label}>{label}</span>
  ) : undefined;

  return (
    <MockupFrame variant="terminal" headerContent={header} className={styles.frame}>
      <pre className={styles.pre}>
        <code>
          {tokens.map(([type, value], i) => {
            const cls = TYPE_CLASSES[type];
            return cls ? (
              <span key={i} className={cls}>
                {value}
              </span>
            ) : (
              value
            );
          })}
        </code>
      </pre>
    </MockupFrame>
  );
};

export default CodeBlock;
