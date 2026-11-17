---
title: Từ trường 2D (hướng dẫn)
summary: Tính từ trường của nam châm điện hoặc nam châm vĩnh cửu bằng thư viện phân tích: chạy các ví dụ, đọc mật độ từ thông, từ trường khe hở, điện cảm và lực hút, thay đổi thiết kế, và tự xây mô hình các cuộn dây, nam châm và sắt.
keywords: từ, từ tĩnh học, từ trường, mật độ từ thông, tesla, nam châm điện, solenoid, cuộn dây, vòng ampe, lõi sắt, khe hở không khí, độ từ thẩm, điện cảm, lực từ, từ trở, mạch từ, thế vectơ, điện từ học, phần tử hữu hạn, fem, động cơ, cơ cấu chấp hành, máy biến áp, magnetostatic2d, nam châm vĩnh cửu, neodymium, ndfeb, ferrite, từ dư, điểm làm việc, hồi phục, rò từ, nam châm giữ
from: 215f6601
---

Thư viện phân tích của PartCraft có thể tính từ trường của cuộn dây và sắt trong 2-D: mặt cắt của một vật dài và giống nhau dọc theo chiều dài của nó, chẳng hạn nam châm điện, lõi máy biến áp, thanh cái hoặc mặt cắt của động cơ. Hướng dẫn này chạy ví dụ nam châm điện của thư viện, đọc kết quả, thay đổi nó, chỉ cách mô hình hình dạng riêng của bạn, rồi thêm một nam châm vĩnh cửu.

Hướng dẫn dùng không gian làm việc Kịch bản và [thư viện phân tích](topic:craftscript-library). Bạn không cần biết ngôn ngữ CraftScript để làm theo; ví dụ cho biết mỗi dòng làm gì.

## Mô hình hóa những gì

Một lõi sắt hình chữ C, ngoài 100 × 80 mm và dày 20 mm, với một khe hở không khí 2 mm ở chân phải. Một cuộn dây 100 vòng mang dòng 10 A (1000 ampe-vòng) được quấn quanh chân trái. Mọi thứ dài theo hướng đi ra khỏi màn hình, nên đáp số tính **theo mét chiều sâu**: nhân với chiều sâu thực để có nam châm thực.

Hàm `magnetostatic2d` của thư viện giải thế vectơ từ trên lưới các ô vuông 1 mm trong một hộp không khí quanh nam châm, rồi tính mật độ từ thông **B** (tính bằng tesla) từ đó.

## Chạy ví dụ

1. Chọn **Kịch bản** trong hộp **Không gian làm việc** ở bên trái thanh công cụ.
2. Mở thẻ **Thư viện** của bảng kịch bản, rồi **Ví dụ** › **Nam châm điện: từ trường, khe hở, điện cảm**.
3. Nhấn {{ui:Mở (chỉ đọc)}}, rồi nhấn {{key:F5}}.

Sau một hai giây, vùng vẽ hiển thị mật độ từ thông, và bảng điều khiển in:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Biểu đồ bên dưới vùng vẽ là mật độ từ thông thẳng đứng B_y dọc theo đường giữa của lõi, từ trái sang phải: khoảng −0.55 T ở chân trái (từ thông chạy xuống), gần như không có gì trong cửa sổ, và +0.55 T ở chân phải và qua khe hở (từ thông quay lên). Cùng một từ thông đi qua sắt và khe hở, nên hai chân và khe hở cho giá trị gần như giống nhau.

## Đọc kết quả

- **Từ trường trong khe hở** là 0.543 T. Tính tay coi lõi là một mạch từ, B = μ0 N I / (g + l / μr), trong đó g là khe hở, l là chiều dài đường đi qua sắt và μr là độ từ thẩm tương đối của sắt; kết quả là 0.552 T. Từ trường thấp hơn tính tay một chút vì từ thông phình ra quanh khe hở (tràn từ) và một phần từ thông đi tắt qua cửa sổ (rò từ). Với khe hở nhỏ hơn hoặc lưới mịn hơn, hai giá trị sẽ gần nhau hơn.
- **Điện cảm** của cuộn 100 vòng là 0.154 H trên mỗi mét chiều sâu, tính từ năng lượng tích trữ trong từ trường. Công thức mạch cho giá trị nhỏ hơn (0.110 H/m) vì nó chỉ tính từ thông qua khe hở, không tính từ thông rò qua bên cạnh.
- **Lực hút** khép khe hở là B² w / (2 μ0) với một mặt khe hở rộng w: khoảng 2300 N trên mỗi mét, hoặc 117 N với nam châm sâu 50 mm.
- **Đỉnh** 1.97 T nằm ở các góc trong của cửa sổ, nơi từ thông rẽ gắt. Mô hình coi sắt là tuyến tính; thép kỹ thuật điện thực tế bão hòa ở khoảng 1.5 đến 2 T, nên hãy coi các giá trị trên mức đó là cảnh báo, không phải kết quả.

:::note
Các kiểm thử của chính thư viện chạy ví dụ này và kiểm tra từ trường khe hở với công thức mạch từ mỗi khi PartCraft thay đổi. Phương pháp, tài liệu tham khảo và các kiểm tra khác (một solenoid dài, một solenoid có lõi sắt) nằm trong phần đầu của `magnetostatic2d`: nhấn vào nó trong thư viện.
:::

## Thay đổi thiết kế

1. Nhấn {{ui:Tạo bản sao}} phía trên kịch bản chỉ đọc. Bản sao được lưu cùng chi tiết của bạn.
2. Đổi một giá trị gần đầu và nhấn lại {{key:F5}}. Thử:
   - `g = 0.001;` — khe hở giảm một nửa: từ trường khe hở gần như tăng gấp đôi, và lực hút cũng vậy (nó tỉ lệ với B²).
   - `mur = 200;` — lõi kém hơn: nhiều ampe-vòng hơn bị tiêu hao trong sắt.
   - `N = 200;` — gấp đôi số vòng: gấp đôi từ trường, gấp bốn lần điện cảm.
   - `h = 0.0005;` — lưới mịn hơn: đáp số gần hơn, thời gian khoảng gấp bốn lần.

Mỗi lần chạy thay thế vùng vẽ. Các biến do kịch bản tạo (như `Bgap`, `L`, `F`) vẫn nằm trong danh sách **Biến** để bạn tính toán riêng.

## Mô hình hình dạng riêng của bạn

Ví dụ xây dựng mọi thứ từ ba danh sách, mỗi ô lưới một giá trị, và bạn có thể tạo chúng cho bất kỳ hình nào vẽ bằng đường thẳng theo lưới:

- **Sắt ở đâu:** `iron` đúng với các ô nằm trong lõi. Ví dụ xây nó từ các hình chữ nhật: `frame & ~window & ~gap` nghĩa là "trong khung, không trong cửa sổ, không trong khe hở".
- **Độ từ thẩm:** `1 + (mur - 1) * iron` bằng 1 trong không khí và bằng `mur` trong sắt. Có thể gán giá trị riêng cho nhiều vật liệu theo cách tương tự.
- **Dòng điện:** `J` là mật độ dòng điện tính bằng ampe trên mét vuông, dương khi đi ra khỏi màn hình, âm khi đi vào. Một cuộn dây có hai cạnh mang dấu ngược nhau; ví dụ tính `J0` để một cạnh mang N I.

Sau đó `r = magnetostatic2d(m, permeability, J)` giải bài toán. `r.B` là mật độ từ thông trong mỗi ô (hai cột, x và y), `r.Bmag` là độ lớn của nó, `r.energy` là năng lượng tích trữ trên mỗi mét. `plot(x, y)` vẽ một đường.

Thư viện làm việc theo mét, còn khung nhìn theo milimét, nên nếu hiển thị từ trường đúng như nó vốn có thì sẽ bị vẽ nhỏ đi một nghìn lần. Ví dụ hiển thị nó trên một bản sao của lưới theo milimét (`mm = quadGrid(…)`, rồi `show(field(mm, …))`): hãy sao chép hai dòng đó.

Theo mặc định, biên của hộp giữ từ trường lại: không có từ thông nào thoát ra. Hãy làm hộp có kích thước ít nhất gấp hai hoặc ba lần nam châm để điều này không làm nén từ trường. Với nam châm đối xứng, bạn có thể mô hình một nửa của nó: phần đầu của `magnetostatic2d` cho biết điều kiện biên nào dùng trên đường đối xứng.

## Nam châm vĩnh cửu

Ví dụ thứ hai, **Ví dụ** › **Nam châm vĩnh cửu trong lõi sắt: điểm làm việc, rò từ, lực hút**, là cùng lõi nhưng bỏ cuộn dây và thay một lát 10 mm của chân trái bằng nam châm, từ hóa hướng lên. Chạy bằng {{key:F5}}. Kết quả in:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Điểm làm việc.** Nam châm được mô tả bằng **từ dư** Br (từ trường nó giữ lại khi bị sắt nối tắt: khoảng 1.2 T với nam châm NdFeB thiêu kết, 0.4 T với ferrite) và độ từ thẩm hồi phục của nó (khoảng 1.05 và 1.1). Mở một khe hở làm nó đi xuống đường hồi phục của mình: ở đây xuống 1.04 T, với H hướng ngược B bên trong nó.
- **Rò từ.** Tính tay không có rò từ cho 0.97 T trong khe hở; mô hình cho 0.68 T. Nam châm đẩy từ thông của nó bằng một lực mạnh trên đoạn ngắn, nên nhiều từ thông quay thẳng qua cửa sổ thay vì qua khe hở. Hệ số rò cho biết mức độ: ở đây là 1.53. Đặt `g = 0;` cho một cầu từ khép kín: khi đó nam châm làm việc trong vòng nửa phần trăm so với tính tay.
- **Nam châm trong mô hình riêng.** Cho `magnetostatic2d` các nam châm dưới dạng `struct('Br', Br)`, trong đó `Br` có một hàng cho mỗi ô lưới với từ dư theo x và y tính bằng tesla (bằng không ngoài nam châm), và gán cho các ô nam châm độ từ thẩm hồi phục của chúng trong danh sách độ từ thẩm:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T upward in the squares where mag is true
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Với nam châm từ hóa theo một góc, đặt `Br·cos(angle)` và `Br·sin(angle)` vào hai cột; với vòng nam châm từ hóa hướng ra ngoài, tính hướng của mỗi ô từ vị trí của nó. `r.H` cho cường độ từ trường H trong mỗi ô.

Mô hình giữ nam châm trên đường hồi phục thẳng của nó bất kể bị kích thích mạnh đến đâu. Một nam châm thực bị kích thích vượt qua điểm gấp của nó (do khe hở lớn, cuộn dây mạnh hoặc nhiệt) sẽ mất một phần độ mạnh vĩnh viễn; hãy kiểm tra điểm làm việc với đường cong của nhà sản xuất cho mác và nhiệt độ.

Các kiểm thử của thư viện so sánh nam châm với hai kết quả tính tay: một nam châm tròn trong không khí mở (bên trong nó, B = Br / (1 + μr)) và một nam châm được khép kín bằng cầu từ sắt (mạch từ), cả hai trong vòng 1 %.

## Những gì chưa làm được

- **Bão hòa.** Sắt là tuyến tính: gấp đôi dòng điện, gấp đôi từ trường, không giới hạn.
- **Khử từ.** Nam châm giữ trên đường hồi phục thẳng (xem trên).
- **Dòng xoáy** và **tổn hao** (tổn hao sắt, tổn hao đồng).
- **Chi tiết chuyển động và mô-men xoắn.** Không có rôto quay trong stato, không có mô-men xoắn theo góc.
- **Hình tròn.** Lưới được tạo từ các ô vuông bằng nhau, nên đường bao cong sẽ thành bậc.
- **3-D.** Mọi thứ là mặt cắt của một vật dài.

Thiết kế động cơ (rôto quay, mô-men xoắn và tổn hao trong 2-D) đang được xem xét cho một phiên bản sau. Xem [Chưa xây dựng](topic:not-built-yet).
