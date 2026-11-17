---
title: Tôn: cánh và khai triển
summary: Bắt đầu một chi tiết tôn từ một phác thảo (một tấm phẳng hoặc một biên dạng uốn), đặt độ dày, bán kính uốn và K-factor một lần, uốn các cánh lên từ các cạnh với rãnh giảm uốn, và trải phẳng nó thành DXF để cắt.
keywords: khai triển, trải phẳng, triển khai, chiều dài triển khai, độ dư uốn, đường uốn, DXF cho laser, cắt laser, tôn, cánh nền, cánh cạnh, cánh, uốn, bán kính uốn, k-factor, k factor, độ dày, thước đo tôn, rãnh, rãnh giảm uốn, máng, khung, vỏ, tấm uốn
from: 144bd0f6
---

:::note
**Chưa xây dựng trong phiên bản này.** Tôn cần một lõi hình học chính xác, mà phiên bản PartCraft này chưa có: nó dựng mọi chi tiết bằng lõi lưới. [Những gì chưa xây dựng](topic:not-built-yet) cho biết nên làm gì thay thế. Phần còn lại của trang này mô tả cách nó hoạt động với lõi chính xác.
:::

Chi tiết tôn bắt đầu bằng một **Cánh nền**. Nó đặt tấm tôn cho toàn bộ chi tiết: **độ dày**, **bán kính uốn trong** và **K-factor**. Mọi **Cánh cạnh** sau đó uốn theo đúng các số này, nên chi tiết vẫn là một tấm tôn duy nhất có thể trải phẳng. Cả hai đều cần **lõi chính xác** (xem [Lõi lưới](topic:solid-kernels)).

## Bắt đầu với cánh nền

1. Vẽ một phác thảo. Dùng một **biên dạng khép kín** cho tấm phẳng (một hình chữ nhật, hoặc bất kỳ đường bao khép kín nào có lỗ). Dùng **một chuỗi đường thẳng hở** cho tấm uốn, chẳng hạn chữ L, U hoặc Z được vẽ như hình chiếu cạnh của tấm.
2. Chọn phác thảo trong lịch sử đặc trưng.
3. Mở {{ui:More}} trong nhóm Đặc trưng và chọn {{ui:Base flange}}.

Trong bảng bên phải:

- **Độ dày (mm)** là thước đo của tấm.
- **Bán kính uốn (mm)** là bán kính trong của mọi chỗ uốn. 0 cho một góc trong sắc; phần ngoài vẫn uốn với bán kính bằng một độ dày.
- **K-factor** cho biết lớp trung hòa nằm ở đâu trong tấm, từ 0 (mặt trong) đến 0,5 (giữa). Nó quyết định tấm dài bao nhiêu khi trải phẳng. 0,44 là mặc định; xưởng hoặc nhà cung cấp vật liệu của bạn có thể cung cấp giá trị riêng.
- **Chiều sâu (mm)** là khoảng cách một biên dạng uốn chạy ra khỏi mặt phẳng phác thảo. Một tấm phẳng bỏ qua giá trị này.
- **Độ dày ngoài các chỗ uốn**: một biên dạng hở là một mặt của tấm. Mặc định, độ dày nằm ở phía trong của chỗ uốn đầu tiên, nên các đường bạn vẽ là phía ngoài của máng. Đánh dấu để đặt các đường vào phía trong thay thế. Kết quả giống nhau dù bạn vẽ từ đầu nào.

Mọi góc của một chuỗi hở đều trở thành một chỗ uốn. Một đường quá ngắn không đủ chỗ cho các chỗ uốn của nó sẽ báo điều đó, kèm chiều dài cần thiết.

## Uốn một cánh cạnh

1. Nhấp vào một cạnh thẳng của mặt trên hoặc mặt dưới của tấm (các cạnh dài, không phải các cạnh mỏng).
2. Chọn {{ui:More}} › {{ui:Edge flange}}. Khi chưa chọn cạnh nào, PartCraft chờ bạn nhấp một cạnh; Esc sẽ hủy.

Cánh uốn lên từ mặt của cạnh đó quanh bán kính trong của tấm, rồi chạy thẳng. Trong bảng:

- **Góc (°)** là mức độ uốn, từ 1 đến 180. 90 là một cánh vuông.
- **Chiều dài (mm)** là đoạn thẳng sau chỗ uốn.
- **Uốn theo chiều ngược lại** uốn từ mặt kia (xuống thay vì lên).
- **Độ lệch ở đầu** và **Độ lệch ở cuối** làm ngắn cánh từ mỗi đầu của cạnh.
- **Rãnh giảm uốn**: khi một đầu có độ lệch, một rãnh được khoét vào tấm bên cạnh để chỗ uốn không làm rách kim loại ở đó. **Chiều rộng rãnh** đặt chiều rộng của rãnh; độ sâu của nó bằng bán kính uốn cộng độ dày. Chọn **Không** để để góc đó không khoét.

Để đổi cạnh sau này, nhấn {{ui:Pick}} trong bảng và nhấp vào một cạnh khác.

:::tip
Dùng tham số cho độ dày và bán kính (xem [Tham số và phương trình](topic:parameters)) để khi đổi độ dày, mọi cánh được cập nhật cùng lúc.
:::

## Trải phẳng

Cả hai bảng đều kết thúc bằng **Khai triển**. Nhấn {{ui:Lay flat}}:

- Bản xem trước hiển thị tấm đã được mở ra, với đường tâm của mỗi chỗ uốn được vẽ nét đứt.
- **Kích thước** và **Diện tích** là của phôi phẳng.
- Mỗi chỗ uốn được liệt kê cùng hướng (**lên** hoặc **xuống**, nhìn từ phía phác thảo của cánh nền), góc và bán kính trong.

Mỗi chỗ uốn chiếm chiều dài của lớp trung hòa của tấm qua nó, **độ dư uốn**: góc (theo radian) × (bán kính trong + K-factor × độ dày). Vì vậy, một chỗ uốn 90° của tấm 2 mm với bán kính 2 mm và K-factor 0,44 thêm 4,52 mm tấm phẳng.

Trên một tấm phẳng, lỗ, vết cắt và rãnh giảm uốn hiển thị trên bản khai triển đúng vị trí thực của chúng, kể cả các lỗ xuyên qua một cánh.

Để cắt nhiều chi tiết, nhấn {{ui:Nest on sheets…}} dưới bản khai triển: xem [Xếp các chi tiết phẳng lên tấm](topic:nest-flat-parts). Một cánh nền đã uốn được khai triển thành một hình chữ nhật: chiều dài triển khai × chiều sâu của nó, cùng một đường uốn cho mỗi góc.

{{ui:Save DXF}} lưu bản khai triển cho máy cắt laser, máy dập hoặc máy cắt tia nước, tính bằng mm:

- đường bao trên lớp **OUTLINE**, dưới dạng đường thẳng, cung và vòng tròn;
- các đường uốn trên lớp **BEND**, nét đứt;
- một ghi chú cho mỗi chỗ uốn trên lớp **BEND_NOTES**, chẳng hạn "UP 90° R2".

Thay đổi bất kỳ thứ gì và bản trải phẳng sẽ biến mất; nhấn {{ui:Lay flat}} lần nữa để có bản mới.

:::note
Hãy kiểm tra K-factor với xưởng của bạn trước khi cắt: chiều dài của bản trải phẳng phụ thuộc vào nó, và nó thay đổi theo vật liệu, độ dày và dụng cụ.
:::

## Thông báo

- **Tôn cần một cánh nền đứng trước nó** — một cánh cạnh được thêm vào trước khi có cánh nền nào. Di chuyển nó xuống dưới một cánh nền, hoặc thêm một cánh nền trước.
- **Một cánh cạnh cần một cạnh thẳng** — các cánh chỉ uốn dọc theo đường thẳng; các cạnh cong chưa thể nhận cánh.
- **Cạnh đó không nằm trên một mặt của độ dày tấm** — cạnh thuộc một mặt không phải là mặt trên hoặc mặt dưới của tấm (chẳng hạn thành của một lỗ). Chọn một cạnh của mặt trên hoặc mặt dưới.
- **Các độ lệch không để lại gì của cạnh** — hai độ lệch cộng lại bằng toàn bộ cạnh hoặc hơn.
- **Các cánh cạnh trên một cánh nền đã uốn chưa thể trải phẳng** — bắt đầu từ một tấm phẳng và uốn mọi thứ lên bằng các cánh cạnh, các cánh này sẽ mở ra.
- **Các vết cắt và lỗ được tạo sau một cánh nền đã uốn chưa hiển thị trong bản trải phẳng của nó** — bản trải phẳng của một biên dạng uốn chỉ là hình chữ nhật đã khai triển của nó.
