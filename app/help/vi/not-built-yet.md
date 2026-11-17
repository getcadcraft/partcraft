---
title: Những gì chưa được xây dựng
summary: Mọi thứ bản PartCraft này chưa làm, từ quét xoắn đến hiển thị inch, bản vẽ kích thước và lắp ráp con, kèm việc nên làm thay thế hôm nay.
keywords: thiếu, chưa có, giới hạn, hạn chế, lộ trình, kernel chính xác, bo góc, vát mép, vỏ, quét, chuyển tiếp, nhập STEP, mô phỏng, manufacture, quét xoắn, tiếp tuyến cuối, bo góc mặt, phương trình, inch, kích thước bản vẽ, lắp ráp con, đám mây, máy tính bảng, điện thoại
from: 9b868162
---

PartCraft là bản dựng sớm. Trang này liệt kê những gì nó chưa làm, để bạn khỏi tìm kiếm, và việc nên làm thay thế hôm nay. Không có mục nào ở đây có ngày dự kiến.

## Cần kernel chính xác

Phiên bản này dựng mọi chi tiết bằng kernel lưới (xem [Kernel lưới](topic:solid-kernels)). Mọi mục dưới đây cần một kernel hình học chính xác, mà phiên bản này chưa có. Chi tiết lưu với các đặc trưng này vẫn mở được: các đặc trưng vẫn nằm trong lịch sử, được đánh dấu là chưa xây dựng, và được giữ lại khi bạn lưu.

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| {{ui:Bo góc}} và {{ui:Vát mép}} trên cạnh tròn; bo góc có bán kính thay đổi dọc cạnh; các chỗ bo nối trơn tru khi gặp nhau (kernel lưới cắt chéo chúng) | Bo góc và Vát mép hoạt động trên cạnh thẳng giữa các mặt phẳng; bo các góc khác ngay trong phác thảo trước khi đùn ({{ui:Bo góc}} trong phác thảo, {{key:F}}) |
| {{ui:Vỏ}} mở các mặt cong; thành có độ dày khác nhau | Mở các mặt phẳng; thêm vật liệu bằng đùn ở chỗ thành cần dày hơn |
| {{ui:Quét}}, {{ui:Chuyển tiếp}}, {{ui:Độ nghiêng khuôn}} trên mặt cong; đùn tới một mặt, mặt kế tiếp hoặc một đỉnh; đùn thuôn | Đùn hoặc quay tròn, theo từng bước khi cần; đùn tới một độ sâu bạn đo |
| {{ui:Gân}}, {{ui:Cánh nền}}, {{ui:Cánh cạnh}} và khai triển phẳng | Đùn tấm hoặc prôfin của gân |
| Bề mặt: hoàn tất {{ui:Tạo hình}} vào chi tiết, {{ui:Vá}}, {{ui:Chuyển tiếp mặt}}, {{ui:Mặt Gordon}}, {{ui:Khâu}}, {{ui:Làm dày}}, {{ui:Dời mặt}}, {{ui:Kéo dài mặt}}, {{ui:Cắt mặt}} | Không có sẵn |
| Nhiều thân: {{ui:Kết hợp}}, {{ui:Di chuyển vật thể}}, {{ui:Tỷ lệ vật thể}}, {{ui:Mẫu theo đường dẫn}}, các đặc trưng tạo thân mới | Một khối đặc; mẫu lặp và đối xứng sao chép đặc trưng |
| Phác thảo, mặt phẳng, trục và điểm trên các mặt mà chỉ kernel chính xác mới tìm được (mặt tạo bởi bo góc, thành lỗ, mặt của khối đặc đã nhập) | Phác thảo trên mặt phẳng gốc, mặt phẳng tham chiếu và các mặt phẳng của đùn và quay tròn |
| Kết quả thiết kế tạo sinh được mở thành chi tiết hoặc thêm vào chi tiết (nó trở thành khối đặc đã nhập) | Tải kết quả về dạng STL hoặc STEP |
| Chỉnh sửa các mặt cong của tệp STEP đã mở như bề mặt chính xác; STEP chính xác của mặt spline, mặt quét và mặt quay từ tệp STEP, cạnh spline, ren mô hình hóa, thân và lắp ráp STL / OBJ / 3MF; STEP cho các trình mô hình chi tiết khác | {{ui:Mở}} đọc STEP thành tam giác và giữ các mặt phẳng, trụ, nón, cầu và xuyến của tệp để xuất ([Mở tệp STEP](topic:import-step)); {{ui:Xuất}} › {{ui:STEP AP242 (khối đặc chính xác)}} ghi chính xác mọi mặt giải tích và giữ chúng dưới dạng các mặt facet ([Xuất](topic:export-files#for-other-cad-programs-step)); macro cho một trình mô hình chi tiết khác vẫn ghi |
| Cung thật trong khung nhìn bản vẽ | Khung nhìn và khung nhìn cắt được vẽ từ các facet |
| Thể tích, diện tích và khoảng cách chính xác | {{ui:Đo}} cho số liệu của khối đặc facet, hơi thấp với các chi tiết tròn; cài đặt **Đường cong** mịn hơn sẽ làm chúng gần hơn |

Một số dòng trong các bảng dưới đây gợi ý một trong các đặc trưng này như cách thay thế cho thứ khác. Các gợi ý đó áp dụng khi kernel chính xác trở lại.

## Đặc trưng

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Bo góc mặt, bo góc tròn hoàn toàn, bo góc với bán kính đặt tại các điểm dọc cạnh | {{ui:Bo góc}} bán kính không đổi hoặc biến đổi tuyến tính; nhiều đặc trưng bo góc |
| Vỏ với độ dày thành khác nhau | Một độ dày {{ui:Vỏ}}; thêm vật liệu bằng đùn ở chỗ thành cần dày hơn |
| Độ nghiêng khuôn trên mặt tự do (spline) | {{ui:Độ nghiêng khuôn}} hoạt động trên mặt phẳng, trụ và nón |
| Quét xoắn, quét thành mỏng và quét bề mặt; tiếp tuyến cuối trên đặc trưng Chuyển tiếp; chuyển tiếp với một ray dẫn hướng; đường dẫn spline | {{ui:Quét}} với hướng cố định hoặc tỷ lệ cuối; chuyển tiếp với hai hoặc nhiều ray dẫn hướng: xem [Quét, chuyển tiếp và độ nghiêng khuôn](topic:sweep-loft-draft) |
| Gân từ cung hoặc spline; gân mọc vuông góc với phác thảo (từ hình nhìn trên); độ nghiêng khuôn trên gân; nhiều gân từ một phác thảo | {{ui:Gân}} từ một chuỗi đường thẳng trong mặt phẳng của gân: xem [Gân và tấm góc](topic:rib) |
| "Đến" một mặt cong; "đến mặt kế tiếp" dừng tại mặt cong | Đến một mặt phẳng hoặc một mặt phẳng tham chiếu |
| Lỗ khoét hai cấp (counterdrilled), ren inch và ren ống, ren côn, đoạn thoát ren và đầu ren vát mép | Khoét lòng chìm với độ sâu nhỏ; ren mét ISO và ren hình thang, giả lập hoặc mô hình hóa: xem [Ren trên trục và lỗ, vẽ hoặc mô hình hóa](topic:threads) |
| Đùn đặc trưng mỏng | Vẽ cả hai thành của prôfin |
| Bỏ qua từng bản sao trong mẫu lặp, mẫu lấp đầy | Dùng các đặc trưng riêng; mẫu lặp dọc đường cong: {{ui:Mẫu theo đường dẫn}} |
| Sao chép mẫu lặp, đối xứng, bo góc, vát mép, vỏ và khối đặc đã nhập | Sao chép phác thảo hoặc đặc trưng mà chúng được dựng trên đó, hoặc tạo mẫu lặp cho nó |
| Tiếp tuyến chính xác (G1) tại các điểm đặc biệt của một hình tạo hình; gộp các miếng vá của hình tạo hình thành mặt lớn hơn | Tăng Mức của hình tạo hình: các miếng vá xấp xỉ sẽ nhỏ hơn; xem [Hình tự do với Tạo hình](topic:form-surfaces) |
| Một hình tạo hình gồm nhiều mảnh kín rời nhau trong một đặc trưng; cầu nối giữa các hình tạo hình | Một mảnh kín cho mỗi đặc trưng Tạo hình; nối chúng bằng Nối |
| Chọn thân bề mặt trong khung nhìn (trừ điểm cắt và vá); bo góc mặt; bỏ cắt; miếng vá G2; mặt Gordon tiếp tuyến với các mặt kề cong (tiếp tuyến với mặt phẳng và mặt phẳng đã được dựng) | Chọn chúng theo tên trong bảng của đặc trưng; làm dày trước, rồi bo góc khối đặc |
| Danh sách thân trong lịch sử; loại các thân ẩn khỏi tệp xuất | Đổi tên và ẩn thân trong danh sách thân của bảng chi tiết; xóa hoặc tắt đặc trưng đã tạo thân để loại nó |
| Tỷ lệ không đều giữ trụ và nón giải tích; tỷ lệ không đều của mặt dời | {{ui:Tỷ lệ vật thể}} làm các mặt cong thành B-spline xấp xỉ (trong 0.0000004 mm); tỷ lệ đều vẫn chính xác |
| Kết hợp thân bề mặt; tổng Minkowski | {{ui:Khâu}} hoặc {{ui:Làm dày}} trước, rồi {{ui:Kết hợp}} |
| Phân tích dung sai: chuỗi dung sai rẽ góc (vòng vectơ 2D và 3D), độ nhạy tính từ hình học, Monte Carlo với phân bố khác, dung sai kích thước trên kích thước phác thảo, dung sai thưởng từ điều kiện vật liệu | {{ui:Chuỗi dung sai}} trong lắp ráp: một hướng, trường hợp xấu nhất và RSS, dung sai nhập tay, từ dung sai chung của khung tên hoặc từ khung GD&T: xem [Chuỗi dung sai](topic:tolerance-stackup) |
| Sắp xếp: thứ tự cắt và đường dẫn vào, cắt cạnh chung một lần, các chi tiết phải giữ cùng nhau; phần dư của cuộn, kho dùng chung giữa các dự án | {{ui:Sắp xếp chi tiết phẳng trên tấm…}} với khoảng cách, lề, số lần xoay và hướng thớ: xem [Sắp xếp chi tiết phẳng trên tấm](topic:nest-flat-parts); tấm còn lại được giữ và dùng trước: xem [Giữ và tái sử dụng phần dư](topic:nest-offcuts); lập kế hoạch cắt trong phần mềm riêng của máy cắt |
| Tôn (kim loại tấm): mép gập, bậc lệch, cánh vát góc và cánh theo đường bao; cánh trên cạnh cong hoặc trên mặt của cánh nền đã uốn; uốn theo phác thảo; khóa góc; dụng cụ tạo hình; chuyển khối đặc thành tôn; khai triển của cánh nền uốn có cắt; bảng uốn | {{ui:Cánh nền}} (một tấm hoặc prôfin đã uốn), {{ui:Cánh cạnh}} trên các cạnh thẳng của tấm với rãnh giảm uốn, và khai triển phẳng với hệ số K: xem [Tôn (kim loại tấm)](topic:sheet-metal) |
| Phân tích độ nghiêng khuôn trên lắp ráp; tìm đường phân khuôn; phân tích độ dày thành | {{ui:Phân tích độ nghiêng khuôn}} trên chi tiết trong Thiết kế: xem [Kiểm tra độ nghiêng khuôn cho ép và đúc](topic:draft-analysis); mở từng chi tiết của lắp ráp để kiểm tra |

## Phác thảo

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Elip, cung tiếp tuyến, conic, spline có bậc hoặc trọng số đặt sẵn (NURBS) | Spline (bậc ba), cung và đường tròn với quan hệ Tiếp tuyến |
| Một điểm trên spline (một quan hệ), quan hệ độ cong (G2) | Đặt một điểm của chính spline nơi nó phải đi qua |
| Bản sao dời của spline bám theo thay đổi sau này; dời của chuỗi có góc spline nhọn | Dời lại sau khi thay đổi; bo góc trước |
| Bản sao mẫu lặp giữ liên kết với bản gốc; mẫu lặp dọc đường cong | Tạo mẫu lặp lại sau khi thay đổi |
| Chiếu cạnh tròn tự do hoặc nghiêng, hình học chiếu bám theo chi tiết | Chiếu các cạnh tròn thẳng và song song, rồi ghi kích thước |
| Kích thước bị dẫn (tham chiếu) | Đọc kích thước từ bảng hoặc thông tin chi tiết |
| Quan hệ thẳng hàng | Song song với khoảng cách 0 |
| Dán sang chương trình khác (bộ nhớ tạm của hệ thống) | Xuất DXF, STEP, STL hoặc 3MF |
| Gõ cung, tọa độ tương đối hoặc cực | Gõ đường thẳng và đường tròn; vẽ cung bằng công cụ Cung |
| Chọn hình học không có con trỏ | Cần một cú nhấp hoặc chạm |

## Tham số và đơn vị

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Cấu hình thay đổi vật liệu; bảng thiết kế CSV tắt đặc trưng | Cấu hình đặt tham số và bật/tắt đặc trưng: xem [Cấu hình và bảng thiết kế](topic:design-tables); `partcraft variants` tạo các cấu hình đã lưu theo tên, kể cả các đặc trưng đã tắt: xem [Tạo gói biến thể từ các cấu hình](topic:variant-pack) |
| Phương trình trên các số trong bảng riêng của các đặc trưng mới nhất (mặt phẳng, quét, độ nghiêng khuôn và tương tự) | Viết chúng trong kịch bản hoặc bằng `partcraft set` ([Kịch bản và dòng lệnh](topic:scripts-and-cli)) |
| Chi tiết hiển thị bằng inch | Kích thước hiển thị bằng milimét; gõ `2in` vào ô số hoặc biểu thức và nó thành 50.8 |

## Tệp

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Chỉnh sửa đặc trưng riêng của khối đặc STEP đã nhập (nó đến mà không có lịch sử) | Thêm hoặc cắt vật liệu bằng các đặc trưng của bạn |
| Đọc màu, tên, cấu trúc lắp ráp và PMI từ STEP | Không có sẵn |
| Xuất glTF, OBJ, IGES, Parasolid; DWG của chi tiết 3D (chỉ gói biến thể mới ghi DWG: tờ bản vẽ) | STL hoặc 3MF cho lưới; STEP cho khối đặc; DXF cho 2D |
| Mở IGES, DXF hoặc tệp riêng của chương trình khác (tệp `.3dm` mở thành một thân: [Mở mô hình .3dm thành thân khối đặc](topic:open-3dm-files)) | Yêu cầu STEP, hoặc lưới STL, OBJ hoặc 3MF kín: [Mở STL, OBJ hoặc 3MF](topic:open-meshes) |
| Cấu trúc lắp ráp (cây có tên chi tiết) trong STEP đã xuất | STEP lắp ráp là một hợp thể gồm các khối đặc đã đặt |
| Lưu vào thư mục bạn chọn mà không qua tải xuống của trình duyệt | Bật "hỏi nơi lưu" trong cài đặt tải xuống của trình duyệt |

## Bản vẽ

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Kích thước ngoài ba kích thước tổng thể (kích thước lỗ, vị trí, dung sai kích thước) | Đánh dấu trên PDF, hoặc xuất DXF và ghi kích thước trong chương trình CAD 2D |
| Nhiều hơn một mặt cắt hoặc chi tiết; khung nhìn chiếu thẳng hàng, cắt cục bộ và khung nhìn phụ | Một mặt cắt và một chi tiết cho mỗi bản vẽ |
| Văn bản tự do, ghi chú và bảng trên tờ (ngoài khung tên và khung sửa đổi) | Ghi chú hoàn thiện, hoặc văn bản thêm vào PDF |
| Chiếu góc thứ nhất, khung nhìn di chuyển, tờ dọc | Góc thứ ba, bố trí tự động, tờ ngang A4–A0 và ANSI A–E |
| Khung nhìn cắt trực tiếp: nhiều mặt phẳng hoặc một hộp cắt cùng lúc, đường bao quanh mặt cắt, lưu mặt cắt vào tệp | Một mặt phẳng mỗi lần từ {{ui:Khung nhìn}} › {{ui:Khung nhìn cắt}}; xem [Nhìn bên trong bằng khung nhìn cắt](topic:section-view) |
| Bản vẽ lắp ráp với nhiều khung nhìn, kích thước hoặc bóng số có thể di chuyển | Một khung nhìn đẳng trục (hoặc tách rời) với bóng số tự động và danh sách chi tiết |
| Sao chép và dán ký hiệu GD&T và hoàn thiện | Đặt từng ký hiệu bằng Chuẩn, Khung hoặc Hoàn thiện |
| Hướng dẫn sử dụng: tệp STEP trong {{ui:Từ một tệp khác…}} của Illustrate, mô hình chuyển thẳng từ ModelCraft hoặc BimCraft, hình ảnh ở chất lượng của bộ theo dõi đường đi (path tracer), 3D tương tác trong PDF | Mở STEP trong Thiết kế và bắt đầu hướng dẫn sử dụng bằng {{ui:Từ chi tiết đang mở}}; lưu mô hình thành glTF (.glb); ảnh PNG của khung nhìn 3D; tệp 3D tương tác: xem [Bắt đầu hướng dẫn sử dụng trong Illustrate](topic:illustrate) |

## Lắp ráp

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Khớp bánh răng, thanh răng, cam và vít; khớp cầu giới hạn trong nón; khớp trên mặt cong hoặc giữa các điểm | Khớp cứng, xoay, trượt, trụ, phẳng, cầu và chốt-trong-rãnh trên mặt phẳng, mỗi giá trị với giới hạn riêng: xem [Dựng một lắp ráp](topic:build-assembly) |
| Các bước tách rời có xoay chi tiết, và kéo các chi tiết mà khớp đặt | Các bước tách rời thẳng; xóa một khớp để di chuyển chi tiết bằng tay |
| Lắp ráp con | Chỉ một cấp chi tiết |
| Bánh răng, cam, tiếp xúc | Không có sẵn |

## Manufacture

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Phay thô 3D mặt cong, phay thích ứng 3D, gia công phần dư; hoàn thiện theo mực nước, bút chì, hướng tâm và xoắn ốc; các lượt thích ứng ghi dưới dạng cung | Mặt 2.5 trục, túi, thích ứng 2D, đường bao, khoan và vát mép: xem [Tạo đường dao và G-code](topic:manufacture); hoàn thiện Song song và Vảy (Scallop) cho toàn bộ mô hình: xem [Hoàn thiện 3D](topic:finish-3d) |
| Đường dao 4 và 5 trục, tiện, dò điểm | Thiết lập từng mặt một với trục dao trên thẻ Thiết lập |
| Kiểm tra va chạm giá đỡ và cán dao | Theo dõi cảnh báo chiều dài rãnh và kiểm tra trong trình mô phỏng điều khiển của bạn |
| Dò điểm, chu kỳ tuổi thọ dao và chương trình con, mã trục 4 và 5 và mã máy tiện trong hậu xử lý; nạp tệp hậu xử lý của chương trình khác | Viết hoặc đổi hậu xử lý theo định dạng riêng của PartCraft: xem [Hậu xử lý bạn có thể sửa](topic:post-processors) |
| G-code theo inch (G20) | Chỉ milimét (G21) |

## Mô phỏng và thiết kế tạo sinh

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Nghiên cứu phi tuyến: chảy dẻo, biến dạng lớn, tiếp xúc giữa các chi tiết, mỏi | Tĩnh tuyến tính và tần số riêng: xem [Kiểm tra ứng suất và độ võng](topic:simulation); giữ hệ số an toàn cao hơn 1 nhiều |
| Mất ổn định phi tuyến (khuyết tật, sau mất ổn định, nhảy cóc) | Hệ số tải mất ổn định tuyến tính với biên an toàn rộng: xem [Nhiệt, ứng suất nhiệt và mất ổn định](topic:thermal-and-buckling) |
| Bức xạ giữa các mặt (hệ số hình dạng), điện trở tiếp xúc, vật liệu phụ thuộc nhiệt độ, quán tính trong ứng suất nhiệt (sóng sốc nhiệt) | Bức xạ ra môi trường, ứng suất nhiệt dừng hoặc giả tĩnh theo thời gian, tính chất không đổi: xem [Nhiệt, ứng suất nhiệt và mất ổn định](topic:thermal-and-buckling) |
| Tinh chỉnh tự động cho nhiệt quá độ và nghiên cứu có tải nhiệt; làm lưới thô hơn ở nơi sai số nhỏ; mục tiêu trên một đại lượng cục bộ (ứng suất đỉnh tại một điểm) | **Tinh chỉnh tự động** cho nghiên cứu tĩnh, mất ổn định, tần số riêng và nhiệt dừng, theo sai số trên toàn chi tiết: xem [Kiểm tra ứng suất và độ võng](topic:simulation); nếu không thì giảm kích thước phần tử |
| Tải ổ trục và bulông, lực từ xa, mô men, lò xo, chuyển vị cho trước | Lực và áp suất trên mặt, trọng lực; mặt cố định và không ma sát |
| Mô phỏng lắp ráp; vật liệu khác nhau theo hướng (lớp in, vật liệu composite) | Một chi tiết, một vật liệu đẳng hướng |
| Nhiều luồng bộ giải cho nghiên cứu tứ diện, truyền nhiệt và thiết kế tạo sinh; mọi luồng trên trang không được cách ly cross-origin | Nghiên cứu voxel, mất ổn định, ứng suất theo thời gian và dòng tầng dùng các luồng ở nơi trang cho phép: xem [Cài đặt PartCraft](topic:settings) |
| Dòng rối với độ chính xác thiết kế (mô hình Spalart–Allmaras có mặt dưới dạng thử nghiệm: ma sát ống cao hơn 30 đến 34 %, tái bám bậc lùi thấp hơn 21 đến 39 %; dự kiến: ô mịn hơn gần thành), nhiệt trong dòng chảy, dòng không dừng (chính xác theo thời gian), mặt tự do, chất lỏng phi Newton, chi tiết quay | Dòng tầng, dừng, đẳng nhiệt của chất lỏng Newton, hoặc mô hình rối thử nghiệm cho các mẫu định tính: xem [Mô phỏng dòng chất lỏng](topic:flow-simulation); bảng cảnh báo khi số Reynolds vượt quá vùng tầng |
| Giới hạn ứng suất và quy tắc chế tạo (phần nhô, hướng phay) trong thiết kế tạo sinh; nhiều vật liệu trong một hình | Hình cứng nhất cho một thể tích; kiểm tra kết quả trong Mô phỏng: xem [Tạo hình từ tải trọng](topic:generative-design) |
| Kết quả thành khối đặc có thể sửa (trơn, tham số) | STL, STEP facet hoặc chi tiết có kết quả là khối đặc facet đã nhập |
| Thiết kế máy điện: rôto quay trong stato, mô men theo góc, thép bão hòa, nam châm mất độ bền sau điểm gãy, dòng xoáy và tổn hao sắt và đồng; từ trường 3D hoặc trên lưới cong | Từ tĩnh 2-D tuyến tính trên lưới trong thư viện phân tích: cuộn dây, sắt, nam châm vĩnh cửu trên đường hồi phục, khe hở, điện cảm và lực hút: xem [Từ trường 2-D](topic:magnetic-fields-2d) |

## Kịch bản

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Trợ giúp khi rê chuột, điểm dừng và bước trong trình soạn kịch bản | Tìm, gấp và hoàn thành đã có (xem [Viết và chạy kịch bản](topic:craftscript)); phần còn lại, dùng trình soạn riêng của bạn: {{ui:Lưu}} và {{ui:Mở}} trong nhóm Kịch bản đưa kịch bản vào và ra; các hàm có sẵn được liệt kê trong [Ngôn ngữ CraftScript](topic:craftscript-language) |
| Điểm dừng và bước qua kịch bản | `disp` và `fprintf` dọc đường; {{key:Mod+Enter}} chạy một vài dòng đã chọn mỗi lần |
| Trường và đồ thị do kịch bản hiển thị được vẽ trong không gian Thiết kế; kịch bản thay đổi tham số của chi tiết | Chúng hiển thị trong không gian Kịch bản; kịch bản đọc tham số bằng `param` (xem [Viết và chạy kịch bản](topic:craftscript)), đổi chúng trên thẻ {{ui:Tham số}} |
| Hình ảnh và bảng cạnh đồ thị; chỉnh sửa đồ thị (thu phóng, giới hạn trục) trước khi lưu | Cạnh nhau hiển thị các đồ thị; lưu đồ thị thành PNG, SVG hoặc CSV và hoàn thiện ở nơi khác |
| numpy và các gói Python khác; Python ngoại tuyến; gấp mã Python trong trình soạn; Pascal Script | Thư viện chuẩn của Python, CraftScript và Lua: xem [Kịch bản bằng Python](topic:craftscript-python) |
| Truyền hàm Lua vào hàm có sẵn; gọi hàm thư viện từ Lua bằng tên được tạo khi kịch bản chạy | Viết tên hàm thư viện trong kịch bản (`cs.static_tet(…)`), hoặc gọi nó từ một kịch bản CraftScript |

## Ứng dụng

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Lưu trên đám mây, chia sẻ và lịch sử phiên bản | Chưa có sẵn. Lưu tệp vào máy tính và giữ phiên bản theo tên |
| PartCraft như một ứng dụng cài trên iPad và iPhone | Dùng PartCraft trong trình duyệt của thiết bị; trên Android và máy tính để bàn, nó cũng chạy trong CadCraft Studio (getcadcraft.com/download) |
| Menu ngữ cảnh (nhấp chuột phải) | Thanh công cụ và bảng bên phải |
| Làm việc hoàn toàn ngoại tuyến từ đầu | Chỉ khi ứng dụng đã được lưu để dùng ngoại tuyến: xem [Làm việc ngoại tuyến](common:offline) |

Báo điều bạn thiếu nhất qua trang hỗ trợ của trang web: điều đó định hình những gì sẽ đến tiếp theo.

## Engineer (bộ sinh và trường)

| Chưa xây dựng | Thay vào đó, hôm nay |
|---|---|
| Ống góp (header), cổng và phụ kiện trên bộ trao đổi nhiệt được sinh; đường cong nhiệt độ cho độ bền vật liệu; tổn thất ở co tê trong cụm ống góp | Các bộ sinh dựng lõi và ống; thêm phụ kiện trong Thiết kế; dùng số liệu ở nhiệt độ phòng của vật liệu với hệ số an toàn |
| Thêm bộ sinh từ danh mục tiện ích bổ sung chỉ với một cú nhấp | {{ui:Mở}} trong không gian Engineer thêm một bộ sinh từ tệp |
| Tệp trường mịn hơn kích thước voxel của chính bộ sinh; đọc tệp `.vdb` vào | Lưu trường mịn hơn từ kịch bản; `.vdb` chỉ được ghi, không đọc |
| Tính toán theo tiêu chuẩn bình chịu áp | Các công thức thành mỏng và thành dày trong giáo trình, với hệ số an toàn bạn chọn; không phải biên theo tiêu chuẩn |
| Bộ sinh cho các ứng dụng khác | Chỉ PartCraft trong phiên bản này |
