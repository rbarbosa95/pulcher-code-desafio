import { ref } from 'vue'

export function useWindowSize() {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)

  function handleResize() {
    console.log('resize')
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  window.addEventListener('resize', handleResize)

  return {
    width,
    height
  }
}
