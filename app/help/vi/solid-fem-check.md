---
title: Solid FEM: kiểm tra ứng suất một chi tiết
summary: Bật tiện ích Solid FEM, chia lưới một chi tiết, chọn các mặt cố định và tải trọng trong khung nhìn 3D, giải, rồi đọc chuyển vị và ứng suất von Mises trên mô hình.
keywords: solid fem, phần tử hữu hạn, fea, ứng suất, von mises, chuyển vị, mặt cố định, tải trọng, áp suất, trọng lực, tần số riêng, dạng dao động, lưới, tiện ích bổ sung
from: 8b7e6ba2
---

## Bạn sẽ làm gì

Kiểm tra một chi tiết khối đặc chịu tải: nó dịch chuyển ở đâu và ứng suất cao nhất ở đâu. Phân tích là tuyến tính và đàn hồi, nên đây chỉ là công cụ hỗ trợ kiểm tra; kỹ sư của bạn cần xem xét kết quả.

## Các bước

1. Chọn {{ui:Settings}} › {{ui:Add-ons}} và bật {{ui:Solid FEM}} (mặc định là tắt cho đến khi bạn bật). Mở thẻ {{ui:Solid FEM}} trong bảng bên phải.
2. Trong {{ui:Material}}, chọn một vật liệu, hoặc chọn {{ui:Custom}} rồi nhập hệ số Poisson, khối lượng riêng và ứng suất chảy.
3. Nhấn {{ui:Thêm mặt cố định}}, nhấn các mặt được giữ cố định trong khung nhìn 3D, rồi nhấn {{ui:Done picking}}.
4. Thêm tải trọng bằng {{ui:Thêm lực}}, {{ui:Thêm áp suất}} hoặc {{ui:Thêm trọng lực}}, rồi chọn các mặt của nó theo cùng cách.
5. Nhấn {{ui:Chia lưới chi tiết}}, rồi {{ui:Giải}}. Nếu muốn tính tần số, chọn {{ui:Tần số riêng}} trong {{ui:Nghiên cứu}} trước.
6. Đọc {{ui:Results}} và {{ui:Warnings}}, rồi nhấn {{ui:Hiển thị trên mô hình}} để vẽ ứng suất von Mises, chuyển vị hoặc dạng dao động; {{ui:Xóa biểu đồ}} sẽ gỡ nó đi.

## Ghi chú

- Trang giải tối đa một số phần tử cố định; dòng trạng thái sẽ cho biết khi kích thước phần tử của bạn quá mịn.
- Ứng suất tại mặt cố định, điểm đặt tải và góc nhọn tăng khi lưới được làm mịn hơn. Làm mịn và so sánh trước khi dựa vào một giá trị đỉnh.
- Mỗi thay đổi là một bước hoàn tác, và các cài đặt được lưu trong tệp chi tiết.
- Về phân tích chảy dẻo và tiếp xúc, xem [Kiểm tra ứng suất và độ võng](topic:simulation).
