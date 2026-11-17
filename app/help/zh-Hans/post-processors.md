---
title: 可编辑的后处理器
summary: 后处理器是一个简短的文本文件，它把刀具路径转换为控制系统使用的G代码。复制一个内置后处理器，修改所需的行（行号、换刀、回原点动作、程序结束代码），在输入时查看它生成的G代码，并与零件一同保存。
keywords: 后处理器, 后处理, G代码, NC, GRBL, LinuxCNC, 编辑后处理器, 自定义后处理器, cpost, 换刀, M6, G43, 固定循环, 行号, 模态, 事件, 变量
from: 36ab8a38
---

同一条刀具路径，对于不同的控制系统需要写成不同的格式：有行号或没有行号，`M6`或暂停，`G28`或`G53`，`M30`或`M2`。**后处理器**就是说明这些差异的简短文本。PartCraft 的三个内置后处理器（Fanuc风格、GRBL和LinuxCNC）都以这种格式编写，因此你自己的后处理器可以从其中一个复制开始。

切削前，请先在机床自己的仿真器中检查输出，并先让刀具在毛坯上方空走一遍。内置后处理器输出的内容与采用此格式之前完全一致（测试会逐字节比对数百个程序的输出），但这些内容尚未在你的机器上得到验证；你修改过的后处理器，需要由你自己来验证。

## 新建后处理器

在“制造”中，于**后处理器**下：

- {{ui:编辑后处理器…}}：对内置控制系统，打开**你自己的副本**；对你自己的后处理器，则打开该后处理器。
- {{ui:新建后处理器…}}：从一个包含所有事件的小型空白后处理器开始。
- {{ui:导入后处理器文件…}}：读取`.cpost`文本文件（即编辑器中**另存为文件…**得到的文件）。

编辑器会在你输入时显示文本、一行提示文本能否被正确读取（以及哪一行有误），以及该后处理器生成的G代码。**预览方式**可选择一个运行所有事件的小型示例程序，或本零件自身的程序。{{ui:保存}}会把后处理器保存在零件文件中（最多20个后处理器），并将其设为控制系统。后处理器随零件一起保存；若要在另一个零件中使用，请先将其另存为文件，再在那里导入。

## 后处理器的样子

```
post mymill
name My mill (.nc)
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

以`//`开头的行和空行会被忽略。文件开头是设置，然后每个事件对应一个`on <event>`块，并以`end`结束。省略的事件不会输出任何内容。

| 设置 | 含义 |
|---|---|
| `post <id>` | 后处理器的标识：字母、数字、`-`和`_` |
| `name <text>` | 控制系统列表中显示的名称 |
| `extension <ext>` | 文件扩展名：nc、ngc、tap … |
| `line-numbers 10` / `off` | 每个`emit`行带有`N10`、`N20` …，或不带行号 |
| `decimal-point yes` / `no` | 写作`10.`而非`10`（注释中从不带小数点） |
| `canned-cycles yes` / `no` | `no`：孔会被写成其所代表的G0/G1移动 |
| `modal <group> <words>` | 某组的字（如`modal motion G0 G1 G2 G3`），仅在其变化时才写出 |

## 事件

对于一个程序，事件按以下顺序运行：`start`；然后对每个操作依次运行`operation`、`tool-change`（换刀时）、`spindle`（转速改变时）、`approach`（移动到第一个点的动作，在第一个快速移动之前）、`coolant-on`，接着其移动依次为`rapid`、`feed`和`arc`；每个固定循环依次为`cycle-start`、每个孔一次`cycle-hole`，以及`cycle-end`；最后是`end`。

每个事件都可以使用其所属运动类型的变量，写作`{name}`：程序（`name`、`program`、`setup.axis`、`setup.origin`、`setup.coolant`），毛坯（`stock.kind`、`stock.d`、`stock.sx`、`stock.sy`、`stock.sz`、`stock.minx` … `stock.maxz`），刀具（`tool.number`、`tool.desc`、`tool.kind`、`tool.d`、`tool.flutes`、`tool.fluteLen`），操作（`op.name`、`op.type`），`rpm`，移动点（`x`、`y`、`z`、`f`，以及当某个轴改变时为真的`moved`），圆弧（`arc.g` 为2或3、`arc.i`、`arc.j`、`arc.cx`、`arc.cy`）和孔（`hole.x`、`hole.y`、`hole.z`、`hole.r`、`hole.q`、`hole.return`、`hole.first`、`cycle.kind`、`cycle.init`、`feed`）。编辑器中的**事件与变量**列表会显示每个事件可以访问哪些变量。可以读取和设置的状态有：`cool`、`offset`，以及`at.x`、`at.y`、`at.z`、`at.f`（最后一次写出的值）。

## 语句

| 语句 | 作用 |
|---|---|
| `raw TEXT` | 按原样输出的一行（无行号） |
| `comment TEXT` | 输出`(TEXT)`，并去除非ASCII字符和括号 |
| `emit WORD WORD …` | 一行字；输出为空的字会被省略；若没有字，则不输出该行 |
| `word WORD …` | 向正在构建的行添加字；单独的`emit`会结束该行 |
| `if EXPR` … `else` … `end` | 条件：`a == b`、`a != b`、`not a`、`a and b`、`a or b`、`a??b`（a 有值则用 a，否则用 b） |
| `for tool in tools` … `end` | 对程序所用的每把刀具执行一次 |
| `set NAME EXPR` | 记住一个值（`set offset tool.number`） |
| `reset NAME …` | 清除模态字（一组、如`Z`这样的地址字母，或`at.z`） |
| `do rapid X Y Z` | 对一个点执行`rapid`事件 |

字是带有`{variable|filter}`空位的文本。过滤器有`upper`、`lower`、`pad:N`（补零）、`cut:N`（取前N个字符）、`safe`（注释安全的ASCII）和`int`。以`~`结尾的字是**模态**的：只有与上次写出的内容不同时才会写出（`G1~`、`X{x}~`）。以`~!`结尾的字每次都会写出，并且仍会被记住。不是变量的名称会作为普通文本（`G81`、`mist`）。数值四舍五入到0.001 mm，并省略末尾的零。

## 后处理器不能做什么

它只决定移动如何写出，仅此而已。它不能更改刀具路径、调整操作顺序、分割圆弧、添加轴、了解机床的行程或运动学，也不能对坐标进行运算（没有`+`）。探测、刀具寿命和子程序循环，以及第4轴和第5轴输出和车削代码，均尚未实现。其他程序的`.cps`式后处理文件无法加载：此处使用的是另一种更简单的格式。
