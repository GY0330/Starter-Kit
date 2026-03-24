---
description: 'App Router에 맞는 새 페이지를 생성합니다'
allowed-tools: ['Write', 'Bash(mkdir -p:*)']
---

# Claude 명령어: Page

새 Next.js 페이지를 App Router 구조에 맞게 생성합니다.

## 사용법

```
/page
```

## 프로세스

1. 사용자에게 페이지 경로 확인 (예: `about`, `dashboard/settings`)
2. 페이지 목적 파악 후 `'use client'` 필요 여부 판단
   - 버튼 클릭, 입력, 상태 관리 등 인터랙션 있으면 → 클라이언트 컴포넌트
   - 데이터 표시만 하면 → 서버 컴포넌트 (기본값)
3. `src/app/<경로>/page.tsx` 생성
4. 생성 완료 후 파일 경로와 접속 URL 안내

## 생성 규칙

- 경로 별칭 `@/*` 사용 (예: `import { cn } from '@/lib/utils'`)
- TypeScript strict 모드 준수 (타입 명시)
- 컴포넌트명은 PascalCase (예: `AboutPage`, `DashboardSettingsPage`)
- 클라이언트 컴포넌트는 파일 최상단에 `'use client'` 추가

## 페이지 템플릿

**서버 컴포넌트 (기본):**
```tsx
export default function <Name>Page() {
  return (
    <div>
      <h1>제목</h1>
    </div>
  )
}
```

**클라이언트 컴포넌트:**
```tsx
'use client'

import { useState } from 'react'

export default function <Name>Page() {
  return (
    <div>
      <h1>제목</h1>
    </div>
  )
}
```
