---
title: 可编辑的后处理器
summary: 后处理器是一个简短的文本文件，将刀具路径转换为适用于你的数控系统的 G 代码。复制一个内置后处理器，修改所需的行（行号、换刀、回零移动、结束代码），边输入边查看其写出的 G 代码，并与零件一同保存。
keywords: 后处理器, post, postprocessor, G代码, NC, GRBL, LinuxCNC, 编辑后处理器, 自定义后处理器, cpost, 换刀, M6, G43, 固定循环, 行号, 模态, 事件, 变量
from: c78d0cae
---

同一条刀具路径，对不同的数控系统必须以不同的方式写出：行号或无行号，`M6`或暂停，`G28`或`G53`，`M30`或`M2`。**后处理器**是说明这些差异的简短文本。PartCraft 的三种内置后处理器（Fanuc 式、GRBL 和 LinuxCNC）均以此格式编写，因此你自己的后处理器可以从其中一个副本开始。

切削前，请在机床自身的模拟器中检查输出，并先在毛坯上方空切。内置后处理器所写的内容与本格式出现之前完全一致（测试会逐字节比对数百个程序的输出），但这里的任何内容都未在你的机床上验证，而你修改过的后处理器需要由你自行验证。

## 制作后处理器

在制造工作空间中，于**后处理器**下：

- 在内置数控系统上点击{{ui:编辑后处理器…}}会打开**你自己的副本**。在你自己的后处理器上，它会打开该后处理器。
- {{ui:新建后处理器…}}从一个包含所有事件的小型空白后处理器开始。
- {{ui:导入后处理器文件…}}读取`.cpost`文本文件（在编辑器中点击**另存为文件…**得到的文件）。

编辑器显示文本、说明其是否可读（以及哪一行有误）的提示行，以及你输入时后处理器写出的 G 代码。**预览方式**选择一个运行全部事件的小型示例程序，或本零件自身的程序。{{ui:保存}}会将后处理器保存在零件文件中（最多 20 个后处理器），并将其选为数控系统。后处理器随零件一起保存；若要在其他零件中使用，请将其保存为文件，然后在该零件中导入。

## 后处理器的样子

```
post mymill
name 我的铣床 (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

以`//`开头的行以及空行会被忽略。文件顶部为设置；然后是每个事件的`on <event>`块，以`end`结束。省略的事件不写出任何内容。

| 设置 | 含义 |
|---|---|
| `post <id>` | 后处理器的 id：字母、数字、`-` 与 `_` |
| `name <text>` | 数控系统列表中显示的名称 |
| `extension <ext>` | 文件扩展名：nc、ngc、tap … |
| `line-numbers 10` / `off` | 每个`emit`行上的`N10`、`N20` …，或无行号 |
| `decimal-point yes` / `no` | 写作`10.`而非`10`（注释永不带小数点） |
| `canned-cycles yes` / `no` | `no`：孔写为其所代表的 G0/G1 移动 |
| `modal <group> <words>` | 某组的词（如`modal motion G0 G1 G2 G3`），仅在其改变时写出 |

## 事件

按以下顺序为一个程序运行：`start`；然后对每项操作依次为`operation`、`tool-change`（换刀时）、`spindle`（转速改变时）、`approach`（移动至第一点的移动，位于第一次快速移动之前）、`coolant-on`，接着其移动为`rapid`、`feed`与`arc`，每个固定循环为`cycle-start`，每个孔一次`cycle-hole`，再加`cycle-end`；最后是`end`。

除三轴以外的部分，还有更多事件（没有某事件的后处理器会拒绝此类程序，并指出其所缺的事件）：

| 事件 | 时机 | 其变量 |
|---|---|---|
| `index` | 在刀具方向与上一项不同的操作之前，以及带旋转轴的机床上第一项操作之前 | `rot.a`、`rot.b`、`rot.c`（要移动到的位置；机床没有的轴为空）、`first.x`、`first.y`、`first.z` |
| `rapid-rotary`、`feed-rotary` | 切削时旋转轴运动的操作的移动 | `x`、`y`、`z`、`rot.a`、`rot.b`、`rot.c`、`f`、`rot.moved`、`inverse`（当进给必须为反时间时为 yes）、`invf`（1/分钟） |
| `rotary-end` | 此类操作之后 | |
| `probe-move` | 测头触发时停止的移动 | `x`、`y`、`z`、`f`、`probe.n`（1 至 4）、`probe.axis`（x、y 或 z）、`probe.k`（1、2 或 3） |
| `probe-set` | 一次探测循环的触碰之后 | `probe.kind`（`"z"`、`"x"`、`"y"` 或`centre`）、`probe.action`（`set` 或 `measure`）、`probe.expect`、`probe.cx`、`probe.cy` |
| `thread` | 车床上的螺纹移动 | `x`、`z`、`thread.lead` |

每个事件同样可用：`kin`（none、a、b、ac、bc）、`rotary`与`tcp`（yes 或 no，来自装夹中的机床）、`pivot.x`、`pivot.y`、`pivot.z`、操作的`op.tilt`与`op.turn`，以及车床上的`spin.mode`（css 或 rpm）、`spin.css`、`spin.max`与`tool.nose`。值为空的带字母词（如在没有 A 轴的机床上的`A{rot.a}`）会从该行中省略。应以引号内的文本与 x、y、z 比较（`if probe.kind == "z"`）：不加引号时，它们是移动的坐标。

后处理器顶部另有两行可使其成为车床后处理器：`machine lathe`（此时仅写出 X 与 Z，并拒绝铣削路径，正如铣削后处理器拒绝车削路径）以及`lathe-x diameter`或`lathe-x radius`。

每个事件可使用其自身移动类型的变量，写作`{name}`：程序（`name`、`program`、`setup.axis`、`setup.origin`、`setup.coolant`）、毛坯（`stock.kind`、`stock.d`、`stock.sx`、`stock.sy`、`stock.sz`、`stock.minx` … `stock.maxz`）、刀具（`tool.number`、`tool.desc`、`tool.kind`、`tool.d`、`tool.flutes`、`tool.fluteLen`）、操作（`op.name`、`op.type`）、`rpm`、移动的点（`x`、`y`、`z`、`f`，以及`moved`：某轴改变时为 true）、圆弧（`arc.g` 为 2 或 3、`arc.i`、`arc.j`、`arc.cx`、`arc.cy`）与孔（`hole.x`、`hole.y`、`hole.z`、`hole.r`、`hole.q`、`hole.return`、`hole.first`、`cycle.kind`、`cycle.init`、`feed`）。编辑器的**事件与变量**列表显示每个事件可见的变量。可读写的状态：`cool`、`offset`，以及`at.x`、`at.y`、`at.z`、`at.f`（最后写出的值）。

## 语句

| 语句 | 作用 |
|---|---|
| `raw TEXT` | 原样写出的一行（无行号） |
| `comment TEXT` | `(TEXT)`，其中的非 ASCII 字符与括号会被去除 |
| `emit WORD WORD …` | 一行词；输出为空的词被省略；无词则无行 |
| `word WORD …` | 将词添加到正在构建的行中；单独的`emit`结束该行 |
| `if EXPR` … `else` … `end` | 条件：`a == b`、`a != b`、`not a`、`a and b`、`a or b`、`a??b`（a，否则 b） |
| `for tool in tools` … `end` | 对程序所用的每把刀具执行一次 |
| `set NAME EXPR` | 记住一个值（`set offset tool.number`） |
| `reset NAME …` | 忘记模态词（某组、地址字母如`Z`，或`at.z`） |
| `do rapid X Y Z` | 为一个点运行`rapid`事件 |

词是带有`{variable|filter}`空位的文本。过滤器为`upper`、`lower`、`pad:N`（补零）、`cut:N`（前 N 个字符）、`safe`（注释安全的 ASCII）与`int`。以`~`结尾的词是**模态**的：仅当其与上次写出的内容不同时才写出（`G1~`、`X{x}~`）。以`~!`结尾的词每次都写出，并且仍被记住。不是变量的名称按原文处理（`G81`、`mist`）。数字四舍五入到 0.001 mm，并去掉末尾的零。

## 后处理器做不到的事

它只决定移动如何写出，仅此而已。它不能改变刀具路径、调整操作顺序、分割圆弧、增加轴、了解你机床的行程或运动学，也不能对坐标做运算（没有`+`）。旋转位置本身来自装夹中描述的机床，而非后处理器：后处理器可以改变其符号或字母，但不能改变运动学。刀具寿命与子程序循环尚未实现。其他程序的`.cps`式后处理器文件无法加载：这是另一种更简单的格式。
