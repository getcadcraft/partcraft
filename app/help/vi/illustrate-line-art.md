---
title: Hình minh họa kỹ thuật: nét vẽ, hình ảnh và tờ
summary: Xuất hình nhìn bất kỳ thành nét vẽ vector (SVG hoặc PDF) với ba độ dày nét, đường khuất để nét đứt hoặc bỏ đi, mặt cắt được tô gạch và tô màu tùy chọn, hoặc thành PNG; đặt nhiều hình nhìn trên một tờ.
keywords: illustrate, nét vẽ, hình minh họa kỹ thuật, svg, pdf, png, đường khuất, đường bao, tô gạch, tờ, xuất
from: 0e9bea63
---

{{ui:Xuất}} trong nhóm {{ui:Xuất ra}} mở hộp thoại xuất:

- {{ui:Gì}}: cảnh hiện tại, một hình nhìn, hoặc mọi hình nhìn.
- {{ui:Dạng}}: **PDF** hoặc **SVG** (nét vẽ vector; cả hai được tạo từ cùng một bản vẽ), **PNG của nét vẽ**, hoặc **ảnh PNG của hình nhìn 3D** (rộng tới 4096 pixel), và [tệp 3D tương tác](topic:illustrate-interactive).
- {{ui:Trang}}: mỗi hình nhìn một trang, hoặc mọi hình nhìn trên một tờ với tên của nó bên dưới. {{ui:Giấy}}: A4, A3, Letter hoặc Tabloid.
- {{ui:Đường khuất}}: nét đứt hoặc bỏ đi. {{ui:Tô màu}}: như hình nhìn hiển thị, không tô, màu phẳng hoặc tô bóng. Cũng vẽ cạnh mềm thêm các nét chi tiết.

Nét vẽ có ba độ dày: đường bao (đường viền, cạnh hở và đường cắt), cạnh sắc, và nét chi tiết. Các mặt cắt của một mặt phẳng cắt hoặc cắt khối hộp được tô gạch. Hình nhìn phân rã có đường vết nét gạch chấm từ vị trí của mỗi chi tiết; bóng số, chú thích, danh sách chi tiết và kính lúp cũng được vẽ.

Nét vẽ được tính từ hình dạng của các chi tiết theo phương pháp lưới (mesh) — cùng phương pháp mà bản vẽ tờ của PartCraft dùng khi không có nhân chính xác (exact kernel) — nên các mặt cong được vẽ bằng các mặt phẳng nhỏ, như mô hình giữ chúng.

## Chưa xây dựng

- Ảnh ở chất lượng của bộ theo dõi đường đi (path tracer) — tức bộ kết xuất của ModelCraft — chưa được cung cấp ở đây; ảnh PNG giữ giao diện riêng của khung nhìn 3D.
