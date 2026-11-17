---
title: Quét, chuyển tiếp và độ nghiêng khuôn
summary: Quét một biên dạng kín dọc theo đường dẫn gồm các đường phác thảo hoặc cạnh của mô hình, chuyển tiếp qua các mặt cắt nằm trên những mặt phẳng khác nhau, và thêm độ nghiêng khuôn cho các mặt; kèm các tùy chọn, kết quả chính xác và thông báo.
keywords: quét, khối quét, cắt quét, ống, đường dẫn, chuyển tiếp, khối chuyển tiếp, pha trộn mặt cắt, kẻ thẳng, độ nghiêng, góc nghiêng khuôn, mặt côn, mặt phẳng trung hòa, hướng kéo, đúc khuôn
from: 9d637981
---

:::note
**Trong phiên bản này** quét và chuyển tiếp chưa được xây dựng: chúng cần một kernel hình học chính xác, mà phiên bản PartCraft này không có. [Chưa xây dựng những gì](topic:not-built-yet) nói rõ phải làm gì thay thế; các mục Quét và Chuyển tiếp mô tả chúng như khi chạy với kernel chính xác. **Độ nghiêng khuôn hoạt động** trên các mặt phẳng: kernel lưới dựng nó, cho cùng kết quả như kernel chính xác.
:::

Cả ba nằm trong menu {{ui:Thêm}} của nhóm Đặc trưng (xem [Kernel lưới](topic:solid-kernels)). Mỗi lệnh có thể thêm vật liệu, cắt đi, chỉ giữ phần chồng lên nhau (**Giao**) hoặc tạo một **Khối mới** (quét và chuyển tiếp: **Thao tác** trong panel).

## Quét

Quét đưa một biên dạng kín dọc theo một đường dẫn: ống, tay cầm, lò xo dây, ray.

1. Vẽ **đường dẫn** trong một phác thảo: các đường thẳng và cung nối tiếp đầu cuối (hoặc dùng cạnh mô hình, bên dưới).
2. Vẽ **biên dạng** trong một phác thảo khác có mặt phẳng đi qua một đầu của đường dẫn, ví dụ một vòng tròn trên mặt phẳng Trên tại điểm đầu của đường dẫn vẽ trên mặt phẳng Trước.
3. Chọn phác thảo biên dạng, rồi chọn {{ui:Thêm}} và {{ui:Quét}}. Phác thảo khác gần nhất trở thành đường dẫn.

Trong panel:

| Thiết lập | Tác dụng |
|---|---|
| **Đường dẫn** | Tích chọn các phác thảo tạo đường dẫn (nhiều phác thảo nối đầu cuối thành một đường dẫn 3D); **Chọn cạnh mô hình** thêm các cạnh của chi tiết |
| **Hướng** | Theo đường dẫn (mặc định), Frenet, Cố định (các mặt cắt giữ song song với biên dạng), Giữ một hướng, Dọc theo đường cong dẫn hướng |
| **Tỷ lệ cuối** | Biên dạng tăng hoặc giảm tuyến tính đến kích thước này ở cuối (1 = không đổi) |

Các góc nhọn trên đường dẫn được nối bằng góc cắt chéo (mitred). Vòng tròn bán kính 5 quét dọc một đoạn thẳng 100 mm là một hình trụ đúng 2500π mm³; dọc một cung phần tư bán kính 50, là một phần tư xuyến 625π² mm³.

## Chuyển tiếp

Chuyển tiếp pha trộn qua hai hoặc nhiều mặt cắt nằm trên các mặt phẳng khác nhau.

1. Vẽ từng mặt cắt trong phác thảo riêng (mỗi phác thảo một vòng kín), trên mặt phẳng gốc, mặt phẳng tham chiếu (xem [Mặt phẳng, trục và điểm tham chiếu](topic:reference-geometry)) hoặc các mặt.
2. Chọn {{ui:Thêm}}, rồi {{ui:Chuyển tiếp}}. Mỗi phác thảo một vòng chưa dùng đều trở thành một mặt cắt, theo thứ tự lịch sử.

Panel liệt kê các mặt cắt theo thứ tự (**Lên** sắp xếp lại, **Gỡ bỏ** xóa một mặt cắt); **Thêm phác thảo** thêm một phác thảo khác, **Chọn mặt** thêm một mặt phẳng của chi tiết. **Kẻ thẳng** tạo các mặt phẳng giữa các mặt cắt thay vì pha trộn trơn. Giữa hai hình vuông, cả hai đều là cùng một khối cụt: hình vuông 40 mm chuyển thành hình vuông 20 mm trên chiều cao 30 mm cho đúng 28000 mm³.

Các mặt cắt có số cạnh khác nhau (hình vuông sang tam giác) được OpenCascade ghép cặp, có thể làm xoắn các mặt bên; tính năng sẽ cảnh báo bạn. Hãy vẽ các mặt cắt có cùng số cạnh, bắt đầu từ các góc tương ứng, để có kết quả sạch nhất.

### Ray dẫn hướng

Ray dẫn hướng là các đường cong mà các mặt bên của khối chuyển tiếp phải đi theo từ mặt cắt đầu đến mặt cắt cuối, dùng cho một phần phình, phần thắt hoặc phần loe do bạn tự vẽ.

1. Vẽ hai hoặc nhiều ray: các đường cong hở (đường thẳng, cung, spline) chạy từ mặt cắt đầu đến mặt cắt cuối và cắt mỗi mặt cắt đúng một lần. Một phác thảo có thể chứa nhiều ray: mỗi chuỗi rời nhau trong đó là một ray riêng. Vẽ ray sao cho nó thực sự gặp từng mặt cắt: bắt các đầu của nó vào điểm của mặt cắt.
2. Trong panel Chuyển tiếp, dưới **Ray dẫn hướng**, tích chọn các phác thảo chứa chúng, hoặc nhấp {{ui:Chọn cạnh mô hình làm đường dẫn}} và nhấp các cạnh của chi tiết ({{key:Esc}} để kết thúc).

Khi có ray, khối chuyển tiếp là một bề mặt Gordon đi qua các mặt cắt và các ray (xem [Bề mặt qua mạng đường cong](topic:gordon-surfaces)), được đóng phẳng ở hai đầu thành khối đặc. Panel cho biết nó bám sát các ray đến mức nào. Khi đó mọi mặt cắt phải là phác thảo (một điểm hoặc một mặt không thể nhận ray), và **Kẻ thẳng** không áp dụng. Ray lệch khỏi một mặt cắt quá 0.01 mm sẽ bị từ chối, kèm khoảng hở.

Đã kiểm tra: hai vòng tròn (đường kính 20 mm và 10 mm, cách nhau 40 mm) với bốn ray thẳng cho thể tích khối cụt nón trong sai số 0.000002 %; các cung phình ra 5 mm cho một khối hình thùng bám theo mọi ray trong 0.00001 mm.

## Độ nghiêng khuôn

Độ nghiêng khuôn làm nghiêng các mặt để chi tiết ra khỏi khuôn.

1. Chọn {{ui:Thêm}}, rồi {{ui:Độ nghiêng khuôn}} (hoặc giữ {{key:Shift}} và nhấp các mặt trước). Khi chưa chọn gì, bạn ở chế độ chọn: nhấp từng mặt cần nghiêng, rồi {{ui:Xong}}.
2. Đặt **Góc (°)**, **Mặt phẳng trung hòa** (nơi các mặt giữ nguyên kích thước) và **Hướng kéo** (mặc định là pháp tuyến của mặt phẳng trung hòa).

Góc dương làm mặt nghiêng vào trong theo hướng kéo và bỏ bớt vật liệu; góc âm thì thêm vào. Mặt phẳng trung hòa mặc định là mặt phẳng Trên. Trong phiên bản này chỉ mặt phẳng mới nghiêng được: một mặt trụ, nón hoặc mặt tự do sẽ báo "Độ nghiêng khuôn: trong phiên bản này chỉ mặt phẳng (kernel lưới mới dựng được)." Bốn cạnh bên của khối 100 × 100 × 50 được nghiêng 5° quanh đáy trở thành một khối cụt đúng bằng h/3·(a² + b² + ab), với b = a − 2h·tan 5°.

## Thông báo

| Thông báo | Cần làm gì |
|---|---|
| "Mặt phẳng của biên dạng phải đi qua một đầu của đường dẫn …" | Di chuyển phác thảo biên dạng đến điểm đầu (hoặc cuối) của đường dẫn |
| "Đường dẫn bị hở: các đường cong của nó không nối đầu cuối …" | Nối các đường cong của đường dẫn; trong các phác thảo riêng, đầu của chúng phải gặp nhau chính xác |
| "Một mặt cắt chuyển tiếp cần đúng một vòng kín" | Tách phác thảo, hoặc gỡ vòng thừa |
| "… không thể nghiêng quanh mặt phẳng trung hòa này …" | Mặt đó song song với mặt phẳng trung hòa hoặc không cắt nó |
| "Độ nghiêng khuôn: trong phiên bản này chỉ mặt phẳng (kernel lưới mới dựng được)." | Một mặt đã chọn bị cong. Gỡ nó; chỉ nghiêng các mặt phẳng |

:::note
Chưa xây dựng: quét xoắn, quét thành mỏng và quét bề mặt, ray dẫn hướng và tiếp tuyến cuối của chuyển tiếp, độ nghiêng khuôn trên mặt trụ, mặt nón và mặt tự do.
:::
