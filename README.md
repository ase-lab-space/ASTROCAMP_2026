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

[Conventional Commits](https://www.conventionalcommits.org/) に基づくプレフィックスを採用。

```
feat/* ──PR──▶ main ──PR──▶ release
(作業)        (統合・レビュー)   (本番デプロイ)
```

| ブランチ | 役割 | Vercel |
|---------|------|--------|
| `feat/*` | 新機能追加（機能要件） | PRごとにプレビューURL自動生成 |
| `fix/*` | バグ修正 | 同上 |
| `style/*` | デザイン・見た目の変更 | 同上 |
| `perf/*` | パフォーマンス改善 | 同上 |
| `chore/*` | 設定・依存関係等の雑務 | 同上 |
| `docs/*` | ドキュメント変更 | 同上 |
| `main` | 統合ブランチ。レビュー・動作確認用 | プレビューデプロイ |
| `release` | 本番ブランチ。安定版のみマージ | **本番デプロイ** (camp.ase-lab.space) |

### Issueテンプレートとブランチの対応

Issueテンプレートは **報告者向け**（3種+自由記述）。開発者がIssue内容から適切なブランチプレフィックスを選ぶ。

| Issueテンプレート | 自動ラベル | 対応ブランチ |
|----------------|----------|------------|
| 新機能リクエスト | `feature` | `feat/*` |
| バグ・不具合報告 | `bug` | `fix/*` |
| 改善提案 | `improve` | `style/*` または `perf/*` |
| 自由記述 | なし | 内容に応じて選択 |

### ワークフロー

1. 対応する GitHub Issue を作成する（なければ）
2. `main` から適切なプレフィックスのブランチを切る（`feat/○○`, `fix/○○`, `style/○○` 等）
3. 作業完了後、`main` へ PR を作成
   - PR本文に `Closes #Issue番号` を記載して Issue と紐づける
   - Vercel プレビューURLで動作確認
4. レビュー承認後、`main` にマージ → Issue が自動クローズ
5. 本番公開の準備ができたら `main` → `release` へ PR を作成
6. 関係者チェック後、`release` にマージ → 本番反映

### 命名規則

- **ブランチ**: `<prefix>/○○`
  - 例: `feat/seminar-pages`, `fix/routing-error`, `style/mobile-font-size`, `perf/image-optimization`
- **Issue → ブランチ対応例**: Issue #16「ゼミ詳細ページ」 → `feat/seminar-pages`

## デプロイ

Vercel で自動デプロイ。

- **本番**: `release` ブランチへのマージで自動デプロイ
- **プレビュー**: PR 作成時に自動でプレビューURLが生成される
