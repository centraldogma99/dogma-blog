import { useEffect, useState } from 'react'

const useTagSearch = (tagInput: string, tags: string[]) => {
  const [matchingTags, setMatchingTags] = useState<string[]>([])

  useEffect(() => {
    if (tagInput === '') {
      setMatchingTags(tags)
    } else {
      const tagInputUncapped = tagInput.toLowerCase()
      const a = tags
        .map(tag => tag.toLowerCase())
        .filter(tag => tag.includes(tagInputUncapped))
      setMatchingTags(a)
    }
  }, [tagInput, tags])

  return { matchingTags }
}

export default useTagSearch
