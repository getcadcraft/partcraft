---
title: Mặt qua mạng đường cong (mặt Gordon)
summary: Tạo một bề mặt mịn đi qua một lưới các biên dạng và đường dẫn, vẽ trong phác thảo hoặc lấy từ cạnh của mô hình, đóng thành khối đặc khi các biên dạng kín, và những gì chính xác, những gì được khớp, cùng các thông báo khi một mạng không khớp.
keywords: tiếp tuyến, g1, liên tục tiếp tuyến, mặt phẳng đối xứng, mặt Gordon, mạng đường cong, mặt biên, mặt lưới, biên dạng, đường dẫn, ray dẫn hướng, chuyển tiếp có đường dẫn, lớp vỏ, transfinite, coons, mặt B-spline, mặt tự do
from: ada3cb8b
---

:::note
**Chưa xây dựng trong phiên bản này.** Mặt Gordon cần một nhân hình học chính xác, thứ mà phiên bản PartCraft này không có: nó dựng mọi chi tiết bằng nhân lưới. [Những gì chưa xây dựng](topic:not-built-yet) cho biết nên làm gì thay thế. Phần còn lại của trang mô tả nó khi làm việc với nhân chính xác.
:::

Một **mặt Gordon** là một bề mặt duy nhất đi qua mọi đường cong của một mạng: một tập **biên dạng** chạy theo một hướng và một tập **đường dẫn** chạy theo hướng kia, cắt nhau như các sợi của một tấm lưới. Đây là cách bạn tạo hình một thân tàu, vè xe hoặc tay cầm từ vài đường cắt mà bạn điều khiển trực tiếp. Nó cần **nhân chính xác** (xem [Nhân lưới (mesh kernel)](topic:solid-kernels)).

## Vẽ mạng

1. Vẽ các **biên dạng**: hai hoặc nhiều đường cong chạy song song, ví dụ các mặt cắt trên các mặt phẳng song song. Đường thẳng, cung, đường tròn và spline đều hoạt động, và một chuỗi đường cong nối đầu cuối được tính là một đường cong.
2. Vẽ các **đường dẫn**: hai hoặc nhiều đường cong chạy ngang qua các biên dạng. Mỗi đường dẫn phải cắt mỗi biên dạng đúng một lần, và mỗi biên dạng cắt mỗi đường dẫn đúng một lần.
3. Làm cho các đường cong thực sự gặp nhau. Vẽ phác thảo của đường dẫn sao cho đường cong của nó đi qua các điểm của biên dạng (bắt vào các điểm đã chiếu, hoặc gõ tọa độ). Mạng chấp nhận khoảng hở đến **Dung sai** (0.01 mm để bắt đầu).

Một phác thảo có thể chứa nhiều đường cong: mỗi chuỗi rời trong đó là một đường cong riêng. Vì vậy bạn có thể vẽ tất cả đường dẫn trong một phác thảo trên mặt phẳng trên, chẳng hạn.

## Tạo bề mặt

1. Chọn {{ui:Thêm}} trong nhóm Đặc trưng, rồi {{ui:Mặt Gordon}}.
2. PartCraft lấy các phác thảo chưa ai dùng: những phác thảo trên mặt phẳng song song với mặt phẳng đầu tiên trở thành **biên dạng**, các phác thảo còn lại là **đường dẫn**. Kiểm tra danh sách bên phải và đặt mỗi phác thảo thành **Biên dạng**, **Đường dẫn** hoặc **Không dùng**.
3. Để dùng các cạnh của chi tiết, nhấp **Chọn cạnh làm biên dạng** (hoặc **làm đường dẫn**), nhấp các cạnh trong khung nhìn, rồi nhấn {{key:Esc}}.

Kết quả là một **khối bề mặt**. {{ui:Làm dày}} biến nó thành khối đặc, {{ui:Khâu}} khâu nó với các bề mặt khác, và {{ui:Cắt mặt}} cắt nó.

### Đóng thành khối đặc

Khi các biên dạng là đường cong kín (đường tròn, spline kín, chuỗi kín) và biên dạng đầu tiên và cuối cùng mỗi cái nằm phẳng trong một mặt phẳng, hãy đánh dấu **Đóng thành khối đặc**. Hai đầu được bịt bằng các mặt phẳng và hình khối kín nối, cắt, giao hoặc trở thành một khối mới như mọi đặc trưng khác. Đây là cách bạn làm một mặt chuyển tiếp đi theo các đường dẫn. Điều này cũng hoạt động với các đường dẫn kín.

## Tiếp tuyến với một mặt phẳng dọc theo một cạnh

Một mặt Gordon đi qua các đường cong của nó, nhưng chỉ riêng nó không khớp với độ dốc của những gì nó gặp. Để làm nó rời một cạnh **tiếp tuyến** với một mặt phẳng (G1), chẳng hạn một mặt phẳng đối xứng, để bản sao đối xứng nối mà không có nếp gấp, hoặc một mặt phẳng phẳng mà nó mọc ra từ đó:

1. Chọn đặc trưng Gordon. Dưới **Tiếp tuyến với**, chọn một mặt phẳng trong {{ui:Thêm một mặt phẳng…}} (Trước, Trên, Phải hoặc một mặt phẳng tham chiếu), hoặc chọn một mặt phẳng trong khung nhìn và nhấn {{ui:Thêm mặt phẳng đã chọn}}.
2. PartCraft tìm đường biên của mạng nằm trong mặt phẳng đó, và bề mặt rời nó tiếp tuyến với mặt phẳng.

Nếu một mặt phẳng chứa hai đường biên (một sàn dưới cả hai đầu), hãy thêm nó hai lần: mỗi bản sao lấy đường tiếp theo. Tối đa bốn mặt phẳng, mỗi cạnh một.

Báo cáo nói cho biết tiếp tuyến với mặt phẳng dọc theo đường cong nào và góc dốc nhất mà bề mặt gặp mặt phẳng đó trước đó. Các đường dẫn đã rời đường cong đó tiếp tuyến với mặt phẳng được theo đúng. Các đường dẫn leo ra khỏi nó bị uốn trong một dải hẹp gần cạnh, và con số "bám theo mọi đường cong trong" của báo cáo cho biết mức độ: hãy vẽ các đường dẫn rời cạnh phẳng để có khớp chính xác.

## Phần nào chính xác và phần nào được khớp

Bảng cho biết điều nào áp dụng, và bề mặt lệch khỏi các đường cong của bạn bao xa.

- **Chính xác**: khi mọi đường cong là đa thức (đường thẳng, spline và chuỗi của chúng) và các đường dẫn cắt tất cả biên dạng tại cùng tham số, bề mặt chính xác là mặt Gordon của các đường cong đó. Một mạng đường đẳng tham số cắt từ một mặt bicubic trả lại chính mặt đó, và bốn đường thẳng cho một mảng phẳng hoặc xoắn (song tuyến tính).
- **Được khớp**: cung, đường tròn và cạnh của chi tiết không phải đa thức, và các đường cong cắt nhau ở các tham số khác nhau phải được định thời lại để các điểm cắt thẳng hàng. Những đường cong đó được khớp bằng B-spline bậc ba trong vòng một phần mười triệu kích thước của mạng (khoảng 0.00001 mm cho chi tiết 100 mm). Một mảng hình trụ làm từ cung và đường thẳng nằm trong vòng 0.00001 mm so với hình trụ thật.

Giữa các đường cong, bề mặt là bất cứ gì phương pháp cho: các biên dạng được pha trộn qua, cộng các đường dẫn được pha trộn qua, trừ phần pha trộn của các điểm cắt của chúng. Nó mịn ở mọi nơi trừ chỗ một đường cong có góc nhọn. Nơi hai bề mặt Gordon chia sẻ một đường biên, chúng gặp nhau cạnh với cạnh (G0), không tiếp tuyến.

## Khi một mạng không khớp

| Thông báo | Cần làm gì |
|---|---|
| "… không gặp nhau: chúng cách nhau 0.4 mm" | Làm biên dạng và đường dẫn đó cắt nhau, hoặc tăng **Dung sai** |
| "… gặp … 2 lần" | Một đường dẫn chỉ được cắt mỗi biên dạng một lần: tách một đường cong lặp, hoặc dùng ít biên dạng hơn |
| "… theo thứ tự khác" hoặc "gấp lại chính nó" | Hai đường dẫn cắt nhau (hoặc hai biên dạng). Các họ phải chạy song song |
| "ít nhất hai biên dạng và hai đường dẫn" | Thêm đường cong, hoặc đặt thêm phác thảo thành Biên dạng hoặc Đường dẫn |
| "trộn đường cong mở và kín" | Làm tất cả biên dạng mở hoặc tất cả kín (tương tự cho đường dẫn) |
| "Một đầu … không phẳng, nên không thể bịt" | Vẽ biên dạng kín đầu tiên và cuối cùng mỗi cái trong một mặt phẳng, hoặc để Đóng thành khối đặc tắt |

## Giới hạn

- Một mặt B-spline cho mỗi mạng: không có tiếp tuyến G1 hoặc G2 với các bề mặt lân cận.
- Đường nối của một mạng kín, tại đường dẫn đầu tiên, được nối cạnh với cạnh nhưng không tiếp tuyến.
- Bản thân đặc trưng Chuyển tiếp không có ray đường dẫn; hãy dùng một mặt Gordon đóng thành khối đặc thay thế.
- Các đường cong rất gợn sóng, hoặc các điểm cắt phân bố rất không đều dọc theo một đường cong so với đường khác, có thể cần quá nhiều điểm để khớp; khi đó đặc trưng sẽ báo như vậy.
