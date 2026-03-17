# CLAUDE.md

## Project Overview

ASTRO CAMP 2026 の公式Webサイト。3つのゼミ（衛星開発・衛星データ解析・宇宙事業分析）の紹介とニュース配信を行うSPA。

- **公開URL**: https://camp.ase-lab.space
- **デプロイ**: Vercel（SPA rewrite設定済み）
- **リポジトリ**: `git@github.com:Yukihisa-Imaizumi/ASTROCAMP_2026.git`

## Tech Stack

- **フレームワーク**: React 19 + Vite (rolldown-vite)
- **ルーティング**: react-router-dom v7
- **UI**: MUI v7, Emotion, Lucide React, Radix UI
- **コンテンツ描画**: react-markdown + remark-gfm（Markdownでゼミ詳細を記述）
- **アニメーション**: GSAP

## Development Commands

```bash
npm run dev       # 開発サーバー起動
npm run build     # プロダクションビルド
npm run preview   # ビルド結果のプレビュー
npm run lint      # ESLint実行
```

## Directory Structure

```
src/
├── assets/            # 画像・フォント・ロゴ
│   └── 企業ロゴ/       # 協賛企業ロゴ
├── components/        # 再利用コンポーネント
│   ├── Header.jsx      # ナビゲーションヘッダー
│   ├── Footer.jsx      # フッター
│   ├── Hero.jsx        # ヒーローセクション
│   ├── Activities.jsx  # ゼミ紹介カード一覧
│   ├── ActivityCard.jsx# 個別ゼミカード
│   ├── Carousel.jsx    # コンテンツカルーセル
│   ├── News.jsx        # ニュースセクション
│   ├── Background.jsx  # 固定背景
│   ├── ImageWithLoader.jsx # フェードイン画像ローダー
│   └── FloatingButton.jsx  # フローティングCTAボタン
├── data/              # データ定義
│   ├── PageData.jsx    # ★ ゼミ詳細ページのコンテンツ（Markdown）
│   ├── activities.jsx  # ゼミ紹介カードデータ
│   ├── slideData.jsx   # カルーセルスライド設定
│   ├── news.jsx        # ニュース記事データ
│   └── contents.jsx    # コンテンツデータ
├── pages/             # ページコンポーネント
│   ├── Top.jsx         # トップページ（Hero + Activities + Carousel + News）
│   ├── SeminarPage.jsx # ★ ゼミ詳細の汎用テンプレート（data propでコンテンツ注入）
│   ├── SatelliteDev.jsx    # 衛星開発ゼミ → SeminarPage + satelliteDevData
│   ├── SatelliteData.jsx   # 衛星データ解析ゼミ → SeminarPage + satelliteDataAnalysisData
│   ├── SpaceBusiness.jsx   # 宇宙事業分析ゼミ → SeminarPage + spaceBusinessData
│   ├── ComingSoon.jsx      # Coming Soonページ
│   ├── NewsPage.jsx        # ニュース一覧
│   └── NewsDetailPage.jsx  # ニュース詳細
└── App.jsx            # ルーター定義
```

## Routing

| Path | Component | 状態 |
|------|-----------|------|
| `/` | `Top` | 公開中 |
| `/satellite-dev` | `ComingSoon` | ★ 未切替（SatelliteDev.jsx は存在） |
| `/satellite-data` | `ComingSoon` | ★ 未切替（SatelliteData.jsx は存在） |
| `/space-business` | `ComingSoon` | ★ 未切替（SpaceBusiness.jsx は存在） |
| `/news` | `NewsPage` | 公開中 |
| `/news/:slug` | `NewsDetailPage` | 公開中 |

ゼミ詳細ページを有効化するには `App.jsx` のルートを `ComingSoon` から各コンポーネントに切り替える。

## Architecture: ゼミ詳細ページ

データ駆動アーキテクチャ:

1. `src/data/PageData.jsx` にゼミごとのデータオブジェクトを定義（title, image, sections[]）
2. 各sections の `body` は **Markdown文字列** で記述（react-markdown で描画）
3. `SeminarPage.jsx` が汎用テンプレートとして `data` prop を受け取り描画
4. 各ゼミページ（SatelliteDev.jsx等）は SeminarPage にデータを渡すだけのラッパー

### PageData.jsx のデータ構造

```javascript
export const satelliteDevData = {
    title: "衛星開発ゼミ",
    image: importedImage,  // src/assets/ から import
    sections: [
        { heading: "セクション見出し", body: `Markdown文字列` },
        // ...
    ]
};
```

### コンテンツ状況

| データ | export名 | 状態 |
|--------|----------|------|
| 衛星開発ゼミ | `satelliteDevData` | コンテンツ入力済み |
| 衛星データ解析ゼミ | `satelliteDataAnalysisData` | プレースホルダー（"準備中..."） |
| 宇宙事業分析ゼミ | `spaceBusinessData` | プレースホルダー（"準備中..."） |

## Git Branching Convention

- `feat/*` — 新機能ブランチ
- `fix/*` — バグ修正ブランチ
- `main` — メインブランチ

## Deployment

Vercel にデプロイ。PRを作成すると自動でプレビューURLが生成される。
`vercel.json` でSPAのリライトルールを設定済み。

## Styling

- ダークテーマ（宇宙をイメージした暗い背景）
- アクセントカラー: オレンジ (`--color-accent`) + シアン (`--color-accent-sub`)
- グラスモーフィズム（backdrop-blur）
- モバイル対応: 768px ブレークポイント
- ゼミ詳細ページのCSS: `src/pages/SeminarPage.css`
