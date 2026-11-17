---
title: Kiểm tra độ nghiêng khuôn khi đúc khuôn
summary: Tô màu chi tiết theo góc nghiêng khuôn so với hướng tháo khuôn, xem mặt nào tháo được, mặt nào cần thêm độ nghiêng và mặt nào tháo từ nửa khuôn còn lại, kèm tỷ lệ diện tích của từng loại.
keywords: phân tích độ nghiêng khuôn, độ nghiêng khuôn, côn, khuôn, đúc khuôn áp lực, ép phun, hướng kéo, đường phân khuôn, rãnh lõm, tháo khuôn, kiểm tra độ nghiêng khuôn
from: 6a106f83
---

Chi tiết làm trong khuôn, khuôn ép hoặc khuôn cát cần **độ nghiêng khuôn**: các thành được nghiêng một chút để chi tiết trượt ra. **Phân tích độ nghiêng khuôn** tô màu từng mặt theo mức nghiêng của nó so với hướng mở khuôn (**hướng kéo**).

## Bật chức năng

1. Trong không gian làm việc Design, mở {{ui:Khung nhìn}} và chọn {{ui:Phân tích độ nghiêng khuôn}}.
2. Đặt **Hướng kéo**: hướng mở khuôn, theo X, Y hoặc Z theo một trong hai chiều, hoặc **Vuông góc với mặt đã chọn**: nhấn {{ui:Chọn một mặt}} và bấm vào một mặt phẳng của chi tiết.
3. Đặt **Độ nghiêng khuôn tối thiểu**, tính bằng độ: góc nghiêng ít nhất mà quy trình cần (thường từ 1° đến 3°).

Chi tiết được tô màu:

| Màu | Nghĩa |
|---|---|
| Xanh lá: **Độ nghiêng khuôn dương** | Nghiêng về phía hướng kéo ít nhất bằng mức tối thiểu: tháo được từ nửa khuôn này |
| Vàng đất: **Cần độ nghiêng khuôn** | Trong mức tối thiểu theo cả hai chiều, như thành thẳng đứng: thêm độ nghiêng ở đây |
| Đỏ: **Độ nghiêng khuôn âm** | Nghiêng ra xa hướng kéo ít nhất bằng mức tối thiểu: tháo từ nửa khuôn kia, hoặc là rãnh lõm nếu chi tiết phải tháo ra từ một nửa |

Tỷ lệ diện tích bề mặt của mỗi loại được hiển thị bên cạnh. **Đảo hướng kéo** nhìn từ nửa khuôn còn lại: xanh lá và đỏ đổi chỗ.

Mặt cong được đánh giá theo từng điểm, nên một hình trụ nằm ngang hướng kéo sẽ hiện một dải cần độ nghiêng dọc hai bên.

Màu thay đổi theo chi tiết khi bạn sửa đổi nó. {{key:Esc}} hoặc {{ui:Đóng}} tắt phân tích; không có gì được lưu trong chi tiết.

:::tip
Để thêm độ nghiêng, dùng đặc trưng {{ui:Độ nghiêng khuôn}} trên các mặt màu vàng đất (xem [Quét, chuyển tiếp và độ nghiêng khuôn](topic:sweep-loft-draft)), rồi kiểm tra lại.
:::
