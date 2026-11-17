---
title: Thư viện kỹ thuật
summary: Công thức sách giáo khoa dưới dạng kịch bản dễ đọc, theo đơn vị SI, mọi kết quả đều có nguồn: dòng chảy trong ống và kênh, truyền nhiệt và bộ trao đổi nhiệt, chi tiết chịu áp lực, động lực học khí, tính chất nước và không khí, vật liệu, và các đơn vị được kiểm tra. Mỗi công cụ dùng để làm gì và dừng ở đâu.
keywords: kỹ thuật, thư viện, đơn vị, Darcy-Weisbach, Colebrook, Reynolds, hệ số ma sát, Dittus-Boelter, Gnielinski, NTU, hiệu suất, LMTD, cánh tản nhiệt, Barlow, Lamé, vòi phun, đẳng entropy, Mach, dòng nghẹt, nước, không khí, tính chất, vật liệu, nguồn
from: 786ef967
---

Thư viện kỹ thuật là một tập kịch bản trong thư viện của không gian làm việc Script (`craftlib/eng`). Mỗi kịch bản là một hàm bạn có thể đọc từ đầu đến cuối, với phần đầu ghi **phương pháp**, **đơn vị**, **giới hạn**, **tài liệu tham khảo** và một **kiểm tra** với một con số đã tính sẵn. Chúng dùng đơn vị SI xuyên suốt và trả về các đại lượng mang **đơn vị** và **nguồn**, nên bảng dữ liệu có thể in nguồn gốc của mọi con số.

## Đơn vị được kiểm tra

`to_si(10, 'bar', 'Pa')` đổi một giá trị và từ chối đơn vị đo đại lượng khác (một chiều dài khi cần áp suất). `from_si`, `unit_convert(1, 'bar', 'psi')` và `unit_kind('W/(m K)')` ("độ dẫn nhiệt") hoạt động tương tự. `temp_k(25, 'C')` và `temp_from_k` đổi nhiệt độ, vốn có độ lệch.

## Tính chất

- `fluid('water', T)` và `fluid('air', T, p)`: khối lượng riêng, độ nhớt, độ dẫn, nhiệt dung riêng, số Prandtl. Nước từ 0 đến 100 °C, không khí từ 250 đến 600 K; ngoài khoảng đó thư viện dừng lại thay vì ngoại suy.
- `material('ss304')`: mô đun Young, hệ số Poisson, khối lượng riêng, giới hạn chảy, độ dẫn, nhiệt dung riêng, giãn nở: giá trị ở nhiệt độ phòng lấy từ cùng bảng dữ liệu với Simulation. Thiết kế thực tế dùng số liệu có chứng nhận của nhà cung cấp. Đường cong nhiệt độ chưa xây dựng.

## Dòng chảy trong ống và kênh

`reynolds`, `hydraulic_diameter`, `friction_factor` (dòng tầng trước, sau đó phương trình Colebrook cho dòng rối; khoảng 2300 đến 4000 không có công thức đáng tin cậy và thư viện nêu rõ điều đó), `darcy_weisbach`, `minor_loss`, `pipe_flow` (ống tròn, tất cả cùng lúc) và `rect_channel` (ống chữ nhật dòng tầng theo công thức khớp của Shah và London).

## Truyền nhiệt

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (chọn dòng tầng hoặc dòng rối và nêu tên tương quan), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` và `ntu_for` (các quan hệ hiệu suất-NTU cho dòng ngược chiều, dòng song song, ống vỏ, dòng chéo và một dòng đơn có nhiệt độ thay đổi) và `hx_size` (kích thước UA mà một công suất yêu cầu; nó cho biết mức khả thi tối đa khi không đáp ứng được công suất).

## Chi tiết chịu áp lực

`allowable_stress` (giới hạn chảy chia cho hệ số an toàn), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, theo tiêu chí ứng suất vòng hoặc ứng suất cắt) và `wall_sphere`. Đây là biên an toàn theo sách giáo khoa, **không phải tính toán theo quy chuẩn bình chịu áp lực**: không có dư ăn mòn, hệ số mối nối hay hệ số quy chuẩn.

## Động lực học khí

`isentropic` (các tỷ số tại một số Mach), `mach_from_area`, `choked_flow`, `throat_area` và `exit_mach`, cho khí lý tưởng không ma sát, không trao đổi nhiệt hay sóng xung kích.

## Kiểm tra kết quả

`check_stress`, `check_thermal` và `check_flow` chạy các bộ giải ứng suất, dẫn nhiệt và dòng chảy riêng của PartCraft trên một chi tiết được tạo từ kịch bản, rồi đọc lại ứng suất và chuyển vị lớn nhất, nhiệt độ và dòng nhiệt, cùng độ thấm của mạng kênh. Chúng không thay đổi gì trong các bộ giải. Các kiểm tra ứng suất và nhiệt độ dùng voxel, nên một mặt cong là bậc thang và ứng suất tại góc trong sắc hoặc dưới tải tập trung phụ thuộc vào kích thước voxel.
