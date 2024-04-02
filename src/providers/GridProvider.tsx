import { GridProvider } from "@faceless-ui/css-grid";
import { SettingsProviderProps } from "@faceless-ui/css-grid/dist/Settings/types";
import React from "react";

const GridWrapper: React.FC<SettingsProviderProps> = ({children}) =>  {
  return (
    <GridProvider
      breakpoints={{
        s: 768,
        m: 1279,
        l: 1679
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
