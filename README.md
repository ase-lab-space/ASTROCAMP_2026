# ASTRO CAMP 2026 公式Webサイト

宇宙を本気で学ぶ実践プログラム「ASTRO CAMP 2026」の公式Webサイトです。

**公開URL**: https://camp.ase-lab.space

## Tech Stack

- React 19 + Vite
- react-router-dom v7
- MUI v7 / Emotion
- react-markdown + remark-gfm
- GSAP

## 開発コマンド

```bash
npm install       # 依存パッケージのインストール
npm run dev       # 開発サーバー起動
npm run build     # プロダクションビルド
npm run preview   # ビルド結果のプレビュー
npm run lint      # ESLint実行
```

## ブランチ戦略

```
feat/* ──PR──▶ main ──PR──▶ release
(作業)        (統合・レビュー)   (本番デプロイ)
```

| ブランチ | 役割 | Vercel |
|---------|------|--------|
| `feat/*` | 新機能の作業ブランチ | PRごとにプレビューURL自動生成 |
| `fix/*` | バグ修正ブランチ | 同上 |
| `improve/*` | デザイン・パフォーマンス改善ブランチ | 同上 |
| `main` | 統合ブランチ。レビュー・動作確認用 | プレビューデプロイ |
| `release` | 本番ブランチ。安定版のみマージ | **本番デプロイ** (camp.ase-lab.space) |

### ワークフロー

1. 対応する GitHub Issue を作成する（なければ）
2. `main` から `feat/○○` ブランチを切る
3. 作業完了後、`main` へ PR を作成
   - PR本文に `Closes #Issue番号` を記載して Issue と紐づける
   - Vercel プレビューURLで動作確認
4. レビュー承認後、`main` にマージ → Issue が自動クローズ
5. 本番公開の準備ができたら `main` → `release` へ PR を作成
6. 関係者チェック後、`release` にマージ → 本番反映

### 命名規則

- **ブランチ**: `feat/○○` (新機能) / `fix/○○` (バグ修正) / `improve/○○` (改善)
  - 例: `feat/seminar-pages`, `fix/routing-error`, `improve/mobile-font-size`
- **Issue → ブランチ対応例**: Issue #16「ゼミ詳細ページ」 → `feat/seminar-pages`

## デプロイ

Vercel で自動デプロイ。

- **本番**: `release` ブランチへのマージで自動デプロイ
- **プレビュー**: PR 作成時に自動でプレビューURLが生成される
