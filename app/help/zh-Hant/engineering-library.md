---
title: 工程程式庫
summary: 以可讀腳本呈現的教科書公式，採用SI單位，每項結果都附有來源：管路與渠道中的流動、熱傳與熱交換器、壓力元件、氣體動力學、水與空氣的性質、材料，以及經過檢查的單位。說明各項的用途與適用限制。
keywords: 工程, 程式庫, 單位, Darcy-Weisbach, Colebrook, Reynolds, 摩擦係數, Dittus-Boelter, Gnielinski, NTU, 效能, LMTD, 鰭片, Barlow, Lamé, 噴嘴, 等熵, Mach, 壅塞流, 水, 空氣, 性質, 材料, 來源
from: 786ef967
---

工程程式庫是一組腳本，位於腳本工作區的程式庫（`craftlib/eng`）中。每一個都是可由上至下閱讀的函式，其標頭提供其**方法**、**單位**、**限制**、**參考資料**，以及附有實例數值的**檢查**。它們全程使用SI單位，並回傳帶有**單位**與**來源**的量，因此資料表可以列印每個數值的出處。

## 經過檢查的單位

`to_si(10, 'bar', 'Pa')` 會轉換數值，並拒絕量測其他量的單位（預期為壓力時給了長度）。`from_si`、`unit_convert(1, 'bar', 'psi')` 與 `unit_kind('W/(m K)')`（「熱傳導率」）的運作方式相同。`temp_k(25, 'C')` 與 `temp_from_k` 會轉換溫度，因為溫度具有偏移量。

## 性質

- `fluid('water', T)` 與 `fluid('air', T, p)`：密度、黏度、導熱係數、比熱與普朗特數。水為0至100 °C，空氣為250至600 K；超出範圍時會停止，而非外推。
- `material('ss304')`：楊氏模數、蒲松比、密度、降伏強度、導熱係數、比熱與熱膨脹係數：取自與模擬相同之資料表的室溫數值。實際設計應使用供應商的認證數值。溫度曲線尚未實作。

## 管路與渠道中的流動

`reynolds`、`hydraulic_diameter`、`friction_factor`（層流，之後對紊流使用Colebrook方程式；2300至4000的範圍沒有可靠的公式，程式會說明此點）、`darcy_weisbach`、`minor_loss`、`pipe_flow`（圓管，一次完成所有計算），以及 `rect_channel`（矩形渠道的層流，以Shah與London擬合法計算）。

## 熱傳

`nusselt_dittus_boelter`、`nusselt_gnielinski`、`nusselt_tube`（選擇層流或紊流，並說明所用的關係式）、`htc`、`fin_efficiency`、`lmtd`、`effectiveness` 與 `ntu_for`（逆流、並流、殼管式、交叉流以及單一變化流的效能-NTU關係式），以及 `hx_size`（某一熱負荷所需的UA大小；當無法滿足熱負荷時，會說明可達成的上限）。

## 壓力元件

`allowable_stress`（降伏強度除以安全係數）、`wall_thin_cylinder`、`barlow`、`wall_thick_cylinder`（Lamé，依環向或剪應力準則）與 `wall_sphere`。這些是教科書的安全餘裕，**並非壓力容器規範的計算**：沒有腐蝕裕量、接頭效率或規範係數。

## 氣體動力學

`isentropic`（馬赫數下的比值）、`mach_from_area`、`choked_flow`、`throat_area` 與 `exit_mach`，適用於無摩擦、無熱傳、無激波的理想氣體。

## 檢查結果

`check_stress`、`check_thermal` 與 `check_flow` 會從腳本對產生的零件執行PartCraft自身的應力、熱傳導與流動求解器，並讀回最大應力與位移、溫度與熱流量，以及流道網路的滲透率。它們不會改變求解器本身。應力與溫度檢查使用體素，因此曲面會呈階梯狀，而尖銳內角或點負載下的應力，取決於體素大小。
