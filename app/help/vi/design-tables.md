---
title: Cấu hình và bảng thiết kế
summary: Giữ nhiều kích thước và phiên bản của một chi tiết dưới dạng các cấu hình có tên được lưu trong tệp chi tiết, với các đặc trưng bật hoặc tắt trong mỗi cấu hình; chuyển đổi giữa chúng chỉ với một cú nhấp, đưa vào hoặc lấy ra dưới dạng bảng thiết kế CSV, hoặc xây dựng tất cả từ dòng lệnh.
keywords: bảng thiết kế, cấu hình, kích thước, họ chi tiết, csv, bảng tính, biến thể, điều khiển bằng bảng, họ chi tiết (part family), tắt, đã tắt, tắt một đặc trưng, tùy chọn, có hoặc không, trình cấu hình
from: 17249afb
---

Một **cấu hình** là một kích thước của chi tiết: một bộ giá trị có tên cho các tham số của nó. Chi tiết giữ các cấu hình trong tệp riêng, nên chúng đi cùng nó. Một **bảng thiết kế** là cùng thứ dưới dạng tệp CSV, một hàng cho mỗi cấu hình.

Cấu hình đặt **tham số**, nên hãy thêm các tham số đó trước (xem [Điều khiển chi tiết bằng tham số](topic:parameters)). Một cấu hình lưu các tham số là số thường; tham số được tính từ các tham số khác (như `area = w * d`) sẽ tự theo.

## Lưu một cấu hình

1. Trên tab {{ui:Tham số}}, đặt các tham số cho một kích thước của chi tiết.
2. Dưới **Cấu hình**, gõ một tên (ví dụ `Lớn`) và nhấn {{ui:Lưu giá trị hiện tại}} hoặc {{key:Enter}}.

Cấu hình mới được đánh dấu **đang dùng**. Sau đó nếu đổi một tham số, nó sẽ hiện **đang dùng, đã thay đổi từ**, để bạn biết chi tiết không còn khớp với nó.

## Chuyển, cập nhật, đổi tên, xóa

- {{ui:Áp dụng}} đặt các tham số về giá trị của cấu hình đó và dựng lại chi tiết.
- {{ui:Cập nhật}} lưu các giá trị hiện tại vào cấu hình đó.
- Để đổi tên, gõ tên mới vào ô của nó và nhấn {{key:Enter}}.
- {{ui:Xóa}} gỡ cấu hình. Các tham số giữ nguyên giá trị của chúng.

Mỗi thao tác này là một bước: {{key:Mod+Z}} quay lại. Nếu bạn đổi tên một tham số, mọi cấu hình sẽ theo tên mới; nếu bạn xóa một cấu hình, nó sẽ bị loại khỏi danh sách.

## Bật và tắt đặc trưng trong một cấu hình

Một cấu hình còn lưu các đặc trưng nào đang tắt, nên một chi tiết có thể có phiên bản **có** và **không có** một thứ gì đó: lỗ lắp, vát mép, phần lồi (boss).

1. Tắt đặc trưng: nhấp vào nó trong lịch sử, rồi {{ui:Tắt}} trong {{ui:Thuộc tính}}.
2. Lưu cấu hình như bình thường, ví dụ `Không lỗ`. Hàng của nó liệt kê những gì nó tắt.
3. Bật lại đặc trưng ({{ui:Bật lại}}) và lưu một cấu hình khác, ví dụ `Có lỗ`.

Khi bất kỳ cấu hình nào tắt một đặc trưng, áp dụng một cấu hình sẽ tắt các đặc trưng của nó và **bật mọi đặc trưng khác**, cùng với các giá trị tham số của nó, trong một bước. Một cấu hình được lưu trước khi có đặc trưng nào bị tắt sẽ được tính là "everything on" (mọi thứ bật). {{ui:Cập nhật}} lưu các đặc trưng như hiện tại, cùng với các giá trị.

Một chi tiết có cấu hình tắt đặc trưng được lưu dưới dạng phiên bản tệp mới hơn: một PartCraft cũ sẽ báo tệp thuộc phiên bản mới hơn thay vì mở nó mà không có các đặc trưng đó.

:::note
Bảng thiết kế CSV chỉ mang giá trị tham số. Nhập một bảng đè lên một cấu hình sẽ đổi các giá trị của nó và giữ các đặc trưng nó tắt; tùy chọn `--table` của dòng lệnh chỉ xây dựng các giá trị.
:::

Tệp chi tiết được lưu cùng các cấu hình và cùng cấu hình đang dùng. Chi tiết mở với các giá trị đã được lưu cùng nó.

## Đưa một bảng thiết kế vào hoặc ra

Bảng thiết kế là một tệp CSV với một cột cho mỗi tham số và một hàng cho mỗi cấu hình:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Cột đầu tiên có thể đặt tên là `name`, `config` hoặc `configuration`; mọi cột khác phải là tên một tham số của chi tiết. Các ô là số, có thể kèm đơn vị nếu bạn muốn (`8in`). Ô trống sẽ bỏ tham số đó khỏi hàng.

- {{ui:Nhập CSV}} thêm mỗi hàng thành một cấu hình. Hàng có tên của một cấu hình hiện có sẽ thay thế nó. Nhập là một bước.
- {{ui:Xuất CSV}} ghi các cấu hình ra. Khi chưa có cấu hình nào, nó ghi một hàng các giá trị hiện tại, làm điểm khởi đầu cho bảng tính.

Tên cấu hình mà bảng tính sẽ đọc như công thức (bắt đầu bằng `=`, `+`, `-` hoặc `@`) được ghi với một dấu `'` ở đầu.

## Mọi kích thước cùng lúc

{{ui:Gói biến thể…}} dưới **Cấu hình** xây dựng mọi cấu hình, hoặc một vài cấu hình được chọn, dưới dạng STEP, IFC, DWG và một bản xem trước trong một tệp zip, với bảng các tham số của chúng: xem [Tạo gói biến thể từ các cấu hình của bạn](topic:variant-pack).

Công cụ dòng lệnh xây dựng một tệp cho mỗi hàng của bảng thiết kế CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Xuất các cấu hình dưới dạng CSV trước, rồi truyền tệp đó bằng `--table`. Xem [Kịch bản và dòng lệnh](topic:scripts-and-cli). Một chi tiết được lưu dưới dạng kịch bản sẽ giữ các cấu hình của nó trong một dòng `configs json …`.
