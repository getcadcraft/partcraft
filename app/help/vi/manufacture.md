---
title: Tạo đường dao và G-code (Gia công)
summary: Thiết lập phôi và gốc gia công, chọn dụng cụ, thêm các thao tác mặt, túi, biên dạng, khoan và vát mép bằng cách chọn mặt, hoàn thiện toàn bộ mô hình trong 3D (song song, scallop), mô phỏng phôi so với mô hình để tìm vết gọt quá và thời gian chu trình, và tải G-code từ một trong ba post tích hợp hoặc một post bạn tự sửa.
keywords: exact step, step cho xưởng, tọa độ gia công, bàn giao CAM, song song, scallop, phay tinh 3D, phay tinh, dao mũi cầu, thư viện dụng cụ, sửa post, post tùy chỉnh, trình soạn post, thích ứng, độ ăn dao không đổi, trochoidal, hsm, gia công tốc độ cao, gia công, CAM, đường dao, G-code, NC, CNC, phay, túi, biên dạng, mặt, khoan, G83, G81, G73, vát mép, phôi, độ lệch gốc gia công, G54, bộ hậu xử lý, GRBL, LinuxCNC, tốc độ tiến dao và tốc độ trục chính, mô phỏng, vết gọt quá, thời gian chu trình
from: beeb29aa
---

Không gian làm việc Gia công biến chi tiết thành đường dao cho máy phay 3 trục và ghi chúng dưới dạng G-code. Hầu hết thao tác là **2.5 trục**: dụng cụ giữ thẳng đứng, thành được cắt thẳng xuống và đáy phẳng. **Song song** và **Scallop** phay tinh các mặt cong trong 3D (xem [Phay tinh 3D](topic:finish-3d)); dụng cụ vẫn giữ thẳng đứng (ba trục, không nghiêng). Nó làm việc trên các mặt có tên mà nhân lưới cung cấp cho chi tiết (xem [Nhân lưới](topic:solid-kernels)).

Bản dựng thử nghiệm: kiểm tra mọi chương trình trong trình mô phỏng của chính bộ điều khiển, và chạy thử không cắt phía trên phôi trước.

## Thiết lập

1. Chọn **Gia công** trong bộ chuyển không gian làm việc, rồi {{ui:Thiết lập mới}}.
2. Trên thẻ **Thiết lập**, chọn:
   - **Trục dụng cụ (+Z)**: hướng dụng cụ đi vào chi tiết. Mặc định là +Y thế giới (hướng lên của PartCraft); khi đó X của máy là X thế giới và Y của máy là −Z thế giới.
   - **Gốc gia công (G54)**: một góc hoặc tâm của phôi, trên hoặc dưới, tâm trên của mô hình, hoặc gốc của mô hình.
   - **Phôi**: một hộp hoặc một trụ, hoặc mô hình cộng thêm độ bù (cạnh, trên, dưới) hoặc kích thước cố định.
   - **Vật liệu** (đặt tốc độ tiến dao và tốc độ trục chính ban đầu), **post** (bộ điều khiển), tốc độ trục chính tối đa của máy, tốc độ di chuyển nhanh và thời gian thay dụng cụ, dung dịch làm mát và số chương trình.

## Dụng cụ

Thẻ **Dụng cụ** giữ thư viện: dao phay ngón phẳng, dao phay mũi cầu và dao phay bo góc, mũi khoan, dao vát mép và dao phay mặt, mỗi loại có số T, đường kính, số rãnh và chiều dài rãnh (cùng bán kính góc, góc mũi hoặc góc vát khi có áp dụng).

Dụng cụ của bạn có thể được lưu trong trình duyệt và chuyển giữa các máy tính dưới dạng tệp: xem [Thư viện dụng cụ](topic:tool-library).

Tốc độ trục chính và tốc độ tiến dao lấy từ vật liệu: n = 1000 × vận tốc cắt / (π × đường kính), tốc độ tiến = n × số rãnh × lượng ăn dao trên răng (mũi khoan: n × tốc độ tiến trên vòng). Các số là giá trị khởi đầu thận trọng lấy từ khoảng đã công bố, không được chỉnh cho máy của bạn; nhập vận tốc cắt, lượng ăn dao trên răng, rpm hoặc tốc độ tiến của nhà sản xuất dụng cụ để ghi đè. Khi tốc độ vượt mức tối đa của máy, nó được giữ ở mức đó và tốc độ tiến đi theo để giữ lượng ăn dao.

## Thêm thao tác

Mỗi nút trên thanh công cụ thêm một thao tác và, khi cần hình học, bắt đầu chọn: nhấn vào mặt hoặc cạnh trong khung nhìn (nhấn lại để bỏ một cái), rồi {{ui:Chọn xong}} hoặc {{key:Esc}}.

| Thao tác | Chọn | Tác dụng |
|---|---|---|
| {{ui:Mặt}} | không có | Các lượt zích-zắc phủ toàn bộ phôi, vượt qua các cạnh, xuống đến đỉnh mô hình |
| {{ui:Túi}} | một mặt đáy phẳng, một lỗ tròn, hoặc một chuỗi cạnh khép kín | Dọn vùng bằng các lượt dời song song từ trong ra ngoài, ở mỗi bước xuống; các đảo (mặt đứng lên bên trong đáy) được giữ lại; đáy mở hoàn toàn (không có gì cao hơn bên ngoài) được dọn ra tới cạnh phôi |
| {{ui:Thích ứng}} | giống Túi | Dọn cùng vùng bằng các lượt mỗi lượt cắt một bề rộng đã đặt (**Độ ăn dao**, một phần của đường kính), để dao không bao giờ ăn cả rãnh đủ rộng, kể cả ở góc; dao đi vào theo đường xoắn và hoàn thiện thành ở mỗi cấp. Vết cắt hẹp cho phép bước xuống sâu hơn và tốc độ tiến cao hơn |
| {{ui:Biên dạng}} | một mặt phẳng (đường bao của nó), một mặt tròn, hoặc các cạnh | Theo đường bao dời bằng bán kính dao, ra ngoài hoặc vào trong, có cung dẫn vào và dẫn ra, và cầu giữ tùy chọn |
| {{ui:Khoan}} | các lỗ (nhấn vào thành lỗ hoặc mép lỗ) | Khoan từng lỗ bằng chu trình có sẵn: khoan từng nhát (G83), khoan (G81) hoặc bẻ phoi (G73); hoặc nhập đường kính để khoan mọi lỗ cùng cỡ đó |
| {{ui:Vát mép}} | đường bao hoặc cạnh của một mặt | Chạy dao vát mép dọc theo cạnh để cắt đúng bề rộng bạn đặt |
| {{ui:Song song}} | không có (toàn bộ mô hình) | Phay tinh 3D theo các đường song song ở mọi góc, bám theo bề mặt bằng dao phay mũi cầu, bo góc hoặc ngón phẳng. Xem [Phay tinh 3D](topic:finish-3d) |
| {{ui:Scallop}} | không có (toàn bộ mô hình) | Phay tinh 3D theo các lượt cách nhau một khoảng đã đặt trên bề mặt, để gờ giữa chúng có chiều cao bạn yêu cầu |

Chọn một thao tác trong danh sách để đổi dụng cụ, các độ cao (an toàn, rút lên, độ cao tiến, trên, dưới), bước xuống, bước ngang, phôi để lại, lượt hoàn thiện, cách đi vào (đường xoắn, dốc nghiêng hoặc đâm thẳng), phay thuận, cầu giữ hoặc chu trình. {{ui:Lên}} và {{ui:Xuống}} sắp xếp lại thứ tự, {{ui:Tắt}} bỏ thao tác ra khỏi chương trình, {{ui:Xóa}} gỡ bỏ nó. Mọi thứ đều nằm trong lịch sử hoàn tác và được lưu trong tệp chi tiết.

Bước ngang của Túi tối đa bằng một nửa đường kính dao, nên mọi điểm trên đáy của nó nằm trong một bán kính dao so với một lượt. Góc trong giữ bán kính của dao.

**Dọn thích ứng** giữ độ ăn dao của dao gần một giá trị. Độ ăn dao 0.15 đường kính tương ứng góc ăn dao khoảng 46°: cung của cạnh dao trong vật liệu. Ngược lại, một Túi dời song song cắt đủ bề rộng ở lượt đầu tiên và quấn thêm ở mỗi góc trong. Giữa các lượt, dao giữ thấp khi đi qua khoảng không đã cắt, và nâng lên rồi hạ xuống trong khoảng không đã cắt ở nơi khác. Các lượt được tính trên một lưới mịn trong vùng (ô khoảng một phần mười hai bán kính dao), nên độ ăn dao có thể rộng hơn giá trị đặt khoảng một ô; các thành được hoàn thiện chính xác. Một vùng mở lớn tạo ra chương trình dài với nhiều lệnh di chuyển ngắn.

## Mô phỏng

Đường dao được tạo lại sau mỗi thay đổi (cả chi tiết nữa). {{ui:Mô phỏng}} cũng hiển thị phôi còn lại sau toàn bộ chương trình. Bảng hiển thị:

- **Thời gian chu trình**: các lệnh tiến chạy ở tốc độ tiến, các lệnh di chuyển nhanh là đường thẳng ở tốc độ di chuyển nhanh của thiết lập, cộng thêm thời gian thay dụng cụ. Máy thật có gia tốc nên sẽ lâu hơn.
- **Vết gọt quá**: các chỗ dao đi xuống thấp hơn bề mặt chi tiết hơn 0.02 mm. Dấu đỏ thể hiện chúng trong khung nhìn.
- **Phôi còn lại trên chi tiết**.

Phôi là bản đồ độ cao của phía trên (Z-map), nên không thể hiện được các phần lõm xuống dưới. Kéo **Phát lại** để di chuyển dao dọc theo chương trình. Trong khung nhìn, các lệnh tiến là nét liền và lệnh di chuyển nhanh là nét đứt, mỗi thao tác một màu.

Khi bật **Hiện phôi đã mô phỏng**, phôi được tô màu so với mô hình, từng ô một: **xanh lá** ở chỗ nó nằm trên mô hình (trong vòng 0.02 mm), **đỏ** ở chỗ dao cắt vào mô hình, và nơi phôi còn lại trên mô hình thì **vàng** cho lớp mỏng, **cam** cho lớp dày hơn, chuyển dần sang **xám** của phôi chưa cắt ở 1 mm trở lên. Màu được tạo lại với mỗi thay đổi, từ cùng bản đồ độ cao như các số trong bảng, nên xanh lá và đỏ khớp với dòng Vết gọt quá. Vát mép cố ý cắt vào mô hình và hiện màu đỏ dọc theo cạnh của nó.

## Hậu xử lý G-code

Chọn bộ điều khiển trong **Hậu xử lý** rồi nhấn {{ui:Tải G-code}} (hoặc {{ui:Hậu xử lý}} trên thanh công cụ):

| Bộ điều khiển | Tệp | Ghi chú |
|---|---|---|
| Fanuc-style ISO | .nc | %, số O, số dòng, T M6 với G43 H, chu trình có sẵn |
| GRBL | .nc | Không có bộ thay dụng cụ hoặc chu trình có sẵn: thay dụng cụ tạm dừng bằng M0, việc khoan được ghi thành các lệnh di chuyển thường |
| LinuxCNC | .ngc | T M6 với G43 H, chu trình có sẵn, M2 |
| Tự viết | bất kỳ | Một post bạn tự viết hoặc sửa: {{ui:Sửa post…}}, {{ui:Post mới…}}, {{ui:Nhập tệp post…}} |

Mọi tệp bắt đầu bằng chú thích về chương trình, phôi, độ lệch gốc gia công và dụng cụ. Tọa độ tính bằng milimét với 3 chữ số thập phân. {{ui:CSV đường dao}} và {{ui:JSON đường dao}} xuất chính các lệnh di chuyển.

**Kiểm tra đầu ra trong trình mô phỏng của chính máy trước khi cắt, và chạy thử không cắt phía trên phôi trước.** Ba post tích hợp là điểm khởi đầu theo hành vi đã được tài liệu hóa của bộ điều khiển; chúng chưa được kiểm chứng trên bất kỳ máy cụ thể nào. Post bạn thay đổi thì bạn phải tự kiểm chứng. Cách viết một post: [Bộ hậu xử lý](topic:post-processors).

## STEP chính xác cho xưởng

Dưới các nút G-code trên thẻ **Thao tác**, {{ui:STEP chính xác (tọa độ gia công)}} tải `<part>-work.step`: chi tiết dưới dạng khối đặc chính xác (trụ thật cho lỗ và ụ, đường tròn thật cho cạnh của chúng), với gốc tại gốc gia công của thiết lập này và Z dọc theo trục dụng cụ. Đó là các tọa độ mà G-code dùng, nên chương trình CAM hoặc công cụ kiểm tra của xưởng sẽ căn mô hình khớp với chương trình mà không cần di chuyển nó. Tệp chỉ chứa chi tiết, không chứa phôi hay đường dao.

{{ui:Xuất}} › {{ui:STEP AP242 (khối đặc chính xác)}} ghi cùng khối đặc ở vị trí riêng của chi tiết (Z hướng lên): xem [Xuất để in, STEP và DXF](topic:export-files#for-other-cad-programs-step).

## Giới hạn

- Túi, biên dạng, khoan và vát mép là 2.5 trục. Mặt cong có thể được phay tinh 3D ([song song và scallop](topic:finish-3d)) nhưng không thể phay thô 3D (một hình nón vẫn để lại các bậc cho đến khi bạn phay tinh), và không có gia công phần dư. Dọn thích ứng là 2D (đáy phẳng).
- Chỉ ba trục: không nghiêng, không tiện, không kiểm tra.
- Đế kẹp và cán dao không được kiểm tra va chạm; một cảnh báo hiện khi lần cắt sâu hơn chiều dài rãnh.
- Tốc độ tiến và tốc độ trục chính là giá trị khởi đầu. Post là văn bản bạn có thể sửa, nhưng nó chỉ quyết định cách các lệnh di chuyển được ghi; nó không thể đổi đường dao, thêm trục hoặc biết máy của bạn ([Bộ hậu xử lý](topic:post-processors) liệt kê những gì nó không làm được).

## Gửi chương trình tới máy

Trong CadCraft Studio trên máy tính để bàn, với một máy đã thiết lập trong Studio, **Gửi tới máy…** xuất hiện bên cạnh **Tải G-code** và tải chương trình tương tự lên máy trong mạng của bạn. Nó không bao giờ được khởi chạy từ PartCraft: hãy khởi chạy tại máy khi đã sẵn sàng. Trong trình duyệt, nút này không hiện (một trang web không thể truy cập máy trong mạng của bạn): hãy tải chương trình về thay thế.
