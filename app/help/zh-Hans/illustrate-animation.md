---
title: 为手册制作动画
summary: 在某一时刻为零件（位置、显示或隐藏、不透明度、颜色）和相机设置关键帧，录制爆炸视图的各个步骤，依次播放各视图，然后在此处播放或保存为视频。
keywords: 插图, 动画, 关键帧, 时间轴, 爆炸动画, 相机, 视频, webm, mp4, 播放
from: df4f91f9
---

打开{{ui:Animation}}部分：

- {{ui:Key everything}}、{{ui:Key the selected parts}}和{{ui:Key the camera}}会在当前时间记录事物当前的状态：每个零件的位置、是否显示、不透明度和颜色，以及相机。更改场景，移动{{ui:Time}}滑块，然后再次设置关键帧：动画会从一个关键帧过渡到下一个。
- {{ui:Record the exploded view}}会在现有内容之后，按场景爆炸视图的每个步骤添加一个关键帧，每个步骤间隔一秒。
- {{ui:Views as camera stops}}会按顺序播放各视图：相机移动到每个视图并停留，零件则采用各视图的外观。

{{ui:Play}}、{{ui:Pause}}、{{ui:Stop}}和{{ui:Loop}}会在视图中播放动画；每个零件和相机的关键帧都会列出（点击某个关键帧即可跳转到其时间）。{{ui:Save video}}会写入 WebM 或 MP4（在浏览器能够编码的情况下），或将帧以 PNG 图片的形式保存在 ZIP 中。

动画保存的格式与 ModelCraft 的动画工作空间相同。目前其曲线编辑器和剪辑功能仍沿用 ModelCraft 的版本。
