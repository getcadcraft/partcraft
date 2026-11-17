---
title: Khắc phục sự cố
summary: Các sự cố bạn có thể gặp trong PartCraft, từ ứng dụng không khởi động đến đặc trưng bị lỗi, phác thảo không giải được, tệp không mở được và khớp hoạt động sai, kèm thông báo bạn thấy và cách sửa.
keywords: sự cố, lỗi, trợ giúp, không hoạt động, thất bại, treo, trống, webgl, webassembly, kernel, chưa xây dựng, xác định thừa, profile hở, không mở được, không có gì xảy ra, sai hướng, chậm
from: 7728542c
---

Khi có gì đó không hoạt động, hãy đọc trước **thanh trạng thái** ở dưới cùng: PartCraft nói ở đó lý do nó từ chối hoặc nó đang chờ gì tiếp theo. Một đặc trưng bị lỗi cũng hiển thị thông báo của nó ở đầu panel bên phải và khi bạn di chuột qua hàng của nó trong lịch sử.

## Ứng dụng không khởi động

### "Trình duyệt này không hiển thị được 3D (WebGL bị tắt hoặc thiếu), nên PartCraft không thể chạy ở đây."

**Nguyên nhân:** trình duyệt đã tắt, chặn hoặc không hỗ trợ đồ họa 3D (WebGL), hoặc trình điều khiển card đồ họa không hỗ trợ.

**Cách khắc phục:**

:::chromium
Mở `chrome://settings/system` (hoặc `edge://settings/system` trong Edge) và bật "Sử dụng tính năng tăng tốc phần cứng khi có sẵn", rồi khởi động lại trình duyệt. Nếu đã bật, hãy kiểm tra `chrome://gpu` để xem trạng thái WebGL, và cập nhật trình điều khiển card đồ họa.
:::

:::firefox
Mở `about:support` và xem mục Graphics, WebGL. Nếu bị chặn, hãy cập nhật trình điều khiển đồ họa. Trong `about:config`, `webgl.disabled` phải là `false`.
:::

:::safari
WebGL luôn bật trong Safari hiện tại. Hãy cập nhật macOS (Safari cập nhật theo). Nếu vẫn lỗi, thử Chrome hoặc Firefox trên cùng máy Mac để loại trừ phần cứng đồ họa.
:::

Máy tính từ xa (remote desktop) và một số máy ảo không có WebGL. Hãy thử trên chính máy tính đó.

### "Kernel khối đặc không tải được: …"

**Nguyên nhân:** kernel hình học (một chương trình WebAssembly) không thể tải hoặc khởi động. Thường là kết nối bị ngắt khi ứng dụng đang tải, WebAssembly bị tắt bởi chính sách công ty hoặc cài đặt bảo mật của trình duyệt, hoặc trình duyệt quá cũ.

**Cách khắc phục:** tải lại trang khi đang trực tuyến. Nếu vẫn lỗi, thử một trình duyệt hiện tại khác. Trên Firefox, `javascript.options.wasm` trong `about:config` phải là `true`. Khi ngoại tuyến, ứng dụng và kernel chỉ tải được nếu thanh ứng dụng đã hiện **Sẵn sàng ngoại tuyến** trước khi bạn mất kết nối ({{ui:Lưu để dùng ngoại tuyến}} khi đang trực tuyến; xem [Làm việc ngoại tuyến](common:offline)).

### Nút ngoại tuyến báo "Không thể lưu" hoặc "Không dùng được ngoại tuyến"

**Không thể lưu**: một số tệp chưa tải xuống được. Nhấp để thử lại khi đang trực tuyến; kết nối chậm hoặc tính phí dữ liệu có thể cần thử lần hai. **Không dùng được ngoại tuyến**: cửa sổ trình duyệt này không giữ được bản sao ngoại tuyến (cửa sổ riêng tư và một số máy được quản lý chặn tính năng này). Hãy dùng một cửa sổ thường, hoặc giữ thẻ mở.

### PartCraft ngoại tuyến nhưng đã cũ

Nhấp **Sẵn sàng ngoại tuyến** khi đang trực tuyến và chọn {{ui:Lưu lại (lấy bản mới nhất)}}.

### "Quét: chưa xây dựng. Cần một kernel chính xác, …"

Thông báo đầy đủ là "<Tên>: chưa xây dựng. Cần một kernel chính xác, phiên bản PartCraft này không có. Trợ giúp › Chưa xây dựng những gì nói rõ phải làm gì thay thế." Bạn thấy nó khi chọn Quét, Chuyển tiếp, Gân, cánh tôn, đặc trưng bề mặt, Kết hợp, Di chuyển khối, Tỷ lệ khối hoặc Mẫu theo đường dẫn, và với những thứ khác chỉ kernel chính xác mới làm được. Không có gì sai với trình duyệt hay chi tiết của bạn: phiên bản PartCraft này dựng mọi chi tiết bằng kernel lưới. Xem [Chưa xây dựng những gì](topic:not-built-yet) để biết phải làm gì thay thế, và [Kernel lưới](topic:solid-kernels).

### "Đang tải kernel khối đặc…" mãi không biến mất

Chờ một chút khi kết nối chậm: kernel và thư viện 3D được tải xuống lần đầu tiên. Sau đó tải lại. Nếu chính trang hiển thị lỗi, xem phần trên.

## Không có gì xảy ra khi tôi nhấn phím

- Phím không hoạt động khi con trỏ đang ở một ô trong panel. Nhấp vào khung nhìn 3D, hoặc nhấn {{key:Esc}} sau khi gõ (hoặc {{key:Tab}} để thoát ô).
- Các phím mũi tên và {{key:Plus}}/{{key:Minus}} chỉ xoay và thu phóng khung nhìn sau khi bạn nhấp vào khung nhìn.
- Một hộp thoại đang mở: hãy trả lời nó trước.
- Trong phác thảo, {{key:F}} là công cụ Bo góc, không phải Vừa khung. Dùng nút {{ui:Vừa khung}}.

## Một nút trên thanh công cụ bị mờ

- Các nút đặc trưng bị mờ khi phác thảo đang mở. Đóng phác thảo trước.
- Công cụ phác thảo chỉ hoạt động bên trong phác thảo.
- {{ui:Hoàn tác}} và {{ui:Làm lại}} bị mờ khi không có gì để hoàn tác hoặc làm lại.
- {{ui:Lắp ráp}} cần một chi tiết có khối đặc. {{ui:Khớp}} cần hai chi tiết trong lắp ráp. {{ui:Sửa chi tiết}} cần một chi tiết được chọn.
- {{ui:STEP AP242 (khối đặc chính xác)}} và {{ui:STEP AP214 (khối đặc chính xác)}} bị mờ trong lắp ráp: hãy xuất từng chi tiết. Phần mềm khác từ chối tệp chính xác: thử {{ui:STEP AP214 (khối đặc chính xác)}}, rồi {{ui:STEP (xấp xỉ bằng mặt, kernel lưới)}}, và báo cho chúng tôi qua {{ui:Trợ giúp}} › {{ui:Báo cáo sự cố}}.
- {{ui:Quét}}, {{ui:Chuyển tiếp}} và các đặc trưng khác cần kernel chính xác không bị mờ: chúng vẫn nhấp được, chú giải của chúng kết thúc bằng "chưa xây dựng (cần kernel chính xác)", và nhấp vào một trong số đó sẽ báo điều đó ở thanh trạng thái. Xem [Chưa xây dựng những gì](topic:not-built-yet).
- {{ui:Bản vẽ}} cần một chi tiết có khối đặc, và bị mờ khi phác thảo đang mở.
- Các mục {{ui:Xuất}} bị mờ trong lắp ráp: lắp ráp chưa thể xuất. Đóng nó, hoặc sửa một chi tiết, để xuất.

## Sự cố phác thảo

### Phác thảo không cho tôi thêm quan hệ

"Không có quan hệ nào phù hợp với vùng chọn này. Chọn một hoặc hai mục (Shift+nhấp để thêm)." Quan hệ cần một vùng chọn khác. Xem [Quan hệ và kích thước phác thảo](topic:sketch-relations) để biết mỗi quan hệ cần gì.

### "Xác định thừa: … không thể đáp ứng tất cả. Hoàn tác, hoặc xóa một trong số đó."

**Nguyên nhân:** quan hệ hoặc kích thước mới mâu thuẫn với những cái đã có. Phác thảo không di chuyển.

**Cách khắc phục:** {{key:Mod+Z}}, hoặc xóa một mục màu đỏ trong danh sách của panel bên phải (chọn **Xóa** bên cạnh nó).

### "Xác định thừa: … đã được suy ra. Xóa nó."

**Nguyên nhân:** quan hệ không thêm gì: những cái khác đã buộc nó (ví dụ Song song ở hai cạnh của một hình chữ nhật, hoặc một kích thước đã cố định). Trong bản dựng này không có kích thước bị điều khiển.

**Cách khắc phục:** xóa nó. Đặc trưng vẫn được dựng, kèm một cảnh báo.

### "Các mục đó không thể ghi kích thước cùng nhau."

Bạn đã nhấp, ví dụ, một điểm và một vòng tròn. Hãy ghi kích thước đến điểm tâm của vòng tròn thay thế.

### "Bo góc cần một góc nơi đúng hai đường gặp nhau." / "Bán kính đó quá lớn cho các đường này."

Nhấp chính xác vào điểm góc của hai đường đặc. Dùng bán kính nhỏ hơn mức đường ngắn hơn cho phép.

### Hình học nhảy trở lại khi tôi kéo nó

Việc kéo sẽ phá một quan hệ hoặc một kích thước, nên PartCraft đặt nó trở lại. Chỉ hình học màu xanh (xác định chưa đủ) mới di chuyển được.

### "Phác thảo này không mở được: Cần Extrude2, đang lỗi."

Phác thảo nằm trên một mặt của một đặc trưng chưa được dựng. Sửa đặc trưng đó trước, hoặc bật lại nó, hoặc tiến tới (roll forward).

## Sự cố đặc trưng

| Thông báo | Nguyên nhân | Cách sửa |
|---|---|---|
| "Hãy tạo phác thảo trước: chọn một mặt phẳng, Phác thảo, vẽ một biên dạng kín, Thoát." | Không có phác thảo chưa dùng nào có đường, và không có phác thảo nào được chọn | Vẽ một phác thảo, hoặc chọn phác thảo cần dùng trong lịch sử |
| "Phác thảo không có biên dạng kín để đùn." (hoặc "để quay tròn") | Không có vòng kín nào của các đường đặc | Đóng các khe hở; đổi lại các đường dựng bằng {{key:Q}} |
| "Biên dạng bị hở: một đầu tại (x, y) không nối với gì cả." | Có khe hở tại điểm đó | Mở phác thảo, kéo đầu mút đến hàng xóm để nó bắt vào |
| "Biên dạng phân nhánh tại (x, y): có hơn hai đầu gặp nhau." | Ba đường trở lên gặp nhau tại một điểm | Xóa đường thừa, hoặc đổi nó thành đường dựng |
| "Một vòng kín cần ít nhất ba cạnh hoặc một đường cong." | Hai đường đi qua đi lại | Vẽ lại vòng |
| "Xuyên suốt chỉ dùng cho cắt. Hãy dùng chiều sâu cho khối đắp." | Khối đắp đặt Kết thúc là Xuyên suốt | Đặt Kết thúc là Theo chiều sâu (Blind) hoặc Mặt phẳng giữa (Mid-plane) |
| "Không có gì để cắt ở phía đó của phác thảo. Thử hướng khác." | Phần cắt hướng ra ngoài vật liệu | Tích **Đảo chiều** |
| "Chưa có gì để cắt." / "Chưa có gì để khoan." | Không có khối đặc trước đặc trưng này | Tạo khối đắp trước, hoặc di chuyển đặc trưng xuống |
| "Vẽ một đường tâm (đường dựng) trong phác thảo để quay quanh." | Quay tròn không có trục | Thêm một đường tâm, hoặc chọn một đường trong **Trục** |
| "Biên dạng cắt qua trục. Giữ nó về một phía của đường tâm." | Biên dạng nằm ở cả hai phía của trục | Vẽ lại một nửa biên dạng |
| "Đặt các điểm phác thảo nơi các lỗ đi (công cụ Điểm), rồi tạo lỗ." | Không có điểm rời trong phác thảo | Thêm điểm bằng {{key:P}} |
| "Lỗ khoét phải rộng hơn lỗ." | Đường kính lỗ khoét không lớn hơn Đường kính | Làm lỗ khoét rộng hơn |
| "Lỗ khoét phải nông hơn lỗ." | Lỗ khoét sâu hơn lỗ mù | Làm nó nông hơn, hoặc làm lỗ sâu hơn |
| "Chọn các đặc trưng để sao chép." | Mẫu hoặc đối xứng mà chưa tích gì | Tích một đặc trưng dưới **Đặc trưng để sao chép** |
| "Extrude2 không có khối để sao chép." | Đặc trưng được sao chép bị lỗi hoặc đã tắt | Sửa hoặc bật lại nó |
| "Cần Sketch3, đang lỗi." | Một đặc trưng nó phụ thuộc vào chưa được dựng | Sửa đặc trưng được nêu tên |
| "Mặt nó nằm trên đã mất (Extrude1 chưa được dựng)." | Mặt của phác thảo không còn tồn tại | Sửa đặc trưng đó, hoặc xóa phác thảo và vẽ lại |
| "Không còn gì của chi tiết sau bước này." | Một lần cắt đã loại bỏ toàn bộ vật liệu | Kiểm tra kích thước và hướng của lần cắt |
| "Kernel khối đặc không dựng được cái này (…)." hoặc "Kernel khối đặc không kết hợp được cái này với khối." | Kernel từ chối hình học | Hoàn tác, hoặc đổi kích thước một chút; các mặt chạm nhau chính xác có thể gây ra điều này |
| "Quét: chưa xây dựng. Cần một kernel chính xác, phiên bản PartCraft này không có." (cũng với Chuyển tiếp, Gân và các cái khác) | Một đặc trưng được tạo ở bản dựng trước mà chỉ kernel chính xác mới dựng được. Nó vẫn nằm trong lịch sử và được lưu lại không đổi | Ngăn hoặc xóa nó; xem [Chưa xây dựng những gì](topic:not-built-yet) để biết phải làm gì thay thế |
| "Một đường bo 5 mm không vừa ở đây (…)." / "Một vát mép 2 mm …" | Kích thước quá lớn so với mặt cạnh cạnh, hoặc góc không thể pha trộn | Kích thước nhỏ hơn, hoặc ít cạnh hơn mỗi đặc trưng |
| "Bo góc: trong phiên bản này chỉ các cạnh thẳng nằm giữa hai mặt phẳng (kernel lưới dựng được). Bo tròn hoặc vát các cạnh cong trong phác thảo." (cũng với Vát mép) | Một cạnh được chọn là tròn, như mép lỗ, hoặc nằm trên một mặt cong | {{ui:Chọn cạnh}} và gỡ nó; bo tròn hoặc vát góc đó trong phác thảo thay thế |
| "Bo góc có bán kính thay đổi dọc theo cạnh: chưa xây dựng (cần kernel chính xác). Hãy đặt một bán kính." | **Bán kính biến thiên** được tích | Bỏ tích và đặt một bán kính |
| "Bo góc bằng kernel lưới: nơi các cạnh bo gặp nhau được cắt chéo, không pha trộn." (⚠, một cảnh báo) | Các cạnh được chọn gặp nhau tại một góc; các đường bo gặp nhau tại đó thành một nếp gấp sắc | Không cần sửa: chi tiết đã được dựng. Bo ít cạnh hơn nếu nếp gấp quan trọng |
| "Một cạnh nó bo đã mất: cạnh giữa Extrude1 và Cut2." | Một thay đổi trước đó đã xóa cạnh | {{ui:Chọn cạnh}}, gỡ cạnh màu đỏ, chọn cạnh mới |
| "Chọn các cạnh trong khung nhìn, rồi thêm chúng." | Bo góc hoặc vát mép không có cạnh | {{ui:Chọn cạnh}} |
| "Chọn các mặt cần bỏ (mở), rồi làm vỏ." | Vỏ không có mặt mở | {{ui:Chọn mặt}} |
| "Vỏ không thể được tạo với độ dày này (…)." | Thành dày hơn một phần mỏng của mô hình hoặc bán kính bo | Thành mỏng hơn, hoặc bo lớn hơn |
| "Vỏ: trong phiên bản này chỉ mở các mặt phẳng (kernel lưới dựng được)." | Một mặt mở bị cong | {{ui:Chọn mặt}} và gỡ nó; chỉ mở các mặt phẳng |
| "Độ nghiêng khuôn: trong phiên bản này chỉ mặt phẳng (kernel lưới mới dựng được)." | Một mặt được nghiêng là mặt trụ, nón hoặc mặt tự do | Gỡ nó; chỉ nghiêng các mặt phẳng |
| "Một mặt nó mở đã mất (…)." | Một thay đổi trước đó đã xóa mặt | {{ui:Chọn mặt}} một lần nữa |
| "Bo góc1 thay đổi cạnh hoặc thành của khối; không thể sao chép. …" | Mẫu hoặc đối xứng sao chép bo góc, vát mép hoặc vỏ | Bỏ tích nó; tạo mẫu các lần cắt trước, rồi bo góc |
| "Nó nằm trên một mặt mà chỉ kernel chính xác mới tìm được: chưa xây dựng trong phiên bản này." | Phác thảo trên một mặt mà kernel lưới không tìm được, chẳng hạn một mặt tạo ở bản dựng trước | Vẽ phác thảo trên một mặt phẳng gốc hoặc mặt phẳng của một đùn, và đặt nó bằng kích thước |
| "Nó dùng một mặt hoặc cạnh của khối, mà chỉ kernel chính xác mới tìm được: chưa xây dựng trong phiên bản này." | Mặt phẳng, trục hoặc điểm tham chiếu nằm trên một mặt hoặc cạnh của khối | Tạo nó từ mặt phẳng gốc, điểm phác thảo hoặc tọa độ thay thế |
| "Đùn đến một mặt, mặt kế tiếp hoặc một đỉnh: chưa xây dựng (cần kernel chính xác)." / "Độ côn: chưa xây dựng (cần kernel chính xác)." | Điều kiện kết thúc hoặc độ côn chỉ kernel chính xác mới dựng được | Dùng chiều sâu Theo chiều sâu hoặc Mặt phẳng giữa mà bạn đo; để Độ côn ở 0 |

## Sự cố khi chọn

- "Mặt đó bị cong. Chọn một mặt phẳng hoặc mặt phẳng gốc để vẽ phác thảo." Phác thảo cần một mặt phẳng. Vẽ phác thảo trên một mặt phẳng gốc và đặt phác thảo bằng kích thước.
- Một mặt hiện "Cố định tại vị trí đã chọn": nó không được tạo từ một cạnh phác thảo (ví dụ một mặt của bản sao mẫu), nên phác thảo trên nó vẫn giữ nguyên khi chi tiết thay đổi.
- Cạnh khó nhấp: hãy phóng to. Một cạnh được ưu tiên hơn mặt bên cạnh khi con trỏ nằm đúng trên nó.

## Sự cố tệp

| Thông báo | Cách sửa |
|---|---|
| 'PartCraft mở các tệp .partcraft.json của chính nó, các tệp xuất từ macro CadCraft cho SolidWorks (.cadcraft-sw.json) và tệp STEP. "bracket.igs" không thuộc loại nào trong số này.' | Chỉ những tệp đó được nhận diện (và lưới STL, OBJ, 3MF và tệp `.3dm`) |
| '"part.stp" không phải tệp STEP (nó không bắt đầu bằng ISO-10303-21).' | Tệp không phải văn bản STEP |
| "Tệp STEP đó quá lớn (trên 60 MB) để nhập tại đây." | Đơn giản hóa nó từ nguồn |
| "Tệp đó quá lớn để là một chi tiết PartCraft." khi là chi tiết đã lưu của bạn | Một khối STEP lớn được nhập ở bản dựng trước đã làm tệp chi tiết vượt 50 MB. Dùng một bản cũ hơn không có nó |
| "Tệp đó quá lớn để là một chi tiết PartCraft." | Tệp vượt 50 MB; nó không phải tệp PartCraft |
| "Đây không phải tệp PartCraft (nó không phải JSON)." / "Đây không phải tệp PartCraft." | Tệp bị hỏng hoặc thuộc về chương trình khác |
| "Tệp này được lưu bởi PartCraft mới hơn (phiên bản tệp …); bản này đọc phiên bản …" | Mở nó trong PartCraft mới hơn |
| "Extrude2: chiều sâu không hợp lệ." (hoặc giá trị khác) | Tệp đã bị sửa tay hoặc hỏng. Dùng bản cũ hơn |
| Chèn trong lắp ráp báo "Part1.partcraft.json không có khối để chèn." | Tệp chi tiết không có khối. Mở nó, dựng một khối, lưu, rồi chèn lại |

**Tệp đã lưu không nằm ở nơi bạn mong đợi.** Lưu là một lần tải xuống: hãy xem thư mục tải xuống của trình duyệt, hoặc mở danh sách tải xuống từ thanh công cụ của trình duyệt. Xem [Tệp của bạn đi đâu](common:your-files).

**Tôi đã mở một chi tiết nhưng lắp ráp vẫn trên màn hình.** Chi tiết đã tải phía sau lắp ráp. Chọn {{ui:Đóng}} để đóng lắp ráp và xem chi tiết. Hãy đóng các lắp ráp trước khi mở tệp chi tiết.

## Sự cố bản vẽ

| Thông báo | Cách sửa |
|---|---|
| "Hãy dựng khối đặc trước, rồi tạo bản vẽ của nó." | Dựng chi tiết trước |
| "Không đủ chỗ trên tờ cho chi tiết phóng to: làm chi tiết nhỏ hơn hoặc bỏ một hình chiếu." | Giảm **Bán kính chi tiết** hoặc **Tỷ lệ chi tiết**, hoặc xóa mặt cắt |
| "Chi tiết phóng to được lấy từ hình chiếu đứng, bằng, phải hoặc mặt cắt." | Nhấp vào một trong các hình chiếu đó |
| "Nhấp vào một trong các hình chiếu." | Lần nhấp rơi vào giấy trống |
| "Vị trí cần ít nhất một tham chiếu chuẩn." và các thông báo khung khác | Đặt các chuẩn mà panel yêu cầu, hoặc chọn đặc tính khác |
| "Không thể tạo các hình chiếu bản vẽ: …" | Hoàn tác thay đổi cuối. Nếu vẫn xảy ra, lưu, tải lại và mở lại chi tiết |

## Sự cố lắp ráp

| Thông báo | Cách sửa |
|---|---|
| "Hãy dựng khối đặc trước, rồi đưa vào lắp ráp." | Chi tiết chưa có khối |
| "Hãy chèn chi tiết thứ hai trước (Thêm bản sao, Chèn, hoặc Sửa › Nhân bản)." | Một khớp cần hai chi tiết |
| "Chọn một mặt trên chi tiết khác." | Hai mặt của một khớp phải nằm trên các chi tiết khác nhau |
| "Mặt đó bị cong. Chọn một mặt phẳng …" | Khớp bắt đầu từ các mặt phẳng. Sau đó dùng **Căn tâm theo** cho trục lỗ hoặc trục quay |
| "Bracket2 không được nối với chi tiết cố định, nên nó giữ nguyên nơi nó được đặt." | Thêm một khớp từ nó đến một chi tiết đã được đặt |
| "Revolute3 khép một vòng không thể khép: lệch 2.000 mm. Kiểm tra các mặt, độ lệch và giới hạn của các khớp trong vòng." | Các chi tiết không thể gặp nhau hết: kiểm tra chiều dài, các mặt mỗi khớp dùng, độ lệch (các chi tiết xếp mặt đối mặt phải khớp về chiều sâu) và giới hạn; hoặc gỡ một khớp của vòng |
| "Mặt mà khớp này dùng đã mất khỏi Bracket." / "Trục mà khớp này dùng đã mất khỏi Bracket." | Chi tiết đã được sửa. Xóa khớp và tạo lại |
| "Trục chạy dọc theo mặt, nên nó không thể đặt tâm của khớp." | Chọn một trục cắt mặt, hoặc "Gốc của chính mặt" |
| "Một lắp ráp giữ ít nhất một chi tiết. Hãy đóng nó thay vì vậy." | Dùng {{ui:Đóng}} |

**Chi tiết đã nối nhưng sai chỗ.** Đặt **Căn tâm theo** cho cả hai phía của khớp thành các trục lỗ hoặc trục quay cần thẳng hàng, rồi chỉnh **Góc (°)** và **Độ lệch (mm)**.

## Chậm

- Đặt **Đường cong** là Bình thường hoặc Thô khi đang mô hình hóa; chuyển sang Mịn trước khi xuất.
- Số lượng mẫu lớn (hàng trăm bản sao) mất thời gian dựng lại sau mỗi thay đổi. Ngăn mẫu khi bạn làm các đặc trưng khác.
- Phát hiện va chạm (clash) và kiểm tra chuyển động so sánh mọi cặp chi tiết; lắp ráp lớn sẽ mất nhiều thời gian hơn.
- Đóng các thẻ nặng khác. PartCraft chạy trên bộ xử lý và đồ họa của chính máy tính bạn.

## Vẫn gặp sự cố

Lưu tệp trước ({{key:Mod+S}}), rồi tải lại trang và mở lại. Nếu một đặc trưng vẫn lỗi, chọn nó, đọc thông báo, và thử {{key:Mod+Z}} để quay về trạng thái tốt cuối cùng.
