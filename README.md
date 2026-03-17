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
| `feat/*` | 機能開発・修正の作業ブランチ | PRごとにプレビューURL自動生成 |
| `main` | 統合ブランチ。レビュー・動作確認用 | プレビューデプロイ |
| `release` | 本番ブランチ。安定版のみマージ | **本番デプロイ** (camp.ase-lab.space) |

### ワークフロー

1. `main` から `feat/○○` ブランチを切る
2. 作業完了後、`main` へ PR を作成 → Vercel プレビューURLで確認
3. レビュー承認後、`main` にマージ
4. 本番公開の準備ができたら `main` → `release` へ PR を作成
5. 関係者チェック後、`release` にマージ → 本番反映

### ブランチ命名規則

- `feat/○○` — 新機能（例: `feat/seminar-pages`）
- `fix/○○` — バグ修正（例: `fix/routing-error`）

## デプロイ

Vercel で自動デプロイ。

- **本番**: `release` ブランチへのマージで自動デプロイ
- **プレビュー**: PR 作成時に自動でプレビューURLが生成される
