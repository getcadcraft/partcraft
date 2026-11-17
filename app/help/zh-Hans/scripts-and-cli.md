---
title: 脚本与命令行
summary: PartCraft 脚本格式（.pcscript），以可读文本形式完整描述一个零件；以及 partcraft 命令行工具，无需屏幕即可构建、修改、回滚和检查零件。
keywords: 脚本, pcscript, 文本, 命令行, cli, 终端, 批处理, 自动化, 检查, lint, 构建, 导出, 版本控制, 差异, 参数化脚本
from: c56df222
---

审慎的建模更多取决于规范，而不是按钮。以文本形式编写的零件可以阅读、审查、逐行比较，并由脚本重新构建。PartCraft 双向支持：任何零件都可以写成脚本，脚本也可以构建零件。

## 在应用中

在 {{ui:Parameters}} 选项卡下的 **脚本** 中：

- {{ui:Save as script}} 将打开的零件下载为 `<名称>.pcscript`。
- {{ui:Open script}} 从 `.pcscript` 文件构建零件。出错时会报告行号，且不会替换任何内容。

## 脚本格式

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

规则：

- 行首无缩进的行表示一条语句：`pcscript`、`part`、`param`、特征类型（`sketch`、`extrude`、`revolve`、`hole`、`lpattern`、`cpattern`、`mirror`、`fillet`、`chamfer`、`shell`、`import` 以及较新的类型），后跟其名称，或 `rollback <feature>`。
- 缩进的行是上一条语句的设置。单独的设置（`through`、`reverse`、`suppressed`）表示"是"。
- 数值设置是一个数字，或 `=` 加表达式（即构成方程）：`depth = thick`。
- 在草图中，`on` 指定平面（`front`、`top`、`right`、`face Base end`、`face Revolve1 side l3`）；几何图形为 `point <name> x, y`、`line <name> <point> <point>`、`circle <name> <centre> <radius>`、`arc <name> <centre> <start> <end>`（逆时针）或 `spline <name> fit|control <points>`；关系由其类型和所连接的名称组成（`O` 为原点）；尺寸以其值或 `= 表达式` 结尾。
- 几何或关系行的可选设置放在行末的方括号中，以 `;` 分隔：`[construction]`、`[side -1; label 5, 3]`。
- `#` 开始注释（位于行首或空格之后）。含空格的名称放在"双引号"中。
- 特征编号从 f1 开始，按书写顺序计数。边和面的引用使用这些编号，例如 `edge f2.side:l3 f2.end [at 50, 0, 10]`。
- 格式中没有对应关键字的设置写作 `json` 加一个值；读取时保持原样。

从应用中保存的脚本包含所有设置，因此打开后与原零件相同。从应用中保存的导入 STEP 实体会写入脚本内部；通过命令行时，则会作为单独的 `.step` 文件保存，文件名由 `step-file` 指定。

## 命令行工具

该工具在安装有 Node.js 24 的计算机上运行，需要 CadCraft 源代码的副本：`node tools/partcraft-cli/partcraft.mjs <命令>`。它是开发者工具，与应用使用相同的模块。零件为 `.partcraft.json` 文件或 `.pcscript` 脚本。

| 命令 | 功能 |
|---|---|
| `info <part>` | 特征、参数、回滚栏，以及已生成实体的体积和尺寸 |
| `params <part>` | 每个参数和方程及其值 |
| `set <part> width=150 Base.depth==thick` | 正向：修改参数，关联数值（`==` 或表达式），设置普通数值 |
| `drive <part> Base.depth=12` | 反向：求解驱动某个数值的参数（`--prefer width` 选择其中一个） |
| `build <part> --out x.step` | 写出 `.step`、`.stl`、`.3mf`、`.json`、`.pcscript` 或宏（`.swb`） |
| `build <part> --table sizes.csv --out-dir sizes` | 设计表每行生成一个文件 |
| `variants <part> --out-dir d` 或 `--zip f.zip` | 每个配置输出为 STEP、IFC、DWG 和预览图、变体表及库项目（`--only "A,B"`、`--formats step,ifc,dwg,preview`、`--no-item`）；参见[制作变体包](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | 脚本转零件 |
| `to-script <part> -o part.pcscript` | 零件转脚本 |
| `rollback <part> [<feature>]`、`forward <part> [--end]` | 移动文件中的回滚栏 |
| `check <part> [--strict]` | 规范检查（见下） |

`build` 还支持 `--set name=value`（仅用于本次构建）和 `--upto <feature>`。每个命令都支持 `--json`。退出代码：0 表示正常，1 表示发现问题，2 表示命令输入有误。脚本永远不会被原地改写：如需保存修改后的副本，请使用 `-o`。

## 检查

`check` 报告使零件日后难以修改的问题：

| 发现的问题 | 计为 |
|---|---|
| 过度定义的草图（关系冲突或重复） | 错误 |
| 无法构建的特征 | 错误 |
| 存在错误的参数或方程，或参数之间相互引用 | 错误 |
| 欠定义的草图及其自由度 | 警告 |
| 直接输入到特征和尺寸中、未被任何参数驱动的数值 | 警告 |
| 未被使用的参数 | 警告 |
| 已压缩的特征；回滚栏不在末尾 | 警告 |

`--strict` 会将所有警告视为错误，因此构建脚本可以拒绝未被完全驱动的零件。

:::note
`.swb` 宏输出面向大多数工厂使用的零件建模程序：在该程序中运行时，会在那里构建零件。此处未在该程序中运行（我们的服务器上没有该程序），因此请视为未经测试。
:::
