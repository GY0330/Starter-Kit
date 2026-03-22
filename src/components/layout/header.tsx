import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export function Header() {
  return (
    <header className='border-b'>
      <div className='mx-auto flex h-16 max-w-5xl items-center justify-between px-4'>
        <Link href='/' className='text-xl font-bold'>
          Starter Kit
        </Link>
        <nav className='flex items-center gap-4'>
          <Link href='/example' className='text-sm text-muted-foreground hover:text-foreground transition-colors'>
            폼 예제
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
