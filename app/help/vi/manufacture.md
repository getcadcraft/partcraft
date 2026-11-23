---
title: Tạo đường dao và G-code (Gia công)
summary: Đặt phôi và gốc gia công, chọn dao, thêm các thao tác mặt, túi, biên dạng, khoan và vát mép bằng cách chọn mặt, hoàn thiện toàn bộ mô hình trong 3D (song song, scallop), mô phỏng phôi so với mô hình để tìm cắt lẹm và thời gian chu kỳ, rồi tải G-code từ một trong ba hậu xử lý có sẵn hoặc một bản bạn tự sửa.
keywords: bước chính xác, step cho xưởng, tọa độ gia công, bàn giao cam, song song, scallop, hoàn thiện 3d, hoàn thiện, dao đầu cầu, thư viện dao, sửa post, post tùy chỉnh, trình sửa post, thích ứng, thanh lý thích ứng, ăn khớp không đổi, trochoidal, hsm, gia công tốc độ cao, gia công, CAM, đường dao, G-code, NC, CNC, phay, túi, biên dạng, mặt, khoan, mổ, G83, G81, G73, vát mép, phôi, gốc gia công, G54, hậu xử lý, GRBL, LinuxCNC, tốc độ và bước tiến, mô phỏng, cắt lẹm, thời gian chu kỳ
from: f8a03be8
---

Không gian làm việc Gia công biến chi tiết thành đường dao và ghi chúng thành G-code. Hầu hết thao tác là phay **2.5 trục**: dao giữ thẳng đứng, thành được cắt thẳng xuống và đáy được cắt phẳng. **Thô 3D** và **Còn lại** phay thô các chi tiết cong trong 3D ([Thô 3D và gia công phần còn lại](topic:rough-3d)); **Song song** và **Scallop** hoàn thiện chúng ([Hoàn thiện 3D](topic:finish-3d)). Trên máy có trục xoay, bất kỳ thao tác nào cũng có thể có dao nghiêng, và hai thao tác di chuyển các trục xoay trong khi cắt ([Gia công 4 và 5 trục](topic:multi-axis)). Có các thao tác cho máy tiện ([Tiện](topic:turning)) và cho đầu đo chạm ([Đo chạm](topic:probing)). Nó làm việc trên các mặt có tên mà nhân lưới cung cấp cho chi tiết (xem [Nhân lưới (mesh kernel)](topic:solid-kernels)).

Bản dựng thử nghiệm: kiểm tra mọi chương trình trong bộ mô phỏng của chính bộ điều khiển, và chạy thử trên không phía trên phôi trước.

## Thiết lập

1. Chọn **Gia công** trong bộ chuyển không gian làm việc, rồi {{ui:Thiết lập mới}}.
2. Trên thẻ **Thiết lập** chọn:
   - **Trục dao (+Z)**: dao hướng vào chi tiết theo chiều nào. +Y của thế giới (hướng lên của PartCraft) là mặc định; khi đó X của máy là X của thế giới và Y của máy là −Z của thế giới.
   - **Gốc gia công (G54)**: góc hoặc tâm phôi, mặt trên hoặc mặt dưới, tâm trên của mô hình, hoặc gốc mô hình.
   - **Phôi**: hộp hoặc trụ, hoặc mô hình cộng thêm lượng bù (cạnh, đỉnh, đáy) hoặc kích thước cố định.
   - **Vật liệu** (đặt tốc độ trục chính và tốc độ tiến khởi đầu), **Hậu xử lý** (bộ điều khiển), tốc độ trục chính tối đa của máy, tốc độ di chuyển nhanh và thời gian thay dao, làm mát và số chương trình.

## Dụng cụ

Thẻ **Dụng cụ** giữ thư viện: dao phay đầu phẳng, đầu cầu và đầu tròn góc, mũi khoan, dao vát mép và dao phay mặt, mỗi loại có số T, đường kính, số rãnh và chiều dài rãnh (cùng bán kính góc, góc mũi hoặc góc vát khi áp dụng).

Dụng cụ của tôi có thể được lưu trong trình duyệt và chuyển giữa các máy tính dưới dạng tệp: xem [Thư viện dao](topic:tool-library).

Tốc độ trục chính và tốc độ tiến lấy từ vật liệu: n = 1000 × tốc độ cắt / (π × đường kính), tốc độ tiến = n × số rãnh × lượng ăn dao trên răng (mũi khoan: n × tốc độ tiến trên vòng). Các con số là giá trị khởi đầu thận trọng lấy từ dải công bố, không được tinh chỉnh cho máy của bạn; nhập tốc độ cắt, lượng ăn dao, vòng/phút (rpm) hoặc tốc độ tiến từ nhà sản xuất dao để ghi đè. Khi tốc độ vượt quá mức tối đa của máy, nó được giữ ở mức đó và tốc độ tiến đi theo, giữ nguyên lượng ăn dao trên răng.

## Thêm thao tác

Mỗi nút trên thanh công cụ thêm một thao tác và, nếu cần hình học, bắt đầu chọn: nhấp vào mặt hoặc cạnh trong khung nhìn (nhấp lại để bỏ một mục), rồi {{ui:Chọn xong}} hoặc {{key:Esc}}.

| Thao tác | Chọn | Thao tác làm gì |
|---|---|---|
| {{ui:Mặt}} | không có | Các lượt zig-zag phủ toàn bộ phôi, vượt qua các cạnh, xuống đến mặt trên của mô hình |
| {{ui:Túi}} | một mặt đáy phẳng, một lỗ tròn, hoặc một chuỗi cạnh khép kín | Dọn vùng bằng các lượt dời từ trong ra ngoài, tại mỗi bước hạ dao; các đảo (mặt đứng lên bên trong đáy) được giữ lại; một đáy hở khắp nơi (không có gì cao hơn bên ngoài nó) được dọn ra đến cạnh phôi |
| {{ui:Thích ứng}} | giống Túi | Dọn cùng vùng bằng các lượt mỗi lượt cắt một bề rộng đã đặt (**Ăn khớp**, một phần của đường kính), nên dao không bao giờ cắt rãnh đủ bề rộng, kể cả ở góc; dao đi vào bằng đường xoắn ốc và hoàn thiện thành ở mỗi cao độ. Các đường cắt hẹp cho phép hạ dao sâu hơn và tốc độ tiến cao hơn |
| {{ui:Biên dạng}} | một mặt phẳng (đường bao của nó), một mặt tròn, hoặc các cạnh | Đi theo đường bao được dời bằng bán kính dao, ra ngoài hoặc vào trong, có cung đi vào và đi ra, và các mấu tùy chọn |
| {{ui:Khoan}} | các lỗ (nhấp vào thành lỗ hoặc vành lỗ) | Khoan từng lỗ bằng chu kỳ cố định: mổ (G83), khoan (G81) hoặc bẻ phoi (G73); hoặc nhập đường kính để khoan mọi lỗ cùng cỡ |
| {{ui:Vát mép}} | đường bao hoặc các cạnh của một mặt | Chạy dao vát mép dọc theo cạnh để cắt đúng bề rộng bạn đặt |
| {{ui:Song song}} | không có (toàn bộ mô hình) | Hoàn thiện 3D theo các đường song song ở góc bất kỳ, bám theo bề mặt bằng dao đầu cầu, đầu tròn góc hoặc đầu phẳng. Xem [Hoàn thiện 3D](topic:finish-3d) |
| {{ui:Scallop}} | không có (toàn bộ mô hình) | Hoàn thiện 3D theo các lượt cách nhau một khoảng đã đặt trên bề mặt, để gờ giữa chúng có chiều cao bạn yêu cầu |

Chọn một thao tác trong danh sách để đổi dao, chiều cao (an toàn, rút dao, cao độ tiến, đỉnh, đáy), bước hạ dao, bước ngang, lượng dư để lại, lượt hoàn thiện, cách đi vào (xoắn ốc, dốc hoặc đâm thẳng), phay thuận, mấu hoặc chu kỳ. {{ui:Lên}} và {{ui:Xuống}} sắp xếp lại, {{ui:Tắt}} bỏ qua thao tác, {{ui:Xóa}} gỡ bỏ nó. Mọi thứ đều nằm trong lịch sử hoàn tác và được lưu trong tệp chi tiết.

Bước ngang của túi tối đa bằng một nửa đường kính dao, nên mọi điểm của đáy nằm trong một bán kính dao so với một lượt. Các góc trong giữ bán kính của dao.

**Dọn thích ứng** giữ mức ăn khớp của dao gần một giá trị. Ăn khớp 0.15 đường kính tương ứng góc ăn khớp khoảng 46°: cung của cạnh dao nằm trong vật liệu. Ngược lại, túi dời cắt đủ bề rộng ở lượt đầu tiên và quấn thêm ở mọi góc trong. Giữa các lượt, dao giữ hạ khi di chuyển qua không khí đã cắt, và nâng lên rồi hạ xuống trong không khí đã cắt ở những nơi khác. Các lượt được tính trên lưới mịn phủ vùng (ô khoảng một phần mười hai bán kính dao), nên mức ăn khớp có thể rộng hơn giá trị đặt khoảng một ô; các thành được hoàn thiện chính xác. Một vùng mở lớn tạo ra chương trình dài với nhiều đường di chuyển ngắn.

## Mô phỏng

Đường dao được tạo lại sau mọi thay đổi (cả của chi tiết). {{ui:Mô phỏng}} cũng hiển thị phôi còn lại sau toàn bộ chương trình. Bảng này hiển thị:

- **Thời gian chu kỳ**: di chuyển cắt chạy theo tốc độ tiến, di chuyển nhanh là đường thẳng với tốc độ di chuyển nhanh của thiết lập, cộng thời gian thay dao. Máy thực tế tăng tốc, nên chúng chạy lâu hơn.
- **Cắt lẹm**: những nơi dao đi sâu hơn 0.02 mm dưới bề mặt chi tiết. Vạch đỏ đánh dấu chúng trong khung nhìn.
- **Phôi còn lại trên chi tiết**.

Phôi là bản đồ cao độ của đỉnh (bản đồ Z), nên nó không thể hiện phần lõm ngược. Kéo **Phát lại** để di chuyển dao dọc theo chương trình. Trong khung nhìn, di chuyển cắt là nét liền và di chuyển nhanh là nét đứt, mỗi thao tác một màu.

Khi bật **Hiển thị phôi đã mô phỏng**, phôi được tô màu so với mô hình, từng ô: **xanh lá** nơi nó nằm trên mô hình (trong vòng 0.02 mm), **đỏ** nơi dao cắt vào mô hình, và nơi còn phôi trên mô hình: **vàng** cho lớp mỏng, **cam** cho nhiều hơn, chuyển dần sang **xám** của phôi chưa cắt ở 1 mm trở lên. Các màu được tạo lại với mọi thay đổi, từ cùng bản đồ cao độ như các số trên bảng, nên xanh và đỏ khớp với dòng Cắt lẹm. Vát mép cắt vào mô hình có chủ ý và hiển thị đỏ dọc theo cạnh.

## Xuất G-code

Chọn bộ điều khiển trong **Hậu xử lý** và nhấn {{ui:Tải G-code}} (hoặc {{ui:Hậu xử lý}} trên thanh công cụ):

| Bộ điều khiển | Tệp | Ghi chú |
|---|---|---|
| Kiểu Fanuc (ISO) | .nc | %, số O, số dòng, T M6 với G43 H, chu kỳ cố định |
| GRBL | .nc | Không có bộ thay dao hay chu kỳ cố định: thay dao tạm dừng bằng M0, khoan được ghi thành các di chuyển thường |
| LinuxCNC | .ngc | T M6 với G43 H, chu kỳ cố định, M2 |
| Máy tiện kiểu Fanuc | .nc | Cho chương trình tiện: X là đường kính, tốc độ tiến theo vòng, G96 dưới giới hạn G50, ren G32 |
| Máy tiện LinuxCNC | .ngc | Cho chương trình tiện: đường kính G7, G95, G96, ren G33; không ghi di chuyển về gốc |
| Của riêng bạn | bất kỳ | Một hậu xử lý bạn đã viết hoặc đã sửa: {{ui:Sửa post…}}, {{ui:Post mới…}}, {{ui:Nhập tệp post…}} |

Mỗi tệp bắt đầu bằng chú thích cho chương trình, phôi, gốc gia công và dao. Tọa độ tính bằng milimét với 3 chữ số thập phân. {{ui:CSV đường dao}} và {{ui:JSON đường dao}} xuất chính các di chuyển.

**Kiểm tra đầu ra trong bộ mô phỏng của chính máy bạn trước khi cắt, và chạy thử trên không phía trên phôi trước.** Ba hậu xử lý có sẵn là điểm khởi đầu theo đúng hành vi đã được tài liệu hóa của bộ điều khiển; chúng chưa được kiểm chứng trên bất kỳ máy cụ thể nào. Một post bạn sửa là của bạn và bạn phải kiểm chứng nó. Cách viết một post: [Bộ hậu xử lý](topic:post-processors).

## G-code chính xác cho xưởng

Dưới các nút G-code trên thẻ **Thao tác**, {{ui:STEP chính xác (tọa độ gia công)}} tải xuống `<part>-work.step`: chi tiết dưới dạng vật rắn chính xác (trụ thật cho lỗ và gờ, đường tròn thật cho các cạnh của chúng) với gốc tại gốc gia công của thiết lập này và Z dọc theo trục dao. Đó là tọa độ mà G-code dùng, nên chương trình CAM hoặc công cụ kiểm tra của xưởng khớp mô hình với chương trình mà không cần dời nó. Tệp chỉ chứa chi tiết, không có phôi hay đường dao.

{{ui:Xuất}} › {{ui:STEP AP242 (khối đặc chính xác)}} ghi cùng vật rắn đó ở đúng vị trí của chi tiết (Z hướng lên): xem [Xuất để in, STEP và DXF](topic:export-files#for-other-cad-programs-step).

## Giới hạn

- Túi, biên dạng, khoan và vát mép là 2.5 trục. Chi tiết cong được thô và hoàn thiện 3D bằng thao tác riêng ([Thô 3D và gia công phần còn lại](topic:rough-3d), [Hoàn thiện 3D](topic:finish-3d)). Dọn thích ứng là 2D (đáy phẳng).
- Dao nghiêng, gia công 5 trục và hoàn thiện trục thứ 4, tiện và đo chạm đều có, mỗi loại có giới hạn riêng, và **không cái nào đã được chạy trên máy**: xem [Gia công 4 và 5 trục](topic:multi-axis), [Tiện](topic:turning) và [Đo chạm](topic:probing).
- Đế và chuôi dao không được kiểm tra va chạm; một cảnh báo xuất hiện khi lượt cắt sâu hơn chiều dài rãnh.
- Tốc độ và bước tiến là giá trị khởi đầu. Hậu xử lý là văn bản bạn có thể sửa, nhưng nó chỉ quyết định cách các di chuyển được ghi; nó không thể thay đổi đường dao, thêm trục hay biết máy của bạn ([Bộ hậu xử lý](topic:post-processors) liệt kê những gì nó không làm được).

## Gửi chương trình tới máy

Trong CadCraft Studio trên máy tính, khi đã thiết lập máy trong Studio, **Gửi tới máy…** xuất hiện cạnh **Tải G-code** và tải cùng chương trình lên máy trong mạng của bạn. Chương trình không bao giờ được khởi chạy từ PartCraft: nó được khởi chạy tại máy, khi mọi thứ đã rõ ràng. Trong trình duyệt, nút này không hiển thị (trang web không thể tiếp cận máy trong mạng của bạn): tải chương trình xuống thay thế.
