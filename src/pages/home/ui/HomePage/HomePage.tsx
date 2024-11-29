import { Topbar } from '@/widgets/topbar'
import { Container } from '@/shared/ui'
import { Sidebar } from '@/widgets/sidebar'

export const HomePage = () => {
  return (
    <main>
      <Topbar />
      <Container>
        <Sidebar />
      </Container>
    </main>
  )
}
