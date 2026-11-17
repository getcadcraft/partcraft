---
title: Đổi kích thước mà không mở phác thảo
summary: Điều khiển một chi tiết bằng các con số trong bảng bên phải: kích thước phác thảo, chiều sâu, số lượng và góc; cách lập kế hoạch chi tiết để các con số đúng điều khiển nó; và nơi tham số và phương trình đảm nhận.
keywords: tham số, kích thước điều khiển, ý đồ thiết kế, đổi kích thước, phương trình, biến toàn cục, bảng thiết kế, cấu hình, thay đổi kích thước, sửa kích thước
from: c2ae1a32
---

Mọi kích thước trong chi tiết PartCraft là một con số bạn có thể đổi sau này: các kích thước trong phác thảo và các thiết lập của đặc trưng. Bạn không cần mở phác thảo để đổi kích thước của nó.

## Đổi kích thước phác thảo từ bảng

1. Nhấp một đặc trưng trong lịch sử, ví dụ "Extrude1".
2. Dưới thiết lập riêng của đùn, **Kích thước phác thảo (Sketch1)** liệt kê mọi kích thước của phác thảo: "Khoảng cách", "Đường kính", "Góc (°)" và các mục khác.
3. Nhập một giá trị mới vào một ô rồi nhấn {{key:Enter}} hoặc {{key:Tab}}.

Phác thảo được giải với giá trị mới, và toàn bộ chi tiết được dựng lại. Chọn chính phác thảo sẽ hiển thị cùng danh sách như **Kích thước điều khiển**.

Bán kính hoặc đường kính phải lớn hơn không, và góc nằm trong khoảng từ 0 đến 180 độ; thanh trạng thái sẽ cho biết nếu không.

:::tip
Ô nào là ô nào? Các ô được liệt kê theo thứ tự kích thước được tạo. Nếu không chắc, mở phác thảo (nhấp đúp vào nó), nhấp đúp kích thước trên vùng vẽ, và đổi tại đó.
:::

## Nhập ngay con số chính

Chọn một đặc trưng trong lịch sử (hoặc chỉ cần thêm nó) và nhập một con số: nó đi vào ô chính của đặc trưng, ô bạn đổi nhiều nhất (**Chiều sâu** của đùn, **Góc** của quay tròn, **Đường kính** của lỗ, **Số lượng** của mẫu, **Bán kính** của bo góc, độ dày thành của vỏ). Nhấn {{key:Enter}} để đặt, hoặc {{key:Esc}} để giữ giá trị cũ. Khi thêm một đùn, thanh trạng thái cho biết: "Đã thêm Extrude1. Đổi các con số ở bên phải, hoặc nhập một con số ngay cho chiều sâu của nó."

## Đổi con số trong lịch sử

Mỗi hàng đặc trưng trong lịch sử hiển thị con số chính bên cạnh tên của nó: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Nhấp đúp vào con số (hoặc chọn hàng rồi nhấn {{key:F2}}) và một ô mở ngay tại đó. Nhập giá trị mới rồi nhấn {{key:Enter}}; {{key:Esc}} giữ giá trị cũ. Nó hoạt động y hệt ô của đặc trưng ở bên phải: cùng giới hạn, `=` để nhập một phương trình như `=width/2`, và một bước để hoàn tác.

Với đùn, lỗ hoặc mẫu, nhấp đúp vào bất kỳ đâu trên hàng sẽ mở ô. Với Bo góc, Vát mép, Vỏ, Độ nghiêng khuôn hoặc Ren, nhấp đúp vào tên vẫn chuyển sang chọn cạnh hoặc mặt của nó, nên nhấp đúp chính con số. Phác thảo không có con số trong hàng: nhấp đúp sẽ mở phác thảo.

## Kéo trong khung nhìn

Chọn một đùn trong lịch sử (hoặc nhấp nó trong khung nhìn, rồi hàng của nó) và một mũi tên màu cam đứng trên mặt cuối của nó, với chiều sâu trong một ô bên cạnh. Kéo mũi tên: chi tiết đi theo khi bạn kéo, và khi thả ra, chiều sâu mới được đặt thành một bước ({{key:Mod+Z}} đưa nó trở lại). Nhấn {{key:Esc}} khi đang kéo để quay lại vị trí ban đầu. Chiều sâu thay đổi theo bước bằng một phần mười kích thước của nó: 1 mm với đùn 25 mm, 0.1 mm với đùn 3 mm.

Quay tròn có một mũi tên cong ở cuối vòng quay: kéo nó quanh trục để đổi góc, theo độ nguyên từ 1° đến 360°.

Hoặc nhấp vào ô bên cạnh mũi tên, nhập một giá trị (hoặc `=` và một phương trình) rồi nhấn {{key:Enter}}. Không có mũi tên trên đùn đi **Xuyên suốt** hoặc đến một mặt, hay trên một giá trị do phương trình điều khiển: đổi những thứ đó ở bên phải.

## Các con số điều khiển chi tiết

| Nơi | Bạn có thể đổi |
|---|---|
| Phác thảo | Mọi kích thước: chiều dài, khoảng cách, bán kính, đường kính, góc |
| Đùn và Cắt | Chiều sâu, điều kiện kết thúc, hướng, khối đắp hoặc cắt |
| Quay tròn và cắt quay tròn | Góc, trục, khối đắp hoặc cắt |
| Lỗ | Đường kính, chiều sâu, xuyên suốt, đường kính và chiều sâu lỗ khoét |
| Bo góc, Vát mép, Vỏ | Bán kính, khoảng cách, độ dày và hướng thành, và các cạnh hoặc mặt nào |
| Thẳng và Tròn | Số lượng, khoảng cách hoặc góc, hướng hoặc trục |
| Chi tiết | Độ cong (hình tròn được chia mặt mịn đến đâu) |
| Bản vẽ | Vị trí mặt cắt, kích thước và tỷ lệ của chi tiết phóng to, giá trị GD&T |

## Lập kế hoạch chi tiết để các con số đúng điều khiển nó

Các con số bạn đưa vào là những con số bạn có thể đổi. Vài thói quen giúp các thay đổi sau này hoạt động đúng:

- **Ghi kích thước những gì quan trọng cho công việc.** Nếu một lỗ phải cách một cạnh 15 mm, ghi kích thước nó từ cạnh đó, không phải từ gốc tọa độ.
- **Xác định đầy đủ phác thảo.** Khi đó một thay đổi chỉ di chuyển những gì cần (xem [Xác định đầy đủ một phác thảo](topic:relations-dimensions)).
- **Dùng quan hệ để thể hiện ý đồ.** Bằng nhau trên hai lỗ nghĩa là một đường kính điều khiển cả hai. Hình đối xứng: đặt gốc tọa độ trên đường tâm, hoặc dùng Trung điểm.
- **Phác thảo trên các mặt do đặc trưng tạo ra.** Phác thảo trên mặt cuối của một đùn sẽ di chuyển khi chiều sâu thay đổi.
- **Dùng mẫu thay vì sao chép.** Một lỗ được tạo mẫu tám lần chỉ có một đường kính cần đổi.

## Vượt qua các con số đơn lẻ

- **Một con số điều khiển nhiều thứ:** dùng tham số và phương trình: [Điều khiển chi tiết bằng tham số](topic:parameters).
- **Nhiều kích cỡ của một chi tiết:** lưu từng cái thành một [cấu hình](topic:design-tables); chúng được giữ trong tệp chi tiết.
- **Tính toán trong một ô số:** nhập `=40/2` hoặc `=width / 2`. Điều đó tạo thành một phương trình; xem [Phương trình hai chiều](topic:equations-two-way).
- **Đơn vị inch:** chi tiết hiển thị milimét. Trong ô số có `=`, hoặc trong một tham số, `2in` được đổi thành 50.8.

Xem [Những gì chưa được xây dựng](topic:not-built-yet).
