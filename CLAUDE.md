# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 개발 명령어

```bash
npm run dev      # 개발 서버 시작 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 빌드된 앱 실행
npm run lint     # ESLint 코드 검사
```

## 기술 스택

- **Next.js 16** (App Router) — 훈련 데이터와 다를 수 있는 Breaking Changes 포함. 코드 작성 전 `node_modules/next/dist/docs/` 가이드 확인 필수
- **React 19** with React Compiler (자동 메모이제이션 — `useMemo`/`useCallback` 수동 추가 불필요)
- **TypeScript 5** — strict 모드 활성화
- **Tailwind CSS v4** — OKLCH 색상 시스템, `tailwind.config.ts` 없음, `globals.css` `@theme` 블록에서 설정
- **shadcn/ui** — `base-nova` 스타일, `@base-ui/react` Primitives 기반
- **react-hook-form + zod v4** — 폼 처리 및 유효성 검사 (Zod v4는 v3과 breaking changes 있음)
- **next-themes** — 다크/라이트 모드 전환 (`.dark` 클래스 방식)
- **sonner** — 토스트 알림
- **lucide-react** — 아이콘 라이브러리

## 아키텍처

### 디렉토리 구조
```
src/
├── app/
│   ├── layout.tsx      # Root 레이아웃 (폰트, 메타데이터)
│   ├── globals.css     # Tailwind + 테마 CSS 변수 (@theme 블록)
│   ├── page.tsx        # 홈 페이지 (/)
│   └── example/        # 폼 예제 페이지 (/example)
├── components/
│   ├── ui/             # shadcn/ui 컴포넌트 (직접 수정 가능)
│   ├── layout/         # Header, Footer
│   ├── providers.tsx   # ThemeProvider 래퍼 (클라이언트)
│   └── theme-toggle.tsx # 다크/라이트 모드 토글 버튼
├── lib/
│   └── utils.ts        # cn() 유틸리티 함수
└── hooks/              # 커스텀 훅 (별칭: @/hooks)
```

### 경로 별칭
`@/*` → `./src/*` (예: `import { cn } from '@/lib/utils'`)

### 레이아웃 구조
Root Layout이 다음 순서로 감쌈:
```
Providers (ThemeProvider)
  └── Header (네비게이션 + ThemeToggle)
  └── main (max-w-5xl, mx-auto, px-4, py-8)
      └── {children}
  └── Footer
  └── Toaster (sonner 토스트 컨테이너)
```

## 핵심 패턴

### 서버 vs 클라이언트 컴포넌트
기본값은 서버 컴포넌트. `useState`, `useEffect`, 이벤트 핸들러가 필요하면 파일 상단에 `'use client'` 추가.

### cn() 유틸리티
Tailwind 클래스를 조건부로 병합할 때 사용:
```typescript
import { cn } from '@/lib/utils'
<div className={cn('base-class', isActive && 'active-class', className)} />
```

### 토스트 알림 (sonner)
```typescript
import { toast } from 'sonner'
toast.success('저장되었습니다')
toast.error('오류가 발생했습니다')
toast.promise(asyncFn(), { loading: '처리 중...', success: '완료!', error: '실패' })
```

### 폼 패턴
zod 스키마 정의 → `useForm` + `zodResolver` → shadcn/ui `Form` 컴포넌트 조합. `/example` 페이지 참고.

**Zod v4 문법** (v3과 다름):
```typescript
// v4: 에러 메시지를 문자열로 직접 전달
z.string().min(2, '2글자 이상 입력해주세요')
z.string().email('올바른 이메일 형식이 아니에요')
```

### UI 컴포넌트 추가
shadcn/ui 컴포넌트 추가 시:
```bash
npx shadcn@latest add <컴포넌트명>
```
