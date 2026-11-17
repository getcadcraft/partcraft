---
title: Đặc trưng mẫu lặp và đối xứng
summary: Lặp đặc trưng thành một hàng bằng Thẳng, quay quanh một trục bằng Tròn, và sao chép đặc trưng hoặc toàn bộ thân qua một mặt phẳng bằng Đối xứng.
keywords: mẫu lặp, mẫu lặp thẳng, mẫu lặp tròn, mảng cực, mảng (array), đối xứng, sao chép đặc trưng, vòng lỗ bulông, hạt giống, đối xứng thân
from: 702e9edb
---

Mẫu lặp và đối xứng sao chép các đặc trưng bạn đã dựng. Các bản sao là một phần của lịch sử: thay đổi bản gốc thì các bản sao cũng thay đổi theo.

Thứ được sao chép là tác dụng của đặc trưng: mẫu lặp của một phần nhô thêm vật liệu, còn mẫu lặp của cắt hoặc lỗ thì bớt vật liệu. Có thể lặp lại và đối xứng một mẫu lặp thêm lần nữa. Khối STEP đã nhập cũng có thể sao chép; bo góc, vát mép và vỏ thì không.

## Mẫu lặp thẳng

1. Chọn đặc trưng cần sao chép trong lịch sử (ví dụ Lỗ hoặc Cắt). Nếu không chọn gì, đặc trưng khối cuối cùng được dùng.
2. Chọn {{ui:Thẳng}}. Ba bản sao xuất hiện, cách nhau 20 mm dọc theo X.
3. Trong bảng bên phải, đặt:

| Cài đặt | Tác dụng | Mặc định |
|---|---|---|
| **Đặc trưng cần sao chép** | Đánh dấu mọi đặc trưng cần sao chép. Chỉ các đặc trưng nằm trên mẫu lặp mới được liệt kê | Đặc trưng đã chọn |
| **Hướng** | Trục X, trục Y, trục Z, một đường thẳng hoặc đường tâm từ phác thảo trước đó, trục của một quay tròn, hoặc một cạnh đã chọn | Trục X |
| **Khoảng cách (mm)** | Khoảng cách giữa các phần tử liền kề | 20 |
| **Số lượng** | Tổng số, **kể cả bản gốc** (từ 1 đến 1000) | 3 |
| **Đảo chiều** | Các bản sao đi theo chiều ngược lại | Tắt |

### Dùng một cạnh làm hướng

1. Nhấp một cạnh thẳng của chi tiết trong khung nhìn. Bảng bên phải ghi **Cạnh** và hiển thị chiều dài của nó.
2. Chọn {{ui:Thẳng}}: mẫu lặp chạy theo cạnh đó.

Hoặc chọn mẫu lặp, chọn một cạnh, rồi chọn "Cạnh đã chọn (dùng cạnh vừa chọn)" trong **Hướng**. Cạnh đã chọn được cố định trong không gian: nó không theo các thay đổi sau này. Đường thẳng phác thảo thì đi theo phác thảo của nó.

## Mẫu lặp tròn

1. Chọn đặc trưng cần sao chép (ví dụ một lỗ gần vành của một đĩa).
2. Chọn {{ui:Tròn}}. Sáu bản sao xuất hiện, cách đều nhau quanh một vòng.
3. Đặt:

| Cài đặt | Tác dụng | Mặc định |
|---|---|---|
| **Đặc trưng cần sao chép** | Như với Thẳng | Đặc trưng đã chọn |
| **Trục** | Trục X, Y hoặc Z, một đường thẳng phác thảo, trục của một quay tròn, hoặc một cạnh đã chọn | Trục của quay tròn gần nhất nếu có, nếu không thì trục Y |
| **Góc (°)** | 360 chia đều các bản sao quanh một vòng. Nhỏ hơn thì trải chúng trên góc đó, bản đầu và bản cuối nằm ở hai đầu | 360 |
| **Số lượng** | Tổng số, kể cả bản gốc | 6 |
| **Đảo chiều** | Quay theo chiều ngược lại | Tắt |

Các trục thế giới đi qua gốc tọa độ. Với một đĩa không đặt tâm tại gốc, hãy dùng đường tâm của phác thảo hoặc trục của một quay tròn.

### Ví dụ: tám lỗ bulông của mặt bích

1. Quay tròn mặt bích (xem [Quay tròn chi tiết tiện](topic:revolve)) quanh trục Y.
2. Phác thảo trên mặt trên phẳng của mặt bích, đặt một điểm trên vòng bulông, rồi tạo một Lỗ.
3. Khi Lỗ được chọn, chọn {{ui:Tròn}}. Trục đã là "Trục của Revolve1".
4. Đặt **Số lượng** là `8`.

## Đối xứng

1. Chọn đặc trưng cần đối xứng trong lịch sử, hoặc không chọn gì để đối xứng **toàn bộ thân như đã dựng tới lúc này**.
2. Chọn {{ui:Đối xứng}}. Nó đối xứng qua **Mặt phẳng phải**.

Để đối xứng toàn bộ thân qua một mặt của chi tiết, trước hết nhấp vào mặt phẳng đó, rồi chọn {{ui:Đối xứng}}. (Nhấp một mặt sẽ xóa vùng chọn trong lịch sử, nên lệnh này luôn đối xứng toàn bộ thân.)

Cài đặt trong bảng bên phải:

- **Đối xứng**: đánh dấu **Toàn bộ thân (như đã dựng tới lúc này)**, hoặc bỏ đánh dấu và đánh dấu các đặc trưng cần sao chép.
- **Mặt phẳng đối xứng**: Mặt phẳng trước, Mặt phẳng trên, Mặt phẳng phải, mặt mà nó đang dùng ("Một mặt của Extrude1" hoặc "Một mặt phẳng cố định"), hoặc "Mặt vừa chọn". Để đối xứng các đặc trưng đã chọn qua một mặt: chọn Đối xứng trong lịch sử, nhấp mặt trong khung nhìn, rồi chọn "Mặt vừa chọn".

Đối xứng toàn bộ thân qua một mặt sẽ làm đôi chi tiết, ví dụ biến một nửa giá đỡ thành giá đỡ đầy đủ.

## Thông báo

- "Dựng một đặc trưng để sao chép trước." hoặc "Dựng một khối trước." Chưa có khối nào để sao chép.
- "Chọn các đặc trưng cần sao chép." Mọi ô **Đặc trưng cần sao chép** đều đã bị bỏ chọn.
- "Extrude2 không có khối để sao chép." Đặc trưng đó bị lỗi hoặc đang bị tắt.
- "Hãy sao chép các đặc trưng tạo khối. Fillet1 thay đổi cạnh hoặc thành của thân nên không thể sao chép." Bo góc, vát mép và vỏ không thể lặp hoặc đối xứng; hãy tạo mẫu lặp trước, rồi mới bo góc.
- "Chưa có thân nào để đối xứng."

:::note
Các bản sao của mẫu lặp không thể bỏ qua từng cái một, và mẫu lặp không thể đi theo một đường cong phác thảo. Mẫu lặp và đối xứng của phác thảo cũng **chưa xây dựng**: hãy vẽ hình học lặp lại trong phác thảo bằng tay, hoặc dùng **Thêm theo tọa độ**.
:::
