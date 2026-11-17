---
title: Python 脚本
summary: 用 Python 3 编写脚本工作空间脚本：cs 内置函数对象、类似 numpy 的从 0 开始索引的数组值、共享工作空间、打印、尚未提供的功能，以及 Python 如何像 CraftScript 和 Lua 一样被隔离。
keywords: Python, Python 3, CPython, WebAssembly, 隔离, 安全, 脚本, 语言, cs, ws, 工作空间, numpy, 数组, 矩阵, 索引, print, display, 信任
from: 66eab56d
---

Python 是[脚本工作空间](topic:craftscript)支持的第三种语言。在编辑器上方的语言框中选择 **Python**（`.py` 文件会自动以 Python 打开）。Python、Lua 与 CraftScript 共享相同的变量和相同的内置函数，因此 Python 脚本可以使用 CraftScript 脚本生成的内容，反之亦然。

每次访问后首次运行 Python 时，会从本站加载 Python 本身（CPython 3.14，约 7 MB），这需要几秒钟。Python 尚未纳入{{ui:保存以供离线使用}}：请先在联机状态下运行一次 Python 脚本。

## Python 已被隔离

Python 脚本与 CraftScript 和 Lua 脚本一样被隔离：它们只能访问零件、变量和内置函数，此外别无其他。每次运行都在其自身的沙箱中启动一个全新的 Python，内存中有一个小型文件树（其中包括标准库，以及运行结束后即消失的 `/tmp` 文件夹）。无论在浏览器中还是在命令行中，它都无法访问网络、你的文件或页面的其他部分。他人的脚本仍可能占用大量时间或内存：{{ui:停止}}可结束它。

## 基础

```
A = cs.magic(3)              # 每个内置函数都是 cs.<name>
B = A @ A.T                  # @ 为矩阵乘积，.T 为转置
C = A * 2 + 1                # + - * / ** 逐元素运算，与 numpy 相同
print(A[0, 1], A[-1, -1])    # 从 0 开始；负数从末尾计数
row = A[1]                   # 矩阵上的单个索引：一行
big = A[A > 4]               # 逻辑掩码选取元素
A[0, 0] = -5                 # 对数组赋值
V, D = cs.call('eig', 2, A)  # 多个结果：cs.call(name, 个数, …)
```

- 1 × 1 数组会作为普通数字返回；其他数组、稀疏矩阵、网格、场和模型则是**值**。
- 值具有 `shape`（元组）、`T`、`type`、`numel()`、`copy()`、`tolist()`、`len()`（其行数），以及用于单个元素的 `float()`、`int()` 和 `bool()`。
- 比较运算（`<`、`==` 等）逐元素进行，与 numpy 相同：结果为逻辑值。
- 传给内置函数的数字列表会变为数组：`cs.sum([1, 2, 3])`。`cs.tensor([[1, 2], [3, 4]])` 生成一个矩阵。
- 字典会变为结构体，混合类型的列表会变为单元格，反之亦然。

脚本创建的每个全局变量（数字、值、字典、列表……）都会在运行结束时进入**变量**选项卡，即使出错之后也是如此。以 `_` 开头的名称、函数、类和模块会保留在 Python 中。`ws.name` 可直接读取或设置变量，`ws_names()` 列出它们。

`print(…)` 输出到控制台。`display(…)`（或 `cs.display`）与 CraftScript 中一样，用于显示网格、场或图。

## 调用分析库

库函数的调用方式与内置函数相同：`cs.box_mesh(20, 10, 10, 5, 'hex')`、`cs.call('modal_tet', 2, …)`。请在脚本中按原样写出名称：PartCraft 会在运行前找到脚本所用的库函数。

## 尚未提供

- numpy、scipy 及其他第三方包：此处仅提供 Python 自身的标准库（`math`、`json`、`itertools`、`decimal`、`statistics`……），不包括其窗口、终端和数据库部分（`tkinter`、`curses`、`sqlite3`）。
- 套接字及其他任何会访问外部的功能：此处的 Python 没有网络。
- `time.sleep` 会立即返回。
- 编辑器中的代码折叠，以及从 CraftScript 脚本中调用 Python 函数。
- 运行每 1000 行检查一次指令预算和停止请求；单个内置函数内部的长时间计算会先完成。
