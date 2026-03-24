import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-8 py-16'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold tracking-tight'>Starter Kit</h1>
        <p className='mt-3 text-lg text-muted-foreground'>
          Next.js 16 · TypeScript · Tailwind CSS v4 · shadcn/ui
        </p>
      </div>

      <div className='grid w-full max-w-2xl gap-4 sm:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>shadcn/ui</CardTitle>
            <CardDescription>미리 만들어진 UI 컴포넌트 모음</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-muted-foreground'>
              버튼, 입력창, 카드, 폼 등 자주 쓰는 컴포넌트가 준비되어 있어요.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>다크모드</CardTitle>
            <CardDescription>우측 상단 버튼으로 전환</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-muted-foreground'>
              시스템 설정에 따라 자동으로 다크/라이트 모드가 적용돼요.
            </p>
          </CardContent>
        </Card>
      </div>

      <Link
        href='/example'
        className='inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80'
      >
        폼 예제 보기 →
      </Link>
    </div>
  )
}
