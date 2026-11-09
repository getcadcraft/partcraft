---
title: Có gì mới trong 0.8 và 0.8.1
summary: PartCraft 0.8 thêm phân tích trực tiếp khi bạn chỉnh sửa, kiểm tra Cái gì hỏng trước?, các nghiên cứu chảy dẻo và tiếp xúc với tệp đầu vào cho bộ giải bên ngoài, nghiên cứu chuyển động cho lắp ráp, không gian làm việc Mặt cho bề mặt tự do, chi tiết có kích thước theo vật lý trong không gian làm việc Kỹ thuật, phác thảo từ ảnh, xuất để in, Các tấm đã sắp xếp sang G-code và bản vẽ tự ghi kích thước lỗ. 0.8.1 sửa lỗi con trỏ bị treo ở chế độ toàn màn hình.
keywords: có gì mới, what's new, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.8, 0.8.1, phiên bản, tính năng mới, phân tích trực tiếp, cập nhật khi chỉnh sửa, làm hỏng, cái gì hỏng trước, hệ số tải, phi tuyến, chảy dẻo, biến dạng dẻo, tiếp xúc, calculix, nghiên cứu chuyển động, khe hở, mặt, nurbs, làm trơn, thân tàu, vằn ngựa, kỹ thuật, bộ sinh, thân được sinh, phác thảo từ ảnh, tỷ lệ để in, chia để in, co ngót, tấm đã xếp, g-code, bản vẽ, ghi kích thước lỗ, trợ lý, mcp, ngôn ngữ, số hàng thanh công cụ
from: 62e4dce2
---

Đây là những thay đổi trong PartCraft 0.8 và 0.8.1 so với 0.7. Mô phỏng trả kết quả khi bạn chỉnh sửa và cho biết cái gì hỏng trước, lắp ráp có nghiên cứu chuyển động, và các không gian làm việc mới tạo bề mặt tự do và chi tiết có kích thước theo vật lý. 0.8.1 là bản sửa lỗi nhỏ.

## Mới

### Mô phỏng

- **Cập nhật khi tôi chỉnh sửa.** Chọn {{ui:Cập nhật khi tôi chỉnh sửa}} trong khối Solve, và kết quả sẽ theo các chỉnh sửa của bạn. Thay đổi kích thước, tải hoặc vật liệu thì một kết quả nhanh, tính với các phần tử lớn gấp bốn lần, xuất hiện ngay; khi bạn dừng khoảng một giây, kết quả tinh chỉnh riêng của nghiên cứu sẽ thay thế nó. Kết quả cho biết bạn đang xem loại nào. Với một dầm công xôn bằng thép, kết quả nhanh sai lệch trong 1 % về độ võng và khoảng 4 % về ứng suất so với kết quả tinh chỉnh. Xem [Kiểm tra ứng suất và độ võng](topic:simulation#update-while-you-edit-live).
- **Cái gì hỏng trước.** Với nghiên cứu tĩnh hoặc mất ổn định, {{ui:Cái gì hỏng trước?}} trong khối **Thử phá hỏng** tăng tỷ lệ tải cho đến khi chi tiết bị hỏng. Nó liệt kê, từ tệ nhất trước, hệ số tải đến chảy đầu tiên (với dấu đỏ tại chỗ ứng suất đạt đỉnh) và hệ số tải đến mất ổn định. Hệ số dưới 1 nghĩa là chi tiết đã bị hỏng ngay khi chịu tải, và Vấn đề hiển thị một lỗi. Các hệ số lấy từ nghiên cứu tuyến tính, nên chỉ chính xác bằng nghiên cứu đó. Xem [Kiểm tra ứng suất và độ võng](topic:simulation#find-out-what-breaks-first-break-it).
- **Chảy dẻo và tiếp xúc.** Thêm hai loại nghiên cứu: một loại phi tuyến, trong đó vật liệu theo đường thẳng đến ứng suất chảy rồi theo độ dốc thoải hơn, với biến dạng dẻo được vẽ; và một loại tiếp xúc, trong đó các chi tiết rời tác động lẫn nhau (không ma sát) hoặc dính chặt (liên kết). Một bước tải không hội tụ được, hoặc các chi tiết lún quá sâu vào nhau, sẽ hiện trong bảng Vấn đề. Ma sát, trượt lớn, xoay lớn, độ võng lớn và mỏi chưa được giải. Xem [Kiểm tra ứng suất và độ võng](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Tệp đầu vào cho CalculiX.** {{ui:Xuất}} › {{ui:Tệp đầu vào CalculiX (.inp)}} lưu nghiên cứu cho CalculiX, một chương trình riêng bạn tự cài và chạy; {{ui:Xuất}} › {{ui:Kết quả CalculiX (.frd)}} đọc lại tệp kết quả của nó lên cùng lưới. PartCraft không bao giờ khởi chạy chương trình đó, và sẽ báo nếu chi tiết đã thay đổi kể từ khi tệp đầu vào được lưu.

### Lắp ráp

- **Nghiên cứu chuyển động.** {{ui:Lắp ráp}} › {{ui:Chuyển động}} điều khiển giá trị của một khớp theo thời gian bạn cho (tốc độ không đổi, giảm tốc, hình sin, hoặc đi rồi về), đặt lắp ráp ở mỗi bước với các khớp và vòng kín, và báo cáo các va chạm và mức độ gần của các chi tiết. {{ui:Thêm điểm}} vẽ vị trí, tốc độ và gia tốc của một điểm, giá trị khớp và khe hở theo thời gian; {{ui:Lưu CSV}} và {{ui:Lưu đồ thị}} ghi chúng ra. Sau khi {{ui:Chạy}}, Bước qua thanh chạy đưa lắp ráp đến bất kỳ bước nào. Cài đặt nghiên cứu được lưu trong tệp lắp ráp. Tốc độ và gia tốc tính từ các vị trí đã ghi, nên dùng nhiều bước hơn nếu một đỉnh nhọn đọc ra thấp. Xem [Kiểm tra lắp ráp về va chạm và chuyển động](topic:check-assembly#a-motion-study).

### Mặt và chi tiết từ vật lý

- **Không gian làm việc Mặt.** Chọn {{ui:Mặt}} trong hộp {{ui:Không gian làm việc}} để có đường cong và bề mặt NURBS bên cạnh chi tiết: {{ui:Đường cong}}, {{ui:Chuyển tiếp}}, {{ui:Quét}}, {{ui:Khớp}} và {{ui:Vằn ngựa}}, với tính liên tục (G0, G1 hoặc G2) đo trên các bề mặt chính xác và một cạnh kém hơn bạn yêu cầu được liệt kê trong Vấn đề kèm cách sửa Khớp. {{ui:Làm trơn}} đo các đường thân tàu để tìm điểm uốn và các bước nhảy độ cong, rồi dựng lại các đoạn không trơn trong dung sai của bạn. Bề mặt được lưu trong tệp chi tiết và không thay đổi đặc trưng của chi tiết. Xem [Mặt tự do (NURBS)](topic:nurbs-surfaces).
- **Không gian làm việc Kỹ thuật.** Chọn {{ui:Kỹ thuật}} trong bộ chuyển không gian làm việc, chọn một bộ sinh và nhấn {{ui:Mới}}: một kịch bản đặt kích thước chi tiết từ những gì nó phải làm (làm nóng để di chuyển, dòng chảy, áp suất, vật liệu, quy trình in) bằng các công thức giáo trình, rồi dựng chi tiết, sau đó trả lại các số đã dùng cùng nguồn của chúng, các kiểm tra chế tạo và tệp cho công cụ phân tích. Cùng đầu vào sẽ cho cùng chi tiết trên mọi máy tính. Bộ sinh được giữ trong chi tiết, và mở chi tiết không bao giờ chạy kịch bản. Xem [Chi tiết từ vật lý: bộ sinh](topic:engineer-generators) và [Viết bộ sinh](topic:write-a-generator).

### Phác thảo, bản vẽ và chế tạo

- **Phác thảo từ ảnh.** {{ui:Đặc trưng}} › {{ui:Thêm}} › {{ui:Phác thảo từ ảnh…}} vẽ lại một bức ảnh chi tiết phẳng trên nền trơn (đường bao và lỗ) hoặc một nét vẽ bút thành đường thẳng, cung tròn và vòng tròn. Bạn nhập một kích thước, kiểm tra bản xem trước và tạo phác thảo. Xem [Cơ bản về phác thảo](topic:sketch-basics#a-sketch-from-a-photo).
- **Tỷ lệ và chia để in.** {{ui:Xuất}} › {{ui:Thay đổi tỷ lệ để in (STL hoặc 3MF)…}} thay đổi tỷ lệ theo từng trục mà không đổi chi tiết, ví dụ theo lượng bù co ngót. {{ui:Xuất}} › {{ui:Chia để in (một tệp zip các mảnh)…}} cắt một chi tiết quá lớn so với bàn in thành các mảnh có đánh số, nối bằng chốt, khóa, mộng đuôi én, lỗ chốt hoặc hốc nam châm. Xem [In 3D](topic:print-3d).
- **Các tấm đã sắp xếp sang G-code.** {{ui:Xuất}} › {{ui:Các tấm đã sắp xếp sang G-code}} đọc một tệp DXF đã xếp và tạo một chương trình cho mỗi tấm qua bộ hậu xử lý (post) bạn chọn: lỗ và khoét trước, rồi đến đường bao. Nó không lập đường vào dao, thứ tự cắt hay cạnh dùng chung. Xem [Xếp chi tiết phẳng lên tấm](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Bản vẽ tự làm nhiều hơn.** {{ui:Tờ}} › {{ui:Tự động}} chọn tờ khổ A nhỏ nhất chứa các hình chiếu ở tỷ lệ tiêu chuẩn lớn nhất đến 1:1. {{ui:Ghi kích thước lỗ}} đặt dấu tâm lên mỗi lỗ, một ghi chú cho mỗi kích cỡ, và các vị trí tính từ góc dưới bên trái của hình chiếu. Xem [Tạo bản vẽ](topic:drawing-pdf).

### Trong mọi ứng dụng

- **Ngôn ngữ.** Các ứng dụng có 54 ngôn ngữ. Những ngôn ngữ ngoài tiếng Anh là bản dịch máy cho đến khi người bản ngữ đọc lại.
- **Số hàng thanh công cụ.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Số hàng thanh công cụ}} chọn Ngắt dòng (như trước), 2 hàng hoặc 1 hàng; thanh không vừa sẽ cuộn ngang. Dải lệnh Đặc trưng của PartCraft hiển thị công cụ dùng nhiều nhất lớn và giấu các biến thể sau một nút chia.
- **Kết nối AI của bạn.** Studio là trung tâm để kết nối trợ lý riêng của bạn với cả tám ứng dụng, với quyền chỉ đọc, đề xuất hoặc chỉnh sửa cho từng ứng dụng. Trợ lý đã kết nối có thể đặt kích thước chi tiết từ một câu như giá đỡ chịu tải, hiển thị cách làm và mọi kiểm tra, rồi dựng nó; nó báo những gì chưa kiểm tra (tập trung ứng suất, mỏi, rão trong nhựa). Xem [Dùng PartCraft với trợ lý AI](topic:use-with-ai-assistants).

## Đã sửa trong 0.8.1

- **Con trỏ bị treo ở toàn màn hình.** Việc chọn khi rê chuột (hover pick) giờ được giới hạn tốc độ. Nguyên nhân là cách đọc tốt nhất của chúng tôi và chưa được xác nhận với người báo lỗi.
- **Ngôn ngữ khi chạy.** Studio và các bản đóng gói có thể đổi ngôn ngữ khi đang chạy; trước đây chỉ có tiếng Anh. Điều này chưa được kiểm thử trên mọi nền tảng: hãy cho chúng tôi biết nếu ngôn ngữ không đổi.

## Chưa có trong phiên bản này

- Kết nối AI của bạn chưa hoàn thiện: kết nối một cú nhấp trong Studio, trình kết nối lưu trữ cho AI trình duyệt, khóa API riêng trong Studio và gói MCP đã xuất bản đều chưa được hứa. Studio không có AI riêng.
- Studio chưa được ký mã: Windows có thể cảnh báo, và macOS yêu cầu nhấp chuột phải rồi Mở. Xem [Khắc phục sự cố](topic:troubleshooting).
- Chuỗi dung sai vẫn chỉ một hướng: xem [Chuỗi dung sai](topic:tolerance-stackup).
- Phần còn lại được liệt kê trong [Những gì chưa xây dựng](topic:not-built-yet).

Các thay đổi trước đó nằm trong [Có gì mới trong 0.7](topic:whats-new-0-7).
