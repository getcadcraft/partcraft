---
title: 在PartCraft中使用AI助手
summary: 让AI助手或脚本配合当前打开的零件工作：读取其特征、参数和质量，修改参数并重建，运行脚本，导出并保存。默认关闭，需手动开启。
keywords: ai, 助手, agent, mcp, 模型上下文协议, 脚本, 自动化, 参数, 质量属性, stl, step, 3mf, 权限, 断开连接, 活动, 文件夹
from: e66d3470
---

## 本页内容

如何让AI助手（或自己编写的脚本）查看当前打开的零件、修改其参数、运行脚本并导出，以及如何决定它可以操作哪些内容。

PartCraft**没有自带的AI**，也不会向任何地方发送任何内容。助手需要自行提供：任何支持模型上下文协议（MCP）的程序均可。PartCraft只为其提供工具，由你选择开放哪些工具。

## 开启功能

1. 打开{{ui:设置}}（应用栏中的齿轮，或{{key:Mod+,}}），进入{{ui:PartCraft}}选项卡。
2. 在{{ui:助手}}下，勾选**允许AI助手和脚本使用PartCraft**。在勾选之前，此功能处于关闭状态。
3. 选择其可执行的操作。**读取**默认已勾选；其他选项仅在需要时勾选。
4. 若要允许其导出文件并保存到某个文件夹，请在**允许使用的文件夹**下选择{{ui:添加文件夹…}}，然后在Studio的对话框中选择该文件夹。

助手通过您电脑上的**CadCraft Studio**连接：Studio会显示地址和令牌，供粘贴到助手中。浏览器标签页无法为助手建立连接。

## 助手可以请求的操作

| 工具 | 权限 | 作用 |
|---|---|---|
| `part_describe`, `features_list` | 读取 | 按顺序列出特征，包括哪些已生成、哪些失败，以及材料、实体的体积和尺寸 |
| `params_list` | 读取 | 列出参数，以及方程可以驱动的所有数值及其值 |
| `mass_properties` | 读取 | 体积、面积、质心、绕质心的惯性；零件有材料时还包括质量 |
| `param_set` | 编辑 | 设置参数或特征的数值并重建。作为一步操作，可以撤销 |
| `script_run` | 编辑 | 以与{{ui:脚本}}工作区相同的方式运行CraftScript、Lua或Python脚本：封闭运行，不访问文件或网络。零件不会发生变化 |
| `part_export` | 导出 | 导出STL、3MF、STEP或OpenUSD（.usdz、.usda、.usdc），与{{ui:文件}} › {{ui:导出}}的输出方式相同 |
| `link_push` | 编辑 | 更新从其他程序链接的模型（见[保持.3dm模型实时更新](topic:live-3dm-link)） |
| `link_status` | 读取 | 说明链接的模型是否仍然存在，以及最后一次更新的时间 |
| `part_save` | 保存 | PartCraft自身的{{ui:保存}} |
| `illustrate_export` | 导出 | 将{{ui:插图}}工作区中的手册导出为视图的PDF或SVG线条图、交互式三维文件，或其说明书的PDF或网页，与该工作区的{{ui:导出}}和{{ui:说明书}}菜单的输出方式相同（[手册](topic:illustrate)） |

:::note
本版本使用网格内核：体积由三角形计算（略小于真实的曲面实体），STEP以多面体形式写入，即用三角形代替精确曲面。
:::

## 始终由您掌控

- **每次更改都是一个撤销步骤**，并标注为助手所做，例如"Assistant: set l = 45"。按{{key:Mod+Z}}即可撤销。
- **可以看到连接状态。** 应用栏中的按钮会在助手连接期间显示其名称。点击它可查看其权限，或**断开连接**。
- **活动。** {{ui:设置}} › {{ui:PartCraft}} › {{ui:助手}} › {{ui:活动}}会列出每次调用；{{ui:保存日志}}可保存一份副本。
- **文件夹。** 助手只读写您添加的文件夹中的文件；{{ui:移除}}可立即收回某个文件夹。

## 不打开PartCraft的情况

CadCraft文件服务器（供助手使用，`npx @getcadcraft/mcp`）和`cadcraft`命令行可在没有窗口的情况下，使用PartCraft自身的代码和网格内核打开`.partcraft.json`零件：提供相同的读取工具、设置参数、运行CraftScript脚本、导出（包括OpenUSD）和保存。`cadcraft convert bracket.partcraft.json bracket.stl`可以从命令行构建零件并将其写出。手册（`.partcraft-manual.json`）也可以在此导出：`illustrate_export`，或`cadcraft convert linkage.partcraft-manual.json linkage.pdf`（添加`--instructions`可导出说明书）。

## 如果出现问题

- **"needs the edit permission"：** 在{{ui:助手}}下勾选**编辑**，然后重新请求。
- **"driven by the equation"：** 该数值由方程驱动；请让助手改为设置对应的参数。
- **其更改有误：** 按{{key:Mod+Z}}。

## 另请参阅

- [AI助手配方](common:assistants-recipes)：示例，每个示例都列出其调用的工具。
