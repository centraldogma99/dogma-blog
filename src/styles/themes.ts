import { Theme } from '@emotion/react'

const themes: Theme[] = [
  {
    name: 'blue',
    colors: {
      primary: 'dodgerblue',
      opposite: 'hotpink',
      secondary: 'white',
      globalBackground: 'white',
      title: 'white',
      postListBackground: '#eee',
      postList: 'black',
      postListDate: '#666',
      text: 'black',
      codeText: 'white',
      blockquote: '#eee',
      preCode: '#333',
    },
  },
  {
    name: 'hotpink',
    colors: {
      primary: 'hotpink',
      opposite: 'dodgerblue',
      secondary: 'black',
      globalBackground: '#444444',
      title: 'hotpink',
      postListBackground: '#222',
      postList: 'hotpink',
      postListDate: 'white',
      text: 'white',
      codeText: 'white',
      blockquote: '#222',
      preCode: '#333',
    },
  },
]

export default themes
