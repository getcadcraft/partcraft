---
title: Kiểm tra khung này
summary: Lấy các cấu kiện thép thẳng của một khung hàn (đế trượt, giá đỡ, khung từ ống và tiết diện), đặt thiết bị lên chân và gối đỡ lên sàn, rồi xem mỗi cấu kiện và mỗi mối hàn được sử dụng bao nhiêu theo AISC 360-16 hoặc EN 1993. Đây chỉ là công cụ hỗ trợ cho đến khi kỹ sư xem xét.
keywords: khung, khung hàn, đế trượt, đế bơm, cấu kiện kết cấu, mối hàn, hàn, kiểm tra, AISC 360, EN 1993, mức sử dụng, gối đỡ, thiết bị, tải trọng, tiết diện rỗng, HSS, RHS, CHS, kỹ sư
from: 032e34ee
---

{{ui:Kiểm tra khung này}} lấy các cấu kiện thép thẳng của một khung hàn, dựng khung từ chúng, giải khung dưới trọng lượng của thép và của thiết bị đặt trên đó, rồi kiểm tra mọi cấu kiện và mọi mối hàn nơi các cấu kiện gặp nhau. Một lần chạy, một bảng.

:::warning
Đây là **công cụ hỗ trợ cho đến khi kỹ sư xem xét**. Nó không phải là con dấu xác nhận, và kết quả đạt không phải là thiết kế. Công cụ dùng đường tâm của cấu kiện như đã vẽ, coi mọi mối nối được hàn kín quanh tiết diện, lấy cạnh mối hàn góc từ thành tiết diện (tối đa 8 mm) trừ khi bạn đặt khác, và không kiểm tra bulông, bản thép, bản chân đế, neo, ép mặt, cắt khối, mỏi hay nâng.
:::

## Chạy

1. Vẽ các cấu kiện bằng {{ui:Cấu kiện kết cấu}} (tiết diện lấy từ bảng tiết diện).
2. Mở {{ui:Khung nhìn}} › {{ui:Kiểm tra khung này}}. Chọn vị trí khung đứng (một **gối đỡ** tại mỗi chân: khớp, ngàm hoặc con lăn; {{ui:Gối khớp tại chân}} đặt một gối khớp tại mỗi đầu cấu kiện thấp nhất) và thứ được đặt lên khung (**thiết bị**: khối lượng, trọng tâm, các điểm bắt bulông, và lực đẩy ngang tùy chọn).
3. Chọn bộ tiêu chuẩn: **ASCE 7 + AISC 360-16** hoặc **EN 1990 + EN 1993**. Đặt mác thép và, với AISC, cường độ kim loại mối hàn (482.6 MPa là E70).
4. Nhấn {{ui:Kiểm tra}}. {{ui:Lưu báo cáo thành CSV}} ghi mọi bảng, với dòng chưa được xem xét nằm đầu tiên.

Khung được đọc theo milimét với trục đứng của chi tiết hướng lên. Các điểm gối đỡ và thiết bị được nhập dạng x y z trong cùng hệ, với z là chiều cao.

Đầu một cấu kiện nằm giữa một cấu kiện khác sẽ chia cấu kiện đó tại đó, và chân hoặc điểm bắt bulông nằm trên đường của cấu kiện cũng vậy. Trọng lượng được chia cho các điểm bắt bulông như một vật rắn; trọng tâm nằm ngoài các chân, hoặc lực nâng tại một chân, đều được nêu rõ, không bao giờ bị che giấu.

## Bạn nhận được gì

- Hạng mục được sử dụng nhiều nhất và có cấu kiện nào bị hỏng không. Các hạng mục mà kiểm tra không đánh giá được (tiết diện không có trong bảng, hoặc mác thép không có hệ số trong bộ tiêu chuẩn) được đếm và nêu tên, không bao giờ được tính là đạt.
- Một dòng cho mỗi cấu kiện và mỗi nhóm mối hàn: mức sử dụng, phép kiểm tra chi phối và điều khoản, cùng tổ hợp tải chi phối.
- Các bảng tương tự trong báo cáo.

## Kiểm tra những gì

Tiết diện rỗng (RHS, SHS, CHS, ống) và tiết diện chữ I cho kéo, nén, uốn, cắt và tương tác giữa chúng; mối hàn góc và mối hàn ngấu hoàn toàn theo phương pháp vectơ đàn hồi. Thành đặc chắc chỉ kiểm tra khi uốn và chỉ với tiết diện rỗng; thành mảnh được nêu là không kiểm tra. Một số hằng số được lấy từ tiêu chuẩn và chưa được đối chiếu với bản in; báo cáo liệt kê nguồn của từng hằng số.

Xem [Khung từ tiết diện thép](topic:structural-members) để vẽ các cấu kiện và danh sách cắt của chúng.
