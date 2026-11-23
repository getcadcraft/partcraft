---
title: Chưa xây dựng
summary: Mọi thứ bản PartCraft này chưa làm, từ quét xoắn đến hiển thị inch, kích thước bản vẽ và cụm con, cùng việc nên làm thay thế hiện nay.
keywords: thiếu, chưa có, giới hạn, hạn chế, lộ trình, kernel chính xác, bo góc, vát mép, vỏ, quét, chuyển tiếp, nhập STEP, mô phỏng, gia công, quét xoắn, tiếp tuyến cuối chuyển tiếp, bo góc mặt, phương trình, inch, kích thước bản vẽ, cụm con, đám mây, máy tính bảng, điện thoại
from: 97b10a29
---

PartCraft là bản dựng sớm. Trang này liệt kê những gì nó chưa làm, để bạn không phải tìm, và việc nên làm thay thế hiện nay. Không mục nào ở đây có ngày.

## Cần kernel chính xác

Phiên bản này dựng mọi chi tiết bằng kernel lưới (xem [Nhân lưới (mesh kernel)](topic:solid-kernels)). Mọi thứ dưới đây cần một kernel hình học chính xác, mà phiên bản này chưa có. Chi tiết được lưu với các tính năng này vẫn mở được: các tính năng nằm trong lịch sử, được đánh dấu là chưa xây dựng, và được giữ lại khi bạn lưu.

| Chưa xây dựng | Thay thế, hiện nay |
|---|---|
| {{ui:Bo góc}} và {{ui:Vát mép}} trên cạnh tròn; bo góc có bán kính thay đổi dọc theo cạnh; các góc tròn được pha trộn mượt chỗ chúng gặp nhau (kernel lưới cắt vát chúng) | Bo góc và Vát mép chỉ làm việc trên cạnh thẳng giữa các mặt phẳng; làm tròn các góc khác trong phác thảo trước khi đùn ({{ui:Bo góc}} trong phác thảo, {{key:F}}) |
| {{ui:Vỏ}} mở các mặt cong; thành có độ dày khác nhau | Mở các mặt phẳng; thêm vật liệu bằng các lần đùn ở nơi thành phải dày hơn |
| {{ui:Quét}}, {{ui:Chuyển tiếp}}, {{ui:Độ nghiêng khuôn}} trên mặt cong; đùn đến một mặt, mặt kế tiếp hoặc một đỉnh; đùn côn | Đùn hoặc quay tròn, theo từng bước khi cần; đùn đến một độ sâu bạn đo |
| {{ui:Gân}}, {{ui:Cánh nền}}, {{ui:Cánh cạnh}} và mẫu trải phẳng | Đùn tấm hoặc profile của gân |
| Mặt: hoàn thiện một {{ui:Tạo hình}} thành chi tiết, {{ui:Vá}}, {{ui:Chuyển tiếp mặt}}, {{ui:Mặt Gordon}}, {{ui:Khâu}}, {{ui:Làm dày}}, {{ui:Dời mặt}}, {{ui:Kéo dài mặt}}, {{ui:Cắt mặt}} | Không có |
| Nhiều vật thể: {{ui:Kết hợp}}, {{ui:Di chuyển vật thể}}, {{ui:Tỷ lệ vật thể}}, {{ui:Mẫu theo đường dẫn}}, các tính năng tạo vật thể mới | Một vật rắn; mẫu và đối xứng sao chép tính năng |
| Phác thảo, mặt phẳng, trục và điểm trên các mặt mà chỉ kernel chính xác mới tìm được (mặt tạo bởi bo góc, thành lỗ, mặt của vật rắn nhập vào) | Phác thảo trên mặt phẳng gốc, mặt phẳng tham chiếu và các mặt phẳng của lần đùn và quay tròn |
| Kết quả thiết kế sinh được mở như chi tiết hoặc thêm vào chi tiết (nó trở thành vật rắn nhập) | Tải kết quả về dạng STL hoặc STEP |
| Chỉnh sửa các mặt cong của tệp STEP đã mở như bề mặt chính xác; STEP chính xác của mặt spline, mặt quét và mặt quay từ tệp STEP; cạnh spline; ren được mô hình hóa; thân STL / OBJ / 3MF và cụm lắp ráp; STEP cho các phần mềm mô hình chi tiết khác | {{ui:Mở}} đọc STEP thành tam giác và giữ các mặt phẳng, trụ, nón, cầu và xuyến của tệp cho việc xuất ([Mở tệp STEP](topic:import-step)); {{ui:Xuất}} › {{ui:STEP AP242 (khối đặc chính xác)}} ghi mọi mặt giải tích một cách chính xác và giữ chúng dưới dạng mặt facet ([Xuất](topic:export-files#for-other-cad-programs-step)); macro cho phần mềm mô hình khác vẫn ghi được |
| Cung thật trong khung nhìn bản vẽ | Khung nhìn và khung nhìn cắt được vẽ từ các facet |
| Thể tích, diện tích và khoảng cách chính xác | {{ui:Đo}} cho số liệu của vật rắn facet, hơi thấp với chi tiết tròn; cài đặt **Đường cong** mịn hơn sẽ đưa chúng gần hơn |

Một số hàng trong các bảng dưới đây gợi ý một trong các tính năng này như cách giải quyết điều khác. Các gợi ý đó áp dụng khi kernel chính xác trở lại.

## Tính năng

| Chưa xây dựng | Thay thế, hiện nay |
|---|---|
| Bo góc mặt, bo góc tròn hoàn toàn, bo góc với bán kính đặt tại các điểm dọc theo cạnh | {{ui:Bo góc}} với bán kính hằng số hoặc biến đổi tuyến tính; nhiều tính năng bo góc |
| Vỏ với độ dày thành khác nhau | Một độ dày {{ui:Vỏ}}; thêm vật liệu bằng lần đùn nơi thành phải dày hơn |
| Độ nghiêng trên mặt tự do (spline) | {{ui:Độ nghiêng khuôn}} làm việc trên mặt phẳng, mặt trụ và mặt nón |
| Quét xoắn, quét thành mỏng và quét bề mặt; tiếp tuyến cuối trên tính năng Chuyển tiếp; chuyển tiếp với một ray dẫn; đường spline | {{ui:Quét}} với hướng cố định hoặc tỷ lệ cuối; chuyển tiếp với hai ray dẫn trở lên: xem [Quét, chuyển tiếp và độ nghiêng](topic:sweep-loft-draft) |
| Gân từ cung hoặc spline; gân mở rộng vuông góc với phác thảo (từ khung nhìn trên); độ nghiêng trên gân; nhiều gân từ một phác thảo | {{ui:Gân}} từ một chuỗi đường thẳng trong mặt phẳng riêng của gân: xem [Gân và tấm góc](topic:rib) |
| "Đến" một mặt cong, "đến tiếp theo" dừng tại mặt cong | Đến một mặt phẳng hoặc mặt phẳng tham chiếu |
| Lỗ khoan rộng đáy, ren inch và ren ống, ren côn, kết thúc ren và đầu ren vát | Khoét lỗ với độ sâu nhỏ; ren ISO hệ mét và hình thang, trang trí hoặc mô hình hóa: xem [Ren trên trục và lỗ, vẽ hoặc mô hình hóa](topic:threads) |
| Đùn mỏng | Vẽ cả hai thành của profile |
| Sao chép mẫu bỏ qua từng cái, mẫu tô đầy | Dùng các tính năng riêng; mẫu dọc theo đường cong: {{ui:Mẫu theo đường dẫn}} |
| Sao chép mẫu, đối xứng, bo góc, vát mép, vỏ và vật rắn nhập | Sao chép phác thảo hoặc tính năng mà chúng được dựng trên đó, hoặc tạo mẫu cho nó |
| Tiếp tuyến chính xác (G1) tại điểm bất thường của form; gộp các miếng vá của form thành mặt lớn hơn | Tăng **Mức** của form: các miếng vá xấp xỉ sẽ nhỏ hơn; xem [Hình dạng tự do với Form](topic:form-surfaces) |
| Một form gồm nhiều mảnh kín rời nhau trong một tính năng; cầu nối giữa các form | Một mảnh kín cho mỗi tính năng Form; nối chúng bằng Nối |
| Chọn vật thể mặt trong khung nhìn (trừ điểm cắt và điểm vá); bo góc mặt; bỏ cắt; vá G2; mặt Gordon tiếp tuyến với mặt cong lân cận (tiếp tuyến với mặt phẳng và mặt phẳng đã có) | Chọn chúng theo tên trong bảng của tính năng; làm dày trước, rồi bo góc khối đặc |
| Danh sách vật thể trong lịch sử; loại trừ vật thể đang ẩn khỏi các tệp xuất | Đổi tên và ẩn vật thể trong danh sách vật thể của bảng chi tiết; xóa hoặc ẩn tính năng đã tạo ra vật thể để loại nó ra |
| Tỷ lệ không đều giữ trụ và nón giải tích; tỷ lệ không đều của mặt bù | {{ui:Tỷ lệ vật thể}} làm các mặt cong thành B-spline đóng (trong 0.0000004 mm); tỷ lệ đều vẫn chính xác |
| Kết hợp vật thể mặt; tổng Minkowski | {{ui:Khâu}} hoặc {{ui:Làm dày}} trước, rồi {{ui:Kết hợp}} |
| Phân tích dung sai: chuỗi dung sai rẽ góc (vòng vectơ 2D và 3D), độ nhạy tính từ hình học, Monte Carlo với phân phối khác, dung sai kích thước trên kích thước phác thảo, dung sai thưởng từ điều kiện vật liệu | {{ui:Chuỗi dung sai}} trong cụm lắp ráp: một hướng, trường hợp xấu nhất và RSS, dung sai được nhập, từ dung sai chung của khối tiêu đề hoặc từ khung GD&T: xem [Chuỗi dung sai](topic:tolerance-stackup) |
| Sắp xếp: thứ tự cắt và đường dẫn vào, cắt cạnh chung một lần, các chi tiết phải để cùng nhau; phế liệu của cuộn, phôi dùng chung giữa các dự án | {{ui:Sắp xếp chi tiết phẳng trên tấm…}} với khoảng cách, lề, xoay và thớ: xem [Sắp xếp chi tiết phẳng trên tấm](topic:nest-flat-parts); tấm thừa được giữ và dùng trước: xem [Giữ và dùng lại phế liệu](topic:nest-offcuts); lên kế hoạch cắt trong phần mềm của máy cắt |
| Tấm kim loại: gấp mép, gấp nối, mặt bích cắt góc và đường bao; mặt bích trên cạnh cong hoặc trên các mặt của mặt bích đế đã uốn; đường uốn phác thảo; góc đóng; dụng cụ tạo hình; chuyển khối đặc thành tấm kim loại; mặt phẳng của mặt bích đế đã uốn có cắt; bảng uốn | {{ui:Cánh nền}} (một tấm hoặc profile đã uốn), {{ui:Cánh cạnh}} trên cạnh thẳng của tấm với rãnh giảm uốn, và mẫu trải phẳng với hệ số K: xem [Tấm kim loại](topic:sheet-metal) |
| Phân tích độ nghiêng trên cụm lắp ráp; tìm đường phân khuôn; phân tích độ dày thành | {{ui:Phân tích độ nghiêng khuôn}} trên chi tiết trong Thiết kế: xem [Kiểm tra độ nghiêng cho đúc khuôn](topic:draft-analysis); mở từng chi tiết của cụm lắp ráp để kiểm tra |

## Phác thảo

| Chưa xây dựng | Thay thế, hiện nay |
|---|---|
| Elip, cung tiếp tuyến, conic, spline với bậc hoặc trọng số đặt sẵn (NURBS) | Spline (bậc ba), cung và vòng tròn với quan hệ Tiếp tuyến |
| Điểm trên spline (một quan hệ), quan hệ độ cong (G2) | Đặt điểm riêng của spline ở nơi nó phải đi qua |
| Bản sao dời của spline theo các thay đổi sau; dời các chuỗi có góc spline nhọn | Dời lại sau thay đổi; bo tròn góc trước |
| Bản sao mẫu vẫn liên kết với bản gốc; mẫu dọc theo đường cong | Tạo mẫu lại sau thay đổi |
| Chiếu cạnh tròn tự do hoặc nghiêng, hình học được chiếu theo chi tiết | Chiếu cạnh tròn thẳng và song song, rồi ghi kích thước |
| Kích thước điều khiển (tham chiếu) | Đọc kích thước từ bảng hoặc thông tin chi tiết |
| Quan hệ thẳng hàng (collinear) | Song song với khoảng cách 0 |
| Dán vào chương trình khác (clipboard hệ thống) | Xuất DXF, STEP, STL hoặc 3MF |
| Nhập cung, tọa độ tương đối hoặc cực | Vẽ đường thẳng và vòng tròn; vẽ cung bằng công cụ Cung |
| Chọn hình học không có con trỏ | Cần một cú nhấp hoặc chạm |

## Tham số và đơn vị

| Chưa xây dựng | Thay thế, hiện nay |
|---|---|
| Cấu hình thay đổi vật liệu; bảng thiết kế CSV tắt tính năng | Cấu hình đặt {{ui:Tham số}} và bật/tắt tính năng: xem [Cấu hình và bảng thiết kế](topic:design-tables); `partcraft variants` dựng cấu hình đã lưu theo tên, kể cả tính năng đã tắt: xem [Tạo gói biến thể từ cấu hình](topic:variant-pack) |
| Phương trình trên các số của bảng của tính năng mới nhất (mặt phẳng, quét, độ nghiêng và tương tự) | Viết chúng trong kịch bản hoặc bằng `partcraft set` ([Kịch bản và dòng lệnh](topic:scripts-and-cli)) |
| Chi tiết hiển thị bằng inch | Kích thước hiển thị bằng milimét; nhập `2in` trong ô số hoặc biểu thức và nó thành 50.8 |

## Tệp

| Chưa xây dựng | Thay thế, hiện nay |
|---|---|
| Chỉnh sửa tính năng riêng của vật rắn STEP nhập vào (nó đến không có lịch sử) | Thêm hoặc cắt vật liệu bằng tính năng của riêng bạn |
| Đọc màu, tên, cấu trúc cụm và PMI từ STEP | Không có |
| Xuất glTF, OBJ, IGES, Parasolid; DWG của chi tiết 3D (chỉ gói biến thể ghi DWG: tờ bản vẽ) | STL hoặc 3MF cho lưới; STEP cho vật rắn; DXF cho 2D |
| Mở IGES, DXF hoặc tệp riêng của chương trình khác (tệp `.3dm` mở thành một vật thể: [Mở mô hình .3dm như vật rắn](topic:open-3dm-files)) | Dùng STEP, hoặc lưới STL, OBJ hoặc 3MF kín: [Mở STL, OBJ hoặc 3MF](topic:open-meshes) |
| Cấu trúc cụm (cây với tên chi tiết) trong STEP đã xuất | STEP của cụm là một hợp thành các vật rắn đã đặt |
| Lưu vào thư mục bạn chọn mà không qua trình duyệt | Bật "hỏi nơi lưu" trong cài đặt tải xuống của trình duyệt |

## Bản vẽ

| Chưa xây dựng | Thay thế, hiện nay |
|---|---|
| Kích thước ngoài ba kích thước tổng thể (kích thước lỗ, vị trí, dung sai kích thước) | Đánh dấu PDF, hoặc xuất DXF và ghi kích thước trong phần mềm CAD 2D |
| Nhiều hơn một mặt cắt hoặc chi tiết; khung nhìn căn chỉnh, cắt cục bộ và phụ | Một mặt cắt và một chi tiết cho mỗi bản vẽ |
| Văn bản tự do, ghi chú và bảng trên tờ (ngoài khối tiêu đề và khối sửa đổi) | Ghi chú hoàn thiện, hoặc văn bản thêm vào PDF |
| Chiếu góc thứ nhất, khung nhìn di chuyển, tờ dọc | Góc thứ ba, bố cục tự động, tờ ngang A4–A0 và ANSI A–E |
| Mặt cắt trực tiếp: nhiều mặt phẳng hoặc hộp cắt cùng lúc, đường viền quanh chỗ cắt, lưu mặt cắt vào tệp | Một mặt phẳng mỗi lần từ {{ui:Khung nhìn}} › {{ui:Khung nhìn cắt}}; xem [Nhìn vào bên trong bằng khung nhìn cắt](topic:section-view) |
| Bản vẽ cụm với nhiều khung nhìn, kích thước hoặc bóng số bạn có thể di chuyển | Một khung nhìn đẳng trục (hoặc tách rời) với bóng số tự động và danh sách chi tiết |
| Sao chép và dán GD&T và ký hiệu hoàn thiện | Đặt từng ký hiệu bằng Datum, Frame hoặc Finish |
| Sách hướng dẫn: tệp STEP trong {{ui:Từ một tệp khác…}} của Illustrate, mô hình được chuyển thẳng từ ModelCraft hoặc BimCraft, ảnh ở chất lượng của bộ kết xuất đường đi tia, 3D tương tác trong PDF | Mở STEP trong Thiết kế và bắt đầu sách hướng dẫn bằng {{ui:Từ chi tiết đang mở}}; lưu mô hình dạng glTF (.glb); ảnh PNG của khung nhìn 3D; tệp 3D tương tác: xem [Bắt đầu sách hướng dẫn trong Illustrate](topic:illustrate) |

## Cụm lắp ráp

| Chưa xây dựng | Thay thế, hiện nay |
|---|---|
| Khớp bánh răng, thanh răng, cam và vít; khớp cầu giới hạn trong hình nón; khớp trên mặt cong hoặc giữa các điểm | Khớp cứng, quay, trượt, trụ, phẳng, cầu và chốt-trong-rãnh trên mặt phẳng, mỗi giá trị với giới hạn riêng: xem [Dựng cụm lắp ráp](topic:build-assembly) |
| Bước tách rời làm xoay chi tiết, và kéo chi tiết mà khớp đặt | Bước tách thẳng; gỡ khớp để di chuyển chi tiết bằng tay |
| Cụm con | Chỉ một cấp chi tiết |
| Bánh răng, cam, tiếp xúc | Không có |

## Gia công

| Chưa xây dựng | Thay thế, hiện nay |
|---|---|
| Dọn thích ứng 3D và dọn bù trong 3D; hoàn thiện mực nước, bút chì, xuyên tâm và xoắn ốc; lượt thích ứng được ghi thành cung | Thô 3D theo hàng thẳng và gia công phần còn lại: xem [Thô 3D và gia công phần còn lại](topic:rough-3d); hoàn thiện Song song và Scallop: xem [Hoàn thiện 3D](topic:finish-3d); mặt, túi, thích ứng 2D, biên dạng, khoan và vát mép 2.5 trục: xem [Tạo đường dao và G-code](topic:manufacture) |
| Cắt swarf, đường dòng và đường dọn đa trục, mã mặt làm việc nghiêng (G68.2), kiểm tra va chạm đế và máy; mô phỏng cắt 5 trục và trục xoay | Dao nghiêng cho mọi thao tác, hoàn thiện 5 trục bằng dao phay đầu cầu và hoàn thiện trục xoay thứ 4: xem [Gia công 4 và 5 trục](topic:multi-axis) |
| Doa và ren trong trên máy tiện, chu kỳ G71/G76, cung trong đường tiện, dao sống, trục chính phụ | Tiện ngoài: mặt, thô, hoàn thiện, rãnh, cắt đứt, ren, khoan tâm: xem [Tiện trên máy tiện](topic:turning) |
| Dò góc hoặc góc, cảm biến dao, đo kích thước so với dung sai | Đo chạm mặt, cạnh, lỗ hoặc vấu để đặt gốc gia công: xem [Đo chạm](topic:probing) |
| Kiểm tra va chạm đế và thân dao | Theo dõi cảnh báo chiều dài rãnh và kiểm tra trong bộ mô phỏng của bộ điều khiển |
| Chu kỳ tuổi thọ dao và chương trình con trong post; tải tệp post của chương trình khác | Viết hoặc sửa post theo định dạng riêng của PartCraft: xem [Bộ hậu xử lý bạn có thể sửa](topic:post-processors) |
| G-code inch (G20) | Chỉ milimét (G21) |

## Mô phỏng và thiết kế sinh

| Chưa xây dựng | Thay thế, hiện nay |
|---|---|
| Nghiên cứu phi tuyến: chảy dẻo, biến dạng lớn, tiếp xúc giữa các chi tiết, mỏi | Tĩnh tuyến tính và tần số riêng: xem [Kiểm tra ứng suất và độ võng](topic:simulation); giữ hệ số an toàn đủ lớn hơn 1 |
| Mất ổn định phi tuyến (khuyết tật, sau mất ổn định, lật tức thời) | Hệ số tải mất ổn định tuyến tính với biên độ rộng: xem [Nhiệt, ứng suất nhiệt và mất ổn định](topic:thermal-and-buckling) |
| Bức xạ giữa các mặt (hệ số hình dạng), điện trở tiếp xúc, vật liệu phụ thuộc nhiệt độ, quán tính trong ứng suất nhiệt (sóng sốc nhiệt) | Bức xạ ra môi trường, ứng suất nhiệt ổn định hoặc quasi-tĩnh theo thời gian, tính chất hằng số: xem [Nhiệt, ứng suất nhiệt và mất ổn định](topic:thermal-and-buckling) |
| Tự động làm mịn cho nhiệt không ổn định và nghiên cứu có tải nhiệt; làm lưới thô hơn ở nơi sai số nhỏ; mục tiêu trên đại lượng cục bộ (ứng suất đỉnh tại một điểm) | **Làm mịn tự động** cho nghiên cứu tĩnh, mất ổn định, tần số riêng và nhiệt ổn định, theo sai số trên toàn chi tiết: xem [Kiểm tra ứng suất và độ võng](topic:simulation); nếu không, giảm kích thước phần tử |
| Tải ổ trục và bulông, lực từ xa, mômen, lò xo, chuyển vị định trước | Lực và áp suất trên mặt, trọng lực; mặt cố định và mặt không ma sát |
| Mô phỏng cụm lắp ráp; vật liệu khác nhau theo hướng (lớp in, composite) | Một chi tiết, một vật liệu đẳng hướng |
| Nhiều luồng giải cho nghiên cứu tứ diện, truyền nhiệt và thiết kế sinh; luồng trên trang không được cách ly chéo nguồn | Nghiên cứu voxel, mất ổn định, ứng suất theo thời gian và dòng chảy tầng dùng các luồng khi trang cho phép: xem [Cài đặt PartCraft](topic:settings) |
| Dòng rối với độ chính xác thiết kế (mô hình Spalart–Allmaras có mặt dưới dạng thử nghiệm: ma sát ống cao hơn 30 đến 34 %, điểm tái bám bậc lùi ngắn hơn 21 đến 39 %; dự kiến: ô mịn hơn gần thành), nhiệt trong dòng, dòng không dừng (chính xác theo thời gian), mặt tự do, chất lỏng phi Newton, chi tiết quay | Dòng tầng, ổn định, đẳng nhiệt của chất lỏng Newton, hoặc mô hình rối thử nghiệm cho mẫu định tính: xem [Mô phỏng dòng chảy chất lỏng](topic:flow-simulation); bảng cảnh báo khi số Reynolds vượt ngưỡng dòng tầng |
| Giới hạn ứng suất và quy tắc chế tạo (góc treo, hướng phay) trong thiết kế sinh; nhiều vật liệu trong một hình | Hình cứng nhất cho một thể tích; kiểm tra kết quả trong Mô phỏng: xem [Phát triển hình dạng từ tải](topic:generative-design) |
| Kết quả như vật rắn có thể chỉnh sửa (mượt, tham số) | STL, STEP có facet hoặc chi tiết với kết quả là vật rắn facet nhập vào |
| Thiết kế máy điện: rôto quay trong stato, mômen theo góc, thép bão hòa, nam châm mất từ tính sau đầu gối, dòng xoáy và tổn hao sắt và đồng; từ trường 3D hoặc trên lưới cong | Từ tĩnh 2-D tuyến tính trên lưới trong thư viện phân tích: cuộn dây, sắt, nam châm vĩnh cửu trên đường hồi, khe hở, điện cảm và lực hút: xem [Từ trường 2-D](topic:magnetic-fields-2d) |

## Kịch bản

| Chưa xây dựng | Thay thế, hiện nay |
|---|---|
| Trợ giúp khi rê chuột, điểm dừng và chạy từng bước trong trình soạn kịch bản | Tìm, gấp và hoàn thành đã có (xem [Viết và chạy kịch bản](topic:craftscript)); phần còn lại, dùng trình soạn của bạn: {{ui:Lưu}} và {{ui:Mở}} trong nhóm Kịch bản đưa kịch bản vào và ra; hàm có sẵn được liệt kê trong [Ngôn ngữ CraftScript](topic:craftscript-language) |
| Điểm dừng và chạy từng bước qua kịch bản | `disp` và `fprintf` trên đường đi; {{key:Mod+Enter}} chạy vài dòng được chọn mỗi lần |
| Trường và đồ thị do kịch bản hiển thị được vẽ trong không gian Thiết kế; kịch bản thay đổi tham số của chi tiết | Chúng hiển thị trong không gian Kịch bản; kịch bản đọc tham số bằng `param` (xem [Viết và chạy kịch bản](topic:craftscript)), thay đổi chúng trên thẻ {{ui:Tham số}} |
| Biểu đồ và bảng cạnh nhau; chỉnh sửa đồ thị (thu phóng, giới hạn trục) trước khi lưu | Cạnh nhau hiển thị các đồ thị; lưu đồ thị dạng PNG, SVG hoặc CSV và hoàn thiện ở nơi khác |
| numpy và các gói Python khác; Python ngoại tuyến; gấp Python trong trình soạn; Pascal Script | Thư viện chuẩn của Python, CraftScript và Lua: xem [Kịch bản bằng Python](topic:craftscript-python) |
| Truyền hàm Lua cho hàm có sẵn; gọi hàm thư viện từ Lua bằng tên tạo ra khi kịch bản chạy | Viết tên hàm thư viện trong kịch bản (`cs.static_tet(…)`), hoặc gọi từ kịch bản CraftScript |

## Ứng dụng

| Chưa xây dựng | Thay thế, hiện nay |
|---|---|
| Lưu trên đám mây, chia sẻ và lịch sử phiên bản | Chưa có. Lưu tệp vào máy tính và giữ các phiên bản theo tên |
| PartCraft như ứng dụng cài trên iPad và iPhone | Dùng PartCraft trong trình duyệt của thiết bị; trên Android và máy tính, ứng dụng cũng chạy trong CadCraft Studio (getcadcraft.com/download) |
| Menu ngữ cảnh (chuột phải) | Thanh công cụ và bảng bên phải |
| Làm việc hoàn toàn ngoại tuyến từ đầu | Chỉ khi ứng dụng đã được lưu để dùng ngoại tuyến: xem [Làm việc ngoại tuyến](common:offline) |

Gửi những gì bạn thiếu nhiều nhất qua trang hỗ trợ của trang web; điều đó quyết định việc làm tiếp theo.

## Kỹ sư (bộ sinh và trường)

| Chưa xây dựng | Thay thế, hiện nay |
|---|---|
| Đầu nối, cửa xả và phụ kiện trên bộ trao đổi nhiệt được sinh ra; đường cong nhiệt độ cho độ bền vật liệu; tổn thất ở co trong ống góp | Các bộ sinh dựng lõi và ống; thêm phụ kiện trong Thiết kế; dùng số liệu ở nhiệt độ phòng của vật liệu với hệ số an toàn |
| Thêm bộ sinh từ thư mục tiện ích bổ sung chỉ bằng một cú nhấp | {{ui:Mở}} trong không gian Kỹ sư thêm một bộ sinh từ tệp |
| Tệp trường mịn hơn kích thước voxel của bộ sinh; đọc tệp `.vdb` | Lưu trường mịn hơn từ kịch bản; `.vdb` được ghi, không được đọc |
| Tính toán bình chịu áp lực theo quy chuẩn | Các công thức thành mỏng và thành dày trong sách giáo khoa, với hệ số an toàn bạn chọn; không phải hệ số của quy chuẩn |
| Bộ sinh cho các ứng dụng khác | Chỉ PartCraft trong phiên bản này |
