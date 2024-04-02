import { ReactNode } from 'react';
import styles from './styles.module.scss';
import Spacer from '@site/src/components/Spacer';

type PropType = {
  children: ReactNode
}

const Hero = ({ children }: PropType): JSX.Element => {
  return (
    <div className="container">
        <div className={styles.heroBanner}>
          <Spacer height={2} />
          {children}
          <Spacer height={2} />
        </div>
    </div>
  );
}

export default Hero;
