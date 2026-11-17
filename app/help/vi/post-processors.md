---
title: Post processor bạn có thể chỉnh sửa
summary: Post là một tệp văn bản ngắn, biến đường dao thành G-code cho bộ điều khiển của bạn. Sao chép một post có sẵn, sửa các dòng cần thiết (số dòng, đổi dao, lệnh về gốc, mã kết thúc), xem G-code nó ghi khi bạn gõ, và giữ nó cùng chi tiết.
keywords: post, post processor, postprocessor, G-code, NC, GRBL, LinuxCNC, sửa post, post tùy chỉnh, cpost, đổi dao, M6, G43, chu trình cố định, số dòng, modal, sự kiện, biến
from: 36ab8a38
---

Cùng một đường dao phải được viết khác nhau cho các bộ điều khiển khác nhau: có số dòng hoặc không, `M6` hay tạm dừng, `G28` hay `G53`, `M30` hay `M2`. Một **post** là đoạn văn bản ngắn nói cách làm điều đó. Ba post có sẵn của PartCraft (kiểu Fanuc, GRBL và LinuxCNC) được viết theo định dạng này, nên post riêng của bạn có thể bắt đầu bằng một bản sao của một trong số chúng.

Kiểm tra đầu ra trong trình mô phỏng của chính máy bạn trước khi cắt, và chạy thử trên không phía trên phôi trước. Các post có sẵn ghi đúng những gì chúng ghi trước khi định dạng này tồn tại (các kiểm thử so sánh đầu ra của chúng từng byte trên hàng trăm chương trình), nhưng chưa có gì ở đây được chứng minh trên máy bạn, và một post bạn đã sửa thì bạn phải tự chứng minh.

## Tạo một post

Trong Gia công, dưới **Post**:

- {{ui:Sửa post…}} trên một bộ điều khiển có sẵn sẽ mở **bản sao riêng của bạn**. Trên một post của chính bạn, nó mở post đó.
- {{ui:Post mới…}} bắt đầu từ một post trống nhỏ có sẵn mọi sự kiện.
- {{ui:Nhập tệp post…}} đọc một tệp văn bản `.cpost` (tệp bạn nhận được từ **Lưu thành tệp…** trong trình soạn thảo).

Trình soạn thảo hiển thị văn bản, một dòng cho biết nó có đọc được hay không (và dòng nào sai), và G-code mà post ghi khi bạn gõ. **Xem trước với** chọn một chương trình mẫu nhỏ chạy mọi sự kiện, hoặc chương trình của chính chi tiết này. {{ui:Lưu}} giữ post trong tệp của chi tiết (tối đa 20 post) và chọn nó làm bộ điều khiển. Post đi theo chi tiết; để dùng một post trong chi tiết khác, hãy lưu nó thành tệp rồi nhập ở đó.

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

Dòng bắt đầu bằng `//` và dòng trống bị bỏ qua. Ở đầu là các cài đặt; sau đó là một khối `on <event>` cho mỗi sự kiện, đóng bằng `end`. Sự kiện bạn bỏ đi thì không ghi gì.

| Cài đặt | Ý nghĩa |
|---|---|
| `post <id>` | Mã định danh của post: chữ, số, `-` và `_` |
| `name <text>` | Nội dung hiển thị trong danh sách Điều khiển |
| `extension <ext>` | Phần mở rộng của tệp: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … trên mọi dòng `emit`, hoặc không có |
| `decimal-point yes` / `no` | `10.` thay vì `10` (chú thích không bao giờ có dấu chấm) |
| `canned-cycles yes` / `no` | `no`: lỗ được ghi thành các chuyển động G0/G1 mà chúng đại diện |
| `modal <group> <words>` | Các từ của một nhóm (`modal motion G0 G1 G2 G3`) chỉ được ghi khi chúng thay đổi |

## Sự kiện

Chúng chạy theo thứ tự này cho một chương trình: `start`; rồi với mỗi thao tác `operation`, `tool-change` (khi dao thay đổi), `spindle` (khi tốc độ thay đổi), `approach` (chuyển động lên điểm đầu tiên, trước lần di chuyển nhanh đầu tiên), `coolant-on`, rồi các chuyển động của nó là `rapid`, `feed` và `arc`, và mỗi chu trình cố định là `cycle-start`, một `cycle-hole` cho mỗi lỗ và `cycle-end`; cuối cùng là `end`.

Mỗi sự kiện có thể dùng các biến của loại chuyển động riêng của nó, viết dạng `{name}`: chương trình (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), phôi (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), dao (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), thao tác (`op.name`, `op.type`), `rpm`, điểm của một chuyển động (`x`, `y`, `z`, `f`, và `moved`: đúng khi một trục thay đổi), cung (`arc.g` là 2 hoặc 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) và lỗ (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Danh sách **Sự kiện và biến** trong trình soạn thảo cho biết sự kiện nào thấy biến nào. Trạng thái bạn có thể đọc và đặt: `cool`, `offset`, và `at.x`, `at.y`, `at.z`, `at.f` (các giá trị được ghi lần cuối).

## Câu lệnh

| Câu lệnh | Tác dụng |
|---|---|
| `raw TEXT` | Một dòng đúng như đã gõ (không có số dòng) |
| `comment TEXT` | `(TEXT)` với ký tự không phải ASCII và dấu ngoặc đã bị loại bỏ |
| `emit WORD WORD …` | Một dòng gồm các từ; từ nào ra rỗng thì bị bỏ đi; không có từ thì không có dòng |
| `word WORD …` | Thêm từ vào dòng đang được tạo; một `emit` trống sẽ kết thúc dòng |
| `if EXPR` … `else` … `end` | Điều kiện: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, nếu không thì b) |
| `for tool in tools` … `end` | Một lần cho mỗi dao mà chương trình dùng |
| `set NAME EXPR` | Ghi nhớ một giá trị (`set offset tool.number`) |
| `reset NAME …` | Quên các từ modal (một nhóm, một chữ địa chỉ như `Z`, hoặc `at.z`) |
| `do rapid X Y Z` | Chạy sự kiện `rapid` cho một điểm |

Một từ là văn bản đã gõ với các ô `{variable|filter}`. Các bộ lọc là `upper`, `lower`, `pad:N` (đệm số 0), `cut:N` (N ký tự đầu), `safe` (ASCII an toàn cho chú thích) và `int`. Từ kết thúc bằng `~` là **modal**: nó chỉ được ghi khi khác với lần ghi trước (`G1~`, `X{x}~`). Từ kết thúc bằng `~!` được ghi mỗi lần và vẫn được ghi nhớ. Tên không phải là biến thì là văn bản thường (`G81`, `mist`). Số được làm tròn đến 0.001 mm và ghi không có số 0 thừa.

## Post không thể làm gì

Post chỉ quyết định cách các chuyển động được ghi, không hơn. Nó không thể thay đổi đường dao, sắp xếp lại thao tác, chia cung, thêm trục, biết hành trình hay động học của máy bạn, hoặc tính toán trên tọa độ (không có `+`). Dò điểm, chu trình tuổi thọ dao và chương trình con, đầu ra trục thứ 4 và thứ 5, và mã máy tiện chưa được xây dựng. Một tệp post kiểu `.cps` từ chương trình khác không thể được nạp: đây là định dạng khác, đơn giản hơn.
