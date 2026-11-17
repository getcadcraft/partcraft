---
title: Nhiệt, ứng suất nhiệt và mất ổn định
summary: Tìm nhiệt độ trong chi tiết từ nhiệt độ cố định, thông lượng nhiệt, công suất nhiệt, đối lưu và bức xạ (ổn định hoặc theo thời gian), tải một nghiên cứu ứng suất với sự tăng nhiệt độ, và tìm tải trọng mà một chi tiết mảnh bị mất ổn định, cùng những gì mỗi phương pháp có thể và không thể cho bạn biết.
keywords: nhiệt, truyền nhiệt, nhiệt, nhiệt độ, dẫn nhiệt, đối lưu, hệ số màng, bức xạ, độ phát xạ, thông lượng nhiệt, công suất nhiệt, sinh nhiệt, tản nhiệt, quá độ, thời gian, làm nguội, làm nóng, Crank-Nicolson, Euler ẩn, cân bằng nhiệt, ứng suất nhiệt, ứng suất nhiệt theo thời gian, ứng suất nhiệt quá độ, tôi nhiệt, sốc nhiệt, lịch sử ứng suất, thời điểm tệ nhất, giãn nở nhiệt, hệ số giãn nở, mất ổn định, mất ổn định Euler, hệ số tải, tải tới hạn, cột, mảnh, giá trị riêng
from: 1a1b7545
---

Các nghiên cứu này nằm trong không gian làm việc Mô phỏng, cạnh ứng suất tĩnh và tần số riêng (xem [Kiểm tra ứng suất và độ võng](topic:simulation)). Chọn chúng trong hộp **Loại** của panel. Chúng dùng cùng lưới khối nhỏ và cùng danh sách vật liệu; mọi vật liệu trong thư viện đều có độ dẫn nhiệt, nhiệt dung riêng và hệ số giãn nở (giá trị tham khảo thông thường, hiển thị trong **Thuộc tính**).

## Nhiệt: nhiệt đi đâu?

1. Chọn **Nhiệt (truyền nhiệt)** làm **Loại**.
2. Thêm các điều kiện nhiệt từ danh sách **Thêm** của panel, rồi nhấp các mặt của chúng (như với gối đỡ và tải):
   - **Nhiệt độ cố định**: mặt được giữ ở một nhiệt độ, tính bằng °C.
   - **Thông lượng nhiệt**: W/m² chảy vào mặt (âm là chảy ra). Nó tác động lên diện tích thực của mặt, ngay cả chỗ các khối tạo thành bậc thang.
   - **Công suất nhiệt**: tổng bằng watt, chia cho các mặt đã chọn theo diện tích. Dùng cho bộ gia nhiệt hoặc một vi mạch có công suất đã biết.
   - **Đối lưu**: không khí hoặc chất lỏng ở một nhiệt độ mang nhiệt đi với h W/(m²·K). h thông thường: không khí tĩnh 5–10, quạt 25–100, nước 500–10,000. PartCraft không tính h: nghiên cứu này không có dòng chảy chất lỏng.
   - **Bức xạ**: mặt bức xạ ra môi trường xung quanh ở một nhiệt độ, với độ phát xạ từ 0 đến 1. Nó được **tuyến tính hóa** (bức xạ được viết thành một hệ số phụ thuộc nhiệt độ và giải lại cho đến khi ổn định) và chỉ truyền ra môi trường: các mặt không trao đổi nhiệt với nhau.
3. **Sinh nhiệt** (W/m³) làm nóng toàn bộ chi tiết từ bên trong, ví dụ một chi tiết điện trở.
4. Nhấn **Giải**. Chi tiết được tô màu theo nhiệt độ; chọn **Thông lượng nhiệt** trong **Hiển thị** để xem nhiệt chảy ở đâu. Trỏ vào chi tiết để đọc cả hai.

Dòng nhiệt ổn định cần có chỗ để nhiệt đi: ít nhất một nhiệt độ cố định, đối lưu hoặc bức xạ. Chi tiết chỉ nhận nhiệt vào thì không có trạng thái ổn định; hãy chuyển sang quá độ.

Bảng liệt kê nhiệt độ thấp nhất và cao nhất cùng vị trí của chúng, thông lượng nhiệt lớn nhất, và **cân bằng nhiệt**: nhiệt vào hoặc ra của từng điều kiện (một nhiệt độ cố định được tính theo lượng nó phải cung cấp hoặc hấp thụ), nhiệt sinh ra, tổng vào và ra, và **sai lệch**. Sai lệch nên chỉ là một phần rất nhỏ của nhiệt vào; nếu lớn, kết quả không đáng tin.

### Theo thời gian (quá độ)

Tích **Quá độ** và đặt **Nhiệt độ ban đầu** (toàn bộ chi tiết bắt đầu ở đó), một **Khoảng thời gian** và số **Bước thời gian**. **Euler ẩn** ổn định; **Crank–Nicolson** chính xác hơn với cùng số bước nhưng có thể gợn sóng sau một thay đổi đột ngột. Sau khi giải, kéo thanh trượt **Thời gian** để xem nhiệt độ tại từng thời điểm (thang màu giữ nguyên cho mọi thời điểm). Khi đó cân bằng nhiệt bao gồm nhiệt đang được tích trữ.

## Ứng suất nhiệt: thay đổi nhiệt độ làm gì với chi tiết?

Trong nghiên cứu **Ứng suất tĩnh** (hoặc **Mất ổn định**), đặt **Tải nhiệt**:

- **Thay đổi nhiệt độ đều**: toàn bộ chi tiết nóng lên (hoặc nguội đi, với số âm) bằng bấy nhiêu kelvin.
- **Nhiệt độ từ các điều kiện nhiệt**: thêm điều kiện nhiệt vào cùng nghiên cứu; nhiệt độ ổn định được giải trước trên cùng lưới, rồi chi tiết giãn nở α·(T − **nhiệt độ không ứng suất**).
- **Nhiệt độ theo thời gian (chạy quá độ)**: thêm điều kiện nhiệt, rồi đặt **Nhiệt độ ban đầu**, **Khoảng thời gian**, **Số bước thời gian** và **Phương pháp bước thời gian** như với nghiên cứu nhiệt quá độ. Nhiệt độ được giải theo thời gian trên cùng lưới (khối hoặc tứ diện), và một lần giải tĩnh trên nhiệt độ của mỗi thời điểm cho ứng suất tại thời điểm đó. **Ứng suất tại**:
  - **Thời điểm tệ nhất** (lúc bắt đầu): **Số lần giải ứng suất** các thời điểm trải đều trong suốt quá trình chạy, kể cả lúc bắt đầu (21 nếu bạn không đổi, tối đa 51). Kết quả mở ở thời điểm có ứng suất von Mises lớn nhất; bảng nêu tên thời điểm đó, một biểu đồ nhỏ thể hiện ứng suất đỉnh theo thời gian, và thanh trượt **Thời gian** hiển thị ứng suất tại mọi thời điểm đã giải (thang màu giữ theo thời điểm tệ nhất).
  - **Một thời điểm chọn**: một thời điểm, là bước thời gian gần nhất với **Thời gian (s)** bạn nhập. Nghiên cứu mất ổn định luôn lấy một thời điểm chọn (cuối quá trình chạy trừ khi bạn đặt khác).

Một chi tiết bị tôi (nhúng từ nóng vào lạnh) hoặc bị nung nóng đột ngột chịu ứng suất lớn nhất khi bên trong và bề mặt chênh lệch nhau nhiều nhất: thường ngay lúc đầu. Nhiệt độ cố định áp dụng từ thời điểm đầu tiên, như một thay đổi đột ngột, nên ứng suất ngay lúc đầu phụ thuộc vào kích thước phần tử (chỉ vài phần tử thấy được thay đổi). Hãy đọc nó là "rất cao", và xem các thời điểm tiếp theo trên thanh trượt để có giá trị mà lưới giải được. Ứng suất mang tính bán tĩnh: không có quán tính, không có rung do thay đổi đột ngột.

Một chi tiết được tự do giãn nở thì không có ứng suất nhiệt: chỉ giữ nó vừa đủ để nó không di chuyển (ví dụ ba mặt không ma sát vuông góc nhau). Khi bị kẹp giữa hai bức tường thì nó bị ép: một thanh thép được nung nóng thêm 50 K giữa hai bức tường cứng chịu khoảng 117 MPa. Tải nhiệt tự cân bằng, nên các phản lực vẫn chỉ cân bằng với tải cơ học.

## Mất ổn định: khi nào một chi tiết mảnh bị gãy đổ?

1. Chọn **Mất ổn định (tuyến tính)** làm **Loại**, và thêm gối đỡ và tải như với nghiên cứu tĩnh.
2. Đặt **Số hệ số tải cần tìm** (số dạng mất ổn định).
3. Nhấn **Giải**. Mỗi dạng có một **hệ số tải**: bội số của các tải bạn đặt mà chi tiết lý tưởng bị mất ổn định. Hệ số tải 3 nghĩa là gấp ba lần các tải của bạn; **hệ số tải dưới 1 nghĩa là nó mất ổn định dưới các tải bạn đã đặt**. Bảng cũng cho tổng tải tại mỗi hệ số. Hình dạng mất ổn định cho thấy nó sẽ mất ổn định thế nào (kích thước của nó không có ý nghĩa).

**Mất ổn định tuyến tính đánh giá cao tải mất ổn định thực.** Nó giả định một chi tiết hoàn hảo: thẳng tuyệt đối, không có ứng suất dư, và đàn hồi. Chi tiết thực có sai lệch nhỏ và có thể chảy dẻo trước, còn vỏ thành mỏng có thể mất ổn định ở một phần nhỏ giá trị tuyến tính. Hãy dùng biên an toàn rộng, và coi hệ số tải gần hoặc dưới 3 đối với vỏ mỏng là một cảnh báo.

## Mức độ tin cậy

PartCraft kiểm tra các bộ giải này với các công thức tính tay: một thanh giữa hai nhiệt độ (chính xác), một cánh tản nhiệt (trong 0.3 K), một tấm tự nung nóng (chính xác), một khối nguội theo thời gian (trong 0.1 % với Crank–Nicolson), một thanh bị nung nóng đột ngột ở một đầu, một thanh tự do được nung nóng (không có ứng suất, ΔL = αLΔT), một thanh bị kẹp giữa hai bức tường (σ = −EαΔT), một tấm bị tôi theo thời gian so với nghiệm chuỗi cổ điển (trong 1 % trên khối, 2.1 % trên tứ diện tại tâm tấm; 0.5 % tại bề mặt), thời điểm cuối của một quá trình chạy dài so với ứng suất nhiệt ổn định (trùng nhau đến một phần triệu), và các cột Euler (trong 1 % ngàm–tự do, 1.5 % khớp–khớp). Lưu ý:

- **Giá trị vật liệu hằng số.** Độ dẫn, nhiệt dung riêng và giãn nở không thay đổi theo nhiệt độ ở đây; ở vài trăm độ chúng có thể thay đổi 10–30 %. Độ cứng cũng không đổi.
- **Ứng suất theo thời gian mang tính bán tĩnh và đàn hồi**: mỗi thời điểm là một lần giải tĩnh (không có quán tính), và không có chảy dẻo, nên một lần tôi làm bề mặt chảy sẽ hiển thị ứng suất vượt giới hạn chảy thay vì vậy.
- **Hệ số đối lưu là đầu vào của bạn**, không được tính từ dòng không khí hoặc nước.
- **Không có điện trở tiếp xúc**: chi tiết là một khối đặc.
- **Chỉ mất ổn định tuyến tính**: không có sai lệch, không chảy dẻo, không có hành vi sau khi mất ổn định.
- Lưới khối bậc thang và các góc trong sắc ảnh hưởng đến ứng suất nhiệt giống như các ứng suất khác (xem [Kiểm tra ứng suất và độ võng](topic:simulation)).
- Đây là bản dựng thử nghiệm: hãy kiểm tra bằng cách khác cho những chi tiết quan trọng.

## Liên quan

- [Kiểm tra ứng suất và độ võng (Mô phỏng)](topic:simulation)
- [Chưa xây dựng những gì](topic:not-built-yet)
