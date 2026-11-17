---
title: Vẽ bản vẽ với hình chiếu, mặt cắt và GD&T
summary: Mở tờ bản vẽ, thêm mặt cắt và hình chiếu chi tiết, đặt mốc chuẩn, khung điều khiển đặc trưng và ký hiệu độ nhám bề mặt, chọn cỡ tờ, điền khung tên và khung sửa đổi, rồi xuất tờ thành PDF.
keywords: bảng lỗ, biểu đồ lỗ, vị trí lỗ, nhãn, bản vẽ, bản vẽ 2D, tờ, cỡ tờ, a4, a3, a2, a1, a0, ansi, khung tên, sửa đổi, khung sửa đổi, số bản vẽ, vật liệu, pdf, hình chiếu, chiếu thẳng góc, góc chiếu thứ ba, trục đo, mặt cắt, hình chiếu chi tiết, gd&t, mốc chuẩn, khung điều khiển đặc trưng, dung sai, độ phẳng, độ nhám bề mặt, độ nhám, khung tên, in
from: 39e944c0
---

PartCraft tạo một tờ bản vẽ từ chi tiết: hình chiếu đứng, hình chiếu bằng và hình chiếu cạnh theo góc chiếu thứ ba, một hình chiếu trục đo, kích thước tổng thể và khung tên trên tờ từ A4 đến A0 hoặc ANSI A đến E. Ngoài ra, bạn có thể thêm mặt cắt, hình chiếu chi tiết và ký hiệu GD&T. Tờ bản vẽ được cập nhật khi chi tiết thay đổi, và các cài đặt của nó được lưu trong tệp chi tiết.

## Mở tờ bản vẽ

1. Dựng chi tiết. (Khi chưa dựng gì: "Dựng khối đặc trước, rồi tạo bản vẽ của nó.")
2. Chọn {{ui:Bản vẽ}} trên thanh công cụ.

Khung nhìn 3D được thay bằng tờ bản vẽ. Thanh công cụ hiển thị {{ui:Mốc chuẩn}}, {{ui:Khung}}, {{ui:Hoàn thiện}}, {{ui:Chi tiết}}, {{ui:PDF}} và {{ui:Quay lại}}, còn bảng bên phải có tiêu đề **Bản vẽ**. Thanh trạng thái cho biết các hình chiếu được tạo như thế nào: "Bản vẽ (đường cong được vẽ dưới dạng facet). Mốc chuẩn, Khung và Hoàn thiện đặt GD&T lên một hình chiếu; bảng đặt mặt cắt và hình chiếu chi tiết." Các hình chiếu được vẽ từ các mặt lưới của bộ nhân lưới, nên cạnh tròn là các đoạn thẳng ngắn; cung tròn thật cần một bộ nhân chính xác, mà phiên bản này chưa có.

Di chuyển quanh tờ: lăn bánh xe để thu phóng, kéo bằng nút chuột phải hoặc giữa để di chuyển khung nhìn, nhấn {{key:F}} để vừa khung tờ. Khi tờ đang được chọn, {{key:Plus}} và {{key:Minus}} thu phóng, còn {{key:Shift}} cùng các phím mũi tên để di chuyển.

Chọn {{ui:Quay lại}}, {{ui:Quay lại mô hình}} hoặc nhấn {{key:Esc}} (khi chưa chọn gì và không có công cụ nào đang hoạt động) để quay về mô hình 3D.

## Nội dung trên tờ

- **Tờ bạn chọn**, nằm ngang (A3 nếu bạn không chọn khác), có khung viền và **khung tên**: tiêu đề, công ty, số bản vẽ, sửa đổi, vật liệu, vẽ / kiểm tra / phê duyệt bởi, ngày, tỷ lệ, cỡ tờ, "Đơn vị: milimét · Chiếu góc thứ ba", và các hình chiếu là chính xác hay dạng lưới (faceted).
- Một **khung sửa đổi** ở góc trên bên phải khi bạn thêm sửa đổi.
- **Hình chiếu đứng, bằng và cạnh**: hình chiếu bằng nằm trên hình chiếu đứng, hình chiếu cạnh nằm bên phải. Cạnh khuất vẽ nét đứt.
- Một **hình chiếu trục đo** khi còn chỗ.
- **Kích thước tổng thể**: chiều rộng và chiều cao trên hình chiếu đứng, chiều sâu trên hình chiếu bằng.
- Một **tỷ lệ** chung cho các hình chiếu chính, lấy từ dãy ISO (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), được chọn sao cho vừa vặn.

## Chọn cỡ tờ

Trên tờ bản vẽ, khi chưa chọn gì, chọn {{ui:Tờ}} trong bảng bên phải: **A4, A3, A2, A1, A0** (ISO 216) hoặc **ANSI A, B, C, D, E** (11 × 8.5 đến 44 × 34 in). Các hình chiếu được bố trí lại ở tỷ lệ ISO lớn nhất vừa vặn, nên tờ lớn hơn có thể thể hiện chi tiết lớn hơn.

## Điền khung tên

Các ô **Khung tên** trong bảng bên phải hiển thị trực tiếp lên tờ: {{ui:Tiêu đề}}, {{ui:Số bản vẽ}}, {{ui:Sửa đổi}}, {{ui:Công ty}}, {{ui:Vẽ bởi}}, {{ui:Kiểm tra bởi}}, {{ui:Phê duyệt bởi}}, {{ui:Ngày}} (năm-tháng-ngày), {{ui:Dung sai chung}} và {{ui:Hoàn thiện}} (hai mục cuối được in ngay phía trên khung tên). Nhập vào một ô rồi nhấn {{key:Enter}} hoặc bấm ra ngoài. Ô trống sẽ để trống ô tương ứng, ngoại trừ:

- **Tiêu đề** hiển thị tên chi tiết cho đến khi bạn nhập tiêu đề.
- **Ngày** hiển thị ngày hôm nay cho đến khi bạn nhập.
- **Sửa đổi** hiển thị sửa đổi mới nhất trong danh sách cho đến khi bạn nhập.

**Vật liệu** lấy từ chi tiết: bấm vào khoảng trống trong mô hình, rồi chọn {{ui:Vật liệu}} trong bảng Part. Cùng vật liệu này cung cấp khối lượng riêng cho các thuộc tính khối lượng của Measure.

## Thêm sửa đổi

Dưới **Sửa đổi**, bấm {{ui:Thêm sửa đổi}}. Mỗi hàng mới nhận chữ cái kế tiếp (A, B, C …, sau Z là AA) và ngày hôm nay. Nhập nội dung đã thay đổi và người thực hiện thay đổi. {{ui:Xóa}} gỡ một hàng. Khung sửa đổi ở góc trên bên phải tờ liệt kê chúng, cũ nhất trước, tối đa 20 hàng.

Cỡ tờ, khung tên, sửa đổi và vật liệu được lưu trong tệp chi tiết, và mỗi thay đổi là một bước của {{ui:Hoàn tác}}.

## Thêm hình chiếu mặt cắt

Chi tiết được cắt bởi một mặt phẳng và mặt cắt được tô bóng. Cũng như các hình chiếu khác, mặt cắt được vẽ từ các facet, nên cạnh tròn là các đoạn thẳng ngắn.

1. Trong bảng bên phải, đặt **Mặt cắt A-A** thành **Từ hình chiếu đứng**, **Từ hình chiếu bằng** hoặc **Từ hình chiếu cạnh**.
2. Mặt cắt xuất hiện trên tờ, được tô bóng tại nơi đường cắt đi qua vật liệu, với đường cắt và các mũi tên "A" trên hình chiếu mà nó được lấy ra.
3. Đặt **Cắt tại (mm)** để di chuyển mặt phẳng cắt. Mặt phẳng bắt đầu đi qua giữa chi tiết.

Đặt **Mặt cắt A-A** về **Không** để gỡ bỏ.

## Thêm hình chiếu chi tiết

1. Đặt **Chi tiết B** thành hình chiếu cần phóng to (hoặc chọn {{ui:Chi tiết}} trên thanh công cụ).
2. Bấm vào tâm vùng cần phóng to, trên hình chiếu đó. Một vòng tròn ghi "B" đánh dấu vị trí, và "Chi tiết B" đã phóng to xuất hiện trên tờ với tỷ lệ riêng, ví dụ "Chi tiết B (2:1)".
3. Đặt **Bán kính chi tiết (mm)** cho kích thước vòng tròn và **Tỷ lệ chi tiết** cho độ phóng to: 2, 4, 5 hoặc 10 × tỷ lệ của tờ.

Chi tiết có thể lấy từ hình chiếu đứng, bằng, cạnh hoặc mặt cắt, không lấy từ hình chiếu trục đo. Nếu không đủ chỗ cho mọi hình chiếu, bảng sẽ báo "Không đủ chỗ trên tờ cho: chi tiết. Hãy làm chi tiết nhỏ hơn hoặc bỏ một hình chiếu."

## Thêm bảng lỗ

Bảng lỗ liệt kê các lỗ của chi tiết cùng vị trí của chúng, dùng cho khoan hoặc CNC: chọn **Bảng lỗ** › **Từ hình chiếu bằng** (hoặc đứng, hoặc cạnh) trong bảng.

- Mỗi lỗ nhìn thẳng đầu trong hình chiếu đó được gắn một nhãn bên cạnh: **A1**, **A2** … cho kích thước đầu tiên, **B1** … cho kích thước tiếp theo.
- Bảng liệt kê từng nhãn, **X** và **Y** tính bằng milimét, và kích thước của nó: "Ø14 THRU", "Ø6.6 × 10 DEEP", khoét chìm hoặc vát chìm, hoặc chú thích ren của lỗ ren.
- X và Y được đo từ góc dưới bên trái của đường bao hình chiếu, được đánh dấu **X0 Y0** trên tờ.
- Các lỗ tạo bởi mẫu lặp được đưa vào. Các lỗ không vuông góc với hình chiếu được đếm trong bảng và không đưa vào bảng.

Bảng được đặt ở vùng trống của tờ và đưa vào PDF.

## Đặt ký hiệu GD&T và độ nhám bề mặt

1. Chọn {{ui:Mốc chuẩn}}, {{ui:Khung}} (khung điều khiển đặc trưng) hoặc {{ui:Hoàn thiện}} (ký hiệu độ nhám bề mặt).
2. Bấm vào điểm trên hình chiếu nơi nó gắn vào. Nó tự bắt vào đường vẽ gần nhất trong vòng 2.5 mm.
3. Ký hiệu xuất hiện kèm đường dẫn, ở trạng thái được chọn, và bảng bên phải hiển thị các cài đặt của nó.

Kéo ký hiệu để di chuyển; đường dẫn của nó vẫn giữ tại điểm. Khi một ký hiệu được chọn, các phím mũi tên dịch chuyển nó 1 mm. {{key:Delete}} hoặc {{key:Backspace}} (hoặc {{ui:Xóa}} trong bảng) gỡ nó; {{ui:Xong}} hoặc {{key:Esc}} bỏ chọn. Mọi thay đổi đều có trong danh sách hoàn tác.

### Mốc chuẩn

**Chữ cái**: từ A đến Z, bỏ I, O và Q (chúng dễ bị đọc nhầm thành 1, 0 và O). Mỗi mốc chuẩn mới nhận chữ cái trống tiếp theo.

### Khung điều khiển đặc trưng

| Cài đặt | Lựa chọn |
|---|---|
| **Dung sai** | Độ thẳng, Độ phẳng, Độ tròn, Độ trụ, Biên dạng của đường, Biên dạng của mặt, Độ vuông góc, Độ nghiêng góc, Độ song song, Vị trí, Độ đồng tâm và Độ đối xứng (cả hai đã bị bỏ trong Y14.5-2018 và được đánh dấu như vậy), Độ đảo hướng kính, Độ đảo toàn phần |
| **Vùng (mm)** | Giá trị dung sai, mặc định 0.1 |
| **Vùng đường kính (⌀)** | Cho các đặc tính có vùng hình trụ; bật mặc định với Vị trí |
| **Vật liệu** | RFS (không có), MMC (Ⓜ), LMC (Ⓛ), khi đặc tính cho phép |
| **Mốc chuẩn chính / phụ / thứ ba** | Tối đa ba chữ cái mốc chuẩn, mỗi chữ có **bộ điều chỉnh …** (MMB, LMB) khi được phép |

PartCraft kiểm tra khung theo quy tắc của ASME Y14.5 và nêu lỗi ở đầu bảng, ví dụ "Độ phẳng là dung sai hình dạng: nó không nhận tham chiếu mốc chuẩn." hoặc "Vị trí cần ít nhất một tham chiếu mốc chuẩn." Dòng **Đọc** diễn giải đầy đủ khung.

### Độ nhám bề mặt

| Cài đặt | Lựa chọn | Mặc định |
|---|---|---|
| **Ra (µm)** | Độ nhám trung bình | 1.6 |
| **Quy trình** | Bất kỳ quy trình, Gia công, Không loại bỏ vật liệu | Gia công |
| **Ghi chú** | Tối đa 40 ký tự, ví dụ hướng vân hoặc quy trình | |

Khi chưa chọn gì, bảng liệt kê **Ghi chú trên tờ**, mỗi ghi chú có **Chọn**.

## Xuất PDF

Chọn {{ui:PDF}} trên thanh công cụ, {{ui:Xuất PDF}} trong bảng, hoặc {{ui:Xuất}}, rồi {{ui:Bản vẽ (PDF): hình chiếu, mặt cắt, chi tiết, GD&T}} từ mô hình. PDF được tải xuống dưới tên `<part name> - drawing.pdf`, và thanh trạng thái liệt kê những gì có trong đó.

In với "Kích thước thực tế" trên giấy có cỡ bằng tờ để giữ đúng tỷ lệ.

## Giới hạn

| Chưa xây dựng | Làm gì hôm nay |
|---|---|
| Kích thước ngoài ba kích thước tổng thể | Thêm chúng vào PDF bằng ứng dụng đánh dấu, hoặc xuất phác thảo hoặc mặt dưới dạng DXF rồi ghi kích thước trong chương trình CAD 2D |
| Nhiều hơn một mặt cắt hoặc chi tiết; hình chiếu cắt cục bộ, hình chiếu phụ và hình chiếu chiếu | Không có |
| Chiếu góc thứ nhất, hình chiếu di chuyển được, tờ đứng | Góc thứ ba, bố trí tự động, nằm ngang |
| Ghi chú văn bản tự do và bảng trên tờ (ngoài khung tiêu đề và khung sửa đổi) | Dùng ghi chú hoàn thiện, hoặc thêm văn bản trên PDF |
| Bản vẽ của cụm lắp ráp | Không có |

Ký tự ngoài bộ Tây Âu được in thành "?" (PDF dùng phông Helvetica có sẵn của trình đọc). Các ký hiệu GD&T được vẽ bằng đường nét, nên in được trên mọi trình đọc.

## Để tờ tự làm

- **Tờ › Tự động** chọn giấy cho bạn: tỷ lệ tiêu chuẩn lớn nhất đến 1:1, trên tờ cỡ A nhỏ nhất đủ chứa các hình chiếu ở tỷ lệ đó (danh sách cho biết đã chọn tờ nào).
- **Ghi kích thước các lỗ** ghi kích thước các lỗ trên hình chiếu nhìn thấy nhiều lỗ nhất theo chiều đầu: một dấu tâm trên mỗi lỗ, một chú thích cho mỗi kích thước ("2× Ø6 THRU" kèm đường dẫn), và vị trí của chúng đo từ góc dưới bên trái của hình chiếu. Chiều rộng, chiều cao và chiều sâu tổng thể luôn có.
