---
title: Bo góc, vát mép và làm rỗng
summary: Chọn cạnh và thêm bo góc hoặc vát mép với bán kính cố định hoặc thay đổi, cùng vát mép khoảng cách bằng nhau, hai khoảng cách hoặc khoảng cách và góc; làm rỗng chi tiết bằng Vỏ bằng cách chọn các mặt cần mở; đổi cạnh hoặc mặt mà một đặc trưng dùng; và sửa các lỗi thường gặp.
keywords: bo góc, bo tròn, vát mép, vát, vỏ, làm rỗng, độ dày thành, cạnh, mặt, chọn cạnh, shift click, mặt mở, kernel chính xác, kernel lưới, chưa xây dựng
from: e41c1c12
---

:::note
**Trong phiên bản này** PartCraft dựng bo góc và vát mép bằng kernel lưới, chỉ trên **cạnh thẳng giữa hai mặt phẳng**: cạnh hộp và cạnh thẳng của phần đùn và phần cắt, ở góc ngoài hoặc góc trong (góc trong sẽ được thêm vật liệu). Các cạnh tròn như mép lỗ, và bán kính thay đổi dọc theo cạnh, chưa xây dựng. Khi hai cạnh bo gặp nhau ở một góc, các đường bo được cắt góc (chúng gặp nhau thành một nếp gấp sắc), không hòa trộn. **Vỏ** cũng hoạt động, được dựng bằng kernel lưới: nó chỉ mở mặt phẳng, các vỏ có độ dày thành khác nhau chưa xây dựng, và nó chậm trên chi tiết có nhiều mặt tròn. Xem [Chưa xây dựng](topic:not-built-yet).
:::

{{ui:Bo góc}} bo tròn các cạnh, {{ui:Vát mép}} vát chúng và {{ui:Vỏ}} làm rỗng chi tiết. Cả ba hoạt động trên cạnh và mặt của khối đặc và được dựng bằng kernel lưới. Các đường bo được xấp xỉ như mọi mặt tròn khác (**Đường cong** quyết định độ mịn); các mặt tròn là hình trụ mà bạn có thể chọn và đo (xem [Kernel lưới](topic:solid-kernels)).

## Bo góc hoặc vát mép các cạnh

### Chọn cạnh trước

1. Nhấp vào một cạnh của chi tiết. Cả cạnh được tô sáng, và bảng bên phải hiển thị **Cạnh**: loại của nó (Thẳng, Vòng tròn hoặc cung, Đường cong), chiều dài và các mặt nó nằm giữa.
2. Để thêm cạnh, {{key:Shift}}+nhấp vào chúng. Mỗi cạnh được đánh dấu; {{key:Shift}}+nhấp vào một cạnh đã đánh dấu để bỏ nó. Tiêu đề bảng đếm chúng ("4 cạnh"), và thanh trạng thái hiển thị "Đã chọn 4 cạnh. Bo góc hoặc Vát mép sẽ áp dụng; Shift+nhấp để chọn thêm, Esc để xóa."
3. Chọn {{ui:Bo góc}} hoặc {{ui:Vát mép}} trên thanh công cụ, hoặc các nút tương tự trong bảng bên phải.

Đặc trưng được thêm với mọi cạnh đã chọn: bo 2 mm, hoặc vát 1 mm. Thanh trạng thái hiển thị, ví dụ, "Đã thêm Fillet1 (4 cạnh). Đổi kích thước ở bên phải; Chọn cạnh để đổi cạnh nào được dùng."

### Hoặc thêm đặc trưng trước

1. Khi chưa chọn gì, chọn {{ui:Bo góc}} hoặc {{ui:Vát mép}}.
2. PartCraft chuyển sang chế độ chọn: tiêu đề bảng bên phải ghi "Fillet1: đang chọn", chi tiết hiển thị như trước khi bo góc (bảng nói như vậy), và thanh công cụ hiển thị {{ui:Xong}}.
3. Nhấp vào mỗi cạnh để thêm; nhấp lại để bỏ. Thanh trạng thái đếm chúng.
4. Chọn {{ui:Xong}} (hoặc {{ui:Chọn xong}} trong bảng), hoặc nhấn {{key:Esc}} hoặc {{key:Enter}}.

### Cài đặt

| Cài đặt | Bo góc | Vát mép |
|---|---|---|
| Kích thước | **Bán kính (mm)**, mặc định 2 | **Khoảng cách (mm)** tính từ cạnh trên cả hai mặt, mặc định 1 |
| **Cạnh** | Số lượng | Số lượng |

Danh sách bên dưới nêu từng cạnh theo hai mặt nó nối, như "Cạnh 1: mặt cuối Extrude1 × mặt bên Extrude1". **Gỡ bỏ** xóa một cạnh. {{ui:Chọn cạnh}} quay lại chế độ chọn. Nhấp đúp vào đặc trưng trong lịch sử cũng làm điều tương tự.

Cạnh được ghi nhớ theo hai mặt nó nối, nên chúng vẫn đúng cạnh khi bạn đổi kích thước ở phía trước trong lịch sử.

### Bán kính thay đổi và các kiểu vát mép

- **Bán kính thay đổi** (bo góc): chưa xây dựng trong phiên bản này ("Bo góc có bán kính thay đổi dọc theo cạnh: chưa xây dựng (cần kernel chính xác). Dùng một bán kính."). Với kernel chính xác: đánh dấu và đặt **Bán kính cuối (mm)**. Bán kính thay đổi tuyến tính từ **Bán kính** ở một đầu của mỗi cạnh đến **Bán kính cuối** ở đầu kia; **Đổi hai đầu** lật lại.
- **Kiểu** (vát mép): **Khoảng cách bằng nhau**, **Hai khoảng cách** (với **Khoảng cách thứ hai** trên mặt kia), hoặc **Khoảng cách và góc** (khoảng cách trên một mặt, mép vát ở **Góc (°)** với mặt đó). **Đổi phía** đặt khoảng cách đầu tiên lên mặt kia.

## Làm rỗng chi tiết

1. Nhấp vào mặt phẳng để mở, ví dụ mặt trên của một hộp. Hoặc {{key:Shift}}+nhấp nhiều mặt.
2. Chọn {{ui:Vỏ}} trên thanh công cụ, hoặc {{ui:Vỏ, mở mặt này}} trong bảng của mặt.

Chi tiết trở thành một thành dày 2 mm với các mặt đã chọn mở. Cài đặt:

| Cài đặt | Tác dụng | Mặc định |
|---|---|---|
| **Thành (mm)** | Độ dày thành | 2 |
| **Thành mở rộng ra ngoài (các mặt giữ ở bên trong)** | Được đánh dấu: các thành được thêm ra bên ngoài, nên bên trong giữ kích thước chi tiết | Tắt: các thành đi vào trong, và bên ngoài giữ kích thước |
| **Mặt mở** | Số mặt bị loại bỏ | |

Đi vào trong, các thành có đúng độ dày thành: góc ngoài vẫn sắc, góc trong được bo tròn (bán kính bằng thành), và một lỗ xuyên qua chi tiết có một ống thành bao quanh. Đi ra ngoài, các thành được thêm bên ngoài bề mặt gốc, và bề mặt gốc trở thành phần rỗng; các cạnh ngoài được bo tròn. Các mặt bên trong được đặt tên theo các mặt mà chúng dời song song, nên bạn có thể chọn chúng.

Chỉ mặt phẳng mới mở được: nếu chọn mặt cong, thông báo "Vỏ: trong phiên bản này chỉ mở được mặt phẳng (kernel lưới dựng được)." Vỏ chậm trên chi tiết có nhiều mặt tròn (vài giây cho mỗi nghìn tam giác): dùng cài đặt **Đường cong** thô hơn khi thiết kế.

{{ui:Chọn mặt}} thay đổi mặt nào đang mở, theo cách như chọn cạnh. Danh sách nêu từng mặt, như "Mặt 1: mặt cuối Extrude1". Vỏ không có mặt mở là không được phép: "Chọn các mặt cần loại bỏ (mở), rồi làm vỏ."

## Thứ tự quan trọng

Các đặc trưng dựng từ trên xuống dưới. Bo góc đặt trước vỏ sẽ được làm vỏ cùng chi tiết, nên bên trong cũng có góc bo. Bo góc đặt sau vỏ chỉ bo các cạnh bạn chọn. Di chuyển đặc trưng bằng {{ui:Lên}} và {{ui:Xuống}} (xem [Thay đổi chi tiết qua lịch sử](topic:edit-history)).

Mẫu lặp và đối xứng không thể sao chép bo góc, vát mép hay vỏ: "Fillet1 thay đổi cạnh hoặc thành của thân; nó không thể được sao chép. Sao chép các đặc trưng tạo khối đặc (đùn, quay tròn, lỗ, nhập vào)." Tạo mẫu lặp các lỗ hoặc các phần cắt trước, rồi bo góc tất cả cạnh của các bản sao trong một lần bo góc.

## Khi lỗi

| Thông báo | Cần làm gì |
|---|---|
| "Bo góc 5 mm không vừa ở đây (nó quá lớn so với một mặt liền kề với một trong các cạnh, hoặc các cạnh gặp nhau ở một góc mà kernel không thể hòa trộn)." | Dùng bán kính nhỏ hơn, hoặc bo ít cạnh hơn mỗi lần (nhiều đặc trưng bo góc, nhỏ nhất đặt cuối) |
| "Một cạnh nó bo đã mất: cạnh giữa Extrude1 và Cut2." | Một thay đổi trước đó đã xóa cạnh đó. Chọn {{ui:Chọn cạnh}}, gỡ cạnh màu đỏ và chọn cạnh mới |
| "Vỏ không thể tạo với độ dày này (…)." | Thành dày hơn một phần hẹp của mô hình, hoặc dày hơn bán kính bo góc. Làm thành mỏng hơn, hoặc làm bo góc lớn hơn thành |
| "Mặt đó không có tên mà lịch sử có thể theo dõi; chọn mặt khác." | Chọn một mặt do đặc trưng tạo ra (hầu hết các mặt là vậy) |
| "Fillet: trong phiên bản này chỉ hỗ trợ cạnh thẳng giữa hai mặt phẳng (kernel lưới dựng được). Bo tròn hoặc vát mép các cạnh cong trong phác thảo." (cũng với Chamfer) | Một cạnh được chọn là tròn, như mép lỗ, hoặc nằm trên mặt cong. Gỡ nó bằng {{ui:Chọn cạnh}}, và bo tròn hoặc vát mép góc đó trong phác thảo thay thế |
| "Bo góc có bán kính thay đổi dọc theo cạnh: chưa xây dựng (cần kernel chính xác). Dùng một bán kính." | Bỏ đánh dấu **Bán kính thay đổi** |
| "Fillet bằng kernel lưới: nơi các cạnh bo gặp nhau chúng được cắt góc, không được hòa trộn." (⚠ trong lịch sử) | Đây là cảnh báo, không phải lỗi: chi tiết đã được dựng. Các cạnh được chọn gặp nhau ở một góc, và các đường bo gặp nhau ở đó thành một nếp gấp sắc. Bo ít cạnh hơn, hoặc chấp nhận nếp gấp |
| "Vỏ: trong phiên bản này chỉ mở được mặt phẳng (kernel lưới dựng được)." | Một mặt mở là mặt cong. Dùng {{ui:Chọn mặt}} và bỏ nó; chỉ mở các mặt phẳng |

## Giới hạn

Trong phiên bản này, bo góc và vát mép chỉ hoạt động trên cạnh thẳng giữa hai mặt phẳng, với một bán kính, và các đường bo gặp nhau ở góc được cắt góc. Vỏ chỉ mở mặt phẳng. Với kernel chính xác, bo góc có bán kính thay đổi biến thiên tuyến tính dọc mỗi cạnh (một quy luật cho mỗi đặc trưng; không có bán kính tại các điểm dọc theo nó). Bo góc mặt, bo tròn toàn phần và vỏ có độ dày thành khác nhau đều chưa xây dựng.
