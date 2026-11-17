---
title: Có gì mới trong 0.9
summary: PartCraft 0.9 thêm bo góc giữa các mặt và làm dày thành khối đặc, lắp ráp hàng nghìn chi tiết, kho Tài liệu có phiên bản, tiện ích Solid FEM kiểm tra ứng suất, mười cách vẽ cung tròn, kích thước thép Anh, giai đoạn In và tiện ích in resin.
keywords: có gì mới, what's new, ghi chú phát hành, nhật ký thay đổi, 0.9, bo góc giữa các mặt, quả cầu lăn, bo góc nhiều cạnh, làm dày, khối đặc từ bề mặt, step shell, khối iges, bo góc từ quét, lắp ráp lớn, hiển thị nhẹ, 20000 chi tiết, tài liệu, kho, lấy ra, phiên bản, phát hành, nơi sử dụng, liên kết rhino, grasshopper, 3dm, con trỏ, sàn nhà máy, hàng đợi công việc, solid fem, phần tử hữu hạn, von mises, tần số riêng, cách vẽ cung tròn, cung tròn 3 điểm, kích thước thép anh, uk steel sections, blue book, giai đoạn in, resin, goo, ctb, bàn in, trải phẳng, 0.8, 0.8.1, phiên bản, tính năng mới, mô phỏng trực tiếp, cập nhật khi chỉnh sửa, thử làm hỏng, cái gì hỏng trước, hệ số tải, phi tuyến, chảy dẻo, biến dạng dẻo, tiếp xúc, calculix, nghiên cứu chuyển động, khe hở, bề mặt, nurbs, làm trơn, hull, zebra, kỹ sư, bộ sinh, chi tiết được sinh, phác thảo từ ảnh, thay đổi tỷ lệ để in, chia để in, co ngót, tấm đã sắp xếp, g-code, bản vẽ, kích thước lỗ, trợ lý, mcp, ngôn ngữ, số hàng thanh công cụ
from: 96d9fbfa
---

Đây là những thay đổi trong PartCraft 0.9 so với 0.8.1. Bề mặt tự do giờ có thể khép kín thành khối đặc, lắp ráp hàng nghìn chi tiết vẫn dùng được, kho Tài liệu giữ các phiên bản, và tiện ích Solid FEM kiểm tra ứng suất trong một chi tiết. Mỗi mục đều nói rõ nơi tìm thấy nó.

## Mới trong 0.9.1

- **Xuất STEP chính xác.** {{ui:Xuất}} › {{ui:STEP AP242 (exact solid)}} và {{ui:STEP AP214 (exact solid)}} giờ đã hoạt động. Lỗ, ụ (boss), bo góc, nón, cầu và xuyến (torus) được ghi trên đúng bề mặt của chúng với đường tròn thật làm cạnh, để một chương trình CAD hay CAM khác có thể nhận ra một lỗ là lỗ. Các cạnh spline, ren đã mô hình hóa và lưới nhập vào vẫn là các mặt phẳng nhỏ (facet) trong cùng khối đặc. Xem [Xuất để in, STEP và DXF](topic:export-files#for-other-cad-programs-step).
- **STEP vào, STEP chính xác ra.** Tệp STEP bạn mở giữ nguyên các mặt phẳng, trụ, nón, cầu và xuyến của nó, nên {{ui:Xuất}} › {{ui:STEP AP242 (exact solid)}} ghi chúng lại dưới dạng bề mặt thật thay vì mặt phẳng nhỏ: một thanh dầm của nhà cung cấp có lỗ bulông sẽ xuất ra với đúng các mặt như khi nhập vào, cộng thêm mọi phần bạn cắt vào nó. Các mặt spline, mặt quét và mặt xoay trong tệp vẫn là mặt phẳng nhỏ, và các khối từ STL, OBJ và 3MF cũng vậy. Mở lại tệp STEP cho một chi tiết đã lưu trước đó. Xem [Mở tệp STEP và tiếp tục xây dựng](topic:import-step).
- **Đường tròn thật trong DXF mặt.** {{ui:Xuất}} › {{ui:DXF of the sketch or flat face}} khi đã chọn một mặt phẳng giờ ghi các lỗ tròn thành đường tròn, với tâm và bán kính riêng của lỗ, cho bàn cắt laser, plasma hoặc tia nước. Các cạnh tròn khác vẫn là mặt phẳng nhỏ.
- **STEP chính xác cho xưởng.** Trong {{ui:Gia công}}, {{ui:STEP chính xác (tọa độ gia công)}} ghi chi tiết với gốc tại gốc gia công của thiết lập và trục Z dọc theo trục dao, đúng hệ tọa độ mà G-code sử dụng. Xem [Tạo đường dao và G-code](topic:manufacture#exact-step-for-the-shop).

## Mới

### Bề mặt và khối đặc

- **Bo góc giữa các mặt.** Chọn {{ui:Mặt}} trong hộp {{ui:Không gian làm việc}}, rồi chọn {{ui:Bo góc giữa các mặt}}. Chọn hai mặt của cùng một khối đặc, nhập bán kính ({{ui:Bán kính ở đầu (mm, 0 = giữ nguyên)}} để có bán kính thay đổi dọc theo cạnh). Dòng kết quả cho biết bo góc lệch bao nhiêu so với quả cầu lăn lý tưởng; bán kính không khớp sẽ bị từ chối và nêu tên mặt. {{ui:Bo góc nhiều cạnh}} bo tròn nhiều cạnh trong một bước; đánh dấu {{ui:Góc (mảng cầu khi ba mối gặp nhau)}} để có góc hình cầu nơi ba cạnh bo tròn của các mặt phẳng gặp nhau. Xem [Bề mặt tự do (NURBS)](topic:nurbs-surfaces).
- **Làm dày thành khối đặc.** {{ui:Làm dày thành khối đặc}} trong cùng không gian làm việc tạo độ dày cho một bề mặt; {{ui:Phía còn lại}} làm nó dày ra theo hướng ngược lại. Nếu có nếp gấp hoặc tự cắt nhau, thao tác bị từ chối và nêu bề mặt cùng vị trí.
- **Khối đặc từ bề mặt.** Các bề mặt đã cắt có thể được nối bằng hợp, trừ và giao, rồi đưa vào chi tiết thành một bước hoàn tác. STEP ghi khối đặc thành một vỏ kín và IGES ghi thành một khối đặc; cả hai đều đọc lại thành khối đặc. Nếu các mặt không khớp cạnh với cạnh, tệp sẽ có các mặt rời và dòng trạng thái sẽ báo như vậy. Khối đặc cũng có thể tạo trong trình soạn thảo nút; xem [Trình soạn thảo nút](topic:nodes).
- **Bo góc vành và bo góc thay đổi trong bản quét.** Khi bạn khớp bề mặt với một bản quét, bo góc vành (torus) và bo góc có bán kính thay đổi dọc theo cạnh khá thẳng cũng được tìm và liệt kê kèm bán kính. Tính năng này chỉ được kiểm tra trên bản quét giả lập.

### Lắp ráp, tài liệu và liên kết

- **Lắp ráp lớn.** Các chi tiết là bản sao dùng chung một lưới, và {{ui:Khung nhìn}} › {{ui:Hiển thị nhẹ}} vẽ các hộp để khung nhìn vẫn mượt (tự bật cho các lắp ráp rất lớn; chọn và khớp vẫn dùng chi tiết thật). Cây chi tiết hiển thị các hàng đầu và nút {{ui:Hiển thị thêm 700}} cho phần còn lại. Tệp lắp ráp có thể chứa tới 50,000 thể hiện và 100,000 khớp. Xem [Xây dựng lắp ráp](topic:build-assembly).
- **Tài liệu.** {{ui:Tài liệu…}} trong nhóm **Tệp** mở một hộp thoại trên thư mục dự án: lấy ra (check out) và trả lại (check in), chữ cái phiên bản, trạng thái (đang thực hiện, chờ xem lại, đã phát hành, đã lỗi thời), lịch sử, nơi sử dụng và bảng kê vật tư. Xem [Tài liệu và phiên bản (kho)](topic:documents-walkthrough).
- **Liên kết Rhino trực tiếp.** Một kịch bản, `cadcraft_link.py`, theo dõi tài liệu Rhino hoặc Grasshopper và chỉ đẩy phần đã thay đổi vào PartCraft, nơi một đặc trưng được nhập sẽ dựng lại theo hình dạng mới. Liên kết chỉ một chiều và cần Studio. Xem [Liên kết .3dm trực tiếp](topic:live-3dm-link).
- **Xem con trỏ của nhau.** Trong phiên dùng chung, con trỏ của mỗi người hiển thị cùng tên và đặc trưng họ đã chọn. Xem [Làm việc trực tiếp với người khác](topic:work-live).
- **Sàn nhà máy.** Bật tiện ích bổ sung Sàn nhà máy trong {{ui:Cài đặt}} › {{ui:Tiện ích bổ sung}}. Sau khi bạn xuất một chương trình trong {{ui:Gia công}}, thẻ của nó có thể {{ui:Thêm vào hàng đợi công việc của xưởng}} hoặc {{ui:Lưu thành tệp công việc}}. Nó không bao giờ gửi hay khởi động máy.

### Phân tích và chi tiết

- **Tiện ích Solid FEM.** Bật {{ui:Solid FEM}} trong {{ui:Cài đặt}} › {{ui:Tiện ích bổ sung}} (nó tắt cho đến khi bạn bật) và một thẻ {{ui:Solid FEM}} xuất hiện trong bảng bên phải. {{ui:Lưới hóa chi tiết}}, chọn các mặt cố định và tải trong khung nhìn 3D, {{ui:Giải}}, rồi vẽ chuyển vị, ứng suất von Mises hoặc dạng dao động bằng {{ui:Hiển thị trên mô hình}}. Xem [Solid FEM: kiểm tra ứng suất](topic:solid-fem-check).
- **Cung tròn trong phác thảo, theo mười cách.** Mũi tên bên cạnh {{ui:Cung tròn}} trên thanh công cụ phác thảo liệt kê: Ba điểm, Đầu Tâm Cuối, Đầu Tâm Góc, Đầu Tâm Độ dài, Đầu Cuối Góc, Đầu Cuối Hướng, Đầu Cuối Bán kính, Tâm Đầu Cuối, Tâm Đầu Góc, Tâm Đầu Độ dài và Tiếp tục. Xem [Vẽ cung tròn theo mười phương pháp](topic:sketch-arc-methods).
- **Kích thước thép Anh.** Khung hàn có thể dùng 976 tiết diện Anh (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); nhập một kích thước như `305x165x40 UB`. Xem [Cấu kiện kết cấu](topic:structural-members).

### In

- **Giai đoạn in.** Nút {{ui:Giai đoạn in}} trên thanh công cụ (tiện ích bổ sung 3D Print, bật mặc định) đặt các khối của chi tiết lên một bàn in nét đứt: {{ui:Trải phẳng}}, {{ui:Xoay 90°}}, {{ui:Sắp xếp trên bàn in}}, {{ui:Vừa tất cả trên bàn in}}, {{ui:Xem trước lớp}}, rồi {{ui:Gửi tới máy in 3D}} qua USB, Klipper (Moonraker), OctoPrint hoặc PrusaLink. Không có gì được gửi cho đến khi bạn xác nhận, và chi tiết của bạn không bao giờ bị thay đổi. Với tệp STL hoặc 3MF thay vì vậy, xem [Chuẩn bị chi tiết để in 3D](topic:print-3d).
- **In resin.** Các tiện ích bổ sung trong {{ui:Cài đặt}} › {{ui:Tiện ích bổ sung}}, tất cả đều tắt cho đến khi bạn bật: một bộ cắt lát resin, một bài kiểm tra độ phơi sáng, và các định dạng tệp Elegoo GOO, SL1, Chitubox CBDDLP/CTB và Anycubic. Việc cắt lát chạy trên một luồng nền, nên trang vẫn phản hồi.

## Trong mọi ứng dụng

- Mọi gợi ý khi rê chuột đều là tooltip Bootstrap.
- Mẹo khởi động có nút đóng; nó vẫn đóng.
- Hàng thẻ của bảng không vừa sẽ cuộn ngang thay vì bị cắt.
- Thẻ trình duyệt hiển thị tên tài liệu đang mở trước PartCraft | CadCraft.
- {{ui:Cài đặt}} hiển thị {{ui:Bố cục}} của không gian làm việc dưới dạng danh sách thả xuống các lựa chọn, và ô ngôn ngữ liệt kê mọi ngôn ngữ mà bản dựng có.
- Trọng lượng và Nhiệt độ là các loại đơn vị trong cài đặt Đơn vị.

## Đã sửa

- Menu Cung tròn của phác thảo giờ liệt kê mọi phương pháp.
- Thanh công cụ tiện ích bổ sung và tiêu đề thẻ trình duyệt đã được sửa vào ngày 2026-11-09.

## Giới hạn thực tế

- STEP chính xác đã được đọc lại trong OpenCascade (khối đặc hợp lệ, thể tích bằng với các giá trị tính tay). Nó chưa được mở trong mọi chương trình CAD hay CAM, và lắp ráp không được ghi thành STEP chính xác.
- Chưa in gì trên máy in thật. Việc cắt lát, G-code và tệp resin được đọc lại bằng chính các chương trình của chúng tôi hoặc một máy in giả lập; không định dạng resin nào được nạp vào máy in, và kích thước máy in cùng độ phơi sáng chỉ là điểm khởi đầu.
- Solid FEM là tuyến tính, đẳng hướng và đàn hồi, một vật liệu cho mỗi chi tiết, không có tiếp xúc, chảy dẻo hay oằn. Ứng suất tại các mặt cố định và góc nhọn phụ thuộc vào lưới. Đây là công cụ hỗ trợ kiểm tra, chưa được kỹ sư xem lại.
- Thời gian lắp ráp lớn được đo trên máy chủ không có GPU; một khung hình chi tiết đầy đủ của 20,000 chi tiết vẫn mất vài giây ở đó.
- Bo góc hoạt động trên các cặp mặt; không có phối hợp đỉnh tổng quát và không có bo góc giữa các mặt không gặp nhau.
- Liên kết Rhino chưa bao giờ chạy trong Rhino hay Grasshopper thật. Tài liệu đã được thử bởi hai chương trình trên cùng một thư mục, chứ không phải bởi hai người trên một thư mục mạng dùng chung.
- Việc khớp bề mặt với bản quét thật chưa được kiểm tra thủ công. Các ngôn ngữ khác tiếng Anh là bản nháp máy.
- Trình cài đặt Windows chưa được ký mã, và ảnh đĩa macOS chưa được công chứng. Xem [Khắc phục sự cố](topic:troubleshooting).

Các thay đổi trước đó nằm trong [Có gì mới trong 0.7](topic:whats-new-0-7).

## Trước đó: 0.8 và 0.8.1

Đây là những thay đổi trong PartCraft 0.8 và 0.8.1 so với 0.7. Mô phỏng cho kết quả ngay khi bạn chỉnh sửa và cho biết cái gì hỏng trước, lắp ráp có nghiên cứu chuyển động, và các không gian làm việc mới tạo bề mặt tự do cùng chi tiết có kích thước dựa trên vật lý. 0.8.1 là bản sửa lỗi nhỏ.

### Mới

**Mô phỏng**

- **Cập nhật khi tôi chỉnh sửa.** Đánh dấu {{ui:Cập nhật khi tôi chỉnh sửa}} trong khối Giải thì các kết quả sẽ theo các thay đổi của bạn. Đổi một kích thước, một tải trọng hay vật liệu, và một kết quả nhanh, tính với các phần tử lớn gấp bốn lần, hiện ra ngay; khi bạn dừng khoảng một giây, kết quả tinh chỉnh riêng của nghiên cứu sẽ thay thế nó. Kết quả cho biết bạn đang xem loại nào. Với một công-xôn thép, kết quả nhanh sai lệch trong 1 % về độ võng và khoảng 4 % về ứng suất so với kết quả tinh chỉnh. Xem [Kiểm tra ứng suất và độ võng](topic:simulation#update-while-you-edit-live).
- **Cái gì hỏng trước.** Với nghiên cứu tĩnh hoặc oằn, {{ui:Cái gì hỏng trước?}} trong khối **Thử làm hỏng** tăng tỷ lệ các tải cho đến khi chi tiết bị hỏng. Danh sách, từ nguy hiểm nhất, gồm hệ số tải tới ngưỡng chảy đầu tiên (có dấu đỏ tại nơi ứng suất cực đại) và hệ số tải tới oằn. Hệ số dưới 1 nghĩa là chi tiết đã bị hỏng ngay dưới tải hiện tại, và bảng Vấn đề hiện một lỗi. Các hệ số lấy từ nghiên cứu tuyến tính, nên chỉ chính xác bằng nghiên cứu đó. Xem [Kiểm tra ứng suất và độ võng](topic:simulation#find-out-what-breaks-first-break-it).
- **Chảy dẻo và tiếp xúc.** Thêm hai loại nghiên cứu: loại phi tuyến, trong đó vật liệu đi theo đường thẳng tới ứng suất chảy rồi theo độ dốc thoải hơn, với biến dạng dẻo được vẽ đồ thị; và loại tiếp xúc, trong đó các phần rời đẩy nhau (không ma sát) hoặc dính chặt (liên kết). Một bước tải không hội tụ, hoặc các phần lún quá sâu vào nhau, sẽ hiện trong bảng Vấn đề. Ma sát, trượt lớn, xoay lớn, độ võng lớn và mỏi chưa được giải. Xem [Kiểm tra ứng suất và độ võng](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Bộ tệp cho CalculiX.** {{ui:Xuất}} › {{ui:Bộ tệp CalculiX (.inp)}} lưu nghiên cứu cho CalculiX, một chương trình riêng mà bạn tự cài và chạy; {{ui:Xuất}} › {{ui:Kết quả CalculiX (.frd)}} đọc tệp kết quả của nó trở lại trên cùng lưới. PartCraft không bao giờ khởi chạy chương trình đó, và sẽ thông báo nếu chi tiết đã thay đổi kể từ khi bộ tệp được lưu.

**Lắp ráp**

- **Nghiên cứu chuyển động.** {{ui:Lắp ráp}} › {{ui:Chuyển động}} điều khiển giá trị của một khớp theo thời gian bạn đưa ra (tốc độ không đổi, êm dần, hình sin, hoặc đi rồi về), đặt lắp ráp tại mỗi bước với các khớp và vòng kín, và báo cáo những chỗ va chạm cũng như chi tiết tiến gần nhau đến mức nào. {{ui:Thêm điểm}} vẽ đồ thị vị trí, tốc độ và gia tốc của một điểm, giá trị của khớp và khe hở theo thời gian; {{ui:Lưu CSV}} và {{ui:Lưu đồ thị}} ghi chúng ra tệp. Sau khi {{ui:Chạy}}, thanh chạy Bước đưa lắp ráp tới bất kỳ bước nào. Cài đặt của nghiên cứu được lưu trong tệp lắp ráp. Tốc độ và gia tốc được tính từ các vị trí đã ghi, nên dùng nhiều bước hơn nếu một đỉnh nhọn bị đọc thấp. Xem [Kiểm tra lắp ráp về va chạm và chuyển động](topic:check-assembly#a-motion-study).

**Bề mặt và chi tiết từ vật lý**

- **Không gian làm việc Mặt.** Chọn {{ui:Mặt}} trong hộp {{ui:Không gian làm việc}} để có đường cong và bề mặt NURBS bên cạnh chi tiết: {{ui:Đường cong}}, {{ui:Chuyển tiếp}}, {{ui:Quét}}, {{ui:Khớp}} và {{ui:Vằn ngựa}}, với độ liên tục (G0, G1 hoặc G2) được đo trên các bề mặt chính xác, và một cạnh kém hơn yêu cầu của bạn được liệt kê trong bảng Vấn đề kèm một sửa lỗi Khớp. {{ui:Làm trơn}} đo các đường thân tàu để tìm điểm uốn và bước nhảy độ cong, rồi dựng lại những chỗ không đạt trong dung sai của bạn. Bề mặt được lưu trong tệp chi tiết và không thay đổi các đặc trưng của chi tiết. Xem [Bề mặt tự do (NURBS)](topic:nurbs-surfaces).
- **Không gian làm việc Kỹ sư.** Chọn {{ui:Kỹ sư}} trong bộ chuyển không gian làm việc, chọn một bộ sinh và nhấn {{ui:Mới}}: một kịch bản định kích thước chi tiết theo những gì nó phải làm (truyền nhiệt, lưu lượng, áp suất, vật liệu, quy trình in) bằng các công thức giáo khoa rồi dựng nó, sau đó trả lại các con số đã dùng kèm nguồn, các kiểm tra gia công và các tệp cho công cụ phân tích. Cùng đầu vào sẽ cho cùng chi tiết trên mọi máy tính. Bộ sinh được giữ trong chi tiết, và mở chi tiết không bao giờ chạy kịch bản. Xem [Chi tiết từ vật lý: bộ sinh](topic:engineer-generators) và [Viết bộ sinh](topic:write-a-generator).

**Phác thảo, bản vẽ và gia công**

- **Phác thảo từ ảnh.** {{ui:Đặc trưng}} › {{ui:Thêm}} › {{ui:Phác thảo từ ảnh…}} vẽ lại ảnh của một chi tiết phẳng trên nền đơn sắc (đường bao và lỗ) hoặc bản vẽ bút thành đường thẳng, cung tròn và vòng tròn. Bạn nhập một kích thước, xem trước và tạo phác thảo. Xem [Kiến thức cơ bản về phác thảo](topic:sketch-basics#a-sketch-from-a-photo).
- **Thay đổi tỷ lệ và chia để in.** {{ui:Xuất}} › {{ui:Thay đổi tỷ lệ để in (STL hoặc 3MF)…}} thay đổi tỷ lệ theo từng trục mà không làm đổi chi tiết, ví dụ để bù độ co ngót. {{ui:Xuất}} › {{ui:Chia để in (một tệp zip các mảnh)…}} cắt một chi tiết quá lớn so với bàn in thành các mảnh được đánh số, ghép với nhau bằng chốt, then, đuôi én, lỗ chốt hoặc hốc nam châm. Xem [In 3D](topic:print-3d).
- **Tấm đã sắp xếp sang G-code.** {{ui:Xuất}} › {{ui:Các tấm đã sắp xếp sang G-code}} đọc một tệp DXF đã sắp xếp và tạo một chương trình cho mỗi tấm qua bộ hậu xử lý (post) bạn chọn: lỗ và khoét trước, rồi đến đường bao. Nó không lập kế hoạch đường vào, thứ tự cắt hay các cạnh dùng chung. Xem [Sắp xếp chi tiết phẳng trên tấm](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Bản vẽ tự làm được nhiều việc hơn.** {{ui:Tờ}} › {{ui:Tự động}} chọn tờ khổ A nhỏ nhất chứa được các hình chiếu ở tỷ lệ tiêu chuẩn lớn nhất đến 1:1. {{ui:Ghi kích thước lỗ}} đặt dấu tâm trên mỗi lỗ, một chú thích cho mỗi kích thước và vị trí tính từ góc dưới bên trái của hình chiếu. Xem [Tạo bản vẽ](topic:drawing-pdf).

**Trong mọi ứng dụng**

- **Ngôn ngữ.** Các ứng dụng có 54 ngôn ngữ. Những ngôn ngữ ngoài tiếng Anh là bản nháp máy cho đến khi người bản ngữ đọc lại.
- **Số hàng thanh công cụ.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Số hàng thanh công cụ}} chọn Xuống dòng (như trước), 2 hàng hoặc 1 hàng; thanh không vừa sẽ cuộn ngang. Dải lệnh Đặc trưng của PartCraft hiển thị công cụ dùng nhiều nhất lớn hơn và đặt các biến thể sau một nút chia.
- **Kết nối trợ lý AI của bạn.** Studio là trung tâm để kết nối một trợ lý AI riêng của bạn với cả tám ứng dụng, với quyền chỉ đọc, đề xuất hoặc chỉnh sửa cho từng ứng dụng. Trợ lý đã kết nối có thể định kích thước chi tiết từ một câu như một giá đỡ chịu tải, hiển thị cách làm và mọi kiểm tra, rồi dựng nó; nó báo những gì chưa kiểm tra (tập trung ứng suất, mỏi, từ biến ở nhựa). Xem [Dùng PartCraft với trợ lý AI](topic:use-with-ai-assistants).

### Đã sửa trong 0.8.1

- **Con trỏ đứng khi toàn màn hình.** Việc chọn khi rê chuột giờ được giới hạn tần suất. Nguyên nhân là cách hiểu tốt nhất của chúng tôi và chưa được xác nhận với người đã báo lỗi.
- **Ngôn ngữ khi chạy.** Studio và các bản đóng gói có thể đổi ngôn ngữ khi đang chạy; trước đây chỉ có tiếng Anh. Điều này chưa được kiểm tra trên mọi nền tảng: cho chúng tôi biết nếu ngôn ngữ không đổi.

### Chưa có trong phiên bản này

- Kết nối trợ lý AI chưa hoàn thiện: kết nối một chạm trong Studio, bộ kết nối được lưu trữ cho AI trên trình duyệt, khóa API riêng của bạn trong Studio và gói MCP đã công bố đều chưa được hứa hẹn. Studio không có AI riêng.
- Studio chưa được ký mã: Windows có thể cảnh báo, và macOS yêu cầu nhấp chuột phải rồi chọn Mở. Xem [Khắc phục sự cố](topic:troubleshooting).
- Chuỗi dung sai vẫn chỉ một chiều: xem [Chuỗi dung sai](topic:tolerance-stackup).
- Phần còn lại được liệt kê trong [Những gì chưa xây dựng](topic:not-built-yet).

Các thay đổi trước đó nằm trong [Có gì mới trong 0.7](topic:whats-new-0-7).
