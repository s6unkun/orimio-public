# Orimio 公式ページと公開データ

OrimioはiPhone向けのRSSリーダーです。このリポジトリでは、[公式ページ](https://s6unkun.github.io/orimio-public/)と、公開するRSSカタログ・広告ブロックルール・iOS版の配信情報を管理します。GitHub Pagesは `main` ブランチのルートを配信します。

## RSSカタログ

[`data/RecommendedFeeds.json`](data/RecommendedFeeds.json) は、サイト名、Orimioで作成した短い説明、配信元のHTTPSフィードURL、テーマ、検索用の別名、表示順を収録しています。記事本文や配信元の画像は収録していません。配信元の確認先は[掲載元一覧](SOURCES.md)に記載します。

候補の追加・変更時は、配信元の案内と利用上の記載、HTTPSでの取得、OrimioのRSSCoreでの記事の読み取りを確認します。候補を追加しても既存の `id` は変更せず、同じIDやフィードURLを重複させないでください。

## 広告ブロックルール

[`data/AdBlockingRules.json`](data/AdBlockingRules.json) は、Orimioの内部ブラウザーで使う[WebKitのコンテンツブロックルール](https://webkit.org/blog/3476/content-blockers-first-look/)です。公開後は、対応するOrimioを更新しなくても、次の起動後に記事を開いたときにアプリが更新を確認します。

- 広告の通信を止める場合は、対象の配信元を識別する `url-filter` と、`load-type` の `third-party` を指定します。`resource-type` には `script`、`image`、`raw`、`media`、`style-sheet`、`font`、`svg-document` のうち必要なものを指定します。
- 広告枠を隠す場合は `css-display-none` を使い、広告だけを識別できるセレクターを指定します。
- 変更時はJSONを256 KiB以内に収め、空の配列にしないでください。WebKitでルールをコンパイルし、広告のオン・オフ、通常の本文・画像・記事内リンクを確認します。
- マージ後は[GitHub Pagesの公開JSON](https://s6unkun.github.io/orimio-public/data/AdBlockingRules.json)を取得し、変更した内容が配信されることを確認します。

## iOS版の配信情報

[`data/app-version.json`](data/app-version.json) を、App Storeで利用者がダウンロードできることを確認してから更新します。

| 項目 | 入れる値 |
| --- | --- |
| `version` | App Storeで公開されたバージョン |
| `releasedAt` | 公開日。形式は `YYYY-MM-DD` |
| `appStoreURL` | 公開済みの `https://apps.apple.com/` のアプリページURL |

公開前は3項目を `null` にします。公開後は3項目を同時に更新します。GitHub Pagesへの反映後、公式ページにバージョンと公開日が表示され、ダウンロードリンクが対象アプリを開くことを確認します。RSSカタログの更新時に配信情報を変える必要はありません。
