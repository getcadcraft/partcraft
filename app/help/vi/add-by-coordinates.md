---
title: Thêm hình học phác thảo bằng cách nhập tọa độ
summary: Dùng Thêm theo tọa độ trong bảng phác thảo để đặt đường thẳng, đường tâm, hình chữ nhật, vòng tròn và điểm tại đúng vị trí, chỉ bằng bàn phím.
keywords: tọa độ, nhập liệu bằng văn bản, nhập bằng bàn phím, nhập số, vị trí chính xác, x y, tọa độ tuyệt đối, trợ năng, không cần chuột
from: 5e6c1656
---

Khi bạn đã biết các con số, nhập chúng nhanh hơn là nhấp chuột và ghi kích thước. **Thêm theo tọa độ** nằm trong bảng bên phải khi có một phác thảo đang mở. Tính năng này cũng cho phép bạn dựng phác thảo mà không cần con trỏ.

Tọa độ tính theo mm, trong hệ trục riêng của phác thảo: x hướng sang phải và y hướng lên khi bạn nhìn phác thảo, với (0, 0) ở gốc tọa độ (vòng tròn đỏ có dấu thập).

## Thêm một hình

1. Mở một phác thảo (xem [Vẽ phác thảo đầu tiên](topic:sketch-basics)).
2. Trong bảng bên phải, cuộn đến **Thêm theo tọa độ**.
3. Chọn hình trong **Thêm**: Đường thẳng, Đường tâm, Hình chữ nhật, Vòng tròn hoặc Điểm.
4. Điền các ô:

| Hình | Ô |
|---|---|
| Đường thẳng | **Từ x, y** và **Đến x, y** |
| Đường tâm | **Từ x, y** và **Đến x, y** |
| Hình chữ nhật | **Góc x, y** và **Góc đối diện x, y** |
| Vòng tròn | **Tâm x, y** và **Bán kính** |
| Điểm | **Tại x, y** |

5. Chọn {{ui:Thêm}}, hoặc nhấn {{key:Enter}} trong bất kỳ ô nào.

Hình xuất hiện và thanh trạng thái hiển thị, ví dụ, "Đã thêm một hình chữ nhật." Các ô được xóa trống, sẵn sàng cho hình tiếp theo. Mỗi lần thêm là một bước hoàn tác.

Nhập một cặp là hai số cách nhau bằng dấu phẩy hoặc dấu cách: `0, 0`, `25 -10` hoặc `12.5,40`. Số âm và số thập phân đều được. Bán kính phải lớn hơn không. Nếu nội dung không đọc được là số, thanh trạng thái hiển thị: 'Nhập tọa độ dạng "x, y" và bán kính lớn hơn không.'

## Ví dụ: đường bao một tấm có rãnh, nhập bằng bàn phím

1. Mở một phác thảo trên **Mặt phẳng Front**.
2. **Thêm**: Hình chữ nhật. **Góc x, y**: `-50, -30`. **Góc đối diện x, y**: `50, 30`. {{key:Enter}}.
3. **Thêm**: Vòng tròn. **Tâm x, y**: `-30, 0`. **Bán kính**: `5`. {{key:Enter}}.
4. **Tâm x, y**: `30, 0`. **Bán kính**: `5`. {{key:Enter}}.
5. Chọn {{ui:Thoát phác thảo}}, rồi {{ui:Đùn}}: một tấm 100 × 60 với hai lỗ 10 mm.

## Hình học nhập vào được đặt vị trí, chưa được ràng buộc

Tọa độ nhập vào đặt hình học đúng vị trí, nhưng chúng **không phải quan hệ**. Các hình vẫn có màu xanh dương (chưa xác định đủ) và có thể di chuyển nếu bạn kéo chúng hoặc đổi một kích thước khác:

- một hình chữ nhật nhập vào có các quan hệ góc, ngang và đứng riêng, giống như hình vẽ tay, nhưng không có gì gắn nó với gốc tọa độ;
- một đường thẳng nhập vào không có quan hệ ngang hoặc đứng, ngay cả khi bạn nhập một đường nằm ngang;
- tâm của vòng tròn nhập vào là tự do.

Để phác thảo được xác định đầy đủ, thêm kích thước và quan hệ sau đó (xem [Xác định đầy đủ một phác thảo](topic:relations-dimensions)). Ví dụ, chọn một góc hình chữ nhật và gốc tọa độ rồi chọn {{ui:• Trùng nhau}}, hoặc ghi kích thước cho tâm vòng tròn từ gốc tọa độ.

:::note
Không có con trỏ, bạn vẫn có thể làm đến đây: di chuyển đến một dòng mặt phẳng trong lịch sử bằng {{key:Tab}} và các phím mũi tên, nhấn {{key:Enter}} để chọn, nhấn {{key:S}} để phác thảo, thêm hình tại đây, và đến **Sửa** bên cạnh mỗi kích thước rồi {{ui:Thoát phác thảo}} bằng {{key:Tab}}. Chọn hình học, và do đó thêm quan hệ hoặc kích thước mới, vẫn cần nhấn chuột hoặc chạm trong bản dựng này.
:::

## Giới hạn

- Chưa thể nhập cung tròn. Vẽ chúng bằng công cụ Cung tròn, hoặc nhập một vòng tròn rồi dùng quan hệ.
- Trong ô này không có tọa độ tương đối (từ điểm cuối) hoặc tọa độ cực (độ dài và góc).
- Hình học nhập vào không bắt điểm vào các điểm đã có. Nhập cùng tọa độ như một điểm đã có, rồi thêm quan hệ {{ui:• Trùng nhau}} giữa chúng nếu chúng phải giữ liên kết.
