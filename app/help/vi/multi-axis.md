---
title: Gia công 4 và 5 trục
summary: Cho PartCraft biết máy có những trục xoay nào, nghiêng dao cho bất kỳ thao tác phay thông thường nào, hoàn thiện bề mặt bằng dao phay đầu cầu nghiêng khi cắt, hoặc tiện chi tiết dưới dao trên trục thứ 4. Những gì được ghi vào G-code, và những gì chưa được kiểm chứng.
keywords: 5 trục, năm trục, 4 trục, trục thứ tư, đa trục, đa trục, 3+2, lập chỉ mục, định vị, nghiêng, dao nghiêng, xoay, bàn xoay, đầu, trục a, trục b, trục c, tcp, rtcp, điểm tâm đầu dao, g43.4, thời gian nghịch đảo, g93, động học, trục bản lề, cắt bên hông, góc dẫn
from: c4f1c491
---

Không gian làm việc Gia công có thể giữ dao ở một góc, và có thể di chuyển các trục xoay trong khi cắt. Có ba cách làm việc đó, từ đơn giản nhất đến phức tạp nhất.

**Chưa có gì ở đây được chạy trên máy.** Các đường dao được kiểm tra với hình học bằng các bài kiểm thử, và G-code được đọc ngược lại, nhưng các hậu xử lý có sẵn tuân theo mã đã được tài liệu hóa của bộ điều khiển, không theo bất kỳ máy nào trước mặt chúng tôi. Kiểm chứng chương trình trong bộ mô phỏng của chính bộ điều khiển và chạy thử trên không trước khi nó chạm vào kim loại.

## Các trục xoay của máy

Trên thẻ **Thiết lập**, {{ui:Trục xoay}} cho biết máy có những gì:

| Lựa chọn | Máy |
|---|---|
| Không (3 trục) | Máy phay thường. Thao tác nào cần dao nghiêng sẽ cảnh báo, và post từ chối ghi nó. |
| A (quay quanh X) | Một trục xoay dọc X: bàn trục thứ 4 hoặc bộ chia. Dao chỉ có thể nghiêng trong mặt phẳng Y–Z. |
| B (quay quanh Y) | Một trục xoay dọc Y. Dao chỉ có thể nghiêng trong mặt phẳng X–Z. |
| A và C | Một trục nghiêng quanh X được mang bởi, hoặc mang, một vòng quay quanh Z: một bàn lật, hoặc một đầu. |
| B và C | Giống như trên, với nghiêng quanh Y. |

Sau đó:

- **Được mang bởi**: {{ui:Bàn (chi tiết quay)}} hoặc {{ui:Đầu (dao quay)}}. Bàn quay theo chiều ngược lại để đưa cùng một mặt xuống dưới dao, nên dấu của mọi góc phụ thuộc vào lựa chọn này.
- **Bộ điều khiển giữ điểm đầu dao trên đường chạy (TCP)**: khi bật, X Y Z trong chương trình là điểm đầu dao trong tọa độ riêng của chi tiết và bộ điều khiển xử lý phần còn lại (các post kiểu Fanuc và LinuxCNC có sẵn ghi `G43.4` cho chiều dài dao). Khi tắt, trên máy kiểu bàn, PartCraft ghi X Y Z khi bàn xoay mang chi tiết, quanh **tâm xoay** bạn đặt (trong tọa độ gia công; 0, 0, 0 khi gốc gia công nằm ở tâm). Máy kiểu đầu cần bật TCP: nếu không, chương trình sẽ cần chiều dài trục bản lề của máy, điều mà PartCraft không biết.
- **Giới hạn nghiêng**: trục nghiêng đi xa đến đâu.

Máy khác nhau về chiều dương. Nếu một trục quay sai chiều trên máy của bạn, đổi dấu trong bản sao của post ([Bộ hậu xử lý bạn có thể sửa](topic:post-processors)).

## Dao nghiêng cho thao tác thông thường

Mọi thao tác phay (mặt, túi, thích ứng, biên dạng, khoan, vát mép, song song, scallop, thô 3D, còn lại) có **Độ nghiêng dao** và **Nghiêng về phía**: hướng của dao cho riêng thao tác đó, đo từ trục dao của thiết lập. Đây là gia công 3+2: các trục xoay đi tới một vị trí và giữ ở đó trong khi ba trục cắt.

- Nhập hai góc, hoặc nhấn {{ui:Đặt dao vuông góc với một mặt}} rồi nhấp vào một mặt phẳng: dao sẽ hướng thẳng vào mặt đó.
- Chọn các mặt và cạnh của thao tác như thường lệ. Thế nào là đáy hoặc lỗ được xác định dọc theo dao nghiêng.
- Phôi cho hướng đó là hộp chứa phôi đã được xoay, nên chiều cao và khoảng an toàn đều an toàn từ phía đó.

Trong G-code, trước thao tác, dao đi lên, các trục xoay quay, và dao hạ xuống phía trên điểm đầu tiên. Trên máy kiểu bàn không có TCP, cung vẫn là cung và chu kỳ khoan cố định vẫn là chu kỳ (khung được ghi chỉ xoay quanh Z). Với TCP trong mặt phẳng nghiêng, cung trở thành các đoạn thẳng ngắn và chu kỳ trở thành các di chuyển mà chúng đại diện.

Mô phỏng phôi chạy hướng nghiêng **một mình**: nó hiển thị thao tác đó cắt gì từ toàn bộ phôi nhìn từ phía của nó, và tìm cắt lẹm ở đó, nhưng các đường cắt từ hướng khác không được chuyển sang.

## Hoàn thiện 5 trục

{{ui:Thêm}} trên thanh công cụ Gia công liệt kê thao tác này và thao tác kế tiếp ở đầu thẻ **Thao tác**.

{{ui:5 trục}} là [lượt hoàn thiện song song](topic:finish-3d) với **dao phay đầu cầu nghiêng khi nó đi**. Viên bi cắt bằng một mặt cầu, và mặt cầu là như nhau dù dao nghiêng theo hướng nào quanh tâm của nó, nên viên bi đi đúng đường mà lượt 3 trục sẽ cho và chỉ hướng của dao thay đổi:

- **Hướng về bề mặt**: 1 = vuông góc với bề mặt, 0 = thẳng đứng, giá trị giữa là trung gian.
- **Nghiêng về phía trước**: số độ dọc theo hướng cắt, để tâm đứng yên của viên bi không phải là phần thực sự cắt.
- **Nghiêng nhiều nhất**: dao không bao giờ nghiêng xa hơn mức này so với trục của thiết lập.

Ở nơi thân dao sẽ chạm vào mô hình, độ nghiêng được giảm lại cho đến khi thông thoáng, và thao tác cho biết có bao nhiêu điểm như vậy. Mỗi lượt đi vào và đi ra bằng một đoạn nâng thẳng.

## Hoàn thiện trục xoay (trục thứ 4)

{{ui:Xoay}} dành cho chi tiết được kẹp dọc **X của gia công** trên trục xoay. Chi tiết quay và một dao phay đầu cầu, luôn hướng vào trục, bám theo bề mặt của nó:

- **Lượt**: {{ui:Dọc theo trục}} (các đường dọc X, cách nhau một bước ngang theo vòng quay) hoặc {{ui:Quanh chi tiết}} (các vòng, cách nhau một bước ngang theo X).
- **Trục ở Y / Z**: vị trí của trục. Để trống nghĩa là giữa phôi. Trên máy kiểu bàn không có TCP, giá trị này phải là tâm xoay trong Thiết lập; thao tác sẽ cảnh báo khi không đúng.
- **Từ / đến X** và **Từ / đến góc**: phần chiều dài và phần vòng quay cần cắt.

Chiều cao của viên bi trên trục tại mọi điểm là độ hạ chính xác của một mặt cầu trên lưới chi tiết, nhìn từ phía đó.

## Giới hạn

- Hoàn thiện 5 trục và trục xoay chỉ nhận **dao phay đầu cầu**. Không có cắt bên hông (phía bên của dao trên thành có kẻ), không có đường dòng dọc theo hướng riêng của bề mặt, không có thô đa trục và không tự động chọn độ nghiêng để tránh va chạm.
- Đường đi 5 trục và trục xoay **không chạy qua mô phỏng phôi**, vốn là bản đồ cao độ và không thể chứa một lần cắt nghiêng.
- Thân dao được kiểm tra trong hoàn thiện 5 trục với mô hình nhìn từ trên; đế, trục chính và chính máy không được kiểm tra ở đâu cả.
- Hoàn thiện trục xoay chỉ cắt những gì dao nhìn thấy khi nhìn về phía trục.
- Hoàn thiện 5 trục mất một phút trở lên để tính trên chi tiết lớn: thân dao được kiểm tra tại mọi điểm của mọi lượt.
- Khi các trục xoay chuyển động cùng các trục thẳng và TCP tắt, các post có sẵn ghi tốc độ tiến dưới dạng thời gian nghịch đảo (`G93`), rồi quay lại `G94`.
- Không ghi mã mặt làm việc nghiêng (`G68.2` và tương tự), và không biết giới hạn riêng của máy, cách tháo xoắn hay vùng va chạm.
