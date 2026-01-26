# PLAN: 실행 오류 수정 (환경 변수 누락)
> **Date:** 2026-01-27
> **Task ID:** 002_ERROR_FixStartup
> **Language:** Korean

## 1. Objective (목표)
`pnpm run dev` 및 `pnpm run build` 실행 시 발생하는 환경 변수 누락(`CLIENT_ID` 등) 오류를 해결하여 서버가 정상적으로 실행되도록 합니다.

## 2. Context Analysis (배경 분석)
- **Target Files:** `.env` (신규 생성), `.gitignore`, `src/events/ready.ts` (확인)
- **Current Issue:** 
    - `pnpm run dev` 실행 시 Exit Code 1로 종료됨.
    - 빌드 시도 시 `...ENT_ID not found in environment variables` 오류 발생.
    - 프로젝트 루트에 `.env` 파일이 부재함.

## 3. Strategy (수립 전략)
1.  **환경 변수 템플릿 작성**: `robo.js` 실행에 필수적인 `DISCORD_TOKEN`, `DISCORD_CLIENT_ID` 등을 포함한 `.env` 파일을 생성합니다.
2.  **보안 설정**: `.env`가 `.gitignore`에 포함되어 있는지 확인하여 실수로 커밋되지 않도록 합니다.
3.  **예제 파일 제공**: `.env.example` 파일을 함께 생성하여 향후 설정을 돕습니다.

## 4. Impact Analysis (영향 분석)
- **Affected Files:**
    - `[NEW] .env`
    - `[NEW] .env.example`
- **Side Effects:** 올바른 토큰이 입력되지 않으면 여전히 실행되지 않을 수 있음. (마스터에게 토큰 입력 요청 필요)

## 5. Task List (작업 목록)
- [ ] `.env` 파일 생성 (필수 변수 템플릿 포함)
- [ ] `.env.example` 파일 생성
- [ ] `.gitignore` 확인 및 업데이트

## 6. Verification Plan (검증 계획)
- `pnpm run build` 재실행하여 환경 변수 오류가 사라지는지 확인.
- `pnpm run dev` 실행 시 봇이 로그인 시도(또는 토큰 오류 메시지 출력)까지 진행되는지 확인.
