# Development Task List

## Phase 1: Environment & Foundation
- [x] **Init**: 프로젝트 생성 및 Git 초기화
- [x] **Config**: ESLint, TypeScript, `tsconfig.json` 설정
- [x] **Base Libs**: 패키지 관리자 및 환경 셋업 (`pnpm` 기반)
- [ ] **Base Architecture**: 고급 폴더 구조 생성 (`src/shared`, `src/features` 등)

## Phase 2: Core Domain & Data Models
- [x] **Basic Commands**: `/핑` 슬래시 커맨드 연동 (`src/commands/핑.ts`)
- [x] **Basic Events**: 봇 구동 이벤트 연동 (`src/events/clientReady.ts`)
- [ ] **Domain Analysis**: 확장될 핵심 도메인 식별
- [ ] **Models**: 인터페이스 및 타입 정의

## Phase 3: Feature Implementation
- [ ] **Feature A**: 새로운 슬래시 커맨드 추가 (예정)
    - [ ] 세부 구현 항목
- [ ] **Feature B**: 신규 이벤트 추가 (예정)
    - [ ] 세부 구현 항목

## Phase 4: Verification & Polish
- [ ] **Lint Check**: `pnpm lint` 전체 통과 확인
- [ ] **Build Check**: `pnpm build` 정상 동작 확인
- [ ] **Refactoring**: 중복 코드 제거 및 구조 개선
