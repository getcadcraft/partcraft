---
title: Hình khối tự do với Form, và các đặc trưng bề mặt
summary: Đẩy và kéo một lồng điều khiển mịn trong không gian làm việc Form, gấp cạnh, dùng đối xứng, kiểm tra và hoàn thiện thành một khối đặc hoặc bề mặt chính xác, rồi vá, chuyển tiếp, khâu, làm dày, dời, kéo dài và cắt bề mặt trong Thiết kế. Những gì chính xác và những gì được xấp xỉ.
keywords: form, hình khối tự do, t-spline, chia lưới con, subdivision, catmull-clark, lồng, cage, quadball, nếp gấp, đối xứng, zebra, độ cong, bề mặt, vá, mặt chuyển tiếp, khâu, làm dày, dời bề mặt, kéo dài, cắt
from: 0d326ef4
---

:::note
**Chưa xây dựng trong phiên bản này.** Hoàn thiện một form vào chi tiết, và các đặc trưng bề mặt, cần một nhân hình học chính xác, thứ mà phiên bản PartCraft này không có: nó dựng mọi chi tiết bằng nhân lưới. [Những gì chưa xây dựng](topic:not-built-yet) cho biết nên làm gì thay thế. Phần còn lại của trang mô tả chúng khi làm việc với nhân chính xác.
:::

Không gian làm việc **Form** tạo ra các hình dạng hữu cơ. Bạn chỉnh sửa một **lồng**, một lưới thô gồm các góc, cạnh và mặt. Hình dạng là bề mặt mịn mà lồng điều khiển (mặt giới hạn Catmull–Clark của nó), nên dời một góc sẽ uốn bề mặt nhẹ nhàng quanh nó. Khi trông ổn, {{ui:Hoàn thiện}} thêm nó vào lịch sử chi tiết như một đặc trưng *Form*, và nhân chính xác biến nó thành các mặt B-spline thực. Sau đó bạn có thể bo góc, cắt, nối với các đặc trưng khác và xuất dưới dạng STEP.

Chọn **Form** trong danh sách **Không gian làm việc** ở bên trái thanh công cụ.

## Bắt đầu một lồng

1. Đặt **Kích thước** và **Số chia** trong bảng bên phải. Số chia là số mặt trên mỗi cạnh.
2. Nhấp {{ui:Hộp}}, {{ui:Quadball}} hoặc {{ui:Mặt phẳng}} trên thanh công cụ. Bảng còn có **Hình trụ**, **Xuyến** và **Mặt theo cú nhấp**.

- **Quadball** là một lồng hộp được lắp sao cho các điểm góc nằm trên một mặt cầu. Giữa các điểm đó bề mặt nằm hơi bên trong mặt cầu: khoảng 0.4 % thể tích ít hơn với 2 số chia.
- **Mặt phẳng** là mở, nên nó trở thành một khối bề mặt (xem "Đặc trưng bề mặt trong Thiết kế" bên dưới).
- **Mặt theo cú nhấp**: nhấp 4 điểm trên mặt phẳng nền (mặt đất) hoặc trên các góc của lồng để tạo một mặt. Các mặt chung góc sẽ nối với nhau. Nhấn {{key:Enter}} sau 3 điểm để có tam giác, hoặc {{key:Esc}} để dừng.

Lồng chưa hoàn thành của bạn được lưu cùng tệp chi tiết, nên bạn có thể đóng tệp và tiếp tục sau.

## Chọn và di chuyển

- Nhấp một góc, cạnh hoặc mặt của lồng. {{key:Shift}}+nhấp để thêm hoặc bỏ các mục. {{key:Esc}} xóa vùng chọn.
- Một gizmo xuất hiện giữa vùng chọn. Kéo một mũi tên để di chuyển dọc theo nó, hoặc một ô vuông để di chuyển trong mặt phẳng đó. Nhấn {{key:W}} để di chuyển, {{key:E}} để xoay và {{key:R}} để tỷ lệ, hoặc dùng các nút trong bảng. {{ui:Gizmo}} trên thanh công cụ chuyển qua lại giữa chúng.
- **Suy giảm mềm** (mm) cũng kéo các góc trong khoảng cách đó, mờ dần về không ở cạnh của khoảng cách đó.
- Mỗi lần kéo là một bước hoàn tác: {{key:Ctrl+Z}} và {{key:Ctrl+Y}} hoạt động như thường lệ.

## Thay đổi lồng

Các nút **Sửa đổi** trong bảng làm việc trên vùng chọn:

| Nút | Tác dụng |
|---|---|
| {{ui:Đùn}} | Các mặt được chọn đẩy ra một khoảng **Khoảng cách đùn** dọc theo pháp tuyến của chúng, với các mặt bên mới. Các cạnh mở được chọn mọc thêm mặt mới ra phía ngoài. |
| {{ui:Vòng cạnh}} / Chèn vòng cạnh | Chia vòng các mặt bốn cạnh cắt qua cạnh được chọn, ở giữa. Nhiều vòng hơn cho các đường cong chặt hơn. |
| Chèn điểm | Thêm một góc ở giữa cạnh được chọn. |
| Chia nhỏ | Chia mỗi mặt được chọn thành các mặt bốn cạnh quanh tâm của nó. |
| Cầu nối | Nối hai mặt được chọn, hoặc hai lỗ mở (chọn một cạnh mở trên mỗi bên), bằng một ống các mặt. Cả hai cần cùng số cạnh. |
| Lấp lỗ | Đóng lỗ mở qua cạnh mở được chọn bằng một mặt. |
| Hàn gộp | Gộp các góc được chọn thành một, tại giữa chúng. |
| Làm phẳng | Dời các góc được chọn lên mặt phẳng khớp nhất với chúng. |
| Xóa | Gỡ các mặt, cạnh (hai mặt gộp lại) hoặc góc được chọn. |

## Cạnh sắc, đối xứng và hiển thị

- {{ui:Nếp gấp}} làm các cạnh được chọn thành sắc. **Trọng số nếp gấp** 10 là hoàn toàn sắc. Trọng số nhỏ hơn giữ sắc trong chừng ấy bước tinh chỉnh rồi làm mềm, cho một đường bo tròn chặt thay vì nếp gấp cứng. **Bỏ nếp gấp** làm chúng mịn lại. **Đỉnh sắc** ghim một góc để bề mặt đi qua nó bằng một điểm.
- **Đối xứng** lấy đối xứng lồng qua X, Y hoặc Z = 0. Nó giữ phía dương, lấy đối xứng nó, và nối hai nửa. Sau đó, một chỉnh sửa ở một bên sẽ xảy ra ở cả hai bên. Các góc nằm trên mặt phẳng đối xứng vẫn nằm trên đó.
- {{ui:Hiển thị}} chuyển giữa **Mịn** (bề mặt mà đặc trưng sẽ là) và **Hộp** (chính các mặt của lồng).
- **Phân tích**: **Vạch zebra** phản chiếu ánh sáng có vạch từ khung nhìn hiện tại. Chúng uốn mượt qua bề mặt trơn và đứt ở nếp gấp. **Độ cong trung bình** tô vùng lồi màu đỏ, vùng lõm màu xanh dương và vùng phẳng màu trắng. Nó được đo trên lưới đang hiển thị bằng công thức cotang, nên nó là hướng dẫn, không phải phép đo.

## Kiểm tra và hoàn thiện

- **Kiểm tra chính xác** chuyển lồng trong nhân chính xác mà không thay đổi chi tiết. Nó báo cáo có bao nhiêu mảng B-spline lồng tạo ra, bao nhiêu mảng là chính xác, và kết quả có phải là khối đặc kín, hợp lệ hay không, cùng thể tích của nó.
- {{ui:Hoàn thiện}} thêm một đặc trưng *Form* vào lịch sử, hoặc cập nhật form bạn đang chỉnh sửa, và đưa bạn trở lại Thiết kế. Một lồng kín trở thành khối đặc. **Thao tác** của nó trong bảng Thiết kế có thể là Khối mới, Nối, Cắt hoặc Giao. Một lồng mở trở thành khối bề mặt.
- Để thay đổi form sau này, chọn nó trong lịch sử và nhấp **Sửa trong Form**. Khối đã dựng sẽ bị ẩn khi bạn chỉnh sửa lồng của nó.
- **Bỏ đi** loại lồng mà không đụng đến lịch sử.

## Phần nào chính xác và phần nào được xấp xỉ

Mỗi mặt bốn cạnh của lồng, được chia nhỏ khi cần, trở thành một mảng B-spline bicubic.

- Khi mọi góc của một mặt là *đều* (bốn cạnh gặp nhau bên trong bề mặt, hoặc ba trên cạnh mở hoặc dọc nếp gấp), mảng **chính xác** là bề mặt chia lưới con. Các kiểm tra xác nhận điều này đến 1e-9 mm.
- Quanh một **điểm bất thường** (ba, năm hoặc nhiều cạnh gặp nhau, một góc của mặt ba hoặc năm cạnh, hoặc đầu của một nếp gấp) không có mảng đa thức chính xác. Ở đó mảng lấy điểm chính xác và mặt tiếp tuyến tại góc đó cùng các đường cạnh của mảng lân cận, nên các mảng vẫn gặp nhau không có khe hở. Tính liên tục tiếp tuyến qua các cạnh gặp nhau tại điểm đó là xấp xỉ. Bảng Form và bảng của đặc trưng cho góc lớn nhất, thường dưới 2°. Một **Mức** cao hơn trong bảng của đặc trưng làm các mảng này nhỏ hơn và sát hơn.
- Nếp gấp sắc là cạnh thật của khối đặc, nên bạn có thể bo chúng.
- Mỗi mảng là một mặt riêng, nên một form có nhiều mặt và các đường được vẽ giữa chúng.

## Đặc trưng bề mặt trong Thiết kế

Các lệnh bề mặt nằm trong menu {{ui:Thêm}} của Thiết kế, dưới các đặc trưng. Chúng cần nhân chính xác. Các khối bề mặt được vẽ xuyên thấu màu xanh dương. Chúng không phải là một phần của khối đặc cho đến khi bạn làm dày hoặc khâu chúng.

| Lệnh | Tác dụng |
|---|---|
| Vá | Lấp một vòng cạnh kín. {{key:Shift}}+nhấp các cạnh của khối đặc trước, hoặc chọn một khối bề mặt để lấp lỗ mở của nó. **Tiếp tuyến (G1)** làm mảng vá nối với bề mặt đó một cách mượt. |
| Mặt chuyển tiếp | Một bề mặt đi qua một chuỗi đường cong cho mỗi phác thảo (mở hoặc kín), theo thứ tự lịch sử. |
| {{ui:Khâu}} | Khâu các khối bề mặt dọc theo các cạnh chung. Nếu chúng khép kín, kết quả là một khối đặc, với một Thao tác như các đặc trưng khác. |
| {{ui:Làm dày}} | Cho một khối bề mặt một độ dày: theo pháp tuyến của nó, ngược lại, hoặc mỗi phía một nửa. Kết quả là một khối đặc. |
| Dời mặt | Một bản sao của khối bề mặt được dời dọc theo các pháp tuyến của nó. Bản gốc vẫn giữ nguyên. |
| Kéo dài mặt | Làm một bề mặt một mặt lớn thêm vượt qua các cạnh bạn chọn. |
| {{ui:Cắt mặt}} | Cắt một khối bề mặt tại nơi một khối bề mặt khác, hoặc khối đặc, giao cắt nó. Nhấp **Chọn một điểm trên mảnh** để chọn mảnh nào giữ lại, hoặc giữ mọi thứ khác. |

{{ui:Khâu}}, {{ui:Làm dày}}, Kéo dài và {{ui:Cắt mặt}} tiêu thụ khối bề mặt mà chúng bắt đầu từ đó. Các đặc trưng sau dùng khối mới.

Giới hạn hiện nay: các form gồm nhiều mảnh kín rời nhau không chuyển thành một khối đặc; các vùng đều không được gộp thành bề mặt lớn hơn; và xem [Những gì chưa xây dựng](topic:not-built-yet).
