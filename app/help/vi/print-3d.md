---
title: Chuẩn bị chi tiết để in 3D
summary: Kiểm tra chi tiết hoặc lắp ráp đã kín, vừa bàn in của máy bạn và đứng trên một đế, rồi tải về dạng STL hoặc 3MF cho phần mềm cắt lớp.
keywords: in 3d, in ba chiều, máy in, in, slicer, stl, 3mf, kín, đóng kín, manifold, bàn in, kích thước bàn in, mặt bàn in, phần nhô ra, giá đỡ, đế, milimét, xuất, ren, khe hở
from: 90d81dff
---

Phần mềm cắt lớp cần một hình kín: không có lỗ hổng, mọi mặt hướng ra ngoài, và không có gì xuyên qua chính nó. Các chi tiết PartCraft dựng ra đều kín theo cấu trúc, nên bước kiểm tra chủ yếu cho bạn biết kích thước, chi tiết có vừa bàn in của máy bạn không, nó có đứng trên một mặt phẳng không, và bao nhiêu phần của nó nhô ra.

## Kiểm tra và tải về

1. Tùy chọn, chỉ một lần: đặt bàn in của máy in trong {{ui:Cài đặt}} › PartCraft › **Máy in 3D**: chiều rộng, chiều sâu và chiều cao tính bằng milimét. Để trống nếu bạn muốn bỏ qua kiểm tra đó.
2. Chọn {{ui:Xuất}}, rồi {{ui:Kiểm tra in 3D (STL hoặc 3MF)…}}.

   Hộp thoại ghi "Sẵn sàng in" hoặc "Chưa sẵn sàng in", liệt kê mọi vấn đề, và cho biết kích thước trên bàn in (X × Y × Z, tính bằng milimét), thể tích và số tam giác.

3. Nhấp {{ui:Tải 3MF}} hoặc {{ui:Tải STL}}. Tệp giống với {{ui:Xuất}} › {{ui:3MF, để in 3D}} hoặc {{ui:STL, để in 3D}}.

Trong lắp ráp, việc kiểm tra và các tệp lấy toàn bộ lắp ráp, mọi bản sao ở đúng vị trí đặt của chúng.

Chi tiết được kiểm tra đứng như cách xuất ghi nó: phần hướng lên trong PartCraft (vuông góc với Mặt phẳng trên) thì hướng lên trên bàn in. Chi tiết phác thảo trên Mặt phẳng trên sẽ nằm phẳng.

## Hộp thoại có thể nói gì

**Chưa sẵn sàng in** (phần mềm cắt lớp có thể từ chối hoặc in sai): lỗ hổng (cạnh chỉ có một mặt ở một phía), cạnh được chung bởi ba mặt trở lên, các mặt hướng ngược nhau, thân bị lộn trong ra ngoài, hoặc thân xuyên qua chính nó. Một chi tiết dựng trong PartCraft thì không bao giờ nên hiện những điều này; nếu có, xem [Khắc phục sự cố](topic:troubleshooting).

**Cảnh báo** (vẫn in được, nhưng hãy xem trước):

- **Lớn hơn bàn in của máy in**, kể cả khi xoay 90° trên bàn.
- **Không có gì nằm phẳng ở đáy**: xoay chi tiết trong phần mềm cắt lớp để một mặt tựa lên bàn in, nếu không sẽ cần giá đỡ hoặc đế bè.
- **Nghiêng ra hơn 45° so với phương thẳng đứng**: các mặt đó cần giá đỡ khi đặt như hiện tại. Một hướng khác có thể cần ít hơn.
- **Các thân rời chồng lên nhau** hoặc **chạm nhau mặt đối mặt**: phần mềm cắt lớp thường gộp chúng. {{ui:Kết hợp}} trong Đặc trưng › Thêm sẽ nối chúng thành một thân. Xem [Thân](topic:bodies).
- **Nhỏ hơn 1 mm theo một chiều**: kiểm tra kích thước của chi tiết.

## Ren có thể in

Một ren được mô hình hóa sẽ in thành ren thật. Hãy đặt một **Khe hở** để bulông in được vặn vào đai ốc in được: xem [Ren](topic:threads).

## Làm mịn mặt tròn

STL và 3MF được tạo từ các tam giác. Để mặt tròn mượt hơn, nhấp vào khoảng trống để không chọn gì, rồi đặt **Đường cong** thành **Mịn (128 mỗi vòng)** hoặc **Rất mịn (256 mỗi vòng)** trong bảng bên phải trước khi xuất. Nhiều tam giác hơn thì tệp lớn hơn.

## Lớn hơn, nhỏ hơn, hoặc thành nhiều mảnh

- **Xuất › Tỷ lệ để in (STL hoặc 3MF)…** lưu chi tiết đã được co giãn theo từng trục mà không làm thay đổi nó: một **dung sai co ngót** tính bằng phần trăm (kích thước × (1 + s), hoặc kích thước chính xác ÷ (1 − s)) cho khuôn đúc, hoặc các hệ số đơn giản quanh điểm giữa, góc thấp nhất, điểm giữa đáy hoặc gốc tọa độ.
- **Xuất › Chia để in (một tệp zip các mảnh)…** cắt chi tiết quá lớn cho máy in của bạn thành các mảnh, mỗi mảnh vừa với bàn in bạn đưa, được nối bằng chốt, then, đuôi én, lỗ chốt hoặc hốc nam châm (với khe hở bạn đặt). Mỗi mảnh và mỗi mối nối được đánh số, và các mảnh được lưu dạng STL hoặc 3MF trong một tệp zip cùng một bảng lắp ráp. Bản thân chi tiết không thay đổi.

## Không được kiểm tra

Độ dày thành, các chi tiết nhỏ hơn đầu phun của bạn có thể vẽ, và cách phần mềm cắt lớp đặt giá đỡ. Phần mềm cắt lớp của bạn sẽ hiển thị những điều đó.
