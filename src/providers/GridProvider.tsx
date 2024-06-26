import { GridProvider } from "@faceless-ui/css-grid";
import { SettingsProviderProps } from "@faceless-ui/css-grid/dist/Settings/types";
import React from "react";

const GridWrapper: React.FC<SettingsProviderProps> = ({children}) =>  {
  return (
    <GridProvider
      breakpoints={{
        s: 996,
        m: 1200,
        l: 1700
      }}
      rowGap={{
        s: '15px',
        m: '15px',
        l: '30px',
        xl: '30px',
      }}
      colGap={{
        s: '15px',
        m: '15px',
        l: '30px',
        xl: '30px',
      }}
      cols={{
        s: 6,
        m: 12,
        l: 12,
        xl: 12,
      }}
    >
      {children}
    </GridProvider>
  );

}

export default GridWrapper;
