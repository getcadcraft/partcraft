---
title: 编写生成器
summary: 生成器是带有注释行的 CraftScript、Lua 或 Python 脚本，注释行用于声明其输入。内容包括：输入如何变成表单、脚本必须留下什么（实体、数据表、问题）、一个小型完整示例，以及如何将脚本作为生成器打开。
keywords: 生成器, 编写, 脚本, CraftScript, 头部, 输入, @input, @generator, 实体, 数据表, 问题, to_body, mfg_check, 数据表, 示例, 点阵, 字段
from: ed8a5ed8
---

生成器是一个普通脚本（[CraftScript](topic:craftscript)、Lua 或 Python），开头带有几行注释。PartCraft 读取这些注释并生成表单；脚本直接读取已经设置好的输入变量。

## 头部

把以下内容写在注释行中（CraftScript 中用 `%`，Lua 中用 `--`，Python 中用 `#`）：

```
% @generator 换热器
% @input mdot: kg/s = 0.2 [0.01 .. 10] "质量流量"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "表面"
% @input solid: = true
% @input note: = "text"
```

输入项的格式为 `名称: 单位 = 默认值`，之后可以选择性地加上范围 `[最小 .. 最大]`（数值会保持在此范围内）、选项列表 `{a, b, c}`，以及用引号括起的标签。单位仅作为表单中的标签：**值以该单位传入**，因此需要国际单位制（SI）的脚本应自行换算；`to_si(value, 'kg/s', 'kg/s')` 还可以检查单位是否与预期一致。名称由字母、数字和下划线组成；`body`、`sheet` 和 `problems` 已被占用。

## 脚本需要留下的内容

| 变量 | 内容 |
|---|---|
| `body` | **必需。** 表面网格，通常由 `[body, info] = to_body(field, h)` 生成。运行结束时会对其进行修复和检查。 |
| `sheet` | 可选。结构体：每个字段为数字或文本，或为包含 `value`、`unit`、`ref` 和 `note` 的结构体。它会成为数据表。 |
| `problems` | 可选。来自 `mfg_check(field, 'sls', struct(), h)` 的 `problems` 单元格，或你自己添加的条目。它们会进入检查结果和问题列表。 |

## 一个完整的小示例

```
% 一个带壁的空心立方体。
% @generator 空心立方体
% @input side: mm = 12 [4 .. 40] "边长"
% @input wall: mm = 1.5 [0.5 .. 5] "壁厚"
% @input h: mm = 0.5 [0.25 .. 2] "体素尺寸"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

它会生成一个封闭的盒子，检查会将其密封的内部报告为粉末工艺的错误。体素尺寸 `h` 应不大于你所需最薄壁厚的三分之一：壁厚低于约三个体素时，壁体就不可靠。

## 字段

可用的字段函数包括：`field_sphere`、`field_box`、`field_capsule`、`field_cylinder`、`field_torus`、`field_revolve`（由轮廓生成的旋转实体）、`tpms`（陀螺面、Schwarz P 面和金刚石面，可指定单元尺寸，壁厚可在零件范围内变化）、`lattice` 和 `lattice_beams`、`along`（沿路径的圆形通道）、布尔运算 `field_union`、`field_intersect`、`field_subtract`、平滑的 `field_blend`，以及 `field_offset`、`field_shell`、`field_move`、`field_rotate`、`field_scale`。`sample(f, points)` 返回各点的有符号距离（内部为负），`field_voxel` 为求解器提供体素。[字段](topic:fields)说明了这些概念。

需要注意的限制：薄板壁厚超过单元尺寸的约四分之一时会封闭通道；厚度小于约三个体素的特征可能会收缩；`along` 会连接圆锥体，因此半径变化较快时会出现鼓起（需要按轮廓生成时请使用 `field_revolve`）。

## 将脚本作为生成器打开

在 {{ui:Engineer}} 工作区中点击 {{ui:Open}}，然后选择文件。没有 `@generator` 或 `@input` 行的脚本会被拒绝，因为没有可设置的内容。生成器保存在此浏览器中（最多 20 个），{{ui:Remove}} 可删除它。从生成器开始创建的实体会带有一份脚本副本，因此零件不依赖于该脚本。

一个文件也可以包含多个生成器：即 JSON 包 `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`。
