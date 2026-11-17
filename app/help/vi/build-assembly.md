---
title: Dựng lắp ráp với khớp
summary: Bắt đầu một lắp ráp từ một chi tiết, chèn các bản sao và tệp chi tiết khác, nối chúng bằng khớp cứng (rigid), khớp xoay (revolute), khớp trượt (slider), khớp trụ (cylindrical), khớp phẳng (planar), khớp cầu (ball) và khớp chốt trong rãnh (pin-in-slot) trên các mặt phẳng, căn tâm khớp trên các trục, sửa chi tiết tại chỗ và lưu lắp ráp.
keywords: lắp ráp, ghép, khớp, vòng, vòng kín, liên kết, cơ cấu bốn thanh, cơ cấu, cứng, xoay, trượt, trụ, phẳng, cầu, khớp cầu, chốt trong rãnh, chèn cấu kiện, cố định, đồng tâm, trùng nhau, sửa chi tiết, tại chỗ, partcraft-asm
from: a53bbfef
---

Lắp ráp ghép các chi tiết lại với nhau. Trong PartCraft, **khớp** đặt các chi tiết: mỗi khớp nằm trên một mặt phẳng của mỗi trong hai chi tiết và ghép chúng mặt đối mặt. Khớp xoay cho phép một chi tiết quay, khớp trượt cho phép nó trượt, còn khớp cứng giữ nó cố định.

## Bắt đầu một lắp ráp

1. Dựng một chi tiết có khối đặc (chi tiết rỗng không thể đưa vào lắp ráp: "Dựng một khối đặc trước, rồi đưa nó vào lắp ráp.").
2. Chọn {{ui:Lắp ráp}} trên thanh công cụ.

Thanh trạng thái hiển thị "Đã bắt đầu lắp ráp với Part1 làm chi tiết cố định. Chèn thêm chi tiết ({{ui:Thêm bản sao}}, {{ui:Chèn}}, hoặc Sửa › Nhân bản), rồi tạo khớp cho chúng." Bảng bên trái hiện liệt kê **Chi tiết** và **Khớp**, và thanh công cụ hiển thị các công cụ lắp ráp. Các công cụ phác thảo và đặc trưng bị ẩn.

Chi tiết đầu tiên là **cố định**: nó không bao giờ di chuyển, và mọi thứ khác được đặt tương đối với nó.

## Chèn chi tiết

- {{ui:Thêm bản sao}} chèn thêm một bản sao của chi tiết đã chọn (hoặc của chi tiết cuối cùng). Các bản sao dùng chung một chi tiết: sửa nó và mọi bản sao đều thay đổi.
- {{ui:Nhân bản}} ({{key:Mod+D}}) trong nhóm Sửa làm điều tương tự cho chi tiết đã chọn. {{key:Mod+C}} và {{key:Mod+V}} sao chép một chi tiết và dán nó cạnh các chi tiết khác, trong lắp ráp này hoặc lắp ráp khác; {{key:Mod+Shift+V}} dán nó ở cùng vị trí. Xem [Sao chép, dán và nhân bản](topic:copy-paste).
- {{ui:Chèn}} chèn một chi tiết từ tệp `.partcraft.json` trên máy tính của bạn. Chi tiết được sao chép vào lắp ráp.

Chi tiết mới xuất hiện cách 20 mm về bên phải của mọi thứ đã có, và giữ ở đó cho đến khi một khớp đặt chúng. Chi tiết không có khớp cũng có thể di chuyển bằng tay: nhập giá trị hoặc kéo các mũi tên (xem [Danh sách chi tiết, khung nhìn tách rời và di chuyển chi tiết](topic:assembly-bom-explode)).

## Ghép hai chi tiết bằng khớp

1. Chọn {{ui:Khớp}} hoặc nhấn {{key:J}}. Bảng bên phải hiển thị **Khớp mới**.
2. Nhấp một mặt phẳng trên chi tiết thứ nhất. Mặt đó được tô sáng.
3. Nhấp một mặt phẳng trên chi tiết thứ hai.

Chi tiết thứ hai nhảy để mặt của nó nằm sát mặt của chi tiết thứ nhất, quay vào nó. Khớp xuất hiện dưới **Khớp**, ví dụ "Revolute1", và bảng bên phải hiển thị các thiết lập của nó.

- Nếu cả hai mặt đều được tạo bằng quay tròn, khớp bắt đầu là **xoay**; nếu không thì là **cứng**. Đổi sau.
- Không thể chọn mặt cong: "Mặt đó cong. Chọn một mặt phẳng (để xoay quanh một lỗ hoặc trục quay tròn, hãy chọn nó trong khớp sau đó)."
- {{key:Esc}} hủy một khớp bạn đã bắt đầu (hoặc nhấp một chi tiết trong danh sách bên trái).

### Thiết lập khớp

| Thiết lập | Tác dụng |
|---|---|
| **Kiểu** | Một trong các khớp trong bảng dưới |
| **Góc (°)** | Xoay chi tiết thứ hai quanh trục của khớp (vuông góc với các mặt) |
| **Độ lệch (mm)** | Di chuyển chi tiết thứ hai dọc theo trục, ra xa mặt (giá trị âm đẩy vào trong) |
| **Dọc theo X**, **Dọc theo Y**, **Nghiêng quanh X**, **Nghiêng quanh Y**, **Dọc theo rãnh**, **Hướng rãnh** | Các giá trị khác, hiển thị cho các khớp dùng chúng |
| **Căn tâm tại** (cho mỗi bên) | Vị trí trục của khớp cắt mặt: "Gốc của chính mặt", trục của một quay tròn ("Trục của Revolve1") hoặc trục của một lỗ ("Hole1, lỗ 2") |

Mỗi giá trị mà khớp cho phép di chuyển có một thanh trượt kéo dưới ô của nó; các giá trị khác chỉ đặt một lần.

| Khớp | Di chuyển | Đặt một lần |
|---|---|---|
| **Cứng** | không gì | Góc, Độ lệch |
| **Xoay** | Góc (bản lề) | Độ lệch |
| **Trượt** | Độ lệch (ngăn kéo) | Góc |
| **Trụ** | Góc và Độ lệch (trục trong ổ trượt) | |
| **Phẳng** | Dọc theo X, Dọc theo Y trên mặt, và Góc (chi tiết trượt trên bàn) | |
| **Cầu** | Góc (quay) và Nghiêng quanh X và Y, quanh tâm của khớp (khớp cầu) | |
| **Chốt trong rãnh** | Dọc theo rãnh và Góc (chốt trong rãnh thẳng) | Hướng rãnh: góc của rãnh so với X của mặt |

X và Y của một mặt là của mặt thuộc chi tiết thứ nhất; tâm khớp được đặt bởi **Căn tâm tại**.

"Gốc của chính mặt" là gốc của chi tiết được chiếu lên mặt, thường không phải nơi bạn muốn các chi tiết thẳng hàng. Với chi tiết tròn và chốt, đặt **Căn tâm tại** thành trục của quay tròn hoặc lỗ ở cả hai bên: các trục khi đó thẳng hàng, giống như ghép đồng tâm.

### Ví dụ: hai mặt bích bắt bu lông mặt đối mặt

1. Mở chi tiết mặt bích (một quay tròn với mẫu tròn các lỗ) và chọn {{ui:Lắp ráp}}.
2. Chọn {{ui:Thêm bản sao}}.
3. Nhấn {{key:J}}, nhấp mặt phẳng của đĩa mặt bích thứ nhất (mặt mà các lỗ bu lông bắt đầu từ đó), rồi cùng mặt đó trên mặt bích thứ hai. Các mặt được tạo bằng quay tròn, nên khớp là xoay.
4. Đặt **Căn tâm tại** thành "Trục của Revolve1" cho cả hai bên. Các mặt bích giờ dùng chung một trục.
5. Nhập `22.5` vào **Góc (°)** để thẳng hàng các lỗ bu lông, hoặc kéo thanh trượt.

## Vòng kín: cơ cấu liên kết

Các chi tiết nối thành vòng (cơ cấu bốn thanh, tay quay và trượt, khung được giằng cả hai phía) tạo thành một **vòng**. PartCraft giải mọi vòng để nó khép kín: các khớp trên đó nhận các giá trị nối vòng lại, di chuyển ít nhất có thể từ vị trí cũ.

- **Đặt hoặc kéo** một giá trị của khớp trên vòng thì phần còn lại của vòng đi theo. Với cơ cấu bốn thanh, kéo **Góc** của tay quay và thanh nối và thanh lắc sẽ di chuyển theo. Giá trị bạn đặt được giữ nguyên; các giá trị khác được tính từ nó.
- Trong danh sách, khớp trên một vòng vẫn có thể di chuyển có màu **xanh dương**: một giá trị khác vẫn có thể được đặt. Vòng không thể di chuyển (khung có giằng) giữ màu đen. Vòng không thể khép kín có màu **đỏ**.
- Ô **Chi tiết** hiển thị **Vòng**: có bao nhiêu vòng đã khép và bao nhiêu giá trị còn có thể di chuyển, ví dụ "1 đã khép; 1 giá trị còn có thể di chuyển".
- {{ui:Kiểm tra va chạm trong suốt chuyển động}} quét một khớp trên vòng với vòng đi theo, từng bước một (xem [Kiểm tra lắp ráp về va chạm và chuyển động](topic:check-assembly)).

Một cơ cấu phẳng xếp từ các thanh dẹt phải khớp về độ sâu: hai chi tiết nối mặt đối mặt ở cả hai phía của một vòng cần cùng chiều cao xếp chồng theo cả hai hướng. Dùng **Độ lệch** của khớp để nâng một chi tiết ở chỗ chồng xếp không khớp, nếu không vòng không thể khép kín.

## Làm việc với các chi tiết

Nhấp một chi tiết trong khung nhìn hoặc trong danh sách để chọn nó. Bảng bên phải hiển thị tên chi tiết, có bao nhiêu bản sao, thể tích, các khớp của nó, và việc nó là cố định, được đặt bởi các khớp, hay "Chưa nối: giữ nguyên vị trí đã đặt". Các nút:

- {{ui:Sửa chi tiết này}} (hoặc {{ui:Sửa chi tiết}} trên thanh công cụ, hoặc nhấp đúp chi tiết trong danh sách): mở chi tiết để sửa;
- {{ui:Chèn một bản sao}};
- {{ui:Đặt làm chi tiết cố định}};
- {{ui:Xóa}}: cũng xóa các khớp của nó, sau khi hỏi xác nhận.

Một lắp ráp giữ ít nhất một chi tiết: "Lắp ráp cần giữ ít nhất một chi tiết. Đóng nó thay thế."

### Sửa một chi tiết tại chỗ

1. Chọn một chi tiết và chọn {{ui:Sửa chi tiết}}. Chi tiết mở với lịch sử của nó; tiêu đề hiển thị "Bracket (trong lắp ráp Bracket)".
2. Thay đổi nó như bất kỳ chi tiết nào.
3. Chọn {{ui:Quay lại}} trên thanh công cụ. Lắp ráp được cập nhật: mọi bản sao của chi tiết đó đều thay đổi, và các khớp trên mặt được tạo từ cạnh phác thảo sẽ theo.

Đưa thay đổi về là một bước trong danh sách hoàn tác của lắp ráp.

## Hoàn tác, lưu và đóng

- Lắp ráp có danh sách hoàn tác riêng: {{key:Mod+Z}} và {{key:Mod+Y}} hoạt động với khớp, các lần chèn và thiết lập.
- {{ui:Lưu}} hoặc {{key:Mod+S}} tải xuống `<assembly name>.partcraft-asm.json`, kèm mọi chi tiết bên trong. Mở lại sau bằng {{ui:Mở}}.
- {{ui:Đóng}} đóng lắp ráp và quay về chi tiết bạn đã bắt đầu. Nếu lắp ráp chưa lưu, nó sẽ hỏi: {{ui:Hủy}}, {{ui:Bỏ lắp ráp}} hoặc {{ui:Lưu trước}}.
- Để đổi tên lắp ráp, nhấp vào khoảng trống để không chọn gì và đổi **Tên** trong bảng bên phải.

## Lắp ráp lớn

Một lắp ráp có thể chứa hàng nghìn bản sao của vài chi tiết. Các bản sao của một chi tiết được vẽ cùng nhau, một khớp bạn xoay chỉ đặt các chi tiết phía sau nó, và danh sách chi tiết hiển thị các hàng đầu với nút "Hiện thêm" bên dưới (chi tiết đang chọn luôn được liệt kê).

- Khi bạn xoay hoặc thu phóng khung nhìn, một lắp ráp có hơn khoảng 300.000 tam giác được vẽ thành một hộp cho mỗi chi tiết, rồi vẽ đầy đủ sau khi bạn dừng một lúc.
- {{ui:Khung nhìn}} › {{ui:Hiển thị nhẹ}} giữ các hộp hiển thị mọi lúc. Chọn chi tiết và khớp vẫn dùng các chi tiết thật.
- Tốc độ xoay còn phụ thuộc vào card đồ họa của bạn. Các con số PartCraft đã đo nằm trong ghi chú phát hành cùng với máy đã đo.

## Sự cố khớp

- Chi tiết không khớp nào chạm tới được liệt kê là **tự do** và bảng ghi "Bracket2 không được nối với chi tiết cố định, nên nó giữ nguyên vị trí đã đặt."
- Một vòng không thể khép kín (các chiều dài không đủ, một giới hạn chặn một khớp, các mặt không khớp về độ sâu): "Revolute3 khép một vòng không thể khép kín: nó lệch 2.000 mm. Kiểm tra các mặt, độ lệch và giới hạn của các khớp trong vòng." Các khớp của nó chuyển sang màu đỏ.
- Nếu một mặt hoặc trục mà khớp dùng không còn sau khi sửa chi tiết: "Mặt mà khớp này dùng đã không còn trong Bracket." Xóa khớp và tạo lại.

Tiếp theo: [Kiểm tra lắp ráp về va chạm và chuyển động](topic:check-assembly).
