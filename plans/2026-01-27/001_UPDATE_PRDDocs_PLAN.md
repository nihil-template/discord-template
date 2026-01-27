# PLAN: Update PRD with Development Guidelines
> **Date:** 2026-01-27
> **Task ID:** 001_UPDATE_PRDDocs
> **Language:** Korean (Required)

## 1. Objective
PRD(제품 요구사항 정의서) 템플릿에 **개발 가이드라인**을 추가하여, 템플릿 사용자가 프로젝트 구조, 명령어/이벤트 작성법, 설정 파일의 중요성을 명확히 이해하고 개발을 시작할 수 있도록 한다.

## 2. Context Analysis
- **Target Files:** `PRD/PRD.md`
- **Current Issue:** 현재 PRD는 개괄적인 구조만 설명하고 있어, 실제 코드를 작성하는 방법(Command, Event)과 필수 설정(Config)에 대한 구체적인 가이드가 부족함.
- **Reference:**
    - `src/commands` (File-based Routing)
    - `src/events` (File-based Event Handling)
    - `config/robo.mjs` (Mandatory Config)

## 3. Strategy
`PRD/PRD.md` 파일에 **3.4. Development Guide (Robo.js)** 섹션을 신설하거나 기존 **3. System Architecture**를 보강하여 다음 내용을 포함한다:
1.  **Project Structure**: `src/commands`, `src/events`, `config`의 역할 명시.
2.  **Commands**: `Interaction`을 인자로 받고 `CommandResult`를 반환하는 기본 함수 구조 및 `config` export 예시 (`/ping` 등).
3.  **Embeds & Components**: `EmbedBuilder`를 사용한 리치 메시지 응답 방법과 버튼 등 컴포넌트 활용법 간략 소개.
4.  **Events**: `Client` 등을 인자로 받는 이벤트 핸들러 구조 예시.
5.  **Essential APIs**: 봇 개발 시 자주 사용되는 주요 API 클래스 및 메서드 정리 (e.g., `EmbedBuilder`, `ActionRowBuilder`, `ModalBuilder`).
6.  **Config**: `config/robo.mjs` 파일이 **반드시 존재해야 함**을 강조하고, `intents` 등 필수 설정 항목 설명.

## 4. Impact Analysis
- **Affected Files:** `PRD/PRD.md`
- **Side Effects:** 없음 (문서 업데이트).

## 5. Task List
- [ ] `PRD/PRD.md` 파일에 'Development Guide' 섹션 추가 <!-- id: 0 -->
    - [ ] Project Structure 상세 설명 <!-- id: 1 -->
    - [ ] Command 작성법 예시 코드 (Embed 포함) 추가 <!-- id: 2 -->
    - [ ] Event 작성법 예시 코드 추가 <!-- id: 3 -->
    - [ ] Essential API Reference 섹션 추가 <!-- id: 5 -->
    - [ ] `config/robo.mjs` 필수성 및 예시 추가 <!-- id: 4 -->

## 6. Verification Plan
- **Pre-verification**: 작성된 마크다운 내용이 Robo.js 및 템플릿의 실제 코드 구조(`src/commands/핑.ts`, `src/events/clientReady.ts`)와 일치하는지 확인.
- **Post-verification**: 사용자가 문서를 읽고 명확히 이해할 수 있는지 검토 요청.
