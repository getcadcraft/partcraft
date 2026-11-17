---
title: Viết và chạy kịch bản (không gian làm việc Kịch bản)
summary: Không gian làm việc Kịch bản từng bước: viết kịch bản CraftScript hoặc Lua, chạy bằng F5, đọc bảng điều khiển, giữ kết quả trong các biến cho kịch bản tiếp theo, hiển thị lưới, trường và biểu đồ, dừng một lần chạy, và lưu kịch bản cùng chi tiết.
keywords: kịch bản, lập trình kịch bản, kịch bản khi đang mô hình, tách ra, màn hình thứ hai, màn hình phụ, param, params, tham số trong kịch bản, CraftScript, Lua, mã, chương trình, trình soạn thảo, bảng điều khiển, REPL, dòng lệnh, chạy, F5, chạy vùng chọn, dừng, biến, không gian làm việc, biểu đồ, trường, lưới, chú giải, khung phụ, phân tích, tự động hóa, ma trận, số học
from: d0003e89
---

**Bản xem trước.** Kịch bản mới có trong PartCraft 0.3 và đang ở dạng xem trước: ngôn ngữ, thư viện và cách lưu kịch bản có thể còn thay đổi, và kịch bản viết bây giờ có thể cần chỉnh sửa nhỏ sau này. Cho chúng tôi biết khi có gì lỗi.

Không gian làm việc Kịch bản chạy các phép tính của riêng bạn cạnh chi tiết: các phép cộng nhỏ, toàn bộ phân tích, hoặc các kịch bản trong [thư viện phân tích](topic:craftscript-library). Kịch bản được viết bằng **CraftScript** (ngôn ngữ ma trận giống MATLAB, xem [Ngôn ngữ CraftScript](topic:craftscript-language)) hoặc bằng **Lua** (xem [Kịch bản bằng Lua](topic:craftscript-lua)) hoặc **Python** (xem [Kịch bản bằng Python](topic:craftscript-python)).

Chọn **Kịch bản** trong hộp **Không gian làm việc** ở bên trái thanh công cụ. Chi tiết không bị thay đổi. Bảng bên phải trở thành bảng kịch bản (rộng hơn bình thường; kéo cạnh của nó để đổi kích thước, hoặc chuyển nó sang màn hình thứ hai bằng menu {{ui:⋯}} của nó, xem [Sắp xếp các bảng](common:arrange-panels)).

## Viết kịch bản trong lúc mô hình

Bạn không cần rời không gian làm việc Thiết kế để viết kịch bản. Trong Thiết kế, tab {{ui:Kịch bản}} của bảng bên phải chứa cùng trình soạn thảo, bảng điều khiển, biến và thư viện, với cùng các kịch bản. Cây đặc trưng và khung nhìn vẫn hoạt động: nhấp vào một đặc trưng để chọn nó, nhấp đúp vào một phác thảo để chỉnh sửa, xoay khung nhìn, rồi quay lại tab {{ui:Kịch bản}} và nhấn {{key:F5}}.

Những gì kịch bản hiển thị (lưới, trường, biểu đồ, bảng) không được vẽ đè lên mô hình trong Thiết kế: bảng điều khiển thông báo điều đó, và không gian làm việc Kịch bản có đầy đủ khi bạn chuyển sang.

{{ui:Tách ra}}, cạnh {{ui:Chạy}}, chuyển toàn bộ bảng sang một cửa sổ riêng, ví dụ trên màn hình thứ hai, để trình soạn thảo và khung nhìn đầy đủ nằm cạnh nhau. {{ui:Đưa lại}} neo nó trở lại. Xem [Sắp xếp các bảng](common:arrange-panels).

## Chạy kịch bản đầu tiên

1. Gõ vào trình soạn thảo, ví dụ:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Nhấn {{key:F5}} (hoặc {{ui:Chạy}}). Bảng điều khiển dưới trình soạn thảo hiển thị những gì kịch bản đã in, và "Done in … s" (Xong trong … s). Biểu đồ xuất hiện trong **các khung phụ** dọc đáy khung nhìn 3D.
3. Dòng không có dấu chấm phẩy sẽ in giá trị của nó, như trong MATLAB: `a = 3` in ra `a = 3`; `a = 3;` không in gì.
4. Để chạy chỉ một phần kịch bản, chọn các dòng và nhấn {{key:Mod+Enter}} ({{ui:Vùng chọn}}). Nếu không chọn gì, nó chạy dòng có con trỏ.
5. Dòng ở cuối bảng điều khiển (sau `>>`) chạy một câu lệnh khi bạn nhấn {{key:Enter}}. {{key:Up}} và {{key:Down}} gọi lại các dòng trước đó.

## Tìm, thu gọn và hoàn thành

- **Tìm và thay thế.** Nhấn {{key:Mod+F}} (hoặc {{key:Mod+H}} để thay thế luôn). Một thanh mở phía trên mã: gõ nội dung cần tìm; các kết quả khớp được làm sáng và số đếm cho biết bạn đang ở đâu. Các nút cạnh ô tìm chỉ để khớp chữ hoa/thường (**Aa**), chỉ tìm toàn bộ từ (**W**) và dùng biểu thức chính quy (**.\***; trong phần thay thế, `$1` đặt lại nội dung nhóm thứ nhất đã khớp). {{ui:Thay thế}} thay kết quả hiện tại, {{ui:Tất cả}} thay mọi kết quả thành một bước của {{key:Mod+Z}}.
- **Thu gọn.** Nhấp vào ▾ cạnh số dòng, hoặc nhấn {{key:Mod+Shift+[}} khi con trỏ ở dòng `function`, `if`, `for`, `while`, `switch` hoặc `try` (Lua: `function`, `do`, `if`, `repeat`), để gấp các dòng bên trong; dòng đó cho biết có bao nhiêu dòng bị gấp. ▸ hoặc {{key:Mod+Shift+]}} mở lại. Thu gọn chỉ ẩn dòng: Chạy, Lưu, sao chép và số dòng vẫn đếm mọi dòng, và gõ trên dòng đã gấp sẽ mở nó trước.
- **Hoàn thành.** Gõ hai chữ cái của một tên, hoặc nhấn {{key:Mod+Space}}: một danh sách hiển thị các biến bạn có, các hàm của ngôn ngữ (kèm đối số), từ khóa và các tên đã có trong kịch bản. Chọn bằng các mũi tên và nhấn {{key:Enter}} hoặc {{key:Tab}}.

## Khi có lỗi

- Lỗi nêu vấn đề và dòng của nó: dòng được đánh dấu đỏ trong trình soạn thảo, và **Dòng n** trong bảng điều khiển đưa bạn đến đó.
- Vòng lặp không bao giờ kết thúc: nhấn {{ui:Dừng}} (thanh công cụ hoặc bảng). Kịch bản dừng ngay; các biến giữ giá trị chúng có trước lần chạy đó.
- Mỗi lần chạy cũng có một ngân sách bước (mặc định 2 tỷ bước; đổi trong **Tùy chọn chạy** của bảng). Lần chạy vượt quá ngân sách sẽ dừng với một thông báo.

## Biến đi từ kịch bản này sang kịch bản khác

Mọi biến cấp cao nhất mà kịch bản tạo ra đi vào tab **Biến** (tên, kiểu, kích thước, giá trị nhỏ nhất và lớn nhất) và ở đó cho kịch bản tiếp theo, bằng cả hai ngôn ngữ. Đó là cách một kịch bản tạo lưới, kịch bản kế tiếp giải, và kịch bản thứ ba vẽ biểu đồ.

- Nhấp vào một biến để hiển thị nó: lưới, trường và mô hình trong khung nhìn 3D, mảng dưới dạng bảng (kèm biểu đồ đường cho vectơ hoặc bản đồ màu cho ma trận) trong các khung phụ.
- {{ui:Lưu dạng JSON}}, {{ui:Lưu dạng CSV}} (bảng số) và {{ui:Lưu dạng HDF5}} tải nó xuống; {{ui:Xóa}} gỡ nó; {{ui:Xóa tất cả}} làm trống không gian làm việc.
- Đánh dấu **Lưu các biến cùng với chi tiết** để giữ chúng trong tệp chi tiết (tối đa 32 MB; các tệp lớn hơn chỉ được giữ trong lần truy cập này). Khi bạn mở một chi tiết như vậy, bảng sẽ đề nghị tải chúng.

## Lưới, trường và biểu đồ

- `show(m)` vẽ một lưới; `show(f)` tô màu một trường trên lưới của nó kèm chú giải. Danh sách **Đang hiển thị** ở góc trên bên trái khung nhìn ẩn ({{ui:eye}}) hoặc gỡ từng mục, và ẩn hoặc hiện chính chi tiết. Dưới chú giải, nhập một phạm vi (**Từ**, **đến**) hoặc nhấn {{ui:Tự động}}; một vectơ hoặc trường ứng suất cũng cung cấp thành phần nào được hiển thị.
- `show(f, 'deform', u, 'scale', 50)` vẽ lưới được dời bởi trường chuyển vị `u`, phóng đại 50 lần (không có `scale`, khoảng 8 % kích thước mô hình).
- Nhấp vào một lưới đang hiển thị: nút gần nhất, phần tử và các giá trị trường tại đó xuất hiện trong các khung phụ (**Đã chọn**).
- `plot`, `imagesc` và `table` đặt một biểu đồ đường, một bản đồ màu của mảng 2-D hoặc một bảng vào các khung phụ. Biểu đồ có cùng `'id'` (hoặc tiêu đề) với một biểu đồ trước đó sẽ thay thế nó, nên một vòng lặp có thể cập nhật một biểu đồ hội tụ; `'append', true` thêm một đường cong vào nó. {{ui:Xóa chọn}} làm trống các khung phụ; mũi tên gấp chúng lại.
- Với hai biểu đồ trở lên, {{ui:Cạnh nhau}} hiển thị tất cả cùng lúc (sáu cái mới nhất); nhấp vào thẻ của một bảng hoặc hình thì chỉ hiện riêng nó.
- Mỗi biểu đồ có {{ui:PNG}}, {{ui:SVG}} và {{ui:CSV}} bên dưới. PNG và SVG in nó trên nền trắng với màu giấy, bất kể chủ đề (PNG 1600 × 1000 điểm ảnh; SVG co giãn không mờ); CSV giữ các số của nó với mọi chữ số: một cột x và một cột cho mỗi đường cong khi các đường cong chia sẻ x, nếu không thì mỗi điểm một hàng kèm tên đường cong.
- {{key:F}} hoặc {{ui:Vừa khung}} vừa khung nhìn với những gì đang hiển thị.

## Tệp

- {{ui:Mở}} trong nhóm Kịch bản (hoặc thả tệp lên khung nhìn hay bảng): các tệp `.craft`, `.lua` và `.py` mở thành kịch bản mới (chúng không tự chạy); các tệp dữ liệu (STL, OBJ, CSV, JSON, NPY, HDF5) được tải vào các biến dưới tên tệp của chúng.
- {{ui:Lưu}} trong nhóm Kịch bản tải kịch bản hiện tại xuống thành một tệp.
- {{ui:Mới}} trong nhóm Kịch bản (hoặc {{ui:+}} cạnh các thẻ) bắt đầu một kịch bản khác. Nhấp đúp vào một thẻ để đổi tên; {{ui:×}} của nó gỡ bỏ thẻ (bạn có thể hoàn tác việc đó).

## Đọc tham số của chi tiết

Một kịch bản đọc các tham số của chi tiết (xem [Điều khiển chi tiết bằng tham số](topic:parameters)) theo tên:

```
w = param('width');     % giá trị của một tham số, tính bằng mm (hoặc độ, hoặc một số thường)
p = params();           % tất cả, dưới dạng struct: p.width, p.height
```

Trong Lua và Python chúng là `cs.param('width')` và `cs.params()`. Kịch bản chỉ đọc tham số: đổi chúng ở tab {{ui:Tham số}}. Dưới thẻ của kịch bản, một dòng liệt kê các tham số nó đọc bằng `param('…')`, và đánh dấu bất kỳ tham số nào mà chi tiết không có; tab {{ui:Tham số}} liệt kê kịch bản dưới mỗi tham số. Một tên được tạo khi kịch bản chạy, chẳng hạn `param(name)`, sẽ không được liệt kê.

## Kịch bản được lưu trong chi tiết

Mọi kịch bản trong các thẻ được giữ trong chi tiết, nên {{ui:Lưu}} trong nhóm Tệp sẽ lưu chúng cùng nó và các thay đổi với chúng có thể hoàn tác. Mở một chi tiết **không bao giờ chạy kịch bản của nó**: bảng điều khiển cho biết nó chứa bao nhiêu kịch bản, và chúng chỉ chạy khi bạn nhấn Chạy. Một chi tiết từ người khác có thể chứa bất kỳ kịch bản nào: hãy đọc nó trước khi chạy. Kịch bản chạy nền trên máy tính này, không có truy cập mạng và không thể chạm vào trang.

## Liên quan

- [Ngôn ngữ CraftScript](topic:craftscript-language)
- [Kịch bản bằng Lua](topic:craftscript-lua)
- [Kịch bản bằng Python](topic:craftscript-python)
- [Thư viện phân tích](topic:craftscript-library)
- [Viết phân tích của riêng bạn](topic:craftscript-own-analysis)
