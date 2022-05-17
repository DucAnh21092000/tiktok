import React from 'react'
import { useEffect } from 'react'
export default function LivePage() {
  useEffect(() => {
    document.title = `TikTok | LivePage`

  }, [])
  
  return (
    <div>LivePage</div>
  )
}
