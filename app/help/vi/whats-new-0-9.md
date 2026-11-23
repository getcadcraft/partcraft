---
title: Có gì mới trong 0.9 (trước đó)
summary: PartCraft 0.9 thêm bo góc giữa các mặt và làm dày thành khối đặc, cụm lắp ráp hàng nghìn chi tiết, kho Tài liệu với các phiên bản sửa đổi, tiện ích Solid FEM kiểm tra ứng suất, mười cách vẽ cung, kích thước thép UK, giai đoạn In và các tiện ích in nhựa lỏng.
keywords: có gì mới 0.9, phiên bản cũ, có gì mới, what's new, ghi chú phát hành, nhật ký thay đổi, 0.9, bo góc giữa các mặt, bo góc lăn, bo góc nhiều cạnh, làm dày, khối từ mặt, vỏ step, khối iges, bo góc từ quét, cụm lớn, hiển thị nhẹ, 20000 chi tiết, tài liệu, kho, check out, phiên bản sửa đổi, phát hành, nơi sử dụng, liên kết Rhino, grasshopper, 3dm, con trỏ, sàn xưởng, hàng đợi công việc, solid fem, phần tử hữu hạn, von mises, tần số riêng, cách vẽ cung, cung 3 điểm, tiết diện thép UK, blue book, giai đoạn in, nhựa lỏng, goo, ctb, bệ, trải phẳng, cập nhật, 0.8, 0.8.1, phiên bản, tính năng mới, phân tích trực tiếp, cập nhật khi chỉnh sửa, làm vỡ, cái gì hỏng trước, hệ số tải, phi tuyến, chảy, biến dạng dẻo, tiếp xúc, calculix, nghiên cứu chuyển động, khe hở, bề mặt, nurbs, làm trơn, hull, zebra, kỹ sư, bộ sinh, khối được sinh, phác thảo từ ảnh, chia tỷ lệ để in, chia để in, co ngót, tấm đã sắp xếp, g-code, bản vẽ, kích thước lỗ, trợ lý, mcp, ngôn ngữ, số hàng thanh công cụ
from: 1dafd7c8
---

Đây là những gì đã thay đổi trong PartCraft 0.9, so với 0.8.1. Các mặt tự do giờ khép lại thành khối đặc, cụm lắp ráp hàng nghìn chi tiết vẫn dùng được, kho Tài liệu lưu các phiên bản sửa đổi, và tiện ích Solid FEM kiểm tra ứng suất trong chi tiết. Mỗi mục cho biết tìm nó ở đâu.

## Mới trong 0.9.1

- **Xuất STEP chính xác.** {{ui:Xuất}} › {{ui:STEP AP242 (khối đặc chính xác)}} và {{ui:STEP AP214 (khối đặc chính xác)}} giờ hoạt động. Lỗ, gờ, bo góc, nón, cầu và xuyến được ghi trên bề mặt thật của chúng với đường tròn thật làm cạnh, để phần mềm CAD hay CAM khác có thể nhận lỗ là lỗ. Cạnh spline, ren được mô hình hóa và lưới nhập vào vẫn là mặt facet phẳng trong cùng vật rắn. Xem [Xuất để in, STEP và DXF](topic:export-files#for-other-cad-programs-step).
- **STEP vào, STEP chính xác ra.** Tệp STEP bạn mở giữ các mặt phẳng, trụ, nón, cầu và xuyến riêng, nên {{ui:Xuất}} › {{ui:STEP AP242 (khối đặc chính xác)}} ghi chúng lại dưới dạng bề mặt thật thay vì facet: chùm dầm của nhà cung cấp có lỗ bulông đi ra với các mặt như khi nó đến, cộng thêm phần bạn cắt vào. Mặt spline, mặt quét và mặt quay của tệp vẫn là facet, và các thân từ STL, OBJ và 3MF cũng vậy. Mở lại tệp STEP cho một chi tiết đã lưu trước đó. Xem [Mở tệp STEP và xây dựng trên đó](topic:import-step).
- **Đường tròn thật trong DXF mặt.** {{ui:Xuất}} › {{ui:DXF của phác thảo hoặc mặt phẳng}} với một mặt phẳng được chọn giờ ghi lỗ tròn thành đường tròn, với tâm và bán kính riêng của lỗ, cho bàn laser, plasma hoặc tia nước. Các cạnh tròn khác vẫn là facet.
- **STEP chính xác cho xưởng.** Trong {{ui:Gia công}}, {{ui:STEP chính xác (tọa độ gia công)}} ghi chi tiết với gốc tại gốc gia công của thiết lập và Z dọc theo trục dao, tức các tọa độ mà G-code dùng. Xem [Tạo đường dao và G-code](topic:manufacture#exact-step-for-the-shop).

## Mới

### Mặt và khối đặc

- **Bo góc giữa các mặt.** Chọn {{ui:Mặt}} trong hộp {{ui:Không gian làm việc}}, rồi {{ui:Bo góc giữa các mặt}}. Chọn hai mặt của một khối đặc, nhập bán kính (và {{ui:Bán kính ở đầu (mm, 0 = giữ nguyên)}} cho bán kính thay đổi dọc theo cạnh). Dòng kết quả cho biết bo góc lệch bao nhiêu so với bi lăn lý tưởng, và một bán kính không vừa sẽ bị từ chối với mặt được nêu tên. {{ui:Bo góc nhiều cạnh}} làm tròn nhiều cạnh trong một bước; đánh dấu {{ui:Góc (mảng cầu khi ba mối gặp nhau)}} để có góc hình cầu nơi ba cạnh tròn của mặt phẳng gặp nhau. Xem [Mặt tự do (NURBS)](topic:nurbs-surfaces).
- **Làm dày thành khối đặc.** {{ui:Làm dày thành khối đặc}} trong cùng không gian làm việc cho một mặt có độ dày; {{ui:Phía còn lại}} làm nó dày về phía khác. Một nếp gập hoặc tự cắt bị từ chối với mặt và vị trí được nêu tên.
- **Khối từ mặt.** Các mặt đã cắt có thể nối bằng hợp, trừ và giao và được ghi vào chi tiết như một bước hoàn tác. STEP ghi khối như một vỏ kín và IGES như một khối; cả hai đọc lại thành khối. Nếu các mặt không khớp cạnh với cạnh, tệp nhận các mặt riêng và dòng trạng thái cho biết điều đó. Khối cũng có thể tạo trong trình soạn nút; xem [Trình soạn nút](topic:nodes).
- **Bo góc vành và biến đổi trong quét.** Khi bạn khớp mặt vào một quét, bo góc vành (xuyến) và bo góc bán kính biến đổi dọc theo cạnh gần thẳng cũng được tìm và liệt kê cùng bán kính. Chỉ được kiểm tra trên các quét giả lập.

### Cụm lắp ráp, tài liệu và liên kết

- **Cụm lớn.** Các chi tiết là bản sao dùng chung một lưới, và {{ui:Khung nhìn}} › {{ui:Hiển thị nhẹ}} vẽ các hộp để khung nhìn tiếp tục di chuyển (nó tự bật cho cụm rất lớn; chọn và khớp vẫn dùng chi tiết thật). Cây chi tiết hiển thị các hàng đầu và nút {{ui:Hiện thêm 700}} cho phần còn lại. Tệp cụm có thể chứa tới 50,000 thực thể và 100,000 khớp. Xem [Dựng cụm lắp ráp](topic:build-assembly).
- **Tài liệu.** {{ui:Tài liệu…}} trong nhóm **Tệp** mở một hộp thoại trên thư mục dự án: lấy ra và trả lại, chữ cái sửa đổi, trạng thái (đang thực hiện, để xem xét, đã phát hành, đã lỗi thời), lịch sử, nơi sử dụng và danh mục vật tư. Xem [Tài liệu và phiên bản sửa đổi (kho)](topic:documents-walkthrough).
- **Liên kết Rhino trực tiếp.** Một kịch bản, `cadcraft_link.py`, theo dõi một tài liệu Rhino hoặc Grasshopper và chỉ đẩy phần đã thay đổi vào PartCraft, nơi một tính năng nhập vào tự dựng lại theo hình dạng mới. Nó một chiều và cần Studio. Xem [Liên kết .3dm trực tiếp](topic:live-3dm-link).
- **Xem con trỏ của nhau.** Trong một phiên chung, con trỏ của mỗi người hiển thị kèm tên và tính năng họ đã chọn. Xem [Làm việc trực tiếp cùng người khác](topic:work-live).
- **Sàn xưởng.** Bật tiện ích Sàn xưởng trong {{ui:Cài đặt}} › {{ui:Tiện ích bổ sung}}. Sau khi bạn post một chương trình trong {{ui:Gia công}}, thẻ của nó có thể {{ui:Thêm vào hàng đợi công việc xưởng}} hoặc {{ui:Lưu thành tệp công việc}}. Nó không bao giờ gửi hoặc khởi động máy.

### Phân tích và chi tiết

- **Tiện ích Solid FEM.** Bật {{ui:Solid FEM}} trong {{ui:Cài đặt}} › {{ui:Tiện ích bổ sung}} (nó tắt cho đến khi bạn bật) và một thẻ {{ui:Solid FEM}} xuất hiện trong bảng bên phải. {{ui:Lưới hóa chi tiết}}, chọn mặt cố định và tải trong khung nhìn 3D, {{ui:Giải}}, và vẽ chuyển vị, ứng suất von Mises hoặc dạng dao động với {{ui:Hiển thị trên mô hình}}. Xem [Solid FEM: kiểm tra ứng suất](topic:solid-fem-check).
- **Cung trong phác thảo, mười cách.** Mũi tên bên cạnh {{ui:Cung}} trên thanh công cụ phác thảo liệt kê: 3 điểm, Đầu Tâm Cuối, Đầu Tâm Góc, Đầu Tâm Độ dài, Đầu Cuối Góc, Đầu Cuối Hướng, Đầu Cuối Bán kính, Tâm Đầu Cuối, Tâm Đầu Góc, Tâm Đầu Độ dài và Tiếp tục. Xem [Vẽ cung bằng mười cách](topic:sketch-arc-methods).
- **Kích thước thép UK.** Các cấu kiện khung hàn có thể dùng 976 tiết diện UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); nhập một kích thước như `305x165x40 UB`. Xem [Cấu kiện kết cấu](topic:structural-members).

### In

- **Giai đoạn in.** Nút {{ui:Giai đoạn in}} trên thanh công cụ (tiện ích 3D Print, mặc định bật) đặt các vật thể của chi tiết lên một bệ nét đứt: {{ui:Trải phẳng}}, {{ui:Xoay 90°}}, {{ui:Sắp xếp trên bệ}}, {{ui:Vừa tất cả trên bệ}}, {{ui:Xem trước các lớp}}, rồi {{ui:Gửi tới máy in 3D}} qua USB, Klipper (Moonraker), OctoPrint hoặc PrusaLink. Không có gì được gửi cho đến khi bạn xác nhận, và chi tiết của bạn không bao giờ bị thay đổi. Với tệp STL hoặc 3MF, xem [Chuẩn bị chi tiết để in 3D](topic:print-3d).
- **In nhựa lỏng.** Các tiện ích trong {{ui:Cài đặt}} › {{ui:Tiện ích bổ sung}}, tất cả tắt cho đến khi bạn bật: một trình cắt lát nhựa, một kiểm tra phơi sáng, và các định dạng tệp Elegoo GOO, SL1, Chitubox CBDDLP/CTB và Anycubic. Cắt lát chạy trên một luồng nền, nên trang vẫn phản hồi.

## Trong mọi ứng dụng

- Mọi gợi ý khi rê chuột là một chú thích Bootstrap.
- Thẻ bắt đầu có nút đóng; nó vẫn đóng.
- Hàng thẻ của bảng không vừa sẽ cuộn ngang thay vì bị cắt.
- Thẻ trình duyệt hiển thị tên tài liệu đang mở trước PartCraft | CadCraft.
- {{ui:Cài đặt}} hiển thị {{ui:Bố cục}} của không gian làm việc như một danh sách thả xuống, và hộp ngôn ngữ liệt kê mọi ngôn ngữ của bản dựng.
- Trọng lượng và Nhiệt độ là các loại đơn vị trong cài đặt Đơn vị.

## Đã sửa

- Menu Cung phác thảo giờ liệt kê mọi cách.
- Thanh tiện ích và tiêu đề thẻ trình duyệt đã được sửa vào ngày 2026-11-09.

## Giới hạn thực tế

- STEP chính xác đã được đọc lại trong OpenCascade (khối hợp lệ, thể tích bằng với thể tích tính tay). Nó chưa được mở trong mọi phần mềm CAD hay CAM, và một cụm lắp ráp không được ghi thành STEP chính xác.
- Chưa in gì trên máy in thật. Các lát cắt, G-code và tệp nhựa lỏng được đọc lại bởi các chương trình của chúng tôi hoặc một máy in giả; không định dạng nhựa nào được nạp vào máy in, và kích thước máy in và thời gian phơi sáng chỉ là điểm khởi đầu.
- Solid FEM là tuyến tính, đẳng hướng và đàn hồi, một vật liệu cho mỗi chi tiết, không có tiếp xúc, chảy hay mất ổn định. Ứng suất tại mặt cố định và góc sắc phụ thuộc vào lưới. Đây là công cụ hỗ trợ kiểm tra, chưa được kỹ sư xem xét.
- Thời gian của cụm lớn được đo trên máy chủ không có GPU; một khung đầy đủ chi tiết với 20,000 chi tiết vẫn mất vài giây ở đó.
- Bo góc hoạt động trên các cặp mặt; không có pha trộn đỉnh tổng quát và không có bo góc giữa các mặt không gặp nhau.
- Liên kết Rhino chưa bao giờ chạy trong Rhino hoặc Grasshopper thật. Tài liệu được thử bởi hai chương trình trên một thư mục, chưa thử bởi hai người trên ổ chia sẻ mạng.
- Khớp mặt vào quét thật chưa được kiểm tra thủ công. Các ngôn ngữ ngoài tiếng Anh là bản nháp máy.
- Trình cài đặt Windows chưa được ký mã, và ảnh đĩa macOS chưa được công chứng. Xem [Khắc phục sự cố](topic:troubleshooting).

Các thay đổi trước đó nằm trong [Có gì mới trong 0.7](topic:whats-new-0-7).

## Trước đó: 0.8 và 0.8.1

Đây là những gì đã thay đổi trong PartCraft 0.8 và 0.8.1, so với 0.7. Mô phỏng trả lời khi bạn chỉnh sửa và cho biết điều gì hỏng trước, cụm lắp ráp có nghiên cứu chuyển động, và các không gian làm việc mới tạo mặt tự do và chi tiết có kích thước từ vật lý. 0.8.1 là bản sửa lỗi nhỏ.

### Mới

**Mô phỏng**

- **Cập nhật khi tôi chỉnh sửa.** Đánh dấu {{ui:Cập nhật khi tôi chỉnh sửa}} trong khối Giải và các câu trả lời sẽ theo các chỉnh sửa của bạn. Thay đổi kích thước, tải hoặc vật liệu và một đáp án nhanh, tính với phần tử lớn gấp bốn lần, xuất hiện ngay; khi bạn dừng khoảng một giây, đáp án đã tinh chỉnh của nghiên cứu thay thế nó. Kết quả cho biết bạn đang xem đáp án nào. Trên một dầm công-xôn thép, đáp án nhanh nằm trong 1 % về độ võng và khoảng 4 % về ứng suất so với đáp án tinh chỉnh. Xem [Kiểm tra ứng suất và độ võng](topic:simulation#update-while-you-edit-live).
- **Cái gì hỏng trước.** Với nghiên cứu tĩnh hoặc mất ổn định, {{ui:Cái gì hỏng trước?}} trong khối **Phá thử** tăng tải cho đến khi chi tiết bị hỏng. Nó liệt kê, tệ nhất trước, hệ số tải đến chảy đầu tiên (với dấu đỏ nơi ứng suất đạt đỉnh) và hệ số tải đến mất ổn định. Hệ số dưới 1 nghĩa là chi tiết đã hỏng khi chịu tải, và Vấn đề hiển thị một lỗi. Các hệ số đến từ nghiên cứu tuyến tính, nên chúng chỉ tốt như nghiên cứu đó. Xem [Kiểm tra ứng suất và độ võng](topic:simulation#find-out-what-breaks-first-break-it).
- **Chảy và tiếp xúc.** Thêm hai loại nghiên cứu: một loại phi tuyến, trong đó vật liệu đi theo đường thẳng đến ứng suất chảy rồi một độ dốc thoải hơn, với biến dạng dẻo được vẽ; và một loại tiếp xúc, trong đó các mảnh riêng đẩy nhau (không ma sát) hoặc dính chặt (liên kết). Bước tải không ổn định, hoặc các mảnh lún quá sâu vào nhau, được hiển thị trong bảng Vấn đề. Ma sát, trượt lớn, xoay lớn, độ võng lớn và mỏi không được giải. Xem [Kiểm tra ứng suất và độ võng](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Tệp cho CalculiX.** {{ui:Xuất}} › {{ui:Tệp đầu vào CalculiX (.inp)}} lưu nghiên cứu cho CalculiX, một chương trình riêng bạn cài và tự chạy; {{ui:Xuất}} › {{ui:Kết quả CalculiX (.frd)}} đọc tệp kết quả của nó trở lại trên cùng lưới. PartCraft không bao giờ khởi chạy chương trình đó, và nó nói như vậy nếu chi tiết đã thay đổi sau khi tệp được lưu.

**Cụm lắp ráp**

- **Nghiên cứu chuyển động.** {{ui:Lắp ráp}} › {{ui:Chuyển động}} điều khiển giá trị một khớp theo thời gian bạn đưa ra (tốc độ không đổi, mượt, hình sin, hoặc đi và về), đặt cụm lắp ráp tại mỗi bước với các khớp và vòng kín của nó, và báo cáo những gì va chạm và chi tiết tiến gần đến mức nào. {{ui:Thêm điểm}} vẽ vị trí, tốc độ và gia tốc của một điểm, giá trị khớp và khe hở theo thời gian; {{ui:Lưu CSV}} và {{ui:Lưu đồ thị}} ghi chúng ra. Sau {{ui:Chạy}}, thanh Bước qua lần chạy đưa cụm lắp ráp đến bất kỳ bước nào. Các thiết lập nghiên cứu được lưu trong tệp cụm lắp ráp. Tốc độ và gia tốc được tính từ các vị trí đã ghi, nên dùng nhiều bước hơn nếu một đỉnh nhọn đọc thấp. Xem [Kiểm tra cụm lắp ráp về va chạm và chuyển động](topic:check-assembly#a-motion-study).

**Mặt và chi tiết từ vật lý**

- **Không gian làm việc Mặt.** Chọn {{ui:Mặt}} trong hộp {{ui:Không gian làm việc}} cho đường cong và mặt NURBS bên cạnh chi tiết: {{ui:Đường cong}}, {{ui:Chuyển tiếp}}, {{ui:Quét}}, {{ui:Khớp}} và {{ui:Vằn ngựa}}, với độ liên tục (G0, G1 hoặc G2) đo trên các mặt chính xác và một cạnh kém hơn mức bạn yêu cầu được liệt kê trong Vấn đề với một lần sửa Khớp. {{ui:Làm trơn}} đo các đường hull để tìm điểm uốn và nhảy độ cong, và dựng lại những chỗ không mượt trong dung sai của bạn. Mặt được lưu trong tệp chi tiết và không thay đổi tính năng của chi tiết. Xem [Mặt tự do (NURBS)](topic:nurbs-surfaces).
- **Kỹ sư.** Chọn {{ui:Kỹ sư}} trong bộ chuyển không gian làm việc, chọn một bộ sinh và nhấn {{ui:Mới}}: một kịch bản định kích thước chi tiết từ việc nó phải làm (truyền nhiệt, lưu lượng, áp suất, vật liệu, quy trình in) bằng công thức sách giáo khoa và dựng nó, rồi trả lại các con số đã dùng kèm nguồn, kiểm tra chế tạo và tệp cho công cụ phân tích. Cùng đầu vào cho cùng chi tiết trên mọi máy tính. Bộ sinh được giữ trong chi tiết, và mở chi tiết không bao giờ chạy kịch bản. Xem [Chi tiết từ vật lý: bộ sinh](topic:engineer-generators) và [Viết bộ sinh](topic:write-a-generator).

**Phác thảo, bản vẽ và chế tạo**

- **Phác thảo từ ảnh.** {{ui:Đặc trưng}} › {{ui:Thêm}} › {{ui:Phác thảo từ ảnh…}} vẽ theo một bức ảnh chi tiết phẳng trên nền trơn (đường bao và lỗ) hoặc một bản vẽ bút thành các đường, cung và vòng tròn. Bạn cho một chiều dài, kiểm tra bản xem trước và tạo phác thảo. Xem [Cơ bản về phác thảo](topic:sketch-basics#a-sketch-from-a-photo).
- **Chia tỷ lệ và chia để in.** {{ui:Xuất}} › {{ui:Thay đổi tỷ lệ để in (STL hoặc 3MF)…}} thay đổi tỷ lệ theo từng trục mà không đổi chi tiết, ví dụ theo lượng dự co ngót. {{ui:Xuất}} › {{ui:Chia để in (một tệp zip các mảnh)…}} cắt một chi tiết quá lớn cho bệ của bạn thành các mảnh đánh số, nối bằng chốt, then, đuôi én, lỗ chốt hoặc hốc nam châm. Xem [In 3D](topic:print-3d).
- **Tấm đã sắp xếp thành G-code.** {{ui:Xuất}} › {{ui:Các tấm đã sắp xếp sang G-code}} đọc một DXF đã sắp xếp và tạo một chương trình cho mỗi tấm qua hậu xử lý bạn chọn: lỗ và phần cắt ra trước, rồi các đường bao. Nó không lên kế hoạch đường đi vào, thứ tự cắt hay các cạnh chung. Xem [Sắp xếp chi tiết phẳng trên tấm](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Bản vẽ tự làm nhiều hơn.** {{ui:Tờ}} › {{ui:Tự động}} chọn tờ cỡ A nhỏ nhất chứa các khung nhìn ở tỷ lệ tiêu chuẩn lớn nhất đến 1:1. {{ui:Ghi kích thước lỗ}} đặt một dấu tâm cho mỗi lỗ, một chú thích cho mỗi cỡ và các vị trí tính từ góc dưới bên trái của khung nhìn. Xem [Tạo bản vẽ](topic:drawing-pdf).

**Trong mọi ứng dụng**

- **Ngôn ngữ.** Các ứng dụng có 54 ngôn ngữ. Những ngôn ngữ ngoài tiếng Anh là bản nháp máy cho đến khi người bản ngữ đọc.
- **Số hàng thanh công cụ.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Số hàng thanh công cụ}} chọn Xuống dòng (như trước), 2 hàng hoặc 1 hàng; thanh không vừa sẽ cuộn ngang. Dải lệnh Đặc trưng của PartCraft hiển thị công cụ dùng nhiều nhất lớn và giấu các biến thể sau một nút tách.
- **Kết nối AI của bạn.** Studio là trung tâm để kết nối một trợ lý của riêng bạn với cả tám ứng dụng, với quyền chỉ đọc, đề xuất hoặc chỉnh sửa cho từng ứng dụng. Một trợ lý được kết nối có thể định kích thước chi tiết từ một câu như một giá đỡ cho một tải, hiển thị cách làm và mọi kiểm tra, rồi dựng nó; nó báo cáo những gì nó không kiểm tra (tập trung ứng suất, mỏi, từ biến trong nhựa). Xem [Dùng PartCraft với trợ lý AI](topic:use-with-ai-assistants).

### Đã sửa trong 0.8.1

- **Đóng băng con trỏ toàn màn hình.** Việc chọn khi rê chuột giờ được giới hạn tốc độ. Nguyên nhân là cách đọc tốt nhất của chúng tôi và chưa được xác nhận với người báo lỗi.
- **Ngôn ngữ khi chạy.** Studio và các bản đóng gói có thể đổi ngôn ngữ khi đang chạy; trước đây chỉ có tiếng Anh. Điều này chưa được kiểm thử trên mọi nền tảng: báo cho chúng tôi nếu ngôn ngữ không đổi.

### Chưa có trong phiên bản này

- Kết nối AI của bạn chưa hoàn thiện: kết nối một chạm bên trong Studio, trình kết nối được host cho AI trong trình duyệt, khóa API riêng bên trong Studio và gói MCP đã xuất bản chưa được hứa. Studio không có AI riêng.
- Studio chưa được ký mã: Windows có thể cảnh báo, và macOS yêu cầu chuột phải rồi Mở. Xem [Khắc phục sự cố](topic:troubleshooting).
- Chuỗi dung sai vẫn chỉ một hướng: xem [Chuỗi dung sai](topic:tolerance-stackup).
- Phần còn lại được liệt kê trong [Chưa xây dựng](topic:not-built-yet).

Các thay đổi trước đó nằm trong [Có gì mới trong 0.7](topic:whats-new-0-7).
