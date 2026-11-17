---
title: Giữ và tái sử dụng phần dư
summary: Sau khi sắp xếp, phần còn lại của mỗi tấm trở thành một phần dư được đánh số trong danh sách kho; lần sắp xếp kế tiếp dùng phần dư trước, rồi mới đến tấm nguyên.
keywords: sắp xếp, phần dư, kho, phế liệu, tấm, tái sử dụng, vật liệu, độ dày, CSV
from: 7a68d4b8
---

Khi bạn sắp xếp chi tiết trên tấm, phần còn lại có thể dùng được của mỗi tấm (không tính mảnh vụn) có thể được giữ lại làm **phần dư**: một đường bao được đánh số (R-0001, R-0002 …) kèm vật liệu, độ dày, kích thước và công việc mà nó xuất phát. Danh sách được lưu cùng tệp và có thể lưu thành CSV.

## Dùng lại

Nhập **vật liệu** và **độ dày**, để {{ui:Dùng phần dư trước}} bật, rồi sắp xếp. Các phần dư cùng vật liệu và độ dày được thử theo thứ tự từ nhỏ đến lớn; các chi tiết vừa thì đặt lên chúng, bên trong đường bao của phần dư và cách mép một khoảng; phần không vừa đặt lên tấm mới. Báo cáo công việc cho biết phần dư nào đã dùng và còn lại gì. Khi {{ui:Lưu phần còn lại làm phần dư}} bật, {{ui:Thêm công việc này vào kho}} sẽ ghi nó vào danh sách kho: phần dư đã dùng được đánh dấu **Đã dùng** (kèm công việc) và không được đề xuất lại; phần còn lại của nó trở thành một phần dư mới, ghi nhớ phần dư gốc.

## Thế nào là phần dư

Phần còn lại được đo theo khoảng cách bạn đã đặt (không chi tiết nào gần đường cắt hơn khoảng cách đó). Dải hẹp hơn một phần hai mươi của tấm và mảnh nhỏ hơn 2 % tấm là phế liệu; đổi cả hai giới hạn nếu xưởng bạn giữ các mảnh nhỏ hơn. Lỗ bên trong chi tiết thuộc về chi tiết và không được giữ lại. Cuộn không có phần dư.

## Trong bản vẽ

DXF của một bố cục vẽ đường bao của mỗi phần dư trên lớp REMNANTS với số của nó ở giữa, để các mảnh có thể được đánh dấu khi cắt.

Chưa xây dựng: hướng thớ của phần dư, tờ mã vạch hoặc nhãn, phần dư của cuộn, kho dùng chung giữa các dự án.
