---
title: Màn hình PartCraft
summary: Tham quan mọi thanh và bảng: thanh công cụ và cách nó thay đổi, lịch sử, thông tin chi tiết, khung nhìn 3D, bảng thuộc tính và thanh trạng thái.
keywords: màn hình, bố cục, thanh công cụ, lịch sử, cây đặc trưng, thuộc tính, bảng, thanh trạng thái, giao diện, ui, tham quan, toàn màn hình
from: 7394fc49
---

Màn hình có năm phần: thanh công cụ ở trên, lịch sử ở bên trái, khung nhìn 3D ở giữa, bảng thuộc tính ở bên phải và thanh trạng thái ở dưới cùng. Phía trên tất cả là thanh ứng dụng CadCraft.

## Thanh ứng dụng

Thanh mỏng trên cùng thuộc về trang CadCraft, không thuộc riêng PartCraft. Nó hiển thị tên ứng dụng và nơi nó chạy, một menu phiên bản, **Giới thiệu PartCraft**, nút chế độ màn hình và công tắc giao diện Giấy / Mô hình.

- **Giấy** là nét đậm trên tờ sáng. **Mô hình** là nét sáng trên nền tối. Màu phác thảo theo giao diện.
- {{ui:Cài đặt}} (bánh răng, hoặc {{key:Mod+,}}) có thẻ {{ui:PartCraft}}: nút chuột nào xoay khung nhìn, con lăn chuột hay bàn di chuột, và các quan hệ khi phác thảo. Xem [Cài đặt PartCraft](topic:settings).
- Nút chế độ màn hình, hoặc {{key:Ctrl+Shift+F}}, chuyển lần lượt qua bình thường, toàn màn hình, và toàn màn hình với các thanh được ẩn. Khi các thanh bị ẩn, hãy đưa con trỏ lên mép trên (hoặc chạm vào đó) để đưa chúng trở lại. {{key:Esc}} quay về bình thường. Phím này là {{key:Ctrl+Shift+F}} cả trên Mac, không phải ⌘.

## Thanh công cụ

Thanh công cụ được chia nhóm. Nó thay đổi theo việc bạn đang làm, nên vừa trong một hàng:

| Nhóm | Các nút | Khi nào hiển thị |
|---|---|---|
| Tệp | {{ui:Mới}}, {{ui:Mở}}, {{ui:Lưu}}, {{ui:Xuất}} (một menu) | Luôn luôn |
| Phác thảo | {{ui:Phác thảo}} | Khi chưa mở phác thảo nào |
| Phác thảo | {{ui:Thoát}}, {{ui:Đường thẳng}}, {{ui:Hình chữ nhật}}, {{ui:Vòng tròn}}, {{ui:Cung tròn}}, {{ui:Điểm}}, {{ui:Đường tâm}}, {{ui:Bo góc}}, {{ui:Kích thước}}, {{ui:Dựng}} | Chỉ khi một phác thảo đang mở |
| Đặc trưng | {{ui:Đùn}}, {{ui:Cắt}}, {{ui:Quay tròn}}, {{ui:Lỗ}}, {{ui:Thẳng}}, {{ui:Tròn}}, {{ui:Đối xứng}}, {{ui:Bo góc}}, {{ui:Vát mép}}, {{ui:Vỏ}}, {{ui:Thêm}} (một menu: Cắt quay tròn, Mặt phẳng, Trục, Điểm, Quét, Chuyển tiếp, Độ nghiêng khuôn) | Trên chi tiết, không phải khi đang mở phác thảo hay bản vẽ. Bo góc và Vát mép dùng trên các cạnh thẳng giữa hai mặt phẳng; Vỏ và Độ nghiêng khuôn trên các mặt phẳng. Quét và Chuyển tiếp chưa xây dựng trong phiên bản này (chúng cần kernel chính xác); bấm vào một cái sẽ cho biết điều đó |
| Đặc trưng | {{ui:Xong}} | Chỉ khi bạn chọn cạnh hoặc mặt cho bo góc, vát mép, vỏ hoặc độ nghiêng khuôn |
| Bản vẽ | {{ui:Bản vẽ}} | Trên chi tiết (dùng được khi chi tiết đã có khối đặc) |
| Bản vẽ | {{ui:Mốc chuẩn}}, {{ui:Khung}}, {{ui:Hoàn thiện}}, {{ui:Chi tiết}}, {{ui:PDF}}, {{ui:Quay lại}} | Chỉ trên tờ bản vẽ |
| Lắp ráp | {{ui:Lắp ráp}} | Trên chi tiết (dùng được khi chi tiết đã có khối đặc) |
| Lắp ráp | {{ui:Thêm bản sao}}, {{ui:Chèn}}, {{ui:Khớp}}, {{ui:Va chạm}}, {{ui:Sửa chi tiết}}, {{ui:Đóng}} | Chỉ trong lắp ráp |
| Lắp ráp | {{ui:Quay lại}} | Khi bạn sửa một chi tiết từ lắp ráp |
| Chỉnh sửa | {{ui:Hoàn tác}}, {{ui:Làm lại}}, {{ui:Sao chép}}, {{ui:Dán}}, {{ui:Thêm}} (một menu: Cắt, Sao chép, Dán, Dán tại chỗ, Nhân bản, Xóa, Chọn tất cả, Bỏ chọn) | Luôn luôn; mỗi mục tác động lên phác thảo, lịch sử hoặc lắp ráp mà bạn đang ở |
| Xem | {{ui:Vừa khung}}, {{ui:Vuông góc với}}, {{ui:Khung nhìn}} (một menu: Đo, Thuộc tính khối lượng, Mặt cắt, Độ nghiêng khuôn, Zebra, Độ cong, {{ui:Mặt phẳng nền}}, rồi Đẳng trục, Trước, Sau, Trên, Dưới, Phải, Trái) | Luôn luôn |

Rê chuột lên một nút để xem nó làm gì và phím của nó. Một nút bị làm mờ không dùng được lúc này: ví dụ các nút đặc trưng khi một phác thảo đang mở, hoặc {{ui:Khớp}} trước khi lắp ráp có hai chi tiết.

Menu {{ui:Thêm}} trong nhóm Chỉnh sửa liệt kê từng thao tác chỉnh sửa cùng phím của nó. Sao chép và dán tác động lên cái gì tùy vào nơi bạn đang ở; xem [Sao chép, dán và nhân bản](topic:copy-paste). Chú giải của một mục bị làm mờ cho biết vì sao nó chưa dùng được.

Menu {{ui:Xuất}} gồm {{ui:STL, để in 3D}}, {{ui:3MF, để in 3D}}, {{ui:STEP AP242 (khối đặc chính xác)}}, {{ui:STEP AP214 (khối đặc chính xác)}}, {{ui:STEP (xấp xỉ bằng mặt, kernel lưới)}}, {{ui:STEP AP214 (xấp xỉ bằng mặt, kernel lưới)}}, {{ui:DXF của phác thảo hoặc mặt phẳng}} và {{ui:Bản vẽ (PDF): hình chiếu, mặt cắt, chi tiết, GD&T}}. Hai mục STEP chính xác bị làm mờ: chúng chưa xây dựng trong phiên bản này, nên hãy dùng {{ui:STEP (xấp xỉ bằng mặt, kernel lưới)}}.

## Lịch sử (bên trái)

Bảng bên trái là lịch sử đặc trưng của chi tiết, danh sách mà PartCraft dựng lại từ trên xuống dưới.

- Tiêu đề là tên của chi tiết ("Part1" cho đến khi bạn đổi tên).
- **Mặt phẳng trước**, **Mặt phẳng trên** và **Mặt phẳng phải** đứng đầu. Bấm một cái để chọn; nó được tô sáng trong khung nhìn.
- Bên dưới là các đặc trưng của bạn theo thứ tự đã tạo. Một phác thảo mà đặc trưng dùng được thụt vào dưới đặc trưng đó.
- Một cờ ở cuối bên phải của hàng cho biết trạng thái của nó:

| Cờ | Ý nghĩa |
|---|---|
| (không có) | Đã dựng, và phác thảo đã đủ ràng buộc |
| − | Một phác thảo chưa đủ ràng buộc (nó vẫn có thể di chuyển) |
| + | Một phác thảo thừa ràng buộc |
| ⚠ | Đã dựng, kèm cảnh báo (rê chuột để đọc) |
| ⚠ lỗi | Đặc trưng thất bại. Rê chuột để đọc lý do, hoặc bấm vào |
| ⚠ chưa dựng | Đặc trưng cần một cái khác đã thất bại hoặc đang tắt |
| tắt | Đã tắt |

- Mỗi đặc trưng hiện con số chính của nó sau tên, như "25 mm" cho Đùn hay "Ø6.6 thru" cho một lỗ. Bấm đúp con số, hoặc nhấn {{key:F2}} trên hàng, để đổi ngay tại đó. Xem [Đổi kích thước](topic:change-sizes).
- Bấm một đặc trưng để sửa nó ở bên phải. Bấm đúp một phác thảo để mở nó.
- Khi bạn lùi về, một hàng **Thanh lịch sử · tiến lên** nằm trong danh sách. Các đặc trưng bên dưới nó bị làm mờ và không được dựng.
- Khi một hàng đang được focus, {{key:Up}} và {{key:Down}} di chuyển giữa các hàng, và {{key:Alt+Up}} / {{key:Alt+Down}} di chuyển chính đặc trưng, nếu lịch sử cho phép.

Trong lắp ráp, cũng bảng này liệt kê **Chi tiết** (cái đầu tiên được đánh dấu "cố định") và **Khớp** thay vào đó.

### Thông tin chi tiết

Dưới lịch sử, hộp **Chi tiết** liệt kê **Thể tích**, **Diện tích bề mặt**, **Kích thước (X × Y × Z)**, **Lỗ xuyên**, **Thân**, **Tam giác** của khối đặc, số **Đặc trưng** và bao nhiêu cái đang **Lỗi**. Thể tích và diện tích là của khối đặc xấp xỉ bằng mặt do kernel lưới dựng, hơi thấp hơn giá trị thật với các hình tròn (xem [Đặc trưng và các tùy chọn của chúng](topic:features#curves-resolution)).

Trong lắp ráp, hộp có tiêu đề **Lắp ráp**: Chi tiết, Bản thể, Khớp, Chưa nối và Giao thoa.

## Khung nhìn 3D (ở giữa)

Khung nhìn hiển thị khối đặc, các mặt phẳng nền và mọi phác thảo chưa được đặc trưng nào dùng.

Các mặt phẳng nền được vẽ đầy đủ khi chi tiết còn trống. Một khi nó có khối đặc, chúng lùi lại: vẽ mờ, để không che chi tiết, và các cú bấm đi xuyên qua chúng đến chi tiết. Chúng trở lại đầy đủ khi bạn chọn nơi phác thảo ({{ui:Phác thảo}} khi chưa chọn gì) và khi bạn chọn một cái trong lịch sử. {{ui:Khung nhìn}} › {{ui:Mặt phẳng nền}} ẩn hoàn toàn chúng; chúng vẫn hiện khi bạn chọn nơi phác thảo. PartCraft nhớ lựa chọn đó.

- Kéo để xoay chi tiết, kéo chuột phải hoặc chuột giữa để di chuyển khung nhìn, xoay con lăn để thu phóng tại con trỏ. Chi tiết trong [Phím và chuột](topic:keyboard).
- Rê chuột lên một mặt, cạnh hoặc mặt phẳng để thấy nó sáng lên. Bấm để chọn. Mặt được tô sáng nguyên và cạnh được vẽ và chọn nguyên. {{key:Shift}}+bấm để gom nhiều cạnh hoặc mặt. Chúng vẫn được đánh dấu.
- Khối xem ở góc trên bên phải xoay cùng chi tiết: bấm một mặt, cạnh hoặc góc để nhìn từ đó, kéo nó để xoay, nút hình ngôi nhà quay về điểm bắt đầu. Xem [Khối xem](topic:view-cube).
- Một phép Đùn đang chọn hiện một mũi tên cam trên mặt cuối của nó, một phép Quay tròn hiện mũi tên cong ở cuối góc quay: kéo nó để đổi độ sâu hoặc góc, hoặc gõ vào hộp bên cạnh. Xem [Đổi kích thước](topic:change-sizes#drag-it-in-the-view).
- Khi chi tiết còn trống, một hộp có tiêu đề **Bắt đầu một chi tiết** liệt kê các bước đầu tiên.
- Thả một tệp `.partcraft.json` hoặc `.partcraft-asm.json` vào bất kỳ đâu trên khung nhìn để mở nó. Một tệp `.step`, `.stp`, `.stl`, `.obj`, `.3mf` hoặc `.3dm` thả vào đó sẽ mở thành thân khối đặc.

### Khi bạn chọn cạnh hoặc mặt

Sau {{ui:Bo góc}}, {{ui:Vát mép}} hoặc {{ui:Vỏ}} khi chưa chọn gì (hoặc {{ui:Chọn cạnh}} trên một đặc trưng như vậy), chi tiết hiển thị như trước đặc trưng đó. Bấm các cạnh hoặc mặt để thêm hoặc bỏ; các dấu của chúng cho thấy cái nào đã vào. {{ui:Xong}} hoặc {{key:Esc}} kết thúc. Xem [Bo tròn, vát và làm rỗng](topic:fillet-chamfer-shell).

### Trên tờ bản vẽ

{{ui:Bản vẽ}} thay khung nhìn 3D bằng tờ bản vẽ A3. Con lăn thu phóng, kéo chuột phải hoặc giữa di chuyển khung nhìn, {{key:F}} cho vừa khung. Xem [Làm một bản vẽ](topic:drawing-pdf).

### Khi một phác thảo đang mở

Khung nhìn quay để nhìn thẳng vào mặt phẳng phác thảo và một lớp phác thảo 2D xuất hiện phía trên. Chi tiết chỉ hiển thị các đặc trưng được tạo trước phác thảo này. Một dải ở góc trên bên trái hiện chip trạng thái của phác thảo ("Đã đủ ràng buộc", "Chưa đủ ràng buộc · 3 bậc tự do" v.v.) và tên của nó, như "Sketch2 on a face of Extrude1".

## Bảng thuộc tính (bên phải)

Bảng bên phải hiển thị bất cứ thứ gì đang được chọn, và tiêu đề của nó nêu tên thứ đó:

- **Chi tiết** (chưa chọn gì): **Tên** của chi tiết và cài đặt **Đường cong**.
- Một mặt phẳng: nút {{ui:Phác thảo trên nó}}.
- Một **Mặt**: loại của nó (Mặt phẳng, Hình trụ kèm bán kính và trục, Hình nón, Hình cầu hoặc Torus), diện tích, đặc trưng nào tạo ra nó, và với mặt phẳng có {{ui:Phác thảo trên mặt này}}, {{ui:Vuông góc với}}, {{ui:Xuất mặt thành DXF}}, {{ui:Đùn từ nó}}, {{ui:Cắt vào nó}} và {{ui:Lỗ tại đây}} (xem [Kéo hoặc đẩy cả một mặt](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Một **Cạnh**: loại của nó (thẳng, vòng tròn kèm tâm và bán kính, hoặc đường cong), chiều dài và hai mặt mà nó nằm giữa (như "Extrude1 end face and Extrude1 side"), kèm các nút {{ui:Bo góc}} và {{ui:Vát mép}}.
- Nhiều cạnh hoặc mặt được chọn bằng {{key:Shift}}: có bao nhiêu, kèm {{ui:Bo góc}} và {{ui:Vát mép}} cho cạnh, và {{ui:Xóa chọn}}.
- Một đặc trưng: các con số và tùy chọn của nó, các kích thước của phác thảo, rồi {{ui:Tắt}}, {{ui:Quay lại đến đây}}, {{ui:Lên}}, {{ui:Xuống}}, {{ui:Xóa}} và **Tên** của nó.
- Một phác thảo đang mở: trạng thái của nó, các quan hệ bạn có thể thêm vào vùng chọn, danh sách quan hệ và kích thước, **Thêm theo tọa độ**, và {{ui:Thoát phác thảo}}, {{ui:Vừa khung}} và {{ui:Xuất DXF}}.
- Trên tờ bản vẽ: các cài đặt mặt cắt và chi tiết, hoặc ký hiệu GD&T đang chọn.
- Trong lắp ráp: lắp ráp, chi tiết đang chọn, hoặc khớp đang chọn.

Mỗi ô số có hiệu lực khi bạn nhấn {{key:Enter}} hoặc {{key:Tab}}, hoặc bấm ra chỗ khác. Chi tiết được dựng lại ngay; không có nút OK. Dùng {{key:Mod+Z}} để quay lại.

## Thanh trạng thái (dưới cùng)

- Bên trái, tọa độ của con trỏ trong phác thảo (chỉ khi một phác thảo đang mở).
- Ở giữa, các thông báo: việc cần làm tiếp theo, và vì sao một việc bị từ chối. Hãy đọc nó khi dường như không có gì xảy ra.
- Gần bên phải, chip kernel: luôn là "Kernel lưới" trong phiên bản này. Rê chuột lên để biết nó nghĩa là gì. Xem [Kernel lưới](topic:solid-kernels).
- Ở bên phải, một chip: "Đang dựng lại…" khi chi tiết đang dựng lại, rồi "Đã dựng lại trong … ms" khi mọi thứ ổn, hoặc "1 đặc trưng lỗi". Trong lắp ráp nó ghi "Đã đặt trong … ms" hoặc đếm các vấn đề của khớp.

Xem thêm [Bắt đầu một sổ tay trong Illustrate](topic:illustrate): không gian làm việc tạo các sổ tay lắp ráp từ chi tiết và lắp ráp của bạn.

## Trên màn hình hẹp

Đến rộng 760 pixel, như trên điện thoại, khung nhìn chiếm màn hình: thanh công cụ là một hàng cuộn ngang, và các bảng mở ra dạng tấm từ thanh ở dưới cùng. {{ui:Công cụ}} ẩn thanh công cụ và {{ui:Di chuyển}} đặt nó xuống dưới. Xem [Bàn di chuột, cảm ứng và màn hình nhỏ](topic:trackpad-and-touch).
