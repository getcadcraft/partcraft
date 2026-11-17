---
title: Phương trình hai chiều
summary: Thay đổi một tham số và chi tiết sẽ theo; nhập kích thước mới vào một số bị điều khiển và PartCraft tính tham số đứng sau nó, hỏi bạn chọn tham số nào khi có nhiều tham số có thể thay đổi.
keywords: phương trình, giải ngược, kích thước bị điều khiển, hai chiều, đảo chiều, tìm mục tiêu, tham số, giá trị liên kết, tham số nào
from: 82dc0269
---

Một phương trình như **Extrude1 depth = thick + extra** hoạt động theo cả hai chiều.

## Thuận: thay đổi tham số

Trên thẻ {{ui:Tham số}}, đổi `thick` từ 20 thành 30. Độ sâu của Extrude1 trở thành 30 + extra, và chi tiết được dựng lại.

## Ngược: thay đổi số bị điều khiển

1. Bấm "Extrude1" trong lịch sử. Hộp **Depth (mm)** hiển thị **ƒ**: một phương trình đang điều khiển nó.
2. Nhập kích thước bạn muốn, ví dụ `40`, rồi nhấn {{key:Enter}}.

PartCraft giải tìm tham số đứng sau phương trình, qua bao nhiêu bước cũng được (`depth = hub_h`, `hub_h = disc_t + 50`: nhập một chiều cao sẽ đổi `disc_t`). Thanh trạng thái cho biết đã thay đổi gì, ví dụ extra từ 5 thành 15.

Khi hai hoặc nhiều tham số cùng điều khiển một số, một hộp hỏi **Nên thay đổi tham số nào?** và liệt kê chúng. Bấm vào một tham số; các tham số khác giữ nguyên giá trị. {{ui:Hủy}} không thay đổi gì.

Điều tương tự cũng áp dụng trong phác thảo: bấm đúp vào một kích thước bị điều khiển, nhập giá trị, rồi nhấn {{key:Enter}}. Nó cũng hoạt động ở cột **Giá trị** của bảng tham số, với tham số tự nó là một biểu thức.

## Khi không thể

- Một số phải là số nguyên (số lượng của mẫu lặp) hoặc phải nằm trong khoảng (góc đến 360°) sẽ bị từ chối trước khi có gì thay đổi.
- Phương trình chỉ gồm các số cố định (`=40`) không có tham số nào để đổi: số bạn nhập sẽ thay thế nó.
- Nếu không có giá trị nào của tham số cho kích thước bạn nhập, thanh trạng thái sẽ báo và không có gì thay đổi.
- Một phác thảo không thể giải với giá trị mới sẽ giữ các giá trị trước đó, và thanh trạng thái nêu tên phác thảo đó.

Mọi thay đổi, theo cả hai chiều, là một bước cho {{key:Mod+Z}} và {{key:Mod+Y}}.
