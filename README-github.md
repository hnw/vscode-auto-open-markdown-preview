# vscode-auto-open-markdown-preview

Visual Studio Codeで新たなMarkdownファイルを開いたときに、自動的にプレビュー表示も開くextensionです。毎回手動でpreview side-by-side(⌘+K V)をタイプするのが面倒になったので作りました。

# Running Extension

インストールせずに動作を試したり、改造したりしたい場合は次のようにします。

``` shellsession
$ git clone https://github.com/hnw/vscode-auto-open-markdown-preview.git
$ cd vscode-auto-open-markdown-preview
$ npm install
$ code --disable-extensions .
```

VSCode起動後`F5`でextensionがデバッガ動作します。

# Packaging Extension

下記のコマンドでプロジェクトディレクトリに`*.vsix`（今回なら`vscode-auto-open-markdown-preview-0.0.1.vsix`）ファイルが出来ます。これがVSCodeのextension packageになります。

``` shellsession
$ npm install -g vsce
$ vsce package
```

# Installing Extension

``` shellsession
$ code vscode-auto-open-markdown-preview-0.0.1.vsix
```
