---
title: Sắp xếp chi tiết phẳng trên tấm
summary: Trải các chi tiết phẳng lên tấm hoặc cuộn với lượng phế liệu ít nhất mà PartCraft có thể tìm được, không bao giờ gần hơn khoảng cách bạn đặt, và lưu bố cục thành DXF cho máy cắt laser, plasma, tia nước hoặc router.
keywords: sắp xếp, tấm, cuộn, laser, plasma, tia nước, router, cắt, hiệu suất, sử dụng vật liệu, phế liệu, lãng phí, khoảng cách, bề rộng đường cắt, thớ, hướng cán, dxf, khai triển, đường bao
from: 8dcce1a6
---

**Sắp xếp** đặt nhiều chi tiết phẳng lên một tấm sao cho còn lại ít vật liệu nhất có thể. PartCraft xếp các chi tiết từng cái một, mỗi cái ở vị trí làm chiều dài đã dùng của tấm ngắn nhất, thử vài thứ tự và hoàn tất trong vài giây, rồi giữ kết quả tốt nhất. Các chi tiết có thể nằm lọt vào lỗ của nhau và trong phần lõm của chữ L hoặc chữ U.

## Mở chức năng

- {{ui:Xuất}} › {{ui:Sắp xếp chi tiết phẳng trên tấm…}} mở nó với khai triển của chi tiết, hoặc — trong lắp ráp — với khai triển của mọi chi tiết kim loại tấm, mỗi chi tiết một bản sao.
- Trên chi tiết kim loại tấm, {{ui:Trải phẳng}} rồi {{ui:Sắp xếp trên tấm…}} dưới phần khai triển.
- {{ui:Thêm đường bao từ DXF…}} thêm mọi đường bao kín trong tệp DXF thành một chi tiết: một bản vẽ từ CadCraft được lưu dưới dạng DXF, hoặc một tệp từ phần mềm riêng của máy cắt. Đường bao nằm trong một đường bao khác là lỗ của đường bao đó. Các đường thẳng và cung nối đầu với đầu được tính là một đường bao. Tệp đo bằng inch, cm hoặc m sẽ được đổi sang milimét.

:::note
Trải phẳng kim loại tấm cần kernel hình học chính xác (xem [Tôn (kim loại tấm)](topic:sheet-metal)). Đường bao từ tệp DXF luôn hoạt động.
:::

## Thiết lập

Với mỗi chi tiết, nhập **số lượng** cần dùng và **hướng thớ**: {{ui:Mọi hướng}}, {{ui:Dọc theo tấm (như đã vẽ)}} cho tấm xước hoặc tấm cán phải chạy một chiều, hoặc {{ui:Ngang tấm}}.

Dưới **Tấm**:

- **Kho**: {{ui:Tấm}} có chiều dài và chiều rộng cho trước (và số lượng có sẵn; 0 = đủ dùng bao nhiêu cũng được), hoặc {{ui:Cuộn}} có chiều rộng cho trước, dài bao nhiêu cũng được.
- **Lề mép** được chừa trống ở mọi cạnh của tấm (để kẹp, hoặc cho mép không đều).
- **Khoảng cách giữa các chi tiết** là khoảng cách nhỏ nhất giữa hai đường cắt: ít nhất bằng bề rộng đường cắt (kerf) của máy cắt, cộng thêm phần vật liệu cần.
- **Số lần xoay**: các góc mà chi tiết có thể được xoay tới, mặc định mỗi 90°. Ít lần xoay chạy nhanh hơn; nhiều lần hơn có thể dùng tấm tốt hơn.
- **Cho phép lật chi tiết** cho phép đặt chi tiết úp xuống. Tắt tùy chọn này với kim loại tấm: khai triển bị lật sẽ uốn theo chiều ngược lại.

Nhấn {{ui:Sắp xếp}}. Xem trước hiển thị mọi tấm; phần thông tin cho biết đã dùng bao nhiêu tấm (hoặc bao nhiêu phần cuộn) và các chi tiết chiếm bao nhiêu vật liệu. Chi tiết nào không vừa sẽ được nêu tên.

## Lưu

{{ui:Lưu DXF}} ghi bố cục thành DXF (R12, milimét), mỗi tấm nằm dưới tấm trước: đường bao các tấm trên lớp SHEET, các chi tiết trên PARTS (cung giữ nguyên là cung), tên mỗi chi tiết trên LABELS.

:::tip
Trộn nhiều chi tiết thường sắp xếp tốt hơn so với nhiều bản sao của một chi tiết: các chi tiết nhỏ lấp đầy khoảng trống giữa các chi tiết lớn.
:::

## Cắt tấm (G-code)

**Xuất › Tấm đã sắp xếp sang G-code** đọc một DXF đã sắp xếp (tệp này, hoặc các tấm của tiện ích bổ sung Cabinets trong CadCraft) và tạo một chương trình cho mỗi tấm qua bộ hậu xử lý bạn chọn: lỗ và các hình khoét trước, rồi đến đường bao, mỗi đường cắt cách chi tiết một bán kính dao về phía ngoài, xuyên qua tấm và sâu thêm 1 mm, có cầu giữ nếu bạn yêu cầu. Danh sách hậu xử lý gồm các bộ có sẵn cộng với bộ của nghiên cứu Manufacture của bạn. Kiểm tra mọi chương trình trong trình mô phỏng trước khi chạy: không tạo khoan và túi.

## Cần kiểm tra

PartCraft kiểm tra lại mọi bố cục trên hình dạng thật (không phải lưới nó đã tìm kiếm): không có hai chi tiết nào gần hơn khoảng cách, không có gì nằm trong lề. Nó không lập kế hoạch đường cắt: đường dẫn vào cắt, thứ tự cắt, cắt cạnh chung một lần và giữ tấm còn lại là việc của phần mềm máy cắt. Kiểm tra DXF ở đó trước khi cắt.
