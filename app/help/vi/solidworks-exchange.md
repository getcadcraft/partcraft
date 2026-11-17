---
title: Chuyển chi tiết sang và từ các phần mềm dựng chi tiết khác
summary: Gửi một chi tiết sang phần mềm dựng chi tiết khác dưới dạng macro dựng lại nó với cây đặc trưng sống. STEP có tên và việc mở danh sách đặc trưng do phần mềm khác xuất ra chưa được xây dựng trong phiên bản này.
keywords: macro, chưa xây dựng, swb, vba, cây đặc trưng, khứ hồi, xuất macro, cadcraft-sw.json, step có tên, ap214, biến toàn cục, phương trình, chi tiết gốc
from: 97ca61da
---

PartCraft trao đổi chi tiết với SolidWorks theo cả hai chiều, mà không dùng một định dạng tệp nào mà không ai khác đọc được:

- **Đi:** một macro (`.swb`, văn bản thuần) mà SolidWorks chạy để tự dựng chi tiết, từng đặc trưng một, cùng với các phác thảo, quan hệ, kích thước, biến toàn cục và phương trình của nó. Bạn nhận được một chi tiết gốc với cây đặc trưng sống, chứ không phải một khối đặc tĩnh.
- **Về:** một macro bạn chạy trong SolidWorks sẽ ghi các đặc trưng và phương trình của chi tiết vào tệp `.cadcraft-sw.json`. Việc mở tệp đó trong PartCraft chưa được xây dựng trong phiên bản này (cần nhân chính xác).

:::warning
Chưa có phần nào trong số này được thử nghiệm trên SolidWorks. SolidWorks chỉ chạy trên Windows và cần giấy phép, và PartCraft chưa bao giờ chạy các macro này trong đó. Các macro được viết từ tài liệu API của SolidWorks và chỉ được kiểm tra cấu trúc tại đây. Có thể gặp sự cố cần báo lại: nhật ký mà macro ghi lại sẽ cho biết bước nào bị lỗi.
:::

PartCraft không thể ghi tệp `.sldprt`: định dạng đó là đóng. Macro là cách để có một chi tiết gốc.

## Gửi chi tiết dưới dạng macro

1. Mở chi tiết.
2. Chọn {{ui:Export}}, rồi {{ui:Macro cho SolidWorks (.swb)}}. PartCraft tải xuống `<part>.swb`; thanh trạng thái ghi rằng tệp được "ghi mà không có nhân chính xác".
3. Một hộp thoại cho biết macro dựng bao nhiêu đặc trưng, biến toàn cục và phương trình, và liệt kê mọi thứ nó bỏ qua. Phiên bản này không đi kèm tệp STEP: nếu cần, dùng {{ui:Export}}, rồi {{ui:STEP (xấp xỉ bằng mặt, kernel lưới)}}.
4. Trong SolidWorks, chọn **Tools > Macro > Run**, chọn tệp `.swb` và chờ. Macro tạo một chi tiết mới từ mẫu chi tiết mặc định của bạn, đặt đơn vị milimét và dựng mọi đặc trưng.
5. Khi xong, một thông báo cho biết có bao nhiêu bước đã thực hiện, bao nhiêu bước lỗi và bao nhiêu bước khớp với thân của PartCraft. Nhật ký đầy đủ, `<part> macro log.txt`, được ghi cạnh macro.

Macro dựng những gì:

| PartCraft | Trong chi tiết mới |
|---|---|
| Phác thảo trên mặt phẳng Trước, Trên hoặc Phải | Một phác thảo trên mặt phẳng đó, với các đường thẳng, cung tròn, vòng tròn, điểm, quan hệ và kích thước (được đặt tên như trong PartCraft, ví dụ `k7`) |
| Phác thảo trên một mặt | Phác thảo trên cùng mặt đó, được chọn bằng một điểm trên nó |
| Phác thảo trên một mặt phẳng cố định | Một mặt phẳng tham chiếu đi qua ba điểm, và phác thảo trên nó |
| Đùn, cắt (mù, xuyên suốt, giữa mặt phẳng, hai hướng, côn) | Boss-extrude hoặc cut-extrude |
| Quay tròn, cắt quay tròn | Revolve quanh cùng đường tâm |
| Lỗ (đơn giản, khoét lòng, khoét côn, có ren) | Một hoặc hai lần cắt với phác thảo riêng (lỗ có ren là lỗ dùng mũi khoan taro; không có ren) |
| Mẫu lặp thẳng và tròn, đối xứng | Mẫu lặp thẳng, mẫu lặp tròn, đối xứng (đặc trưng hoặc thân) |
| Bo góc, vát mép, vỏ | Bo góc, vát mép và vỏ trên cùng các cạnh và mặt, được chọn bằng điểm |
| Tham số và phương trình | Biến toàn cục và phương trình trên các kích thước đã đổi tên |
| Đặc trưng bị tắt, thanh quay lui | Được tắt theo cùng cách; thanh quay lui ở cùng vị trí |

Sau mỗi đặc trưng khối đặc, macro so sánh thể tích và kích thước của thân với PartCraft. Khi chúng khác nhau, nó đảo chiều đặc trưng đó một lần và kiểm tra lại; nếu không tốt hơn, nó đảo lại và ghi "Check" vào nhật ký.

### Những gì bị bỏ qua

Hộp thoại và phần đầu của macro liệt kê mọi thứ không được chuyển sang, kèm lý do. Hiện tại gồm: khối đặc nhập vào (hãy chèn STEP thay thế), quét, chuyển tiếp, độ nghiêng khuôn, trục và điểm tham chiếu, điều kiện kết thúc "đến", đùn chỉ một số đường bao, và mọi thứ phụ thuộc vào chúng. Spline trở thành đường cong đi qua các điểm của nó. Phiên bản này không có nhân chính xác, nên các phác thảo trên mặt và các đặc trưng chọn cạnh hoặc mặt cũng bị bỏ qua.

## Gửi STEP có tên

Chưa xây dựng trong phiên bản này: {{ui:STEP cho SolidWorks (có tên, AP214)}} cần nhân chính xác, và khi chọn nó sẽ hiện "STEP cho SolidWorks: chưa xây dựng. …". Với nhân chính xác, tệp mang tên chi tiết, đơn vị milimét và màu chi tiết, đồng thời đặt trục Y hướng lên, như cách SolidWorks hiển thị chi tiết (còn xuất {{ui:STEP AP214 (khối đặc chính xác)}} thông thường thì đặt trục Z hướng lên). Các chữ có dấu sẽ mất dấu trong tên, và các ký tự khác ngoài ASCII thuần sẽ thành `_`.

## Đưa chi tiết về

Việc mở tệp trong PartCraft (bước 3) chưa được xây dựng trong phiên bản này: thông báo ghi "Mở tệp xuất từ SolidWorks: chưa xây dựng. …". Ứng dụng bản vẽ CadCraft vẫn mở tệp và lấy các phác thảo của nó.

1. Chọn {{ui:File}} > {{ui:Export}} > {{ui:Macro xuất để đưa chi tiết về (.swb)}} để tải xuống `CadCraftExport.swb`, và đặt nó cạnh các chi tiết của bạn.
2. Trong SolidWorks, mở chi tiết, chọn **Tools > Macro > Run** và chọn `CadCraftExport.swb`. Macro ghi `<part>.cadcraft-sw.json` cạnh chi tiết và không thay đổi gì trong đó.
3. Trong PartCraft, chọn {{ui:Open}} rồi chọn tệp đó, hoặc thả nó vào khung nhìn 3D.
4. Với nhân chính xác, PartCraft dựng lại chi tiết từng đặc trưng và hiển thị những gì đã làm: ví dụ "5 trên 5 đặc trưng được chuyển từ SolidWorks (Flange.SLDPRT)", từng đặc trưng không thể chuyển ("Không chuyển được: Sweep1 (Sweep)."), và thể tích có khớp với thể tích mà SolidWorks đã ghi hay không.
5. Lưu nó thành chi tiết PartCraft bằng {{ui:Save}}.

Phác thảo được đặt lên mặt phẳng cơ sở khi chúng nằm trên một mặt phẳng như vậy, lên mặt phẳng tương ứng của chi tiết khi có (nên chúng theo các chỉnh sửa sau này), và lên một mặt phẳng cố định trong các trường hợp khác. Cạnh và mặt của bo góc, vát mép và vỏ được tìm từ các điểm và giữ lại làm tham chiếu có tên. Biến toàn cục trở thành tham số (tên có khoảng trắng sẽ đổi thành dấu gạch dưới: "Bolt count" thành `Bolt_count`), và phương trình trở thành phương trình trên cùng các kích thước. Không có gì được suy đoán: những gì không có tương ứng sẽ được liệt kê.

Ứng dụng bản vẽ CadCraft mở cùng tệp và lấy các phác thảo của nó.

:::note
Định dạng là `cadcraft-sw-export` phiên bản 1, JSON thuần, đơn vị milimét và độ. Tệp từ macro mới hơn, hoặc tệp không hợp lệ, sẽ bị từ chối kèm lý do.
:::
