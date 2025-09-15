import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Products')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Products"!</div>
}
