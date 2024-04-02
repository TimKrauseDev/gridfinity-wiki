import Hero from "@site/src/components/Hero";
import Spacer from "@site/src/components/Spacer";
import GridWrapper from "@site/src/providers/GridProvider";
import Layout from "@theme/Layout";

import { Grid, Cell } from "@faceless-ui/css-grid";
import Link from "@docusaurus/Link";

import docLicense from '@site/static/gridfinity_mit_license.txt';


const Specifications = (): JSX.Element =>  {
  return (
    <GridWrapper>
      <Layout title="Home">
        <main>
          <Spacer height={4} />
          <Hero>
            <h1>MIT License</h1>
          </Hero>
          <Spacer height={4} />
          <div className="container">
            <p>
              <Link to="https://github.com/TimKrauseDev/gridfinity-wiki/blob/main/static/gridfinity_mit_license.txt">TXT License File</Link>
            </p>
            <p>
              Copyright (c) 2023 Zachary Freedman and Voidstar Lab LLC
            </p>
            <p>
              Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
            </p>
            <p>
              The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
          </div>
          <Spacer height={4} />
        </main>
      </Layout>
    </GridWrapper>
  );
}

export default Specifications;
