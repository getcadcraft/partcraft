---
title: Chuỗi dung sai
summary: Chọn một chuỗi mặt đi qua các chi tiết của một lắp ráp và xem khe hở ở cuối chuỗi có thể biến thiên bao nhiêu, theo trường hợp xấu nhất và RSS, với các kích thước ảnh hưởng nhiều nhất được xếp hạng đầu tiên.
keywords: chuỗi dung sai, stackup, phân tích dung sai, chuỗi dung sai, chuỗi kích thước, vòng, khe hở, độ hở, trường hợp xấu nhất, rss, căn bậc hai tổng bình phương, dung sai thống kê, thành phần đóng góp, độ nhạy, gd&t, dung sai chung, iso 2768
from: cbdb3159
---

Một **chuỗi dung sai** cộng các kích thước dọc theo một chuỗi qua nhiều chi tiết để xem một kết quả, thường là một khe hở, có thể biến thiên bao nhiêu khi mỗi chi tiết được chế tạo ở bất kỳ điểm nào trong dung sai của nó.

## Chọn chuỗi

1. Mở một lắp ráp và chọn {{ui:Chuỗi dung sai}} trong nhóm Lắp ráp. Một thẻ mở trên khung nhìn.
2. Chọn chuỗi được đo **dọc theo**: X, Y hoặc Z của lắp ráp, hoặc {{ui:Pháp tuyến của mặt đầu tiên}}.
3. Nhấn {{ui:Chọn chuỗi}} và nhấp các mặt mà chuỗi đi qua, **theo thứ tự**: bắt đầu ở một bên của khe hở, đi qua các chi tiết, và kết thúc ở bên kia của khe hở.
4. Nhấn {{ui:Xong}} hoặc Enter. Backspace lùi lại lần nhấp cuối; Esc hủy.

Hai lần nhấp trên cùng một chi tiết tạo kích thước của chi tiết đó (khoảng cách của nó dọc theo chuỗi). Một lần nhấp trên chi tiết khác tạo một **mặt phân cách** giữa chúng, tại nơi các chi tiết gặp nhau; nó không có dung sai trừ khi bạn gõ một giá trị. Các mắt xích cộng hoặc trừ theo chiều đi của chuỗi, và chúng khép kín vòng: khe hở danh định là thứ mô hình hiển thị.

Bạn cũng có thể {{ui:Thêm một mắt xích}} bằng tay và nhập danh định, dung sai và việc nó cộng (+) hay trừ (−).

## Cho mỗi mắt xích dung sai

Mỗi mắt xích có sai lệch **trên** và **dưới** (ví dụ +0.1 và −0.05). **Dung sai từ** điền chúng từ chi tiết:

- **Dung sai chung**: ô Dung sai trong khung tên bản vẽ của chi tiết (xem [Bản vẽ ra PDF](topic:drawing-pdf)), khi đọc là ±0.1, +0.2/-0.1 hoặc ISO 2768-f, -m, -c hoặc -v (dung sai dài theo ISO 2768-1, tùy kích thước của mắt xích). Dung sai chung của chi tiết được dùng ngay khi chuỗi được chọn.
- **GD&T**: bất kỳ khung điều khiển hình học nào trên bản vẽ của chi tiết. Các vùng vị trí, biên dạng và đảo trục cho ± một nửa dung sai. Dung sai hướng hoặc hình dạng thường nằm trong dung sai kích thước đã có: chỉ thêm khi chuỗi gặp bề mặt được kiểm soát. Với Ⓜ hoặc Ⓛ, vùng được lấy theo kích thước đã ghi; dung sai thưởng không được tính.
- **Gõ tay**: bất kỳ số nào bạn gõ.

## Đọc kết quả

- **Khe hở, danh định** và, khi các dung sai không bằng nhau, **Khe hở, trung bình**: +0.2/−0 và +0/−0.1 dịch chuyển giữa khoảng.
- **Trường hợp xấu nhất**: mọi dung sai ở giới hạn cùng lúc. Khe hở không bao giờ vượt ra ngoài mức này.
- **RSS** (căn bậc hai tổng bình phương): mỗi dung sai được xem là ba độ lệch chuẩn của một phân bố chuẩn, rồi cộng lại bằng căn bậc hai của tổng bình phương. Đa số lắp ráp nằm gọn trong trường hợp xấu nhất; đây là ước tính thông thường cho các chi tiết sản xuất hàng loạt.
- Nhập Khe hở tối thiểu và Khe hở tối đa để xem trường hợp xấu nhất có luôn nằm trong khoảng hay không, và RSS dự đoán bao nhiêu lắp ráp trên một triệu sẽ nằm ngoài.
- Cột **#** xếp hạng các mắt xích theo **phần đóng góp** của chúng vào RSS: siết chặt những mắt đầu tiên để tạo khác biệt lớn nhất.

{{ui:Lưu CSV}} ghi các mắt xích, phần đóng góp của chúng và các kết quả. Các chuỗi dung sai được lưu trong tệp lắp ráp, và mỗi thay đổi là một bước cho {{key:Mod+Z}}.

:::note
Một chuỗi dung sai chỉ theo một phương. Nó không theo các góc hoặc các khúc ngoặt dọc theo chuỗi, và nó không đọc dung sai kích thước từ các phác thảo: hãy nhập chúng làm dung sai gõ tay hoặc qua khung tên.
:::
