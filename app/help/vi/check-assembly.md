---
title: Kiểm tra lắp ráp về va chạm và chuyển động
summary: Tìm các chi tiết chồng lên nhau bằng Va chạm, kéo bất kỳ giá trị khớp nào để xem chuyển động, và quét một khớp qua phạm vi của nó để tìm nơi các chi tiết va vào nhau.
keywords: giao thoa, phát hiện giao thoa, va chạm, đâm xuyên, chồng lấp, khớp ren, ren sâu không khớp, mặt tiếp xúc, ẩn, bộ lọc, chuyển động, nghiên cứu chuyển động, quét, phạm vi chuyển động, kiểm tra
from: 9c98db46
---

Hai kiểm tra chạy trên các chi tiết khi chúng đã được đặt: **Va chạm** tìm vật liệu chồng lên nhau ngay bây giờ, và **kiểm tra chuyển động** di chuyển một khớp qua phạm vi của nó và tìm các chỗ chồng lên nhau trên đường đi.

## Kiểm tra giao thoa

1. Mở hoặc dựng một lắp ráp (xem [Dựng lắp ráp với khớp](topic:build-assembly)).
2. Chọn {{ui:Va chạm}}.

Thanh trạng thái báo kết quả:

- "Không có giao thoa giữa 3 chi tiết (… ms)." Không có gì chồng lên nhau.
- "Giao thoa: Flange1 và Flange2: Chồng lấp, 2.5 mm³." Mỗi cặp, loại kết quả và thể tích chung của chúng.

Ô **Lắp ráp** bên trái hiển thị **Giao thoa**: "Không có", "2 kết quả" (những kết quả được hiển thị), hoặc "Chưa kiểm tra". Khi không chọn gì, bảng bên phải liệt kê từng kết quả dưới **Giao thoa**.

Kết quả được xóa mỗi khi lắp ráp thay đổi. Chạy lại {{ui:Va chạm}} sau khi di chuyển một khớp. Mọi cặp chi tiết được kiểm tra với mọi cặp khác, nên lắp ráp lớn mất nhiều thời gian hơn.

### Các loại kết quả

| Loại | Nghĩa |
|---|---|
| **Chồng lấp** | Các chi tiết dùng chung thể tích: một va chạm thật. |
| **Độ sâu ren không khớp** | Thể tích chung nằm trong ren của một chi tiết nhưng vượt quá ren của chi tiết kia: một bu lông ren sâu hơn lỗ của nó, hoặc một thân trơn trong lỗ taro ren. |
| **Khớp ren (ren trang trí)** | Thể tích chung nằm trong ren của cả hai chi tiết: một bu lông trong lỗ taro ren. Ren trang trí được vẽ ở kích thước đầy đủ của ren, nên chúng luôn chồng lên nhau một chút. |
| **Mặt tiếp xúc** | Không có thể tích chung, nhưng các mặt tiếp xúc (trong 0.001 mm). |

Ren mô hình hóa (xem [Ren trên trục và lòng lỗ, vẽ hoặc mô hình hóa](topic:threads)) là hình học thật: phần chúng dùng chung là một **Chồng lấp**.

### Ẩn những gì bạn không cần xem

Dưới **Giao thoa**, **Hiện** có một ô cho mỗi loại: bỏ chọn **Khớp ren** và **Mặt tiếp xúc** để chỉ thấy các va chạm quan trọng. **Ẩn cặp này** bên cạnh một kết quả sẽ ẩn cặp chi tiết đó dù thuộc loại nào. Các kết quả ẩn được đếm ("2 kết quả bị ẩn bởi các bộ lọc này"), và **Hiện lại các cặp đã ẩn** đưa các cặp trở lại. Thanh trạng thái cũng đếm các kết quả ẩn.

Các bộ lọc được lưu cùng lắp ráp, và mỗi thay đổi là một bước {{key:Mod+Z}}. **Quét một khớp để tìm va chạm** (bên dưới) cũng dùng chúng. Lắp ráp có bộ lọc được lưu ở phiên bản 4, mà các phiên bản PartCraft cũ hơn sẽ từ chối mở thay vì làm mất bộ lọc.

## Xem chuyển động

1. Chọn một khớp có thể chuyển động (bất kỳ khớp nào trừ khớp cứng) trong danh sách bên trái.
2. Kéo thanh trượt dưới một trong các giá trị của nó, như **Góc (°)** hoặc **Độ lệch (mm)**. Chi tiết di chuyển khi bạn kéo.
3. Thả ra. Vị trí mới được giữ và có thể hoàn tác bằng {{key:Mod+Z}}.

Bạn cũng có thể nhập một góc hoặc độ lệch vào ô rồi nhấn {{key:Enter}}.

Một khớp trên vòng khép kín (một liên kết) di chuyển toàn bộ vòng: giá trị bạn kéo được giữ và các khớp khác của vòng đi theo (xem [Vòng kín](topic:build-assembly#closed-loops-linkages)).

## Quét một khớp để tìm va chạm

1. Chọn một khớp có thể chuyển động.
2. Với khớp có nhiều giá trị (trụ, phẳng, cầu, chốt trong rãnh), chọn giá trị nào để quét trong **Kiểm tra chuyển động**.
3. Chọn {{ui:Kiểm tra va chạm trong suốt chuyển động}}.

PartCraft di chuyển giá trị đó qua 25 vị trí trong 24 bước bằng nhau, các giá trị khác giữ nguyên: một góc từ −180° đến 180° (một độ nghiêng từ −90° đến 90°), một chiều dài từ âm đến dương bằng kích thước của chi tiết lớn nhất. Nó báo cáo:

- "Không có va chạm ở bất kỳ đâu với Góc (°) từ -180 đến 180 (đã kiểm tra 25 vị trí)."
- "6 trên 25 vị trí va chạm, đầu tiên tại Góc (°) 45 (12.4 mm³)." Vị trí đầu tiên va chạm và phần chồng lấp tại đó.

Nút bị làm xám với các khớp cứng, vì chúng không di chuyển. Phép quét chỉ kiểm tra các vị trí, không kiểm tra đường đi giữa chúng: một chi tiết mỏng có thể xuyên qua chi tiết khác giữa hai bước.

:::note
Tiếp xúc và trọng lực chưa được xây dựng. Không có giới hạn thì phép quét bao phủ toàn bộ phạm vi; đặt **Giới hạn** cho giá trị (xem [Danh sách chi tiết, khung nhìn tách rời và di chuyển chi tiết](topic:assembly-bom-explode)) thì phép quét chỉ bao phủ phần đó, nên một bản lề mở 90° được kiểm tra trong 90°.
:::

## Nghiên cứu chuyển động

**Lắp ráp › Chuyển động** điều khiển một giá trị khớp từ điểm đầu đến điểm cuối trong một khoảng thời gian bạn đưa ra (tốc độ không đổi, giảm dần, hình sin, hoặc đi rồi về), đặt lắp ráp tại mỗi bước với các khớp và vòng khép kín của nó, và báo cáo những va chạm và các chi tiết tiến gần nhau đến mức nào. **Thêm một điểm** bám theo giữa một chi tiết hoặc một điểm bạn nhấp trên đó, và thẻ vẽ vị trí, tốc độ và gia tốc của nó, giá trị khớp và khe hở theo thời gian; **Lưu CSV** và **Lưu biểu đồ** ghi chúng ra. Tốc độ và gia tốc được tính từ các vị trí đã ghi, nên một đỉnh nhọn giữa các bước sẽ đọc thấp: dùng nhiều bước hơn.

Sau khi **Chạy**, thanh **Đi qua các bước chạy** đưa lắp ráp đến bất kỳ bước nào (thời gian, giá trị và việc các chi tiết có va chạm tại đó hay không được hiển thị bên cạnh); khớp giữ giá trị riêng của nó, và **Về mô hình** đưa lắp ráp về vị trí cũ. Các thiết lập của nghiên cứu được lưu trong tệp lắp ráp; kết quả của nó được tạo lại bởi **Chạy**.

## Nghiên cứu tiếp xúc

**Lắp ráp › Tiếp xúc** cho thấy lắp ráp chịu tải như thế nào ở những chỗ các chi tiết ép vào nhau. Mỗi chi tiết mang theo gối đỡ, tải và vật liệu riêng từ nghiên cứu **Mô phỏng** của chính nó (một mặt cố định trên một chi tiết, một lực trên chi tiết khác); ở đây bạn chọn các cặp. **Thêm một cặp**, rồi **Chọn bên A** và nhấp các mặt của một chi tiết, **Chọn bên B** và nhấp các mặt của một chi tiết khác (nhấp một mặt đã chọn sẽ bỏ nó đi; Esc hoặc Xong kết thúc việc chọn). Một cặp là **Không ma sát** (các chi tiết ép nhưng trượt) hoặc **Dính** (chúng dính với nhau); hệ số độ cứng đặt mức độ chống lún của tiếp xúc (20 là điểm khởi đầu hợp lý, 1000 cho một chồng thép cứng).

**Giải** chạy tải theo từng bước và hiển thị lực tiếp xúc, độ lún sâu nhất, độ dịch chuyển lớn nhất và ứng suất lớn nhất. Chi tiết không có cặp nào sẽ bị bỏ qua và thẻ cho biết điều đó. Tiếp xúc không ma sát không giữ chi tiết theo phương ngang: đặt một gối đỡ cho mọi chi tiết trong nghiên cứu Mô phỏng riêng của nó, hoặc làm nó dính, nếu không các bước có thể không ổn định. Các cặp và thiết lập được lưu trong tệp lắp ráp.

**Xuất bộ CalculiX** ghi cùng mô hình thành tệp đầu vào CalculiX (.inp). CalculiX là một chương trình riêng mà bạn tự cài đặt và chạy; **Đọc kết quả CalculiX (.frd)** khi đó đọc lại các độ dịch chuyển trên lưới của lắp ráp này và từ chối một tệp được tạo cho lưới khác. Bộ giải ở đây có khả năng dẻo nhưng không phải động lực học hiện, và không có phân tích nào ở đây được chứng nhận: nhờ một kỹ sư kiểm tra bất cứ điều gì quan trọng.
