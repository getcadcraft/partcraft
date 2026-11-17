---
title: Ngôn ngữ CraftScript
summary: CraftScript trong một trang: ma trận, dải và chỉ số, toán tử, luồng điều khiển, hàm, struct và cell, chú thích, echo, lỗi và ngân sách bước, và điểm khác với MATLAB.
keywords: CraftScript, ngôn ngữ, cú pháp, ma trận, mảng, vector, tensor, chỉ số, end, dấu hai chấm, dải, toán tử, theo từng phần tử, chuyển vị, if, for, while, switch, try, catch, hàm, hàm ẩn danh, struct, cell, chú thích, echo, dấu chấm phẩy, MATLAB, Octave, port
from: d072b7d5
---

CraftScript là ngôn ngữ ma trận được viết để đọc giống MATLAB, nên hầu hết các mã số kinh điển (ví dụ mã tối ưu hóa cấu trúc 88 dòng) chạy chỉ với thay đổi nhỏ. Nó chạy trong [không gian làm việc Kịch bản](topic:craftscript) và từ dòng lệnh.

## Giá trị

| Kiểu | Ví dụ | Ghi chú |
|---|---|---|
| Số, mảng | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Mọi số đều là một mảng (mảng 1×1). Mảng được lưu theo cột, tối đa 8 chiều |
| Logic | `A > 2`, `true` | Mảng gồm true/false; dùng được làm chỉ số |
| Văn bản | `'beam'`, `"beam"` | |
| Ma trận thưa | `sparse(i, j, v, n, n)` | Dùng cho ma trận độ cứng |
| Lưới, trường, mô hình | `hexGrid(…)`, `part()`, `load('part.stl')` | Thứ `show` vẽ |
| Struct | `s.E = 210e3` | Các trường có tên |
| Cell | `c = {1, 'two', [3 4]}` | Một danh sách gồm giá trị bất kỳ |
| Con trỏ hàm | `f = @(x) x.^2` | |

## Mảng và chỉ số

- Dải: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Chỉ số bắt đầu từ 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (cả một cột), `A(:)` (mọi thứ thành một cột), `v(v > 0)` (chỉ số logic).
- Gán vượt quá cuối sẽ mở rộng mảng, như trong MATLAB: `v(10) = 1`.

## Toán tử

- `+ - * / \ ^` là phép toán ma trận (`A \ b` giải hệ); `.* ./ .^` làm việc theo từng phần tử. `'` chuyển vị.
- So sánh `== ~= < <= > >=`; logic `& | ~` (theo từng phần tử) và `&& ||` (ngắt mạch).

## Luồng điều khiển và hàm

```
for k = 1:10
  if mod(k, 2) == 0
    continue
  elseif k > 7
    break
  end
end
while err > 1e-6, … end
switch kind
  case 'steel'
    E = 210e3;
  otherwise
    E = 70e3;
end
try
  x = A \ b;
catch e
  disp(e.message)
end
```

Hàm đặt trong kịch bản sau các lệnh, hoặc trong thẻ kịch bản riêng đặt theo tên hàm:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Tên được tra theo thứ tự: biến, kịch bản trong chi tiết này có tên đó, hàm thư viện, hàm tích hợp.

## Echo, chú thích, đầu ra

- Câu lệnh không có `;` sẽ in giá trị của nó; `;` giữ cho im lặng.
- `%` bắt đầu chú thích; `%{` và `%}` đứng riêng trên dòng sẽ chú thích các dòng nằm giữa chúng.
- `disp(x)`, `fprintf('%g\n', x)` và `display(x)` in ra bảng điều khiển.

## Lỗi và giới hạn

- Lỗi nêu rõ vấn đề bằng lời thường và chỉ ra dòng (cùng chuỗi lời gọi hàm).
- Mỗi lần chạy có một ngân sách bước (tùy chọn Chạy trong bảng); vòng lặp vô hạn sẽ dừng với một thông báo, hoặc nhấn Dừng.
- Mảng chứa tối đa 134 triệu giá trị mỗi mảng.

## Không giống MATLAB

- Lệnh vẽ đặt tùy chọn trong lời gọi: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` và tương tự được chấp nhận nhưng không làm gì.
- `input` và `keyboard` không được hỗ trợ: kịch bản không thể dừng lại để hỏi.
- Không có bộ công cụ (toolbox); [thư viện phân tích](topic:craftscript-library) và các hàm tích hợp là tất cả những gì có.
