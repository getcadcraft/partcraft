---
title: Lưu, mở lại và tiếp tục làm việc
summary: Lưu chi tiết và cụm lắp ráp vào máy tính, đặt tên cho chúng, mở lại bằng nút, phím tắt hoặc kéo thả, giữ các phiên bản, và tránh mất công việc trong thẻ trình duyệt.
keywords: lưu, mở, mở lại, tải, tải xuống, phiên bản, sao lưu, đổi tên, tên tệp, mất công việc, rời trang, partcraft.json, partcraft-asm.json, chi tiết mới
from: c18a5abc
---

PartCraft không giữ lại gì giữa các lần truy cập. Chi tiết của bạn nằm trong thẻ trình duyệt cho đến khi bạn lưu nó thành tệp, và nó quay lại khi bạn mở tệp đó.

## Lưu chi tiết

1. Đặt tên cho chi tiết: nhấp vào khoảng trống trong khung nhìn để không chọn gì, rồi gõ **Tên** trong bảng bên phải và nhấn {{key:Enter}}. Tiêu đề lịch sử sẽ thay đổi theo.
2. Nhấn {{key:Mod+S}} hoặc chọn {{ui:Save}}.
3. Trình duyệt tải xuống `<name>.partcraft.json`. Thanh trạng thái hiển thị "Đã lưu Bracket.partcraft.json (toàn bộ lịch sử; mở lại tại đây để tiếp tục chỉnh sửa)."

Nếu một phác thảo đang mở, lưu sẽ đóng nó trước.

Tệp chứa mọi phác thảo, ràng buộc, kích thước và đặc trưng, cùng các đặc trưng bị tắt, vị trí thanh quay lui, cài đặt của tờ bản vẽ và các ghi chú GD&T, cùng toàn bộ nội dung của bất kỳ khối đặc STEP nào đã nhập. Danh sách hoàn tác của bạn không được lưu.

## Lưu cụm lắp ráp

Trong cụm lắp ráp, {{ui:Save}} hoặc {{key:Mod+S}} tải xuống `<tên cụm lắp ráp>.partcraft-asm.json`. Mọi chi tiết được lưu bên trong tệp đó: bạn không cần các tệp chi tiết riêng để mở lại.

Khi bạn chỉnh sửa một chi tiết từ bên trong cụm lắp ráp, {{key:Mod+S}} lưu riêng chi tiết đó thành `.partcraft.json`. Chọn {{ui:Back}} trước, rồi lưu, để lưu toàn bộ cụm lắp ráp.

## Mở lại

Bất kỳ cách nào sau đây:

- chọn {{ui:Open}} hoặc nhấn {{key:Mod+O}}, rồi chọn tệp;
- kéo tệp từ {{pick:mac=Finder|windows=File Explorer|linux=trình quản lý tệp của bạn}} vào khung nhìn 3D ("Thả một chi tiết PartCraft để mở" sẽ hiện ra).

PartCraft phân biệt chi tiết với cụm lắp ráp theo nội dung bên trong, nên cả hai mở theo cùng một cách. Tệp `.step` hoặc `.stp` mở thành một khối đặc đã nhập: xem [Mở tệp STEP và dựng tiếp trên đó](topic:import-step). Thanh trạng thái xác nhận: "Đã mở Bracket.partcraft.json: 7 đặc trưng." hoặc "Đã mở Hinge.partcraft-asm.json: 3 chi tiết, 2 khớp nối."

Nếu chi tiết trên màn hình có thay đổi chưa lưu, PartCraft sẽ hỏi trước: {{ui:Cancel}}, {{ui:Discard changes}} hoặc {{ui:Save first}}.

:::warning
Đóng cụm lắp ráp ({{ui:Close}}) trước khi mở tệp chi tiết. Nếu bạn mở một chi tiết khi cụm lắp ráp đang hiển thị, chi tiết sẽ tải phía sau cụm lắp ráp và bạn chỉ thấy nó sau khi đóng cụm lắp ráp. Mở tệp cụm lắp ráp cũng thay thế cụm lắp ráp chưa lưu mà không hỏi, nên hãy lưu trước.
:::

## Bắt đầu lại

{{ui:New}} tạo một "Part1" trống. Nó hỏi trước nếu có thay đổi chưa lưu, và đóng cụm lắp ráp đang mở (hỏi trước nếu cụm đó chưa lưu).

## Giữ các phiên bản

Mỗi lần lưu là một lần tải xuống mới, nên bạn có thể giữ các phiên bản đơn giản bằng cách giữ các tệp:

- Đưa phiên bản hoặc ngày vào tên trước khi lưu: "Bracket rev B".
- Trình duyệt có thể thêm " (1)", " (2)" khi một tệp cùng tên đã có trong thư mục tải xuống. Tệp mới nhất là tệp có số cao nhất, hoặc kiểm tra ngày trong {{pick:mac=Finder|windows=File Explorer|linux=trình quản lý tệp của bạn}}.
- Chuyển các tệp đã hoàn thành ra khỏi thư mục tải xuống, vào thư mục dự án của bạn.

Xem [Tệp của bạn được lưu ở đâu](common:your-files) để biết nơi các tệp tải xuống được lưu trên từng hệ thống.

## Đừng để mất công việc

- Lưu trước khi đóng thẻ, tải lại trang, hoặc để máy tính ngủ lâu. Trình duyệt sẽ hỏi "Leave site?" nếu bạn cố đóng khi có thay đổi chưa lưu, nhưng khi ứng dụng bị treo hoặc laptop bị đóng thì không có cảnh báo nào.
- Cửa sổ riêng tư hoặc ẩn danh vẫn hoạt động, nhưng không có gì khác: tệp vẫn là bản duy nhất.
- Lưu trữ đám mây và lịch sử phiên bản chưa có sẵn.
