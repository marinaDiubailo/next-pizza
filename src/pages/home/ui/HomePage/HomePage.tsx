import { Button, Input } from '@/shared/ui'
export const HomePage = () => {
  return (
    <main>
      <div>
        <p>Get started by editing&nbsp;</p>
        <Button>Hello</Button>
        <Button variant="outlined">Hello</Button>
        <Button variant="secondary">Hello</Button>
        <Button fullWidth>Hello</Button>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px' }}>
          <Input type="password" placeholder="hello" label="Password" />
          <Input type="text" placeholder="Enter email" errorMessage="Error" label={'Email'} />
          <Input type="search" placeholder="hello" />
        </div>
      </div>
    </main>
  )
}
