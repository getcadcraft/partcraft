---
title: Định dạng tệp
summary: Mọi tệp PartCraft đọc và ghi, với phần mở rộng, đơn vị, trục và những gì mỗi tệp giữ lại hoặc mất đi.
keywords: định dạng, loại tệp, phần mở rộng, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, lưới, step, stp, ap242, dxf, r12, pdf, gltf, iges, đơn vị, Z lên
from: 4d0ecbee
---

| Định dạng | Phần mở rộng | Mở | Lưu hoặc xuất | Đơn vị | Trục lên | Giữ lại |
|---|---|---|---|---|---|---|
| Chi tiết PartCraft | `.partcraft.json` | Có | {{ui:Lưu}} | mm | Y | Toàn bộ lịch sử: phác thảo, quan hệ, kích thước, đặc trưng, tắt, quay lại, cài đặt đường cong, cài đặt bản vẽ và GD&T, văn bản STEP được nhập ở bản dựng trước |
| Lắp ráp PartCraft | `.partcraft-asm.json` | Có | {{ui:Lưu}} trong lắp ráp | mm | Y | Mọi chi tiết (được nhúng), các bản sao và vị trí của chúng, các khớp |
| STL (nhị phân hoặc văn bản) | `.stl` | Có, như thân khối đặc: [Mở STL, OBJ hoặc 3MF](topic:open-meshes) | {{ui:STL, để in 3D}} | mm (hỏi khi mở) | Z | Chỉ các tam giác của khối đặc |
| 3MF | `.3mf` | Có, như thân khối đặc | {{ui:3MF, để in 3D}} | mm (ghi trong tệp) | Z | Khối đặc như một đối tượng lưới |
| OBJ | `.obj` | Có, như thân khối đặc (chỉ các mặt) | Không | Hỏi khi mở | Z hoặc Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Có, như thân khối đặc đọc thành tam giác (mặt cong vẽ thành mặt xấp xỉ; các mặt phẳng, trụ, nón, cầu và xuyến của tệp được giữ để xuất chính xác): [Mở tệp STEP](topic:import-step) | | mm (từ đơn vị của tệp) | Z, hoặc Y nếu bạn chỉ định | Các khối đặc và thân bề mặt, lắp ráp với mọi chi tiết đúng vị trí; không có màu, tên, cây lắp ráp hay PMI |
| `.3dm` | `.3dm` | Có, như một thân khối đặc từ các lưới và bề mặt của nó (lưới kết xuất đã lưu, nếu không thì tessellate): [Mở mô hình .3dm](topic:open-3dm-files) | | Từ đơn vị của tệp | Z, hoặc Y nếu bạn chỉ định | Lưới, polysurface, phần đùn và vị trí khối như một thân; không có đường cong, màu, lớp hay tên |
| STEP AP242, chính xác | `.step` | | {{ui:STEP AP242 (khối đặc chính xác)}} | mm | Z | Một khối đặc chính xác: các mặt phẳng, trụ, nón, cầu và xuyến trên bề mặt thật của chúng, đường tròn và đường thẳng thật làm cạnh; các cạnh spline, ren được mô hình hóa, khối từ tệp lưới và mặt spline của tệp STEP vẫn là mặt xấp xỉ. STEP dùng cho các chương trình CAD và CAM khác |
| STEP AP214, chính xác | `.step` | | {{ui:STEP AP214 (khối đặc chính xác)}} | mm | Z | Cùng khối đặc chính xác trong lược đồ AP214 cũ hơn, cho các chương trình chỉ đọc loại đó |
| STEP AP242, xấp xỉ | `.step` | | {{ui:STEP (xấp xỉ bằng mặt, kernel lưới)}} | mm | Y | Một khối đặc kín gồm các mặt phẳng: các bề mặt tròn là mặt xấp xỉ. Dành cho chương trình từ chối tệp chính xác |
| STEP AP214, xấp xỉ | `.step` | | {{ui:STEP AP214 (xấp xỉ bằng mặt, kernel lưới)}} | mm | Y | Cùng khối đặc trong lược đồ AP214 cũ hơn, cho chương trình chỉ đọc loại đó |
| Gói USD | `.usdz` | Không | {{ui:Gói USD (.usdz)}} | m | Z | Khối đặc với vật liệu, thể tích và khối lượng; một lắp ráp với mỗi chi tiết một lần và mọi bản sao được đặt: [Xuất dưới dạng USD](topic:usd) |
| IFC 4 | `.ifc` | Không | {{ui:IFC 4 (với mọi thuộc tính)}} | mm | Z | Hình dạng dưới dạng tam giác, vật liệu, mọi tham số, khung tên, khối lượng; các chi tiết của lắp ráp như kiểu, và các bản sao được đặt |
| DXF R12, phác thảo | `.dxf` | Không | {{ui:DXF của phác thảo hoặc mặt phẳng}} khi đã chọn phác thảo | mm | x, y riêng của phác thảo | Đường thẳng, cung và vòng tròn thật, điểm; các lớp PROFILE, CONSTRUCTION, POINTS |
| DXF R12, mặt | `.dxf` | Không | {{ui:DXF của phác thảo hoặc mặt phẳng}} khi đã chọn mặt phẳng | mm | x, y riêng của mặt | Đường viền của mặt: lỗ tròn là đường tròn thật, phần còn lại là đa tuyến kín (các cạnh tròn là mặt xấp xỉ) |
| Bản vẽ PDF | `.pdf` | Không | {{ui:Bản vẽ (PDF): hình chiếu, mặt cắt, chi tiết, GD&T}} | mm trên tờ A3 | | Các hình chiếu trước, trên, phải, đẳng trục, mặt cắt và chi tiết được vẽ từ mặt xấp xỉ; đường khuất, kích thước tổng thể, ký hiệu GD&T, khung tên |

## Các tệp PartCraft

Cả hai đều là văn bản thuần (JSON). Khối đặc không bao giờ được lưu: PartCraft dựng lại nó từ lịch sử, nên tệp nhỏ và luôn khớp với lịch sử.

- Mỗi tệp có số phiên bản. Bản dựng này ghi mỗi tệp chi tiết với phiên bản thấp nhất đủ chứa những gì nó dùng (từ 2 đến 5; một thân làm từ lưới cần 5) và mở mọi phiên bản cũ hơn. Tệp từ PartCraft mới hơn bị từ chối, với thông báo nêu cả hai phiên bản.
- Mọi giá trị được kiểm tra khi tệp mở. Tên mất ký tự điều khiển; số nằm ngoài phạm vi, tham chiếu đến đặc trưng bị thiếu và loại đặc trưng không rõ đều bị từ chối với lý do ngắn gọn.
- Đừng sửa các tệp này bằng tay trừ khi bạn hiểu định dạng. Tệp không qua kiểm tra sẽ không mở được.
- Một chi tiết có khối đặc STEP lớn được nhập ở bản dựng trước có thể vượt 50 MB, mức lớn nhất PartCraft mở như một tệp chi tiết (xem [Khắc phục sự cố](topic:troubleshooting#file-problems)).

## Mặt xấp xỉ và độ chính xác

STL và 3MF luôn gồm các mặt xấp xỉ, theo cài đặt **Đường cong**, và DXF mặt cũng vậy ngoại trừ các lỗ tròn, là đường tròn thật. DXF phác thảo có cung và vòng tròn thật, vì nó đến thẳng từ phác thảo. Bản dựng này dựng mọi chi tiết bằng kernel lưới, nên các hình chiếu của bản vẽ (kể cả mặt cắt) cũng là mặt xấp xỉ. Xuất STEP chính xác là ngoại lệ: kernel biết bề mặt thật của mỗi mặt từ phác thảo (hoặc từ tệp STEP mà thân được mở), nên các mặt tròn được ghi thành hình trụ, nón, cầu và xuyến thật, bất kể **Đường cong** được đặt thế nào (xem [Xuất để in, STEP và DXF](topic:export-files#for-other-cad-programs-step)).

## Chưa hỗ trợ trong bản dựng này

| Định dạng | Trạng thái |
|---|---|
| glTF, IGES, Parasolid, ACIS (nhập hoặc xuất); xuất OBJ | Chưa xây dựng |
| DWG | Chỉ được ghi bởi [gói biến thể](topic:variant-pack), như tờ bản vẽ của mỗi cấu hình. Không đọc, và không xuất khác. Xuất DXF; mọi chương trình CAD đều mở được DXF R12 |
| STEP lắp ráp và bản vẽ của lắp ráp | Chưa xây dựng. Xuất từng chi tiết dưới dạng STEP chính xác; STL, 3MF và danh sách vật tư xuất từ lắp ráp được |
| Tệp chi tiết và lắp ráp gốc của chương trình khác (trừ `.3dm`, mở như một thân) | Chưa xây dựng |

Xem [Chưa xây dựng](topic:not-built-yet).
