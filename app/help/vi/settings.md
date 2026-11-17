---
title: Cài đặt PartCraft
summary: Chọn nút chuột nào xoay khung nhìn, làm cho thao tác vuốt trackpad xoay và di chuyển chi tiết, bật hoặc tắt ràng buộc tự động khi phác thảo, và đặt số luồng mà các bộ giải mô phỏng dùng.
keywords: cài đặt, tùy chọn, tùy chỉnh, chuột, nút giữa, nút con lăn, quay, xoay, trackpad, touchpad, cuộn, vuốt, chụm, ràng buộc, ràng buộc tự động, bắt điểm, trùng khớp, luồng, luồng bộ giải, lõi, bộ xử lý, đa luồng, giải nhanh hơn, song song
from: 759edcaf
---

Mở {{ui:Settings}} bằng biểu tượng bánh răng trên thanh ứng dụng hoặc bằng {{key:Mod+,}}. Thẻ đầu tiên, {{ui:PartCraft}}, chứa các cài đặt thuộc riêng ứng dụng này; {{ui:General}} chứa các cài đặt mà mọi ứng dụng CadCraft dùng chung (giao diện, thanh công cụ, bảng). Cài đặt của PartCraft chỉ tồn tại trong ứng dụng: bạn thay đổi chúng ở đây, và trình duyệt này sẽ ghi nhớ chúng. {{ui:Reset PartCraft settings}} đưa mọi thứ về trạng thái ban đầu.

## Xoay khung nhìn

- **Nút trái** (mặc định): kéo bằng nút trái để xoay chi tiết; kéo bằng nút phải hoặc nút giữa để di chuyển khung nhìn.
- **Nút giữa**: nhấn con lăn và kéo để xoay chi tiết; giữ {{key:Shift}} (hoặc {{key:Ctrl}}, hoặc ⌘) cùng nút giữa, hoặc kéo bằng nút phải, để di chuyển khung nhìn. Nút trái chỉ chọn mặt, cạnh và mặt phẳng, nên một cú nhấp hơi lệch sẽ không bao giờ xoay chi tiết. Nhiều chương trình CAD hoạt động theo cách này.

Con lăn luôn thu phóng tại vị trí con trỏ, dù chọn cách nào. Trong phác thảo, nút phải và nút giữa vẫn di chuyển khung nhìn như trước.

## Cuộn: con lăn chuột hoặc trackpad

- **Tự nhận diện** (mặc định): PartCraft theo dõi thao tác cuộn. Cuộn ngang hoặc cuộn mịn, như trackpad gửi đi, sẽ xoay chi tiết; các nấc con lăn nguyên sẽ thu phóng.
- **Con lăn chuột**: cuộn luôn thu phóng về phía con trỏ.
- **Trackpad**: vuốt bằng hai ngón để xoay chi tiết, giữ {{key:Shift}} và vuốt để di chuyển khung nhìn, chụm để thu phóng. Trong phác thảo, vuốt hai ngón sẽ di chuyển phác thảo.

Thao tác chụm luôn thu phóng ở mọi lựa chọn. Nếu "Tự nhận diện" đoán sai cho chuột hoặc trackpad của bạn, hãy chọn loại bạn đang dùng. Xem thêm [Trackpad, cảm ứng và màn hình nhỏ](topic:trackpad-and-touch).

## Phác thảo: thêm ràng buộc khi vẽ

**Thêm ràng buộc khi vẽ** (bật mặc định): một cú nhấp bắt vào một điểm sẽ làm điểm mới trùng với nó, một cú nhấp trên một đường cong sẽ đặt điểm lên đường cong đó, và một đường thẳng vẽ gần nằm ngang hoặc thẳng đứng sẽ trở thành ngang hoặc đứng. Xem [Ràng buộc và kích thước](topic:relations-dimensions).

Tắt nó khi bạn muốn đặt hình học gần hình học khác mà không nối chúng. Con trỏ vẫn bắt vào điểm và đường cong, nhưng không có gì được nối: các đường thẳng vẽ nối tiếp nhau sẽ không dùng chung đầu mút, nên một lần kéo có thể làm chúng tách ra. Hãy tự thêm các ràng buộc bạn muốn từ bảng bên phải. Một biên dạng khép kín vẫn đùn được khi hai đầu của nó chạm nhau.

:::note
Cài đặt này chỉ thay đổi những gì nét vẽ mới thêm vào. Các ràng buộc đã có trong phác thảo vẫn giữ nguyên, và công cụ Bo góc vẫn tạo cung tiếp tuyến và bán kính của nó.
:::

## Phác thảo: kích thước khi vẽ

**Kích thước khi vẽ** (bật mặc định): khi một đường thẳng, hình chữ nhật, vòng tròn hoặc cung đang được vẽ, gõ một số sẽ điền vào ô kích thước cạnh con trỏ ({{key:Tab}} chuyển sang ô tiếp theo), và {{key:Enter}} vẽ hình với kích thước đó, kèm một kích thước điều khiển cho mỗi kích thước bạn đã gõ. Tắt: gõ số khi đang vẽ sẽ không làm gì, và hình chỉ được vẽ bằng các cú nhấp. Xem [Nhập kích thước khi vẽ](topic:sketch-basics#type-the-size-as-you-draw).

## Chỉ báo góc

Những gì hiển thị ở góc khung nhìn 3D: **Khối xem** (mặc định; góc trên bên phải — nhấp vào một mặt, cạnh hoặc đỉnh để nhìn từ đó, kéo để quay quanh, kéo vòng la bàn để xoay mô hình), **Biểu tượng trục** (một dấu X, Y, Z nhỏ ở góc dưới bên trái xoay theo khung nhìn: X đỏ, Y xanh lá, Z xanh dương) hoặc **Không**. Cả hai đều không hiển thị khi bạn đang phác thảo hoặc trên tờ bản vẽ. Xem [Khối xem](topic:view-cube).

## Luồng bộ giải

Số luồng mà các bộ giải mô phỏng được dùng. **Tự động** (mặc định) dùng ít hơn số bộ xử lý logic của máy tính một luồng (tối đa 16), để trang vẫn phản hồi khi một nghiên cứu đang giải; hoặc chọn một số. Các nghiên cứu lưới voxel lớn, mất ổn định, ứng suất theo thời gian và dòng chảy giải nhanh hơn trên nhiều luồng (khoảng 2× với 4 luồng cho 80.000 khối theo kết quả đo của chúng tôi, nhiều hơn trên máy tính rảnh); các mô hình dưới khoảng 20.000 ẩn số vẫn chạy trên một luồng, vì khởi động các luồng tốn nhiều hơn số thời gian chúng tiết kiệm. Một lần giải đa luồng cho cùng đáp án như một luồng (sai khác làm tròn: các tổng được cộng theo thứ tự khác). Kết quả của mỗi nghiên cứu liệt kê **N luồng** hoặc **1 luồng** cùng lý do dưới mục **Bộ giải**.

Các luồng cần trang ở trạng thái **cô lập nguồn gốc chéo** (trình duyệt chỉ cho các worker chia sẻ bộ nhớ khi đó). Trang phòng thí nghiệm đã như vậy; nếu không, cài đặt sẽ cho biết ("Trang này không được cô lập nguồn gốc chéo, nên các bộ giải chỉ chạy trên một luồng, bất kể lựa chọn ở đây.") và mọi lần giải đều dùng một luồng. Mọi thứ khác hoạt động như nhau, và đáp án vẫn giống nhau.

Các nghiên cứu dòng chảy tầng cũng dùng các luồng (khoảng 2,5× với 4 luồng cho 54.000 ô chất lỏng, cùng đáp án đến chữ số cuối). Bộ giải tứ diện bậc hai và truyền nhiệt chạy trên một luồng: việc đa luồng hóa chúng được đo là chậm hơn trên máy tính thử nghiệm của chúng tôi (các bộ giải của chúng bị giới hạn bởi tốc độ bộ nhớ và bởi một bước không thể chia nhỏ).

### Trên máy chủ web của riêng bạn

Nếu bạn chạy PartCraft từ máy chủ của riêng mình, nó hoạt động như đã phục vụ. Với luồng bộ giải, hãy để máy chủ gửi hai tiêu đề cho trang PartCraft:

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Trên Apache, trong tệp `.htaccess` của thư mục (cần mod_headers):

```
Header set Cross-Origin-Opener-Policy "same-origin"
Header set Cross-Origin-Embedder-Policy "require-corp"
```

Trên nginx, trong khối `location` phục vụ PartCraft:

```
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Embedder-Policy "require-corp" always;
```

Tải lại trang: Cài đặt › Luồng bộ giải khi đó sẽ hiển thị **Tự động** với số lượng của máy tính bạn. Tiêu đề thứ hai khiến trình duyệt từ chối bất kỳ thứ gì trang tải từ trang web khác mà không cho phép, điều này không sao với PartCraft khi chạy riêng (nó tải mọi thứ từ thư mục của chính nó).
