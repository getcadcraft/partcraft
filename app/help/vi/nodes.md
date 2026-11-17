---
title: Nút: dựng mô hình bằng cách nối dây
summary: Nối các số thành điểm, điểm thành đường cong, đường cong thành bề mặt. Đổi một số và mọi thứ phía sau được dựng lại. Mỗi nút cũng là một dòng CraftScript, và đồ thị được lưu trong tệp.
keywords: nút, trình soạn nút, lập trình trực quan, tham số, đồ thị, dây nối, cổng, tự do, freeform, nurbs, loft, đùn, quay tròn, đường tròn, đường cong, bề mặt, chuỗi, dải, ngẫu nhiên, danh sách, script, craftscript, grasshopper
from: 3a4625de
---

Trình soạn **Nút** dựng hình học bằng cách nối các hộp với nhau. Mỗi hộp (một nút) làm một việc nhỏ: tạo một số, một điểm, một đường tròn, một chuyển tiếp. Bạn nối kết quả của nút này vào đầu vào của nút kế tiếp, và mô hình theo đó thay đổi khi bạn đổi một số ở đầu.

Mở nó từ danh sách không gian làm việc: {{ui:Nút}}. Nó mở cửa sổ trình soạn. Một chi tiết đã có đồ thị sẽ hiển thị đồ thị khi bạn mở không gian làm việc. Đây là một cửa sổ đặt trên khung nhìn 3D: kéo thanh tiêu đề để di chuyển, kéo góc để đổi kích thước.

## Nối dây

1. Chọn một nút từ danh sách bên trái (gõ vào ô tìm kiếm để thu hẹp, <kbd>Enter</kbd> thêm kết quả đầu tiên). Nút xuất hiện giữa vùng vẽ.
2. Kéo từ chấm **đầu ra** tròn ở bên phải một nút tới chấm **đầu vào** tròn ở bên trái nút khác. Chấm chuyển xanh khi hợp lệ và đỏ khi không; đưa con trỏ tới để xem lý do.
3. Đầu vào chưa nối sẽ hiện một ô để nhập giá trị. Gõ một số rồi nhấn <kbd>Tab</kbd>: kết quả được dựng lại.
4. Vòng tròn nhỏ trên thanh tiêu đề của nút là **con mắt** của nó. Nút có con mắt bật sẽ được vẽ trong khung nhìn 3D: đường cho đường cong, tô bóng cho bề mặt, chấm cho điểm.

Kéo nút bằng thanh tiêu đề. Kéo nền để di chuyển khung nhìn, lăn bánh xe để thu phóng. <kbd>Delete</kbd> xóa nút đã chọn. {{ui:Sắp xếp gọn}} xếp các nút thành cột, {{ui:Vừa khung}} đưa tất cả vào khung nhìn, {{ui:Hoàn tác}} và {{ui:Làm lại}} duyệt các thay đổi của bạn.

## Kiểu và đơn vị

Cổng có kiểu: số, có/không, điểm, vectơ, đường cong, bề mặt, lưới (mesh), khối đặc, hoặc "hình học" cho bất kỳ kiểu nào trong số đó. Một điểm có thể đưa vào đầu vào vectơ và ngược lại. Số mang đơn vị: **chiều dài** tính bằng milimét và **góc** tính bằng độ. Chiều dài không thể đưa vào góc, và chiều dài nhân chiều dài (diện tích) bị từ chối, nên dây nối sai sẽ bị chặn ngay khi bạn nối.

Chấm vuông là một **danh sách**. Khi một danh sách đi tới đầu vào một giá trị, nút chạy một lần cho mỗi phần tử, và kết quả của nó trở thành danh sách. Danh sách ngắn hơn lặp lại phần tử cuối cùng của nó. Ví dụ, một **Chuỗi** các chiều cao đưa vào **Di chuyển** sẽ tạo một chồng bản sao.

## Khối đặc và Boolean dưới dạng nút

Nhóm **Khối đặc** tạo các thân kín từ cùng bề mặt chính xác như bảng Bề mặt: **Khối hộp đặc**, **Khối trụ đặc** và **Khối cầu đặc** (kích thước tính bằng mm), **Hợp**, **Trừ** và **Giao** (khối đặc thứ hai được lấy từ khối thứ nhất; dung sai là mức các tam giác của bộ máy khối đặc có thể lệch khỏi bề mặt chính xác), **Bo góc giữa các mặt** (các mặt theo số thứ tự trong khối, 1 là mặt đầu tiên; một bán kính và, nếu lớn hơn 0, một bán kính ở đầu cuối), **Thể tích khối** (mm³) và **Khối đặc sang lưới** (để xem hoặc ghi cố định). Khối đặc có kiểu cổng riêng: một điểm hoặc một số không thể nối vào đầu vào khối đặc, và chấm vẫn đỏ. Các nút Boolean và Bo góc dùng bộ máy khối đặc của chính chương trình, được nạp lần đầu khi trình soạn mở.

## Lỗi

Nút không làm được việc của nó sẽ nêu lý do dưới tên nó, bằng chữ đỏ ("Bán kính phải lớn hơn 0."), và các nút sau nó sẽ chờ. Cùng thông báo đó là một mục trong bảng Vấn đề, nên bạn có thể tìm thấy từ đó.

## Mỗi nút là một dòng kịch bản

Nhấn {{ui:Kịch bản}} để xem đồ thị dưới dạng CraftScript: mỗi nút một dòng, ví dụ `n3 = nd_circle(n2, n1, [0 0 1]);`. Sửa văn bản và nhấn {{ui:Tạo đồ thị từ script này}} để đưa nó về lại thành đồ thị. Các hàm `nd_` tương tự hoạt động trong một CraftScript trong PartCraft, nên đồ thị có thể được chạy, lặp hoặc kiểm tra ở đó. Số ngẫu nhiên luôn nhận một **hạt giống (seed)**, nên cùng một đồ thị cho cùng kết quả trên mọi máy tính.

## Lưu cùng tệp

Đồ thị được lưu trong tệp chi tiết (không nằm trong lịch sử, nên hoàn tác trong trình soạn là riêng của nó). Các nút tạo đường cong, bề mặt và lưới bên cạnh khối đặc: chúng không thay đổi các đặc trưng của chi tiết.
