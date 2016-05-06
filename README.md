# vscode-markdown-preview-plus

Visual Studio Codeで新たなMarkdownファイルを開いたときに、自動的にプレビュー表示も開くextensionです。毎回手動でpreview side-by-side(⌘+K V)をタイプするのが面倒になったので作りました。

# Running Extension

インストールせずに動作を試したり、改造したりしたい場合は次のようにします。

``` shellsession
$ git clone https://github.com/hnw/vscode-markdown-preview-plus.git
$ cd vscode-markdown-preview-plus.git
$ npm install
$ code --disable-extensions .
```

VSCode起動後`F5`でextensionがデバッガ動作します。

# Packaging Extension

下記のコマンドでプロジェクトディレクトリに`*.vsix`（今回なら`vscode-markdown-preview-plus-0.0.1.vsix`）ファイルが出来ます。これがVSCodeのextension packageになります。

``` shellsession
$ npm install -g vsce
$ vsce package
```

# Installing Extension

``` shellsession
$ code vscode-markdown-preview-plus-0.0.1.vsix
```

# To Do

- エディタ側で編集している場所とプレビュー画面の表示箇所の同期を取りたい（現状だとiframe内の操作はできない？）
