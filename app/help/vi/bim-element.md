---
title: Thiết kế cấu kiện BimCraft và lưu lại
summary: Chi tiết gửi từ BimCraft mở ra cùng với công trình bao quanh, màu xám và chỉ đọc. Thay đổi nó, rồi lưu lại để BimCraft có thể chấp nhận hình dạng mới.
keywords: bimcraft, bim, cấu kiện, gửi, lưu lại, liên kết, công trình, bối cảnh, lân cận, đỡ, giá đỡ, ifc, chấp nhận
from: 0978fe53
---

## Bạn sẽ làm gì

Làm việc trên một chi tiết lấy từ mô hình BimCraft, tại đúng vị trí của nó trong công trình, rồi gửi hình dạng mới trở về.

## Các bước

1. Trong BimCraft, chọn một cấu kiện rồi chọn {{ui:Liên kết chi tiết}} › {{ui:Gửi tới PartCraft}}. PartCraft mở nó như một chi tiết mới. Thanh trạng thái ghi rằng đây là một cấu kiện BIM.
2. Các cấu kiện xung quanh nó (trong vòng 3 m) được vẽ màu xám. Chúng có mặt để bạn thiết kế đối chiếu. Bạn không thể chọn hay thay đổi chúng, và chúng không được lưu trong tệp chi tiết.
3. Thay đổi chi tiết như bình thường: cắt, thêm, khoan, đối xứng. Gốc tọa độ và các trục của nó là của chính cấu kiện, nên chi tiết sẽ trở về đúng vị trí cũ.
4. Chọn {{ui:Tệp}} › {{ui:Xuất}} › {{ui:Lưu trở lại BimCraft}}. Thanh trạng thái ghi revision bạn vừa gửi.
5. Trong BimCraft, cấu kiện hiện là đã thay đổi cho đến khi người ở đó chấp nhận.

## Bạn nên thấy gì

- Chi tiết giữ liên kết của nó trong tệp. Mở lại sau này, thanh trạng thái vẫn ghi rằng đây là một cấu kiện BIM. Công trình màu xám sẽ hiện lại chừng nào trình duyệt còn giữ gói đã được gửi kèm.
- Lưu lại lần nữa sẽ gửi revision 2, 3 và tiếp tục như vậy. BimCraft giữ bản mới nhất.

## Cần biết

- Hình dạng được gửi về dưới dạng lưới, tính bằng milimét, theo các trục riêng của cấu kiện. Các đặc trưng vẫn nằm trong PartCraft.
- {{ui:Lưu trở lại BimCraft}} không làm gì với chi tiết không đến từ BimCraft.
- Chi tiết chưa có khối đặc thì không có gì để gửi.
- Cả hai ứng dụng phải được mở trong cùng một trình duyệt: không có gì được tải lên, hai trang chỉ chuyển cấu kiện qua lại giữa chúng.
