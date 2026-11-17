---
title: Gửi bản vẽ tới máy laser
summary: Chọn mỗi lớp làm gì (cắt, khắc vạch, khắc, tô đầy, ảnh), xem trước đường đi của đầu máy, lưu G-code laser GRBL, hoặc gửi từ trình duyệt sau khi vạch khung công việc.
keywords: laser, máy cắt laser, máy khắc laser, GRBL, G-code, khắc, tô đầy, dither, khắc ảnh, khắc vạch, cắt, Web Serial, Linux, vạch khung công việc, công suất, tốc độ, số lượt
from: 327b3c46
---

Bảng {{ui:Laser}} biến các lớp của bản vẽ thành chương trình cho máy laser chạy GRBL (hầu hết các bộ điều khiển laser diode và CO2 dùng cho sở thích và xưởng nhỏ). Trong PartCraft, chọn {{ui:Xuất}} › {{ui:Chương trình laser…}}, rồi {{ui:Thêm đường bao từ DXF…}}: các đường bao và lỗ được nhập vào lớp CUT. Hình khai triển của chi tiết tôn (với đường uốn trên lớp BEND) cần nhân chính xác (exact kernel), phiên bản này chưa có. Cài đặt được lưu trong tệp chi tiết hoặc lắp ráp.

:::warning
Kiểm tra mọi cài đặt trên phế liệu trước, đeo kính bảo hộ phù hợp với máy laser, đóng nắp nếu có, và không bao giờ để máy laser đang chạy mà không có người trông coi.
Các số mà mỗi lớp bắt đầu với chỉ là giá trị giữ chỗ, không phải khuyến nghị cho bất kỳ vật liệu nào.
:::

## Chọn mỗi lớp làm gì

Mỗi lớp của bản vẽ là một hàng. {{ui:Việc làm}} đặt nó thành **Cắt**, **Khắc vạch**, **Khắc đường**, **Tô đầy hình**, **Khắc ảnh** hoặc **Không gửi**, với {{ui:Công suất %}}, {{ui:Tốc độ mm/phút}} và một số {{ui:Số lượt}}.

- **Tô đầy hình** đốt phần bên trong các hình khép kín thành các đường, cách nhau {{ui:Khoảng cách dòng}}, theo một {{ui:Góc}}, hai chiều hoặc một chiều, có quét vượt để đầu máy đạt tốc độ khi laser bật; đan chéo thêm một lượt thứ hai ở 90°. Hình có lỗ vẫn mở tại lỗ.
- **Khắc ảnh** biến ảnh thành các chấm (Floyd–Steinberg, Atkinson, theo thứ tự, hoặc đen trắng đơn giản với một ngưỡng) hoặc, với *Mức xám*, thành công suất thay đổi.
- Thứ tự: ảnh và tô đầy trước, rồi khắc đường, rồi khắc vạch, rồi cắt, để chi tiết đã cắt rời không bị xê dịch khi đang được khắc. Trong một lớp, đường đi chạy **từ trong ra ngoài** (lỗ trước tấm chứa nó), gần nhất tiếp theo.

## Xem trước, rồi lưu

Bản xem trước vẽ những gì đầu máy làm: các đường đang đốt bằng màu, các di chuyển nhanh bằng màu xám, và một khung màu xanh lá bao quanh mọi thứ sẽ bị đốt. Bên dưới là kích thước, chiều dài đường đốt và ước tính thời gian (không tính gia tốc; máy thật sẽ lâu hơn). {{ui:Lưu G-code…}} ghi G-code chế độ laser GRBL: `$32=1`, `M4` (hoặc `M3`) với các giá trị S, các lệnh di chuyển `G0` và `G1`, `M5` ở cuối. X0 Y0 là góc dưới bên trái của công việc, trừ khi bạn chọn gốc của bản vẽ: khi đó đặt điểm không gia công của máy tại đó. G-code theo chế độ laser đã được GRBL tài liệu hóa; nó chưa được thử trên một máy laser thật.

## Gửi từ trình duyệt

Trên Chrome và Edge, {{ui:Kết nối…}} yêu cầu bạn chọn cổng USB của laser. Không có gì kết nối hoặc gửi cho đến khi bạn nhấn một nút. Nhấn {{ui:Vạch khung công việc}} trước: đầu máy vạch khung hình hộp của công việc với laser **tắt** (hoặc ở công suất thấp bạn đặt cho tia chỉ dẫn) để bạn thấy nơi nó sẽ đốt. Chỉ khi đó {{ui:Gửi công việc}} mới được bật, và nó tắt lại nếu bạn thay đổi bất kỳ điều gì. {{ui:Tạm dừng}} giữ đầu máy lại, {{ui:Dừng}} cũng giữ đầu máy lại, đặt lại bộ điều khiển (laser tắt) và gửi `M5`. Khi thiếu Web Serial (Firefox, Safari, và CadCraft Studio, nơi chế độ xem web chưa có), hãy lưu G-code và gửi bằng chương trình riêng của máy laser.

## Chưa xây dựng

Định dạng của bộ điều khiển khác (Ruida, laser Marlin, tệp của nhà cung cấp), cầu giữ và đoạn dẫn vào, bù rãnh cắt (kerf), thư viện vật liệu, trục xoay và trục Z, căn chỉnh camera.
