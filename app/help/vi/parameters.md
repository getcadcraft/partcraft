---
title: Điều khiển chi tiết bằng tham số
summary: Đặt tên các kích thước quan trọng (chiều rộng, độ dày, cỡ bulông), liên kết mọi số đặc trưng hoặc kích thước phác thảo với chúng bằng =, và đổi cả chi tiết từ một bảng.
keywords: tham số, nơi dùng, được dùng bởi, biến toàn cục, biến, phương trình, ý đồ thiết kế, kích thước điều khiển, liên kết, biểu thức, công thức, đặt tên kích thước, giá trị đã liên kết
from: 58c646ea
---

Tham số là một số có tên, như `width = 120` hoặc `margin = bolt * 1.5`. Liên kết chiều sâu, đường kính lỗ, số lượng mẫu lặp hoặc kích thước phác thảo với nó, và đổi tham số sẽ đổi tất cả trong một bước. Đây là cách bạn giữ ý đồ thiết kế trong chi tiết thay vì trong đầu bạn.

## Thêm tham số

1. Trong bảng bên phải, nhấp thẻ {{ui:Tham số}}.
2. Dưới **Biến**, gõ một tên vào ô "tên", ví dụ `width`.
3. Gõ giá trị của nó vào ô kế tiếp, ví dụ `120`, rồi nhấn {{key:Enter}} (hoặc nhấp {{ui:Thêm}}).

Một giá trị có thể là một số hoặc một biểu thức của các tham số khác: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Cột **Giá trị** hiển thị kết quả tính được. Tên bắt đầu bằng chữ cái hoặc `_` và chỉ có chữ cái, chữ số và `_`; tên hàm và đơn vị (`sin`, `mm`, `pi`) bị từ chối, và vòng lặp như `a = b` với `b = a` cũng vậy.

## Liên kết một số với tham số

1. Nhấp một đặc trưng trong lịch sử, ví dụ "Extrude1". Cài đặt của nó hiện trên thẻ {{ui:Thuộc tính}}.
2. Trong ô số, ví dụ **Chiều sâu (mm)**, gõ `=` và một biểu thức: `=thick` hoặc `=width / 4`.
3. Nhấn {{key:Enter}}.

Ô giờ hiển thị kết quả, và một nút **ƒ** xuất hiện bên cạnh nhãn của nó. Đưa con trỏ tới để xem phương trình. Kích thước phác thảo hoạt động tương tự, cả trong danh sách **Kích thước phác thảo** của một đặc trưng và trong ô kích thước của một phác thảo đang mở (nhấp đúp một kích thước, gõ `=width`, nhấn {{key:Enter}}).

Các số bạn có thể liên kết: chiều sâu đùn, góc quay tròn, đường kính lỗ, kích thước chiều sâu và khoét lòng chìm, số lượng mẫu lặp, khoảng cách và góc, bán kính bo góc, khoảng cách vát mép, độ dày thành vỏ, mọi kích thước phác thảo, và kích thước của các đặc trưng mới hơn (chiều sâu thứ hai, côn, khoét côn (countersink), khoảng cách mặt phẳng tham chiếu, góc nghiêng khuôn và các cái khác).

## Đổi tham số

Trên thẻ {{ui:Tham số}}, gõ một giá trị hoặc biểu thức mới trong cột **Biểu thức** và nhấn {{key:Enter}}. Mọi thứ liên kết với nó thay đổi và chi tiết được dựng lại, như một bước: {{key:Mod+Z}} hoàn tác nó.

Để đổi một số từ đầu kia, xem [Phương trình hai chiều](topic:equations-two-way).

## Xem tham số được dùng ở đâu

Dưới mỗi tham số trên thẻ {{ui:Tham số}}, một dòng cho biết những gì dùng nó:

- các số nó điều khiển, như **Extrude1 depth** hoặc **Sketch1 D2 (distance)**. Nhấp một cái để chọn đặc trưng của nó và hiển thị thuộc tính;
- các số nó điều khiển **qua** các tham số khác, như **Hole1 diameter (through h, d)** khi `d = h + 2` và `h = w / 2`;
- các **tham số** có biểu thức dùng nó, các **cấu hình** đặt nó, và các **kịch bản** đọc nó (xem [Viết và chạy kịch bản](topic:craftscript)).

"Chưa dùng." nghĩa là không có gì dùng nó: bạn có thể xóa mà không cần hỏi.

## Hủy liên kết, đổi tên, xóa

- **Hủy liên kết một số:** nhấp nút **ƒ** của nó, hoặc {{ui:Bỏ liên kết}} trong danh sách **Phương trình**. Nó giữ giá trị hiện tại và không còn tham số nào đổi nó nữa.
- **Đổi tên tham số:** gõ tên mới vào ô **Tên** của nó. Mọi biểu thức dùng nó sẽ được viết lại.
- **Xóa tham số:** nhấp × ở dòng của nó. Nếu có gì đó dùng nó, PartCraft hỏi có ghi giá trị hiện tại của nó vào các biểu thức đó trước không.
- **Xóa một đặc trưng** bỏ các phương trình của các số của nó; thanh trạng thái cho biết những phương trình nào.

:::note
Tham số được lưu trong tệp `.partcraft.json` (phiên bản tệp 3). Chi tiết không có tham số được lưu y như trước.
:::

## Biểu thức

| Viết | Nghĩa |
|---|---|
| `120`, `12.5`, `1e3` | một số (milimét, hoặc độ đối với góc) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | một chiều dài theo đơn vị khác, đổi thành milimét |
| `30deg`, `0.5rad` | một góc, đổi thành độ |
| `+ - * / %` và `^` | phép tính; `^` là lũy thừa, `-2^2` là −4 |
| `sin cos tan asin acos atan atan2` | lượng giác theo độ |
| `sqrt pow exp ln log abs sign` | các hàm khác |
| `ceil floor int round(x, digits) min max` | làm tròn và giới hạn |
| `if(test, a, b)` với `< <= > >= == !=` | một lựa chọn: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Tên phân biệt chữ hoa và chữ thường: `Width` và `width` là hai tham số.

Xem thêm [Cấu hình và bảng thiết kế](topic:design-tables) và [Kịch bản và dòng lệnh](topic:scripts-and-cli).
