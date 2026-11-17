---
title: 保持 .3dm 模型实时同步
summary: 在创建模型的程序中修改模型，PartCraft 中的实体随之跟随更新；模型来自 Rhino 8 或 Grasshopper 定义，并在新形状上重建特征。
keywords: rhino, grasshopper, 实时链接, 实时连接, 3dm, NURBS, 参数化, 链接, 同步, 脚本, 推送, 导入实体
from: cf4dc9b2
---

在建模的地方继续塑造模型，并在此处进行加工、检查和记录。另一程序中的每次更改都会替换 PartCraft 中一个导入的实体，其后的特征会在新形状上重建。

:::note
此链接需要同一台计算机上运行 **CadCraft Studio**。浏览器标签页无法建立此连接。数据不经过互联网：脚本通过本机地址并使用令牌与 Studio 通信。
:::

:::warning
此链接已通过脚本的文件写入器和另一程序的替代品测试，尚未在 Rhino 或 Grasshopper 本身中测试。如有故障，请反馈其显示的信息。
:::

## 设置

1. 在 Studio 中打开 PartCraft。在 {{ui:设置}} › {{ui:PartCraft}} › {{ui:助手}} 中，勾选 **允许 AI 助手和脚本使用 PartCraft**，然后点击 **编辑**。
2. 在 Studio 中选择 {{ui:连接助手}}。它会显示地址和令牌，稍后需粘贴到下方。
3. 下载脚本：[cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py)。

## 从 Rhino 中使用

1. 在 Rhino 的脚本编辑器中运行 `cadcraft_link.py`（Rhino 8 中为 Python 3）。
2. 首次运行时，粘贴地址和令牌。它们保存在主文件夹中的 `.cadcraft-link.json` 中，绝不保存在模型里。Studio 每次启动都会生成新令牌，因此届时脚本会再次询问。

再次运行该脚本即可停止。

## 从 Grasshopper 中使用

先在 Rhino 中运行一次脚本，以保存地址和令牌。

1. 添加一个脚本组件（Python 3），并将整个 `cadcraft_link.py` 粘贴到其中。
2. 为其设置以下输入：`G`（几何体，启用列表访问）、`N`（名称，可选）、`On`（布尔开关），以及 `Target`（可选：`model` 或 `part`，用于两个应用都已打开时）。
3. 将 `On` 设为 true。

每次求解都会发送 `G`，并替换该组件上次发送的内容。

## 工作原理

- **单一实体。** 模型中所有可见内容会成为一个导入的特征，与[打开 .3dm 文件](topic:open-3dm-files)时相同。
- **必须闭合。** PartCraft 会填补小孔和平面开口，并告知另一程序填补了多少个。若模型仍未闭合，PartCraft 会保留原有实体，并在状态栏中提示。下一次使其闭合的更改会更新它。
- **先完成当前操作。** 在草图或图纸中，更新会被拒绝并稍后重试；返回模型后即会应用。
- **撤销。** 两秒内的更新共享一个撤销步骤。
- **保存。** 零件文件会保留该链接。重新打开后再次运行脚本，同一特征即会更新。

**仅单向。** 此处的更改不会回传到另一程序。

## 出现问题时

- **“没有 ModelCraft 或 PartCraft 窗口允许此操作”：** 执行设置中的第 1 步。
- **“Studio 拒绝了令牌”：** Studio 已重启。复制新令牌并再次运行脚本。对于 Grasshopper，先在 Rhino 中运行一次。
- **“无法连接 CadCraft Studio”：** Studio 未运行，或地址已更改。
