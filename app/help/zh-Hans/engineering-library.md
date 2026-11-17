---
title: 工程库
summary: 以可读脚本形式呈现的教科书公式，采用 SI 单位，每个结果都附有来源：管道与通道流动、传热与换热器、承压件、气体动力学、水与空气的性质、材料，以及经过校验的单位。说明各自的用途及适用范围。
keywords: 工程, 库, 单位, Darcy-Weisbach, Colebrook, Reynolds, 摩擦系数, Dittus-Boelter, Gnielinski, NTU, 有效度, LMTD, 翅片, Barlow, Lamé, 接管, 等熵, 马赫数, 壅塞流, 水, 空气, 性质, 材料, 来源
from: 786ef967
---

工程库是脚本工作区库（`craftlib/eng`）中的一组脚本。每个脚本都是一个可自上而下阅读的函数，其文件头给出**方法**、**单位**、**限制**、**参考文献**，以及带有算例数值的**检查**。全部使用 SI 单位，并返回带有**单位**和**来源**的量，因此数据表可以打印每个数值的来源。

## 经过校验的单位

`to_si(10, 'bar', 'Pa')` 会转换数值，并拒绝测量其他量的单位（期望压力时传入长度）。`from_si`、`unit_convert(1, 'bar', 'psi')` 和 `unit_kind('W/(m K)')`（“热导率”）的工作方式相同。`temp_k(25, 'C')` 和 `temp_from_k` 用于转换温度，因为温度存在偏移。

## 性质

- `fluid('water', T)` 和 `fluid('air', T, p)`：密度、粘度、导热系数、比热容、普朗特数。水的范围为 0 至 100 °C，空气为 250 至 600 K；超出范围时会停止计算，而不是外推。
- `material('ss304')`：杨氏模量、泊松比、密度、屈服强度、导热系数、比热容、热膨胀：这些是与仿真使用的同一数据表中的室温值。实际设计应使用供应商提供的认证数值。温度曲线尚未实现。

## 管道与通道内的流动

`reynolds`、`hydraulic_diameter`、`friction_factor`（层流，然后对湍流使用 Colebrook 方程；2300 至 4000 的范围没有可靠公式，程序会对此说明）、`darcy_weisbach`、`minor_loss`、`pipe_flow`（圆管，一次完成全部计算）以及 `rect_channel`（采用 Shah 和 London 拟合的矩形管道层流）。

## 传热

`nusselt_dittus_boelter`、`nusselt_gnielinski`、`nusselt_tube`（选择层流或湍流并说明所用的关联式）、`htc`、`fin_efficiency`、`lmtd`、`effectiveness` 和 `ntu_for`（逆流、并流、管壳式、错流以及单一变化流股的有效度-NTU 关系式），以及 `hx_size`（满足热负荷所需的 UA 尺寸；当热负荷无法满足时，它会说明可实现的最大值）。

## 承压件

`allowable_stress`（屈服强度除以安全系数）、`wall_thin_cylinder`、`barlow`、`wall_thick_cylinder`（Lamé 公式，按环向或剪切准则）以及 `wall_sphere`。这些是教科书式的裕度，**不是压力容器规范计算**：不含腐蚀余量、焊接系数或规范系数。

## 气体动力学

`isentropic`（马赫数下的比值）、`mach_from_area`、`choked_flow`、`throat_area` 和 `exit_mach`，适用于无摩擦、无传热、无激波的理想气体。

## 检查结果

`check_stress`、`check_thermal` 和 `check_flow` 会在脚本生成的零件上运行 PartCraft 自身的应力、热传导和流动求解器，并读回最大应力和位移、温度和热流，以及通道网络的渗透率。它们不会改变求解器本身。应力和温度检查使用体素，因此曲面呈阶梯状，尖锐内角或点载荷下的应力取决于体素大小。
