---
title: Spline, cắt, dời song song và các công cụ phác thảo khác
summary: Vẽ spline qua điểm và spline điểm điều khiển, cắt và kéo dài đường cong, dời song song một chuỗi, đối xứng qua đường tâm, thêm đa giác và rãnh, lặp hình học phác thảo và chiếu cạnh của mô hình.
keywords: spline, điểm khớp, điểm điều khiển, b-spline, nurbs, đường cong, cắt, kéo dài, dời song song, đối xứng, đa giác, lục giác, rãnh, mẫu lặp, mẫu lặp thẳng, mẫu lặp tròn, chiếu, chiếu cạnh, bao gồm, chuyển đổi thực thể
from: 3ecb166a
---

Các công cụ này hoạt động trong một phác thảo đang mở. {{ui:Spline}} và {{ui:Trim}} nằm trên thanh công cụ. Các công cụ còn lại nằm trong {{ui:More}} ở cuối các công cụ phác thảo. Mỗi công cụ là một bước hoàn tác, và {{key:Esc}} dừng nó. Về các công cụ vẽ cơ bản, xem [Vẽ phác thảo đầu tiên](topic:sketch-basics).

## Spline

Spline là một đường cong trơn. Có hai loại.

| Công cụ | Phím | Cách vẽ |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Nhấn các điểm mà đường cong đi qua. Kết thúc bằng {{key:Enter}}, {{key:Esc}}, nhấp chuột phải hoặc nhấp đúp. Nhấn lại điểm đầu tiên để khép kín spline |
| {{ui:Spline điểm điều khiển}} (trong {{ui:More}}) | | Nhấn các điểm điều khiển. Đường cong bị kéo về phía chúng nhưng chỉ chạm vào điểm đầu và điểm cuối. Đa giác điều khiển nét đứt hiển thị khi bạn vẽ và sau đó |

- **Các điểm là điểm phác thảo.** Kéo chúng, hoặc gán cho chúng quan hệ và kích thước như bất kỳ điểm nào khác. Điểm đầu của spline có thể bắt vào đầu mút của một đường thẳng, khi đó chúng được nối bằng quan hệ trùng nhau.
- **Tiếp tuyến tại một đầu.** Chọn một đường thẳng, cung tròn hoặc spline gặp một đầu của spline, cùng với spline, rồi chọn {{ui:T Tiếp tuyến}}. Hướng tại đầu spline khi đó sẽ theo đường thẳng. Tiếp tuyến không nằm tại đầu của spline sẽ bị từ chối: "Tiếp tuyến với spline cần đường thẳng, cung tròn hoặc spline gặp một trong hai đầu của nó."
- **Đầu mút.** Khi không có quan hệ tiếp tuyến, hai đầu của spline qua điểm khớp là tự nhiên (không có độ cong ở đầu mút). Đường cong là bậc ba và đi qua mọi điểm, khoảng cách giữa các điểm được xác định bởi khoảng cách giữa chúng.
- **Spline kín** tự tạo thành một biên dạng. Spline hở nối các đường thẳng và cung tròn thành một vòng kín như mọi đường cong khác.
- Xóa một điểm bên trong spline sẽ xóa điểm đó và giữ lại spline, miễn là nó còn ít nhất hai điểm (ba điểm khi khép kín).

Đùn và quay tròn dựng spline bằng nhân lưới từ các đoạn thẳng ngắn (đường cong thật cần nhân chính xác: chưa xây dựng trong phiên bản này). Xuất DXF ghi spline thành một polyline nằm trong phạm vi 0.01 mm so với đường cong, vì DXF R12 không có thực thể spline.

## Cắt và kéo dài

| Công cụ | Phím | Cách dùng |
|---|---|---|
| {{ui:Trim}} | {{key:T}} | Trỏ vào một đường cong: đoạn sẽ bị xóa hiển thị màu đỏ, đến các điểm giao gần nhất. Nhấn để xóa. Đường cong không giao với gì sẽ bị xóa toàn bộ |
| {{ui:Extend}} (trong {{ui:More}}) | {{key:E}} | Nhấn một đường thẳng hoặc cung tròn gần đầu cần kéo dài. Nó dài ra đến đường cong tiếp theo mà nó gặp. Hiển thị "Không có gì để đầu này chạm tới." khi không có gì chắn đường |

Cắt và Kéo dài hoạt động trên đường thẳng, cung tròn, vòng tròn và spline (Kéo dài: chỉ đường thẳng và cung tròn).

- Một **vòng tròn** bị cắt sẽ thành cung tròn. Kích thước bán kính hoặc đường kính của nó chuyển sang cung tròn.
- Cắt giữa một đường thẳng sẽ để lại hai đường thẳng vẫn nằm trên cùng một đường thẳng. Cắt giữa một cung tròn sẽ để lại hai cung tròn có cùng tâm và quan hệ bằng nhau.
- Một **spline** bị cắt sẽ thành spline điểm điều khiển, đi theo đúng đường cong cũ. Quan hệ tiếp tuyến tại đầu được giữ lại sẽ còn nguyên.
- Đầu mới được đặt trên đường cong đã cắt nó (trên đường thẳng, cung tròn hoặc vòng tròn, hoặc trùng với đầu của nó). Spline không thể giữ một điểm, nên spline đã cắt không thêm quan hệ nào.

**Các quan hệ không còn phù hợp sẽ bị xóa**, và thanh trạng thái cho biết số lượng. Ví dụ, kích thước chiều dài trên một đường thẳng đã cắt sẽ bị xóa, nhưng các quan hệ ngang hoặc song song vẫn giữ lại.

## Dời song song

1. Chọn {{ui:Offset}} trong {{ui:More}} hoặc nhấn {{key:O}}.
2. Nhấn một đường thẳng, cung tròn, vòng tròn hoặc spline. Toàn bộ chuỗi của nó sẽ được tô sáng: tất cả các đường cong nối đầu cuối, đến một điểm nơi ba đường trở lên gặp nhau. Để dời song song chỉ một phần của chuỗi, trước hết chọn các đường cong đó, rồi chọn {{ui:Offset}} và nhấn một trong số chúng.
3. Di chuyển con trỏ đến phía mà bản sao sẽ nằm. Một bản xem trước nét đứt sẽ theo con trỏ. Nhấn {{key:B}} để lấy cả hai phía.
4. Nhấn, nhập khoảng cách, rồi nhấn {{key:Enter}}.

Đường thẳng và cung tròn được dời song song chính xác. Các góc được kéo dài hoặc cắt cho đến khi gặp nhau. Bản sao có một kích thước **Dời song song**, và các phần còn lại theo nó: nhấp đúp kích thước để đổi toàn bộ bản sao. Khoảng cách quá lớn so với chuỗi sẽ bị từ chối, ví dụ "Khoảng cách này quá lớn cho chuỗi này: một phía sẽ bị lật vào trong."

Một **spline** được dời song song bằng một spline điểm khớp mới, sai khác không quá 0.001 mm so với đường dời thực. Bản sao này được cố định: nó không theo các thay đổi sau này, và không có kích thước Dời song song. Spline trong một chuỗi cần các mối nối trơn (tiếp tuyến) tại hai đầu.

## Đối xứng

1. Với chế độ Chọn, chọn những gì cần đối xứng.
2. Chọn {{ui:Mirror}} trong {{ui:More}} hoặc nhấn {{key:M}}.
3. Nhấn đường thẳng hoặc đường tâm để đối xứng qua.

Mỗi điểm đối xứng nhận một quan hệ **Đối xứng** với điểm gốc, nên bản sao theo khi bản gốc thay đổi. Các điểm nằm trên đường đối xứng được dùng chung, và các vòng tròn đối xứng nhận quan hệ Bằng nhau. Nếu chưa chọn gì, nhấn các đối tượng cần đối xứng, nhấn {{key:Enter}}, rồi nhấn đường đối xứng.

## Đa giác và rãnh

| Công cụ | Cách vẽ |
|---|---|
| {{ui:Polygon}} | Nhấn tâm, rồi một góc, rồi nhập số cạnh (3 đến 64). Các cạnh bằng nhau và các góc nằm trên một vòng tròn dựng. Ghi kích thước vòng tròn để định kích thước đa giác |
| {{ui:Slot}} | Nhấn tâm của một đầu, rồi tâm của đầu kia, rồi nhấn để đặt chiều rộng. Hai đường thẳng, tiếp tuyến với hai nửa vòng tròn bằng nhau |

## Mẫu lặp phác thảo

Chọn hình học trước, rồi:

- {{ui:Linear pattern}}: nhấn một điểm đầu, rồi vị trí của bản sao đầu tiên, rồi nhập số bản sao (kể cả bản gốc).
- {{ui:Circular pattern}}: nhấn tâm, rồi nhập số bản sao, trải đều quanh một vòng tròn đầy đủ.

Các bản sao mang theo các quan hệ giữa hình học đã chọn (mẫu lặp tròn bỏ qua quan hệ ngang và đứng). Các bản sao không liên kết với bản gốc: thay đổi một bản, các bản khác vẫn giữ nguyên.

## Chiếu cạnh của chi tiết

1. Chọn {{ui:Project edge}} trong {{ui:More}}.
2. Nhấn một cạnh thẳng hoặc cạnh tròn của chi tiết nằm phía sau phác thảo.

Cạnh được sao chép lên mặt phẳng phác thảo một cách chính xác và được cố định (quan hệ Cố định). Nó không theo các thay đổi sau này của chi tiết. Nhấn {{key:Q}} để biến nó thành hình học dựng. Một vòng tròn nghiêng so với mặt phẳng phác thảo sẽ chiếu thành elip, nên bị từ chối. Các cạnh tự do và cạnh thẳng hướng ra khỏi phác thảo cũng bị từ chối. Chiếu cần nhân chính xác: chưa xây dựng trong phiên bản này.
