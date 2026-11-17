---
title: Ren trên trục và lỗ, vẽ hoặc mô hình hóa
summary: Đặt ren ISO hệ mét hoặc ren hình thang lên bất kỳ mặt tròn nào, trục ngoài hoặc lỗ trong. Giữ ren dạng giả cho bản vẽ, hoặc mô hình hóa ren xoắn thật cho in 3D, với khe hở để các chi tiết in lắp khít.
keywords: ren, các ren, ren mô hình hóa, ren xoắn, đường xoắn, vít, bu lông, đai ốc, trục, lỗ, ren ngoài, ren trong, ren giả, ren hệ mét, hình thang, Acme, vít me, Tr16x4, M10, in 3D, in, khe hở, lắp, thuận tay phải, ren trái, lỗ taro
from: 4f6401cc
---

{{ui:Ren}} đặt ren lên các mặt tròn: mặt ngoài của trục (ren ngoài) hoặc mặt trong của lỗ (ren trong). PartCraft nhận biết loại từ mặt đó.

Ren ban đầu là **ren giả**: mặt vẫn trơn, khung nhìn vẽ ren bằng các vòng tròn nét đứt và tờ bản vẽ ghi chú, ví dụ "M10×1.5 - 6g, ren dài 20". Tích **Mô hình hóa** để cắt ren xoắn thật vào chi tiết, cho in 3D hoặc một mô hình cần trông đúng.

## Ren trục hoặc lỗ

1. Dựng trục hoặc lỗ ở kích thước của ren: trục Ø10 cho bu lông M10, hoặc lỗ Ø8.5 (mũi khoan taro) cho đai ốc M10.
2. Nhấp mặt tròn, rồi chọn {{ui:Thêm}} › {{ui:Ren}}. Khi chưa chọn mặt tròn nào, PartCraft yêu cầu bạn nhấp các mặt, rồi {{ui:Xong}}.
3. Trong panel bên phải, kiểm tra **Kích thước**. **Vừa với mặt** tự chọn kích thước: với trục, kích thước có đường kính ngoài bằng của trục; với lỗ, kích thước có đường kính trong mà lỗ vừa khít.

Ren bắt đầu ở đầu hở của mặt, nơi chi tiết không tiếp tục dọc theo trục: đầu tự do của trục, miệng của lỗ. **Bắt đầu ở đầu kia** đảo ngược điều đó.

## Thiết lập

| Thiết lập | Lựa chọn | Mặc định |
|---|---|---|
| **Dạng** | ISO hệ mét (60°), M1.6 đến M64 bước thô; hình thang (Tr, 30°), Tr8×1.5 đến Tr60×9 | ISO hệ mét |
| **Kích thước** | Vừa với mặt, hoặc một kích thước trong danh sách | Vừa với mặt |
| **Toàn bộ mặt** | Bỏ tích để đặt **Chiều dài (mm)**, đo từ điểm bắt đầu | Được tích |
| **Bắt đầu ở đầu kia** | Ren chạy từ đầu kia của mặt | Tắt |
| **Chiều xoắn** | Thuận tay phải hoặc thuận tay trái | Thuận tay phải |
| **Mô hình hóa** | Cắt ren xoắn thật | Tắt |
| **Khe hở (mm)** | Hiện khi tích Mô hình hóa: ren của trục nhỏ đi bao nhiêu, và ren của lỗ lớn thêm bao nhiêu, quanh mọi phía | 0.1 |

Kích thước không hợp với mặt vẫn được dựng, cắt theo mặt, và panel nói rõ, ví dụ "Trục Ø12 mm không phải M10 Ø10 mm". Nhiều mặt có thể dùng chung một đặc trưng Ren; với **Vừa với mặt**, mỗi mặt có kích thước riêng.

## Ren mô hình hóa để in 3D

Ren mô hình hóa theo biên dạng cơ sở tiêu chuẩn: ISO 68-1 cho ren hệ mét (đỉnh và chân phẳng, sườn 60°), ISO 2901 cho ren hình thang (sườn 30°). **Khe hở** dịch toàn bộ biên dạng vào trong (trục) hoặc ra ngoài (lỗ) để các chi tiết in vặn vào nhau được:

- **0.1 đến 0.2 mm** phù hợp với hầu hết máy in. In thử một bu lông và đai ốc trước.
- **0** là biên dạng tiêu chuẩn, cho chi tiết đã gia công hoặc để kiểm tra độ lắp.

Bu lông và đai ốc có cùng khe hở không bao giờ chạm nhau dọc theo sườn: khe hở giữa chúng bằng hai lần khe hở, quanh mọi phía.

:::tip
Ren mịn in kém: M3 trở xuống, hoặc bước ren dưới 0.5 mm, gần với những gì vòi 0.4 mm vẽ được. Hãy mô hình hóa các ren lớn hơn, và dùng chi tiết chèn nhiệt (heat-set insert) hoặc lỗ taro cho các ren nhỏ.
:::

Ren mô hình hóa là một phần của khối đặc: các tệp xuất STL, 3MF và STEP đều mang nó, và Đo đo được nó. Nó làm chi tiết nặng hơn khi dựng lại: một ren M10 dài 20 có khoảng 150,000 tam giác.

## Lỗ taro

Một **lỗ taro (ISO hệ mét)** cũng có công tắc **Mô hình hóa**, với cùng **Khe hở**. Xem [Khoan lỗ và lỗ khoét tại điểm phác thảo](topic:holes).

## Khi ren không dựng được

- "Ren đặt lên mặt tròn (hình trụ): một trục hoặc một lỗ." Mặt đã chọn là phẳng hoặc cong theo cách khác.
- "Không có kích thước tiêu chuẩn nào vừa với mặt tròn Ø0.6 mm: hãy chọn một kích thước." **Vừa với mặt** không tìm được kích thước nào trong phạm vi 12 % của mặt. Chọn một **Kích thước**, hoặc đổi mặt.
- "Mặt mà ren này nằm trên đã mất (…). Hãy chọn lại." Một thay đổi trước đó đã xóa mặt. Nhấp {{ui:Chọn mặt}} và nhấp lại mặt đó.

:::note
Ren hệ inch (UNC, UNF), ren ống, ren côn, đoạn thoát ren và đầu ren vát mép chưa được xây dựng. Kernel chính xác hiển thị ren mô hình hóa như ren giả.
:::
