---
title: Mô phỏng dòng chảy chất lỏng (nghiên cứu Flow)
summary: Dòng chảy qua các kênh bên trong chi tiết hoặc quanh nó trong một hộp: đầu vào, đầu ra, không khí, nước hoặc chất lỏng của bạn; sau đó là vận tốc và áp suất trên mặt cắt di động, đường dòng, áp suất bề mặt, độ sụt áp, cân bằng khối lượng, lực cản và lực nâng, cùng những gì phương pháp tầng (laminar) cho biết và không cho biết.
keywords: dòng chảy, CFD, chất lỏng, động lực học lưu chất tính toán, mô phỏng dòng chảy, không khí, nước, độ nhớt, khối lượng riêng, số Reynolds, tầng (laminar), rối (turbulent), độ sụt áp, tổn thất cột áp, đầu vào, đầu ra, nắp, nút đậy, vận tốc, lưu lượng, lưu lượng thể tích, lít mỗi phút, áp suất tĩnh, đường dòng, mặt cắt, mặt phẳng cắt, lực cản, lực nâng, hệ số cản, hệ số nâng, diện tích cản chính diện, dòng chảy ngoài, dòng chảy trong, ống, kênh, ống góp, vòi phun, lattice Boltzmann, phần dư, hội tụ
from: 7dc75f29
---

Nghiên cứu **Flow** xác định cách chất lỏng chuyển động qua các kênh bên trong chi tiết của bạn (**bên trong**) hoặc quanh nó (**bên ngoài**). Mặc định là **tầng (laminar), không nén, đẳng nhiệt và Newton**: dòng chảy êm của chất lỏng có khối lượng riêng và độ nhớt cố định, không có nhiệt, không có rối và không có trọng lực. Cũng có một mô hình rối **thử nghiệm**, chỉ cho các kiểu dòng chảy mang tính định tính (xem bên dưới). Nó làm việc trên các mặt có tên mà nhân lưới (mesh kernel) cung cấp cho chi tiết (xem [Nhân lưới (mesh kernel)](topic:solid-kernels)).

Chọn **Mô phỏng** trong hộp **Không gian làm việc**, nhấn **Nghiên cứu mới** nếu chưa có, rồi đặt **Loại** thành **Flow (CFD)**. **Mô hình dòng chảy** là **Tầng** (mặc định) hoặc **Rối (Spalart–Allmaras, thử nghiệm)**: xem **Dòng chảy rối (thử nghiệm)** bên dưới. Các thiết lập kết cấu của nghiên cứu được giữ lại, nên bạn có thể chuyển lại. Thiết lập dòng chảy được lưu trong tệp chi tiết và mọi thay đổi đều có thể hoàn tác.

## Chọn chất lỏng và ô lưới

- **Chất lỏng**: không khí hoặc nước ở 20 °C, hoặc **Tùy chỉnh** với khối lượng riêng (kg/m³) và độ nhớt động lực (Pa·s) của riêng bạn. Không khí dùng định luật khí lý tưởng và định luật Sutherland (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); nước dùng các giá trị IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Kích thước ô**: không gian chất lỏng được lấp đầy bởi các khối lập phương bằng nhau. Để trống để có kích thước tự động; bảng hiển thị lưới. Mọi lỗ mở và kênh nên có **ít nhất 8 đến 10 ô qua mỗi chiều** để có số liệu hữu ích; ô nhỏ hơn cho kết quả chính xác hơn nhưng chậm hơn (ô mịn gấp đôi tốn khoảng 16 lần công sức).
- **Thành**: **Nội suy** bám theo thành cong giữa các ô (mặc định); **Phản hồi ngược (bounce-back)** coi thành là bậc thang của khối lập phương.

## Dòng chảy bên trong chi tiết

Không gian chất lỏng phải kín. Thêm **Đầu vào** và **Đầu ra** trong bảng, rồi nhấp vào các mặt của chúng trong khung nhìn:

1. **Mặt phẳng quanh lỗ mở** — vành ở đầu ống, mặt cổng. PartCraft đóng lỗ của cửa mở bằng một nắp tại đó. Mọi lỗ trong mặt đó đều thuộc về cửa mở ấy, nên khi một đầu vào và một đầu ra cùng mở trên một mặt, hãy mô hình một nắp mỏng che một trong hai lỗ thay thế.
2. **Mặt trong của nắp đậy** — như trong các công cụ CAD khác: mô hình một tấm mỏng (Đùn) phủ lên lỗ mở và chọn mặt của nó tiếp xúc với chất lỏng.

Với đầu vào, đặt **vận tốc** (m/s, đều trên toàn bộ lỗ mở, hướng vào chi tiết) hoặc **lưu lượng thể tích** (L/min). Với đầu ra, đặt **áp suất tĩnh** (Pa, áp suất đo). Nếu một cửa mở bị bỏ ngỏ, hoặc thành mỏng hơn một ô, phần bên trong sẽ thông với bên ngoài và phép giải dừng với thông báo "Không có không gian chất lỏng kín".

## Dòng chảy quanh chi tiết

Đặt **Dòng chảy** thành **Bên ngoài**, **Tốc độ**, hướng dòng chảy tới, và hộp vươn bao xa về phía thượng nguồn, hạ nguồn và hai bên (để trống: 1, 3 và 1 lần kích thước lớn nhất của chi tiết). Mặt hộp mà dòng chảy đi vào là dòng vào, mặt nó đi ra là dòng ra ở 0 Pa, còn các mặt dọc theo dòng chảy là trượt. Hộp quá nhỏ sẽ ép dòng chảy qua chi tiết và làm tăng lực cản. **Diện tích tham chiếu** là diện tích mà hệ số cản và hệ số nâng sử dụng (để trống: diện tích cản chính diện của chi tiết nhìn theo dòng chảy); lực nâng được đo theo +Y trừ khi bạn chọn hướng khác.

## Giải và đọc kết quả

Nhấn **Giải**. Phép giải chạy nền với số bước, phần dư và biểu đồ phần dư; **Dừng** kết thúc nó. Nó dừng khi phần dư (mức độ trường vận tốc còn thay đổi sau mỗi bước) thấp hơn mục tiêu và độ sụt áp hoặc lực cản đã ổn định. Nếu đạt giới hạn bước trước, bảng sẽ hiện **Chưa hội tụ** màu đỏ: các số liệu là trạng thái cuối cùng, không phải lời giải ổn định.

- **Mặt cắt**: vận tốc hoặc áp suất tĩnh trên một mặt phẳng xuyên qua mô hình; chọn pháp tuyến (X, Y hoặc Z) và kéo thanh trượt để di chuyển nó. Đưa con trỏ lên mặt cắt để đọc giá trị.
- **Đường dòng**: từ các đầu vào (bên trong) hoặc từ một lưới rải qua đầu dòng vào của hộp trong mặt cắt (bên ngoài).
- **Chi tiết**: đặc, xuyên thấu (để thấy mặt phẳng bên trong), áp suất bề mặt, hoặc ẩn.
- **Bảng**: số Reynolds, độ sụt áp (áp suất tĩnh trung bình tại các đầu vào trừ đi tại các đầu ra), lưu lượng và áp suất trung bình của từng cửa mở, lực tác dụng lên chi tiết, lực cản và lực nâng cùng hệ số và diện tích tham chiếu (bên ngoài), cân bằng khối lượng (dòng vào so với dòng ra), lưới và bộ giải.

## Dòng chảy rối (thử nghiệm)

**Mô hình dòng chảy › Rối (Spalart–Allmaras, thử nghiệm)** giải dòng chảy rối trung bình theo thời gian (RANS dừng): mô hình Spalart–Allmaras cho độ nhớt xoáy trong mỗi ô, và các ô sát thành dùng định luật thành Spalding thay vì giải chi tiết lớp mỏng ở đó. Dòng chảy hoàn toàn rối ở mọi nơi (không có vùng tầng, không có chuyển tiếp).

**Mô hình này chưa đạt các kiểm tra độ chính xác.** Bảng, kết quả và bảng số liệu nói điều đó với mọi nghiên cứu rối, và cảnh báo không thể đóng. Hãy dùng nó cho **các kiểu dòng chảy định tính** — nơi dòng chảy tách ra, tuần hoàn hoặc tăng tốc — **không dùng cho số liệu thiết kế**.

| Kiểm tra | Tham chiếu | Kết quả |
|---|---|---|
| Ma sát kênh phẳng, ô đầu tiên ở y⁺ 49 / 98 | Tương quan Dean | +3.3 % / +4.7 % |
| Kênh có thành được giải (y⁺ ≈ 3), Re_τ 180: vận tốc khối | DNS của Moser, Kim & Mansour | −1 % |
| Kênh phẳng, y⁺ 7–15 hoặc 190–380 | Tương quan Dean | +9 đến +22 % |
| Ma sát ống qua các ô khối lập phương, phát triển đầy đủ, 10–30 ô qua mỗi chiều | Colebrook | cao hơn 30 đến 34 % |
| Tái bám sau bậc quay lưng, 6–14 ô trên mỗi chiều cao bậc | Driver & Seegmiller, 6.26 chiều cao bậc | ngắn hơn 21 đến 39 % |

Kết quả chỉ cải thiện chậm khi ô mịn hơn. Sau khi giải, bảng hiển thị **y⁺ của ô đầu tiên** (nhỏ nhất, trung bình và lớn nhất trên các ô sát thành) và cảnh báo khi nằm ngoài khoảng đã kiểm tra từ 1 đến 400; hãy nhắm khoảng 30 đến 300. **Thời gian chạy:** các ô tự động được chọn để chạy vài phút trên nhiều nhất một lõi laptop (bảng hiển thị trường hợp xấu nhất cho lưới và giới hạn bước; một ống nhỏ ổn định trong dưới 20 giây). Giảm một nửa kích thước ô tốn khoảng 16 lần thời gian. Lực tác dụng lên chi tiết được tính từ cân bằng động lượng qua các cửa mở hoặc hộp.

**Đã làm đến nay:** các ô sát thành giờ khớp ứng suất cắt của chính chúng với định luật thành, điều này đưa sai số ống và bậc xuống các con số trên mà không làm thay đổi kết quả kênh phẳng. Điều đó chưa đủ cho số liệu thiết kế. Bước tiếp theo là các ô mịn hơn gần thành.

## Những gì nó cho biết và không cho biết

- **Mô hình tầng** chỉ là tầng. Trong ống, dòng chảy chuyển sang rối khi số Reynolds trên khoảng 2,000 đến 4,000; sau vật thể cùn, xoáy bắt đầu rơi khi trên khoảng 50. Bảng cảnh báo tại các điểm này. Kết quả tầng cho dòng chảy rối sẽ đánh giá thấp độ sụt áp và sai lực cản. Mô hình rối thử nghiệm (ở trên) bao quát dòng rối ở mức định tính; số liệu của nó chưa đáng tin cậy.
- **Phương pháp**: phương pháp Boltzmann mạng (lattice Boltzmann) (D3Q19, va chạm hai thời gian hồi phục) chạy đến trạng thái ổn định. Bên trong nó hơi nén được; PartCraft giữ thay đổi khối lượng riêng ở vài phần trăm. Nếu dòng chảy quá nhanh so với các ô, nó từ chối khởi động và cho biết các ô phải nhỏ hơn bao nhiêu.
- **Đối chiếu với**: dòng Hagen–Poiseuille trong ống qua chi tiết (gradient áp suất trong 1 % tại 20 ô qua mỗi chiều), hộp khoang do nắp dẫn động của Ghia và cộng sự (trong 0.75 % vận tốc nắp), và bài kiểm chuẩn hình trụ Schäfer–Turek (lực cản trong 1 % tại 10 ô trên mỗi đường kính).
- Không được mô hình hóa: truyền nhiệt, rối với độ chính xác thiết kế (mô hình rối là thử nghiệm), bề mặt tự do, xâm thực, trọng lực, các bộ phận chuyển động, chất lỏng phi Newton, thành nhám. Bản dựng thử nghiệm: hãy kiểm tra các kết quả quan trọng bằng cách khác.
