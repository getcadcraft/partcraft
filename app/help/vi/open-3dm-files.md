---
title: Mở mô hình .3dm thành thân khối đặc
summary: Đưa lưới, polysurface và khối của tệp .3dm vào PartCraft thành một thân khối đặc mà bạn có thể cắt, thêm vào và phác thảo trên đó; tam giác đến từ đâu, và những gì bị bỏ.
keywords: 3dm, nurbs, polysurface, brep, bề mặt, lưới hiển thị, đùn, khối, nhập, lưới thành khối đặc, đơn vị, thân đã nhập
from: 8ae9571b
---

PartCraft mở tệp `.3dm` thành **thân khối đặc**, giống cách nó mở [lưới STL, OBJ hoặc 3MF](topic:open-meshes). Thân hoạt động như mọi khối đặc khác: cắt, thêm vào, khoan, tạo mẫu lặp, và phác thảo trên các mặt phẳng của nó. Nó không có lịch sử riêng.

## Mở tệp

1. Chọn {{ui:Mở}} hoặc nhấn {{key:Mod+O}}, rồi chọn tệp `.3dm`. Hoặc thả nó lên khung nhìn 3D.
2. PartCraft đọc tệp và hiển thị những gì nó tìm được: có bao nhiêu đối tượng có mặt đi vào, bao nhiêu mặt đến từ lưới được lưu trong tệp và bao nhiêu mặt PartCraft tự tạo lưới tam giác, mỗi lần sửa, và kết quả có **khép kín** hay không.
3. Kiểm tra **Đơn vị trong tệp** (tệp tự khai báo; một đơn vị PartCraft không liệt kê, như yard, được đổi sang milimét) và **Hướng lên trong tệp**.
4. Chọn {{ui:Mở thành thân}}, hoặc **Dùng để** và {{ui:Thêm vào chi tiết này}} khi chi tiết đã có đặc trưng.

## Tam giác đến từ đâu

PartCraft dựng thân từ tam giác trong phiên bản này, nên mọi bề mặt trong tệp trở thành các mặt phẳng nhỏ. Với mỗi mặt của polysurface (và mỗi đùn), nó lấy **lưới hiển thị được lưu trong tệp** khi có, nếu không thì **tự tạo lưới** (mặt phẳng, bề mặt NURBS, bề mặt quay, đường cong đùn và các khối đùn, được cắt theo các cạnh của chúng). Các mặt của một polysurface dùng chung điểm cạnh, nên một polysurface kín đi vào ở dạng kín. Một mặt thuộc loại bề mặt mà PartCraft chưa đọc được sẽ bị bỏ, và hộp thoại cho biết có bao nhiêu và thuộc loại nào; kết quả thường sẽ không khép kín.

## Mọi thứ trong tệp thành một thân

Mọi lưới, polysurface và khối đùn đang hiện, và mọi vị trí đặt của một khối, đi vào **một** thân tại vị trí mà tệp đặt chúng. Các đối tượng bị ẩn, hoặc nằm trên lớp đang tắt, bị bỏ. Khi tệp chứa nhiều khối đặc rời nhau, thân có nhiều mảnh: mở từng cái từ tệp riêng nếu bạn muốn chúng thành các thân riêng.

## Những gì bị bỏ (và được nêu)

Đường cong, điểm, đám điểm, văn bản, kích thước, tô bóng (hatch) và đèn bị bỏ: một thân chỉ nhận mặt. Các đối tượng SubD cũng bị bỏ (đổi chúng thành lưới hoặc polysurface trong chương trình đã tạo tệp trước), các khối liên kết từ tệp khác, và màu, lớp và tên (các thân PartCraft ở đây không có màu, lớp hay tên riêng).

## Khi không khép kín

Polysurface và bề mặt hở (một bề mặt cắt đơn, một hình thiếu một mặt) không có bên trong, nên không thể là khối đặc. Hộp thoại cho biết còn bao nhiêu lỗ hở và không thêm gì. Nối hoặc đóng hình trong chương trình đã tạo ra nó, lưu, rồi mở lại. Xem [Khi lưới không khép kín](topic:open-meshes#when-a-mesh-does-not-close).
