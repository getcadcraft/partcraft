---
title: Thô 3D và gia công phần còn lại
summary: Dọn phôi quanh toàn bộ mô hình theo từng tầng bằng dao phay đầu phẳng, đầu tròn góc hoặc đầu cầu, để lại lượng dư cho hoàn thiện, rồi để dao nhỏ hơn chỉ cắt ở nơi dao đầu tiên còn để lại vật liệu. Những gì đường chạy đảm bảo, và những gì không.
keywords: thô 3d, thô, phay thô, gia công phần còn lại, thô phần còn lại, phôi còn lại, lượng dư để lại, bước hạ dao, tầng, tầng z, đường bao, dốc, đâm, cắt lẹm, dao nhỏ hơn
from: 29ddc266
---

Hai thao tác trong {{ui:Gia công}}, dưới {{ui:Thêm}} trên thanh công cụ, dọn phôi từ **toàn bộ mô hình** theo 3D, với dao giữ thẳng đứng (hoặc dọc theo [hướng dao](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) của thao tác). Chúng không cần chọn đối tượng.

## Thô 3D

{{ui:Thô 3D}} đi xuống từ mặt trên của phôi, mỗi lần một **bước hạ dao**. Ở mỗi tầng, nó dọn mọi thứ dao có thể tới mà không chạm mô hình: các hàng thẳng cách nhau một **bước ngang** (một phần của đường kính dao), rồi một vòng quanh mép của vùng dao được phép tới, để các thành được đi theo và không để lại hàng bậc thang trên mặt bằng.

- **Lượng dư để lại**: dao cách mô hình bao xa ở mọi nơi, cho lượt hoàn thiện (mặc định 0.5 mm).
- **Một tầng tại mỗi mặt phẳng**: một tầng thêm ở cao độ của mọi mặt phẳng của mô hình (cộng lượng dư để lại), để một đáy không bị để lại gần như cao cả một bước hạ dao.
- **Bỏ qua phôi mỏng hơn**: vật liệu mỏng hơn giá trị này, theo chiều lên hoặc sang bên, không đáng một lượt (0.05 mm cho thô, 0.5 mm cho gia công phần còn lại, để một sợi còn lại dọc theo thành không khiến dao nhỏ hơn phải đi quanh mọi thành).
- **Đáy**: không cắt gì dưới cao độ này. Để trống nghĩa là đáy của mô hình.

Nó bắt đầu từ phôi **như các thao tác trước đó để lại**: sau một lượt mặt, nó không cắt không khí nơi dao mặt đã đi qua.

Đi xuống: nơi dao sẽ gặp phôi trên đường xuống, nó dốc dọc theo lượt của chính nó theo **góc dốc**, qua lại tối đa hai đường kính dao. Lượt quá ngắn cho việc đó sẽ được đâm thẳng xuống theo **tốc độ đâm**; thao tác đếm những lần đó và cảnh báo, vì dao không cắt ở tâm không nên làm như vậy.

## Gia công phần còn lại

{{ui:Còn lại}} theo cùng chiến lược cho **dao nhỏ hơn sau dao lớn hơn**. Nó đọc mô phỏng phôi và chỉ cắt nơi vật liệu vẫn còn đứng: các góc trong mà dao lớn hơn không quay vào được, các rãnh mà nó không vừa, các bậc nó để lại trên mặt dốc. Ở mọi nơi khác nó không làm gì, nên đường chạy của nó chỉ là một phần nhỏ của những gì cùng dao đó sẽ cắt trên phôi mới.

Đặt nó sau thao tác thô và chọn dao nhỏ hơn. Nó cần mô phỏng phôi của các thao tác trước nó, và không gian làm việc luôn chạy mô phỏng này.

## Đường chạy tốt đến đâu

- **Không cắt lẹm.** Vị trí dao được tính trên lưới, với dao được lấy hơi lớn hơn so với thực tế (thêm 1.4 ô lưới sang bên, và thêm lượng dư để lại), để ở bất kỳ điểm nào nó đứng thì cũng thông thoáng với mô hình. Các bài kiểm thử kiểm tra mọi điểm cắt với dao chính xác trên lưới chính xác, và mô phỏng phôi sau mỗi lần chạy: không cắt lẹm, không di chuyển nhanh xuyên qua phôi.
- **Cái giá của điều đó**: các thành giữ lại nhiều hơn một chút so với lượng dư để lại, tối đa mức được hiển thị là "Phôi thừa trên thành" của thao tác (khoảng 0.5 mm với dao Ø6, ít hơn với dao nhỏ hơn). Lượt hoàn thiện sẽ lấy phần đó.

Những đường này không phải là:

- Các hàng là đường thẳng, không phải đường bao của hình dạng chi tiết hay đường ăn khớp không đổi. Chúng có nhiều lần nâng và di chuyển không cắt hơn so với chiến lược đường bao hay thích ứng, và hàng đầu tiên tại mỗi tầng cắt toàn bộ bề rộng dao. Với túi đáy phẳng, [Thích ứng](topic:manufacture) là phương pháp thô tốt hơn.
- Thân và đế dao không được kiểm tra. Một cảnh báo xuất hiện khi lượt cắt sâu hơn chiều dài rãnh.
- Mặt lõm ngược không được nhìn thấy: mô hình là thứ dao gặp khi đi xuống theo trục của nó. Để thô một cạnh, cho thao tác thứ hai một [hướng dao nghiêng](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Gia công phần còn lại chỉ biết phôi tốt bằng lưới mô phỏng (ô 0.1 đến 2 mm, theo kích thước chi tiết).
- Trên chi tiết lớn, chương trình dài (trên 100,000 đường di chuyển cho một mặt bích 200 mm với dao Ø6) và mất khoảng một phút để tính, và mọi thay đổi trong không gian làm việc đều tính lại toàn bộ chương trình. Dùng dao lớn nhất vừa vặn cho phần thô.
- Kiểm tra đầu ra trong bộ mô phỏng của máy trước khi cắt.
