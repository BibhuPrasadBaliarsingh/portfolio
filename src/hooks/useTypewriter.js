import { useEffect, useState } from 'react'

/**
 * Cycles through a list of words with a typing / deleting effect.
 * @param {string[]} words
 * @param {{ typingSpeed?: number, deletingSpeed?: number, pause?: number }} options
 */
export function useTypewriter(
  words,
  { typingSpeed = 90, deletingSpeed = 45, pause = 1400 } = {}
) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing') // typing | pausing | deleting

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (phase === 'typing') {
      if (text.length < current.length) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pause)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 0)
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length - 1))
        }, deletingSpeed)
      } else {
        setPhase('typing')
        setWordIndex((i) => (i + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return text
}
