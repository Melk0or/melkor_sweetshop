import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/cart/')({
  component: () => <div>Hello /cart/!</div>
})