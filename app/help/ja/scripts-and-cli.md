---
title: スクリプトとコマンドライン
summary: 部品全体を読み取り可能なテキストとして書き出すPartCraftスクリプト形式（.pcscript）と、画面を使わずに部品を作成、変更、ロールバック、チェックするpartcraftコマンドラインツールを説明します。
keywords: スクリプト, pcscript, テキスト, コマンドライン, cli, ターミナル, バッチ, 自動化, チェック, lint, ビルド, 書き出し, バージョン管理, 差分, パラメトリックスクリプト
from: c56df222
---

慎重なモデリングは、ボタンの操作よりも規律が重要です。テキストで書かれた部品は、読み取り、レビュー、行単位での比較、スクリプトによる再構築ができます。PartCraftは双方向に対応しています。どの部品もスクリプトとして書き出せ、スクリプトから部品を作成できます。

## アプリ内で

{{ui:パラメーター}}タブの**スクリプト**の下で：

- {{ui:スクリプトとして保存}}を選ぶと、開いている部品が `<name>.pcscript` としてダウンロードされます。
- {{ui:スクリプトを開く}}は、`.pcscript` ファイルから部品を作成します。誤りがある場合は行番号とともに報告され、何も置き換えられません。

## スクリプトの形式

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Plate width
param thick = 8
param bolt = 8.5
param margin = bolt * 1.5

sketch Plate
  on top
  point a 0, 0
  point b 120, 0
  point c 120, 60
  point d 0, 60
  line bottom a b
  line right b c
  line top c d
  line left d a
  coincident a O
  horizontal bottom
  horizontal top
  vertical left
  vertical right
  distance bottom = width
  distance left 60

extrude Base
  sketch Plate
  depth = thick

sketch HoleCentres
  on face Base end
  point h1 12, 12
  hdistance O h1 = margin
  vdistance O h1 = margin

hole Bolts
  sketch HoleCentres
  d = bolt
  through
```

規則：

- 行の左端で文が始まります。文の種類は `pcscript`、`part`、`param`、フィーチャーの種類（`sketch`、`extrude`、`revolve`、`hole`、`lpattern`、`cpattern`、`mirror`、`fillet`、`chamfer`、`shell`、`import`、およびそれ以降の新しい種類）で、その後に名前が続きます。または `rollback <feature>` です。
- インデントされた行は、その上の文の設定です。単独で書かれた設定（`through`、`reverse`、`suppressed`）は「はい」を意味します。
- 数値の設定は、数値、または `=` と式で指定します。式を指定すると方程式になります：`depth = thick`。
- スケッチ内では、`on` が平面を指定します（`front`、`top`、`right`、`face Base end`、`face Revolve1 side l3`）。形状は `point <name> x, y`、`line <name> <point> <point>`、`circle <name> <centre> <radius>`、`arc <name> <centre> <start> <end>`（反時計回り）、または `spline <name> fit|control <points>` で指定します。拘束は種類と、結び付ける名前で指定します（`O` は原点です）。寸法は値、または `= expression` で終わります。
- 形状または拘束の行の省略可能な設定は、行末の角かっこ内に `;` で区切って書きます：`[construction]`、`[side -1; label 5, 3]`。
- `#` はコメントを開始します（行頭、または空白の後）。スペースを含む名前は二重引用符（"）で囲みます。
- フィーチャーのIDは、書かれた順にf1から数えます。エッジと面の参照はこのIDを使います。例：`edge f2.side:l3 f2.end [at 50, 0, 10]`。
- 形式に専用の単語がない設定は、`json` と値で書きます。読み込み時には、そのままの値として扱われます。

アプリから保存したスクリプトには、すべての設定が含まれるため、同じ部品として開けます。インポートされたSTEPソリッドは、アプリから保存した場合はスクリプト内に書き込まれ、コマンドラインでは `step-file` で指定した名前の別の `.step` ファイルとして書き出されます。

## コマンドラインツール

このツールは Node.js 24 がインストールされたコンピューターで、CadCraft のソースのコピーから実行します：`node tools/partcraft-cli/partcraft.mjs <command>`。開発者向けのツールで、アプリと同じモジュールを使用します。部品は `.partcraft.json` ファイルまたは `.pcscript` スクリプトです。

| コマンド | 内容 |
|---|---|
| `info <part>` | フィーチャー、パラメーター、ロールバックバー、作成されたソリッドの体積とサイズ |
| `params <part>` | すべてのパラメーターと方程式、およびその値 |
| `set <part> width=150 Base.depth==thick` | 順方向：パラメーターを変更、数値をリンク（`==` または式）、単純な数値を設定 |
| `drive <part> Base.depth=12` | 逆方向：駆動される数値の背後にあるパラメーターを解く（`--prefer width` で指定） |
| `build <part> --out x.step` | `.step`、`.stl`、`.3mf`、`.json`、`.pcscript` またはマクロ（`.swb`）を書き出す |
| `build <part> --table sizes.csv --out-dir sizes` | 設計テーブルの行ごとに1ファイル |
| `variants <part> --out-dir d` または `--zip f.zip` | すべての構成を STEP、IFC、DWG、プレビュー、バリアント表、ライブラリ項目として出力（`--only "A,B"`、`--formats step,ifc,dwg,preview`、`--no-item`）。[バリアントパックの作成](topic:variant-pack)を参照 |
| `script <in.pcscript> -o part.json` | スクリプトから部品へ |
| `to-script <part> -o part.pcscript` | 部品からスクリプトへ |
| `rollback <part> [<feature>]`、`forward <part> [--end]` | ファイル内のロールバックバーを移動 |
| `check <part> [--strict]` | 規律チェック（下記） |

`build` には、`--set name=value`（このビルドのみ）と `--upto <feature>` も指定できます。すべてのコマンドは `--json` を指定できます。終了コード：0 は正常、1 は問題が見つかったこと、2 はコマンドの入力誤りを示します。スクリプトがその場で書き換えられることはありません。変更したコピーを保存するには `-o` を指定してください。

## チェック

`check` は、後から部品を変更しにくくする要因を報告します：

| 検出結果 | 扱い |
|---|---|
| スケッチが過剰定義（拘束が矛盾または重複している） | エラー |
| ビルドできないフィーチャー | エラー |
| エラーのあるパラメーターまたは方程式、または互いに依存しているパラメーター | エラー |
| 自由度とともに表示される、拘束不足のスケッチ | 警告 |
| どのパラメーターも駆動していない、フィーチャーと寸法に直接入力された数値 | 警告 |
| どこでも使用されていないパラメーター | 警告 |
| 抑制されたフィーチャー。ロールバックバーが末尾にない | 警告 |

`--strict` を指定すると、すべての警告がエラーとして扱われます。そのため、ビルドスクリプトは完全に駆動されていない部品を拒否できます。

:::note
`.swb` マクロ出力は、多くの工房が使用する部品モデラー向けです。そのプログラム内で実行すると、そこで部品を作成します。ここではそのプログラムで実行されていません（当社のサーバーでは利用できません）。そのため、未検証のものとして扱ってください。
:::
