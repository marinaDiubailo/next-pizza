import { Topbar } from '@/widgets/topbar'
import { Checkbox } from '@/shared/ui'

export const HomePage = () => {
  return (
    <main>
      <Topbar />
      <Checkbox label={'Чеснок'} />
    </main>
  )
}
