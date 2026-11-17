---
title: Kiểm tra ứng suất và độ võng (Mô phỏng)
summary: Chọn vật liệu, cố định các mặt, thêm lực, áp suất hoặc trọng lượng riêng của chi tiết, giải, rồi đọc ứng suất von Mises, chuyển vị, hệ số an toàn, phản lực và tần số riêng trên mô hình, cùng những gì phương pháp có thể và không thể cho bạn biết.
keywords: mô phỏng, FEA, phân tích trực tiếp, cập nhật khi chỉnh sửa, phá hủy, cái gì hỏng trước, hệ số tải, phi tuyến, dẻo, chảy dẻo, biến dạng dẻo, song tuyến, tiếp xúc, cặp tiếp xúc, phạt, dính kết, tiếp xúc không ma sát, CalculiX, .inp, .frd, phần tử hữu hạn, ứng suất, biến dạng, von Mises, chuyển vị, độ võng, hệ số an toàn, giới hạn chảy, phản lực, tải, lực, áp suất, trọng lực, trọng lượng bản thân, cố định, không ma sát, gối đỡ, ràng buộc, vật liệu, thép, nhôm, titan, ABS, PLA, nylon, tần số riêng, modal, rung động, lưới, kích thước phần tử, tứ diện, lưới tứ diện, voxel, chất lượng lưới, ứng suất chính, biến dạng tương đương, ước tính sai số, mặt cong, lỗ, bo tròn, thích ứng, tinh chỉnh tự động, h-adaptive, hội tụ, hội tụ lưới, bề mặt chính xác, mặt cầu, nón, xuyến, spline, tự do
from: 6f2fdec1
---

Không gian làm việc Mô phỏng trả lời câu hỏi "nó có cong hoặc gãy dưới tải này không?" cho chi tiết bạn đang mô hình hóa. Đó là một nghiên cứu **tĩnh tuyến tính** (biến dạng nhỏ, vật liệu giữ tính đàn hồi) hoặc một nghiên cứu **tần số riêng**, được giải trên một lưới các tứ diện bậc hai bám theo các mặt của chi tiết (hoặc, nếu bạn chọn, trên các khối lập phương nhỏ bằng nhau). Nó hoạt động trên các mặt được đặt tên mà lõi lưới cung cấp cho chi tiết (xem [Lõi lưới](topic:solid-kernels)).

Chọn **Mô phỏng** trong hộp **Không gian làm việc** ở bên trái thanh công cụ. Chi tiết của bạn không bị thay đổi; nghiên cứu được lưu bên trong tệp chi tiết và mọi thay đổi trong đó đều có thể hoàn tác.

## Thiết lập một nghiên cứu

1. Nhấn **Nghiên cứu mới** trong bảng bên phải.
2. Chọn **Vật liệu**. Bảng hiển thị độ cứng (E), hệ số Poisson, khối lượng riêng và giới hạn chảy. Các giá trị là số liệu tiêu chuẩn trong sổ tay; giá trị chứng nhận từ nhà cung cấp của bạn có thể khác.
3. Chọn **Lưới**:
   - **Tứ diện (chính xác)**, mặc định: các tứ diện 10 nút có mặt ngoài nằm trên các mặt của chi tiết, với các cạnh cong ở lỗ, bo tròn và các mặt tròn khác. Các nút trên mặt phẳng, mặt trụ, mặt nón, mặt cầu và mặt xuyến, các mặt tạo bởi xoay và đùn, và các mặt tự do (B-spline) nằm trên bề mặt chính xác; mọi loại mặt khác đi theo lưới hiển thị của nó, và bảng kết quả cho biết có bao nhiêu mặt như vậy. Lưới tự được làm mịn hơn gần các mặt cong, thành mỏng và cạnh sắc.
   - **Khối voxel (nhanh)**: chi tiết được lấp đầy bằng các khối lập phương bằng nhau. Nhanh, nhưng các mặt cong trở thành bậc thang. Các nghiên cứu được lưu trước khi có lưới tứ diện vẫn giữ kiểu này.
4. Để trống **Kích thước phần tử** để có kích thước tự động (khoảng 12.000 tứ diện, hoặc 20.000 khối lập phương), hoặc gõ một giá trị theo mm. Bảng hiển thị khoảng bao nhiêu phần tử sẽ được tạo trước khi thêm các điểm mịn hơn. Với tứ diện, **Phần tử nhỏ hơn trên mặt cong** (bật mặc định) làm mịn các lỗ và bo tròn, nơi ứng suất thường đạt đỉnh.

### Tự động tinh chỉnh

Với tứ diện, một nghiên cứu tĩnh hoặc mất ổn định (không có tải nhiệt), một nghiên cứu tần số riêng và một nghiên cứu nhiệt ổn định đều cung cấp **Tự động tinh chỉnh (thích ứng)**. Đánh dấu nó và đặt:

- **Sai số mục tiêu (%)**: việc giải dừng khi sai số ước tính nhỏ hơn giá trị này (ban đầu là 1 %).
- **Số lượt tối đa**: số lần giải nhiều nhất được chạy (ban đầu là 5, tối đa 10).

Mỗi lượt giải, tìm các phần tử có sai số ước tính lớn nhất, chia chúng (và tối thiểu các phần tử lân cận cần thiết để giữ lưới liền mạch), rồi giải lại. Các nút mới trên mặt cong được đưa lên bề mặt chính xác. Kết quả khi đó hiển thị một bảng và một biểu đồ gồm, cho mỗi lượt, số phần tử, số ẩn số, sai số ước tính và ứng suất đỉnh (hoặc nhiệt độ) cùng chuyển vị (hoặc thông lượng nhiệt), và một dòng cho biết lý do dừng: đã đạt mục tiêu, đã hết lượt, lưới kế tiếp sẽ quá lớn, hoặc một lượt thất bại (khi đó bạn thấy lượt đúng cuối cùng).

Hãy đọc con số ước tính như một ước tính. Nó (Zienkiewicz–Zhu; so với đáp án chính xác, nó đọc khoảng 0,6 đến 0,95 sai số thật) đo sai số trên **toàn bộ chi tiết**, nên ứng suất đỉnh tại một lỗ hoặc một bo tròn thường vẫn hơi sai khi con số ước tính có vẻ nhỏ: với một tập trung ứng suất, đặt mục tiêu dưới 1 % và theo dõi đỉnh ổn định dần qua các lượt. Tại một góc trong sắc hoặc mép của một mặt cố định, ứng suất thật là vô hạn, nên ước tính không bao giờ tiến tới đó: các lượt sẽ hết thay vì vậy.

**Tần số riêng và mất ổn định.** Với nghiên cứu tần số riêng, ước tính bao phủ mọi dạng dao động bạn yêu cầu, mỗi dạng được tính như nhau; bảng và biểu đồ theo dõi hai tần số đầu tiên. Trên một chi tiết chỉ có mặt phẳng, một tần số chỉ có thể giảm qua các lượt (mỗi lưới giữ lại lưới trước đó); các mặt cong cũng tiến gần hơn hình dạng thật của chúng, điều này có thể làm một tần số dịch chuyển chút ít theo cả hai chiều. Với mất ổn định, ước tính bao phủ ứng suất trước và các dạng mất ổn định, và bảng theo dõi các hệ số tải. Đã kiểm tra trên một thanh thép 100 × 10 × 10 mm: tần số đầu tiên hội tụ từ 812,4 xuống 811,9 Hz qua bốn lượt, thấp hơn 0,4 % so với Euler–Bernoulli (bỏ qua cắt), và hệ số tải của cột nằm trong khoảng 0,5 % so với Euler.

## Giữ và tải

Mọi nghiên cứu cần ít nhất một gối đỡ và, với ứng suất, ít nhất một tải.

1. Nhấn {{ui:Fixed}} trong thanh công cụ. Gối đỡ mới được chọn và đang chờ các mặt: nhấp vào các mặt được giữ cố định (nhấp lại một mặt để bỏ nó). Nhấn **Chọn xong** hoặc {{key:Esc}} khi hoàn tất. Các hình nón màu xanh đánh dấu các mặt được giữ.
2. Nhấn {{ui:Force}} và nhấp vào các mặt mà lực tác dụng lên. Trong bảng, gõ **Tổng lực** tính bằng newton và chọn **Hướng**: vào trong mặt, hoặc dọc theo một trục. Lực được chia đều cho các mặt đã chọn theo diện tích. Các mũi tên màu cam hiển thị nó.
3. Nhấn {{ui:Pressure}} để đặt áp suất tính bằng MPa (N/mm²) đẩy vào các mặt đã chọn; áp suất âm sẽ kéo.

Nhiều loại khác có trong danh sách **Thêm** của bảng: một **Mặt không ma sát** (mặt có thể trượt dọc theo chính nó nhưng không di chuyển ra khỏi nó — dùng cho mặt phẳng đối xứng và gối đỡ trơn) và **Trọng lực** (trọng lượng riêng của chi tiết, 9,81 m/s², theo hướng bạn chọn).

Một gối đỡ để chi tiết tự do trượt hoặc quay sẽ bị từ chối, kèm thông báo chuyển động nào còn tự do.

## Giải và đọc kết quả

Nhấn {{ui:Solve}}. Công việc chạy ở nền; **Dừng** sẽ hủy nó. Sau đó:

- Chi tiết được tô màu theo **ứng suất von Mises**; chọn **Chuyển vị** hoặc **Hệ số an toàn** trong **Hiển thị**. Thang màu cho biết tỷ lệ.
- Đưa con trỏ vào chi tiết để đọc các giá trị dưới con trỏ.
- Đánh dấu **Hình dạng biến dạng** để xem chi tiết bị cong (chuyển động được phóng đại theo **Tỷ lệ**; chuyển động thật là số trong bảng).
- Bảng liệt kê ứng suất lớn nhất và vị trí của nó, chuyển vị lớn nhất, **hệ số an toàn** nhỏ nhất (giới hạn chảy ÷ ứng suất von Mises; dưới 1 thì vật liệu chảy dẻo), tải đã áp dụng và các **phản lực** tại các gối đỡ (chúng cân bằng với tải), cùng lưới đã dùng.

Với **tần số riêng**, chọn **Loại** đó, đặt số **Dạng**, rồi giải. Mỗi dạng hiển thị tần số và hình dạng của nó (các hình dạng được chia tỷ lệ về 1 tại chuyển động lớn nhất).

Nếu bạn thay đổi chi tiết, các kết quả được đánh dấu là đã lỗi thời: hãy giải lại.

## Chảy dẻo và tiếp xúc (nghiên cứu phi tuyến)

Hai loại nghiên cứu nữa vượt ra ngoài "vật liệu giữ tính đàn hồi":

- **Phi tuyến (vật liệu chảy dẻo)** đi theo đường thẳng của vật liệu đến giới hạn chảy, rồi đến một độ dốc thoải hơn (**Độ dốc sau chảy**, 1 % E nếu để trống). Tải tăng dần qua các **Bước tải**; một bước không hội tụ sẽ tự chia đôi. Kết quả thêm **Biến dạng dẻo** vào các biểu đồ và cho biết bao nhiêu phần tải đã được chịu. Nếu một bước vẫn không hội tụ, nghiên cứu dừng ở bước đúng cuối cùng và bảng ⚠ Vấn đề cho biết ở đâu: chi tiết đã hết độ bền tại đó (một sự sụp đổ), hoặc các bước quá lớn.
- **Tiếp xúc giữa các phần** cho phép các phần riêng biệt của chi tiết đẩy vào nhau. Thêm một **Cặp tiếp xúc**, chọn các mặt của phía A (các mặt ép) bằng {{ui:Pick faces}}, rồi phía B bằng {{ui:Pick side B faces}}. Các phần **không ma sát** đẩy, trượt và tách ra; các phần **dính kết** giữ chặt. Mỗi phần được lưới riêng, nên một khe hở nhỏ giữa chúng không sao. Tiếp xúc là một phương pháp phạt: các phần lún nhẹ vào nhau (**hệ số phạt** × E ÷ kích thước phần tử quyết định độ cứng của tiếp xúc). Bảng hiển thị độ lún sâu nhất, và bảng Vấn đề cảnh báo khi nó lớn hơn 1 % kích thước phần tử: tăng hệ số hoặc dùng phần tử nhỏ hơn.

Cả hai đều dùng lưới tứ diện. Ma sát, trượt lớn và xoay lớn chưa được giải ở đây.

## Chạy trong CalculiX

**Xuất › Bộ dữ liệu CalculiX (.inp)** (hoặc {{ui:Save a CalculiX deck (.inp)}} trong bảng) lưu nghiên cứu thành một tệp đầu vào cho CalculiX, một chương trình riêng mà bạn tự cài đặt và chạy: cùng lưới, vật liệu, gối đỡ, tải và các cặp tiếp xúc, theo mm, N và MPa. Chạy nó, rồi **Xuất › Kết quả CalculiX (.frd)** đọc tệp kết quả của nó trở lại trên cùng lưới và hiển thị chuyển vị (và ứng suất von Mises khi tệp có ứng suất). Nếu bạn đã thay đổi chi tiết hoặc kích thước phần tử ở giữa, lưới sẽ không còn giống nhau và PartCraft sẽ báo điều đó: hãy lưu một bộ dữ liệu mới.

## Mức độ tin cậy

PartCraft kiểm tra bộ giải của nó với các công thức tính tay (độ võng đầu mút của công xôn PL³/3EI trong vòng 1 %, độ giãn của thanh PL/AE chính xác, tần số đầu tiên của công xôn trong vòng 3 %, ứng suất quanh một lỗ trong tấm). Tuy vậy, hãy ghi nhớ các giới hạn sau:

- **Lưới.** Với tứ diện, PartCraft kiểm tra độ võng và ứng suất uốn của công xôn (trong vòng 0,3 %), ứng suất tại một lỗ trong tấm (Kt, trong khoảng 1 %), một ống dày chịu áp suất (Lamé, trong vòng 0,3 %) và tần số đầu tiên (trong vòng 0,4 %). Bảng hiển thị **chất lượng lưới** (góc nhỏ nhất và lớn nhất giữa các mặt phần tử; dưới khoảng 10° thì một phần tử là kém) và một **sai số ứng suất ước tính**: nếu nó lớn hơn vài phần trăm, hãy giải lại với kích thước phần tử nhỏ hơn, hoặc để **Tự động tinh chỉnh** làm việc đó. Trên một tấm có lỗ và một thanh có hai rãnh cạnh, tự động tinh chỉnh đạt trong vòng 1 % so với Kt trong sách giáo khoa chỉ với khoảng một phần sáu số ẩn số mà việc làm mịn toàn bộ lưới cần. Với khối lập phương voxel, một lỗ hoặc một bo tròn là một bậc thang ở kích thước khối, nên ứng suất ở đó chỉ là ước lượng thô.
- **Góc trong sắc và mép của các mặt cố định không có đỉnh ứng suất thật.** Giá trị ở đó tiếp tục tăng khi các phần tử nhỏ đi. Hãy đọc ứng suất cách xa những nơi như vậy một chút, hoặc bo tròn góc trong mô hình.
- **Kết quả cần đọc.** Ngoài ứng suất von Mises, chuyển vị và hệ số an toàn, một nghiên cứu tứ diện hiển thị **ứng suất chính lớn nhất và nhỏ nhất** (kéo và nén) và **biến dạng tương đương**. Đánh dấu **Hiện lưới** để xem các phần tử.
- **Các nghiên cứu tĩnh là tuyến tính và đàn hồi.** Với chảy dẻo và tiếp xúc, dùng các loại nghiên cứu phi tuyến ở trên; biến dạng lớn và mỏi chưa được giải. Nhiệt, ứng suất nhiệt và mất ổn định tuyến tính là các loại nghiên cứu riêng: xem [Nhiệt, ứng suất nhiệt và mất ổn định](topic:thermal-and-buckling).
- **Mọi vật liệu giống nhau theo mọi hướng.** Nhựa in 3D yếu hơn theo các lớp của nó, thường một phần ba hoặc hơn.
- Đây là một bản dựng thử nghiệm: hãy kiểm tra những chi tiết quan trọng bằng một cách khác.

## Cập nhật khi bạn chỉnh sửa (Live)

Đánh dấu **Cập nhật khi tôi chỉnh sửa** trong khối Giải, và các kết quả Mô phỏng sẽ theo sát các chỉnh sửa của bạn. Thay đổi một kích thước, một tải, vật liệu hoặc môi trường, và một **kết quả nhanh** hiện ra ngay, được tính với các phần tử lớn gấp bốn lần của nghiên cứu; khi bạn dừng một lát (khoảng một giây), **kết quả tinh chỉnh** của chính nghiên cứu sẽ thay thế nó. Kết quả cho biết bạn đang xem cái nào ("Kết quả nhanh" hoặc "Kết quả tinh chỉnh") và kích thước phần tử. Kết quả nhanh tốt cho hướng và độ lớn: trên một công xôn thép, nó nằm trong vòng 1 % về độ võng và khoảng 4 % về ứng suất so với kết quả tinh chỉnh. Hãy tin vào kết quả tinh chỉnh cho các con số bạn sẽ dùng. Các nghiên cứu tĩnh, tần số riêng, nhiệt và mất ổn định đều hoạt động theo cách này; Live là một thiết lập hiển thị và không được lưu trong chi tiết. Một lần Giải do bạn tự nhấn sẽ giữ nguyên cho đến khi có chỉnh sửa tiếp theo.

## Tìm xem cái gì hỏng trước (Phá hủy)

Với một nghiên cứu tĩnh hoặc mất ổn định, nhấn **Cái gì hỏng trước?** trong khối **Phá hủy**. PartCraft tăng các tải của nghiên cứu (lực, áp suất và trọng lượng cùng nhau) cho đến khi chi tiết nhường bước, rồi liệt kê, từ tệ nhất trở đi, **hệ số tải đến khi chảy dẻo đầu tiên** (hệ số trên các tải hiện tại mà ứng suất von Mises cao nhất đạt giới hạn chảy, có một dấu đỏ tại nơi nó xảy ra) và **hệ số tải đến mất ổn định** với cùng các gối đỡ và tải. Hệ số 4,3 nghĩa là chi tiết chịu được 4,3 lần tải của nó trước khi chảy dẻo; **hệ số dưới 1 nghĩa là nó đã nhường bước ngay với tải như hiện có**, và điều đó xuất hiện trong danh sách Vấn đề như một lỗi (phát hiện yếu nhất được hiển thị như một ghi chú ngay cả khi mọi thứ đều ổn). Các hệ số đến từ một nghiên cứu tuyến tính trên tứ diện ở kích thước phần tử của bạn, nên chúng chính xác bằng mức độ chính xác của nghiên cứu đó: ứng suất tại một mặt cố định hoặc một góc sắc không có đỉnh thật (xem bên dưới), và hệ số chảy dẻo sẽ thiên về phía thận trọng ở đó. Trợ lý của bạn có thể chạy cùng kiểm tra này bằng công cụ `break_run`.

## Liên quan

- [Nhiệt, ứng suất nhiệt và mất ổn định](topic:thermal-and-buckling)
- [Tạo hình từ tải (Sinh tạo)](topic:generative-design)
- [Đo khoảng cách, góc và khối lượng](topic:measure)
- [Những gì chưa xây dựng](topic:not-built-yet)
