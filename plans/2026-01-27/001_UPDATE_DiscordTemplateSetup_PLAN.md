# PLAN: Discord Bot Template Setup (Robo.js)
> **Date:** 2026-01-27
> **Task ID:** 001_UPDATE_DiscordTemplateSetup
> **Language:** Korean (Required)

## 1. Objective
이 프로젝트를 `Robo.js` 프레임워크 기반의 디스코드 봇 템플릿으로 전환합니다. Robo.js의 파일 기반 라우팅 시스템을 활용하여, 슬래시 커맨드를 쉽고 빠르게 추가할 수 있는 환경을 구축합니다.

## 2. Context Analysis
- **Target Files:** `package.json`, `PRD/PRD.md`, `src/` directory
- **Current Issue:** 현재는 일반 Node.js 템플릿이며, 디스코드 봇 기능이 없습니다. `discord.js`만 사용하는 것보다 `Robo.js`를 도입하여 생산성을 높이고자 합니다.

## 3. Strategy
- **Framework**: `robo.js` (Discord Bot Kit) 도입.
- **Structure**:
    - `src/commands/`: 슬래시 커맨드 파일이 위치하는 곳. 파일 생성만으로 커맨드가 등록됨.
    - `src/events/`: 이벤트 핸들러가 위치하는 곳.
- **Configuration**: `config/robo.mjs` (옵션) 및 `package.json` 스크립트 수정.
- **Documentation**: 
    - `PRD.md`에 Robo.js 기반 개발 가이드라인을 명시.
    - **Deployment Section**: 무료(Robo Play, Railway 등) 및 유료(VPS) 배포 옵션을 정리하여 `PRD.md`에 추가.

## 4. Impact Analysis
- **Affected Files:**
    - `package.json`: 의존성 및 스크립트 전면 수정 (`robo build`, `robo dev`).
    - `src/`: 기존 `index.ts` 대신 Robo.js 구조로 변경.
    - `PRD/PRD.md`: 템플릿 사용법 및 배포 가이드 업데이트.
- **Side Effects**: 기존의 범용 Node.js 진입점(`index.ts` 등)은 제거되거나 Robo.js의 라이프사이클 훅으로 이동해야 할 수 있습니다.

## 5. Task List
- [ ] **Dependencies**:
    - `pnpm add discord.js robo.js`
    - `pnpm add -D @swc/core` (Robo.js 컴파일러 최적화)
- [ ] **Cleanup**: 기존 `src/index.ts` 등 불필요한 파일 정리.
- **Structure Setup**:
    - [ ] `src/commands/example.ts` (예제 커맨드 생성)
    - [ ] `config/robo.mjs` (필요시 설정 파일 생성)
- [ ] **Configuration**:
    - `package.json` scripts 변경 (`dev`: `robo dev`, `build`: `robo build`, `start`: `robo start`)
- [ ] **Documentation**:
    - `PRD/PRD.md` 수정:
        - Robo.js 구조 설명 및 새 봇 생성 시 가이드라인.
        - **Deployment**: Robo Play(무료), Railway, VPS 등 배포 옵션 추천 섹션 추가.

## 6. Verification Plan
- `pnpm dev` 실행 시 로컬에서 봇이 시작되는지 확인 (로그 확인).
- `robo build` 명령어가 정상적으로 실행되는지 확인.
