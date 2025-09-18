# maa-website

- 官网首页: [maa-website（本仓库）](https://github.com/MaaAssistantArknights/maa-website) -> <https://maa.plus>
- 文档站: [MAA主仓库/docs](https://github.com/MaaAssistantArknights/MaaAssistantArknights/tree/dev/docs) -> <https://docs.maa.plus>

> 注意：文档站的评论区使用此仓库的 Discussions

## Projects

- `apps/web` MAA official website, build with `React`, host path `/`

## Local Development

Requirements:

- Node.js `^24.4.1`
- pnpm `^10.2`

[Install Node.js](https://nodejs.org/en/download) first, and resolve dependencies with `pnpm` in *ROOT* directory.

```shell
npm install -g pnpm@^10.2
pnpm update --recursive
pnpm install --recursive
```

Start a development server

- `apps/web` will be hosted on `http://localhost:3000`

```shell
pnpm dev
```

Lint code

```shell
pnpm lint              # Both
pnpm lint:prettier     # Use Prettier for code formatting
pnpm lint:js           # Use ESLint for JS/TS code
```

Lint fix

```shell
pnpm lintfix           # Both
pnpm lintfix:prettier  # Use Prettier for code formatting
pnpm lintfix:js        # Use ESLint for JS/TS code
```

Build release

```shell
pnpm build             # See files in ./dist
```
