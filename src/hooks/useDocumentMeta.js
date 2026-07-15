import { useEffect } from 'react'

// Per-page <title> + meta description, without pulling in react-helmet.
// Each page calls this once with its own title/description.
export function useDocumentMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
