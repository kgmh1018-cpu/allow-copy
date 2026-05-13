# Allow-Copy

북마크릿 배포 페이지. 빌드 없음. 파일 3개(`index.html` `style.css` `main.js`).

## 핵심 규칙
- `BOOKMARKLET_CODE`는 `main.js` 상단 한 줄 minified string — 줄바꿈 금지
- `href`는 main.js가 런타임 주입. HTML에 하드코딩 금지
- npm·빌드 도구 도입 금지

## 파일 간 의존
- `BOOKMARKLET_CODE` 수정 → `href` 자동 반영 (별도 작업 불필요)
- 애니메이션 DOM: `#bookmarkBar` `#bmSlot` `#fakeCursor` `#demoTextWrap` `#demoTextHl` (index.html)
- 애니메이션 타이밍: `runAnim()` addTimer 체인 / 대기 주기 `ANIM_CYCLE=2500ms` / 안전 타이머 `ANIM_SAFETY=12000ms`
- 커서 이동 함수: `animCursor` (직선) / `animCursorCurve(toX, toY, dur, easing, onTick, onDone)` (베지어 곡선, onTick(t)으로 clip-path 등 동기 구동 가능)
- 모달 열림·탭숨김·드래그 시작·`prefers-reduced-motion` 활성화 → `resetAnim()` 자동 호출
- `resetAnim` 초기화 대상: fakeCursor / dragGhost / bookmarkBar / bmSlot / dragBtn / `#demoTextHl` clip-path / `.wiggle` 클래스

## FAQ 항목 추가 시
`.faq-list` 안 `.faq-item` 블록 복사 → `id`와 `data-target` 일치 (예: `faq7`)

## 이 파일 업데이트 규칙
구조·의존관계·금지사항 바뀔 때만 수정. 작업 히스토리 적지 않음. 항상 짧게 유지.