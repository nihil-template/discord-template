# Product Requirements Document (PRD)

## 1. Project Overview
* **Goal**: 커스텀 디스코드 봇(Discord Bot) 개발을 위한 Robo.js 기반의 템플릿 프로젝트
* **Target User**: 디스코드 서버 관리자 및 봇 사용자
* **Key Value**: 간편한 `핑` 커맨드를 시작으로, 빠르고 안전하게 확장 가능한 구조 제공

## 2. Tech Stack & Environment
* **Language**: TypeScript v5.0+
* **Runtime**: Node.js v20+ (LTS)
* **Framework**: **Robo.js** (Discord Bot Kit)
    *   File-based Routing (`src/commands`, `src/events`)
* **Core Library**: `discord.js` v14+
* **Package Manager**: pnpm
* **Linter/Formatter**: ESLint (Flat Config) + Prettier

## 3. System Architecture & Features
### 3.1. Directory Structure (Robo.js)
*   `src/commands/`: 슬래시 커맨드 정의 (`/핑` -> `핑.ts`)
*   `src/events/`: 이벤트 리스너 (`ready` -> `clientReady.ts`)
*   `src/shared/`: (예정) 공통 유틸리티 및 타입
*   `src/features/`: (예정) 비즈니스 로직 및 도메인 모델

### 3.2. User Flow
*   **Command Flow**: 사용자가 `/핑` 입력 -> Robo.js 라우터 -> `핑.ts` 핸들러 실행 -> "퐁!" 응답 반환
*   **Event Flow**: 디스코드 봇 구동 -> `clientReady.ts` 감지 -> 봇 준비 상태 로그 출력

### 3.3. Core Features
*   **Basic Commands**:
    - **Description**: 서버 연결 상태를 확인하는 기본 핑(Ping) 기능
    - **Command**: `/핑`

## 4. Deployment Strategy
### 4.1. Free / Low Cost (Recommended for Startups)
*   **Robo Play**: Robo.js팀에서 제공하는 공식 호스팅. 

## 5. Non-Functional Requirements & Risks
*   **Performance**: 슬래시 커맨드 응답은 **3초 이내**에 이루어져야 함 (Discord API 제한).
*   **Security**: `.env` 파일에 토큰(`DISCORD_TOKEN`, `DISCORD_CLIENT_ID`) 보관 필수.
