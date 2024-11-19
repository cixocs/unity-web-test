# Unity6 web build with Astro.js

Unity 6でWebプラットフォーム対応されたので、Astro.js環境下で試してみたものです。

## Requirements

* [Astro.js](https://astro.build/) v4.16.12
* [Node.js](https://nodejs.org/ja) v20.16.0 (LTS)

## Getting Started

### 依存関係のインストール

```sh
npm i
```

### Devサーバー立ち上げ・開発

Portは、`3000`になります。

```sh
npm run dev
```

## Development Note

* [Happy Harvest](https://assetstore.unity.com/packages/essentials/tutorial-projects/happy-harvest-2d-sample-project-259218) をWebプラットフォームビルドしたものを読み込んでます。
* Astro.js側では、[react-unity-webgl](https://github.com/jeffreylanters/react-unity-webgl) というライブラリを用いて表示テストしています（結局React...）。

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
