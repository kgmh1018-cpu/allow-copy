# Allow-Copy

복사 차단 해제 북마크릿 배포 페이지. 현재 빌드 단계 없음.

## 구조

- **`main.js` 상단 2줄** — `BOOKMARKLET_CODE` (iOS·데스크탑) / `BOOKMARKLET_CODE_ANDROID` (URL-encoded). 이 두 줄이 전체 기능의 원본
- **복사 버튼** — `setupCopyBtn(id, code)` 헬퍼로 등록. 버튼 추가 시 이 함수 사용
- **애니메이션** — `runAnim()` addTimer 체인. 관련 DOM: `#bookmarkBar` `#bmSlot` `#fakeCursor` `#demoTextWrap` `#demoTextHl`
- **`resetAnim()`** — fakeCursor / dragGhost / bookmarkBar / bmSlot / dragBtn(`.is-dimmed` `.wiggle` `.is-pressed`) / `#demoTextHl` clip-path / `#__demo_toast__` 를 초기화. 모달 열림·탭 숨김·드래그 시작·`prefers-reduced-motion` 시 자동 호출

## 절대 금지

- **`BOOKMARKLET_CODE` 줄바꿈 금지** — `href`로 동작하려면 한 줄이어야 함
- **`dragBtn` click의 `e.preventDefault()` 삭제 금지** — 없으면 클릭 시 북마크릿이 현재 페이지에서 즉시 실행됨
- **`MutationObserver` 해제·변경 금지** — 북마크릿 실행 감지 → 성공 UI 전환이 이 프로젝트의 핵심 기믹
- **`unlocked` 클래스 제거 금지** — `isUnlocked = true` 이후 영구 상태. `resetAnim` 포함 어떤 경로도 건드리지 않음
- **토스트 ID 혼용 금지** — 데모 토스트 `__demo_toast__` / 실제 북마크릿 토스트 `__unlock_toast__`. 통일하면 타이밍 충돌로 실제 토스트가 사라짐

## 비직관적 설계 의도

**isUnlocked 이스터에그** — 사용자가 이 페이지에서 북마크릿을 직접 실행하면 `<head>`에 `<style>`이 주입되고 MutationObserver가 감지해 성공 UI로 전환된다. 북마크릿의 "페이지 강제 변형"을 방어 대신 성공 연출로 승화시키는 의도적 구조.

**이벤트 이중 등록** — `installBtn` · `closeBtn` · `overlay`에 핸들러가 2개씩 있음. 모달 제어와 애니메이션 제어를 분리한 의도적 패턴.

**`isDraggingBtn` 플래그** — 드래그 중 데모 애니메이션 재개를 막는 플래그. 이 플래그 없이 `scheduleAnim`을 직접 호출하면 드래그 도중 데모가 켜짐.

---

구조·금지사항·설계 의도가 바뀔 때만 이 파일을 수정한다. 작업 히스토리나 메모는 적지 않는다.