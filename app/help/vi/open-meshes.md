---
title: Mở STL, OBJ hoặc 3MF thành thân khối đặc
summary: Đổi lưới từ máy quét, trang in 3D hoặc chương trình khác thành khối đặc mà bạn có thể cắt, thêm vào và phác thảo trên đó; PartCraft tự sửa gì khi mở, và những gì nó không sửa được.
keywords: stl, obj, 3mf, lưới, lưới thành khối đặc, chuyển lưới, quét, kín, sửa, lỗ hở, khe hở, đơn vị, trục hướng lên, thân đã nhập, mặt phẳng
from: 7b948471
---

PartCraft mở lưới STL, OBJ và 3MF thành **thân khối đặc**. Thân hoạt động như mọi khối đặc khác: cắt, thêm vào, khoan, tạo mẫu lặp, dùng trong lắp ráp hoặc để gia công, và phác thảo trên các mặt phẳng của nó. Nó không có lịch sử riêng: lưới chỉ là các tam giác, nên kích thước của nó không thể đổi, chỉ có thể thêm vào hoặc cắt đi.

## Mở lưới

1. Chọn {{ui:Mở}} hoặc nhấn {{key:Mod+O}}, rồi chọn tệp `.stl`, `.obj` hoặc `.3mf`. Hoặc thả nó lên khung nhìn 3D.
2. PartCraft đọc tệp, sửa những gì nó có thể sửa an toàn và hiển thị những gì nó tìm được: có bao nhiêu tam giác và điểm, mỗi lần sửa, và lưới hiện đã **khép kín** hay chưa.
3. Kiểm tra **Đơn vị trong tệp** và **Hướng lên trong tệp**. STL và OBJ không khai báo đơn vị của chúng, nên milimét là phỏng đoán; tệp 3MF tự khai báo. Dòng **Kích thước tại đây** hiển thị kích thước thân theo lựa chọn của bạn, nên một chi tiết vào nhỏ hơn 25.4 lần dễ nhận ra (nó đã được đo bằng inch).
4. Nếu chi tiết trên màn hình trống, chọn {{ui:Mở thành thân}}. Nếu nó đã có đặc trưng, chọn **Dùng để** (thêm vào chi tiết, cắt khỏi nó, hoặc chỉ giữ phần chồng lên nhau), rồi {{ui:Thêm vào chi tiết này}}, hoặc {{ui:Chi tiết mới}} để bắt đầu lại với lưới.

Một đặc trưng **Imported1** xuất hiện trong lịch sử. Thanh trạng thái hiển thị, ví dụ: "bracket.stl là một thân khối đặc: 15200.512 mm³, 14 mặt phẳng để phác thảo trên đó."

## PartCraft sửa gì

| Sửa | Ý nghĩa |
|---|---|
| Gộp góc trùng | Một STL lặp lại mỗi góc cho mỗi tam giác của nó; chúng được gộp thành một điểm |
| Xóa tam giác không diện tích | Các tam giác mỏng có các góc nằm trên một đường thẳng |
| Xóa tam giác trùng | Tam giác ghi hai lần được giữ một lần; hai tam giác quay mặt ngược nhau (một thành bên trong) đều bị xóa |
| Đóng khe hở nhỏ | Các cạnh gần như gặp nhau (trong một phần nghìn kích thước chi tiết) được nối lại |
| Lấp lỗ | Một lỗ hở có viền nằm phẳng được lấp dù kích thước nào; lỗ bị cong vênh chỉ khi nhỏ |
| Lật tam giác hướng ra ngoài | Các tam giác quay sai chiều được lật cho khớp với láng giềng, và cả bề mặt quay ra ngoài |

## Khi lưới không khép kín

Một khối đặc cần một bề mặt không có lỗ hở. Khi PartCraft không thể đóng nó, hộp thoại cho biết còn bao nhiêu lỗ hở và cạnh hở, và không có thân nào để thêm. Đóng các lỗ hở trong chương trình đã tạo lưới, hoặc xuất lại thành lưới kín (watertight), rồi mở lại.

PartCraft để yên một lỗ hở khi lấp nó có thể đoán sai: một lỗ lớn bị cong vênh, hoặc hai lỗ hở trên cùng một mặt phẳng (một mặt hình vành khuyên bị thiếu, nơi lấp từng viền sẽ che lỗ ở giữa). Một cạnh được chia sẻ bởi hơn hai tam giác cũng được báo cáo: một bề mặt như vậy không có một bên trong rõ ràng.

## Phác thảo trên các mặt phẳng

Các vùng phẳng gồm nhiều tam giác được gộp thành mỗi cái một **mặt phẳng**, để một phác thảo có thể đặt trên chúng: nhấp mặt và chọn {{ui:Phác thảo trên mặt này}}. Một mặt bị cắt hoặc được thêm vào sau này vẫn là một mặt. Các vùng tròn (một lỗ, một bo góc) vẫn là tam giác: chúng không phải mặt bạn có thể chọn, và khung nhìn vẽ đường bao của chúng từ góc giữa các tam giác.

## Thay đổi sau

Chọn **Imported1** để xem tệp nó đến từ đâu, nó có bao nhiêu tam giác và những gì đã được sửa. **Đơn vị trong tệp**, **Hướng lên trong tệp** và **Dùng để** có thể đổi ở đó; mỗi lần đổi là một bước hoàn tác.

## Nơi lưu

Lưới đã sửa được lưu **bên trong** tệp `.partcraft.json`, nên bạn không cần tệp lưới nữa. Một tệp chi tiết có thân lưới là phiên bản 5: PartCraft cũ hơn sẽ từ chối nó theo phiên bản. Một lưới 200,000 tam giác thêm khoảng 1.2 MB.

## Giới hạn

- Tối đa 3 triệu tam giác và 200 MB trong một tệp.
- Thân được tạo từ lưới được dựng bằng kernel lưới. Với kernel chính xác bật (chỉ nhà phát triển), nó báo điều đó và không được dựng.
- Vật liệu OBJ, tọa độ kết cấu và đường cong tự do bị bỏ; màu, vật liệu và đối tượng hỗ trợ của 3MF bị bỏ (hộp thoại cho biết có bao nhiêu đối tượng bị bỏ qua).
- Thân mịn bằng lưới: một STL thô cho các mặt tròn thô. Lỗ bạn khoan vào đó tròn như các đặc trưng của chính bạn.
