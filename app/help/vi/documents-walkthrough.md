---
title: Tài liệu và sửa đổi (kho)
summary: Hướng dẫn từng bước với một công việc thực tế: đưa thư mục dự án gồm các chi tiết và cụm lắp ráp vào kiểm soát, mượn một chi tiết ra, thay đổi nó, trả vào kèm ghi chú, phát hành, xem thứ gì dùng nó và danh mục vật tư, điều một người khác thấy khi tệp đang bị khóa, và cách hoạt động với thư mục đám mây.
keywords: kho, tài liệu, hướng dẫn từng bước, hướng dẫn, mượn ra, trả vào, sửa đổi, phát hành, phê duyệt, khóa, lịch sử, nơi được dùng, danh mục vật tư, bom, lắp ráp, thư mục đám mây, thư mục dự án, hai người, thư mục chia sẻ
from: 0a5e6983
---

## Bạn sẽ làm gì

Bạn là Ana, đang làm việc trên dự án Riverside Clinic cùng một đồng nghiệp, Ben. Các chi tiết và cụm lắp ráp của dự án nằm trong một thư mục mà cả hai bạn đều truy cập được (ổ đĩa chia sẻ, thư mục đồng bộ hoặc thư mục đám mây). Khi hoàn thành, một tệp sẽ đi từ bản sao đầu tiên đến sửa đổi đã phát hành **A**, được thay đổi lần nữa thành **B.1**, bạn sẽ thấy ai đã làm gì, và bạn sẽ thấy Ben thấy gì khi bạn đang giữ tệp.

Mọi thứ được lưu trong một thư mục ẩn `.ccvault` bên cạnh các tệp của bạn: không có máy chủ, không tải gì lên (thư mục đám mây là ngoại lệ, xem bước cuối). Để xem đầy đủ mọi nút và quy tắc ở một nơi, hãy xem chủ đề *Tài liệu: mượn ra, sửa đổi và phát hành* nếu ứng dụng của bạn có.

## 1. Thiết lập thư mục dự án

1. Chọn {{ui:Tài liệu…}} trong nhóm **Tệp** trên thanh công cụ.
2. Chọn {{ui:Chọn thư mục dự án}} và chọn thư mục chứa các chi tiết và cụm lắp ráp của dự án. (Thư mục dự án hoạt động trong Studio và trong các trình duyệt có thể mở thư mục, như Chrome và Edge. Ở các trình duyệt khác, bảng sẽ thông báo điều đó.)
3. Chọn {{ui:Đổi}} bên cạnh **Bạn:** rồi nhập tên, `Ana` (nếu được hỏi, nhập thêm tên của máy tính này). Bảng khi đó hiển thị *Bạn: Ana trên* và máy tính của bạn. Tên bạn sẽ được ghi cho mọi thao tác bạn thực hiện.
4. Chọn {{ui:Bắt đầu một kho trong thư mục này}} và nhập tên dự án, `Riverside clinic`. Bảng hiển thị *Đã bắt đầu kho cho Riverside clinic.*

## 2. Đưa một tệp vào kiểm soát

1. Mở **Tệp chưa có trong kho** và chọn {{ui:Thêm}} bên cạnh `plates/Bracket.partcraft.json`.
2. Tệp xuất hiện dưới **Tệp trong kho** ở sửa đổi **A.1**, trạng thái **Đang thực hiện**. A.1 là bản sao đầu tiên của tệp; kho giữ một bản sao của mọi sửa đổi.

## 3. Mượn ra, thay đổi, trả vào

1. Chọn {{ui:Mở}} bên cạnh `plates/Bracket.partcraft.json`. Chi tiết mở trong PartCraft và bảng đóng lại để bạn xem. Mở lại bảng từ {{ui:Tài liệu…}}.
2. Mở lại bảng và chọn {{ui:Mượn ra}}. Dòng hiện ghi **Đã mượn ra cho bạn**. Một tệp khóa được tạo trong `.ccvault/locks`; không ai khác có thể mượn tệp này cho đến khi bạn trả vào.
3. Thay đổi chi tiết: sửa một kích thước, thêm một lỗ. Lưu sẽ bị từ chối nếu tệp không được mượn ra cho bạn, và thông báo lý do; Lưu thành luôn dùng được để tạo bản sao của riêng bạn.
4. Mở bảng, chọn {{ui:Trả vào}} và nhập nội dung đã thay đổi (`Đã di chuyển cửa`). Bảng hiển thị *đã trả vào với tên A.2*. Tệp trong thư mục dự án giờ là chi tiết bạn đã mở, và khóa đã được gỡ. Trả vào khi không có thay đổi sẽ giữ nguyên sửa đổi.

Nếu đổi ý, {{ui:Hủy mượn ra}} sẽ trả tệp lại mà không tạo sửa đổi mới.

## 4. Xem xét và phát hành

1. Chọn {{ui:Gửi duyệt}}. Trạng thái chuyển thành **Chờ duyệt** và tệp chỉ đọc.
2. Trước khi phê duyệt, chọn {{ui:Cài đặt dự án}} và liệt kê những người được phép phê duyệt (mỗi tên một dòng), ví dụ `Ben` và `Carla`, rồi đánh dấu quy tắc rằng người phê duyệt phải là người khác với tác giả. Chọn {{ui:Lưu cài đặt}}. Lúc này chính kho sẽ từ chối mọi người khác.
3. Ben (hoặc Carla) chọn {{ui:Phê duyệt}} và nhập tên người phê duyệt. Trạng thái chuyển thành **Đã phát hành** và sửa đổi thành **A**, kèm *phê duyệt bởi* và tên. Tệp đã phát hành chỉ đọc. {{ui:Gửi lại}} sẽ đưa tệp trở về trạng thái Đang thực hiện, kèm lý do.

Tên người phê duyệt là tên được nhập trong bảng; đó là bản ghi về người đã ký duyệt, không phải bằng chứng danh tính.

## 5. Một sửa đổi mới

1. Trên tệp đã phát hành, chọn {{ui:Sửa đổi mới}}. Bạn giữ tệp này để chuẩn bị cho chữ cái tiếp theo.
2. Thay đổi tệp, rồi {{ui:Trả vào}}. Sửa đổi là **B.1**, đang thực hiện. Phát hành theo cách tương tự và nó thành **B**. {{ui:Hủy mượn ra}} trước lần trả vào đầu tiên sẽ giữ nguyên ở **A**.

Chữ cái sửa đổi chạy theo A, B … Z, AA, AB. Nếu tiêu chuẩn của bạn bỏ qua một số chữ cái, cài đặt dự án *Dùng chuỗi ASME Y14.35* sẽ bỏ qua I, O, Q, S, X và Z cho các sửa đổi tiếp theo.

## 6. Xem những gì đã xảy ra

Chọn tên tệp để mở chi tiết:

- **{{ui:Lịch sử}}**: mọi sự kiện, mới nhất trước, kèm ai, máy nào và khi nào: *Đã trả vào A.2* bởi Ana, *Đã phát hành* bởi Ben, v.v.
- **{{ui:Sửa đổi}}**: bảng sửa đổi: mọi sửa đổi được giữ lại, kèm ngày, người trả vào, ghi chú và người phê duyệt. Kho giữ một bản sao của từng sửa đổi trong `.ccvault/revs`.
- **{{ui:Dùng}}**: các chi tiết của một cụm lắp ráp.
- **{{ui:Được dùng bởi}}**: liệt kê mọi cụm lắp ráp trong kho có chứa chi tiết này: thay đổi một giá đỡ và bạn biết cần kiểm tra cụm nào.

## Cụm lắp ráp: chúng dùng gì và danh mục vật tư

Đặt một cụm lắp ráp (`.partcraft.json`, được lưu từ chế độ Lắp ráp) vào thư mục và thêm nó. Chọn tên của nó: **Dùng** liệt kê các chi tiết mà nó chứa, kèm sửa đổi và trạng thái của từng chi tiết; **Được dùng bởi** trên một chi tiết liệt kê mọi cụm lắp ráp chứa nó. {{ui:Danh mục vật tư (CSV)}} lưu toàn bộ danh sách chi tiết, theo từng cấp, kèm số lượng, sửa đổi và trạng thái, để dùng trong bảng tính. Thay đổi một giá đỡ, và **Được dùng bởi** cho bạn biết cần xem cụm lắp ráp nào.

## 7. Ben thấy gì khi bạn đang giữ tệp

Bây giờ hãy mượn tệp ra lần nữa, và nhờ Ben mở cùng thư mục dự án trên máy tính của Ben rồi mở bảng. Ở dòng của tệp, Ben thấy **Được Ana mượn ra trên** máy tính của bạn **từ** thời điểm đó, và không có nút {{ui:Mượn ra}}. Nếu Ben vẫn thử, kho sẽ từ chối: khóa là một tệp mà hệ thống không tạo hai lần, nên hai người không thể cùng giữ tệp, kể cả trong cùng một khoảnh khắc, khi thư mục nằm trên đĩa trong Studio. (Trong trình duyệt, thư mục chỉ đảm bảo ở mức tốt nhất có thể, và bảng nói rõ điều này dưới **Thư mục**.)

Nếu Ana đi vắng và Ben cần tệp, {{ui:Phá khóa mượn ra}} sẽ giải phóng nó. Ben phải nhập lý do; lý do được ghi vào nhật ký cùng với thông tin ai đã mượn ra. Khi dự án có danh sách quản trị viên, chỉ họ mới làm được. Lần mượn ra quá giới hạn cũ (mặc định 14 ngày) được đánh dấu *lâu rồi*. Sau khi phá khóa, việc trả vào muộn của Ana sẽ bị từ chối, nên hai bạn không thể ghi đè lên nhau.

## 8. Thư mục đám mây

Thư mục đám mây là thư mục dự án được lưu trong kho đám mây của nhóm bạn, nên nhóm không cần ổ đĩa chia sẻ. Trong Studio, khi đã đăng nhập vào tài khoản CadCraft, bảng hiển thị {{ui:Mở thư mục đám mây}} bên cạnh {{ui:Chọn thư mục dự án}}. Chọn nó rồi chọn thư mục, được liệt kê dưới dạng không gian làm việc / thư mục. Chủ không gian làm việc phải tạo thư mục trước, và kho đám mây của nhóm phải đang có hiệu lực. Mọi thứ ở trên hoạt động giống nhau; máy chủ tạo khóa, và khóa này nghiêm ngặt giữa những người dùng. Nếu bạn chưa đăng nhập, bảng sẽ yêu cầu đăng nhập. Trong một tab trình duyệt thông thường, nút đám mây không xuất hiện; hãy dùng Studio.

## Thử nghiệm

Thực hiện tám bước trên với một bản sao của tệp thật. Với các bước hai người, bạn cần một người khác, hoặc hai cửa sổ với hai tên. Nếu bạn thử với một thư mục chia sẻ thật, trang Kiểm thử cộng đồng có một bài kiểm tra hỏi đúng điều này, và nhận kết quả.
