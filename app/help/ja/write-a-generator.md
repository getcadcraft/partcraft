---
title: ジェネレーターの作成
summary: ジェネレーターは、入力を宣言するコメント行を持つ CraftScript、Lua、Python のスクリプトです。入力がフォームになる仕組み、スクリプトが残すべきもの(body、sheet、problems)、小さな完全な例、そしてスクリプトをジェネレーターとして開く方法を説明します。
keywords: ジェネレーター、作成、スクリプト、CraftScript、ヘッダー、入力、@input、@generator、body、シート、問題、to_body、mfg_check、データシート、例、ラティス、フィールド
from: ed8a5ed8
---

ジェネレーターは、先頭にいくつかのコメント行を付けた通常のスクリプト([CraftScript](topic:craftscript)、Lua、Python)です。PartCraft はコメントを読み取ってフォームを作成します。スクリプトは、設定済みの変数として入力を読み取ります。

## ヘッダー

次のように、コメント行に記述します(CraftScript では `%`、Lua では `--`、Python では `#`)。

```
% @generator 熱交換器
% @input mdot: kg/s = 0.2 [0.01 .. 10] "質量流量"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "曲面"
% @input solid: = true
% @input note: = "text"
```

入力は `name: unit = default` の形式で記述します。必要に応じて、範囲 `[min .. max]`(数値はこの範囲内に収められます)、選択肢の一覧 `{a, b, c}`、引用符で囲んだラベルを続けることもできます。単位はフォームに表示するラベルにすぎません。**値はその単位で渡されます**。そのため、SI 単位が必要なスクリプトは変換を行う必要があります。`to_si(value, 'kg/s', 'kg/s')` は、単位が想定どおりの意味かも確認します。名前には英字、数字、アンダースコアを使えます。`body`、`sheet`、`problems` は予約されています。

## スクリプトが残すもの

| 変数 | 内容 |
|---|---|
| `body` | **必須。** 表面メッシュです。通常は `[body, info] = to_body(field, h)` で作成します。実行の終了時に修復および検査されます。 |
| `sheet` | 省略可能。構造体で、各フィールドは数値またはテキスト、または `value`、`unit`、`ref`、`note` を持つ構造体です。データシートになります。 |
| `problems` | 省略可能。`mfg_check(field, 'sls', struct(), h)` の `problems` セル、または独自の項目です。チェックと問題の一覧に送られます。 |

## 小さな完全な例

```
% 壁のある中空の立方体です。
% @generator 中空の立方体
% @input side: mm = 12 [4 .. 40] "辺"
% @input wall: mm = 1.5 [0.5 .. 5] "壁"
% @input h: mm = 0.5 [0.25 .. 2] "ボクセルサイズ"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

閉じた箱ができ、チェックでは内部の密閉部分が粉末プロセスのエラーとして報告されます。ボクセルサイズ `h` は、残したい最も薄い壁の 3 分の 1 以下にしてください。約3ボクセルを下回ると、壁は信頼できません。

## フィールド

`field_sphere`、`field_box`、`field_capsule`、`field_cylinder`、`field_torus`、`field_revolve`(断面形状から作成する回転体)、`tpms`(ジャイロイド、シュワルツP、ダイヤモンドの各曲面。セルサイズと壁の厚さは部品全体で変えられます)、`lattice` と `lattice_beams`、`along`(経路に沿った丸い流路)、ブール演算の `field_union`、`field_intersect`、`field_subtract`、滑らかな `field_blend`、および `field_offset`、`field_shell`、`field_move`、`field_rotate`、`field_scale`。`sample(f, points)` は各点の符号付き距離を返します(内側は負)。`field_voxel` はソルバー用のボクセルを返します。[フィールド](topic:fields)では、フィールドとは何かを説明しています。

知っておくべき制限事項: 板状の壁の厚さがセルの約4分の1を超えると流路が塞がれます。3ボクセル未満の細いフィーチャーはくびれることがあります。`along` は丸い円錐をつなぐため、半径が急に変わると膨らみが生じます(断面形状には `field_revolve` を使用してください)。

## スクリプトをジェネレーターとして開く

{{ui:エンジニア}}ワークスペースで{{ui:開く}}をクリックし、ファイルを選択します。`@generator` も `@input` の行もないスクリプトは受け付けられません。設定する対象がないためです。ジェネレーターはこのブラウザーに保存されます(最大20件)。{{ui:削除}}で削除できます。ジェネレーターから作成したボディには、スクリプトのコピーが含まれるため、部品はそれに依存しません。

ファイルに複数のジェネレーターを含めることもできます。その場合は JSON バンドルを使用します: `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`。
