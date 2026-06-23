# Gramsci Portfolio Site - デプロイガイド

## 実装完了内容

- ✅ Next.js 14 + React + TypeScript 完全実装
- ✅ Tailwind CSS スタイリング
- ✅ 16個のポートフォリオプロジェクト
- ✅ SEO最適化（Metadata、Sitemap、robots.txt、JSON-LD）
- ✅ パフォーマンス最適化（画像キャッシュ、セキュリティヘッダー）
- ✅ Contact フォーム（Formspree 対応）
- ✅ Google Analytics 対応
- ✅ OGP 画像作成

---

## デプロイ手順

### ステップ 1: GitHub にプッシュ

```bash
# GitHub で新規リポジトリを作成：
# https://github.com/new
# リポジトリ名: gramsci-portfolio

# ローカルで実行：
cd /Users/shokotanaka/gramsci

# GitHub にプッシュ
git remote add origin https://github.com/{USERNAME}/gramsci-portfolio.git
git branch -M main
git push -u origin main
```

### ステップ 2: Vercel でデプロイ

1. **https://vercel.com** にアクセス
2. GitHub アカウントでログイン
3. **Add New → Project** をクリック
4. GitHub リポジトリ「gramsci-portfolio」を選択
5. **Project settings** で以下を設定：
   - Framework: Next.js（自動検出）
   - Build Command: `next build`（デフォルト）
   - Output Directory: `.next`（デフォルト）

6. **Environment Variables** を追加：
   ```
   NEXT_PUBLIC_SITE_URL = https://gramsci.studio
   NEXT_PUBLIC_GA_ID = (後で設定)
   ```

7. **Deploy** をクリック

### ステップ 3: ドメイン設定（gramsci.studio）

1. **Google Domains** または **Namecheap** で `gramsci.studio` を購入
2. Vercel ダッシュボール → **Domains** → **Add Domain**
3. `gramsci.studio` を入力
4. DNS レコード設定（Vercel が案内）
5. SSL/TLS は Vercel が自動生成

### ステップ 4: Contact フォーム - Formspree 設定

1. **https://formspree.io** にアクセス
2. アカウント作成（メール: tt@gramsci.jp）
3. 新規フォーム作成
4. フォーム ID を取得（例: `f/xxxxx`）
5. `components/ContactForm.tsx` を編集：
   ```tsx
   <form
     action="https://formspree.io/f/{FORM_ID}"
     method="POST"
     className="..."
   >
   ```
6. GitHub にプッシュ（Vercel が自動デプロイ）

### ステップ 5: Google Analytics 設定

1. **https://analytics.google.com** にアクセス
2. プロパティ作成（ドメイン: gramsci.studio）
3. **Measurement ID** を取得（G-XXXXXXXXXX）
4. Vercel ダッシュボール → **Settings** → **Environment Variables**
5. `NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX` を追加
6. Vercel が自動再デプロイ

---

## 本番前チェックリスト

- [ ] GitHub にプッシュ完了
- [ ] Vercel デプロイ完了
- [ ] ドメイン（gramsci.studio）購入・設定完了
- [ ] SSL/TLS 有効化確認
- [ ] Contact フォーム動作確認（Formspree 設定）
- [ ] Google Analytics 設定完了
- [ ] ページ表示確認（全ページ）
- [ ] Lighthouse スコア確認（> 80）
- [ ] モバイル表示確認

---

## デプロイ後（1-2週間以内）

1. **Google Search Console 登録**
   - サイトマップ送信: https://gramsci.studio/sitemap.xml
   - robots.txt 確認

2. **SNS メタデータ検証**
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator

3. **パフォーマンス監視**
   - PageSpeed Insights: https://pagespeed.web.dev/
   - Lighthouse: Chrome DevTools

---

## トラブルシューティング

**ビルドエラー**
```bash
npm install
npm run build
```

**環境変数エラー**
- Vercel ダッシュボールで環境変数を確認
- NEXT_PUBLIC_* プレフィックス必須

**Contact フォーム が動作しない**
- Formspree フォーム ID を確認
- action URL が正しいか確認

---

## 今後の改善

- [ ] Next.js 16 へのアップグレード（脆弱性対応）
- [ ] ドメイン gramschi.jp への切り替え（オプション）
- [ ] ブログ機能追加
- [ ] ケーススタディページ追加

---

**デプロイは完全に自動化されています。各ステップでの設定が完了すれば、サイトは自動的に公開されます。**
