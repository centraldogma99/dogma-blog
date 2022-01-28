import { Theme } from '@emotion/react';

const themes: Theme[] = [
  {
    name: 'blue',
    colors: {
      primary: 'dodgerblue',
      secondary: 'white',
      globalBackground: 'white',
      title: 'white',
      postListBackground: '#eee',
      postList: 'black',
      postListDate: '#222',
      text: 'black',
    },
    palette: {
      divider: 'gainsboro',
    },
  },
  {
    name: 'hotpink',
    colors: {
      primary: 'hotpink',
      secondary: 'black',
      globalBackground: '#444444',
      title: 'hotpink',
      postListBackground: '#222',
      postList: 'hotpink',
      postListDate: '#ff76d8',
      text: 'white',
    },
    palette: {
      divider: 'gainsboro',
    },
  },
];

export default themes;
