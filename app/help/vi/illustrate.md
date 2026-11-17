---
title: Bắt đầu sổ tay trong Illustrate
summary: Không gian làm việc Illustrate tạo sổ tay từ thiết kế của bạn: hình nhìn, nét vẽ phân rã với bóng số và danh sách chi tiết, hướng dẫn từng bước, hoạt ảnh và một tệp 3D mà khách hàng mở được mà không cần CAD. Sổ tay là một tệp riêng.
keywords: illustrate, sổ tay, minh họa kỹ thuật, tài liệu, hình nhìn phân rã, danh sách chi tiết, hướng dẫn, partcraft-manual
from: e447e0ab
---

**Illustrate** là không gian làm việc cho các tài liệu cần có quanh một thiết kế: hình nhìn phân rã với bóng số và danh sách chi tiết, hình minh họa nét vẽ cho sổ tay, hướng dẫn từng bước, hoạt ảnh và một tệp 3D mà khách hàng mở được mà không cần CAD. Chọn {{ui:Illustrate}} trong bộ chuyển {{ui:Không gian làm việc}} ở đầu thanh công cụ.

Một **sổ tay** là một tệp riêng (`<name>.partcraft-manual.json`). Tệp giữ một bản sao hình dạng của mọi chi tiết, cây sản phẩm và thuộc tính của chi tiết, cùng một liên kết ngược về nơi chúng được lấy, nên bạn có thể làm việc trên sổ tay trong khi thiết kế vẫn tiếp tục. Khi thiết kế thay đổi, [Cập nhật từ thiết kế](topic:illustrate-update) sẽ đưa các thay đổi vào.

## Bắt đầu một sổ tay

Nhấp {{ui:Mới}} trong nhóm {{ui:Sổ tay}}, rồi:

- {{ui:Từ chi tiết đang mở}}: chi tiết đang mở trong Thiết kế.
- {{ui:Từ cụm lắp ráp đang mở}}: hiện thay thế khi một cụm lắp ráp đang mở; các chi tiết, vị trí, số hiệu, vật liệu và hình nhìn phân rã của nó được mang theo.
- {{ui:Từ một tệp lắp ráp…}}: một tệp `.partcraft-asm.json` đã lưu; PartCraft dựng các chi tiết của nó trước.
- {{ui:Từ một tệp khác…}}: glTF (.glb, .gltf), OBJ, STL hoặc 3MF. Cây và tên trong tệp được giữ lại, và các bản sao của một chi tiết (cùng một hình dạng đặt hai lần) trở thành một chi tiết với số lượng. Tệp STL và OBJ không ghi đơn vị của chúng, nên bạn sẽ được hỏi. Tệp STL được đọc với Z hướng lên; glTF và 3MF tự ghi hướng của chúng.

Khi một sổ tay đang mở, Illustrate hiển thị bản sao riêng của sổ tay về các chi tiết; chi tiết hoặc cụm lắp ráp đang mở trong Thiết kế bị ẩn cho đến khi bạn quay lại Thiết kế.

## Lưu và mở

{{ui:Lưu}} trong nhóm {{ui:Sổ tay}} (hoặc {{key:Mod+S}}) lưu sổ tay; {{ui:Mở}} mở một sổ tay. Mọi thay đổi trong Illustrate là một bước trong lịch sử riêng của sổ tay: {{ui:Hoàn tác}} và {{ui:Làm lại}} tác động lên sổ tay khi Illustrate đang mở.

## Chưa xây dựng

- Tệp STEP chưa mở được trong {{ui:Từ một tệp khác…}}. Hãy mở STEP trong Thiết kế (nó vào dưới dạng một khối đặc: xem [Mở tệp STEP](topic:import-step)) rồi bắt đầu sổ tay bằng {{ui:Từ chi tiết đang mở}}, hoặc lưu thành glTF, 3MF, OBJ hoặc STL.
- ModelCraft và BimCraft chưa thể chuyển trực tiếp một mô hình sang Illustrate: hãy lưu thành glTF (.glb) rồi dùng {{ui:Từ một tệp khác…}}.

Tiếp theo: [Hình nhìn và giao diện](topic:illustrate-views).
