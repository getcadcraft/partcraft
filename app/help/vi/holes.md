---
title: Khoan lỗ và lỗ khoét rộng tại các điểm phác thảo
summary: Đặt điểm trong phác thảo trên một mặt, tạo lỗ đơn giản, khoét rộng, vát côn hoặc ren (ISO metric) tại mỗi điểm, đặt đường kính và độ sâu, và sửa các lỗ khoan sai hướng.
keywords: lỗ, trình hỗ trợ lỗ, khoan, ren được mô hình hóa, in 3D, khoét rộng, cbore, vát côn, csink, lỗ ren, mũi khoan ren, ren metric, M6, xuyên suốt, lỗ mù, lỗ bulông, điểm, tâm lỗ
from: 8e1eef83
---

{{ui:Lỗ}} khoan một lỗ tại mỗi điểm tự do của một phác thảo. Điểm tự do là điểm được tạo bằng công cụ Điểm, không phải đầu của đường thẳng hoặc tâm của đường tròn.

## Khoan lỗ trong một mặt

1. Nhấp mặt phẳng để khoan vào, rồi chọn {{ui:Phác thảo trên mặt này}}.
2. Nhấn {{key:P}} và nhấp nơi mỗi lỗ đặt. Ghi kích thước các điểm theo cạnh hoặc gốc nếu vị trí của chúng quan trọng (xem [Ràng buộc đầy đủ một phác thảo](topic:relations-dimensions)).
3. Chọn {{ui:Thoát}}.
4. Chọn {{ui:Lỗ}}.

Lỗ xuyên qua chi tiết, rộng 6 mm. Bảng bên phải hiển thị **Lỗ**: có bao nhiêu lỗ đã được tạo, "một lỗ cho mỗi điểm phác thảo".

**Một lỗ, nhanh:** nhấp mặt phẳng nơi lỗ đặt và chọn {{ui:Lỗ tại đây}} trong bảng bên phải. PartCraft thêm một phác thảo trên mặt với một điểm nơi bạn nhấp và một Lỗ xuyên qua chi tiết, trong một bước. Gõ một số ngay và nhấn {{key:Enter}} để nhập đường kính của nó. Để đặt chính xác, mở phác thảo mới và ghi kích thước điểm.

**Phác thảo nào được dùng:** phác thảo bạn vừa đóng hoặc phác thảo đã chọn; nếu không, phác thảo chưa dùng gần nhất có điểm tự do. Nếu không có: "Hãy tạo phác thảo với các điểm nơi lỗ đặt trước (Phác thảo trên mặt, rồi Điểm)."

## Cài đặt

| Cài đặt | Lựa chọn | Mặc định |
|---|---|---|
| **Loại** | Đơn giản, Khoét rộng, Vát côn, Ren (ISO metric) | Đơn giản |
| **Đường kính (mm)** | Đường kính của lỗ | 6 |
| **Xuyên suốt** | Đánh dấu: xuyên thẳng qua chi tiết. Bỏ đánh dấu để có lỗ mù | Đánh dấu |
| **Độ sâu (mm)** | Hiện khi bỏ chọn Xuyên suốt | 10 |
| **⌀ khoét rộng** | Hiện với Khoét rộng: đường kính của hốc rộng hơn | 11 |
| **Độ sâu khoét rộng** | Hiện với Khoét rộng | 6 |
| **Đảo chiều** | Khoan sang phía bên kia của mặt phẳng phác thảo | Tắt |

Lỗ khoan vào vật liệu, vuông góc với mặt phẳng phác thảo. Độ sâu của lỗ mù được đo từ mặt phẳng phác thảo; đáy của nó phẳng.

## Một lỗ bulông khoét rộng

1. Tạo các lỗ như trên.
2. Đặt **Loại** thành **Khoét rộng**.
3. Đặt **Đường kính (mm)** thành `6.6` (khe hở cho bulông M6), **⌀ khoét rộng** thành `11` và **Độ sâu khoét rộng** thành `6.5`.

Lỗ khoét rộng phải rộng hơn lỗ ("Lỗ khoét rộng phải rộng hơn lỗ.") và, với lỗ mù, nông hơn nó ("Lỗ khoét rộng phải nông hơn lỗ.").

## Một vòng bulông

Với các lỗ cách đều quanh một tâm, tạo **một** lỗ và tạo mẫu: chọn đặc trưng Lỗ, rồi chọn {{ui:Tròn}} (xem [Đặc trưng mẫu lặp và đối xứng](topic:patterns-mirror)). Mẫu theo khi bạn thay đổi kích thước lỗ.

## Khi lỗ đi sai hướng

- "Không có gì để khoan ở phía đó của phác thảo. Hãy thử đảo chiều." Phác thảo nằm ở phía xa của vật liệu. Đánh dấu **Đảo chiều**.
- "Đặt điểm phác thảo nơi lỗ đặt (công cụ Điểm), rồi tạo lỗ." Phác thảo không có điểm tự do. Đầu đường thẳng và tâm đường tròn không được tính.
- "Chưa có gì để khoan." Lỗ cần một khối đặc. Hãy tạo một phần nhô trước.

## Lỗ trong lắp ráp

Mỗi lỗ có một trục. Trong một lắp ráp, **Căn giữa theo** có thể đặt một khớp lên trục của lỗ, được liệt kê là "Lỗ1, lỗ 2", để một chi tiết chốt hoặc bulông thẳng hàng với nó. Xem [Xây dựng lắp ráp](topic:build-assembly).

## Lỗ vát côn

Đặt **Loại** thành **Vát côn**, rồi **⌀ vát côn** (tại bề mặt) và **Góc vát côn**: 90° (bulông đầu phẳng ISO metric) hoặc 82° (bulông inch). Lấy đường kính vát côn từ dữ liệu của nhà sản xuất vít (hơi lớn hơn đường kính đầu vít). Mặt của hình nón được đặt tên là "vát côn" trong các bảng.

## Lỗ ren

Đặt **Loại** thành **Ren (ISO metric)** và chọn **Ren**, từ M2 đến M24 bước thô. Lỗ được khoan ở kích thước mũi khoan ren trong bảng dưới đây (đường kính danh định trừ bước, theo dãy mũi khoan, như ISO 2306 liệt kê cho ren 6H); hộp **Đường kính (mm)** không được dùng. Với lỗ mù, **Độ sâu ren (mm)** đặt ren đi sâu bao nhiêu.

| Ren | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bước | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| ⌀ mũi khoan ren | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Ban đầu ren chỉ là **trang trí**: mô hình có lỗ đã khoan, khung nhìn vẽ đường kính chính của ren bằng các vòng tròn nét đứt, và tờ bản vẽ mang chú thích dưới dạng ghi chú, như "4× M8×1.25 - 6H, ren xuyên suốt". STEP chỉ xuất lỗ đã khoan.

Đánh dấu **Đã mô hình hóa** để cắt ren xoắn thật vào lỗ, phục vụ in 3D. **Khe hở (mm)** làm nó lớn hơn bấy nhiêu theo mọi phía, để bulông in vừa khít: 0.1 đến 0.2 mm phù hợp với hầu hết máy in. Khi đó chú thích kết thúc bằng "(đã mô hình hóa)". Xem [Ren trên trục và lỗ, vẽ hoặc mô hình hóa](topic:threads), cũng đặt ren lên trục.

:::note
Lỗ khoan đối (counterdrilled), ren inch và ren ống chưa được xây dựng.
:::
