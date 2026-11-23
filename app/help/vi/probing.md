---
title: Đo chạm: tìm chi tiết và đặt gốc gia công
summary: Chạm vào mặt trên, một cạnh, một lỗ hoặc một vấu bằng đầu đo, để bộ điều khiển dời gốc gia công đến nơi chi tiết thực sự nằm, hoặc chỉ đo. Mỗi bộ điều khiển làm được gì, và những gì chưa được kiểm chứng.
keywords: đo, đo chạm, đầu đo chạm, chạm để đặt, độ lệch gốc gia công, g54, g31, g38.2, bỏ qua, mốc, tìm tâm, khoan lỗ, vấu, cạnh, đặt về 0, đo, kiểm tra, g10
from: 1f718b82
---

{{ui:Đo chạm}} trong {{ui:Gia công}} ghi một chu kỳ đo vào chương trình: đầu đo chạm vào chi tiết, và bộ điều khiển dời gốc gia công (G54) theo chênh lệch giữa nơi bề mặt được tìm thấy và nơi mô hình nói nó nằm. Các thao tác sau đó cắt đúng nơi chi tiết thực sự nằm.

**Chưa có gì ở đây được chạy trên máy.** Các di chuyển trước một lần chạm là di chuyển thông thường: đầu đo không được theo dõi cho đến khi chính di chuyển đo. Chạy chậm, thử trên không trước, với tay đặt sẵn trên nút tạm dừng tiến dao.

## Sử dụng

1. Trên thẻ **Dụng cụ**, thao tác đo đầu tiên thêm một **đầu đo chạm**: đường kính bi của nó, và tốc độ đo (100 mm/min trừ khi bạn đặt khác).
2. Nhấn {{ui:Thêm}} trên thanh công cụ Gia công, rồi {{ui:Đo chạm}}, và nhấp vào thứ cần chạm. Mỗi lần chọn là một chu kỳ, theo thứ tự bạn nhấp:

| Chọn | Chu kỳ | Được đặt |
|---|---|---|
| Một mặt phẳng hướng lên theo trục dao | Một lần chạm đi xuống | Z |
| Một mặt bên phẳng vuông góc với X hoặc Y | Một lần chạm đi về phía mặt, thấp hơn đỉnh một chút | X hoặc Y |
| Một lỗ hoặc vấu dọc theo trục dao | Bốn lần chạm (+X, −X, +Y, −Y) | X và Y của tâm của nó |

3. **Với kết quả**: {{ui:Đặt gốc gia công}} hoặc {{ui:Chỉ đo}}.
4. **Bắt đầu cách một khoảng** và **Tìm kiếm vượt thêm một khoảng** là khoảng cách từ bề mặt dự kiến mà di chuyển đo bắt đầu, và khoảng cách đầu đo có thể đi qua bề mặt đó trước khi bộ điều khiển bỏ cuộc. **Độ sâu** là khoảng bi đi xuống dưới đỉnh của lỗ, vấu hoặc mặt bên.

Đặt thao tác đo lên trước, trước khi có gì cắt.

## Mỗi bộ điều khiển ghi gì

| Bộ điều khiển | Chạm | Kết quả |
|---|---|---|
| Kiểu Fanuc | `G31`, vị trí được giữ trong `#101` đến `#104` | Các biến độ lệch (`#5221` đến `#5223`) được dời theo tìm thấy − dự kiến. Chỉ đo: chênh lệch được giữ lại trong `#110` (và `#111`). |
| LinuxCNC | `G38.2`, vị trí được giữ trong các tham số đặt tên | `G10 L2 P1` với độ lệch mới. Chỉ đo: một thông báo `(DEBUG, …)`. |
| GRBL | `G38.2` | Một lần chạm đặt trục bằng `G10 L20 P1`. GRBL không có biến, nên **không thể tính tâm**: tệp nói điều đó trong chú thích và không đặt gì. |

Phép tính là của post, nên bạn có thể đổi nó: các sự kiện là `probe-move` và `probe-set` ([Bộ hậu xử lý bạn có thể sửa](topic:post-processors)).

## Giới hạn

- Một gốc gia công (G54). Chỉ các mặt vuông góc với trục: không có góc, không có chu kỳ góc, không xoay gia công.
- Không có bộ cài đặt dao, không kiểm tra dao gãy, không đo kích thước so với dung sai, không có báo cáo.
- Trục chính không được khởi động cho đo và chất làm mát tắt; không có kiểm tra rằng dao trong trục chính là đầu đo.
- Mô phỏng phôi không chạy đường đo.
- Hiệu chuẩn riêng của đầu đo (độ lệch bi, độ lệch kim, hướng kích hoạt) thuộc về bộ điều khiển.
