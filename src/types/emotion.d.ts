import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      globalBackground: string;
      title: string;
      postListBackground: string;
      postList: string;
      postListDate: string;
      text: string;
    };
    palette?: {
      divider?: string;
    };
  }
}
