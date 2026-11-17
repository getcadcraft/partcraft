---
title: Đặc trưng và các tùy chọn
summary: Mọi đặc trưng trên thanh công cụ cùng cài đặt, mặc định và giới hạn của nó, từ đùn đến bo góc, vỏ và khối đặc STEP nhập vào; các thao tác mà mọi đặc trưng đều có; và cài đặt của chi tiết.
keywords: đặc trưng, chưa xây dựng, đùn, cắt, quay tròn, cắt quay tròn, lỗ, khoét chìm, mẫu lặp thẳng, mẫu lặp tròn, đối xứng, bo góc, vát mép, vỏ, nhập, tùy chọn, mặc định, cài đặt, độ phân giải, đường cong, mặt xấp xỉ, tắt, quay lại
from: ab3a598e
---

Đặc trưng được liệt kê trong lịch sử theo thứ tự chúng được tạo, và được dựng lại từ trên xuống dưới. Mỗi đặc trưng được đặt tên theo loại của nó kèm một số: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft dựng mọi đặc trưng bằng kernel lưới. Bo góc và vát mép hoạt động trên cạnh thẳng giữa hai mặt phẳng, và Vỏ mở các mặt phẳng. Khối nhập vào cần kernel chính xác, mà phiên bản này không có: chúng chưa được dựng, và phần dưới đây mô tả chúng; một chi tiết được tạo bởi bản dựng trước vẫn giữ chúng. Xem [Kernel lưới](topic:solid-kernels) và [Chưa xây dựng](topic:not-built-yet).

## Phác thảo

| Cài đặt | Ghi chú |
|---|---|
| Mặt phẳng | Mặt phẳng Front, Top hoặc Right, hoặc một mặt phẳng. Chỉ hiển thị, không thay đổi: để di chuyển phác thảo, tạo cái mới |
| Trạng thái | Xác định đầy đủ, Xác định thiếu (kèm số bậc tự do), Xác định thừa, hoặc Trống |
| Hình học, Quan hệ | Có bao nhiêu đường cong, điểm và quan hệ |
| Kích thước điều khiển | Mọi kích thước của phác thảo, có thể sửa |

Nút: {{ui:Sửa phác thảo}}, {{ui:Xuất DXF}}.

## Đùn và Cắt

{{ui:Đùn}} và {{ui:Cắt}} tạo cùng một đặc trưng, chỉ khác ở cài đặt ban đầu.

| Cài đặt | Lựa chọn | Đùn bắt đầu ở | Cắt bắt đầu ở |
|---|---|---|---|
| Thao tác | Đắp (thêm vật liệu), Cắt (bỏ vật liệu), Giao (giữ phần chồng lên nhau), Khối mới (chưa xây dựng trong phiên bản này) | Đắp | Cắt |
| Kết thúc | Theo độ sâu, Giữa mặt phẳng (cả hai phía), Xuyên suốt | Theo độ sâu | Xuyên suốt |
| Độ sâu (mm) | Trên 0, đến 1,000,000 | 10 | 10 |
| Đảo chiều | Tắt / bật | Tắt | Tắt |

- Profile: mọi vòng kín gồm các đường liền, vòng tròn và cung trong phác thảo. Vòng nằm trong vòng là lỗ.
- Xuyên suốt chỉ dùng cho cắt. Nó đi xuyên qua chi tiết ở phía đã chọn.
- Cắt đi vào vật liệu, ngược với phía hướng ra ngoài của mặt phẳng phác thảo; Đảo chiều sẽ lật lại.

## Quay tròn và cắt quay tròn

| Cài đặt | Lựa chọn | Mặc định |
|---|---|---|
| Thao tác | Đắp, Cắt | Đắp ({{ui:Quay tròn}}), Cắt ({{ui:Thêm}} › {{ui:Cắt quay tròn}}) |
| Góc (°) | Trên 0, đến 360 | 360 |
| Trục | Đường tâm đầu tiên, bất kỳ đường thẳng hoặc đường tâm nào của phác thảo, hoặc một đặc trưng trục nằm trong mặt phẳng phác thảo | Đường tâm đầu tiên |

- Profile phải nằm về một phía của trục. Nó có thể chạm vào trục.
- Trục của quay tròn có thể được dùng bởi Mẫu lặp tròn và bởi các khớp lắp ráp.

## Lỗ

| Cài đặt | Lựa chọn | Mặc định |
|---|---|---|
| Loại | Đơn giản, Khoét chìm | Đơn giản |
| Đường kính (mm) | Trên 0 | 6 |
| Xuyên suốt | Bật / tắt | Bật |
| Độ sâu (mm) | Khi Xuyên suốt tắt | 10 |
| Đường kính khoét chìm ⌀ | Lớn hơn lỗ | 11 |
| Độ sâu khoét chìm | Nông hơn một lỗ mù | 6 |
| Đảo chiều | Tắt / bật | Tắt |

- Một lỗ tại mỗi điểm rời của phác thảo (các điểm được tạo bằng công cụ Điểm). Bảng hiển thị có bao nhiêu lỗ.
- Lỗ được khoan vuông góc với mặt phẳng phác thảo, đi vào vật liệu.
- Trục của mỗi lỗ có thể được dùng bởi các khớp lắp ráp ("Hole1, lỗ 2").

## Mẫu lặp thẳng

| Cài đặt | Lựa chọn | Mặc định |
|---|---|---|
| Đặc trưng để sao chép | Mọi đặc trưng khối đặc ở trên nó | Đặc trưng được chọn, nếu không thì đặc trưng khối đặc cuối cùng |
| Hướng | Trục X, Y, Z; một đường của phác thảo trước; trục của một quay tròn; một cạnh được chọn | Trục X (hoặc cạnh đã chọn khi bạn thêm nó) |
| Khoảng cách (mm) | Số bất kỳ | 20 |
| Số lượng | 1 đến 1000, kể cả bản gốc | 3 |
| Đảo chiều | Tắt / bật | Tắt |

## Mẫu lặp tròn

| Cài đặt | Lựa chọn | Mặc định |
|---|---|---|
| Đặc trưng để sao chép | Như Mẫu lặp thẳng | Như Mẫu lặp thẳng |
| Trục | Như Hướng ở trên | Trục của quay tròn gần nhất, nếu không thì trục Y (hoặc cạnh đã chọn) |
| Góc (°) | Trên 0, đến 360. 360 đặt các bản sao cách đều một vòng; nhỏ hơn sẽ trải chúng trên góc đó | 360 |
| Số lượng | 1 đến 1000, kể cả bản gốc | 6 |
| Đảo chiều | Tắt / bật | Tắt |

## Đối xứng

| Cài đặt | Lựa chọn | Mặc định |
|---|---|---|
| Đối xứng | Toàn bộ thân (như đã dựng cho đến nay), hoặc các đặc trưng đã chọn | Đặc trưng được chọn, nếu không thì toàn bộ thân |
| Mặt phẳng đối xứng | Mặt phẳng Front, Top hoặc Right; một mặt phẳng | Mặt phẳng Right, hoặc mặt phẳng đã chọn khi bạn thêm nó |

## Bo góc và vát mép

Trong phiên bản này kernel lưới dựng chúng trên các cạnh thẳng giữa hai mặt phẳng (góc ngoài hoặc góc trong), với một bán kính. Một cạnh tròn báo "Fillet: trong phiên bản này chỉ hỗ trợ cạnh thẳng giữa hai mặt phẳng (kernel lưới dựng được). Bo tròn hoặc vát mép các cạnh cong trong phác thảo." Nơi các cạnh bo gặp nhau ở một góc, chúng được cắt góc, và đặc trưng cảnh báo "Fillet bằng kernel lưới: nơi các cạnh bo gặp nhau chúng được cắt góc, không được hòa trộn." Mọi kiểu vát mép (khoảng cách bằng nhau, hai khoảng cách, khoảng cách và góc, với **Đổi phía**) đều hoạt động. Xem [Bo tròn, vát mép và làm rỗng](topic:fillet-chamfer-shell).

| Cài đặt | Lựa chọn | Mặc định |
|---|---|---|
| Bán kính (mm) (Bo góc) | Trên 0 | 2 |
| Khoảng cách (mm) (Vát mép) | Trên 0, giống nhau trên cả hai mặt | 1 |
| Cạnh | Các cạnh được chọn, mỗi cạnh được liệt kê theo hai mặt nó nối ("Mặt cuối Extrude1 × Mặt bên Extrude1"), với **Gỡ bỏ** | Các cạnh được chọn khi bạn thêm nó |

- Chọn cạnh trước khi chọn nút ({{key:Shift}}+nhấp để chọn nhiều), hoặc chọn nút khi chưa chọn gì rồi nhấp các cạnh sau đó.
- {{ui:Chọn cạnh}} (hoặc nhấp đúp vào đặc trưng) thay đổi các cạnh.
- Cạnh được giữ theo hai mặt nối nó, nên chúng vẫn tồn tại khi kích thước thay đổi ở phía trên.

## Vỏ

Kernel lưới dựng nó. Chỉ các mặt phẳng mới mở được ("Shell: trong phiên bản này chỉ mở được mặt phẳng (kernel lưới dựng được)."); các thành có độ dày khác nhau chưa xây dựng. Xem [Bo tròn, vát mép và làm rỗng](topic:fillet-chamfer-shell).

| Cài đặt | Lựa chọn | Mặc định |
|---|---|---|
| Thành (mm) | Trên 0 | 2 |
| Thành mở rộng ra ngoài (các mặt giữ ở bên trong) | Tắt: thành đi vào trong. Bật: thành đi ra ngoài | Tắt |
| Mặt mở | Các mặt bị loại bỏ, ít nhất một, với **Gỡ bỏ** | Các mặt được chọn khi bạn thêm nó |

{{ui:Chọn mặt}} thay đổi các mặt mở.

## Khối nhập vào

Được tạo bằng cách mở tệp STEP, STL, OBJ hoặc 3MF: một thân khối đặc gồm các tam giác, không có lịch sử riêng ([Mở tệp STEP](topic:import-step), [Mở STL, OBJ hoặc 3MF](topic:open-meshes)). Nó hiển thị tệp mà nó đến từ và những gì quá trình nhập đã sửa; **Đơn vị trong tệp**, **Hướng lên trong tệp** và **Dùng để** vẫn có thể chỉnh sửa. Khối STEP được nhập bởi bản dựng cũ có kernel chính xác sẽ ở lại trong lịch sử, được đánh dấu là chưa xây dựng; mở lại tệp STEP để nhập nó dưới dạng tam giác.

| Cài đặt | Lựa chọn | Mặc định |
|---|---|---|
| Hướng lên trong tệp | Z lên (đa số CAD), Y lên | Z lên |

Mẫu lặp và đối xứng có thể sao chép khối nhập vào, nhưng không sao chép được bo góc, vát mép hay vỏ.

## Mọi đặc trưng đều có

Ở cuối bảng của mỗi đặc trưng:

| Nút | Làm gì |
|---|---|
| {{ui:Tắt}} / {{ui:Bật lại}} | Tắt hoặc bật. Các đặc trưng cần nó sẽ không được dựng khi nó tắt |
| {{ui:Quay lại đến đây}} | Chỉ dựng các đặc trưng ở phía trên đặc trưng này. Đặc trưng mới được đặt vào thanh quay lại |
| {{ui:Lên}} / {{ui:Xuống}} | Sắp xếp lại, khi không có gì nó dùng sẽ nằm dưới nó. Mờ đi kèm lý do nếu không |
| {{ui:Xóa}} | Xóa nó, và (sau khi hỏi) mọi đặc trưng dùng nó |
| Tên | Đổi tên (tối đa 60 ký tự) |

Đặc trưng có phác thảo cũng liệt kê **Kích thước phác thảo**, có thể sửa tại chỗ.

## Trạng thái trong lịch sử

| Trạng thái | Hiển thị | Ý nghĩa |
|---|---|---|
| Đã dựng | Bình thường | Mọi thứ ổn |
| Cảnh báo | ⚠ | Đã dựng, nhưng có điều cần kiểm tra: "Xác định thừa: 1 quan hệ không cần thiết." hoặc "Sau thao tác này không còn gì của chi tiết." |
| Lỗi | ⚠ lỗi, màu đỏ | Không thể dựng; thông báo nói lý do |
| Chưa xây dựng | ⚠ chưa xây dựng | Cần một đặc trưng đã lỗi, bị tắt hoặc bị quay lại, hoặc cần kernel chính xác mà phiên bản này không có ("Quét: chưa xây dựng. …") |
| Đã tắt | tắt | Đã tắt |
| Đã quay lại | mờ, dưới thanh quay lại | Chưa dựng cho đến khi bạn quay tới |

## Cài đặt chi tiết

Nhấp vào khoảng trống để không chọn gì. Bảng bên phải hiển thị **Chi tiết**:

- **Tên**: tên của chi tiết, dùng cho tên tệp và khung tên của bản vẽ (tối đa 120 ký tự).
- **Đường cong**: xem bên dưới.

### Độ phân giải đường cong

Kernel lưới tự dựng khối từ các mặt phẳng nhỏ, nên khung nhìn, STL, 3MF, STEP xấp xỉ, thể tích và các hình chiếu của bản vẽ đều theo **Đường cong**: có bao nhiêu mặt nhỏ mỗi vòng đầy đủ.

| Cài đặt | Mặt nhỏ mỗi vòng | Thể tích của hình tròn |
|---|---|---|
| Thô (32 mỗi vòng) | 32 | Thấp hơn khoảng 0.64 % so với giá trị thật |
| Thường (64 mỗi vòng) | 64 | Thấp hơn khoảng 0.16 % (mặc định) |
| Mịn (128 mỗi vòng) | 128 | Thấp hơn khoảng 0.04 % |
| Rất mịn (256 mỗi vòng) | 256 | Thấp hơn khoảng 0.01 % |

Đường cong mịn hơn cho xuất và khung nhìn mượt hơn, nhưng dựng lại chậm hơn. Cài đặt được lưu trong tệp chi tiết.

## Chưa xây dựng

Bo góc có bán kính thay đổi, bo góc và vát mép trên cạnh tròn, vỏ mở các mặt cong, độ nghiêng khuôn trên mặt cong, quét, chuyển tiếp (loft), gân (rib), khối đặc STEP có mặt cong chính xác, khối mới, độ thuôn, "đến" một mặt hoặc một đỉnh, và tham chiếu trên các mặt và cạnh của khối đặc, đều cần kernel chính xác mà phiên bản này không có. Lỗ có ren và lỗ khoét côn cũng chưa xây dựng. Xem [Chưa xây dựng](topic:not-built-yet).
