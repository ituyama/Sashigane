# Sashigane インストール（macOS）

## ダウンロード

[Releases](https://github.com/ituyama/Sashigane/releases) からお使いの Mac 向けファイルを取得してください。

| ファイル | 対象 |
|---------|------|
| `Sashigane-*-universal.dmg` | Apple Silicon / Intel 両対応（推奨） |
| `Sashigane-*-universal-mac.zip` | ポータブル版 (.app) |

## 初回起動で「壊れているため開けません」と出る場合

GitHub から取得した未公証アプリでは macOS がブロックすることがあります。次のいずれかで起動できます。

### 方法 A（推奨）

1. `Sashigane.app` を **右クリック**（または Control + クリック）
2. **「開く」** を選択
3. ダイアログで再度 **「開く」**

### 方法 B（ターミナル）

```bash
xattr -cr /Applications/Sashigane.app
open /Applications/Sashigane.app
```

`/Applications/` 以外に置いた場合はパスを読み替えてください。

## 開発者向けビルド

```bash
npm install
npm run prepare-icon
npm run build
```

公証（Notarization）付きの配布には Apple Developer Program の証明書が必要です。
