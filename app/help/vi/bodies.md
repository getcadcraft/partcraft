---
title: Kết hợp, di chuyển và tỷ lệ các thân; mẫu theo đường dẫn
summary: Tạo các thân riêng, rồi kết hợp, cắt hoặc giao chúng sau đó, di chuyển, xoay, căn chỉnh hoặc sao chép chúng, co giãn đều hoặc theo X, Y và Z, và sao chép đặc trưng hoặc thân dọc theo một đường cong.
keywords: thân, nhiều thân, thân mới, kết hợp, boolean, nối, cắt, giao, hợp, giữ dụng cụ, di chuyển thân, sao chép thân, xoay thân, căn chỉnh, tịnh tiến, tỷ lệ, tỷ lệ không đều, kéo giãn, affine, mẫu theo đường dẫn, mẫu theo đường cong, mảng theo đường dẫn, mẫu điều khiển bởi đường cong
from: 6b1ea820
---

:::note
**Chưa được xây dựng trong phiên bản này.** Làm việc với nhiều thân cần nhân hình học chính xác, mà phiên bản PartCraft này không có: nó dựng mọi chi tiết bằng nhân lưới. [Những gì chưa được xây dựng](topic:not-built-yet) cho biết nên làm gì thay thế. Phần còn lại của trang mô tả cách nó hoạt động với nhân chính xác.
:::

Một chi tiết có thể chứa nhiều khối đặc. Mỗi khối đặc riêng là một **thân**. Hầu hết đặc trưng thêm vào hoặc cắt từ mọi thân mà nó chạm tới; các công cụ trên trang này làm việc trên những thân nguyên vẹn mà bạn chọn. Chúng nằm trong menu {{ui:Thêm}} của nhóm Đặc trưng: {{ui:Kết hợp}}, {{ui:Di chuyển vật thể}}, {{ui:Tỷ lệ vật thể}} và {{ui:Mẫu theo đường dẫn}}. Tất cả đều cần nhân chính xác (OpenCascade).

## Tạo một thân riêng

Đặt **Thao tác** của một đùn hoặc quay tròn thành **Thân mới** trong bảng bên phải (quét và chuyển tiếp cũng có). Khối đặc mới vẫn tách riêng ngay cả chỗ nó chồng lên các thân khác. **Giao** chỉ giữ phần chồng lấp giữa hình mới và những gì đã có.

Các thân được đặt tên theo đặc trưng đã tạo ra chúng: "Extrude2". Một bản sao được đặt tên theo bản gốc và đặc trưng đã sao chép nó: "Extrude2, copy 1 of Move1". Tên không đổi khi bạn đổi kích thước ở các bước trước, nên các đặc trưng dùng một thân vẫn tìm thấy nó. Khi có hai thân trở lên, bảng chi tiết (nhấn vào khoảng trống) liệt kê chúng cùng thể tích.

## Đổi tên hoặc ẩn một thân

Nhấn vào khoảng trống trong khung nhìn để xem bảng chi tiết. Danh sách thân của nó (hiện khi chi tiết có hai thân trở lên) có một ô tên và một nút {{ui:Ẩn}} ở mỗi hàng.

- **Đổi tên:** nhập tên mới vào ô rồi nhấn {{key:Enter}} hoặc nhấn ra ngoài. Mọi bảng khi đó đều dùng tên này: Kết hợp, Di chuyển vật thể, các mẫu. Xóa nội dung ô để quay lại tên từ đặc trưng đã tạo ra thân.
- **Ẩn:** nhấn {{ui:Ẩn}} ở hàng của nó. Thân biến khỏi khung nhìn và các cú nhấp đi xuyên qua nó, nên bạn có thể chọn các mặt phía sau. {{ui:Hiện}} đưa nó trở lại; {{ui:Hiện tất cả}} đưa mọi thân đã ẩn trở lại.

Ẩn chỉ thay đổi khung nhìn. Thân ẩn vẫn được dựng, vẫn được tính trong thể tích và các phép đo, và vẫn được lưu trong các tệp xuất STL, 3MF và STEP. Tên và các thân ẩn được lưu trong tệp chi tiết, và mỗi thay đổi là một bước của {{ui:Hoàn tác}}.

## Kết hợp các thân

1. Shift+nhấp một mặt của thân **đích**, rồi một mặt của mỗi thân **dụng cụ**.
2. Chọn {{ui:Thêm}}, rồi {{ui:Kết hợp}}.
3. Trong bảng bên phải, chọn **Thao tác**:

| Thao tác | Kết quả |
|---|---|
| Nối | Thân đích và các dụng cụ hợp thành một thân |
| Cắt | Các dụng cụ được lấy đi khỏi thân đích |
| Giao | Chỉ giữ phần mà thân đích và mọi dụng cụ cùng chia sẻ |

**Thân đích** là thân giữ tên của nó. Đánh dấu hoặc bỏ đánh dấu **Thân dụng cụ**, hoặc dùng **Chọn trong khung nhìn** rồi nhấp các mặt của chúng. **Giữ thân dụng cụ** để các dụng cụ vẫn ở nguyên vị trí (tiện cho khuôn và lõi của nó). Nếu một thân dụng cụ đã bị dùng hết bởi một lần Kết hợp trước đó, bảng sẽ nói như vậy thay vì chọn thân khác.

## Di chuyển hoặc sao chép một thân

1. Chọn {{ui:Thêm}}, rồi {{ui:Di chuyển vật thể}}. Thân mới nhất được đánh dấu sẵn; đánh dấu những thân cần di chuyển.
2. Chọn kiểu **Di chuyển**:

| Di chuyển | Bạn đặt |
|---|---|
| Tịnh tiến | **ΔX**, **ΔY**, **ΔZ** theo mm |
| Điểm đến điểm | **Từ** và **Đến**: nhấp gần đầu một cạnh, một đặc trưng điểm, hoặc một vị trí trên mặt |
| Xoay quanh trục | **Trục** (X, Y, Z, một đặc trưng trục, hoặc **Chọn**: một cạnh thẳng, một vòng tròn hoặc một hình trụ) và **Góc (°)** |
| Căn chỉnh một mặt theo mặt hoặc mặt phẳng | **Mặt cần di chuyển** (một mặt phẳng của thân), **Lên** (một mặt phẳng hoặc mặt phẳng tham chiếu) |

Căn chỉnh xoay thân sao cho mặt của nó nằm trên mặt kia, mặt đối mặt, rồi chỉ trượt nó dọc theo pháp tuyến của mặt đó. **Cùng chiều** xoay nó theo chiều ngược lại. **Sao chép** giữ bản gốc và thêm bản sao đã di chuyển như một thân mới.

## Tỷ lệ một thân

1. Chọn {{ui:Thêm}}, rồi {{ui:Tỷ lệ vật thể}}, và đánh dấu các thân.
2. Nhập **Tỷ lệ**, hoặc bỏ đánh dấu **Đều** và nhập **Tỷ lệ X**, **Tỷ lệ Y** và **Tỷ lệ Z** (theo các trục thế giới).
3. **Quanh** là điểm giữ nguyên vị trí: tâm của hộp bao các thân, hoặc một điểm bạn chọn.

Tỷ lệ đều là chính xác. Tỷ lệ không đều biến hình tròn thành elip: một hình trụ trở thành trụ elip, mà không mặt giải tích nào giữ được, nên các mặt cong trở thành mặt B-spline, nằm trong 0.0000004 mm so với hình dạng chính xác; mặt phẳng và cạnh thẳng vẫn chính xác. Bảng cho biết điều nào đã xảy ra. Hệ số tỷ lệ phải lớn hơn không (thay vào đó, đối xứng bằng {{ui:Đối xứng}}).

## Sao chép dọc theo một đường dẫn

1. Chọn đặc trưng cần sao chép trong lịch sử, hoặc không chọn gì để sao chép thân mới nhất.
2. Chọn {{ui:Thêm}}, rồi {{ui:Mẫu theo đường dẫn}}. Phác thảo chưa dùng mới nhất được lấy làm đường dẫn.
3. Trong bảng bên phải, đặt:

| Thiết lập | Tác dụng |
|---|---|
| **Sao chép** | Thân (mỗi bản sao là một thân mới) hoặc Đặc trưng (được nối hoặc cắt giống bản gốc) |
| **Đường dẫn** | Đánh dấu các phác thảo, hoặc **Chọn cạnh mô hình**; các đoạn phải nối đầu với đuôi |
| **Số lượng** | Tổng số, kể cả bản gốc |
| **Khoảng cách** | Đều (trải đến cuối đường dẫn hở, hoặc quanh một đường dẫn kín) hoặc một khoảng cách đặt sẵn |
| **Hướng** | Theo đường dẫn (mỗi bản sao xoay theo nó) hoặc Cố định (các bản sao giữ song song) |
| **Đảo chiều** | Đi theo chiều ngược lại dọc đường dẫn |

Các bản sao bắt đầu tại nơi đường dẫn đi gần bản gốc nhất và được cách nhau theo độ dài dọc đường cong.

Các mẫu thẳng và tròn cũng có thể sao chép thân: đánh dấu **Sao chép thân** trong bảng của chúng và chọn các thân; mỗi bản sao là một thân mới.

## Giới hạn

- Thân cần nhân chính xác; nhân lưới giữ một khối đặc và cho biết như vậy.
- Tỷ lệ không đều biến các mặt cong thành xấp xỉ B-spline gần đúng (xem trên), chứ không phải hình trụ hoặc hình nón chính xác; các mặt dời song song chưa thể co giãn theo cách đó.
- Đi theo đường dẫn trên một đường cong 3D xoắn sẽ mang bản sao đi mà không làm nó xoắn; trên đường dẫn phẳng, việc xoay là chính xác.
- Kết hợp chỉ làm việc trên khối đặc. Thân bề mặt được nối bằng {{ui:Khâu}}.

Xem thêm [Mặt phẳng, trục và điểm tham chiếu](topic:reference-geometry) về các điểm và mặt phẳng "nằm giữa các đối tượng", và [Đặc trưng mẫu và đối xứng](topic:patterns-mirror).
