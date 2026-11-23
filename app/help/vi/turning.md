---
title: Tiện trên máy tiện
summary: Mặt, thô, hoàn thiện, rãnh, cắt đứt, ren và khoan một chi tiết tiện, từ đường bao chi tiết tạo ra khi quay. Dao tiện, tốc độ tiến theo vòng, hậu xử lý máy tiện, và những gì chưa được kiểm chứng.
keywords: tiện, máy tiện, tiện, mặt, thô, hoàn thiện, rãnh, cắt rãnh, cắt đứt, cắt tách, ren, tiện ren, g32, g33, g96, tốc độ bề mặt không đổi, css, bán kính mũi, mảnh dao thay, thanh, mâm cặp, đường kính, tiến dao trên vòng, g71, g76
from: d8cc53b0
---

{{ui:Gia công}} có bảy thao tác cho máy tiện. Chúng làm việc trên mọi chi tiết: thứ được cắt là **đường bao chi tiết tạo ra khi quay** quanh tâm phôi, nên một chi tiết không tròn được tiện về hình tròn bao quanh nó.

**Chưa có gì ở đây được chạy trên máy tiện.** Các đường chạy được kiểm tra với hình học bằng các bài kiểm thử; hai hậu xử lý máy tiện tuân theo mã đã được tài liệu hóa của bộ điều khiển. Kiểm chứng chương trình trong bộ mô phỏng của chính bộ điều khiển và chạy thử trên không trước.

## Thiết lập

Trên thẻ **Thiết lập**:

- **Trục dao** là trục trục chính, tức Z của máy tiện. Mặt trước của chi tiết ở +Z; mâm cặp giữ đầu kia.
- **Phôi**: chọn {{ui:Trụ}}, thanh. Độ lệch trên của nó là phần mặt đầu cắt đi.
- **Gốc gia công**: tâm đỉnh phôi hoặc đỉnh mô hình đặt Z0 trên mặt trước, vị trí thường dùng.
- **Điều khiển**: {{ui:Máy tiện kiểu Fanuc (.nc)}} hoặc {{ui:Máy tiện LinuxCNC (.ngc)}}. Hậu xử lý phay từ chối chương trình tiện và nói như vậy.
- **Tốc độ trục chính tối đa**: giới hạn mà tốc độ bề mặt được giữ dưới.

{{ui:Thêm}} trên thanh công cụ Gia công liệt kê bảy thao tác tiện ở đầu thẻ **Thao tác**. Thao tác đầu tiên bạn thêm sẽ mang theo dao riêng của nó: một **mảnh dao tiện** (bán kính mũi, góc mảnh, góc lưỡi cắt) hoặc một **lưỡi rãnh** (bề rộng, bán kính góc, mức nó vươn tới). Thay đổi chúng trên thẻ **Dụng cụ**. Tốc độ tiến tính theo vòng, và tốc độ là tốc độ bề mặt tính bằng m/min mà bộ điều khiển giữ khi đường kính thay đổi; đặt cho dao một vòng/phút riêng để cố định tốc độ.

## Các thao tác

| Thao tác | Nó làm gì |
|---|---|
| {{ui:Mặt}} | Làm mặt trước của thanh xuống đến chi tiết, mỗi lần một bước hạ dao, từ ngoài vào đến ngay sau tâm. |
| {{ui:Thô}} | Các lượt dọc Z cách nhau một **chiều sâu cắt**, xuống đến đường bao cộng **lượng dư để lại**; rồi một lượt dọc đường bao để lấy các bậc. Một rãnh giữa hai vai được đi vào bằng một đâm sâu một chiều sâu cắt. |
| {{ui:Hoàn thiện}} | Một lượt dọc đường bao với một phần của tốc độ tiến của dao. |
| {{ui:Rãnh}} | Đâm lưỡi cạnh nhau ở mọi nơi nó có thể cắt nhiều hơn giới hạn lượng phôi còn lại: các rãnh mà mảnh dao tiện không tới được. **Từ / đến Z** thu hẹp nó. |
| {{ui:Cắt đứt}} | Cắt chi tiết ngay sau mặt sau của nó, đến ngay sau tâm, với các lần mổ nếu bạn đặt. |
| {{ui:Ren}} | Ren ngoài: đường kính ngoài, bước, chiều dài, số lượt. Độ sâu 0 nghĩa là 0.6134 × bước (ren 60°). Mỗi lượt lấy cùng diện tích phoi; các lượt không tải lặp lại lượt cuối. |
| {{ui:Khoan}} | Mũi khoan trên đường tâm đến một độ sâu, với các lần mổ. |

## Cách giữ dao khỏi chi tiết

Mảnh dao được xem như chính nó: vòng mũi, và phía sau là cạnh sau, một đường thẳng có góc bằng 180° trừ góc lưỡi cắt và góc mảnh. Hình dạng đó được hạ xuống đường bao tại mọi điểm dọc Z, và đường chạy là nơi nó dừng lại. Vì vậy:

- **Bán kính mũi đã nằm trong đường chạy.** Các post không ghi `G41` hay `G42`; tọa độ là điểm lập trình của dao (góc của hình vuông bao quanh mũi).
- Mảnh dao **không thể đi theo thành dốc hơn cạnh sau của nó**. Một rãnh phía sau vai bị bỏ qua, và thao tác hoàn thiện cho biết có bao nhiêu đường bao mà nó không tới được. Thao tác {{ui:Rãnh}} sẽ xử lý phần đó.
- Phôi được theo dõi dọc Z sau mỗi lần cắt, nên thô không cắt không khí, rãnh tìm phần còn lại, và mỗi thao tác hiển thị thể tích nó lấy đi và liệu nó có cắt vào chi tiết không.

## Giới hạn

- **Chỉ tiện ngoài**: không có thanh doa, không có rãnh trong hay ren trong, không có rãnh mặt.
- Một trục chính, chi tiết được kẹp ở −Z. Không có trục chính phụ, không có dao sống, không có trục C hay Y, không có chuyển động giá đỡ giữa hay ụ động.
- Đường chạy là di chuyển thẳng: các đường cong là đoạn thẳng ngắn trong dung sai (không có `G2`/`G3`), và thô và ren được ghi từng lượt (không có chu kỳ `G71` hay `G76`).
- Ren là các lượt thẳng với một đường kéo ra thẳng ở cuối; cho ren một rãnh thoát. Ren không được hiển thị trên phôi.
- Khoan trên tâm không thay đổi mô hình phôi.
- Thân, tháp dao và mâm cặp không được kiểm tra. Đặt **Dừng tại Z** để giữ dao tránh các má kẹp.
- Tốc độ tiến và tốc độ là giá trị khởi đầu, như khi phay.
