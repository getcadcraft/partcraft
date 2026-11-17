---
title: Thư viện phân tích
summary: Thư viện các kịch bản phân tích dễ đọc trong không gian làm việc Kịch bản: nội dung từng nhóm, mở một hàm ở chế độ chỉ đọc, phần đầu với phương pháp, tài liệu tham khảo và kiểm tra, tạo bản sao của riêng bạn, và cách bản sao thay thế hàm thư viện.
keywords: thư viện, craftlib, phân tích, nam châm điện, tĩnh, dao động, nhiệt, tối ưu hóa cấu trúc, top88, SIMP, điện từ, tĩnh điện, từ tĩnh, chất lỏng, lattice Boltzmann, LBM, lưới, voxel, tứ diện, tham khảo, kiểm tra, xác minh, sao chép, shadow
from: bf993859
---

Thư viện phân tích là tập hợp các kịch bản, mỗi kịch bản là một hàm bạn có thể đọc từ đầu đến cuối: cách ma trận độ cứng được lắp ráp, điều kiện biên đặt ở đâu, bộ giải nào chạy, kết quả được tính ra sao. Không có gì trong đó bị giấu trong hộp đen; chỉ các vòng lặp bên trong cần tốc độ cao (ma trận phần tử, bộ giải thưa, tạo lưới) là được tích hợp sẵn.

## Bắt đầu với một ví dụ

Nhóm **Ví dụ** có năm kịch bản ngắn sử dụng thư viện từ đầu đến cuối. Nhấp vào một kịch bản, nhấn {{ui:Mở (chỉ đọc)}}, rồi {{key:F5}}: mỗi kịch bản xóa khung nhìn, hiển thị một kết quả trên vùng vẽ và một biểu đồ trong các khung phụ.

| Ví dụ | Nó cho thấy |
|---|---|
| Ứng suất dầm công-xôn | Một thanh thép 100 × 10 × 10 mm chịu tải 100 N ở đầu mút: ứng suất von Mises trên thanh đã biến dạng, và độ võng đầu mút so với lý thuyết dầm ở bốn kích thước phần tử (được vẽ biểu đồ) |
| Tối ưu hóa cấu trúc dầm MBB | Bài toán tối ưu hóa cấu trúc 60 × 20 kinh điển: thiết kế hình thành dần, độ tuân thủ (compliance) giảm, bố cục cuối cùng (94 lần lặp, độ tuân thủ 203.19) |
| Trường tụ điện | Hai bản cực rộng 4 mm, cách nhau 1 mm: điện thế và trường, điện dung có hiệu ứng biên so với giá trị lý tưởng và công thức Palmer |
| Dòng trong kênh | Dòng Lattice Boltzmann qua một trụ trong kênh: trường vận tốc và lịch sử hội tụ |
| Nam châm điện | Lõi sắt hình chữ C có khe hở không khí và cuộn dây: mật độ từ thông, trường trong khe hở so với công thức mạch từ, điện cảm và lực hút qua khe hở. Được hướng dẫn trong [Trường từ 2-D](topic:magnetic-fields-2d) |
| Nam châm vĩnh cửu | Cùng lõi nhưng dùng nam châm vĩnh cửu thay cho cuộn dây: điểm làm việc của nam châm, trường trong khe hở so với mạch từ, bao nhiêu từ thông bị rò, lực hút. Trong [Trường từ 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Các nhóm

| Nhóm | Hàm | Chúng làm gì |
|---|---|---|
| Tạo lưới | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Hộp và trụ dưới dạng lục diện, khối lập phương hoặc tứ diện; khối lập phương hoặc tứ diện của mọi mô hình (chi tiết, một thân, tệp STL đã tải); thể tích và chất lượng phần tử; chọn nút trên một mặt phẳng hoặc một mặt |
| Ứng suất tĩnh | `static_voxel`, `static_tet` | Ứng suất tĩnh tuyến tính trên khối lập phương hoặc trên tứ diện 10 nút: chuyển vị, ứng suất, von Mises, phản lực |
| Khung | `frame3d` | Khung 3D gồm dầm, cột và thanh giằng theo phương pháp độ cứng trực tiếp: giải phóng đầu thanh, gối đỡ và lò xo, tải dọc theo thanh; chuyển vị, phản lực, lực đầu thanh. {{ui:Xuất dạng CraftScript}} của DetailCraft và BimCraft ghi toàn bộ mô hình cho nó. Là công cụ hỗ trợ phân tích, không phải kiểm tra theo tiêu chuẩn |
| Dao động | `modal_tet` | Tần số riêng và dạng dao động riêng |
| Nhiệt | `heat_steady`, `heat_transient`, `heat_system` | Dẫn nhiệt ổn định và không ổn định với nhiệt độ cố định, đầu vào nhiệt, phát sinh nhiệt, thông lượng và đối lưu |
| Tối ưu hóa cấu trúc | `top88`, `top99`, `topopt3d` | Các mã 2-D 88 và 99 dòng đã công bố, và cùng phương pháp trong 3-D trên khối lập phương |
| Điện từ | `poisson2d`, `magnetostatic2d` | Tĩnh điện 2-D (điện thế, trường, điện dung, điện tích) và từ tĩnh (thế vectơ, mật độ từ thông, nam châm vĩnh cửu) |
| Dòng chất lỏng | `lbm2d`, `lbm3d` | Dòng Lattice Boltzmann: 2-D được viết trong kịch bản, 3-D trên nhân dòng chảy riêng của PartCraft |

Phần đầu mỗi hàm cho biết các đối số chính xác. Đơn vị là đơn vị của các nghiên cứu trong PartCraft trừ khi phần đầu ghi khác: mm, N, MPa, tấn trên mm³ cho khối lượng riêng, W và K cho nhiệt. Các hàm điện từ và lattice Boltzmann làm việc với bất kỳ đơn vị nhất quán nào; phần đầu của chúng ghi cách dùng.

## Cách thư viện được kiểm tra

Phần đầu mỗi hàm kết thúc bằng một **kiểm tra**: một trường hợp nhỏ có đáp số đã biết. Các bài kiểm thử của PartCraft chạy tất cả, và khi PartCraft có nghiên cứu riêng cho cùng việc, kết quả của kịch bản được so với nghiên cứu đó trên cùng lưới:

- độ võng đầu mút của dầm công-xôn so với lý thuyết dầm (trong vòng 0.2 % với khối lập phương, 0.05 % với tứ diện), và so với các bộ giải của không gian làm việc **Mô phỏng** trên cùng lưới (giống nhau đến nhiều chữ số);
- tần số đầu tiên của dầm công-xôn so với lý thuyết dầm (thấp hơn 0.24 %, như mong đợi với dầm ngắn) và so với bộ giải dao động của **Mô phỏng**;
- nhiệt: một tường phẳng có nhiệt chính xác, một vật nhỏ nguội theo công thức nhiệt dung tập trung, nhiệt độ của một tấm dần tắt như lý thuyết;
- tối ưu hóa cấu trúc: `top88` tái tạo 94 lần lặp và độ tuân thủ 203.1925 của bài báo (và 218.8032 với bộ lọc mật độ); `topopt3d` kết thúc ở cùng độ tuân thủ như không gian làm việc **Tạo sinh (Generative)** với cùng thiết lập;
- điện dung của tụ điện và trường của solenoid dài so với giá trị sách giáo khoa, trường khe hở của nam châm điện so với công thức mạch từ, và nam châm vĩnh cửu so với nam châm tròn trong không khí và nam châm khép kín bằng một miếng khép mạch bằng sắt;
- dòng lattice Boltzmann so với profile parabol chính xác.

## Đọc một hàm

1. Mở tab **Thư viện** của bảng kịch bản.
2. Nhấp vào một hàm. Phần đầu hiển thị: nó tính gì, phương pháp, đơn vị, giả thiết và giới hạn, **tài liệu tham khảo** (sách hoặc bài báo, kèm số công thức) và một **kiểm tra** — một trường hợp nhỏ có đáp số đã biết mà các kiểm thử của PartCraft chạy.
3. {{ui:Mở (chỉ đọc)}} mở toàn bộ kịch bản trong một thẻ có viền đứt. Bạn có thể chạy, chọn và chạy các phần của nó, nhưng không thể thay đổi.

## Thay đổi một hàm

Nhấn {{ui:Tạo bản sao}} (hoặc **Tạo bản sao để chỉnh sửa** phía trên một thẻ chỉ đọc). Bản sao là một kịch bản trong chi tiết của bạn với cùng tên, nên nó được lưu cùng chi tiết, và **mọi lệnh gọi tới hàm đó giờ dùng bản sao của bạn** — trình chỉnh sửa cho biết điều này phía trên kịch bản. Đổi tên bản sao để giữ cả hai.

## Dùng một hàm

Gọi một hàm thư viện từ bất kỳ kịch bản nào bằng tên, giống như hàm tích hợp:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Kết quả trả về như giá trị trong không gian làm việc; biểu đồ và trường mà nó hiển thị xuất hiện trong khung nhìn và các khung phụ.

Phân tích tĩnh của chi tiết đang mở, chẳng hạn, mất vài dòng:

```
v = voxel_mesh(part(), 2);                   % khối lập phương 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % giữ đáy
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N hướng xuống trên đỉnh
r = static_voxel(v, 210000, 0.3, bc);       % thép
```

`r` chứa các chuyển vị, ứng suất và phản lực; ứng suất von Mises được vẽ trên chi tiết đã biến dạng. Với chi tiết cong, dùng `tet_mesh` và `static_tet`, chúng cũng có thể tải và giữ cả các mặt (`face_nodes`).

:::note
Các hàm của thư viện được viết bằng CraftScript, và một kịch bản Lua gọi chúng qua `cs` như các hàm tích hợp: `cs.static_tet(t, 200000, 0.3, bc)` (xem [Kịch bản bằng Lua](topic:craftscript-lua)). Mỗi hàm giải một vật liệu và một trường hợp tải; phần đầu liệt kê những gì chưa được bao gồm.
:::
