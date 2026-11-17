---
title: Vẽ phác thảo đầu tiên
summary: Mở một phác thảo trên mặt phẳng hoặc mặt phẳng đầu, vẽ đường thẳng, hình chữ nhật, vòng tròn, cung tròn, điểm và đường tâm, bo một góc, chọn, kéo và xóa.
keywords: phác thảo, vẽ, đường thẳng, hình chữ nhật, vòng tròn, cung tròn, điểm, đường tâm, dựng, bo góc, bo góc phác thảo, bo tròn góc, bắt điểm, chọn, cửa sổ, kéo, biên dạng
from: 28be7436
---

Mọi khối đặc đều bắt đầu từ một phác thảo: một bản vẽ phẳng trên một mặt phẳng. Hướng dẫn này trình bày các công cụ vẽ. Việc cố định phác thảo bằng quan hệ và kích thước được nêu trong [Xác định đầy đủ một phác thảo](topic:relations-dimensions).

## Bắt đầu phác thảo

Bạn có thể phác thảo trên mặt phẳng cơ sở hoặc trên bất kỳ mặt phẳng nào của chi tiết.

1. Chọn nơi phác thảo:
   - một mặt phẳng cơ sở: nhấn **Mặt phẳng trước**, **Mặt phẳng trên** hoặc **Mặt phẳng phải** trong lịch sử, hoặc nhấn mặt phẳng trong khung nhìn;
   - một mặt phẳng đầu: nhấn mặt trong khung nhìn. Toàn bộ mặt sẽ được tô sáng.
2. Chọn {{ui:Sketch}} trên thanh công cụ hoặc nhấn {{key:S}}. (Khi đã chọn một mặt, bạn cũng có thể chọn {{ui:Sketch on this face}} trong bảng bên phải; với mặt phẳng, chọn {{ui:Sketch on it}}.)

Khung nhìn xoay vuông góc với mặt phẳng, các công cụ phác thảo xuất hiện trên thanh công cụ, và công cụ {{ui:Line}} sẵn sàng. Nếu nhấn {{ui:Sketch}} khi chưa chọn gì, các mặt phẳng cơ sở sẽ hiện ra và thanh trạng thái ghi "Nhấn một mặt phẳng hoặc một mặt phẳng đầu để phác thảo. Esc để dừng."

:::note
Mặt cong không thể chứa phác thảo: "Mặt này cong. Chọn một mặt phẳng hoặc một mặt phẳng đầu để phác thảo."
:::

**Phác thảo trên một mặt sẽ đi theo mặt đó.** Nếu mặt được tạo bởi cạnh của một phác thảo hoặc đầu của một đùn, phác thảo mới sẽ di chuyển khi đặc trưng thay đổi (một túi sâu hơn sẽ kéo theo phác thảo trên đáy của nó). Nếu bảng ghi mặt là "Cố định tại vị trí đã chọn", phác thảo sẽ giữ nguyên tại vị trí mặt hiện tại.

## Các công cụ vẽ

Mỗi công cụ có một nút trên thanh công cụ và một phím tắt. Chọn lại cùng nút, nhấn {{key:S}}, hoặc nhấn {{key:Esc}} để quay về chế độ Chọn.

| Công cụ | Phím | Cách vẽ |
|---|---|---|
| {{ui:Line}} | {{key:L}} | Nhấn điểm đầu, rồi nhấn từng điểm tiếp theo. Các đường nối tiếp nhau đầu cuối. Kết thúc chuỗi bằng {{key:Esc}}, {{key:Enter}}, nhấp chuột phải hoặc nhấp đúp. Nhấn vào một điểm đã có cũng kết thúc chuỗi |
| {{ui:Rectangle}} | {{key:R}} | Nhấn một góc, rồi góc đối diện. Bạn sẽ có bốn đường nối tại các góc, hai đường ngang và hai đường đứng |
| {{ui:Circle}} | {{key:C}} | Nhấn tâm, rồi một điểm trên đường tròn |
| {{ui:Arc}} | {{key:A}} | Nhấn tâm, rồi điểm đầu, rồi điểm cuối. Cung chạy theo chiều bạn di chuyển con trỏ quanh tâm |
| {{ui:Point}} | {{key:P}} | Nhấn. Một điểm đứng riêng đánh dấu tâm lỗ cho {{ui:Hole}} |
| {{ui:Centerline}} | {{key:N}} | Giống đường thẳng, từng đoạn một. Vẽ bằng nét đứt; đây là hình học dựng, dùng làm trục quay tròn hoặc tham chiếu |
| {{ui:Fillet}} | {{key:F}} | Nhấn một góc nơi hai đường gặp nhau, nhập bán kính, rồi nhấn {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Nhấn các điểm mà đường cong đi qua; {{key:Enter}} kết thúc, nhấn điểm đầu tiên sẽ khép kín. Xem [Spline, cắt, dời song song và các công cụ phác thảo khác](topic:sketch-tools) |
| {{ui:Trim}} | {{key:T}} | Nhấn đoạn đường cong cần bỏ, đến các điểm giao gần nhất |
| {{ui:Dimension}} | {{key:D}} | Xem [Xác định đầy đủ một phác thảo](topic:relations-dimensions) |

Khi bạn vẽ, một hộp nhỏ cạnh con trỏ hiển thị chiều dài, kích thước, đường kính hoặc bán kính.

### Nhập kích thước khi vẽ

Sau cú nhấn đầu tiên của đường thẳng, hình chữ nhật, vòng tròn hoặc cung tròn, bạn có thể nhập kích thước thay vì nhấn. Gõ một số sẽ mở hộp cạnh con trỏ với số đó:

| Công cụ | Các ô nhập ({{key:Tab}} chuyển sang ô tiếp theo) | Điều xảy ra khi nhấn {{key:Enter}} |
|---|---|---|
| {{ui:Line}}, {{ui:Centerline}} | Chiều dài, rồi Góc (°) tính từ trục X của phác thảo | Đường được vẽ dài bằng số đó, theo hướng con trỏ hoặc theo góc đã nhập; chuỗi tiếp tục từ điểm cuối của nó |
| {{ui:Rectangle}} | Chiều rộng, rồi Chiều cao | Hình chữ nhật được vẽ từ góc đầu theo hướng con trỏ; kích thước không nhập sẽ lấy từ con trỏ |
| {{ui:Circle}} | Đường kính | Vòng tròn được vẽ với đường kính đó |
| {{ui:Arc}} | Bán kính sau tâm, rồi Góc cung (°) sau điểm đầu | Điểm đầu nằm cách tâm một khoảng bằng bán kính; rồi cung quay đi một góc bằng góc cung, theo chiều bạn đã di chuyển con trỏ |

Mỗi kích thước bạn nhập trở thành một **kích thước điều khiển** trong cùng bước, nên phác thảo có kích thước ngay: {{key:Mod+Z}} sẽ xóa hình dạng và các kích thước của nó cùng lúc. Nhấn chuột thay vì nhấn {{key:Enter}} sẽ giữ giá trị bạn đã nhập và lấy phần còn lại từ cú nhấn. {{key:Esc}} đóng hộp và quay về con trỏ.

Tắt tính năng này trong {{ui:Settings}} › {{ui:PartCraft}} › **Kích thước khi vẽ** nếu bạn chỉ muốn vẽ bằng cách nhấn chuột. Xem [Cài đặt PartCraft](topic:settings).

{{ui:More}}, ở cuối các công cụ phác thảo, chứa spline điểm điều khiển, Kéo dài, Dời song song, Đối xứng, Đa giác, Rãnh, các mẫu lặp phác thảo và Chiếu cạnh: xem [Spline, cắt, dời song song và các công cụ phác thảo khác](topic:sketch-tools).

### Bắt điểm

Bắt điểm tự thêm quan hệ cho bạn, để phác thảo vẫn liền khi di chuyển:

- Trên **điểm cuối hoặc gốc tọa độ**, một ô vuông nhỏ hiện ra. Điểm mới được làm trùng với điểm đó.
- Trên **đường thẳng, vòng tròn hoặc cung tròn**, một dấu chữ thập nhỏ hiện ra. Điểm mới được đặt trên đường cong đó.
- Một đường thẳng lệch không quá 3 độ so với phương ngang hoặc phương đứng sẽ bắt vào đó và nhận quan hệ ngang hoặc đứng. Nhãn hiển thị "H" hoặc "V".

Để tránh bắt điểm, phóng to để nhấn cách xa điểm hoặc đường cong hơn.

## Bo một góc

1. Nhấn {{key:F}} hoặc chọn {{ui:Fillet}}.
2. Nhấn điểm góc nơi hai đường gặp nhau.
3. Một hộp mở ra với bán kính gợi ý. Nhập bán kính và nhấn {{key:Enter}}.

Cả hai đường được cắt và nối bằng một cung tiếp tuyến có kích thước bán kính. Các thông báo bạn có thể thấy: "Bo góc cần một góc nơi đúng hai đường gặp nhau." và "Bán kính này quá lớn cho các đường này."

:::tip
Bo góc phác thảo làm tròn một góc của biên dạng, nên khối đùn sẽ có các cạnh đứng đã được bo. Để bo các cạnh của chính khối đặc (ví dụ các cạnh trên của một tấm), dùng đặc trưng {{ui:Fillet}} trên chi tiết: xem [Bo tròn, vát mép và rỗng](topic:fillet-chamfer-shell). Trong phác thảo, {{ui:Fillet}} trên thanh công cụ là công cụ phác thảo; trên chi tiết, nó là đặc trưng.
:::

## Hình học dựng

Đường thẳng, vòng tròn và cung tròn dựng có nét đứt và màu xám. Chúng dẫn hướng phác thảo nhưng không thuộc biên dạng được đùn hoặc quay tròn.

1. Chọn các đường thẳng, vòng tròn hoặc cung tròn.
2. Nhấn {{key:Q}} hoặc chọn {{ui:Construction}}. Nhấn lại để chuyển chúng về như cũ.

## Chọn, kéo và xóa

Nhấn {{key:S}} (hoặc {{key:Esc}} cho đến khi không có công cụ nào đang hoạt động) để chọn chế độ Chọn.

- Nhấn một điểm, đường thẳng, vòng tròn, cung tròn, ký hiệu quan hệ hoặc kích thước để chọn nó. {{key:Shift}}+nhấn để thêm vào vùng chọn hoặc bỏ bớt. Trên Windows và Linux, {{key:Ctrl}}+nhấn làm điều tương tự; trên Mac, ⌘+nhấn.
- Kéo trên khoảng trống để vẽ cửa sổ chọn: mọi thứ nằm hoàn toàn bên trong đều được chọn.
- Kéo một điểm hoặc một đường thẳng để di chuyển nó. Bộ giải giữ mọi quan hệ và kích thước khi di chuyển, nên chỉ hình học tự do mới di chuyển. Kéo cạnh của một vòng tròn để đổi bán kính của nó.
- Kéo số của một kích thước để di chuyển nhãn.
- Nhấn {{key:Delete}} hoặc {{key:Backspace}}, hoặc chọn {{ui:Delete}} trong bảng bên phải, để xóa vùng chọn. Xóa hình học cũng xóa các quan hệ trên nó.

## Thu phóng và di chuyển khung nhìn trong phác thảo

- Lăn bánh xe để thu phóng tại con trỏ.
- Kéo bằng nút giữa hoặc nút phải để di chuyển khung nhìn.
- {{ui:Fit}} trên thanh công cụ hoặc trong bảng bên phải đưa phác thảo vừa khung nhìn. Trong phác thảo, phím {{key:F}} là công cụ Bo góc, không phải Vừa khung.

## Đóng phác thảo

Chọn {{ui:Exit}} trên thanh công cụ hoặc {{ui:Exit sketch}} trong bảng bên phải, hoặc nhấn {{key:Esc}} cho đến khi phác thảo đóng. Mỗi lần nhấn {{key:Esc}} trước hết hủy thao tác đang thực hiện, rồi quay về chế độ Chọn, rồi bỏ vùng chọn; lần tiếp theo sẽ đóng phác thảo.

Phác thảo vẫn được chọn, nên {{ui:Extrude}} hoặc {{ui:Revolve}} tiếp theo sẽ dùng nó.

## Biên dạng tốt gồm những gì

{{ui:Extrude}} và {{ui:Revolve}} dùng **mọi vòng kín** gồm các đường thẳng, vòng tròn, cung tròn và spline của phác thảo (không phải hình học dựng). Vòng nằm trong vòng sẽ thành lỗ.

- Mỗi đầu mút phải gặp đúng một đầu mút khác. "Biên dạng đang hở: đầu mút tại (12.5, 40) không nối với gì cả." chỉ ra vị trí đó.
- Không được có ba đầu mút gặp nhau tại một điểm: "Biên dạng bị rẽ nhánh tại (0, 20): có hơn hai đầu mút gặp nhau tại đó."
- Điểm và hình học dựng bị biên dạng bỏ qua.

Tiếp theo: [Xác định đầy đủ một phác thảo bằng quan hệ và kích thước](topic:relations-dimensions).

## Phác thảo từ ảnh

**Đặc trưng › Thêm › Phác thảo từ ảnh…** (hoặc nhóm Phác thảo trên dải lệnh cây đặc trưng) vẽ lại theo ảnh một chi tiết phẳng trên nền trơn — đường bao và các lỗ của nó — hoặc một bản vẽ bằng bút thành phác thảo gồm đường thẳng, cung tròn và vòng tròn. Nhập một kích thước (chiều rộng, chiều cao hoặc cạnh dài nhất) để phác thảo có đúng kích thước, kiểm tra kết quả nhận được trong bản xem trước, rồi chọn **Tạo phác thảo**; bạn cũng có thể đùn luôn trong cùng một bước hoàn tác. Việc vẽ lại được thực hiện trên máy tính này. Bán kính góc đạt sai lệch khoảng 5 %, các chi tiết nhỏ cỡ một hoặc hai điểm ảnh sẽ mất, và ảnh chụp nghiêng hoặc có bóng đổ qua chi tiết sẽ không được nắn thẳng: chụp chi tiết vuông góc, dưới ánh sáng đều.
