---
title: Trường: hình dạng dưới dạng khoảng cách
summary: Trường là gì (một hình dạng được lưu dưới dạng khoảng cách đến bề mặt của nó), cách dựng một trường từ các nguyên thủy, phép toán boolean, mạng lattice và bề mặt cực tiểu trong một kịch bản, cách nó trở thành một thân, và tại sao cùng một kịch bản luôn cho cùng các byte.
keywords: trường, khoảng cách có dấu, sdf, voxel, gyroid, tpms, lattice, boolean, offset, shell, blend, dual contouring, xác định, kín, đa tạp, brick
from: faab7480
---

Một **trường** mô tả một hình dạng bằng khoảng cách từ bất kỳ điểm nào đến bề mặt của nó: âm bên trong, bằng 0 trên bề mặt, dương bên ngoài. Một hình cầu bán kính 5 là "khoảng cách đến tâm trừ đi 5". Kết hợp các hình dạng là phép tính số học trên khoảng cách: hợp là số nhỏ hơn trong hai số, giao là số lớn hơn, và trừ một hình khỏi hình khác là số lớn hơn giữa hình thứ nhất và số âm của hình thứ hai. Làm một hình lớn thêm 1 mm là trừ 1 khỏi khoảng cách; một thành rỗng là khoảng cách, được gấp lại.

Đó là lý do trường phù hợp với mạng lattice, kênh và thành có độ dày thay đổi dần: bề mặt của gyroid là "tổng sin bằng không", và một thành dày dần từ 1 đến 3 mm trên chi tiết là một con số thay đổi trên khắp chi tiết.

## Từ trường đến thân

`to_body(field, h)` lấy mẫu trường trên một lưới điểm cách nhau `h` milimét, chỉ giữ các điểm gần bề mặt (một lưới thưa gồm các khối 8 × 8 × 8), và dựng bề mặt bằng **dual contouring**: một đỉnh cho mỗi ô bề mặt, đặt tại nơi các mặt phẳng của bề mặt gặp nhau, nên một cạnh sắc vẫn sắc trong phạm vi một voxel. Bề mặt là kín và mỗi cạnh được chia sẻ bởi đúng hai tam giác; báo cáo nói như vậy. Một đặc trưng mỏng hơn khoảng ba voxel có thể bị thắt lại, và khi đó báo cáo nói thân không phải là khối đặc kín, thay vì che giấu điều đó.

Kích thước voxel là độ chính xác: thể tích của một hình cầu rộng 25 voxel sai lệch trong vài phần trăm của một phần trăm; một thành chỉ chính xác bằng các voxel của nó. Lưới càng thô thì càng nhanh.

## Luôn cùng các byte

Một trường không có đồng hồ và không có số ngẫu nhiên. Sin và cosin của gyroid, và mọi hàm mũ, logarit và lũy thừa trong thư viện, được tính từ phép số học thuần túy để Node, Chrome, Firefox và Safari cho cùng các bit; lưới được duyệt theo thứ tự cố định, nên cùng một kịch bản với cùng đầu vào cho ra các lưới và dữ liệu giống hệt nhau từng byte, trên mọi máy tính và qua bất kỳ số luồng worker nào. Điều này đã được kiểm thử, kể cả trình duyệt so với Node.

## Bước tiếp theo

[Viết một bộ sinh](topic:write-a-generator) dựng chi tiết bằng trường; [Thư viện kỹ thuật](topic:engineering-library) tính kích thước cho nó.
