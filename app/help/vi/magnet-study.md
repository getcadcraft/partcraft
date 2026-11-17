---
title: Nghiên cứu nam châm của một phác thảo
summary: Biến các hình kín của phác thảo thành mô hình từ phẳng (sắt, nam châm, cuộn dây), xem từ trường, và đọc lực và mô-men xoắn trên một vật thể.
keywords: nam châm, từ, từ tĩnh, từ trường, mật độ từ thông, lực, mô-men xoắn, cuộn dây, gông, sắt, đường cong B-H, nam châm vĩnh cửu, cơ cấu chấp hành, động cơ, solenoid, maxwell
from: 604efc3b
---

Dùng {{ui:Thêm}} trong thanh công cụ Đặc trưng › {{ui:Nghiên cứu nam châm của các phác thảo…}} trên một chi tiết có phác thảo. Mỗi hình kín trong các phác thảo bạn đánh dấu là một vùng của mô hình phẳng; nghiên cứu tính từ trường B, lực và mô-men xoắn trên vật thể bạn chọn.

## Các bước

1. Vẽ các vật thể thành hình kín trong phác thảo: một gông sắt, một nam châm, một cuộn dây. Các vật thể chạm nhau thì dùng chung một cạnh, nên đặt chúng trong các phác thảo khác nhau; các vật thể đứng riêng, hoặc nằm lồng trong nhau (một cửa sổ trong gông), có thể dùng chung một phác thảo. Giữ các phác thảo trên cùng một mặt phẳng.
2. Mở nghiên cứu và đánh dấu các phác thảo sẽ dùng. Mỗi hình kín có một hàng, được đánh số. Cho biết nó là gì: {{ui:Không khí}}, {{ui:Sắt}} (một độ từ thẩm, hoặc một đường cong B–H nhập dưới dạng cặp B tính bằng tesla và H tính bằng A/m), một {{ui:Nam châm vĩnh cửu}} (Br tính bằng tesla, hướng của nó là góc tính từ trục x của phác thảo, và độ từ thẩm hồi phục của nó) hoặc một {{ui:Cuộn dây}} (tổng dòng điện qua hình của nó, bằng số vòng nhân ampe; dấu cho biết chiều chạy).
3. Đánh dấu {{ui:Lực và mô-men lên vật thể này}} cho các vật thể bạn muốn. Nhập chiều sâu của chi tiết ra khỏi phác thảo.
4. Chọn lưới và khoảng không khí quanh mô hình, rồi {{ui:Chạy}}.

## Bạn sẽ thấy gì

- Mật độ từ thông |B| trên mô hình, từ xanh đậm (thấp) đến đỏ (cao), với các hình được đánh số.
- Từ trường mạnh nhất và vị trí của nó, số tam giác, và với mỗi vật thể bạn đã chọn: lực theo x và y, và mô-men xoắn quanh trung tâm của nó, theo chiều sâu bạn đã nhập.
- {{ui:Lưu kết quả (CSV)}} ghi các số.

## Nên biết

- Đây là mô hình phẳng, dừng: mọi thứ tính theo mét chiều sâu, không có dòng xoáy và không có từ trễ, và nam châm là một đường hồi phục thẳng (không thể khử từ).
- Mô hình nằm trong một hộp không khí có biên là một bức tường. Hãy so sánh hai kích thước của hộp không khí, và lưới Thường với lưới Mịn: lực lấy từ trường quanh một vật thể chỉ chính xác bằng lưới ở chỗ đó.
- Sắt chỉ có độ từ thẩm thì không bao giờ bão hòa. Khi từ trường vượt 2 T, nghiên cứu hiển thị ⚠ trong danh sách vấn đề: hãy cho sắt một đường cong B–H. Các số trong hàng mới là ví dụ (sắt μr 2000, một nam châm 1.2 T), không phải bảng dữ liệu của vật liệu.
- Một vật thể cần có khoảng trống quanh nó để chịu lực: nếu vật thể khác quá gần, nghiên cứu sẽ báo.
- Đây là công cụ hỗ trợ bản vẽ, không phải phê duyệt kỹ thuật.

## Tiếp theo

- [Từ trường 2D (hướng dẫn)](topic:magnetic-fields-2d)
