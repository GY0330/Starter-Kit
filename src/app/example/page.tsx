'use client'

import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

// 유효성 검사 규칙 정의 (Zod 스키마)
const formSchema = z.object({
  name: z.string().min(2, '이름은 2글자 이상 입력해주세요'),
  email: z.string().email('올바른 이메일 형식이 아니에요'),
})

// 스키마에서 타입 자동 생성
type FormValues = z.infer<typeof formSchema>

export default function ExamplePage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  })

  function onSubmit(values: FormValues) {
    // 제출된 값을 콘솔에 출력 (실제 앱에서는 API 호출 등으로 대체)
    console.log('제출된 값:', values)
    toast.success(`제출 완료! 이름: ${values.name}`)
    form.reset()
  }

  return (
    <div className='flex flex-col items-center gap-6 py-8'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>폼 컴포넌트 예제</h1>
        <p className='mt-2 text-muted-foreground'>
          shadcn/ui Form + React Hook Form + Zod 조합 예제예요
        </p>
      </div>

      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle>회원 정보 입력</CardTitle>
          <CardDescription>
            이름과 이메일을 입력하고 제출해보세요. 유효성 검사가 자동으로 동작해요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              {/* 이름 필드 */}
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이름</FormLabel>
                    <FormControl>
                      <Input placeholder='홍길동' {...field} />
                    </FormControl>
                    <FormDescription>2글자 이상 입력해주세요</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 이메일 필드 */}
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일</FormLabel>
                    <FormControl>
                      <Input type='email' placeholder='example@email.com' {...field} />
                    </FormControl>
                    <FormDescription>올바른 이메일 형식으로 입력해주세요</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type='submit' className='w-full'>
                제출하기
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
