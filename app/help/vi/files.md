---
title: Tệp: mở, lưu và xuất
summary: Các tệp chi tiết và lắp ráp PartCraft mở và lưu, mọi định dạng xuất và những gì chúng giữ, tệp đi đâu, và điều gì thay đổi khi ngoại tuyến hoặc giữa các trình duyệt.
keywords: mở, lưu, xuất, tải xuống, tệp, partcraft.json, tệp lắp ráp, stl, 3mf, step, dxf, pdf, tệp của tôi ở đâu, ngoại tuyến, lưu thành
from: c15c2c48
---

PartCraft làm việc với các tệp trên máy tính của bạn. Nó không bao giờ tải một chi tiết lên, và không có tài khoản hay lưu trữ đám mây nào liên quan. Lưu lên đám mây chưa có.

## PartCraft mở những gì

| Tệp | Phần mở rộng | Cách làm |
|---|---|---|
| Một chi tiết PartCraft | `.partcraft.json` | {{ui:Mở}}, {{key:Mod+O}}, hoặc thả lên khung nhìn 3D |
| Một lắp ráp PartCraft | `.partcraft-asm.json` | Giống vậy: PartCraft nhận ra đó là loại nào |
| Một khối đặc STEP | `.step`, `.stp` | Một thân khối đặc được đọc dưới dạng tam giác: [Mở một tệp STEP và dựng tiếp lên nó](topic:import-step) |

Lưới STL, OBJ và 3MF cũng mở thành thân khối đặc ([Mở một STL, OBJ hoặc 3MF](topic:open-meshes)), và các tệp `.3dm` cũng vậy ([Mở một mô hình .3dm](topic:open-3dm-files)). DXF, IGES và tệp chi tiết riêng của các chương trình khác không mở được (xem [Những gì chưa xây dựng](topic:not-built-yet)).

Quy tắc khi mở:

- Tên tệp chi tiết hoặc lắp ráp phải kết thúc bằng `.json`, và tệp phải dưới 50 MB.
- Tệp được kiểm tra trước khi hiển thị bất cứ thứ gì. Một tệp bị hỏng hoặc đã chỉnh sửa bị từ chối kèm lý do rõ ràng, ví dụ "Đây không phải tệp PartCraft."
- Tệp do PartCraft mới hơn lưu bị từ chối: "Tệp này được lưu bởi một PartCraft mới hơn (phiên bản tệp 3); bản này đọc phiên bản 2." Tệp cũ hơn thì mở được.
- Nếu chi tiết trên màn hình có thay đổi chưa lưu, PartCraft hỏi trước: {{ui:Hủy}}, {{ui:Bỏ thay đổi}} hoặc {{ui:Lưu trước}}.

## Lưu

{{ui:Lưu}} hoặc {{key:Mod+S}} lưu những gì trên màn hình:

- Với chi tiết: `<part name>.partcraft.json`, gồm toàn bộ lịch sử (phác thảo, quan hệ, kích thước, đặc trưng, vị trí lùi về), phần mặt cắt, chi tiết và ghi chú GD&T của tờ bản vẽ, và toàn bộ văn bản của mọi khối đặc STEP đã nhập ở bản dựng trước. Các đặc trưng mà phiên bản này không dựng được được lưu lại không đổi. Bản thân khối đặc không được lưu; PartCraft dựng lại nó từ lịch sử khi tệp mở.
- Với lắp ráp: `<assembly name>.partcraft-asm.json`, kèm **mọi chi tiết bên trong nó**. Một tệp mang cả lắp ráp, nên bạn có thể gửi riêng nó.

Lưu là một **lần tải xuống**. Trình duyệt đặt tệp vào thư mục tải xuống, hoặc hỏi nơi đặt nếu bạn đã đặt nó như vậy. Lưu lần nữa tạo một lần tải xuống mới; trình duyệt có thể đặt tên `Part1 (1).partcraft.json` thay vì thay thế tệp cũ. Hãy đổi tên hoặc di chuyển tệp trong {{pick:mac=Finder|windows=File Explorer|linux=trình quản lý tệp của bạn}} tùy ý.

Các ký tự không phải chữ cái, chữ số, dấu cách, `_`, `.` và `-` trong tên chi tiết trở thành `_` trong tên tệp.

:::tip
Hầu hết trình duyệt có cài đặt hỏi nơi lưu từng lần tải xuống. Hãy bật nó nếu bạn muốn có lựa chọn "Lưu thành" mỗi lần: trong Chrome và Edge nó nằm ở Tải xuống trong cài đặt; trong Firefox ở Chung, Tệp và Ứng dụng; trong Safari ở Chung, Vị trí tải xuống tệp.
:::

Thêm về nơi các tệp tải xuống đi đến và cách giữ tệp an toàn: [Tệp của bạn đi đâu](common:your-files).

## Xuất

Menu {{ui:Xuất}} ghi các định dạng khác. Mỗi cái là một lần tải xuống, đặt tên theo chi tiết.

| Mục menu | Tệp | Có gì trong đó |
|---|---|---|
| {{ui:STL, để in 3D}} | `<name>.stl` | STL nhị phân của các tam giác của khối đặc, milimét, **Z hướng lên** |
| {{ui:3MF, để in 3D}} | `<name>.3mf` | 3MF với khối đặc là một đối tượng, milimét, **Z hướng lên** |
| {{ui:STEP AP242 (khối đặc chính xác)}} | `<name>.step` | Chưa xây dựng trong phiên bản này (bị làm mờ): nó cần kernel chính xác |
| {{ui:STEP AP214 (khối đặc chính xác)}} | `<name>.step` | Chưa xây dựng trong phiên bản này (bị làm mờ) |
| {{ui:STEP (xấp xỉ bằng mặt, kernel lưới)}} | `<name>.step` | Một khối đặc làm từ các mặt phẳng của lưới: **các bề mặt tròn là nhiều mặt phẳng nhỏ**. Milimét, theo các trục riêng của PartCraft (Y hướng lên). STEP nên dùng cho các chương trình CAD khác trong phiên bản này |
| {{ui:DXF của phác thảo hoặc mặt phẳng}} | `<name> - <sketch>.dxf` hoặc `<name> - face.dxf` | DXF R12. Một phác thảo: đường thẳng, cung tròn, vòng tròn và điểm theo tọa độ riêng của phác thảo, trên các lớp PROFILE, CONSTRUCTION và POINTS. Một mặt phẳng được chọn: các đường viền của nó dưới dạng đa tuyến kín (cạnh tròn thành các mặt phẳng nhỏ của chúng) |
| {{ui:Bản vẽ (PDF): hình chiếu, mặt cắt, chi tiết, GD&T}} | `<name> - drawing.pdf` | Tờ bản vẽ A3: ba hình chiếu, đẳng trắc, mặt cắt và chi tiết nếu đã đặt, kích thước tổng thể, ký hiệu GD&T, khung tên |

:::note
{{ui:STEP AP242 (khối đặc chính xác)}} và {{ui:STEP AP214 (khối đặc chính xác)}} chưa được xây dựng trong phiên bản này: hãy dùng {{ui:STEP (xấp xỉ bằng mặt, kernel lưới)}}. Nó có đúng hình dạng và thể tích, nhưng mọi mặt tròn là nhiều mặt phẳng nhỏ, nên các chương trình khác không chọn được một lỗ như một hình trụ. Hãy đặt **Đường cong** mịn hơn trước nếu điều đó quan trọng.
:::

- Việc xuất là của chi tiết trên màn hình. Xuất bị tắt trong lắp ráp; chưa có xuất lắp ráp.
- STL, 3MF, STEP xấp xỉ bằng mặt và DXF mặt luôn được làm từ các mặt phẳng nhỏ. Cài đặt **Đường cong** (trong bảng bên phải khi chưa chọn gì) đặt độ mịn của chúng, từ 32 đến 256 mặt phẳng mỗi vòng. Hãy chọn Mịn hoặc Rất mịn trước khi xuất STL hoặc 3MF để in cho mượt.
- Bản vẽ PDF dùng phông Helvetica có sẵn của trình đọc. Các ký tự nó không hiển thị được sẽ in thành "?".

Từng bước: [Xuất để in, STEP và DXF](topic:export-files) và [Làm một tờ bản vẽ](topic:drawing-pdf).

## Công việc chưa lưu

- PartCraft giữ một bản khôi phục của chi tiết hoặc lắp ráp đang mở trong trình duyệt này một lúc sau mỗi thay đổi, nên một sự cố hoặc thẻ bị đóng không làm mất nó: lần sau bạn mở PartCraft, nó hỏi "Khôi phục công việc của bạn?". Đó không phải là lưu: hãy lưu thành tệp để giữ công việc của bạn. Xem [Khôi phục công việc chưa lưu](common:recover).
- Nếu bạn thử đóng thẻ hoặc tải lại khi có thay đổi chưa lưu, trình duyệt hỏi "Rời khỏi trang?". Đó là hộp của chính trình duyệt; PartCraft không thể đổi lời lẽ của nó.
- {{ui:Mới}}, {{ui:Mở}} và việc đóng một lắp ráp đều hỏi trước khi bỏ các thay đổi chưa lưu.

## Trực tuyến và ngoại tuyến

Mọi thứ diễn ra trên máy tính của bạn: kernel lưới (một chương trình WebAssembly) được tải cùng ứng dụng và dựng hình học cục bộ, và tệp được đọc từ và ghi vào đĩa của bạn. Không có dữ liệu chi tiết nào đi qua mạng. Xem [Kernel lưới](topic:solid-kernels).

Để làm việc hoàn toàn không có kết nối, hãy lưu PartCraft để dùng ngoại tuyến khi bạn đang trực tuyến: chọn {{ui:Lưu để dùng ngoại tuyến}} trên thanh ứng dụng và đợi trong khi nó đếm ("Đang lưu 40 trên 212") cho đến khi ghi **Sẵn sàng ngoại tuyến**. Bản đã lưu gồm thư viện 3D và kernel lưới, nên sau đó mô hình hóa, lưu, mọi thao tác xuất và bản vẽ đều chạy được ngoại tuyến. Nếu nó ghi **Không thể lưu**, hãy bấm vào để thử lại khi trực tuyến; **Không dùng được chế độ ngoại tuyến** nghĩa là cửa sổ trình duyệt này không giữ được bản sao (cửa sổ riêng tư và một số máy tính được quản lý). Khi đã lưu bản sao, bấm **Sẵn sàng ngoại tuyến** sẽ cho {{ui:Lưu lại (lấy bản mới nhất)}} và {{ui:Xóa bản ngoại tuyến}}. Chi tiết: [Làm việc ngoại tuyến](common:offline).

:::online
Bạn đang trực tuyến. Ngay cả khi không lưu để dùng ngoại tuyến, một khi PartCraft đã tải và chip trên thanh trạng thái ghi "Kernel lưới", bạn vẫn làm việc tiếp được nếu kết nối bị đứt. Chỉ cần đừng tải lại trang cho đến khi trực tuyến trở lại.
:::

:::offline
Bạn đang ngoại tuyến. Nếu PartCraft đã mở sẵn, cứ tiếp tục làm việc; lưu và xuất vẫn chạy. Nếu thanh ứng dụng ghi **Sẵn sàng ngoại tuyến**, PartCraft cũng mở từ đầu được khi không có kết nối; nếu không, đừng tải lại thẻ này.
:::

## Khác biệt giữa các trình duyệt

- **Tải xuống.** Mỗi trình duyệt có thư mục tải xuống riêng và cách hỏi riêng. Nếu trình duyệt hỏi liệu trang này có được tải tệp xuống không, hãy cho phép, nếu không việc lưu và xuất không chạy được.
- **Kéo và thả** một tệp lên khung nhìn chạy được trong Chrome, Edge, Firefox và Safari.
- **Tệp từ điện thoại hoặc máy tính bảng.** Trên iPhone và iPad, Mở hiển thị ứng dụng Tệp; tệp đã lưu vào Tệp, Tải xuống. Trên Android chúng vào thư mục Tải xuống.

Không có khác biệt nào về nội dung tệp giữa các trình duyệt hay hệ điều hành.
