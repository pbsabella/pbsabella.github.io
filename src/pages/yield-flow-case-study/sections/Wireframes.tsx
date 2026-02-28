import { useState } from 'react';
import { X } from 'lucide-react';
import styles from './Wireframes.module.css';

export const WizardInteractive = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [opacity, setOpacity] = useState(1);

  const goTo = (next: 1 | 2) => {
    setOpacity(0);
    setTimeout(() => {
      setStep(next);
      setOpacity(1);
    }, 130);
  };

  return (
    <div className={styles.modalContainer}>
      <header className={styles.header}>
        <div>
          <h2 className={styles.headerTitle}>Add investment wizard</h2>
          <p className={styles.caption}>Step {step} of 2</p>
          <div className={styles.stepDots}>
            <span className={`${styles.dot} ${step === 1 ? styles.dotActive : ''}`} />
            <span className={`${styles.dot} ${step === 2 ? styles.dotActive : ''}`} />
          </div>
        </div>
        <button type="button" className={styles.button}>
          <X aria-label="Cancel" size={12} />
        </button>
      </header>

      <div
        className={styles.mainContent}
        style={{ opacity, transition: 'opacity 0.13s ease' }}
      >
        {step === 1 ? (
          <div className={styles.formArea}>
            <div className={styles.inputPlaceholder}>Select / add bank combobox</div>
            <div>
              <p className={styles.label}>Bank products</p>
              <div className={styles.grid}>
                <div className={styles.productCard}>
                  <div className={styles.radioCircle} />
                  <div>
                    <span className={styles.label}>Savings</span>
                    <p className={styles.caption}>Standard account</p>
                  </div>
                </div>
                <div className={styles.productCard}>
                  <div className={styles.radioCircle} />
                  <div>
                    <span className={styles.label}>Time Deposit</span>
                    <p className={styles.caption}>Fixed term</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.formArea}>
            <div className={styles.inputPlaceholder}>Product snapshot</div>
            <div className={styles.inputPlaceholder}>Pre-filled input</div>
            <div className={styles.grid}>
              <div className={styles.inputPlaceholder}>4%</div>
              <div className={styles.inputPlaceholder}>6mo</div>
            </div>
            <div className={`${styles.inputPlaceholder} ${styles.inputPlaceholderLg}`} />
            <div className={styles.inputPlaceholder} />
          </div>
        )}
        <div className={styles.sidebar}>
          <span className={styles.previewLabel}>Preview</span>
          <div className={`${styles.inputPlaceholder} ${styles.inputPlaceholderLg}`} />
        </div>
      </div>

      <div className={styles.footer}>
        {step === 2 && (
          <button className={styles.button} onClick={() => goTo(1)}>
            ← Back
          </button>
        )}
        {step === 1 ? (
          <button className={styles.button} onClick={() => goTo(2)}>
            Next →
          </button>
        ) : (
          <button className={styles.button}>
            Add investment
          </button>
        )}
      </div>
    </div>
  );
};

export const UnifiedModal = () => {
  return (
    <div className={`${styles.modalContainer} ${styles.modalContainerLg}`}>
      <header className={styles.header}>
        <h2 className={styles.headerTitle}>Add investment modal</h2>
        <button type="button" className={styles.button}>
          <X aria-label="Cancel" size={12} />
        </button>
      </header>

      <div className={styles.mainContent}>
        <div className={styles.formArea}>
          <div className={styles.inputPlaceholder}>Bank name</div>
          <div>
            <p className={styles.label}>Standard products</p>
            <div className={styles.stack}>
              <div className={styles.productCard}>
                <div className={styles.radioCircle} />
                <div>
                  <span className={styles.label}>Savings</span>
                  <p className={styles.caption}>Standard account</p>
                </div>
              </div>
              <div className={styles.productCard}>
                <div className={styles.radioCircle} />
                <div>
                  <span className={styles.label}>Time Deposit</span>
                  <p className={styles.caption}>Fixed term</p>
                </div>
              </div>
              <div className={styles.productCard}>
                <div className={styles.radioCircle} />
                <div>
                  <span className={styles.label}>And more</span>
                  <p className={styles.caption}>Description</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputPlaceholder} />
          <div className={styles.grid}>
            <div className={styles.inputPlaceholder}></div>
            <div className={styles.inputPlaceholder}></div>
          </div>
          <div className={`${styles.inputPlaceholder} ${styles.inputPlaceholderLg}`} />
          <div className={styles.inputPlaceholder} />
        </div>
        <div className={styles.sidebar}>
          <span className={styles.previewLabel}>Preview</span>
          <div className={`${styles.inputPlaceholder} ${styles.inputPlaceholderLg}`} />
        </div>
      </div>

      <footer className={styles.footer}>
        <button className={`${styles.button}`}>
          Add investment
        </button>
      </footer>
    </div>
  );
};
