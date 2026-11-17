---
title: Quan hệ và kích thước phác thảo
summary: Mọi quan hệ và kích thước mà phác thảo PartCraft có, cần chọn gì cho từng loại, ký hiệu của nó và cách nó hoạt động khi giải.
keywords: quan hệ, ràng buộc, trùng nhau, ngang, đứng, song song, vuông góc, tiếp tuyến, bằng nhau, đồng tâm, trung điểm, cố định, khoảng cách, khoảng cách ngang, khoảng cách dọc, bán kính, đường kính, góc, ký hiệu, biểu tượng
from: 9831e7be
---

Quan hệ cố định cách hình học nằm so với hình học khác. Kích thước cố định độ lớn. Để thêm quan hệ, chọn đối tượng bằng công cụ Chọn ({{key:S}}) rồi chọn nút tương ứng trong bảng bên phải; để thêm kích thước, dùng công cụ {{ui:Dimension}} ({{key:D}}) hoặc các nút kích thước trong bảng bên phải. Cách làm việc với chúng: [Xác định đầy đủ một phác thảo](topic:relations-dimensions).

"Đường cong" ở dưới nghĩa là vòng tròn hoặc cung tròn. Gốc tọa độ được tính là một điểm.

## Quan hệ

| Nút | Ký hiệu | Chọn | Tác dụng |
|---|---|---|---|
| {{ui:• Trùng nhau}} | • (chỉ hiện khi được chọn hoặc khi có lỗi) | Hai điểm | Các điểm trùng nhau |
| {{ui:• Trùng nhau}} | • | Một điểm và một đường thẳng | Điểm nằm trên đường thẳng (hoặc phần kéo dài của nó) |
| {{ui:• Trùng nhau}} | • | Một điểm và một đường cong | Điểm nằm trên vòng tròn hoặc cung tròn |
| {{ui:H Ngang}} | H | Một đường thẳng, hoặc hai điểm | Đường thẳng nằm ngang, hoặc hai điểm có cùng độ cao |
| {{ui:V Đứng}} | V | Một đường thẳng, hoặc hai điểm | Đường thẳng thẳng đứng, hoặc các điểm nằm trên và dưới nhau |
| {{ui:∥ Song song}} | ∥ | Hai đường thẳng | Các đường thẳng chạy cùng hướng |
| {{ui:⊥ Vuông góc}} | ⊥ | Hai đường thẳng | Các đường thẳng gặp nhau tại góc vuông |
| {{ui:T Tiếp tuyến}} | T | Một đường thẳng và một đường cong | Đường thẳng chạm vào đường cong mà không cắt qua |
| {{ui:T Tiếp tuyến}} | T | Hai đường cong | Chúng chạm nhau, ngoài hoặc trong, theo cách đã vẽ |
| {{ui:T Tiếp tuyến}} | T | Một spline và một đường thẳng, cung tròn hoặc spline gặp một trong hai đầu của nó | Spline rời khỏi đầu đó theo hướng của đường cong kia |
| {{ui:= Bằng nhau}} | = | Hai đường thẳng | Cùng chiều dài |
| {{ui:= Bằng nhau}} | = | Hai đường cong | Cùng bán kính |
| {{ui:◎ Đồng tâm}} | ◎ | Hai đường cong | Cùng tâm |
| {{ui:◎ Đồng tâm}} | ◎ | Một điểm và một đường cong | Điểm nằm tại tâm của đường cong |
| {{ui:M Trung điểm}} | M | Một điểm và một đường thẳng | Điểm nằm giữa đường thẳng |
| {{ui:↔ Đối xứng}} | ↔ | Hai điểm và một đường thẳng | Các điểm đối xứng qua đường thẳng (Đối xứng tạo ra các quan hệ này) |
| {{ui:⚓ Cố định}} | ⚓ | Một điểm, một đường thẳng, một đường cong hoặc một spline | Giữ nó đúng tại vị trí hiện tại (với spline: các điểm của nó) |

Đường thẳng ở đây gồm cả đường tâm. Khi vẽ, một số quan hệ được thêm sẵn: bắt vào một điểm sẽ làm điểm đó trùng nhau, bắt vào một đường cong sẽ đặt điểm lên đường cong đó, đường thẳng gần nằm ngang hoặc thẳng đứng sẽ nhận H hoặc V, và hình chữ nhật có sẵn bốn góc nối với nhau, hai H và hai V.

**Cố định** là cách nhanh để ngăn một thứ di chuyển, nhưng khi đó chi tiết không thể theo thay đổi kích thước ở nơi khác. Nên ưu tiên kích thước đến gốc tọa độ.

## Kích thước

| Nút | Chọn | Đo | Hiển thị là |
|---|---|---|---|
| {{ui:Distance}} | Một đường thẳng | Chiều dài của nó | Khoảng cách 40 |
| {{ui:Distance}} | Hai điểm | Khoảng cách thẳng giữa chúng | Khoảng cách 40 |
| {{ui:Distance}} | Một điểm và một đường thẳng | Khoảng cách từ điểm đến đường thẳng, vuông góc với nó | Khoảng cách 40 |
| {{ui:Distance}} | Hai đường thẳng song song | Khoảng hở giữa chúng | Khoảng cách 40 |
| {{ui:Horizontal distance}} | Hai điểm, hoặc một đường thẳng | Chỉ khoảng cách trái–phải | Khoảng cách ngang 40 |
| {{ui:Vertical distance}} | Hai điểm, hoặc một đường thẳng | Chỉ khoảng cách trên–dưới | Khoảng cách dọc 40 |
| {{ui:Radius}} | Một vòng tròn hoặc cung tròn | Bán kính của nó | Bán kính R10 |
| {{ui:Diameter}} | Một vòng tròn hoặc cung tròn | Đường kính của nó | Đường kính ⌀20 |
| {{ui:Angle}} | Hai đường thẳng không song song | Góc giữa chúng, từ 0 đến 180 độ | Góc 30° |

Với công cụ Kích thước, PartCraft chọn loại kích thước theo những gì bạn nhấn và vị trí đặt số:

| Bạn nhấn | Bạn nhận được |
|---|---|
| Một đường thẳng | Chiều dài của nó; với đường nghiêng, là khoảng cách ngang nếu số nằm phía trên hoặc phía dưới, là khoảng cách dọc nếu số nằm bên cạnh |
| Một vòng tròn | Đường kính |
| Một cung tròn | Bán kính |
| Hai điểm | Khoảng cách; ngang hoặc dọc như với đường thẳng nghiêng |
| Một điểm và một đường thẳng | Khoảng cách từ điểm đến đường thẳng |
| Hai đường thẳng | Góc, hoặc khoảng cách nếu chúng song song |
| Một điểm và một vòng tròn | Không có gì: "Không thể ghi kích thước cho các đối tượng này cùng nhau." Thay vào đó, ghi kích thước đến điểm tâm của vòng tròn |

**Dời song song** (hiển thị như khoảng cách) được tạo bởi công cụ Dời song song: nó giữ một đường sao chép song song ở khoảng cách đó, hoặc một cung tròn hay vòng tròn sao chép đồng tâm với bán kính lớn hơn hoặc nhỏ hơn đúng bằng khoảng cách đó. Các phần khác của cùng lần dời song song mang quan hệ **O** và theo kích thước Dời song song duy nhất. Xem [Spline, cắt, dời song song và các công cụ phác thảo khác](topic:sketch-tools).

Giá trị kích thước tính bằng milimét (hoặc độ), không bao giờ âm. Bán kính và đường kính phải lớn hơn không. Giá trị 0 được phép với khoảng cách: hai điểm cách nhau 0 thì trùng nhau.

## Cách bộ giải hoạt động

- **Di chuyển ít nhất.** Khi một giá trị thay đổi, bộ giải di chuyển hình học ít nhất có thể. Một đường thẳng có chiều dài thay đổi sẽ dài ra đều ở hai đầu nếu không có gì giữ đầu nào.
- **Không lật.** Khoảng cách từ điểm đến đường thẳng, khoảng cách ngang và dọc, góc và tiếp tuyến ghi nhớ phía mà chúng được tạo ra. Thay đổi giá trị không bao giờ lật hình học sang phía bên kia.
- **Xung đột thì giữ nguyên.** Nếu các quan hệ mâu thuẫn nhau, phác thảo giữ nguyên như cũ và các quan hệ xung đột chuyển sang màu đỏ.
- **Quan hệ thừa** (đã được suy ra từ quan hệ khác) được nêu trong thanh trạng thái ("đã được suy ra từ trước. Xóa nó.") và đặc trưng vẫn được dựng, kèm cảnh báo.
- **Mối nối tiếp tuyến.** Tại nơi một cung bo góc gặp các đường thẳng của nó ở một điểm cuối chung, tiếp tuyến được giải theo cách luôn xác định rõ tại đó, nên các bo góc phác thảo không bị báo là ràng buộc thừa.

## Chưa xây dựng

Quan hệ thẳng hàng, đồng tia và xuyên điểm; điểm trên spline; kích thước tham chiếu; kích thước tọa độ và chiều dài cung; phương trình giữa các kích thước. Dùng Song song cộng khoảng cách 0 cho các đường thẳng thẳng hàng.
