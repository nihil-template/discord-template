# Product Requirements Document (PRD)

> **⚠️ Template Usage Guide**:
> 이 파일은 **템플릿**입니다. 새로운 봇 프로젝트를 시작할 때, 아래 내용(대괄호 `[]` 부분 포함)을 프로젝트 성격에 맞게 **반드시 수정**하세요.
> 특히 **1. Project Overview**와 **3. System Architecture**는 봇의 정체성을 정의하므로 꼼꼼히 작성해야 합니다.

## 1. Project Overview
* **Goal**: [개발하려는 디스코드 봇의 핵심 기능과 목적을 한 문장으로 정의]
* **Target User**: [이 봇을 사용할 주된 사용자층 (예: 일반 서버 유저, 서버 관리자, 특정 게임 플레이어)]
* **Key Value**: [다른 봇과 차별화되는 핵심 가치 (예: 쉽고 빠른 설정, 강력한 AI 기능)]

## 2. Tech Stack & Environment
* **Language**: TypeScript v5.0+
* **Runtime**: Node.js v20+ (LTS)
* **Framework**: **Robo.js** (Discord Bot Kit)
    *   File-based Routing (`src/commands`, `src/events`)
    *   Built-in Flashcore Database (Optional)
* **Core Library**: `discord.js` v14+
* **Package Manager**: pnpm
* **Linter/Formatter**: ESLint (Flat Config) + Prettier

## 3. System Architecture & Features
### 3.1. Directory Structure (Robo.js)
*   `src/commands/`: 슬래시 커맨드 정의 (예: `/ping` -> `ping.ts`)
*   `src/events/`: 이벤트 리스너 (예: `ready.ts`, `interactionCreate.ts`)
*   `src/middleware/`: 커맨드 실행 전/후 로직 (권한 체크 등)

### 3.2. User Flow (Example)
*   **Command Flow**: 사용자가 `/커맨드` 입력 -> Robo.js 라우터 -> 해당 핸들러 실행 -> 응답 반환
*   **Event Flow**: 디스코드 이벤트 발생 -> `src/events` 내 핸들러 감지 -> 로직 수행

### 3.3. Core Features
*   **[Feature Name]**:
    - **Description**: [기능 설명]
    - **Command**: `/command_name` (옵션, 하위 커맨드 포함)

### 3.4. Development Guide (Robo.js)
**⚠️ 중요**: 이 프로젝트는 `Robo.js` 프레임워크를 기반으로 합니다. 기존 `discord.js`와 구조가 다르므로 아래 가이드를 준수하세요.

#### **A. Project Structure & Config**
*   **`config/robo.mjs` (필수)**: 봇의 설정 파일입니다. **이 파일이 없으면 봇이 실행되지 않습니다.**
    *   `intents`: 봇이 수신할 이벤트 권한을 설정합니다 (예: `GuildMessages`, `MessageContent`).
    *   **권한 부족 시** 이벤트가 발생하지 않거나 에러가 발생할 수 있습니다.
*   **`src/commands`**: 파일 자체가 슬래시 커맨드가 됩니다. (e.g., `ping.ts` -> `/ping`)
*   **`src/events`**: 파일 이름이 이벤트 이름과 매핑됩니다. (e.g., `messageCreate.ts`)

#### **B. How to Write Commands**
슬래시 커맨드는 `Interaction` 객체를 인자로 받고, 문자열이나 객체를 리턴하여 응답합니다. `EmbedBuilder`를 사용하여 풍부한 응답을 보낼 수 있습니다.

```typescript
import type { CommandConfig, CommandResult } from 'robo.js';
import { type Interaction, EmbedBuilder } from 'discord.js';

// 커맨드 설정 (설명, 옵션 등)
export const config: CommandConfig = {
  description: '서버 상태를 확인합니다.',
};

export default (interaction: Interaction): CommandResult => {
  // 기본 텍스트 응답
  // return "Pong!";

  // 임베드(Embed) 응답 예시
  const embed = new EmbedBuilder()
    .setTitle('🏓 Pong!')
    .setDescription(`Latency: ${interaction.client.ws.ping}ms`)
    .setColor('Blue') // or Hex Code: #0099ff
    .setTimestamp();

  return { embeds: [embed] };
};
```

#### **C. How to Write Events**
이벤트 핸들러는 해당 이벤트가 발생할 때 실행됩니다.

```typescript
import type { Client, Message } from 'discord.js';

// 파일명: src/events/messageCreate.ts
export default (message: Message, client: Client) => {
  if (message.author.bot) return; // 봇 메시지 무시
  console.log(`Received message: ${message.content}`);
};
```

#### **D. Essential APIs (Cheat Sheet)**
봇 개발 시 자주 사용되는 주요 클래스와 메서드입니다.

| Category | Class / Method | Description |
| :--- | :--- | :--- |
| **Messaging** | `EmbedBuilder` | 임베드 메시지(제목, 설명, 이미지 등) 생성 |
| **Components** | `ActionRowBuilder` | 버튼, 셀렉트 메뉴 등을 담는 컨테이너 |
| | `ButtonBuilder` | 클릭 가능한 버튼 생성 (Link, Primary, Danger 등) |
| | `StringSelectMenuBuilder` | 드롭다운 선택 메뉴 생성 |
| | `ModalBuilder` | 팝업 폼(입력창) 생성 |
| **Permissions** | `PermissionsBitField` | 채널/역할 권한 확인 및 설정 (e.g., `.Flags.Administrator`) |
| **Interaction** | `interaction.reply()` | 응답 전송 (Robo.js에서는 return으로 대체 가능) |
| | `interaction.deferReply()` | 3초 이상 걸리는 작업 시 응답 대기 상태로 전환 |
| | `interaction.editReply()` | defer 후 실제 응답 전송 |

## 4. Deployment Strategy
**이 봇은 다음 환경에서 배포될 수 있습니다.** 프로젝트 규모와 예산에 맞춰 선택하세요.

### 4.1. Free / Low Cost (Recommended for Startups)
*   **Robo Play**: Robo.js팀에서 제공하는 공식 호스팅. 설정이 가장 간편함.
*   **Railway**: GitHub 연동을 통해 쉽게 배포 가능. (유료 전환 가능성 있음)
*   **Fly.io**: Docker 컨테이너 기반 배포.

### 4.2. Production (VPS)
*   **Vultr / Oracle Cloud / AWS**: 24/7 안정적인 운영이 필요할 때 권장.
*   **Process Manager**: `PM2`를 사용하여 프로세스 관리 권장.

## 5. Non-Functional Requirements & Risks
*   **Performance**: 슬래시 커맨드 응답은 **3초 이내**에 이루어져야 함 (Discord API 제한). 3초 초과 시 `deferReply` 사용 필수.
*   **Security**: `.env` 파일에 토큰(`DISCORD_TOKEN`) 보관, GitHub에 절대 업로드 금지.
*   **Rate Limits**: Discord API 레이트 리밋 준수.
