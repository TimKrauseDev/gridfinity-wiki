import React from 'react';
import styles from './styles.module.scss';
import Link from '@docusaurus/Link';

export type PropType = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  linkTo: string;
}

const LinkCard = ({ title, Svg, linkTo }: PropType): JSX.Element => {
  return (
    <div className={styles.linkCard}>
      <Link to={linkTo}>
        <Svg />
        {title}
      </Link>
    </div>
  );

}

export default LinkCard;
