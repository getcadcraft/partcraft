---
title: Kernel lưới
summary: Phiên bản PartCraft này dựng mọi chi tiết bằng một kernel lưới chạy trong trình duyệt của bạn. Điều đó nghĩa là gì đối với mặt tròn, thể tích và tệp, cách nhận biết nó đang chạy, và những tính năng nào phải chờ kernel chính xác.
keywords: kernel, lưới, manifold, chính xác, b-rep, xấp xỉ bằng mặt, đường cong, opencascade, occt, bo góc cần kernel chính xác, chưa xây dựng, ngoại tuyến, webassembly
from: 68d32d16
---

Kernel hình học là bộ máy biến lịch sử của bạn thành một khối đặc. Phiên bản PartCraft này có một cái: **kernel lưới** (manifold-3d). Nó chạy trên máy tính của bạn như một chương trình WebAssembly nhỏ và sẵn sàng ngay sau khi ứng dụng mở. Không có gì về chi tiết của bạn được gửi đi đâu cả.

| | Kernel lưới |
|---|---|
| Hình tròn | Các mặt phẳng nhỏ. **Đường cong** trong bảng chi tiết đặt độ mịn |
| Thể tích và diện tích | Của khối đặc xấp xỉ bằng mặt, hơi thấp với chi tiết tròn |
| Phác thảo, đùn, cắt, quay tròn, lỗ, mẫu lặp, đối xứng, mặt phẳng tham chiếu | Có |
| Bo góc và Vát mép | Trên các cạnh thẳng giữa các mặt phẳng; các chỗ bo gặp nhau được ghép vát |
| Vỏ và Độ nghiêng khuôn | Vỏ mở các mặt phẳng (độ dày thành chính xác); Độ nghiêng khuôn nghiêng các mặt phẳng |
| Xuất | STL, 3MF, STEP (xấp xỉ bằng mặt), PDF bản vẽ và DXF |
| Hình chiếu bản vẽ | Vẽ từ các mặt phẳng nhỏ, kể cả hình cắt |
| Mặt và cạnh | Có tên và biết loại (phẳng, trụ, nón, cầu, torus; thẳng, tròn), lấy từ các phác thảo: các không gian Mô phỏng, Sinh hình và Gia công, Đo, chọn và bảng lỗ đều dùng chúng |

Chip gần đầu bên phải của thanh trạng thái ghi **Kernel lưới** khi nó dựng chi tiết của bạn.

## Những gì chờ kernel chính xác

Một kernel chính xác (B-rep) giữ các vòng tròn, hình trụ và hình nón thật, và các chỗ bo góc mượt trên bất kỳ cạnh nào; quét, chuyển tiếp, bề mặt, tôn (kim loại tấm), gân, nhiều thân, nhập STEP và xuất STEP chính xác đều được dựng trên một kernel như vậy. Các bản dùng thử trước đây của PartCraft dùng OpenCascade cho việc đó. Giấy phép của nó (LGPL) không phù hợp với bản phát hành này, nơi mọi ứng dụng đều là Apache-2.0 và chỉ dùng các thư viện có giấy phép dễ dãi, nên nó không được đưa vào. Chưa có ngày nào cho việc này.

Cho đến lúc đó, những tính năng ấy báo **Chưa xây dựng** khi bạn chọn chúng: thanh trạng thái nêu lý do, và chú giải của các nút kết thúc bằng "chưa xây dựng (cần kernel chính xác)". [Những gì chưa xây dựng](topic:not-built-yet) liệt kê từng tính năng cùng việc nên làm thay thế.

Một chi tiết làm bằng chúng trong bản trước vẫn mở được. Các tính năng đó ở lại trong lịch sử, được đánh dấu là chưa xây dựng (rê chuột lên một cái để xem lý do), phần còn lại của chi tiết vẫn được dựng, và lưu giữ chúng không thay đổi.

## Mặt tròn và Đường cong

Kernel lưới vẽ một vòng tròn như một đa giác. **Đường cong** trong bảng chi tiết đặt số cạnh của một vòng tròn đầy đủ; càng nhiều cạnh thì trông càng mượt và số đo càng gần giá trị thật, nhưng dựng lâu hơn. Thể tích, diện tích và khoảng cách từ {{ui:Đo}} là của khối đặc xấp xỉ bằng mặt này: với một lỗ hay một mấu, chúng hơi nhỏ hơn hình tròn thật.

## Trực tuyến và ngoại tuyến

Kernel lưới nằm trong gói tải xuống của chính ứng dụng. Để làm việc khi không có kết nối, hãy lưu PartCraft để dùng ngoại tuyến khi bạn đang trực tuyến: chọn {{ui:Lưu để dùng ngoại tuyến}} trên thanh ứng dụng và đợi đến khi nó ghi **Sẵn sàng ngoại tuyến**. Chi tiết: [Làm việc ngoại tuyến](common:offline).
