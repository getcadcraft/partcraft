---
title: Chuyển từ một trình dựng mô hình tham số khác
summary: Thói quen của các trình dựng mô hình chi tiết tham số trên máy tính để bàn ánh xạ sang PartCraft như thế nào, và những khác biệt khiến người dùng có kinh nghiệm vấp trong giờ đầu tiên.
keywords: chuyển đổi, di chuyển, quen thuộc, trình quản lý đặc trưng, cây thiết kế, kích thước thông minh, đùn khối đắp, đùn cắt, trình hỗ trợ lỗ, ghép, phát hiện giao thoa, thanh lùi, bảng thuộc tính, chuột, khác biệt
from: fbacaee1
---

Nếu bạn thiết kế chi tiết trong SolidWorks, phần lớn ý tưởng của PartCraft sẽ quen thuộc: phác thảo trên các mặt phẳng Front, Top và Right, quan hệ và kích thước thông minh, lịch sử đặc trưng có thanh lùi, và các lắp ráp được đặt bằng ghép. Cách bạn tiếp cận chúng khác ở một số chỗ, và bản dựng đầu tiên này làm ít hơn. Trang này ánh xạ thói quen của bạn và liệt kê những điều bất ngờ.

## Thói quen, được ánh xạ

| Bạn quen với | Trong PartCraft |
|---|---|
| Cây thiết kế bên trái | Lịch sử bên trái: các mặt phẳng, rồi đến các đặc trưng, phác thảo thụt vào dưới đặc trưng dùng chúng |
| Các mặt phẳng Front, Top và Right | Cùng ba mặt phẳng, đi qua gốc tọa độ. Front là mặt XY, Top là XZ, Right là YZ; Y hướng lên |
| Phác thảo trên một mặt phẳng hoặc mặt, rồi góc xác nhận để thoát | {{ui:Phác thảo}} ({{key:S}}) trên một mặt phẳng hoặc mặt phẳng đã chọn; {{ui:Thoát}} hoặc {{key:Esc}} cho đến khi nó đóng |
| Kích thước thông minh | {{ui:Kích thước}} ({{key:D}}). Nhấp một hoặc hai đối tượng, rồi vị trí con số sẽ đặt. Vị trí bạn đặt sẽ chọn ngang, đứng hoặc song song |
| Thêm Quan hệ trong bảng thuộc tính | Chọn đối tượng, rồi các nút quan hệ trong bảng bên phải (Trùng nhau, Ngang, Song song, Tiếp tuyến, Bằng nhau, v.v.) |
| Quan hệ tự động khi phác thảo | Bắt điểm thêm các quan hệ trùng nhau, điểm trên đường cong, ngang và đứng |
| Màu phác thảo xanh dương / đen / đỏ | Cùng ý tưởng: xanh dương khi chưa xác định đủ, đen khi xác định đầy đủ, đỏ khi xác định thừa. Thẻ hiển thị các bậc tự do còn lại |
| Đường tâm cho quay tròn | {{ui:Đường tâm}} ({{key:N}}); {{ui:Quay tròn}} dùng đường tâm đầu tiên trừ khi bạn chọn một trục khác |
| Bo góc phác thảo | {{ui:Bo góc}} ({{key:F}}) trong phác thảo: nhấp góc, nhập bán kính |
| Chuyển đổi hình học dựng | {{ui:Dựng}} ({{key:Q}}) |
| Khối đắp đùn | {{ui:Đùn}}: Mù, Giữa mặt phẳng, Đến mặt / kế tiếp / đỉnh, Dời từ mặt, hướng thứ hai, côn, một đường bao (Chọn vùng) |
| Cắt đùn | {{ui:Cắt}}: bắt đầu là Xuyên suốt; chuyển sang Mù để có hốc |
| Khối đắp quay tròn / cắt | {{ui:Quay tròn}} / {{ui:Thêm}} › {{ui:Cắt quay tròn}} |
| Mặt phẳng / trục / điểm tham chiếu | {{ui:Thêm}} › {{ui:Mặt phẳng}}, {{ui:Trục}}, {{ui:Điểm}} (xem [Mặt phẳng, trục và điểm tham chiếu](topic:reference-geometry)) |
| Khối đắp hoặc cắt quét / chuyển tiếp, độ nghiêng | {{ui:Thêm}} › {{ui:Độ nghiêng khuôn}} trên các mặt phẳng (xem [Quét, chuyển tiếp và độ nghiêng khuôn](topic:sweep-loft-draft)). {{ui:Quét}} và {{ui:Chuyển tiếp}} chưa được xây dựng trong phiên bản này (chúng cần nhân chính xác) |
| Trình hỗ trợ lỗ | {{ui:Lỗ}} tại mọi điểm phác thảo rời: đơn giản, lỗ khoét chìm, lỗ vát côn (90° / 82°) hoặc ren hệ mét ISO đã taro M2–M24, xuyên suốt hoặc mù |
| Mẫu thẳng / tròn, đối xứng | {{ui:Thẳng}}, {{ui:Tròn}}, {{ui:Đối xứng}} (đặc trưng hoặc toàn bộ thân) |
| Bo góc và vát mép trên cạnh | {{ui:Bo góc}} / {{ui:Vát mép}}: nhấp một cạnh, {{key:Shift}}+nhấp thêm, rồi nhấn nút. Một bán kính; vát mép bằng nhau, hai khoảng cách hoặc khoảng cách-góc. Trong phiên bản này chỉ các cạnh thẳng giữa hai mặt phẳng, và các mối bo gặp nhau tại một góc được cắt chéo. Bo hoặc vát mép các cạnh cong trong phác thảo ({{ui:Bo góc}} trong phác thảo, {{key:F}}) |
| Vỏ | {{ui:Vỏ}}: nhấp các mặt phẳng để mở, rồi nhấn nút. Một độ dày thành |
| Mở tệp STEP | {{ui:Mở}}: đọc dưới dạng tam giác, một thân khối đặc để dựng trên đó ([Mở tệp STEP](topic:import-step)) |
| Sửa đặc trưng, rồi OK | Nhấp đặc trưng; đổi các con số ở bên phải; nó dựng lại khi bạn gõ. Không có OK, không có Hủy: dùng {{key:Mod+Z}} |
| Sửa phác thảo | Nhấp đúp phác thảo trong lịch sử |
| Dựng lại | Tự động sau mỗi thay đổi. Không có phím dựng lại |
| Tắt / bật lại | {{ui:Tắt}} / {{ui:Bật lại}} trong bảng bên phải |
| Kéo thanh lùi | {{ui:Quay lại đến đây}} trên một đặc trưng; nhấp "Thanh lùi · tiến tới" để quay lại |
| Kéo đặc trưng trong cây để sắp xếp lại | {{ui:Lên}} / {{ui:Xuống}} hoặc {{key:Alt+Up}} / {{key:Alt+Down}}; bị từ chối kèm lý do khi nó làm vỡ một phụ thuộc |
| Sửa kích thước bằng cách nhấp đúp trên mô hình | Chọn đặc trưng: các kích thước của phác thảo của nó được liệt kê trong bảng bên phải |
| Ghép: trùng nhau, đồng tâm, khoảng cách, góc | {{ui:Khớp}} ({{key:J}}): chọn một mặt phẳng trên mỗi chi tiết; khớp đặt chúng mặt đối mặt. **Căn tâm tại** một trục hoạt động như đồng tâm; **Độ lệch** như khoảng cách; **Góc** như góc |
| Cấu kiện cố định | Chi tiết đầu tiên là cố định; {{ui:Đặt làm chi tiết cố định}} đổi nó |
| Chèn cấu kiện | {{ui:Thêm bản sao}} hoặc {{ui:Nhân bản}} (một bản sao khác) hoặc {{ui:Chèn}} (từ một tệp chi tiết) |
| Sửa chi tiết trong lắp ráp | {{ui:Sửa chi tiết}}, rồi {{ui:Quay lại}} |
| Phát hiện giao thoa | {{ui:Va chạm}} |
| Di chuyển cấu kiện để xem chuyển động | Kéo thanh trượt góc hoặc độ lệch của khớp xoay hoặc khớp trượt; {{ui:Kiểm tra va chạm trong suốt chuyển động}} quét nó. Chi tiết không có khớp: **Di chuyển bằng tay** (kéo mũi tên, hoặc nhập giá trị) |
| Đo / Kiểm tra | {{ui:Khung nhìn}}, rồi {{ui:Đo}} ({{key:M}}): khoảng cách, góc, bán kính, diện tích; {{ui:Thuộc tính khối lượng}} |
| Khung nhìn tách rời, BOM | Trong lắp ráp khi không chọn gì: **Khung nhìn tách rời** và **Bảng kê vật tư** trong bảng bên phải |
| Thuộc tính khối lượng | Ô **Chi tiết**: thể tích, diện tích bề mặt, kích thước, của khối đa diện (hơi thấp với chi tiết tròn). Không có khối lượng: chưa có vật liệu |
| Lưu, Lưu thành STEP | {{ui:Lưu}} tải xuống một `.partcraft.json`; {{ui:Xuất}} có STL, 3MF, STEP chính xác (AP242 hoặc AP214), STEP đa diện, DXF và bản vẽ PDF |
| Tạo bản vẽ từ chi tiết | {{ui:Bản vẽ}}: một tờ A3 tự động với ba hình chiếu, đẳng trục, một mặt cắt, một chi tiết phóng to, chuẩn (datum), khung điều khiển đặc trưng và ký hiệu độ hoàn thiện. Chỉ các kích thước tổng thể được ghi |
| Kéo nút giữa để xoay | **Kéo nút trái** để xoay ở đây. Kéo nút giữa hoặc phải để di chuyển khung nhìn. Con lăn thu phóng tại vị trí con trỏ |
| Hướng khung nhìn, Pháp tuyến với | Menu {{ui:Khung nhìn}}; {{ui:Pháp tuyến với}} cho một mặt, mặt phẳng hoặc phác thảo đã chọn |
| Thu phóng vừa khung (F) | {{key:F}}, hoặc {{ui:Vừa khung}} (trong phác thảo, {{key:F}} là công cụ Bo góc) |
| Menu chuột phải | Không có. Kéo chuột phải để di chuyển khung nhìn; trong phác thảo, nhấp chuột phải kết thúc chuỗi đường thẳng |

:::tip
Nếu bạn quen tay với SolidWorks, chọn kiểu menu {{ui:Cây đặc trưng}} trong {{ui:Cài đặt}} › {{ui:PartCraft}} › {{ui:Menu, phím và chuột}}: một dải lệnh với các thẻ Đặc trưng, Phác thảo, Bề mặt, Đánh giá, Bản vẽ, Lắp ráp và Khung nhìn; nút giữa xoay quanh, {{key:Shift}} và nút giữa di chuyển khung nhìn, còn nút trái chỉ dùng để chọn. Xem [Menu, phím và chuột](topic:menus-keys-and-mouse).
:::

## Những khác biệt khiến người ta vấp

**Toàn bộ phác thảo là biên dạng.** Đùn và Quay tròn dùng mọi vòng kín trong phác thảo. Bạn không thể chọn một vùng hay một đường bao của phác thảo cho một đặc trưng. Dùng một phác thảo cho mỗi đặc trưng.

**Đặc trưng lấy phác thảo nào.** Một đặc trưng dùng phác thảo bạn vừa đóng hoặc phác thảo được chọn trong lịch sử. Khi không chọn gì, nó lấy phác thảo mới nhất mà chưa đặc trưng nào dùng. Nếu lấy nhầm, chọn đúng phác thảo rồi chọn lại đặc trưng.

**Thay đổi áp dụng khi bạn gõ.** Không có hộp thoại đặc trưng với OK và Hủy. Mọi con số được dựng lại ngay lập tức, và {{key:Mod+Z}} là cách quay lại. Danh sách hoàn tác bao gồm các chỉnh sửa phác thảo, đặc trưng và thiết lập như nhau.

**Xác định thừa không bao giờ được để yên.** Không có kích thước điều khiển (tham chiếu). Một kích thước mà các quan hệ khác đã cố định sẽ được báo là xác định thừa ("đã được suy ra sẵn. Xóa nó."). Một kích thước mâu thuẫn để nguyên hình học và chuyển sang màu đỏ. Xóa một cái, hoặc hoàn tác.

**Quét và chuyển tiếp chưa được xây dựng; bo góc, vát mép, vỏ và độ nghiêng khuôn có giới hạn.** Phiên bản này của PartCraft dựng mọi chi tiết bằng nhân lưới; thẻ thanh trạng thái luôn ghi "Nhân lưới". Bo góc và vát mép hoạt động trên các cạnh thẳng giữa hai mặt phẳng, và nơi các mối bo gặp nhau tại một góc thì được cắt chéo, không hòa trộn. Vỏ mở ra, và độ nghiêng khuôn chỉ nghiêng các mặt phẳng. Các đặc trưng cần nhân chính xác vẫn có thể nhấp được, nhưng khi được chọn sẽ báo "chưa được xây dựng". Xem [Nhân lưới](topic:solid-kernels) và [Những gì chưa được xây dựng](topic:not-built-yet).

**Hai nút đều tên Bo góc.** Trong phác thảo, {{ui:Bo góc}} ({{key:F}}) bo tròn một góc phác thảo. Trên chi tiết, {{ui:Bo góc}} trong nhóm Đặc trưng bo tròn các cạnh khối đặc (các cạnh thẳng giữa mặt phẳng trong phiên bản này). Phiên bản này không có quét hay chuyển tiếp: xem [Những gì chưa được xây dựng](topic:not-built-yet).

**Lỗ cần điểm rời.** {{ui:Lỗ}} khoan tại các điểm tạo bằng công cụ Điểm. Tâm vòng tròn và đầu đường thẳng không được tính.

**Xuyên suốt chỉ dành cho cắt.** Khối đắp cần một chiều sâu. Hiện chưa có các điều kiện kết thúc "đến đỉnh / bề mặt / kế tiếp".

**Khối đặc là đa diện.** Nhân lưới dựng các mặt tròn từ các mặt phẳng nhỏ, nên khung nhìn, thể tích, và các tệp xuất STL và 3MF đều được tạo từ chúng: **Độ cong** trong bảng của chi tiết làm chúng mịn hơn. Xuất STEP chính xác thì không: nó ghi các mặt tròn trên bề mặt thật của chúng.

**Chỉ milimét.** Hiện chưa có thiết lập inch. Nhân kích thước inch với 25.4 khi bạn nhập chúng.

**Y hướng lên.** Mặt phẳng Front hướng về bạn và Top nhìn xuống chi tiết, như bạn mong đợi, nhưng trục lên của thế giới là Y. Các tệp xuất STL, 3MF và STEP chính xác được xoay để Z hướng lên; STEP đa diện giữ Y hướng lên.

**Ghép là mặt, không phải cặp hình học.** Một khớp luôn bắt đầu từ hai mặt phẳng đặt mặt đối mặt. Với một chốt trong lỗ, chọn mặt phẳng quanh lỗ và vai của chốt, rồi đặt **Căn tâm tại** thành trục của lỗ và trục quay tròn của chốt. Các chi tiết không được khớp chạm tới sẽ giữ nguyên nơi chúng đã được chèn; bạn không thể kéo chúng. Các khớp trong vòng không được giải.

**Lưu là một lần tải xuống.** Không có tệp nào để bạn ghi đè liên tục. Mỗi lần lưu là một tệp mới trong thư mục tải xuống của bạn. Đặt tên chi tiết trước, và giữ các tệp trong một thư mục dự án.

**Không có menu ngữ cảnh, không có thẻ quản lý lệnh.** Mọi thứ đều nằm trên thanh công cụ và bảng bên phải, và thanh công cụ thay đổi theo việc bạn đang làm: công cụ phác thảo chỉ hiện trong phác thảo, công cụ lắp ráp chỉ hiện trong lắp ráp.

**Phím là một chữ cái trong phác thảo.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} và {{key:S}} chọn công cụ mà không cần phím bổ trợ. Xem [Phím và chuột](topic:keyboard).
