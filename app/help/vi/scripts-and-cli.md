---
title: Kịch bản và dòng lệnh
summary: Định dạng kịch bản PartCraft (.pcscript) ghi toàn bộ một chi tiết thành văn bản dễ đọc, và công cụ dòng lệnh partcraft dựng, thay đổi, quay lui và kiểm tra chi tiết mà không cần màn hình.
keywords: kịch bản, pcscript, văn bản, dòng lệnh, cli, terminal, hàng loạt, tự động hóa, kiểm tra, lint, dựng, xuất, kiểm soát phiên bản, diff, kịch bản tham số
from: c56df222
---

Mô hình hóa cẩn thận phụ thuộc nhiều vào kỷ luật hơn là vào các nút bấm. Một chi tiết được viết dưới dạng văn bản có thể được đọc, xem xét, so sánh từng dòng và dựng lại bằng kịch bản. PartCraft làm được cả hai chiều: mọi chi tiết đều có thể được viết thành kịch bản, và một kịch bản dựng nên chi tiết.

## Trong ứng dụng

Trên thẻ {{ui:Parameters}}, dưới **Script**:

- {{ui:Save as script}} tải xuống chi tiết đang mở dưới dạng `<name>.pcscript`.
- {{ui:Open script}} dựng một chi tiết từ tệp `.pcscript`. Lỗi sẽ được báo kèm số dòng và không có gì bị thay thế.

## Định dạng kịch bản

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Plate width
param thick = 8
param bolt = 8.5
param margin = bolt * 1.5

sketch Plate
  on top
  point a 0, 0
  point b 120, 0
  point c 120, 60
  point d 0, 60
  line bottom a b
  line right b c
  line top c d
  line left d a
  coincident a O
  horizontal bottom
  horizontal top
  vertical left
  vertical right
  distance bottom = width
  distance left 60

extrude Base
  sketch Plate
  depth = thick

sketch HoleCentres
  on face Base end
  point h1 12, 12
  hdistance O h1 = margin
  vdistance O h1 = margin

hole Bolts
  sketch HoleCentres
  d = bolt
  through
```

Các quy tắc:

- Một dòng sát lề trái bắt đầu một câu lệnh: `pcscript`, `part`, `param`, một loại đặc trưng (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` và các loại mới hơn) theo sau là tên của nó, hoặc `rollback <feature>`.
- Các dòng thụt lề là cài đặt của câu lệnh ngay phía trên. Một cài đặt đứng một mình (`through`, `reverse`, `suppressed`) có nghĩa là có.
- Một cài đặt số là một số, hoặc `=` kèm một biểu thức, tạo thành một phương trình: `depth = thick`.
- Trong phác thảo: `on` đặt tên mặt phẳng (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); hình học là `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (ngược chiều kim đồng hồ) hoặc `spline <name> fit|control <points>`; ràng buộc là loại của nó và các tên mà nó nối (`O` là gốc tọa độ); một kích thước kết thúc bằng giá trị hoặc `= biểu thức`.
- Các cài đặt tùy chọn của một dòng hình học hoặc ràng buộc được đặt trong dấu ngoặc vuông ở cuối, cách nhau bằng `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` bắt đầu một chú thích (ở đầu dòng hoặc sau một khoảng trắng). Tên có khoảng trắng đặt trong "dấu ngoặc kép".
- Mã đặc trưng đếm từ f1 theo thứ tự được viết. Các tham chiếu cạnh và mặt dùng các mã này, ví dụ `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Các cài đặt mà định dạng không có từ tương ứng được viết là `json` kèm một giá trị; chúng được đọc lại đúng như vậy.

Khi lưu từ ứng dụng, kịch bản bao gồm mọi cài đặt, nên khi mở nó sẽ ra đúng chi tiết đó. Một khối đặc STEP đã nhập được ghi bên trong kịch bản khi lưu từ ứng dụng, và thành một tệp `.step` riêng được đặt tên bởi `step-file` khi dùng dòng lệnh.

## Công cụ dòng lệnh

Công cụ chạy trên máy tính có Node.js 24, từ một bản sao mã nguồn CadCraft: `node tools/partcraft-cli/partcraft.mjs <command>`. Đây là công cụ dành cho nhà phát triển và dùng cùng các mô-đun như ứng dụng. Chi tiết là các tệp `.partcraft.json` hoặc kịch bản `.pcscript`.

| Lệnh | Chức năng |
|---|---|
| `info <part>` | Đặc trưng, tham số, thanh quay lui, thể tích và kích thước khối đặc đã dựng |
| `params <part>` | Mọi tham số và phương trình kèm giá trị của chúng |
| `set <part> width=150 Base.depth==thick` | Xuôi chiều: thay đổi tham số, liên kết số (`==` hoặc một biểu thức), đặt số thường |
| `drive <part> Base.depth=12` | Ngược chiều: giải tham số đứng sau một số bị điều khiển (`--prefer width` chọn một tham số) |
| `build <part> --out x.step` | Ghi `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` hoặc macro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Một tệp cho mỗi dòng của bảng thiết kế |
| `variants <part> --out-dir d` hoặc `--zip f.zip` | Mọi cấu hình dưới dạng STEP, IFC, DWG và ảnh xem trước, một bảng biến thể và một mục thư viện (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); xem [Tạo gói biến thể](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Kịch bản thành chi tiết |
| `to-script <part> -o part.pcscript` | Chi tiết thành kịch bản |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Di chuyển thanh quay lui trong tệp |
| `check <part> [--strict]` | Kiểm tra kỷ luật (bên dưới) |

`build` cũng nhận `--set name=value` (chỉ cho lần dựng này) và `--upto <feature>`. Mọi lệnh đều nhận `--json`. Mã thoát: 0 là ổn, 1 là phát hiện sự cố, 2 là gõ sai lệnh. Một kịch bản không bao giờ được ghi đè tại chỗ: dùng `-o` để lưu một bản đã thay đổi.

## Kiểm tra

`check` báo cáo những gì khiến một chi tiết khó thay đổi về sau:

| Phát hiện | Được tính là |
|---|---|
| Phác thảo bị ràng buộc thừa (các ràng buộc xung đột hoặc lặp lại) | lỗi |
| Đặc trưng không dựng được | lỗi |
| Tham số hoặc phương trình có lỗi, hoặc các tham số phụ thuộc vòng vào nhau | lỗi |
| Phác thảo chưa đủ ràng buộc, kèm số bậc tự do | cảnh báo |
| Số nhập trực tiếp vào đặc trưng và kích thước mà không có tham số nào điều khiển | cảnh báo |
| Tham số không được dùng | cảnh báo |
| Đặc trưng bị tắt; thanh quay lui không nằm ở cuối | cảnh báo |

`--strict` biến mọi cảnh báo thành lỗi, để một script dựng có thể từ chối một chi tiết chưa được điều khiển đầy đủ.

:::note
Đầu ra macro `.swb` dành cho phần mềm dựng chi tiết mà hầu hết các xưởng sử dụng: khi chạy trong phần mềm đó, nó dựng chi tiết ở đó. Macro chưa được chạy trong phần mềm đó tại đây (nó không có sẵn trên máy chủ của chúng tôi), nên hãy coi nó là chưa được kiểm thử.
:::
