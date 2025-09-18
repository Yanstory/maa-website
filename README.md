# MAA Website

- 官网首页: [maa-website（本仓库）](https://github.com/MaaAssistantArknights/maa-website) -> <https://maa.plus>
- 文档站: [MAA主仓库/docs](https://github.com/MaaAssistantArknights/MaaAssistantArknights/tree/dev/docs) -> <https://docs.maa.plus>

> 注意：文档站的评论区使用此仓库的 Discussions

## Local Development

- `apps/web` MAA official website, build with `React`, host path `/`

### Prerequisite

- Node.js `^24.4.1`
- pnpm `^10.2`

Please [Install Node.js](https://nodejs.org/en/download) first, then resolve dependencies with `pnpm` in *ROOT* directory.

```shell
npm install -g pnpm@^10.2
pnpm install --frozen-lockfile --recursive
```

### Development Server

Execute in *ROOT* directory:

```shell
pnpm dev
```

- `apps/web` will be hosted on `http://localhost:3000`

### Code Linting
#### Overall

1. Prettier (global)

   Prettier is configured at the root of the repository.

   Its role is to enforce consistent code style and formatting across all apps/packages.

2. ESLint (per-app)

   ESLint is configured separately within each app/package.

   Its role is to enforce syntax rules, type checks, and framework-specific best practices (e.g., React rules).

#### Commands

Execute in *ROOT* directory:

- Lint check

```shell
pnpm lint              # Both (prettier -> eslint)
pnpm lint:format       # Use Prettier for code formatting
pnpm lint:code         # Use ESLint for JS/TS code
```

- Lint fix

```shell
pnpm lintfix           # Both (prettier -> eslint)
pnpm lintfix:format    # Use Prettier for code formatting
pnpm lintfix:code      # Use ESLint for JS/TS code
```

### Build

Execute in *ROOT* directory:

```shell
pnpm build
```

Build artifacts are in `./dist`. You can try to host it locally with:

```shell
python -m http.server -d ./dist --bind 127.0.0.1
```

or any other ways that you prefer.
