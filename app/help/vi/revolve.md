---
title: Quay tròn chi tiết tiện
summary: Phác thảo nửa profile bên cạnh một đường tâm, quay nó thành chi tiết tròn, chọn trục và góc, và dùng cắt quay tròn để tạo rãnh.
keywords: quay tròn, phần nhô quay tròn, cắt quay tròn, chi tiết tiện, máy tiện, trục, đường tâm, rãnh, góc, cắt quay
from: 593b6929
---

{{ui:Quay tròn}} quay một profile quanh một trục, như một chi tiết làm trên máy tiện: trục, puli, mặt bích, núm vặn. {{ui:Cắt quay tròn}} (trong menu {{ui:Thêm}} của nhóm Đặc trưng) quay một profile để bớt vật liệu, dùng cho rãnh và hốc.

## Quay tròn một trục bậc

1. Phác thảo trên **Mặt phẳng trước**.
2. Nhấn {{key:N}} cho {{ui:Đường tâm}}. Bắt đầu tại gốc tọa độ và nhấp một điểm thẳng về bên phải, ví dụ cách 100 mm. Đây là trục. Nó là nét đứt: hình học dựng không phải là một phần của profile.
3. Nhấn {{key:L}} cho Đường thẳng. Vẽ **nửa** profile phía trên đường tâm thành một vòng kín duy nhất: bắt đầu trên đường tâm, đi lên, bước sang, rồi quay xuống đường tâm, rồi dọc theo nó về điểm đầu. Hai đầu phải khớp: vòng phải kín.
4. Ghi kích thước các bán kính (chiều cao trên đường tâm) và các chiều dài. Chiều cao 10 trên đường tâm tạo ra đường kính 20.
5. Chọn {{ui:Thoát}}.
6. Chọn {{ui:Quay tròn}}. Trục xuất hiện, quay một vòng đầy đủ.

Profile phải nằm về một phía của trục. Nếu nó cắt qua: "Profile cắt qua trục. Giữ nó về một phía của đường tâm." Một cạnh của profile có thể nằm trên trục.

## Cài đặt

| Cài đặt | Tác dụng | Mặc định |
|---|---|---|
| **Thao tác** | Phần nhô (thêm vật liệu), Cắt (bớt vật liệu), Giao (giữ phần chồng lấp) hoặc Thân mới | Phần nhô cho {{ui:Quay tròn}}, Cắt cho {{ui:Thêm}} › {{ui:Cắt quay tròn}} |
| **Góc (°)** | Quay bao xa, từ trên 0 đến 360 | 360 |
| **Trục** | Đường tâm đầu tiên, hoặc bất kỳ đường thẳng hay đường tâm nào trong phác thảo, được liệt kê như "Đường tâm 1 (l1)" hoặc "Đường thẳng 3 (l3)" | Đường tâm đầu tiên |

Một góc riêng phần tạo thành một hình nêm, quay từ mặt phẳng phác thảo theo một chiều.

Nếu phác thảo không có đường tâm và bạn để **Trục** ở Đường tâm đầu tiên, sẽ có thông báo: "Vẽ một đường tâm (một đường dựng) trong phác thảo để quay quanh." Bạn cũng có thể chọn một đường thực của profile làm trục.

## Cắt một rãnh

1. Khi trục đã được dựng, mở một phác thảo mới trên **Mặt phẳng trước** (cùng mặt phẳng với phác thảo của trục).
2. Vẽ một đường tâm dọc theo cùng trục: bắt đầu từ gốc tọa độ và giữ nó nằm ngang để nó có H, hoặc gõ nó bằng **Thêm theo tọa độ** (ví dụ từ `0, 0` đến `100, 0`). Một phác thảo mới không thể bắt vào đường của phác thảo khác.
3. Vẽ một hình chữ nhật kín nhỏ chồng lên cạnh của trục nơi rãnh đi qua.
4. Chọn {{ui:Thoát}}, rồi {{ui:Thêm}} › {{ui:Cắt quay tròn}}.

## Mặt quay tròn trong lắp ráp

Một phép quay tròn có một trục mà các đặc trưng khác và lắp ráp có thể dùng:

- một {{ui:Tròn}} mẫu lặp mặc định dùng trục của phép quay tròn gần nhất (xem [Đặc trưng mẫu lặp và đối xứng](topic:patterns-mirror));
- trong lắp ráp, một khớp giữa các mặt do phép quay tròn tạo ra ban đầu là khớp **quay (revolute)**, và **Căn giữa theo** đưa ra "Trục của Revolve1" (xem [Dựng lắp ráp](topic:build-assembly)).

## Đường cong thật và các mặt phẳng nhỏ

PartCraft dựng phép quay tròn bằng kernel lưới (chip thanh trạng thái ghi "Mesh kernel"): các hình tròn là những mặt phẳng nhỏ, 64 mỗi vòng theo mặc định, và thể tích thấp hơn giá trị thật một chút (khoảng 0.16 % ở 64). Khung nhìn, các xuất STL, 3MF và STEP đều được tạo từ các mặt phẳng nhỏ đó: đặt **Đường cong** (nhấp khoảng trống, rồi bảng bên phải) thành Mịn (128) hoặc Rất mịn (256) để mượt hơn. Hình trụ, nón và xuyến thật cần một kernel chính xác: **chưa xây dựng trong phiên bản này**. Xem [Kernel khối](topic:solid-kernels).
