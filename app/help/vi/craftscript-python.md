---
title: Kịch bản bằng Python
summary: Viết kịch bản không gian làm việc Kịch bản bằng Python 3: đối tượng cs các hàm tích hợp, mảng như giá trị kiểu numpy với chỉ số từ 0, không gian làm việc dùng chung, in ấn, những thứ chưa có, và cách Python được cách ly như CraftScript và Lua.
keywords: Python, Python 3, CPython, WebAssembly, cách ly, an toàn, kịch bản, ngôn ngữ, cs, ws, không gian làm việc, numpy, mảng, ma trận, chỉ số, in, hiển thị, tin cậy
from: 66eab56d
---

Python là ngôn ngữ thứ ba của [không gian làm việc Kịch bản](topic:craftscript). Chọn **Python** trong hộp ngôn ngữ phía trên trình soạn thảo (tệp `.py` tự mở bằng Python). Python, Lua và CraftScript dùng chung các biến và cùng các hàm tích hợp, nên một kịch bản Python có thể dùng những gì kịch bản CraftScript đã tạo, và ngược lại.

Lần chạy Python đầu tiên trong một lần truy cập sẽ tải chính Python (CPython 3.14, khoảng 7 MB) từ trang web này, mất vài giây. Python chưa thuộc {{ui:Lưu để dùng ngoại tuyến}}: hãy chạy một kịch bản Python khi đang trực tuyến trước.

## Python được cách ly

Kịch bản Python được cách ly như kịch bản CraftScript và Lua: chúng chỉ truy cập được chi tiết, các biến và hàm tích hợp, không gì khác. Mỗi lần chạy là một Python mới trong hộp cát riêng với một cây tệp nhỏ trong bộ nhớ (thư viện chuẩn và một thư mục `/tmp` bị xóa sau khi chạy xong). Nó không thể truy cập mạng, tệp của bạn hay phần còn lại của trang, dù trên trình duyệt hay dòng lệnh. Một kịch bản từ người khác vẫn có thể tốn nhiều thời gian hoặc bộ nhớ: {{ui:Dừng}} sẽ kết thúc nó.

## Những điều cơ bản

```
A = cs.magic(3)              # mọi hàm tích hợp là cs.<name>
B = A @ A.T                  # @ là tích ma trận, .T là chuyển vị
C = A * 2 + 1                # + - * / ** làm việc theo từng phần tử, như numpy
print(A[0, 1], A[-1, -1])    # bắt đầu từ 0; số âm đếm từ cuối
row = A[1]                   # một chỉ số trên ma trận: một hàng
big = A[A > 4]               # mặt nạ logic chọn các phần tử
A[0, 0] = -5                 # gán vào một mảng
V, D = cs.call('eig', 2, A)  # nhiều kết quả: cs.call(name, số lượng, …)
```

- Mảng 1 × 1 đến dưới dạng số thường; các mảng khác, ma trận thưa, lưới, trường và mô hình là **Giá trị**.
- Một Giá trị có `shape` (một tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (số hàng), và `float()`, `int()` và `bool()` cho một phần tử.
- So sánh (`<`, `==`, …) làm việc theo từng phần tử, như numpy: chúng cho ra một Giá trị logic.
- Danh sách số truyền cho hàm tích hợp trở thành mảng: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` tạo một ma trận.
- Một dict trở thành struct và một danh sách hỗn hợp trở thành cell, và ngược lại.

Mọi biến toàn cục mà kịch bản của bạn tạo ra (một số, một Giá trị, một dict, một list…) đi vào tab **Biến** khi lần chạy kết thúc, kể cả sau lỗi. Tên bắt đầu bằng `_`, hàm, lớp và mô-đun vẫn nằm trong Python. `ws.name` đọc hoặc đặt trực tiếp một biến, và `ws_names()` liệt kê chúng.

`print(…)` ghi ra bảng điều khiển. `display(…)` (hoặc `cs.display`) hiển thị một lưới, một trường hoặc một biểu đồ, như trong CraftScript.

## Gọi thư viện phân tích

Các hàm thư viện được gọi như hàm tích hợp: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Viết tên trong kịch bản đúng như nó là: PartCraft tìm các hàm thư viện mà kịch bản dùng trước khi chạy.

## Chưa có

- numpy, scipy và các gói khác: chỉ có thư viện chuẩn của riêng Python (`math`, `json`, `itertools`, `decimal`, `statistics`…), không có các phần giao diện cửa sổ, terminal và cơ sở dữ liệu (`tkinter`, `curses`, `sqlite3`).
- Socket và mọi thứ khác sẽ vươn ra ngoài: Python không có mạng ở đây.
- `time.sleep` trả về ngay.
- Thu gọn mã trong trình soạn thảo, và gọi một hàm Python từ kịch bản CraftScript.
- Một lần chạy kiểm tra ngân sách lệnh và Dừng mỗi 1000 dòng; một phép tính dài bên trong một hàm tích hợp sẽ hoàn tất trước.
