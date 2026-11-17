---
title: Mặt phẳng, trục và điểm tham chiếu
summary: Tạo mặt phẳng dời song song từ một mặt, theo góc, qua ba điểm, ở giữa, tiếp tuyến với trụ, vuông góc với một cạnh, hoặc qua một cạnh và một điểm; trục; điểm tại giữa cạnh, nơi giao nhau và góc mặt phẳng; phác thảo trên chúng và dùng làm trục quay tròn, hướng mẫu lặp và mặt phẳng đối xứng.
keywords: datum, giữa các đối tượng, trung điểm, điểm giao, mặt phẳng qua cạnh và điểm, mặt phẳng tham chiếu, mặt phẳng làm việc, mặt phẳng dựng, datum plane, mặt phẳng dời, mặt phẳng theo góc, mặt phẳng giữa, mặt phẳng tiếp tuyến, trục tham chiếu, trục dựng, datum axis, điểm tham chiếu, điểm làm việc, phác thảo trên mặt phẳng
from: e7eb6fc1
---

Hình học tham chiếu là giàn giáo để bạn dựng đặc trưng lên: một **mặt phẳng** để phác thảo khi không có mặt nào sẵn, một **trục** để quay tròn hoặc tạo mẫu lặp quanh nó, một **điểm** để dừng việc đùn. Nó không có vật liệu riêng. Mặt phẳng hiện trong khung nhìn như ô vuông nhạt, trục như nét đứt, điểm như dấu cộng nhỏ; cả ba đều nằm trong lịch sử và theo đối tượng đã tạo ra chúng khi bạn đổi kích thước ở phía trước.

Chúng nằm trong menu {{ui:Thêm}} của nhóm Đặc trưng: {{ui:Mặt phẳng}}, {{ui:Trục}}, {{ui:Điểm}}.

## Tạo mặt phẳng

1. Nhấp một mặt phẳng, hoặc một mặt phẳng gốc trong lịch sử, để bắt đầu từ đó (tùy chọn).
2. Chọn {{ui:Thêm}}, rồi {{ui:Mặt phẳng}}. Mặt phẳng bắt đầu là một mặt phẳng dời song song, cách thứ bạn đã chọn (hoặc mặt phẳng trên cùng) 20 % kích thước của chi tiết.
3. Trong bảng bên phải, chọn **Loại** và các tham chiếu của nó:

| Loại | Tham chiếu | Số liệu |
|---|---|---|
| Dời song song từ một mặt phẳng hoặc mặt | **Từ mặt phẳng** | **Khoảng cách (mm)**, âm để sang phía bên kia |
| Theo góc, qua một cạnh hoặc trục | **Từ mặt phẳng**, **Xoay quanh** (một trục thế giới, một đặc trưng trục, hoặc một cạnh thẳng đã chọn) | **Góc (°)** |
| Qua ba điểm | **Điểm 1**, **Điểm 2**, **Điểm 3** | — |
| Mặt phẳng giữa hai mặt | **Mặt phẳng thứ nhất**, **Mặt phẳng thứ hai** (song song: nằm giữa; cắt nhau: mặt phẳng chia đôi góc) | — |
| Tiếp tuyến với trụ | **Trụ** (một mặt trụ), **Điểm gần** (phía nào) | — |
| Vuông góc với cạnh, tại một điểm | **Cạnh**, **Tại điểm** (mặt phẳng đi qua điểm của cạnh gần nó nhất, và cũng đi qua điểm này) | — |
| Qua một cạnh và một điểm | **Cạnh thẳng** (hoặc một trục), **Điểm đi qua** | — |
| Vuông góc với cạnh tại giữa cạnh | **Cạnh** (vuông góc với nó tại điểm giữa), hoặc khi không có cạnh thì **Điểm 1** và **Điểm 2** (mặt phẳng nằm giữa hai điểm) | — |

Mỗi tham chiếu có nút **Chọn**: chọn nó, rồi nhấp trong khung nhìn. Ô mặt phẳng nhận một mặt phẳng gốc, một mặt phẳng tham chiếu hoặc một mặt dẹt; ô điểm nhận đầu mút của cạnh (nhấp gần đầu đó), một đặc trưng điểm, hoặc một vị trí trên mặt; ô cạnh nhận một cạnh. {{key:Esc}} hủy việc chọn. **Lật pháp tuyến** lật mặt phẳng (phác thảo trên nó sẽ hướng về phía nào).

Trong phiên bản này, ô cần một cạnh hoặc một mặt trụ (Tiếp tuyến với trụ và các ô Cạnh) sẽ trả lời "chưa xây dựng": hãy dùng điểm hoặc trục thay thế.

## Phác thảo trên mặt phẳng

Chọn mặt phẳng (trong lịch sử hoặc nhấp ô vuông của nó trong khung nhìn) rồi chọn {{ui:Phác thảo}}, hoặc **Phác thảo trên nó** trong bảng của nó. Phác thảo đi theo mặt phẳng: đổi khoảng cách của mặt phẳng thì phác thảo và mọi đặc trưng trên nó cũng di chuyển theo.

## Trục và điểm

- {{ui:Trục}}: qua hai điểm, trục của trụ hoặc nón, nơi hai mặt phẳng gặp nhau, dọc theo một cạnh thẳng (hoặc trục của cạnh tròn), hoặc vuông góc với một mặt qua một điểm.
- {{ui:Điểm}}: theo tọa độ, tại đỉnh hoặc điểm phác thảo, hoặc tại tâm của cạnh tròn, cùng các điểm "giữa các đối tượng":

| Loại điểm | Tham chiếu |
|---|---|
| Giữa một cạnh (hoặc giữa hai điểm) | **Cạnh** (ở giữa chiều dài, cũng áp dụng cho cung và đường cong), hoặc khi không có cạnh thì **Điểm 1** và **Điểm 2** |
| Nơi một cạnh hoặc trục gặp một mặt hoặc mặt phẳng | **Cạnh** (thẳng hoặc cong) hoặc một trục, và **Gặp mặt phẳng** (một mặt phẳng hoặc mặt dẹt) hoặc **Hoặc một mặt** (mặt dẹt hoặc mặt trụ). Một đường tròn cắt mặt phẳng hai lần và một đường thẳng xuyên qua mặt trụ hai lần: **Giao điểm còn lại** lấy điểm thứ hai |
| Nơi ba mặt phẳng gặp nhau | **Thứ nhất**, **Thứ hai** và **Mặt phẳng thứ ba** (mặt phẳng hoặc mặt dẹt) |

Mỗi loại báo lỗi bằng một thông báo đơn giản khi các tham chiếu không khớp: đường thẳng song song với mặt phẳng, đường thẳng không cắt trụ, cạnh không chạm tới mặt phẳng, ba mặt phẳng không gặp nhau tại một điểm, hoặc một điểm nằm trên đường thẳng mà nó cần để cố định một mặt phẳng.

Dùng chúng trong các đặc trưng khác:

| Nơi | Cách làm |
|---|---|
| Quay tròn (revolve) | **Trục**: chọn đặc trưng trục từ danh sách (phải nằm trong mặt phẳng của phác thảo) |
| Mẫu lặp tròn | **Trục**: đặc trưng trục |
| Mẫu lặp tuyến tính | **Hướng**: một đặc trưng trục, hoặc một mặt phẳng (pháp tuyến của nó) |
| Đối xứng | **Mặt phẳng đối xứng**: một mặt phẳng tham chiếu |
| Đùn (extrude) | **Đầu mút**: Đến mặt hoặc mặt phẳng, Đến đỉnh (một đặc trưng điểm). Chưa xây dựng trong phiên bản này (cần nhân tính toán chính xác) |
| Độ nghiêng khuôn | **Mặt phẳng trung tính** |

## Khi một tham chiếu không còn

Một mặt phẳng được tạo từ một mặt không còn tồn tại sẽ báo lỗi với thông báo nêu tên nó, ví dụ "Mặt mà nó nằm trên đã không còn trong Extrude1." Nó không bao giờ được chuyển sang mặt khác. Các phác thảo và đặc trưng trên nó được đánh dấu "chưa dựng" cho đến khi bạn chọn tham chiếu mới; phần còn lại của chi tiết giữ nguyên.

:::note
Phiên bản này dựng mọi chi tiết bằng nhân lưới, và tạo mặt phẳng, trục, điểm từ mặt phẳng gốc, mặt dẹt do Đùn hoặc Quay tròn tạo ra, điểm phác thảo, tọa độ và các đặc trưng tham chiếu khác. Thứ gì cần một cạnh, đầu mút của cạnh hoặc một mặt cong thì cần nhân tính toán chính xác: chưa xây dựng trong phiên bản này ("Nó dùng một mặt hoặc cạnh của khối đặc, chỉ nhân tính toán chính xác mới tìm được: chưa xây dựng trong phiên bản này.").
:::
