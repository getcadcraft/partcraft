---
title: Thay đổi chi tiết qua lịch sử
summary: Sửa đặc trưng và phác thảo sau khi đã tạo, tắt, quay lại, chèn đặc trưng ở phía trước, sắp xếp lại, đổi tên và xóa, rồi hoàn tác bất kỳ thao tác nào trong số đó.
keywords: lịch sử, cây đặc trưng, cây thiết kế, sửa đặc trưng, sửa phác thảo, tắt, bật lại, quay lại, rollback, tiến tới, roll forward, sắp xếp lại, di chuyển đặc trưng, xóa, đổi tên, hoàn tác, làm lại, dựng lại, tái tạo, quan hệ cha con, chi tiết lớn, nhiều đặc trưng, dựng lại chậm, 750 đặc trưng
from: 6f75aef4
---

Một chi tiết PartCraft chính là lịch sử của nó: danh sách các mặt phẳng, phác thảo và đặc trưng ở bên trái. PartCraft dựng lại khối đặc từ đầu danh sách đó mỗi khi có thay đổi. Thay đổi một số ở phía trên danh sách sẽ làm thay đổi mọi thứ được dựng trên nó.

## Sửa một đặc trưng

1. Nhấp đặc trưng trong lịch sử (hoặc phác thảo thụt lề bên dưới nó).
2. Thay đổi cài đặt trong bảng bên phải. Mỗi thay đổi được dựng lại ngay.

Không có OK hay Hủy: mọi thay đổi đều được áp dụng. Nếu không ưng, nhấn {{key:Mod+Z}}.

## Đổi cạnh hoặc mặt mà bo góc, vát mép hay vỏ sử dụng

Nhấp đúp đặc trưng trong lịch sử, hoặc chọn nó rồi chọn {{ui:Chọn cạnh}} (hoặc {{ui:Chọn mặt}}). Nhấp cạnh hoặc mặt để thêm hoặc bỏ, rồi chọn {{ui:Xong}} hoặc nhấn {{key:Esc}}. Xem [Bo tròn, vát mép và rỗng hóa](topic:fillet-chamfer-shell).

## Sửa phác thảo

1. Nhấp đúp phác thảo trong lịch sử, hoặc chọn nó rồi chọn {{ui:Sửa phác thảo}} trong bảng bên phải (hoặc {{ui:Phác thảo}} trên thanh công cụ).
2. Chi tiết trở về trạng thái lúc phác thảo được tạo: các đặc trưng sau nó bị ẩn trong lúc bạn sửa.
3. Thay đổi hình học, ràng buộc hoặc kích thước.
4. Đóng phác thảo. Toàn bộ chi tiết được dựng lại cùng thay đổi.

Để chỉ đổi một kích thước, bạn không cần mở phác thảo. Chọn đặc trưng hoặc phác thảo rồi đổi số dưới **Kích thước phác thảo** (hoặc **Kích thước điều khiển**) trong bảng bên phải. Xem [Thay đổi kích thước mà không cần mở phác thảo](topic:change-sizes).

## Khi một đặc trưng bị lỗi

Nếu một thay đổi làm đặc trưng không thể thực hiện, PartCraft vẫn dựng mọi thứ khác và đánh dấu vấn đề:

- đặc trưng hiện **⚠ lỗi** trong lịch sử, và thông báo của nó nằm ở đầu bảng bên phải (rê chuột qua hàng để đọc thêm);
- các đặc trưng cần nó hiện **⚠ chưa dựng**, kèm "Cần Extrude2, đặc trưng này đang lỗi.";
- chip trên thanh trạng thái ghi "1 đặc trưng đang lỗi".

Sửa nguyên nhân (hoặc hoàn tác), và chi tiết sẽ được dựng lại. Các thông báo thường gặp và cách xử lý nằm trong [Khắc phục sự cố](topic:troubleshooting).

## Tắt một đặc trưng

Tắt đặc trưng là ngừng nó mà không xóa: hữu ích khi muốn thử chi tiết không có lỗ hoặc mẫu lặp.

1. Chọn đặc trưng.
2. Chọn {{ui:Tắt}}. Hàng của nó hiện **tắt**. Các đặc trưng cần nó cũng không được dựng.
3. Chọn {{ui:Bật lại}} để bật lại.

## Quay lại

Quay lại chỉ dựng chi tiết đến một điểm, để bạn xem nó như lúc đó, hoặc thêm một đặc trưng ở phía trước trong lịch sử.

1. Chọn một đặc trưng rồi chọn {{ui:Quay lại đến đây}}. Đặc trưng đó và mọi đặc trưng bên dưới được làm xám và không được dựng. Một hàng **Thanh quay lại · tiến tới** đánh dấu vị trí.
2. Đặc trưng nào bạn thêm lúc này sẽ được đặt **tại thanh**, trước các đặc trưng màu xám.
3. Nhấp **Thanh quay lại · tiến tới** để dựng lại mọi thứ.

Vị trí quay lại được lưu trong tệp.

## Sắp xếp lại đặc trưng

1. Chọn đặc trưng.
2. Chọn {{ui:Lên}} hoặc {{ui:Xuống}}, hoặc khi hàng lịch sử của nó đang được chọn thì nhấn {{key:Alt+Up}} hoặc {{key:Alt+Down}}.

Một đặc trưng không bao giờ có thể di chuyển lên trên thứ nó dùng. Nút bị làm xám, và rê chuột qua nút (hoặc thử phím tắt) sẽ hiện lý do, ví dụ "Extrude2 dùng Sketch2, nên Sketch2 phải nằm trước."

Đặc trưng dùng: phác thảo của nó; mặt mà phác thảo nằm trên đó; các đặc trưng mà một mẫu lặp hoặc đối xứng sao chép; một đường phác thảo hoặc phần quay tròn được dùng làm hướng hoặc trục.

## Xóa một đặc trưng

1. Chọn đặc trưng rồi chọn {{ui:Xóa}} trong bảng bên phải hoặc trên thanh công cụ, hoặc nhấn {{key:Delete}}.
2. Nếu đặc trưng khác đang dùng nó, PartCraft hỏi: "Extrude3, Hole1 dùng Extrude1 và cũng sẽ bị xóa." Chọn {{ui:Xóa tất cả}} hoặc {{ui:Hủy}}.

Xóa đặc trưng không xóa phác thảo của nó: phác thảo sẽ xuất hiện lại trong khung nhìn như một phác thảo chưa dùng, sẵn sàng cho đặc trưng khác. Hãy xóa riêng phác thảo nếu bạn không cần nó.

## Đổi tên

Chọn đặc trưng và nhập **Tên** mới ở cuối bảng bên phải (tối đa 60 ký tự). Tên của chính chi tiết nằm trong bảng bên phải khi không có gì được chọn.

## Chi tiết có hàng trăm đặc trưng

Chi tiết có hàng trăm đặc trưng được kiểm tra ở mức 750. PartCraft giữ khối đặc đã có ở giữa lịch sử, nên thay đổi ở cuối lịch sử chỉ dựng lại các đặc trưng sau nó; thay đổi gần đầu danh sách sẽ dựng lại mọi thứ dựa trên nó, và mất lâu nhất. Hoàn tác và làm lại chỉ dựng lại từ chỗ hai trạng thái khác nhau. Để làm việc nhanh hơn với chi tiết lớn, hãy quay lại đến chỗ bạn đang làm (xem Quay lại ở trên) hoặc tắt những gì bạn chưa cần lúc này. Nhiều đường cắt và khối nổi không chạm nhau được áp dụng cùng lúc, nên chi tiết gồm nhiều lỗ và khối nổi rời nhau được dựng nhanh hơn số lượng đặc trưng gợi ý.

Chi tiết lớn được dựng lại ở chế độ nền: chip dựng ở dưới cùng ghi **Đang dựng lại…** cùng tiến độ, và khung nhìn, bảng và menu vẫn hoạt động trong lúc chạy. Chi tiết trên màn hình là bản dựng gần nhất cho đến khi bản mới sẵn sàng. Nếu bạn thay đổi thêm trong lúc đang dựng lại, PartCraft dựng phiên bản mới nhất và bỏ bản đang dở. Chi tiết nhỏ vẫn được dựng lại ngay.

## Hoàn tác và làm lại

- {{key:Mod+Z}} hoặc {{ui:Hoàn tác}} hoàn tác thay đổi cuối cùng: một đặc trưng, một cài đặt, một lần sửa phác thảo, một lần kéo. Thanh trạng thái cho biết đó là thay đổi gì, ví dụ "Đã hoàn tác thay đổi kích thước."
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} hoặc {{ui:Làm lại}} làm lại thao tác.
- PartCraft giữ 200 bước gần nhất (một chi tiết lớn đến mức 200 bản sao tốn quá nhiều bộ nhớ sẽ giữ ít hơn, nhưng không bao giờ ít hơn 20 bước mới nhất). Thay đổi trên tờ bản vẽ (một mặt cắt, một ký hiệu GD&T đã di chuyển) nằm trong cùng danh sách. Mở tệp hoặc tạo chi tiết mới sẽ xóa danh sách này.

:::mac
Trên Mac, dùng ⇧⌘Z để làm lại. Trong Safari, ⌘Y có thể mở lịch sử của trình duyệt.
:::
