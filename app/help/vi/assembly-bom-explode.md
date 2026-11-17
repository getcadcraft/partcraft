---
title: Danh sách chi tiết, khung nhìn tách rời và di chuyển chi tiết
summary: Gán số hiệu, mô tả và vật liệu cho chi tiết lắp ráp, đọc và tải bảng kê vật tư, tạo khung nhìn tách rời bằng các bước hoặc tự động, di chuyển bằng tay các chi tiết không được nối, đặt giới hạn cho khớp, và xuất toàn bộ lắp ráp dưới dạng STL, 3MF hoặc bảng kê vật tư.
keywords: bom, bảng kê vật tư, danh sách chi tiết, số hiệu chi tiết, vật liệu, khối lượng riêng, csv, khung nhìn tách rời, tách rời, thu gọn, đường vết, di chuyển chi tiết, kéo, gizmo, tịnh tiến, xoay, giới hạn khớp, xuất lắp ráp, bước lắp ráp, bản vẽ lắp ráp, bóng số hiệu
from: ebc9f6f3
---

Các công cụ này nằm trong bảng bên phải của một lắp ráp (xem [Dựng lắp ráp với khớp](topic:build-assembly)).

## Thuộc tính chi tiết

Chọn một chi tiết trong danh sách bên trái. Dưới **Thuộc tính chi tiết**, đặt:

- **Số hiệu chi tiết** (tối đa 40 ký tự) và **Mô tả** (tối đa 200).
- **Vật liệu**: một vật liệu thông dụng kèm khối lượng riêng, hoặc **Khối lượng riêng tùy chỉnh…** để nhập một giá trị theo g/cm³. Khi đó bảng hiển thị khối lượng của chi tiết.

Thuộc tính thuộc về chi tiết, nên mọi bản sao của nó dùng chung. Chúng được lưu trong tệp lắp ráp.

## Bảng kê vật tư

Khi không chọn gì ({{key:Esc}}), bảng hiển thị **Bảng kê vật tư**: mỗi chi tiết một hàng với số thứ tự, số lượng (có bao nhiêu bản sao), số hiệu chi tiết, tên, vật liệu và khối lượng. Số thứ tự theo thứ tự chi tiết xuất hiện lần đầu trong danh sách. Khối lượng dùng thể tích của mỗi chi tiết (của khối đa diện mà nhân lưới (mesh) dựng nên, hơi thấp với các chi tiết tròn) và vật liệu của nó; chi tiết không có vật liệu thì không có khối lượng, và khi đó không có tổng.

{{ui:Tải CSV}} lưu danh sách thành tệp CSV (cũng có thể dùng **Xuất › Bảng kê vật tư (CSV)**). Tệp mở được trong bất kỳ bảng tính nào; văn bản bắt đầu bằng = hoặc + được thêm dấu nháy đơn ở đầu để bảng tính không chạy nó như công thức.

## Khung nhìn tách rời

Khung nhìn tách rời kéo các chi tiết ra xa nhau để chụp hình. Khung nhìn này không bao giờ thay đổi khớp hay vị trí thật của các chi tiết: lưu, kiểm tra va chạm và xuất đều dùng vị trí thật.

1. Khi không chọn gì, chọn {{ui:Khung nhìn mới}} dưới **Khung nhìn tách rời**.
2. Dưới **Thêm một bước**, đánh dấu các chi tiết mà bước đó di chuyển, chọn **Hướng** (+X … −Z, pháp tuyến của mặt bạn nhấp, hoặc **Kéo một mũi tên trong khung nhìn**) và **Khoảng cách**, rồi {{ui:Thêm bước}}. Với **Kéo**, kéo mũi tên và thả ra: bước sẽ lấy hướng và khoảng cách bạn đã kéo.
3. Thêm nhiều bước hơn. Chúng chạy lần lượt nhau.
4. Kéo thanh trượt giữa **Đã lắp ráp** và **Tách rời** để tạo hoạt hình khung nhìn. Các đường vết nét đứt chạy từ vị trí nghỉ của mỗi chi tiết đến vị trí hiện tại của nó.

{{ui:Tự động (xuyên tâm)}} đưa mọi chi tiết, trừ chi tiết cố định, ra xa khỏi giữa lắp ráp. {{ui:Tự động (theo khớp)}} đưa từng chi tiết được nối (cùng mọi thứ nối phía dưới nó) ra theo pháp tuyến mặt của khớp. Bạn có thể giữ nhiều khung nhìn đặt tên; chọn một trong **Khung nhìn**, hoặc **Đã lắp ráp** để đưa các chi tiết về vị trí cũ. Khung nhìn được lưu trong tệp lắp ráp.

## Di chuyển chi tiết bằng tay

Chỉ chi tiết không có khớp nối với chi tiết cố định mới di chuyển bằng tay (chi tiết cố định đứng yên; các khớp đặt phần còn lại). Chọn nó và, dưới **Di chuyển bằng tay**:

- Nhập **ΔX, ΔY, ΔZ** rồi chọn {{ui:Di chuyển}}, hoặc chọn một trục và **Góc** rồi {{ui:Xoay}} (quanh giữa chi tiết).
- {{ui:Kéo để di chuyển}} hiện các mũi tên trên chi tiết: kéo một mũi tên để di chuyển dọc trục đó, hoặc một ô vuông để di chuyển trong mặt phẳng. {{ui:Kéo để xoay}} hiện các vòng để xoay nó. Mỗi lần kéo là một bước hoàn tác. {{key:Esc}} ẩn các mũi tên.

## Giới hạn khớp

Chọn một khớp có thể chuyển động và, dưới **Giới hạn**, đánh dấu **Giữ … trong giới hạn** cho bất kỳ giá trị nào của nó, rồi đặt **Nhỏ nhất** và **Lớn nhất**. Mỗi giá trị được giữ trong giới hạn riêng, thanh trượt của nó chỉ phủ đúng khoảng đó, và **Kiểm tra va chạm trong suốt chuyển động** chỉ quét trong các giới hạn này. Khớp trụ có thể giới hạn góc, độ lệch hoặc cả hai. Khi đổi kiểu khớp, các giới hạn của giá trị mà kiểu mới không có sẽ bị bỏ.

## Xuất toàn bộ lắp ráp

Trong lắp ráp, menu **Xuất** ghi toàn bộ lắp ráp với mọi chi tiết ở đúng vị trí đặt:

- **STEP AP242 / AP214** và **Bản vẽ (PDF)** chưa được xây dựng trong phiên bản này: chúng cần nhân chính xác, nên bị làm xám. Thay vào đó, xuất STEP (khối chính xác) của từng chi tiết từ chính chi tiết đó.
- **STL**: một lưới chung cho mọi chi tiết. **3MF**: mỗi chi tiết một lần, được đặt một lần cho mỗi bản sao.
- **Bảng kê vật tư (CSV)**.

## Giới hạn

- Bản vẽ lắp ráp và STEP lắp ráp chưa được xây dựng trong phiên bản này (chúng cần nhân chính xác). Khung nhìn tách rời chỉ dùng để chụp hình trên màn hình.
