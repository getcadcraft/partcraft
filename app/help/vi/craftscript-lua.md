---
title: Kịch bản bằng Lua
summary: Viết kịch bản không gian làm việc Kịch bản bằng Lua 5.4: bảng cs các hàm tích hợp, mảng là giá trị có chỉ số và phép tính số học, không gian làm việc ws dùng chung, in và hiển thị kết quả, và những gì bị tắt.
keywords: Lua, Lua 5.4, kịch bản, ngôn ngữ, bảng cs, ws, không gian làm việc, userdata, tensor, mảng, ma trận, in, hiển thị, hộp cát
from: 82c668b3
---

Lua là ngôn ngữ thứ hai của [không gian làm việc Kịch bản](topic:craftscript). Chọn **Lua** trong hộp ngôn ngữ phía trên trình soạn thảo (tệp `.lua` tự mở bằng Lua). Lua và CraftScript dùng chung các biến và cùng các hàm tích hợp, nên một kịch bản Lua có thể dùng những gì kịch bản CraftScript đã tạo, và ngược lại.

## Những điều cơ bản

```
-- mọi hàm tích hợp đều nằm trong bảng cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- chỉ số bắt đầu từ 1, như CraftScript
print(K(1, 1), #K)             -- một phần tử; số phần tử

-- không gian làm việc: cùng các biến mà mọi kịch bản thấy
ws.total = K(1, 1) * 2
print(ws.total)

-- nhiều kết quả từ một hàm
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` gọi bất kỳ hàm tích hợp nào và trả về kết quả đầu tiên; `cs.call(name, n, …)` trả về `n` kết quả.
- `cs.tensor({1, 2, 3})` tạo một hàng, `cs.tensor({{1, 2}, {3, 4}})` tạo một ma trận.
- Mảng, ma trận thưa, lưới và trường là giá trị có phương thức: `t(i, j)` hoặc `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (chuyển vị), `t:totable()`. `+ - * / ^` có nghĩa như trong CraftScript (`*` là tích ma trận); `t:times(u)` nhân theo từng phần tử.
- Một số có mảng 1×1 đến dưới dạng số Lua thường.
- `ws.name` đọc và ghi không gian làm việc dùng chung. Biến toàn cục mà kịch bản của bạn để lại cũng đi vào đó khi kết thúc.
- `print(…)` ghi ra bảng điều khiển; `cs.show(f)`, `cs.plot(y)` và các hàm hiển thị khác hoạt động như trong CraftScript.

## Gọi thư viện phân tích

Các hàm của thư viện phân tích (tab Thư viện) và các hàm CraftScript mà kịch bản của chi tiết định nghĩa cũng được gọi qua `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- hai đầu ra
```

Chúng được tìm thấy trước khi kịch bản bắt đầu, vì vậy hãy viết tên trong kịch bản: `cs.static_tet(` hoặc `cs.call('static_tet', …)`. Một tên được ghép lại trong lúc kịch bản đang chạy chỉ đến được các hàm tích hợp. Một struct tạo bằng `cs.struct({ … })` là struct CraftScript, và một danh sách Lua gồm chúng (`{ cs.struct(…), … }`) là cell, đúng với những gì các cài đặt của thư viện mong đợi. Nếu có lỗi bên trong một hàm thư viện, thông báo nêu tên hàm và dòng của nó, đồng thời chỉ tới dòng của bạn đã gọi nó.

## Đã tắt

Kịch bản không thể truy cập tệp, mạng hay trang: `io`, `os` (trừ đồng hồ), `require`, `dofile`, `loadfile` và `debug` đã bị gỡ bỏ. Dùng Mở của không gian làm việc Kịch bản và các biến để đưa dữ liệu vào. Ngân sách bước và Dừng hoạt động như với CraftScript.
