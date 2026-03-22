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
- **React 19** with React Compiler (자동 메모이제이션)
- **TypeScript 5** — strict 모드 활성화
- **Tailwind CSS v4** — OKLCH 색상 시스템, CSS 변수로 테마 관리
- **shadcn/ui** — `base-nova` 스타일, Lucide 아이콘
- **react-hook-form + zod** — 폼 처리 및 유효성 검사
- **next-themes** — 다크/라이트 모드 전환

## 아키텍처

### 디렉토리 구조
```
src/
├── app/           # Next.js App Router 페이지
├── components/
│   ├── ui/        # shadcn/ui 컴포넌트 (수정 주의)
│   └── layout/    # Header, Footer
└── lib/
    └── utils.ts   # cn() 유틸리티 함수
```

### 경로 별칭
`@/*` → `./src/*` (예: `import { cn } from '@/lib/utils'`)

### 레이아웃 구조
Root Layout이 `ThemeProvider`(next-themes) > Header > Main > Footer 순으로 감쌈. 최대 너비 `max-w-5xl`, 가로 마진 `mx-auto`.

### 폼 패턴
zod 스키마 정의 → `useForm` + `zodResolver` → shadcn/ui `Form` 컴포넌트 조합. `/example` 페이지 참고.

### UI 컴포넌트 추가
shadcn/ui 컴포넌트 추가 시:
```bash
npx shadcn@latest add <컴포넌트명>
```
