import { X } from 'lucide-react';
import styles from './Wireframes.module.css';

export const WizardStep1 = () => (
  <div className={styles.modalContainer}>
    <header className={styles.header}>
      <div>
        <h2 className={styles.headerTitle}>Add investment wizard</h2>
        <p className={styles.caption}>Step 1 of 2</p>
      </div>
      <button type="button" className={styles.button} >
        <X aria-label="Cancel" size={12} />
      </button>
    </header>

    <div className={styles.mainContent}>
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
      <aside className={styles.sidebar}>
        <span className={styles.previewLabel}>Preview</span>
        <div className={`${styles.inputPlaceholder} ${styles.inputPlaceholderLg}`} />
      </aside>
    </div>

    <div className={styles.footer}>
      <button className={styles.button}>Next</button>
    </div>
  </div>
);

export const WizardStep2 = ({ className }: { className: string }) => (
  <div className={`${styles.modalContainer} ${className}`}>
    <header className={styles.header}>
      <div>
        <h2 className={styles.headerTitle}>Add investment wizard</h2>
        <p className={styles.caption}>Step 2 of 2</p>
      </div>
      <button type="button" className={styles.button} >
        <X aria-label="Cancel" size={12} />
      </button>
    </header>

    <div className={styles.mainContent}>
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

      <aside className={styles.sidebar}>
        <span className={styles.previewLabel}>Preview</span>
        <div className={`${styles.inputPlaceholder} ${styles.inputPlaceholderLg}`} />
      </aside>
    </div>
    <footer className={styles.footer}>
      <button className={styles.button}>Add investment</button>
    </footer>
  </div>
);

export const UnifiedModal = () => (
  <div className={`${styles.modalContainer} ${styles.modalContainerLg}`}>
    <header className={styles.header}>
      <h2 className={styles.headerTitle}>Add investment modal</h2>
      <button type="button" className={styles.button} >
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
      <aside className={styles.sidebar}>
        <span className={styles.previewLabel}>Preview</span>
        <div className={`${styles.inputPlaceholder} ${styles.inputPlaceholderLg}`} />
      </aside>
    </div>

    <footer className={styles.footer}>
      <button className={styles.button}>Add investment</button>
    </footer>
  </div>
);
