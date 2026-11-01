---
title: Bắt đầu với PartCraft
summary: PartCraft hiện làm được gì, trình duyệt của bạn cần gì, và chi tiết đầu tiên trong mười phút, từ phác thảo đến tệp đã lưu.
keywords: bắt đầu, lần chạy đầu tiên, khởi đầu nhanh, giới thiệu, hướng dẫn, chi tiết đầu tiên, tấm, tham số, phần mềm mô hình chi tiết
from: 5f0a668d
---

PartCraft là ứng dụng chi tiết và lắp ráp tham số của họ CadCraft. Bạn vẽ một phác thảo 2D, cố định nó bằng các quan hệ và kích thước, biến nó thành khối đặc bằng các đặc trưng như đùn, quay tròn và lỗ, và đổi bất kỳ con số nào sau đó: chi tiết được dựng lại từ lịch sử của nó. Các chi tiết sau đó vào các lắp ráp, nơi các khớp đặt chúng và cho bạn kiểm tra chuyển động.

Bản dựng này làm được gì:

| Công việc | Bạn nhận được |
|---|---|
| Phác thảo | Đường thẳng, hình chữ nhật, vòng tròn, cung tròn, điểm và đường tâm, kèm quan hệ và kích thước, và trạng thái trực tiếp: chưa đủ, đã đủ hay thừa ràng buộc |
| Đặc trưng khối đặc | Đùn, cắt, quay tròn, cắt quay tròn, lỗ đơn giản và lỗ có đáy khoét, mẫu lặp thẳng và tròn, đối xứng, bo góc và vát mép trên các cạnh thẳng giữa các mặt phẳng, vỏ và độ nghiêng khuôn trên các mặt phẳng. Quét, chuyển tiếp và các đặc trưng khác cần kernel chính xác chưa được xây dựng trong phiên bản này: xem [Những gì chưa xây dựng](topic:not-built-yet) |
| Lịch sử | Sửa các con số của bất kỳ đặc trưng nào, tắt, lùi về, sắp xếp lại và xóa, kèm hoàn tác |
| Lắp ráp | Các chi tiết nối bằng khớp cứng, khớp quay và khớp trượt, kiểm tra va chạm và kiểm tra chuyển động |
| Bản vẽ | Một tờ A3 với ba hình chiếu, một hình đẳng trắc, một mặt cắt, một hình chi tiết, kích thước tổng thể, chuẩn, khung điều khiển đặc trưng và ký hiệu độ bóng bề mặt, xuất ra PDF |
| Tệp | Tệp chi tiết và lắp ráp riêng của nó; xuất STL, 3MF, STEP xấp xỉ bằng mặt, DXF và PDF |

Mọi thứ chạy trong trình duyệt, trên máy tính của bạn. **Không có gì được tải lên.** Xem [Tệp: mở, lưu và xuất](topic:files) để biết tệp đi đâu.

## Bạn cần gì

- Chrome, Edge, Firefox hoặc Safari hiện hành với **WebGL** (đồ họa 3D) và **WebAssembly** được bật. Cả hai đều bật sẵn theo mặc định. Hình học khối đặc được dựng bởi một kernel lưới WebAssembly tải cùng ứng dụng: xem [Kernel lưới](topic:solid-kernels).
- Chuột là dễ nhất. Bàn di chuột dùng được, và màn hình cảm ứng dùng được để xem và phác thảo đơn giản: xem [Bàn di chuột, cảm ứng và màn hình nhỏ](topic:trackpad-and-touch).
- Màn hình rộng ít nhất 1280 pixel hiển thị toàn bộ thanh công cụ trên một hàng. Cửa sổ hẹp hơn cuộn thanh công cụ ngang; trên điện thoại các bảng mở ra dạng tấm từ thanh ở dưới cùng.

Thêm về trình duyệt: [Trình duyệt và máy tính](common:browsers).

:::note
PartCraft chạy trong trình duyệt, và trên máy tính để bàn bên trong CadCraft Studio. Lưu lên đám mây chưa có: bạn mở chi tiết từ máy tính của mình và lưu trở lại thành tệp.
:::

## Mở PartCraft

1. Mở PartCraft.
2. Đợi trong khi màn hình ghi "Đang tải kernel khối đặc…". Lần đầu mất một lúc.
3. Bạn thấy một khung nhìn 3D trống với ba mặt phẳng cơ sở, lịch sử ở bên trái ("Part1", rồi Mặt phẳng trước, Mặt phẳng trên, Mặt phẳng phải) và một hộp trong khung nhìn có tiêu đề "Bắt đầu một chi tiết".
4. Chip gần đầu bên phải của thanh trạng thái ghi "Kernel lưới": PartCraft dựng mọi chi tiết bằng kernel lưới trong phiên bản này, nên các mặt tròn là các mặt phẳng nhỏ. Bạn có thể bắt đầu mô hình hóa ngay.

Nếu khung nhìn báo trình duyệt không hiển thị được 3D, hoặc kernel không tải được, hãy xem [Khắc phục sự cố](topic:troubleshooting#the-app-does-not-start).

## Chi tiết đầu tiên của bạn: một tấm có lỗ

Bạn sẽ làm một tấm 60 × 40 mm, dày 10 mm, với một lỗ 6 mm xuyên qua. Đơn vị là milimét.

### Phác thảo đường viền

1. Bấm **Mặt phẳng trước** trong lịch sử bên trái. Mặt phẳng được tô sáng trong khung nhìn.
2. Chọn {{ui:Phác thảo}} trên thanh công cụ, hoặc nhấn {{key:S}}. Khung nhìn quay để nhìn thẳng vào mặt phẳng, và công cụ Đường thẳng đang bật.
3. Nhấn {{key:R}} cho công cụ Hình chữ nhật.
4. Đưa con trỏ lên gốc tọa độ (vòng tròn đỏ nhỏ có dấu chữ thập). Một ô vuông nhỏ cho thấy nó bắt điểm. Bấm.
5. Di chuyển lên và sang phải rồi bấm lần nữa. Bạn có một hình chữ nhật. Các đường của nó màu xanh dương: xanh dương nghĩa là chúng vẫn có thể di chuyển.

### Đặt kích thước cho nó

1. Nhấn {{key:D}} cho công cụ Kích thước.
2. Bấm đường trên, rồi bấm một chỗ hơi cao hơn nó. Một hộp số mở ra với chiều dài hiện tại.
3. Gõ `60` rồi nhấn {{key:Enter}}. Hình chữ nhật đổi thành rộng 60 mm.
4. Bấm đường trái, rồi bấm một chỗ hơi lệch sang trái của nó. Gõ `40` rồi nhấn {{key:Enter}}.

Chip ở góc trên bên trái của khung nhìn giờ ghi **Đã đủ ràng buộc** và các đường chuyển sang màu mực (đen trên giao diện Giấy, sáng trên giao diện Mô hình). Mọi điểm và kích thước đều đã cố định.

:::tip
Nếu bạn bắt đầu hình chữ nhật cách xa gốc tọa độ, chip vẫn ghi "Chưa đủ ràng buộc · 2 bậc tự do". Nhấn {{key:S}} để Chọn, bấm một góc, {{key:Shift}}+bấm gốc tọa độ, rồi chọn {{ui:• Trùng nhau}} trong bảng bên phải.
:::

### Đùn nó

1. Chọn {{ui:Thoát}} trên thanh công cụ, hoặc nhấn {{key:Esc}} cho đến khi phác thảo đóng (thường là hai lần).
2. Chọn {{ui:Đùn}}. Một khối đặc dày 10 mm xuất hiện. "Extrude1" được thêm vào lịch sử, với "Sketch1" thụt vào bên dưới.
3. Bảng bên phải hiện các cài đặt của phép đùn. Để đổi độ dày, gõ một số mới vào **Độ sâu (mm)** rồi nhấn {{key:Enter}} hoặc {{key:Tab}}. Chi tiết được dựng lại ngay.

### Thêm lỗ

1. Bấm vào mặt phẳng lớn ở phía trước của tấm (đầu của phép đùn). Cả mặt được tô sáng và bảng bên phải ghi **Mặt**.
2. Chọn {{ui:Phác thảo trên mặt này}} trong bảng bên phải.
3. Nhấn {{key:P}} cho công cụ Điểm và bấm gần giữa mặt.
4. Chọn {{ui:Thoát}}.
5. Chọn {{ui:Lỗ}}. Một lỗ 6 mm xuyên qua tấm. Đổi **Đường kính (mm)** trong bảng bên phải nếu bạn muốn.

Hộp **Chi tiết** ở dưới cùng bên trái giờ hiện thể tích, diện tích bề mặt, kích thước (60 × 40 × 10 mm) và "Lỗ xuyên: 1".

### Lưu nó

1. Nhấn {{key:Mod+S}} hoặc chọn {{ui:Lưu}}.
2. Trình duyệt tải xuống `Part1.partcraft.json` vào thư mục tải xuống. Tệp chứa toàn bộ lịch sử: mở lại bằng {{ui:Mở}} để tiếp tục chỉnh sửa.

Để đổi tên chi tiết trước, bấm vào chỗ trống trong khung nhìn để không chọn gì và gõ **Tên** mới trong bảng bên phải.

## Đi tiếp đến đâu

- [Vẽ phác thảo đầu tiên của bạn](topic:sketch-basics) và [Ràng buộc đầy đủ một phác thảo](topic:relations-dimensions) giải thích trình phác thảo một cách bài bản.
- [Thay đổi chi tiết qua lịch sử của nó](topic:edit-history) cho thấy cách sửa những gì bạn đã dựng.
- [Bo tròn, vát và làm rỗng](topic:fillet-chamfer-shell) và [Làm một bản vẽ](topic:drawing-pdf) hoàn thiện chi tiết. [Những gì chưa xây dựng](topic:not-built-yet) liệt kê những gì phiên bản này chưa làm, như quét và chuyển tiếp.
- [Chuyển từ phần mềm tham số khác sang](topic:coming-from) liệt kê các thói quen hoạt động khác ở đây.
- [Phím và chuột](topic:keyboard) là danh sách đầy đủ các phím tắt.
- [Dùng phần trợ giúp này](common:help).
