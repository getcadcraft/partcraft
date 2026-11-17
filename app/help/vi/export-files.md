---
title: Xuất để in, STEP và DXF
summary: Xuất chi tiết dưới dạng STL hoặc 3MF để in 3D, dưới dạng khối đặc STEP chính xác cho các chương trình CAD và CAM khác, và phác thảo hoặc mặt phẳng dưới dạng DXF để cắt laser và tia nước.
keywords: xuất, lưu thành, ifc, bim, bộ thuộc tính, stl, 3mf, in 3d, phần mềm cắt lớp, step, stp, step chính xác, b-rep, ap242, ap214, cam, xưởng gia công, phay, dxf, laser, tia nước, cnc, khai triển mặt phẳng, profile, lưới, xấp xỉ bằng mặt
from: e1de71d5
---

Xuất là các bản sao ở định dạng khác. Giữ lại tệp `.partcraft.json` là tệp duy nhất PartCraft có thể mở lại và chỉnh sửa.

Mọi lần xuất đều làm việc trên chi tiết đang hiển thị, theo milimét. Trong lắp ráp, STL, 3MF, STEP và Bản vẽ (PDF) xuất toàn bộ lắp ráp: xem [Danh sách chi tiết, hình bung và chi tiết chuyển động](topic:assembly-bom-explode). Nếu chưa có khối đặc nào: "Chưa có khối đặc để xuất."

## Để in 3D: STL hoặc 3MF

1. Tùy chọn: với các bề mặt tròn mượt, nhấp vào khoảng trống để không chọn gì, rồi đặt **Đường cong** thành **Mịn (128 mỗi vòng)** hoặc **Rất mịn (256 mỗi vòng)** trong bảng bên phải. STL và 3MF luôn gồm các tam giác.
2. Chọn {{ui:Xuất}}, rồi {{ui:STL, để in 3D}} hoặc {{ui:3MF, để in 3D}}.
3. Tệp được tải xuống. Thanh trạng thái hiển thị, ví dụ: "Đã xuất Part1.stl (nhị phân, mm, Z lên, 1536 tam giác)."

Cả hai định dạng đều dùng **Z lên**, như máy in và phần mềm cắt lớp yêu cầu. Thế giới của PartCraft là Y lên, nên khi xuất, chi tiết được xoay: hướng nào hướng lên trong PartCraft (vuông góc với mặt phẳng Top) thì hướng lên trong phần mềm cắt lớp, và chi tiết được phác thảo trên mặt phẳng Top sẽ nằm phẳng trên bàn in. Đặt hướng cuối cùng trong phần mềm cắt lớp nếu cần.

3MF là định dạng mới hơn, nhỏ hơn, mà phần mềm cắt lớp đọc kèm đơn vị. Dùng STL nếu chương trình không nhận 3MF.

Để kiểm tra trước rằng chi tiết kín, vừa bàn in và đứng trên một mặt phẳng, dùng {{ui:Xuất}} › {{ui:Kiểm tra in 3D (STL hoặc 3MF)…}}: xem [Chuẩn bị chi tiết để in 3D](topic:print-3d).

## Cho các chương trình CAD khác: STEP

Chọn {{ui:Xuất}}, rồi {{ui:STEP AP242 (khối đặc chính xác)}}. Lệnh này ghi chi tiết thành một khối đặc chính xác, theo milimét, xoay về Z lên. Các mặt tròn được ghi thành hình trụ, hình nón, hình cầu và hình xuyến thật, với đường tròn thật làm cạnh, để chương trình kia nhận ra một lỗ là lỗ. Một khối được mở từ tệp STEP giữ các mặt phẳng, trụ, nón, cầu và xuyến của tệp đó, nên chúng cũng được xuất chính xác. Các mặt không có bề mặt như vậy (mặt bên của đường spline, ren được mô hình hóa, khối từ lưới STL, OBJ hoặc 3MF, đường spline của tệp STEP, các mặt quét và quay tròn) vẫn là mặt xấp xỉ phẳng trong cùng khối đặc, và thanh trạng thái cho biết có bao nhiêu mặt. Ví dụ thanh trạng thái hiển thị: "Đã xuất Flange.step (AP242, khối đặc chính xác, mm, Z lên): 14 mặt trên bề mặt thật (10 trụ, 1 nón, 0 cầu, 0 xuyến), 0 đường cong cạnh được khớp." Tệp chỉ chứa khối đặc: không có lịch sử, phác thảo hay bản vẽ. Nếu chương trình kia chỉ đọc AP214, chọn {{ui:STEP AP214 (khối đặc chính xác)}}: cùng khối đặc đó nhưng theo lược đồ cũ hơn.

Những gì chính xác và những gì không:

- Mặt phẳng, trụ (lỗ, phần nhô, bo góc trên cạnh thẳng), nón (khoét côn, vát côn), cầu và xuyến là chính xác, và các cạnh thẳng, tròn và elip của chúng cũng vậy. Cài đặt **Đường cong** không thay đổi chúng.
- Nơi hai mặt tròn cắt nhau (một lỗ khoan xuyên qua trục), cạnh là một đường cong trơn được khớp với cả hai mặt trong phạm vi 0.00001 mm; "đường cong cạnh được khớp" đếm các cạnh này.
- Một khoang kín bên trong chi tiết được ghi thành khoảng rỗng của khối đặc. Nhiều thân rời được ghi thành nhiều khối đặc.
- Lắp ráp chưa được ghi thành STEP chính xác: xuất từng chi tiết.

Tệp đã được kiểm tra bằng cách đọc lại trong OpenCascade, chương trình này báo các khối đặc hợp lệ với thể tích được tính bằng tay. Tệp chưa được mở trong mọi chương trình CAD hoặc CAM. Nếu một chương trình từ chối tệp, {{ui:STEP (xấp xỉ bằng mặt, kernel lưới)}} ghi cùng hình dạng thành các mặt phẳng (theo trục riêng của PartCraft, Y lên). Xin hãy báo cho chúng tôi qua {{ui:Trợ giúp}} › {{ui:Báo cáo sự cố}}.

Để gia công, không gian làm việc Manufacture cũng ghi khối đặc chính xác theo hệ tọa độ gia công của lần thiết lập: xem [Tạo đường dao và G-code](topic:manufacture#exact-step-for-the-shop).

## Cho các chương trình BIM: IFC với mọi thuộc tính

Chọn {{ui:Xuất}}, rồi {{ui:IFC 4 (với mọi thuộc tính)}}. Lệnh này ghi chi tiết thành một phần tử IFC 4 cho mô hình công trình và nhà máy, với hình dạng là các tam giác (Z lên, milimét), cùng những gì PartCraft biết về nó dưới dạng bộ thuộc tính:

| Bộ thuộc tính | Chứa |
|---|---|
| **PartCraft_Part** | Tên, vật liệu và khối lượng riêng, cấu hình đang dùng, số thân; trong lắp ráp thêm số hiệu và mô tả chi tiết |
| **PartCraft_Parameters** | Mọi tham số của chi tiết cùng giá trị; biểu thức của công thức và ghi chú nằm trong mô tả của thuộc tính |
| **PartCraft_TitleBlock** | Các trường khung tên bản vẽ bạn đã điền (tiêu đề, số bản vẽ, bản sửa đổi, công ty, người vẽ, người kiểm tra và phê duyệt, ngày, hoàn thiện, dung sai chung) và khổ tờ |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Thể tích, diện tích bề mặt, khối lượng (với một vật liệu) và kích thước tổng thể |

Vật liệu được gắn như một vật liệu IFC, và số bản vẽ là thẻ của phần tử. Trong lắp ráp, mỗi chi tiết được ghi một lần như một kiểu chứa các thuộc tính của nó, và mỗi bản sao được đặt ở vị trí lắp ráp đặt nó, với giá trị riêng trong **PartCraft_Instance**: tên, số thứ tự trong danh sách vật tư, và việc nó có phải là chi tiết cố định hay không.

## Cho profile laser, tia nước hoặc CNC: DXF

Có hai loại DXF, đều là phiên bản R12, mà mọi chương trình CAD và CAM đều mở được:

### Một phác thảo

1. Chọn phác thảo trong lịch sử (hoặc mở nó).
2. Chọn {{ui:Xuất}}, rồi {{ui:DXF của phác thảo hoặc mặt phẳng}}. (Bảng bên phải của phác thảo cũng có {{ui:Xuất DXF}}.)

Bạn nhận được `<part> - <sketch>.dxf` theo hệ tọa độ riêng của phác thảo: đường thẳng, cung và vòng tròn thật trên lớp **PROFILE**, hình học dựng trên **CONSTRUCTION**, điểm rời trên **POINTS**.

### Một mặt phẳng của khối đặc

1. Nhấp vào một mặt phẳng trong khung nhìn (ví dụ mặt trên của một tấm có lỗ).
2. Chọn {{ui:Xuất mặt thành DXF}} trong bảng bên phải, hoặc {{ui:Xuất}}, rồi {{ui:DXF của phác thảo hoặc mặt phẳng}}.

Bạn nhận được `<part> - face.dxf`: đường viền của mặt và mọi lỗ trong nó. Một lỗ tròn (một vòng tròn trọn vẹn nơi hình trụ gặp mặt: lỗ khoan, hoặc lỗ của tệp STEP đã mở) được ghi thành đường tròn thật với tâm và bán kính của chính lỗ đó. Mọi đường viền khác là đa tuyến kín, và các cạnh tròn của nó (góc bo, rãnh, cung) là các mặt xấp xỉ, nên đặt **Đường cong** thành Mịn trước nếu dao cắt đi theo sát chúng. Thanh trạng thái cho biết có bao nhiêu đường viền, bao nhiêu trong số đó là đường tròn thật, và diện tích của mặt.

Nếu chưa chọn phác thảo cũng như mặt phẳng: "Mở hoặc chọn một phác thảo, hoặc chọn một mặt phẳng, để xuất DXF."

## Bản vẽ

Bản vẽ PDF có hướng dẫn riêng: [Tạo tờ bản vẽ](topic:drawing-pdf).

## Định dạng chưa có

glTF, OBJ, IGES và Parasolid không được xuất trong bản dựng này. DWG chỉ được ghi bởi gói biến thể, như tờ bản vẽ: xem [Tạo gói biến thể từ các cấu hình của bạn](topic:variant-pack). Xem [Định dạng tệp](topic:file-formats).
