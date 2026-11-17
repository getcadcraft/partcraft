---
title: Sao chép, dán và nhân bản
summary: Sao chép hình học phác thảo, đặc trưng và chi tiết lắp ráp; dán tại vị trí bạn nhấp hoặc tại chỗ; nhân bản trong một bước; và những gì đi kèm khi sao chép và những gì không.
keywords: sao chép, dán, cắt, nhân bản, bộ nhớ tạm, dán tại chỗ, chọn tất cả, bỏ chọn, xóa, ctrl c, ctrl v, ctrl d, thể hiện, cấu kiện, sao chép phác thảo, sao chép đặc trưng, sao chép chi tiết
from: 611307d7
---

Nhóm {{ui:Sửa}} trên thanh công cụ có {{ui:Hoàn tác}}, {{ui:Làm lại}}, {{ui:Sao chép}}, {{ui:Dán}} và một menu {{ui:Thêm}} với {{ui:Cắt}}, {{ui:Sao chép}}, {{ui:Dán}}, {{ui:Dán tại chỗ}}, {{ui:Nhân bản}}, {{ui:Xóa}}, {{ui:Chọn tất cả}} và {{ui:Bỏ chọn}}, mỗi mục có phím tắt riêng. Những gì được sao chép phụ thuộc vào vị trí của bạn: hình học trong phác thảo đang mở, một đặc trưng trong lịch sử, hoặc một chi tiết trong lắp ráp.

Mục bị làm xám không thể thực hiện lúc này. Di chuột qua nó: chú giải sẽ cho biết lý do, ví dụ "Chọn hình học phác thảo trước" hoặc "Bộ nhớ tạm đang giữ Sketch2 và Extrude2: đặc trưng dán vào lịch sử, nên thoát phác thảo trước".

| Hành động | Phím | Trong phác thảo | Trong lịch sử | Trong lắp ráp |
|---|---|---|---|---|
| Sao chép | {{key:Mod+C}} | Các điểm và đường cong đã chọn | Phác thảo, đùn, quay tròn hoặc lỗ đã chọn (kèm phác thảo của nó) | Chi tiết đã chọn |
| Cắt | {{key:Mod+X}} | Sao chép, rồi xóa chúng | Sao chép, rồi xóa đặc trưng | Sao chép, rồi gỡ chi tiết |
| Dán | {{key:Mod+V}} | Bản sao đi theo con trỏ; nhấp nơi nó sẽ đặt | Thêm bản sao vào cuối lịch sử | Một bản sao mới cạnh các chi tiết khác |
| Dán tại chỗ | {{key:Mod+Shift+V}} | Tại cùng tọa độ | Giống như Dán | Ở cùng vị trí với chi tiết đã sao chép |
| Nhân bản | {{key:Mod+D}} | Sao chép và di chuyển trong một lần; bộ nhớ tạm không bị động đến | Một bản sao thứ hai ngay sau mục đang chọn | Một bản sao thứ hai cạnh các chi tiết khác |
| Xóa | {{key:Delete}} | Vùng chọn | Đặc trưng (hỏi nếu có đặc trưng khác dùng nó) | Chi tiết hoặc khớp |
| Chọn tất cả | {{key:Mod+A}} | Mọi thứ trong phác thảo | Không có | Không có |
| Bỏ chọn | {{key:Esc}} | Xóa vùng chọn | Xóa vùng chọn và các mục đã chọn | Xóa vùng chọn |

Mỗi lần dán, nhân bản và cắt là một bước trong danh sách hoàn tác: {{key:Mod+Z}} lấy nó lại, {{key:Mod+Y}} đặt nó trở lại.

## Trong phác thảo

1. Chọn những gì cần sao chép: nhấp vào nó, {{key:Shift}}+nhấp để chọn thêm, kéo một cửa sổ, hoặc nhấn {{key:Mod+A}} để chọn tất cả.
2. Nhấn {{key:Mod+C}} hoặc chọn {{ui:Sao chép}}. Thanh trạng thái cho biết đã sao chép gì.
3. Nhấn {{key:Mod+V}} hoặc chọn {{ui:Dán}}. Một bản sao nét đứt đi theo con trỏ, được giữ ở giữa. Nó bắt vào các điểm: đặt tâm vòng tròn đã sao chép lên một điểm bằng cách nhấp điểm đó.
4. Nhấp nơi nó sẽ đặt. Hình học đã dán vẫn được chọn, nên bạn có thể kéo nó hoặc thêm quan hệ ngay. {{key:Esc}} hủy việc dán.

Những gì đi kèm:

- Đường thẳng, vòng tròn hoặc cung tròn đã sao chép mang theo các điểm đầu và tâm của chính nó.
- Quan hệ và kích thước **giữa các mục đã sao chép** được đi kèm: một hình chữ nhật đã sao chép vẫn là hình chữ nhật, với các kích thước của nó.
- Quan hệ **với hình học bạn không sao chép**, và với gốc tọa độ, sẽ bị bỏ. Thanh trạng thái đếm chúng: "2 quan hệ với hình học nằm ngoài bản sao sẽ không được đi kèm". Vì vậy một bản sao đã dán có thể tự do di chuyển cho đến khi bạn buộc nó bằng quan hệ hoặc kích thước.
- Một điểm cố định vẫn cố định, ở vị trí mới của nó.

{{ui:Dán tại chỗ}} đặt bản sao đúng tọa độ của bản gốc, trong phác thảo này hoặc phác thảo khác: tiện để đưa một biên dạng từ phác thảo này sang phác thảo khác. Trong cùng phác thảo, bản sao nằm chồng lên bản gốc; kéo nó ra.

:::tip
Để lặp lại một tâm lỗ hoặc một rãnh nhiều lần, sao chép một lần và dán nhiều lần: mỗi {{key:Mod+V}} bắt đầu một bản sao mới đi theo con trỏ.
:::

{{ui:Nhân bản}} ({{key:Mod+D}}) sao chép vùng chọn và bắt đầu đặt nó ngay, mà không động đến những gì trong bộ nhớ tạm.

## Trong lịch sử

1. Nhấp một phác thảo, một đùn, một quay tròn hoặc một lỗ trong lịch sử.
2. {{key:Mod+C}} sao chép nó. Một đặc trưng dựa trên phác thảo được sao chép cùng phác thảo của nó.
3. {{key:Mod+V}} thêm bản sao vào cuối lịch sử (tại thanh lùi khi bạn đã lùi), với các tên mới như Sketch3 và Extrude2.

Bản sao nằm trên cùng mặt phẳng hoặc mặt với bản gốc, nên nó dựng chồng lên bản gốc và chi tiết trông giống nhau. Chọn phác thảo mới và đổi mặt phẳng của nó trong bảng bên phải, hoặc mở nó và kéo hoặc ghi lại kích thước biên dạng, để di chuyển bản sao.

- Dán vào **chi tiết khác**: mở chi tiết đó và nhấn {{key:Mod+V}}. Khi phác thảo của bản sao nằm trên một mặt mà chi tiết đó không có, nó sẽ được đặt trên mặt phẳng Front, và thanh trạng thái cho biết điều đó.
- {{ui:Nhân bản}} sao chép và dán trong một bước, trong cùng chi tiết.
- {{ui:Cắt}} sao chép đặc trưng, rồi xóa nó (hỏi trước nếu các đặc trưng khác dùng nó).

Mẫu, đối xứng, bo góc, vát mép, vỏ và khối đặc nhập vào không thể sao chép: chúng bám vào các cạnh, mặt hoặc đặc trưng được chọn trong chi tiết này. Thay vào đó, sao chép phác thảo hoặc đặc trưng mà chúng được dựng trên đó, hoặc tạo mẫu nó bằng {{ui:Thẳng}} hoặc {{ui:Tròn}}.

## Trong lắp ráp

1. Nhấp một chi tiết trong khung nhìn hoặc trong danh sách bên trái.
2. Chọn {{ui:Nhân bản}} ({{key:Mod+D}}), hoặc {{key:Mod+C}} rồi {{key:Mod+V}}.

Bản sao mới là **cùng một chi tiết**: sửa một bản và mọi bản sao đều thay đổi. Nó xuất hiện cách 20 mm về bên phải của mọi thứ đã có trong lắp ráp, xoay theo cùng cách với bản sao, và giữ ở đó cho đến khi một khớp đặt nó. {{ui:Dán tại chỗ}} ({{key:Mod+Shift+V}}) đặt nó đúng nơi chi tiết đã sao chép; ghép khớp để di chuyển nó (độ lệch của khớp trượt sẽ đẩy nó dọc theo).

Dán một chi tiết được sao chép từ lắp ráp khác sẽ mang chi tiết đó theo, giống như {{ui:Chèn}} từ tệp của nó. {{ui:Thêm bản sao}} trong nhóm Lắp ráp làm giống như {{ui:Nhân bản}}, và hoạt động khi không chọn gì (nó sao chép chi tiết cuối cùng).

## Bộ nhớ tạm

- Đó là bộ nhớ tạm riêng của PartCraft, không phải của máy tính: bạn không thể dán hình học PartCraft vào chương trình khác, hoặc dán văn bản vào các khung nhìn của PartCraft.
- Nó được giữ trong trình duyệt này, nên một thẻ PartCraft khác có thể dán những gì bạn đã sao chép. Nó được đọc lại và kiểm tra như một tệp đã mở; bất cứ thứ gì hỏng hoặc từ phiên bản khác đều bị từ chối.
- Một chi tiết có tệp STEP nhập lớn có thể quá lớn để trình duyệt giữ: khi đó nó chỉ dán được trong thẻ này.
- Trong một ô số hoặc ô tìm kiếm trợ giúp, {{key:Mod+C}} và {{key:Mod+V}} sao chép và dán văn bản như thường lệ.

Trên tờ bản vẽ, sao chép và dán hiện chưa có; {{ui:Xóa}} và {{ui:Bỏ chọn}} hoạt động trên ký hiệu đã chọn. Xem [Chưa được xây dựng](topic:not-built-yet).
