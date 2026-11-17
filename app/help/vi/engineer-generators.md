---
title: Chi tiết từ vật lý: bộ sinh
summary: Không gian làm việc Engineer và đặc trưng Thân được tạo sinh: chọn một bộ sinh, đặt các đầu vào (lưu lượng, áp suất, nhiệt độ, vật liệu, máy in), và nhận một chi tiết có kích thước theo công thức sách giáo khoa, kèm bảng dữ liệu, kiểm tra chế tạo và các tệp cho công cụ phân tích. Cùng đầu vào luôn cho cùng một chi tiết.
keywords: engineer, bộ sinh, thân được tạo sinh, vật lý, quy tắc, bộ trao đổi nhiệt, cụm ống góp, vòi phun, mạng lưới, gyroid, bảng dữ liệu, đầu vào, xác định, cùng đầu vào cùng chi tiết, kiểm tra chế tạo, in 3D, nền bột
from: 5a387dc0
---

**Bộ sinh** là một kịch bản xác định kích thước chi tiết từ yêu cầu của bạn và dựng nó. Bộ sinh bộ trao đổi nhiệt nhận nhiệt lượng cần truyền, hai dòng và nhiệt độ của chúng, áp suất và vật liệu; nó tính lõi cần lớn đến mức nào và thành dày bao nhiêu, dựng nó, và cho bạn biết các con số đã dùng cùng nguồn gốc của từng số. Thay đổi một đầu vào và chi tiết sẽ theo đó thay đổi.

Kết quả là một thân thông thường trong chi tiết: nó nằm trong danh sách đặc trưng, có thể in, có thể xuất. Bản thân bộ sinh cũng được lưu trong chi tiết, nên tệp mở được trên mọi máy tính mà không cần cài bộ sinh, và **mở chi tiết không bao giờ chạy kịch bản**.

## Tạo một thân

1. Chọn không gian làm việc {{ui:Engineer}} trong bộ chuyển đổi.
2. Chọn một bộ sinh trong danh sách (các bộ đi kèm PartCraft, rồi đến bất kỳ bộ nào bạn mở từ tệp) và bấm {{ui:Mới}}.
3. Kịch bản chạy. Khi xong, thân xuất hiện trong khung nhìn và bảng hiển thị các đầu vào, **bảng dữ liệu** và **kiểm tra** của nó.

Bạn cũng có thể thêm một thân từ Design: {{ui:Đặc trưng}} › {{ui:Thêm}} › {{ui:Thân được tạo sinh}}.

## Thay đổi

Thay đổi bất kỳ đầu vào nào và thân sẽ được tạo lại ngay sau khi bạn ngừng nhập. Bảng cho biết điều nào trong ba điều sau là đúng:

- **Đã cập nhật**: thân khớp với kịch bản và các đầu vào của nó.
- **Đầu vào đã thay đổi**: thân trong chi tiết được tạo từ đầu vào trước đó; nó đang được tạo lại, hoặc nhấn {{ui:Chạy}}.
- **Chưa chạy** hoặc **Lần chạy trước bị lỗi**: lỗi kịch bản được hiển thị cùng dòng của nó.

{{ui:Dừng}} kết thúc một lần chạy quá lâu. Hoàn tác lùi từng bước một: một lần chạy là một bước, một đầu vào là một bước.

## Bảng dữ liệu

Mọi con số bộ sinh tính được đều được liệt kê cùng **đơn vị** và **nguồn gốc** (một phương trình sách giáo khoa, một tiêu chuẩn, một bảng dữ liệu). Không có hằng số ẩn nào. Bảng là một phần của tệp, nên nó giống nhau trên máy tính khác. [Xuất dữ liệu](topic:data-out) hướng dẫn cách lưu dưới dạng JSON hoặc PDF.

## Kiểm tra

Bộ sinh có thể kiểm tra chính chi tiết của nó theo một quy trình in: thành và khe mỏng hơn mức quy trình chịu được, các mảnh rời, các khoang giữ bột hoặc nhựa, lỗ quá hẹp để thoát, và phần nhô ra cần đỡ. Kết quả nằm trong bảng và trong danh sách {{ui:Vấn đề}} (nút ⚠), và chúng được lưu cùng chi tiết.

Các số liệu quy trình là những số tròn mà các sổ tay thiết kế công khai đưa ra cho quy trình nói chung (FDM, SLA, SLS, nền bột kim loại). Chúng **không phải thông số máy của bạn**: hãy thay bằng số liệu của xưởng bạn trước khi tin vào một kiểm tra. Kiểm tra làm việc trên lưới voxel, nên độ chính xác khoảng một voxel: một thành chỉ được báo khi mỏng hơn giới hạn quá một voxel.

## Bộ sinh đi kèm

| Bộ sinh | Tạo ra gì |
|---|---|
| Khối gyroid | Một khối đặc bằng tấm gyroid, Schwarz P hoặc kim cương: mạng lưới đơn giản nhất |
| Bộ trao đổi nhiệt gyroid | Lõi của bộ trao đổi hai lưu chất, kích thước theo công suất bằng phương pháp hiệu suất-NTU, thành theo áp suất; có thể kiểm tra độ sụt áp bằng nghiên cứu dòng chảy trên một ô |
| Cụm ống góp phân phối | Một ống góp và các nhánh, mỗi ống được định kích thước theo lưu lượng nó mang |
| Dầm mạng lưới phân cấp | Một mạng lưới có thành dày lên ở nơi tối ưu hóa tô-pô cho biết cần vật liệu |

Tất cả đều là ước tính ban đầu dựa trên công thức sách giáo khoa. [Thư viện kỹ thuật](topic:engineering-library) liệt kê các công thức và giới hạn của chúng. Chạy Simulation, Thermal hoặc Flow trên kết quả trước khi bạn tin cậy.

## Kiểm soát xuất khẩu

Bộ sinh và bảng dữ liệu của Engineer có thông báo về kiểm soát xuất khẩu và trừng phạt. Đọc tại [Engineer và kiểm soát xuất khẩu](topic:engineer-export-notice); thông báo này cũng nằm ở cuối mọi bảng dữ liệu.

## Chưa xây dựng

- Ống góp, cổng và phụ kiện trên lõi bộ trao đổi nhiệt: đây chỉ là lõi.
- Đường cong nhiệt độ cho độ bền vật liệu: vật liệu ở nhiệt độ phòng.
- Tổn thất ở tê và việc chia lưu lượng giữa các đầu ra trong cụm ống góp.
- Thêm bộ sinh từ thư mục tiện ích bổ sung chỉ bằng một cú bấm; mở tệp sẽ thêm một bộ vào trình duyệt này.
- Bộ sinh cho các ứng dụng khác.
