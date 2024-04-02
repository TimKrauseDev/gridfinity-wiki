import Layout from '@theme/Layout';

import GridWrapper from '@site/src/providers/GridProvider';
import LinkCardGroup from '@site/src/components/LinkCardGroup';
import Spacer from '@site/src/components/Spacer';
import { PropType as LinkProps } from '@site/src/components/LinkCard';

import styles from './index.module.scss';
import Link from '@docusaurus/Link';

const linkItems: LinkProps[] = [
  {
    title: 'Parts Library',
    Svg: require('@site/static/img/home-misc.svg').default,
    linkTo: '/docs/intro',
  },
  {
    title: 'Technical Specifications',
    Svg: require('@site/static/img/home-misc.svg').default,
    linkTo: '/docs/intro',
  },
  {
    title: 'MIT License',
    Svg: require('@site/static/img/home-misc.svg').default,
    linkTo: '/docs/intro',
  },
]

const HomepageHero = (): JSX.Element => {
  return (
    <div className="container">
        <div className={styles.heroBanner}>
          <Spacer height={2} />
          <h1>Gridfinity</h1>
          <p className="lead-lg">The modular, open-source grid storage system for your workshop.</p>
          <Spacer height={2} />
        </div>
    </div>
  );
}

const HomepageFeatures = (): JSX.Element => {
  return (
    <div className="container">
      <h3>About This Website</h3>
      <p>Welcome to the unofficial Gridfinity wiki! Whether you're embarking on your first Gridfinity project or seeking designs and inspiration for your next endeavor, you've come to the right place. This platform was crafted with users like you in mind. Our documentation pages are meticulously constructed with Markdown. Should you encounter any discrepancies or wish to contribute your own project, simply head over to our <Link to="https://github.com/TimKrauseDev/gridfinity-wiki">GitHub Repository</Link>. You can easily submit an issue or pull request to have it added!</p>

      <h3>Gridfinity Origins</h3>
      <p>Alexander Chappels <Link to="https://www.thingiverse.com/thing:4160638">Assortment System</Link>, licensed under <Link to="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC-A-NC-SA</Link>, partly inspired <Link to="https://www.youtube.com/c/ZackFreedman">Zack Freedman's</Link> initial designs of Gridfinity. The Gridfinity designs were first released in the video <Link to="https://www.youtube.com/watch?v=ra_9zU-mnl8">"Gridfinity: Your Ultimate Modular Workshop is FREE!"</Link> as a framework for the community to extend.</p>

      <p>Now Gridfinity is in the hands of a thriving community that continually adapts it to their needs. We invite you to join this community by using and adapting the system!</p>


      <Spacer height={2} />
      <LinkCardGroup linkItems={linkItems} />
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <GridWrapper>
      <Layout title="Home">
        <main>
          <Spacer height={4} />
          <HomepageHero />
          <Spacer height={4} />
          <HomepageFeatures />
          <Spacer height={4} />
        </main>
      </Layout>
    </GridWrapper>
  );
}
