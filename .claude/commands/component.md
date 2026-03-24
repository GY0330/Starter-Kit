---
description: 'shadcn/ui 컴포넌트를 추가하고 사용 예제를 제공합니다'
allowed-tools: ['Bash(npx shadcn@latest add:*)']
---

# Claude 명령어: Component

shadcn/ui 컴포넌트를 설치하고 이 프로젝트에서 바로 쓸 수 있는 예제를 안내합니다.

## 사용법

```
/component
```

## 프로세스

1. 사용자에게 추가할 컴포넌트명 확인 (예: `dialog`, `table`, `select`, `toast`)
2. `npx shadcn@latest add <컴포넌트명>` 실행
3. 설치된 컴포넌트 파일 경로 안내 (`src/components/ui/<name>.tsx`)
4. 이 프로젝트에서 바로 쓸 수 있는 예제 코드 제시
5. import 방법 안내

## 자주 쓰는 컴포넌트 목록

| 컴포넌트 | 용도 |
|---------|------|
| `dialog` | 팝업 모달 창 |
| `select` | 드롭다운 선택 |
| `table` | 데이터 테이블 |
| `toast` | 알림 메시지 |
| `badge` | 상태 배지 |
| `tabs` | 탭 전환 |
| `avatar` | 프로필 이미지 |
| `checkbox` | 체크박스 |
| `switch` | 토글 스위치 |
| `textarea` | 여러 줄 입력 |

## 예제 코드 형식

설치 후 아래 형식으로 예제를 제공합니다:

```tsx
import { <ComponentName> } from '@/components/ui/<name>'

export default function Example() {
  return (
    <ComponentName>
      {/* 사용 예제 */}
    </ComponentName>
  )
}
```

## 참고사항

- 이 프로젝트는 **base-nova** 스타일을 사용합니다
- 아이콘은 `lucide-react` 패키지를 사용합니다
- 테마 색상은 `src/app/globals.css`의 CSS 변수로 자동 적용됩니다
