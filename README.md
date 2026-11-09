# Orimio 公式ページと公開データ

OrimioはiPhone向けのRSSリーダーです。このリポジトリでは、[公式ページ](https://s6unkun.github.io/orimio-public/)と、公開するRSSカタログ・iOS版の配信情報を管理します。GitHub Pagesは `main` ブランチのルートを配信します。

## RSSカタログ

[`data/RecommendedFeeds.json`](data/RecommendedFeeds.json) は、サイト名、Orimioで作成した短い説明、配信元のHTTPSフィードURL、テーマ、検索用の別名、表示順を収録しています。記事本文や配信元の画像は収録していません。配信元の確認先は[掲載元一覧](SOURCES.md)に記載します。

候補の追加・変更時は、配信元の案内と利用上の記載、HTTPSでの取得、OrimioのRSSCoreでの記事の読み取りを確認します。候補を追加しても既存の `id` は変更せず、同じIDやフィードURLを重複させないでください。

## iOS版の配信情報

[`data/app-version.json`](data/app-version.json) を、App Storeで利用者がダウンロードできることを確認してから更新します。

| 項目 | 入れる値 |
| --- | --- |
| `version` | App Storeで公開されたバージョン |
| `releasedAt` | 公開日。形式は `YYYY-MM-DD` |
| `appStoreURL` | 公開済みの `https://apps.apple.com/` のアプリページURL |

公開前は3項目を `null` にします。公開後は3項目を同時に更新します。GitHub Pagesへの反映後、公式ページにバージョンと公開日が表示され、ダウンロードリンクが対象アプリを開くことを確認します。RSSカタログの更新時に配信情報を変える必要はありません。
