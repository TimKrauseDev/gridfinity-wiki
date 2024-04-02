import { Cell, Grid } from '@faceless-ui/css-grid';

import LinkCard, { PropType as LinkProps } from '@site/src/components/LinkCard';

type PropType = {
  linkItems: LinkProps[]
}


const LinkCardGroup = ({ linkItems }: PropType): JSX.Element => {
  return (
    <Grid>
      <Cell cols={2} colsS={0} ><span /></Cell>
      {
        linkItems.map( (item, key) => {
          return (
            <Cell key={key} cols={4} colsS={6}>
              <LinkCard
                title={item.title}
                Svg={item.Svg}
                linkTo={item.linkTo}
              />
            </Cell>
          );
        })
      }
      <Cell cols={2} colsS={0} ><span /></Cell>
    </Grid>
  );

}

export default LinkCardGroup;
