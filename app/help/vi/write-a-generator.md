---
title: Viết bộ sinh
summary: Bộ sinh là một kịch bản CraftScript, Lua hoặc Python có các dòng chú thích khai báo đầu vào của nó. Cách các đầu vào trở thành biểu mẫu, kịch bản phải để lại gì (body, sheet, problems), một ví dụ nhỏ hoàn chỉnh, và cách mở kịch bản của bạn như một bộ sinh.
keywords: bộ sinh, viết, kịch bản, craftscript, phần đầu, đầu vào, @input, @generator, body, sheet, problems, to_body, mfg_check, bảng dữ liệu, ví dụ, lattice, trường
from: ed8a5ed8
---

Bộ sinh là một kịch bản thông thường ([CraftScript](topic:craftscript), Lua hoặc Python) có vài dòng chú thích ở đầu. PartCraft đọc các dòng chú thích và tạo biểu mẫu; kịch bản của bạn đọc các đầu vào như những biến đã được thiết lập sẵn.

## Phần đầu

Đặt các dòng sau trong dòng chú thích (`%` trong CraftScript, `--` trong Lua, `#` trong Python):

```
% @generator Bộ trao đổi nhiệt
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Lưu lượng khối"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Bề mặt"
% @input solid: = true
% @input note: = "text"
```

Một đầu vào có dạng `name: unit = default`, sau đó có thể thêm khoảng `[min .. max]` (số được giữ trong khoảng này), danh sách lựa chọn `{a, b, c}` và nhãn trong dấu ngoặc kép. Đơn vị chỉ là nhãn cho biểu mẫu: **giá trị đến ở đơn vị đó**, nên kịch bản nào muốn dùng SI phải tự chuyển đổi; `to_si(value, 'kg/s', 'kg/s')` cũng kiểm tra đơn vị có đúng như bạn nghĩ không. Tên gồm chữ cái, chữ số và dấu gạch dưới; `body`, `sheet` và `problems` đã được dùng.

## Kịch bản để lại gì

| Biến | Nội dung |
|---|---|
| `body` | **Bắt buộc.** Một lưới bề mặt, thường lấy từ `[body, info] = to_body(field, h)`. Lưới được sửa và kiểm tra khi lần chạy kết thúc. |
| `sheet` | Tùy chọn. Một struct: mỗi trường là số hoặc văn bản, hoặc một struct có `value`, `unit`, `ref` và `note`. Nó trở thành bảng dữ liệu. |
| `problems` | Tùy chọn. Ô `problems` từ `mfg_check(field, 'sls', struct(), h)`, hoặc các mục do bạn tự viết. Chúng được chuyển đến phần kiểm tra và danh sách Vấn đề. |

## Một ví dụ nhỏ hoàn chỉnh

```
% Một khối lập phương rỗng có thành.
% @generator Khối lập phương rỗng
% @input side: mm = 12 [4 .. 40] "Cạnh"
% @input wall: mm = 1.5 [0.5 .. 5] "Thành"
% @input h: mm = 0.5 [0.25 .. 2] "Kích thước voxel"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'của lưới');
```

Ví dụ tạo một hộp kín, và kiểm tra báo phần rỗng kín bên trong là lỗi đối với quy trình bột. Đặt kích thước voxel `h` tối đa bằng một phần ba thành mỏng nhất bạn muốn: dưới khoảng ba voxel thì thành không đáng tin cậy.

## Trường

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (một khối tròn xoay từ một profile), `tpms` (bề mặt gyroid, Schwarz P và diamond, với kích thước ô và độ dày thành có thể thay đổi trên toàn chi tiết), `lattice` và `lattice_beams`, `along` (một kênh tròn theo một đường dẫn), các phép boolean `field_union`, `field_intersect`, `field_subtract`, phép trộn mượt `field_blend`, và `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` cho khoảng cách có dấu tại các điểm (âm là bên trong), `field_voxel` cho các voxel dành cho bộ giải. [Trường](topic:fields) giải thích chúng là gì.

Giới hạn cần biết: thành tấm dày hơn khoảng một phần tư ô sẽ làm kín các kênh; một đặc trưng mỏng hơn khoảng ba voxel có thể bị thắt lại; `along` nối các hình nón tròn, nên bán kính thay đổi nhanh sẽ tạo chỗ phình (hãy dùng `field_revolve` cho một profile).

## Mở kịch bản của bạn như một bộ sinh

Trong không gian làm việc {{ui:Kỹ sư}}, nhấp {{ui:Mở}} và chọn tệp. Kịch bản không có dòng `@generator` hoặc `@input` sẽ bị từ chối: khi đó không có gì để thiết lập. Bộ sinh được lưu trong trình duyệt này (tối đa 20) và {{ui:Xóa}} sẽ xóa nó. Thân được tạo từ bộ sinh sẽ mang theo một bản sao của kịch bản, nên chi tiết không phụ thuộc vào tệp gốc.

Một tệp cũng có thể chứa nhiều bộ sinh: một gói JSON `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
