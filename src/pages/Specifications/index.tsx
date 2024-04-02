import Hero from "@site/src/components/Hero";
import Spacer from "@site/src/components/Spacer";
import GridWrapper from "@site/src/providers/GridProvider";
import Layout from "@theme/Layout";

import { Grid, Cell } from "@faceless-ui/css-grid";
import Link from "@docusaurus/Link";

import ImgWillTree from '@site/static/img/spec_draft_willtree8.jpg';
import ImgJulie1 from '@site/static/img/gridfinity-bin-drawing-julie777.jpg';
import ImgJulie2 from '@site/static/img/gridfinity-grid-drawing-julie777.jpg';


const Specifications = (): JSX.Element =>  {
  return (
    <GridWrapper>
      <Layout title="Home">
        <main>
          <Spacer height={4} />
          <Hero>
            <h1>Technical Specifications</h1>
          </Hero>
          <Spacer height={4} />
          <div className="container">
            <Grid>
              <Cell cols={6} colsS={6} >
                <p className="lead">Drawing Created by <Link to="https://github.com/willtree8">willtree8</Link></p>
              </Cell>
              <Cell cols={6} colsS={6} >
                <a href={ImgWillTree} target="_blank">
                  <img src={ImgWillTree} />
                </a>
              </Cell>
              <Cell cols={6} colsS={6} >
                <p className="lead">Drawing Created by <Link to="https://github.com/julie777/Gridfinity/">julie777</Link></p>
              </Cell>
              <Cell cols={6} colsS={6} >
                <a href={ImgJulie1} target="_blank">
                  <img src={ImgJulie1} />
                </a>
                <a href={ImgJulie2} target="_blank">
                  <img src={ImgJulie2} />
                </a>
              </Cell>
            </Grid>
          </div>
          <Spacer height={8} />
        </main>
      </Layout>
    </GridWrapper>
  );
}

export default Specifications;
