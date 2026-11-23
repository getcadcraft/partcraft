---
title: Bộ hậu xử lý bạn có thể sửa
summary: Post là một tệp văn bản ngắn chuyển đường dao thành G-code cho bộ điều khiển của bạn. Sao chép một post có sẵn, đổi các dòng bạn cần (số dòng, thay dao, di chuyển về gốc, mã kết thúc), xem G-code nó ghi khi bạn gõ, và giữ nó cùng chi tiết.
keywords: post, bộ hậu xử lý, postprocessor, G-code, NC, GRBL, LinuxCNC, sửa post, post tùy chỉnh, cpost, thay dao, M6, G43, chu kỳ cố định, số dòng, modal, sự kiện, biến
from: c78d0cae
---

Cùng một đường dao phải được ghi khác nhau cho các bộ điều khiển khác nhau: có số dòng hoặc không, `M6` hoặc tạm dừng, `G28` hoặc `G53`, `M30` hoặc `M2`. Một **post** là đoạn văn bản ngắn nói cách làm điều đó. Ba post có sẵn của PartCraft (kiểu Fanuc, GRBL và LinuxCNC) được viết theo định dạng này, nên post của riêng bạn có thể bắt đầu từ bản sao của một trong số chúng.

Kiểm tra đầu ra trong bộ mô phỏng của máy bạn trước khi cắt, và chạy thử trên không phía trên phôi trước. Các post có sẵn ghi đúng những gì chúng ghi trước khi định dạng này tồn tại (các bài kiểm thử so sánh đầu ra từng byte trên hàng trăm chương trình), nhưng không có gì ở đây được kiểm chứng trên máy của bạn, và một post bạn sửa là của bạn để kiểm chứng.

## Tạo một post

Trong {{ui:Gia công}}, dưới **Hậu xử lý**:

- {{ui:Sửa post…}} trên một bộ điều khiển có sẵn mở **bản sao riêng của bạn** của nó. Trên một post riêng của bạn, nó mở chính post đó.
- {{ui:Post mới…}} bắt đầu từ một post trống nhỏ với mọi sự kiện có trong đó.
- {{ui:Nhập tệp post…}} đọc tệp văn bản `.cpost` (tệp bạn nhận được từ **Lưu thành tệp…** trong trình soạn).

Trình soạn hiển thị văn bản, một dòng cho biết nó có đọc được hay không (và dòng nào sai), và G-code post ghi, khi bạn gõ. **Xem trước với** chọn một chương trình mẫu nhỏ chạy mọi sự kiện, hoặc chương trình của chính chi tiết này. {{ui:Lưu}} giữ post trong tệp chi tiết (tối đa 20 post) và chọn nó làm bộ điều khiển. Post đi cùng chi tiết; để dùng một post trong chi tiết khác, lưu nó thành tệp và nhập ở đó.

## Post trông như thế nào

```
post mymill
name My mill (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

Dòng bắt đầu bằng `//` và dòng trống được bỏ qua. Ở đầu là các thiết lập; sau đó là một khối `on <event>` cho mỗi sự kiện, đóng bằng `end`. Sự kiện bị bỏ qua thì không ghi gì.

| Thiết lập | Ý nghĩa |
|---|---|
| `post <id>` | Mã của post: chữ cái, chữ số, `-` và `_` |
| `name <text>` | Điều mà danh sách Điều khiển hiển thị |
| `extension <ext>` | Phần mở rộng tệp: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … trên mọi dòng `emit`, hoặc không có |
| `decimal-point yes` / `no` | `10.` thay vì `10` (chú thích không bao giờ mang dấu thập phân) |
| `canned-cycles yes` / `no` | `no`: lỗ được ghi thành các di chuyển G0/G1 mà chúng đại diện |
| `modal <group> <words>` | Từ của một nhóm (`modal motion G0 G1 G2 G3`) chỉ được ghi khi chúng thay đổi |

## Sự kiện

Chúng chạy theo thứ tự này cho một chương trình: `start`; rồi với mỗi thao tác `operation`, `tool-change` (khi dao thay đổi), `spindle` (khi tốc độ thay đổi), `approach` (di chuyển lên điểm đầu tiên, trước di chuyển nhanh đầu tiên), `coolant-on`, rồi các di chuyển của nó là `rapid`, `feed` và `arc`, và mỗi chu kỳ cố định là `cycle-start`, một `cycle-hole` cho mỗi lỗ và `cycle-end`; cuối cùng là `end`.

Các sự kiện bổ sung, cho những gì vượt quá ba trục (một post không có sự kiện sẽ từ chối chương trình như vậy và nêu tên sự kiện nó thiếu):

| Sự kiện | Khi nào | Biến của nó |
|---|---|---|
| `index` | Trước một thao tác có hướng dao khác với lần trước, và trước thao tác đầu tiên trên máy có trục xoay | `rot.a`, `rot.b`, `rot.c` (các vị trí cần đến; để trống cho trục máy không có), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Các di chuyển của một thao tác có trục xoay di chuyển khi nó đang cắt | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (yes khi tốc độ tiến phải theo thời gian nghịch đảo), `invf` (1/phút) |
| `rotary-end` | Sau một thao tác như vậy | |
| `probe-move` | Một di chuyển dừng khi đầu đo bị kích hoạt | `x`, `y`, `z`, `f`, `probe.n` (1 đến 4), `probe.axis` (x, y hoặc z), `probe.k` (1, 2 hoặc 3) |
| `probe-set` | Sau các lần chạm của một chu kỳ đo | `probe.kind` (`"z"`, `"x"`, `"y"` hoặc `centre`), `probe.action` (`set` hoặc `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Một di chuyển ren trên máy tiện | `x`, `z`, `thread.lead` |

Ngoài ra với mọi sự kiện: `kin` (none, a, b, ac, bc), `rotary` và `tcp` (yes hoặc no, từ máy trong Thiết lập), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` và `op.turn` của thao tác, và trên máy tiện `spin.mode` (css hoặc rpm), `spin.css`, `spin.max` và `tool.nose`. Một từ có chữ cái mà giá trị rỗng, như `A{rot.a}` trên máy không có trục A, bị bỏ khỏi dòng. So sánh x, y và z dưới dạng chuỗi trong dấu ngoặc kép (`if probe.kind == "z"`): không có dấu ngoặc, chúng là tọa độ của di chuyển.

Hai dòng nữa ở đầu post biến nó thành post tiện: `machine lathe` (khi đó nó chỉ ghi X và Z, và từ chối các đường dao phay như post phay từ chối đường tiện) và `lathe-x diameter` hoặc `lathe-x radius`.

Mỗi sự kiện có thể dùng các biến thuộc loại di chuyển của nó, viết dạng `{tên}`: chương trình (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), phôi (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), dao (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), thao tác (`op.name`, `op.type`), `rpm`, điểm của một di chuyển (`x`, `y`, `z`, `f`, và `moved`: đúng khi một trục thay đổi), cung (`arc.g` 2 hoặc 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) và lỗ (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Danh sách **Sự kiện và biến** trong trình soạn cho biết sự kiện nào thấy biến nào. Trạng thái bạn có thể đọc và đặt: `cool`, `offset`, và `at.x`, `at.y`, `at.z`, `at.f` (các giá trị ghi lần cuối).

## Câu lệnh

| Câu lệnh | Nó làm gì |
|---|---|
| `raw TEXT` | Một dòng đúng như gõ (không có số dòng) |
| `comment TEXT` | `(TEXT)` với ký tự không phải ASCII và ngoặc được loại bỏ |
| `emit WORD WORD …` | Một dòng từ; từ nào rỗng khi xuất sẽ bị bỏ; không có từ, không có dòng |
| `word WORD …` | Thêm từ vào dòng đang xây; một `emit` trơn kết thúc dòng |
| `if EXPR` … `else` … `end` | Điều kiện: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, nếu không thì b) |
| `for tool in tools` … `end` | Một lần cho mỗi dao mà chương trình dùng |
| `set NAME EXPR` | Ghi nhớ một giá trị (`set offset tool.number`) |
| `reset NAME …` | Quên các từ modal (một nhóm, một chữ cái địa chỉ như `Z`, hoặc `at.z`) |
| `do rapid X Y Z` | Chạy sự kiện `rapid` cho một điểm |

Một từ là văn bản đã gõ với các lỗ `{biến|bộ lọc}`. Các bộ lọc là `upper`, `lower`, `pad:N` (điền số 0), `cut:N` (N ký tự đầu), `safe` (ASCII an toàn cho chú thích) và `int`. Từ kết thúc bằng `~` là **modal**: nó chỉ được ghi khi khác với giá trị ghi lần cuối (`G1~`, `X{x}~`). Từ kết thúc bằng `~!` được ghi mỗi lần và vẫn được nhớ. Tên không phải biến là văn bản thường (`G81`, `mist`). Số được làm tròn đến 0.001 mm và ghi không có số 0 cuối.

## Post không thể làm gì

Nó chỉ quyết định cách các di chuyển được ghi, không hơn. Nó không thể thay đổi đường dao, sắp xếp thao tác, chia cung, thêm trục, biết phạm vi hành trình hay động học của máy bạn, hoặc thực hiện phép tính trên tọa độ (không có `+`). Các vị trí quay tự nó đến từ máy được mô tả trong Thiết lập, không phải từ post: post có thể đổi dấu hoặc ký tự của chúng, nhưng không đổi động học. Chu kỳ tuổi thọ dao và chương trình con chưa được xây dựng. Tệp post kiểu `.cps` từ chương trình khác không thể tải: đây là định dạng khác, đơn giản hơn.
