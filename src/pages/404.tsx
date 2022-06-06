import { Link } from 'gatsby'
import React from 'react'

// markup
const NotFoundPage = () => {
  return (
    <main>
      잘못된 링크입니다!
      <Link to={'/'}>루트 페이지로 돌아가기</Link>
    </main>
  )
}

export default NotFoundPage
