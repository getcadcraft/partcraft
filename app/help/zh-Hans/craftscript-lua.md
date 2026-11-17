---
title: Lua 脚本
summary: 用 Lua 5.4 编写脚本工作空间脚本：内置函数的 cs 表、作为值的数组及其索引和算术运算、共享的 ws 工作空间、打印与显示结果，以及被禁用的功能。
keywords: Lua, Lua 5.4, 脚本, 语言, cs 表, ws, 工作空间, userdata, 张量, 数组, 矩阵, print, display, 沙箱
from: 82c668b3
---

Lua 是[脚本工作空间](topic:craftscript)支持的第二种语言。在编辑器上方的语言框中选择 **Lua**（`.lua` 文件会自动以 Lua 打开）。Lua 与 CraftScript 共享相同的变量和相同的内置函数，因此 Lua 脚本可以使用 CraftScript 脚本生成的内容，反之亦然。

## 基础

```
-- 每个内置函数都在 cs 表中
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 从 1 开始计数，与 CraftScript 相同
print(K(1, 1), #K)             -- 一个元素；元素的个数

-- 工作空间：所有脚本都能看到的相同变量
ws.total = K(1, 1) * 2
print(ws.total)

-- 一个函数返回多个结果
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` 调用任意内置函数并返回其第一个结果；`cs.call(name, n, …)` 返回 `n` 个结果。
- `cs.tensor({1, 2, 3})` 生成一行，`cs.tensor({{1, 2}, {3, 4}})` 生成一个矩阵。
- 数组、稀疏矩阵、网格和场都是带方法的值：`t(i, j)` 或 `t:get(i, j)`、`t:set(i, j, v)`、`t:shape()`、`#t`、`t:T()`（转置）、`t:totable()`。`+ - * / ^` 的含义与 CraftScript 中相同（`*` 为矩阵乘积）；`t:times(u)` 逐元素相乘。
- 1×1 数组会作为普通的 Lua 数字返回。
- `ws.name` 读写共享工作空间。脚本留下的全局变量在运行结束时也会存入其中。
- `print(…)` 输出到控制台；`cs.show(f)`、`cs.plot(y)` 以及其他显示函数的工作方式与 CraftScript 相同。

## 调用分析库

分析库的函数（库选项卡中的函数）以及你的部件自身脚本定义的 CraftScript 函数，同样通过 `cs` 访问：

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- 两个输出
```

这些函数在脚本开始运行前就已找到，因此请在脚本中直接写出函数名：`cs.static_tet(` 或 `cs.call('static_tet', …)`。在脚本运行时拼接出的名称只能访问内置函数。用 `cs.struct({ … })` 构建的结构体是 CraftScript 结构体；由其组成的 Lua 列表（`{ cs.struct(…), … }`）则是单元格，这正是库的设置所需要的。如果库函数内部出错，消息会指明函数名及其所在行，并指向调用它的你的那一行。

## 已禁用

脚本无法访问文件、网络或页面：`io`、`os`（时钟除外）、`require`、`dofile`、`loadfile` 和 `debug` 已被移除。请使用脚本工作空间的“打开”功能和变量来导入数据。步数上限和停止功能的工作方式与 CraftScript 相同。
