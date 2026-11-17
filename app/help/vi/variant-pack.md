---
title: Tạo gói biến thể từ các cấu hình của bạn
summary: Dựng mọi cấu hình của một chi tiết, hoặc một vài cấu hình đã chọn, trong một lần thành STEP, IFC, DWG và ảnh xem trước cho mỗi cái, kèm bảng tham số của chúng và chi tiết dưới dạng một mục thư viện với các biến thể.
keywords: gói biến thể, biến thể, cấu hình, họ chi tiết, xuất hàng loạt, mọi kích cỡ, step, ifc, dwg, xem trước, bảng, csv, json, thư viện, bộ cấu hình, danh mục, item json
from: 9a6db99f
---

## Bạn sẽ làm gì

Giao **mọi kích cỡ của một chi tiết cùng lúc**: một tệp STEP, IFC và DWG cùng một ảnh cho mỗi cấu hình, một bảng cho biết mỗi cái là gì, và một mục thư viện đặt tất cả lên cùng một trang.

Trước tiên bạn cần một chi tiết có **cấu hình** (xem [Cấu hình và bảng thiết kế](topic:design-tables)). Một cấu hình tắt một đặc trưng, như một tấm có và không có lỗ, sẽ trở thành một biến thể riêng.

## Các bước

1. Mở chi tiết. Trên thẻ {{ui:Tham số}}, tìm **Cấu hình**.
2. Nhấp {{ui:Gói biến thể…}}.
3. Đánh dấu các cấu hình cần dựng (tất cả đều được đánh dấu) và các tệp cần ghi: STEP, IFC, DWG, ảnh xem trước và mục thư viện.
4. Nhấp {{ui:Tạo gói}}. Dòng trạng thái đếm các biến thể khi chúng được dựng; chi tiết của bạn không thay đổi.
5. Một tệp zip được tải xuống: `<part> variants.zip`.

## Có gì trong tệp zip

| Tệp | Nội dung |
|---|---|
| `<name>.step` | Cấu hình dưới dạng khối đặc STEP. |
| `<name>.ifc` | IFC4, một phần tử với thân đã dựng và các tham số của chi tiết dưới dạng thuộc tính; giá trị là của riêng cấu hình đó. |
| `<name>.dwg` | Mặt trước, mặt trên, mặt phải và mặt đẳng trắc dưới dạng một tờ bản vẽ ở kích thước thật. |
| `<name>.svg` | Một hình nét đẳng trắc của nó. |
| `variants.csv`, `variants.json` | Bảng tham số: mã, tên và giá trị của mọi tham số của từng biến thể, các đặc trưng nó tắt, các tệp của nó, thể tích và kích thước của nó. |
| `<part>.item.json` | Chi tiết dưới dạng một mục thư viện với các biến thể (xem bên dưới). |
| `README.txt` | Những gì đã được tạo, các ghi chú dưới đây, và bất cứ thứ gì chưa được dựng. |

Tệp được đặt tên theo cấu hình. Một cấu hình không dựng được (một đặc trưng không thể tạo với các giá trị đó) sẽ bị bỏ khỏi các tệp và bảng, được liệt kê trong README và trong một thông báo sau khi tệp zip được lưu; các cấu hình còn lại vẫn được ghi.

## Điều nên biết

- **STEP** chính xác khi nhân chính xác được bật trong bản dựng của bạn. Nếu không, STEP là dạng mặt phẳng (các tam giác phẳng), và README nói rõ điều đó.
- **DWG** là tờ bản vẽ, không phải mô hình 3D. Các đường của nó lấy từ lưới, nên một cạnh cong là nhiều đoạn thẳng ngắn.
- **Mục thư viện** mang một thân và một dấu chân cho mỗi biến thể, theo các trục của thư viện: Z hướng lên, mặt trước hướng về −Y, và điểm chèn ở giữa mặt sau, phía dưới. Mặt bằng là hình chữ nhật bao của mỗi biến thể. Một mục bị giới hạn ở 8 MB, nên một biến thể rất nặng sẽ thành một hộp có kích thước của nó, và README ghi có bao nhiêu biến thể như vậy.
- Cấu hình đang hoạt động của chi tiết là biến thể mặc định của mục.
- Cổng (điểm nối cho ống và ống dẫn) không được đặt từ PartCraft.

## Đưa các biến thể lên một trang thư viện

Tải `<part>.item.json` lên tại **Thư viện › Tải lên** trên trang web. Chọn danh mục, giấy phép và dòng ghi công của bạn, và nó trở thành một mục Thư viện có các biến thể. Trong BimCraft, khi đặt nó sẽ hỏi biến thể nào, và Hoán đổi đưa ra các biến thể khác. Trang nơi khách chọn tùy chọn, xem 3D và tải một biến thể hiện là **bản xem trước dành cho nhân viên**: chưa mở cho công chúng.

## Từ dòng lệnh

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` đặt tên các cấu hình cần dùng, `--formats` nhận bất kỳ giá trị nào trong `step`, `ifc`, `dwg`, `preview`, `--no-item` bỏ mục thư viện. Nó ghi một thư mục, một tệp zip, hoặc cả hai, và thoát với mã 1 khi một biến thể không thể dựng. Xem [Kịch bản và dòng lệnh](topic:scripts-and-cli).
