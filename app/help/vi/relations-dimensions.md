---
title: Xác định đầy đủ phác thảo bằng ràng buộc và kích thước
summary: Thêm ràng buộc từ bảng bên phải và kích thước bằng công cụ Kích thước, đọc các màu chưa xác định đủ, đã xác định đủ và xác định thừa, và sửa một phác thảo bị xác định thừa.
keywords: ràng buộc, quan hệ, kích thước, kích thước thông minh, xác định đủ, chưa xác định đủ, xác định thừa, bậc tự do, trùng nhau, ngang, đứng, song song, vuông góc, tiếp tuyến, bằng nhau, đồng tâm, trung điểm, cố định, xung đột, dư thừa
from: e76d047a
---

Phác thảo **đã xác định đủ** khi mọi điểm và mọi kích thước đều được cố định bởi ràng buộc và kích thước. Phác thảo đã xác định đủ chỉ thay đổi khi bạn đổi một số, nên chi tiết cư xử có thể đoán trước khi bạn sửa nó sau này. PartCraft không buộc bạn phải xác định đủ phác thảo, nhưng luôn cho biết bạn đang ở mức nào.

## Đọc trạng thái phác thảo

Trạng thái hiện ở ba nơi: chip ở góc trên bên trái khung nhìn, thông báo ở đầu bảng bên phải, và cờ trong lịch sử.

| Trạng thái | Chip | Màu hình học | Ý nghĩa |
|---|---|---|---|
| Chưa xác định đủ | "Chưa xác định đủ · 3 bậc tự do" | Xanh dương | Một số hình học vẫn có thể di chuyển. Kéo hình học xanh để xem nó đi theo hướng nào |
| Đã xác định đủ | "Đã xác định đủ" | Mực (đen trên Giấy, sáng trên Mô hình) | Mọi điểm và kích thước đều được cố định |
| Xác định thừa | "Xác định thừa" | Đỏ trên các ràng buộc liên quan | Một số ràng buộc mâu thuẫn nhau, hoặc một ràng buộc đã được suy ra từ các ràng buộc khác |

Hình học dựng luôn màu xám và nét đứt, bất kể trạng thái. Đối tượng được chọn có màu cam. "Bậc tự do" là một cách mà thứ gì đó vẫn có thể di chuyển: một điểm tự do có hai (trái-phải và lên-xuống), một đường tròn tự do có ba (tâm và bán kính).

Chú giải dưới thông báo trong bảng bên phải lặp lại các màu này.

## Thêm kích thước

1. Nhấn {{key:D}} hoặc chọn {{ui:Kích thước}}.
2. Nhấp vào thứ cần đo:
   - **một đường thẳng**: chiều dài của nó;
   - **một đường tròn**: đường kính của nó; **một cung**: bán kính của nó;
   - **hai điểm** (điểm cuối, tâm, điểm rời hoặc gốc tọa độ): khoảng cách giữa chúng;
   - **một điểm và một đường thẳng**: khoảng cách từ điểm đến đường thẳng;
   - **hai đường thẳng song song**: khoảng cách giữa chúng; **hai đường thẳng tạo góc**: góc giữa chúng.
3. Sau một đối tượng, thanh trạng thái ghi "Nhấp đối tượng thứ hai, hoặc nhấp nơi đặt kích thước." Nhấp đối tượng thứ hai, hoặc nhấp vào khoảng trống nơi bạn muốn đặt con số.
4. Một ô nhập mở ra với giá trị hiện tại. Gõ kích thước và nhấn {{key:Enter}}. {{key:Esc}} giữ giá trị đo được.

**Vị trí đặt con số quyết định loại kích thước** đối với đường nghiêng hoặc hai điểm: đặt phía trên hoặc phía dưới để có khoảng cách ngang, bên trái hoặc bên phải để có khoảng cách dọc, và ở nơi khác để có khoảng cách thật (kích thước song song).

Ô nhập nhận số thuần túy tính bằng milimét hoặc độ, như `25`, `12.5` hoặc `1e3`. Ký tự `⌀`, `Ø` hoặc `R` ở đầu, hoặc `mm` hoặc `°` ở cuối, sẽ bị bỏ qua. Góc từ 0 đến 180 độ. Phép tính như `20+5` không được chấp nhận; để liên kết một kích thước với biến hoặc công thức, hãy bắt đầu bằng `=`.

Để đổi kích thước sau này, nhấp đúp con số của nó trong phác thảo, hoặc chọn **Sửa** bên cạnh nó trong danh sách ở bảng bên phải.

:::tip
Bạn cũng có thể chọn hình học trước (công cụ Chọn) rồi chọn một nút kích thước trong bảng bên phải: {{ui:Khoảng cách}}, {{ui:Khoảng cách ngang}}, {{ui:Khoảng cách dọc}}, {{ui:Bán kính}}, {{ui:Đường kính}} hoặc {{ui:Góc}}. Chỉ các nút phù hợp với vùng chọn mới được hiển thị. Đây là cách để cho một đường tròn bán kính thay vì đường kính.
:::

## Thêm ràng buộc

Ràng buộc được thêm từ bảng bên phải, không phải bằng một công cụ.

1. Nhấn {{key:S}} để chọn.
2. Nhấp một đối tượng, rồi {{key:Shift}}+nhấp đối tượng thứ hai nếu ràng buộc cần hai. Gốc tọa độ cũng có thể được chọn.
3. Bảng bên phải ghi "Đã chọn: đường thẳng l3, điểm p1" và hiện một nút cho mỗi ràng buộc phù hợp, như {{ui:∥ Song song}} hoặc {{ui:• Trùng nhau}}.
4. Chọn nút. Phác thảo được giải ngay.

Nếu không có ràng buộc nào phù hợp, bảng ghi "Không có ràng buộc nào phù hợp với vùng chọn này. Chọn một hoặc hai đối tượng (Shift+nhấp để thêm)."

Danh sách đầy đủ các ràng buộc, mỗi loại cần gì và làm gì, nằm trong [Ràng buộc và kích thước phác thảo](topic:sketch-relations).

Ràng buộc hiện trong phác thảo dưới dạng ký hiệu nhỏ cạnh hình học (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Các chấm trùng nhau bị ẩn trừ khi hình học được chọn hoặc ràng buộc đang gặp vấn đề. Nhấp vào một ký hiệu để chọn ràng buộc đó.

## Ví dụ mẫu: biên dạng khung chữ L

1. Phác thảo trên **mặt phẳng chính diện**. Với công cụ Đường thẳng, bắt đầu tại gốc tọa độ và nhấp sáu góc của chữ L, kết thúc lại tại gốc. Chuỗi tự kết thúc khi bạn nhấp điểm đầu tiên.
2. Đường thẳng vẽ gần ngang hoặc gần đứng đã có ràng buộc H và V, trừ đường cuối cùng: đường kết thúc tại một điểm đã có sẵn sẽ không có ràng buộc tự động. Nhấn {{key:S}}, nhấp đường cuối cùng và chọn {{ui:V Đứng}} trong bảng bên phải. Chip ghi "Chưa xác định đủ · 4 bậc tự do".
3. Nhấn {{key:D}}. Nhấp đường đáy, nhấp phía dưới nó, gõ `80`, {{key:Enter}}.
4. Nhấp đường bên trái, nhấp phía bên trái của nó, gõ `60`, {{key:Enter}}.
5. Ghi kích thước đường ngắn ở trên cùng là `20` và đường đứng bên trong là `45` theo cách tương tự.
6. Chip giờ ghi **Đã xác định đủ** và toàn bộ chữ L chuyển sang màu mực.

## Sửa phác thảo bị xác định thừa

Khi một ràng buộc hoặc kích thước mới mâu thuẫn với các cái khác, PartCraft không di chuyển gì cả. Hình học giữ nguyên, các ràng buộc liên quan chuyển sang màu đỏ, và thanh trạng thái gọi tên chúng:

- "Xác định thừa: Ngang, Khoảng cách 40 không thể cùng được thỏa mãn. Hoàn tác, hoặc xóa một trong số đó." Các ràng buộc mâu thuẫn nhau.
- "Xác định thừa: Song song đã được suy ra. Hãy xóa nó." Ràng buộc không thêm gì: các ràng buộc khác đã buộc nó rồi. (Ví dụ, hai cạnh đối của hình chữ nhật đã song song.)

Để sửa:

1. Nhấn {{key:Mod+Z}} để hoàn tác thay đổi cuối cùng, hoặc
2. Tìm mục màu đỏ trong danh sách **Ràng buộc và kích thước** ở bảng bên phải (nhóm chứa nó được mở ra và có tên màu đỏ) và chọn **Xóa** bên cạnh nó. Bạn cũng có thể nhấp ký hiệu hoặc con số của nó trong phác thảo rồi nhấn {{key:Delete}}.

:::note
Bản dựng này không có kích thước theo dõi (tham chiếu). Một kích thước chỉ báo lại một số mà các ràng buộc khác đã cố định sẽ được coi là xác định thừa. Thay vào đó, hãy đọc kích thước trong bảng: chọn một đường thẳng và xem các nút Kích thước, hoặc kiểm tra thông tin chi tiết sau khi đùn.
:::

Phác thảo xác định thừa có mâu thuẫn thật sẽ làm đặc trưng dùng nó bị lỗi ("Xác định thừa: 1 ràng buộc không thể cùng được thỏa mãn."), và lịch sử đánh dấu **⚠ lỗi**. Phác thảo chỉ dư thừa vẫn được dựng, kèm cảnh báo ⚠.

## Kéo để tìm phần còn tự do

Trong Chọn, kéo bất kỳ điểm hoặc đường xanh nào. Bộ giải sẽ di chuyển nó ít nhất có thể trong khi giữ mọi ràng buộc. Nếu việc kéo làm vỡ một ràng buộc, hình học sẽ bật trở lại. Đây là cách nhanh nhất để thấy kích thước nào còn thiếu.

## Danh sách ràng buộc

Khi không có gì được chọn, bảng bên phải liệt kê **Ràng buộc và kích thước**. Mỗi hàng có:

- **Sửa** (chỉ kích thước): mở ô nhập số;
- **Chọn**: chọn nó trong phác thảo;
- **Xóa**: gỡ nó.

Các ràng buộc cùng loại xuất hiện nhiều hơn một lần dùng chung một hàng, như "Trùng nhau × 5" cho hình chữ nhật gắn với gốc tọa độ. Nhấp vào hàng để mở ra: mỗi ràng buộc được liệt kê theo thứ nó nối với nhau ("điểm p2, điểm p4") cùng với **Chọn** và **Xóa** riêng. Chính hàng đó có:

- **Chọn**: chọn tất cả chúng trong phác thảo;
- **Xóa tất cả**: xóa tất cả trong một bước ({{key:Mod+Z}} khôi phục chúng).

Nhóm chứa một ràng buộc xác định thừa sẽ tự mở ra, với tên bằng màu đỏ. Kích thước luôn được liệt kê, mỗi cái một hàng, kèm giá trị.

Khi có hình học được chọn, danh sách chỉ hiện **Ràng buộc của vùng chọn**.
