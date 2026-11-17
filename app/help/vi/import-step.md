---
title: Mở tệp STEP và xây dựng trên đó
summary: Đưa mô hình STEP của nhà cung cấp hoặc của một chương trình CAD khác vào PartCraft dưới dạng khối đặc, như một chi tiết mới hoặc thêm vào chi tiết hiện tại, đặt hướng lên, rồi thêm phác thảo và đặc trưng vào đó.
keywords: step, stp, nhập, mở step, ap203, ap214, ap242, mô hình nhà cung cấp, khối đặc không lịch sử, khối đặc đã nhập, hướng lên, z lên, y lên, tam giác, mặt phẳng nhỏ, step lắp ráp
from: ca0eca5f
---

PartCraft mở tệp STEP (`.step` hoặc `.stp`, AP203, AP214 và AP242) dưới dạng **khối đặc** mà bạn có thể phác thảo lên, cắt, khoan và kết hợp với các đặc trưng của riêng bạn. Khối không có lịch sử riêng: bạn không thể đổi các kích thước mà nó được tạo ra, chỉ có thể thêm vào hoặc cắt từ nó.

Phiên bản này dựng mọi chi tiết bằng nhân lưới (mesh kernel), nên một tệp STEP được **đọc dưới dạng tam giác**: các mặt phẳng vẫn phẳng, còn các mặt cong (trụ, nón, cầu, xuyến, mặt B-spline) trở thành nhiều mặt phẳng nhỏ. Thể tích của nó nằm trong một phần nhỏ phần trăm so với thể tích chính xác. Giữ nguyên các mặt cong cần một nhân chính xác (exact kernel), chưa có trong phiên bản này.

## Mở tệp STEP

1. Chọn {{ui:Mở}} hoặc nhấn {{key:Mod+O}}, rồi chọn tệp `.step` hoặc `.stp`. Hoặc thả tệp lên khung nhìn 3D.
2. PartCraft đọc tệp và hiển thị những gì nó tìm thấy, ví dụ: "Tệp AP214: 1 khối đặc, 10 mặt, đọc dưới dạng tam giác." Bên dưới là số tam giác, mọi thứ nó phải bỏ qua hoặc ghép lại, và kết quả có khép kín hay không.
3. Kiểm tra **Hướng lên trong tệp**. Tệp STEP tự ghi đơn vị của nó (milimét, inch, mét…); PartCraft chuyển sang milimét, nên **Đơn vị trong tệp** hiển thị Milimét, "tệp ghi như vậy". **Kích thước tại đây** cho biết nó sẽ lớn cỡ nào.
4. Chọn {{ui:Mở thành thân}} cho một chi tiết rỗng, hoặc {{ui:Thêm vào chi tiết này}} / {{ui:Chi tiết mới}} khi chi tiết đã có đặc trưng. Khi thêm, sẽ hỏi **Dùng để** làm gì: thêm, cắt, hay chỉ giữ phần chồng lấp.

Một đặc trưng **Imported1** xuất hiện trong lịch sử, và thanh trạng thái hiển thị, ví dụ, "plate.step là một khối đặc: 57995.937 mm³, 6 mặt phẳng để phác thảo lên."

## STEP lắp ráp

Một cụm lắp ráp vào dưới dạng **một khối** với mọi chi tiết ở đúng vị trí tệp đặt chúng ("3 chi tiết được đặt trong tệp sẽ vào đúng vị trí đang đứng"). Một chi tiết dùng hai lần sẽ vào hai lần. Tên chi tiết và cây lắp ráp không được giữ lại.

## Đặt hướng lên

Hầu hết chương trình CAD dùng Z hướng lên; PartCraft dùng Y hướng lên. Mặc định, PartCraft xoay tệp để Z của nó hướng lên ở đây. Nếu chi tiết đến ở tư thế nằm nghiêng, chọn **Imported1** và đặt **Hướng lên trong tệp** thành **Y hướng lên**. **Đơn vị trong tệp** và **Dùng để** cũng có thể đổi ở đó; mỗi thay đổi là một bước hoàn tác.

## Xây dựng trên đó

- Nhấp một mặt phẳng của khối và chọn {{ui:Phác thảo trên mặt này}}. Các mặt phẳng của mô hình STEP giữ nguyên vị trí khi khối được dựng lại.
- Thêm cắt, lỗ, phần nhô, mẫu lặp và đối xứng như với mọi chi tiết khác.
- Kiểm tra kích thước trong hộp **Chi tiết**: thể tích, diện tích bề mặt, kích thước.

Bo góc, vát mép và vỏ cần nhân chính xác, như với mọi chi tiết trong phiên bản này ([Nhân lưới](topic:solid-kernels)).

## Nơi lưu

Các tam giác được lưu **bên trong** tệp `.partcraft.json`, nên tệp chi tiết tự đủ: bạn không cần tệp STEP nữa.

## Thông báo

| Thông báo | Ý nghĩa |
|---|---|
| '"part.stp" không phải tệp STEP (không bắt đầu bằng ISO-10303-21).' | Tệp không phải văn bản STEP thuần. Yêu cầu người gửi tệp STEP AP203, AP214 hoặc AP242 |
| "Không đọc được tệp STEP: phần dữ liệu bị thiếu hoặc hỏng." | Tệp bị cắt cụt hoặc hỏng. Sao chép lại tệp |
| "Tệp STEP không có khối đặc hay khối bề mặt nào: không có gì để nhập." | Tệp chỉ chứa bản vẽ, điểm hoặc dữ liệu. Yêu cầu một khối đặc |
| "Tệp STEP này quá lớn (trên 60 MB) để nhập ở đây." và các giới hạn khác của bộ đọc (mục, mặt, tam giác) | Đơn giản hóa mô hình ngay từ nguồn, hoặc gửi từng chi tiết một |
| "… các dòng hỏng trong tệp đã bị bỏ qua." | Một số dòng không đọc được; phần còn lại đã được nhập. Kiểm tra khối |
| "… các mặt không thể chuyển thành tam giác và đã bị bỏ." | Các mặt đó để lại lỗ hổng, PartCraft cố lấp; nếu khối không khép kín, nó sẽ không được thêm vào |
| "… các mặt thuộc loại không đọc được (…) đã bị bỏ qua." | Một loại mặt hiếm. Yêu cầu mô hình với mặt phẳng hoặc mặt B-spline |
| "Không khép kín …" | Các mặt không tạo thành một khối đặc kín (một mô hình bề mặt, hoặc các mặt bị bỏ). PartCraft hiển thị các lỗ hổng và không thêm gì |

## Giới hạn

- Các mặt cong được vẽ và đo như các mặt phẳng nhỏ, như mọi chi tiết phiên bản này dựng. PartCraft giữ các mặt phẳng, trụ, nón, cầu và xuyến của tệp cùng với khối, nên {{ui:Xuất}} › {{ui:STEP AP242 (khối đặc chính xác)}} ghi chúng lại thành mặt thật, lỗ vẫn là lỗ, cùng với các đặc trưng bạn thêm. Các mặt mà tệp cho là spline, mặt quét hoặc mặt tròn xoay vẫn là mặt phẳng nhỏ khi xuất. Chi tiết được lưu trước 0.9.1 không có mặt được giữ lại: hãy mở lại tệp STEP để có chúng.
- {{ui:Xuất}} › {{ui:DXF của phác thảo hoặc mặt phẳng}} với một mặt phẳng được chọn sẽ ghi một lỗ tròn của tệp thành vòng tròn thật.
- Màu sắc, tên khối, cấu trúc lắp ráp và PMI (dung sai trong tệp) không được đọc.
- Ngoài STEP, PartCraft mở các lưới STL, OBJ và 3MF ([Mở STL, OBJ hoặc 3MF](topic:open-meshes)) và các tệp `.3dm` ([Mở mô hình .3dm](topic:open-3dm-files)) dưới dạng khối đặc. IGES và tệp gốc của các chương trình khác không được hỗ trợ.
- Một chi tiết có khối STEP được nhập bởi bản dựng có nhân chính xác sẽ giữ văn bản STEP; phiên bản này bỏ qua đặc trưng đó ("chưa xây dựng"). Hãy mở lại tệp STEP để nhập nó dưới dạng tam giác.
