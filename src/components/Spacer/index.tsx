import styles from './styles.module.scss';

type PropType = {
  height?: number
}

const Spacer = ({ height = 1 }: PropType): JSX.Element => {
  return (
    <div aria-hidden="true" style={{height: `${height}rem`}} />
  );
}

export default Spacer
