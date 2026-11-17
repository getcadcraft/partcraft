---
title: Tạo hình từ tải trọng (Tạo sinh)
summary: Chọn các mặt được giữ và chịu tải, các vùng cần giữ và các vùng cần để trống, thể tích mục tiêu và vật liệu, rồi tạo kết quả: các hình dạng cứng nhất tìm được cho mỗi thể tích, kiểm tra lại như khối đặc, so sánh trong bảng và tải xuống dưới dạng STL, STEP hoặc chi tiết mới.
keywords: thiết kế tạo sinh, tối ưu hóa cấu trúc tôpô, tối ưu tôpô, SIMP, nhẹ, mạng (lattice), hình dạng hữu cơ, kết quả, so sánh, khối lượng, tỷ lệ thể tích, giữ lại, giữ đặc, chướng ngại, giữ trống, không gian thiết kế, kích thước thành viên tối thiểu, STL, in 3D
from: 5b91fa8e
---

Không gian làm việc {{ui:Tạo sinh}} loại bỏ vật liệu mà tải trọng không cần. Bạn nói nơi chi tiết được giữ và chịu tải, cái gì phải còn lại và cái gì phải để trống; PartCraft tìm hình dạng cứng nhất cho mỗi thể tích mục tiêu (**tối ưu hóa cấu trúc tôpô**), kiểm tra lại từng hình dạng như một khối đặc với vật liệu thực, và hiển thị các kết quả cạnh nhau. Nó làm việc trên các mặt có tên mà nhân lưới cung cấp cho chi tiết (xem [Nhân lưới (mesh kernel)](topic:solid-kernels)).

Chọn **Tạo sinh** trong hộp **Không gian làm việc**. Chi tiết của bạn không thay đổi; nghiên cứu được lưu bên trong tệp chi tiết.

## Thiết lập một nghiên cứu

1. Nhấn **Nghiên cứu mới** trong bảng bên phải.
2. **Không gian**: *Chi tiết như hiện có* loại bỏ vật liệu khỏi chi tiết của bạn; *Một hộp bao quanh chi tiết* tạo một hình dạng bên trong một hộp lớn hơn chi tiết theo **Lề hộp**.
3. **Kích thước phần tử**: để trống cho kích thước tự động (khoảng 8,000 khối lập phương), hoặc nhập một kích thước. Kích thước mịn hơn cho hình dạng mịn hơn và mất nhiều thời gian hơn.
4. **Thành viên tối thiểu**: các thành viên mỏng hơn khoảng hai lần giá trị này sẽ không hình thành. Để trống nghĩa là một rưỡi khối lập phương.
5. Đánh dấu từ một đến sáu **Thể tích mục tiêu** (phần của không gian thiết kế mà hình dạng có thể lấp đầy) và từ một đến bốn **Vật liệu**. Mỗi thể tích được tạo một lần; mỗi vật liệu được kiểm tra trên hình dạng đó (hình dạng cứng nhất không phụ thuộc vật liệu, nhưng khối lượng, ứng suất và hệ số an toàn của nó thì có).

## Mục tiêu

- {{ui:Cố định}}: nhấp các mặt được giữ. Một **Mặt không ma sát** từ danh sách **Thêm** trong bảng chỉ giữ một mặt theo chính nó (dùng cho các mặt phẳng đối xứng).
- {{ui:Lực}}: nhấp các mặt chịu tải, rồi gõ tổng lực và chọn hướng của nó trong bảng. **Áp suất** nằm trong danh sách **Thêm**.
- {{ui:Giữ lại}}: nhấp các mặt mà vùng xung quanh phải luôn đặc, và đặt độ sâu (**Giữ đặc trong**), ví dụ quanh các lỗ bulông. Các mặt bạn cố định hoặc chịu tải luôn được giữ lại.
- {{ui:Chướng ngại}}: nhấp các mặt mà vùng xung quanh phải luôn trống, và đặt khoảng cách (**Giữ trống trong**), ví dụ chỗ cho một trục hoặc một dụng cụ.

Nhấn **Chọn xong** hoặc {{key:Esc}} sau khi nhấp các mặt. Các sắc xanh lá và đỏ thể hiện các vùng.

## Tạo và so sánh

Nhấn {{ui:Tạo}}. Bảng hiển thị tiến trình và thời gian còn lại; **Dừng** hủy. Mỗi kết quả xuất hiện trong bảng **Kết quả**: thể tích mục tiêu, vật liệu, **khối lượng**, **ứng suất lớn nhất**, **chuyển vị lớn nhất** và **hệ số an toàn** (giới hạn chảy ÷ ứng suất), tất cả từ việc giải lại hình dạng hoàn thành như các khối lập phương đặc với vật liệu thực.

Chọn một kết quả để xem nó trong khung nhìn (chi tiết bị ẩn; đánh dấu **Hiện chi tiết xuyên qua nó** để thấy cả hai). Bên dưới bảng: nó mất bao nhiêu lần lặp và có ổn định hay không, độ cứng của nó như một khối đặc so với con số riêng của bộ tối ưu, và bề mặt của nó.

## Sử dụng một kết quả

- **STL**: một lưới tam giác kín, sẵn sàng để in 3D.
- **STEP (dạng mặt phẳng)**: cùng bề mặt như một khối đặc STEP được tạo từ các mặt phẳng.
- **Tệp chi tiết mới**: một chi tiết PartCraft mà đặc trưng duy nhất của nó là kết quả dưới dạng khối đặc đã nhập. Mở nó để phác thảo trên đó, khoét lỗ hoặc kiểm tra trong Mô phỏng. Nó là dạng mặt phẳng (hàng nghìn mặt phẳng), không phải một hình dạng có thể chỉnh sửa.
- **Thêm vào chi tiết này** nối kết quả vào chi tiết; nó chỉ bật cho không gian thiết kế dạng hộp (với chính chi tiết làm không gian, kết quả nằm bên trong chi tiết).

**Tệp chi tiết mới** và **Thêm vào chi tiết này** chưa được xây dựng trong phiên bản này: kết quả trở thành một khối đặc đã nhập, điều này cần nhân chính xác. Tải xuống STL và STEP (dạng mặt phẳng) hoạt động.

## Mức độ tin cậy

- Nó tối ưu **độ cứng** cho thể tích đã cho. Chưa có giới hạn ứng suất và chưa có quy tắc chế tạo (phần nhô, hướng phay, kích thước lỗ tối thiểu): hãy kiểm tra kết quả đã chọn trong [Mô phỏng](topic:simulation) và điều chỉnh.
- Các thành viên mỏng rộng một hoặc hai khối lập phương là xấp xỉ: hãy dùng kích thước phần tử nhỏ hơn cho chi tiết mảnh.
- Phương pháp là SIMP với bộ lọc mật độ, phép chiếu ngưỡng và cập nhật theo tiêu chí tối ưu; ứng suất và độ võng được báo cáo là của kết quả dưới dạng khối lập phương, điều này trung thực nhưng thô ở các góc sắc.

## Liên quan

- [Kiểm tra ứng suất và độ võng (Mô phỏng)](topic:simulation)
- [Xuất để in, STEP và DXF](topic:export-files)
- [Những gì chưa xây dựng](topic:not-built-yet)
