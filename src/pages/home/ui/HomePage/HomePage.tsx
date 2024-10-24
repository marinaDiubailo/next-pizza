import { Topbar } from '@/widgets/topbar'
import s from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <main>
      <Topbar />
      <div style={{ height: '1000px', background: 'yellow' }}></div>
    </main>
  )
}
