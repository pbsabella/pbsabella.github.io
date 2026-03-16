import { Fragment, ReactNode } from 'react';
import { Highlight } from 'prism-react-renderer';
import MockupFrame from '@/components/sections/MockupFrame';
import styles from './CodeBlock.module.css';

// Maps Prism CSS token type strings to CSS module class names
const TOKEN_CLASS_MAP: Record<string, string> = {
  comment: styles.codeBlockComment,
  keyword: styles.codeBlockKeyword,
  atrule: styles.codeBlockKeyword,    // @layer, @media, @supports
  rule: styles.codeBlockKeyword,
  important: styles.codeBlockKeyword,
  string: styles.codeBlockString,
  number: styles.codeBlockCls,
  unit: styles.codeBlockCls,
  property: styles.codeBlockProperty,   // background-color, color, etc.
  variable: styles.codeBlockProperty,   // --brand-primary, --sem-color-*
  function: styles.codeBlockEntity,     // var(), oklch(), calc()
  selector: styles.codeBlockMarkup,
  punctuation: styles.codeBlockSign,
  operator: styles.codeBlockSign,
};

function getTokenClass(types: string[]): string | undefined {
  for (const t of types) {
    if (TOKEN_CLASS_MAP[t]) return TOKEN_CLASS_MAP[t];
  }
  return undefined;
}

interface CodeBlockProps {
  code: string;
  label?: string;
  language?: string;
}

const CodeBlock = ({ code, label, language = 'css' }: CodeBlockProps) => {
  const header: ReactNode = label ? (
    <span className={styles.codeBlockLabel}>{label}</span>
  ) : undefined;

  return (
    <MockupFrame variant="terminal" headerContent={header} className={styles.codeBlockFrame}>
      <pre
        className={styles.codeBlockPre}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        role="region"
        aria-label={label ?? 'Code block'}
      >
        <Highlight code={code} language={language} theme={undefined}>
          {({ tokens }) => (
            <code>
              {tokens.map((line, li) => (
                <Fragment key={li}>
                  {line.map((token, ti) => {
                    const cls = getTokenClass(token.types);
                    return cls ? (
                      <span key={ti} className={cls}>{token.content}</span>
                    ) : (
                      <span key={ti}>{token.content}</span>
                    );
                  })}
                  {li < tokens.length - 1 && '\n'}
                </Fragment>
              ))}
            </code>
          )}
        </Highlight>
      </pre>
    </MockupFrame >
  );
};

export default CodeBlock;
