---
title: CraftScript 语言
summary: 一页看懂 CraftScript：矩阵、范围与索引、运算符、控制流、函数、结构体与单元格、注释、回显、错误与步数上限，以及它与 MATLAB 的区别。
keywords: CraftScript, 语言, 语法, 矩阵, 数组, 向量, 张量, 索引, end, 冒号, 范围, 运算符, 逐元素, 转置, if, for, while, switch, try, catch, 函数, 匿名函数, 结构体, 单元格, 注释, 回显, 分号, MATLAB, Octave, 移植
from: d072b7d5
---

CraftScript 是一种矩阵语言，写法与 MATLAB 相近，因此大多数经典数值代码（例如 88 行拓扑优化代码）只需稍作修改即可运行。它在[脚本工作空间](topic:craftscript)中运行，也可以从命令行运行。

## 值

| 类型 | 示例 | 说明 |
|---|---|---|
| 数字、数组 | `a = 3`、`v = [1 2 3]`、`A = [1 2; 3 4]` | 每个数字都是一个数组（1×1 的数组）。数组按列存储，最多 8 维 |
| 逻辑 | `A > 2`、`true` | 由 true/false 组成的数组；可用作索引 |
| 文本 | `'beam'`、`"beam"` | |
| 稀疏矩阵 | `sparse(i, j, v, n, n)` | 用于刚度矩阵 |
| 网格、场、模型 | `hexGrid(…)`、`part()`、`load('part.stl')` | `show` 绘制的内容 |
| 结构体 | `s.E = 210e3` | 命名字段 |
| 单元格 | `c = {1, 'two', [3 4]}` | 任意值组成的列表 |
| 函数句柄 | `f = @(x) x.^2` | |

## 数组与索引

- 范围：`1:5`、`0:0.1:1`。`linspace(a, b, n)`、`zeros(n, m)`、`ones`、`eye`、`rand`。
- 索引从 1 开始：`A(2, 3)`、`v(end)`、`A(:, 1)`（整列）、`A(:)`（全部排成一列）、`v(v > 0)`（逻辑索引）。
- 赋值超出末尾会扩展数组，与 MATLAB 相同：`v(10) = 1`。

## 运算符

- `+ - * / \ ^` 是矩阵运算（`A \ b` 求解）；`.* ./ .^` 逐元素运算。`'` 表示转置。
- 比较 `== ~= < <= > >=`；逻辑 `& | ~`（逐元素）和 `&& ||`（短路）。

## 控制流与函数

```
for k = 1:10
  if mod(k, 2) == 0
    continue
  elseif k > 7
    break
  end
end
while err > 1e-6, … end
switch kind
  case 'steel'
    E = 210e3;
  otherwise
    E = 70e3;
end
try
  x = A \ b;
catch e
  disp(e.message)
end
```

函数写在命令之后的脚本中，或写在以函数名命名的单独脚本标签页中：

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

名称的查找顺序为：变量、本部件中同名的脚本、分析库中的函数、内置函数。

## 回显、注释、输出

- 不带 `;` 的语句会打印其值；带 `;` 则保持安静。
- `%` 开始注释；单独成行的 `%{` 和 `%}` 可注释掉两者之间的行。
- `disp(x)`、`fprintf('%g\n', x)` 和 `display(x)` 输出到控制台。

## 错误与限制

- 错误会用通俗的语言说明问题，并给出行号（以及函数调用链）。
- 每次运行都有步数上限（在面板的“运行选项”中设置）；无限循环会以提示信息停止，或按{{ui:停止}}。
- 每个数组最多可容纳 1.34 亿个值。

## 与 MATLAB 不同之处

- 绘图命令把选项写在调用中：`plot(x, y, 'title', 'Error', 'xlabel', 'Step')`。`figure`、`hold`、`axis`、`title(…)` 等命令可以接受，但不起任何作用。
- 不支持 `input` 和 `keyboard`：脚本无法暂停下来提问。
- 没有工具箱；[分析库](topic:craftscript-library)和内置函数就是全部可用的功能。
