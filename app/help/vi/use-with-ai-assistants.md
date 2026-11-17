---
title: Dùng PartCraft với trợ lý AI
summary: Để trợ lý AI của riêng bạn hoặc một kịch bản làm việc với chi tiết đang mở: đọc các đặc trưng, tham số và khối lượng, đổi một tham số rồi dựng lại, chạy kịch bản, xuất và lưu. Tắt cho đến khi bạn bật lên.
keywords: ai, trợ lý, tác nhân, mcp, model context protocol, kịch bản, tự động hóa, tham số, thuộc tính khối lượng, stl, step, 3mf, quyền, ngắt kết nối, hoạt động, thư mục
from: e66d3470
---

## Bạn sẽ học được

Cách để một trợ lý AI (hoặc một kịch bản bạn đã viết) xem chi tiết bạn đang mở, đổi các tham số của nó, chạy kịch bản và xuất nó, cũng như cách bạn quyết định nó được động đến những gì.

PartCraft **không có AI riêng** và không gửi gì đi đâu cả. Bạn tự chọn trợ lý: bất kỳ chương trình nào hỗ trợ Model Context Protocol (MCP). PartCraft chỉ cấp cho nó các công cụ, và bạn chọn công cụ nào.

## Bật lên

1. Mở {{ui:Cài đặt}} (biểu tượng bánh răng trên thanh ứng dụng, hoặc {{key:Mod+,}}) và vào thẻ {{ui:PartCraft}}.
2. Dưới {{ui:Trợ lý}}, đánh dấu **Cho phép trợ lý AI và kịch bản dùng PartCraft**. Nó tắt cho đến khi bạn làm vậy.
3. Chọn những gì nó được làm. **Đọc** đã được đánh dấu sẵn; chỉ đánh dấu các quyền khác khi bạn cần.
4. Để cho phép nó xuất và lưu vào một thư mục, chọn {{ui:Thêm thư mục…}} dưới **Thư mục nó được dùng** và chọn thư mục trong hộp thoại của Studio.

Trợ lý kết nối qua **CadCraft Studio** trên máy tính của bạn: Studio hiển thị địa chỉ và mã thông báo để dán vào trợ lý. Một thẻ trình duyệt không thể mở kết nối cho trợ lý.

## Trợ lý có thể yêu cầu gì

| Công cụ | Quyền | Chức năng |
|---|---|---|
| `part_describe`, `features_list` | Đọc | Các đặc trưng theo thứ tự, cùng cái đã dựng và cái bị lỗi, vật liệu, thể tích và kích thước của khối đặc |
| `params_list` | Đọc | Các tham số và mọi số mà một phương trình có thể điều khiển, cùng giá trị của chúng |
| `mass_properties` | Đọc | Thể tích, diện tích, khối tâm, mômen quán tính quanh nó; khối lượng khi chi tiết có vật liệu |
| `param_set` | Sửa | Đặt một tham số hoặc số của một đặc trưng rồi dựng lại. Một bước mà bạn có thể hoàn tác |
| `script_run` | Sửa | Chạy một kịch bản CraftScript, Lua hoặc Python theo cách không gian làm việc {{ui:Kịch bản}} làm: kín, không có tệp và không có mạng. Chi tiết không thay đổi |
| `part_export` | Xuất | STL, 3MF, STEP hoặc OpenUSD (.usdz, .usda, .usdc), như {{ui:Tệp}} › {{ui:Xuất}} ghi chúng |
| `link_push` | Sửa | Cập nhật một mô hình được liên kết từ chương trình khác (xem [Giữ mô hình .3dm luôn được cập nhật](topic:live-3dm-link)) |
| `link_status` | Đọc | Cho biết mô hình được liên kết còn đó hay không và lần cập nhật cuối vào lúc nào |
| `part_save` | Lưu | {{ui:Lưu}} của chính PartCraft |
| `illustrate_export` | Xuất | Một sổ tay từ không gian làm việc {{ui:Illustrate}} dưới dạng PDF hoặc nét vẽ SVG của các khung nhìn, dưới dạng tệp 3D tương tác, hoặc hướng dẫn của nó dưới dạng PDF hoặc trang web, như các menu {{ui:Xuất}} và {{ui:Hướng dẫn}} của không gian làm việc ghi chúng ([Sổ tay](topic:illustrate)) |

:::note
Bản dựng này dùng nhân lưới: thể tích được tính từ các tam giác (thấp hơn khối đặc cong thực một chút), và STEP được ghi dạng mặt phẳng, với các tam giác thay vì bề mặt chính xác.
:::

## Bạn vẫn làm chủ

- **Mỗi thay đổi là một bước hoàn tác**, được gắn nhãn cho trợ lý, ví dụ "Trợ lý: đặt l = 45". Nhấn {{key:Mod+Z}} để hoàn tác.
- **Bạn biết khi có kết nối.** Một nút trên thanh ứng dụng ghi tên trợ lý khi nó đang kết nối. Nhấp vào để xem nó được làm những gì, hoặc để **Ngắt kết nối**.
- **Hoạt động.** {{ui:Cài đặt}} › {{ui:PartCraft}} › {{ui:Trợ lý}} › {{ui:Hoạt động}} liệt kê mọi lần gọi; {{ui:Lưu nhật ký}} giữ một bản sao.
- **Thư mục.** Nó chỉ đọc và ghi tệp trong các thư mục bạn đã thêm; {{ui:Xóa}} lấy lại một thư mục ngay lập tức.

## Không cần mở PartCraft

Máy chủ tệp CadCraft cho trợ lý (`npx @getcadcraft/mcp`) và dòng lệnh `cadcraft` mở các chi tiết `.partcraft.json` bằng chính mã và nhân lưới của PartCraft, không có cửa sổ: cùng các công cụ đọc, đặt tham số, kịch bản CraftScript, xuất (cả OpenUSD) và lưu. `cadcraft convert bracket.partcraft.json bracket.stl` dựng một chi tiết và ghi nó từ dòng lệnh. Sổ tay (`.partcraft-manual.json`) cũng xuất được ở đó: `illustrate_export`, hoặc `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (thêm `--instructions` để lấy hướng dẫn).

## Nếu có gì đó không hoạt động

- **"cần quyền Sửa":** đánh dấu **Sửa** dưới {{ui:Trợ lý}}, rồi hỏi lại.
- **"được điều khiển bởi phương trình":** số đó đi theo một tham số; hãy nhờ trợ lý đặt tham số đó.
- **Thay đổi của nó sai:** nhấn {{key:Mod+Z}}.

## Xem thêm

- [Công thức cho trợ lý AI](common:assistants-recipes): các ví dụ có sẵn, mỗi ví dụ kèm các công cụ mà nó gọi.
