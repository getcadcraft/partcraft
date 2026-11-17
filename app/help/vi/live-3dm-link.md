---
title: Giữ mô hình .3dm liên kết trực tiếp
summary: Đổi mô hình trong chương trình đã tạo ra nó và xem thân của PartCraft đi theo, với Rhino 8 hoặc một định nghĩa Grasshopper, các đặc trưng của bạn được dựng lại trên hình dạng mới.
keywords: rhino, grasshopper, liên kết trực tiếp, kết nối trực tiếp, 3dm, nurbs, tham số, liên kết, đồng bộ, kịch bản, đẩy, thân đã nhập
from: cf4dc9b2
---

Tiếp tục tạo hình mô hình ở nơi bạn mô hình hóa, và gia công, kiểm tra, lập tài liệu tại đây. Mỗi thay đổi trong chương trình kia thay thế một thân đã nhập trong PartCraft, và các đặc trưng sau nó được dựng lại theo hình dạng mới.

:::note
Liên kết cần **CadCraft Studio** trên cùng máy tính. Một thẻ trình duyệt không thể nhận kết nối. Không có gì đi qua internet: kịch bản nói chuyện với Studio tại địa chỉ của chính máy tính này, bằng một mã thông báo (token).
:::

:::warning
Liên kết này đã được thử với bộ ghi tệp của kịch bản và một phần thay thế cho chương trình kia, chưa thử trực tiếp trong chính Rhino hay Grasshopper. Nếu có lỗi ở đó, hãy cho chúng tôi biết nội dung thông báo.
:::

## Thiết lập

1. Trong Studio, mở PartCraft. Trong {{ui:Cài đặt}} › {{ui:PartCraft}} › {{ui:Trợ lý}}, chọn **Cho phép trợ lý AI và kịch bản dùng PartCraft**, rồi **Sửa**.
2. Trong Studio, chọn {{ui:Kết nối trợ lý}}. Nó hiển thị địa chỉ và mã thông báo bạn sẽ dán bên dưới.
3. Tải kịch bản: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Từ Rhino

1. Chạy `cadcraft_link.py` trong trình soạn thảo kịch bản của Rhino (Python 3 trong Rhino 8).
2. Lần đầu, dán địa chỉ và mã thông báo. Chúng được giữ trong `.cadcraft-link.json` trong thư mục cá nhân của bạn, không bao giờ nằm trong mô hình. Studio tạo mã thông báo mới mỗi lần khởi động, nên khi đó kịch bản sẽ hỏi lại.

Chạy lại kịch bản để dừng.

## Từ Grasshopper

Chạy kịch bản một lần trong Rhino trước, để địa chỉ và mã thông báo được lưu.

1. Thêm một thành phần Script (Python 3) và dán toàn bộ `cadcraft_link.py` vào đó.
2. Đặt các đầu vào sau: `G` (hình học, với truy cập danh sách), `N` (tên, tùy chọn), `On` (công tắc logic), và `Target` (tùy chọn: `model` hoặc `part`, nếu cả hai ứng dụng đều mở).
3. Đặt `On` thành true.

Mỗi lần tính toán gửi `G` và thay thế những gì thành phần đã gửi lần trước.

## Cách hoạt động ở đây

- **Một thân.** Mọi thứ nhìn thấy được trong mô hình trở thành một đặc trưng đã nhập, giống như khi bạn [mở tệp .3dm](topic:open-3dm-files).
- **Phải khép kín.** PartCraft lấp các lỗ nhỏ và các khe hở phẳng, và chương trình kia được báo số lượng. Nếu mô hình vẫn chưa khép kín, PartCraft giữ thân cũ và thanh trạng thái sẽ cho biết. Thay đổi kế tiếp làm mô hình khép kín sẽ cập nhật nó.
- **Hoàn tất việc đang làm.** Trong phác thảo hoặc bản vẽ, các cập nhật bị từ chối và được thử lại sau; chúng đến khi bạn quay lại mô hình.
- **Hoàn tác.** Các cập nhật cách nhau trong vòng hai giây dùng chung một bước hoàn tác.
- **Lưu.** Tệp chi tiết giữ liên kết. Chạy lại kịch bản sau khi bạn mở lại tệp, và cùng đặc trưng đó sẽ được cập nhật.

**Chỉ một chiều.** Thay đổi ở đây không quay lại chương trình kia.

## Khi có lỗi

- **"Không có cửa sổ ModelCraft hoặc PartCraft nào cho phép điều này":** thực hiện bước 1 của thiết lập.
- **"Studio từ chối mã thông báo":** Studio đã khởi động lại. Sao chép mã thông báo mới và chạy lại kịch bản. Với Grasshopper, hãy chạy trong Rhino trước.
- **"Không kết nối được tới CadCraft Studio":** Studio không chạy, hoặc địa chỉ đã thay đổi.
