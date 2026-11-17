---
title: Đùn khối đắp và cắt xuyên qua nó
summary: Biến phác thảo thành khối đặc bằng Đùn, đặt độ sâu kiểu theo độ sâu, giữa mặt phẳng, đến mặt, hoặc hai hướng; đặt độ thuôn, hoặc chỉ một đường bao của phác thảo; sau đó vẽ phác thảo trên một mặt và Cắt một hốc hoặc rãnh xuyên suốt.
keywords: đùn, khối đắp, khối đắp đùn, cắt, cắt đùn, hốc, xuyên suốt, theo độ sâu, giữa mặt phẳng, đảo chiều, độ sâu, cắt-đùn, khối-đùn, đệm, đến mặt, đến mặt kế tiếp, đến đỉnh, lệch so với mặt, hướng 2, hai hướng, độ nghiêng khi đùn, độ thuôn, đường bao, vùng, đường bao đã chọn
from: 3b13ff10
---

{{ui:Đùn}} đẩy đường bao kín của phác thảo thẳng ra khỏi mặt phẳng của nó để tạo vật liệu. {{ui:Cắt}} làm việc tương tự nhưng loại bỏ vật liệu. Cả hai là cùng một đặc trưng bên dưới; bạn có thể chuyển đổi giữa chúng sau này.

## Đùn một khối đắp

1. Vẽ một đường bao kín và đóng phác thảo (xem [Vẽ phác thảo đầu tiên](topic:sketch-basics)). Phác thảo vẫn được chọn.
2. Chọn {{ui:Đùn}}.

Một khối đặc 10 mm xuất hiện, "Extrude1" được thêm vào lịch sử với phác thảo của nó thụt vào bên dưới, và thanh trạng thái hiển thị "Đã thêm Extrude1. Đổi các số của nó ở bên phải."

**Phác thảo nào được dùng:** phác thảo bạn vừa đóng, hoặc phác thảo được chọn trong lịch sử. Khi không chọn gì, PartCraft lấy phác thảo gần nhất mà chưa có đặc trưng nào dùng. Nếu không có phác thảo nào: "Tạo phác thảo trước: chọn mặt phẳng, {{ui:Phác thảo}}, vẽ một đường bao kín, {{ui:Thoát}}."

### Đặt độ sâu và hướng

Trong bảng bên phải:

| Cài đặt | Lựa chọn | Mặc định |
|---|---|---|
| **Thao tác** | Đắp (thêm vật liệu), Cắt (bỏ vật liệu), Giao (giữ phần chồng lên nhau), Khối mới (chưa xây dựng trong phiên bản này: cần kernel chính xác) | Đắp |
| **Kết thúc** | Theo độ sâu (một độ sâu), Giữa mặt phẳng (cả hai phía), Xuyên suốt, Đến mặt hoặc mặt phẳng, Đến mặt kế tiếp, Đến đỉnh, Lệch so với mặt | Theo độ sâu |
| **Độ sâu (mm)** | Kích thước bất kỳ lớn hơn 0 (hiển thị với Theo độ sâu và Giữa mặt phẳng) | 10 |
| **Đảo chiều** | Đùn về phía bên kia của mặt phẳng phác thảo (không hiển thị với Giữa mặt phẳng) | Tắt |

Gõ một số rồi nhấn {{key:Enter}} hoặc {{key:Tab}}: chi tiết dựng lại ngay lập tức. **Giữa mặt phẳng** đặt một nửa độ sâu ở mỗi bên của phác thảo.

### Đến một mặt, mặt kế tiếp hoặc một đỉnh

Chưa xây dựng trong phiên bản này: mọi kết thúc "đến" đều cần kernel chính xác, và đặc trưng báo "Đùn đến một mặt, mặt kế tiếp hoặc một đỉnh: chưa xây dựng (cần kernel chính xác)." Dùng độ sâu Theo độ sâu mà bạn tự đo. Với kernel chính xác, các kết thúc hoạt động như sau:

- **Đến mặt hoặc mặt phẳng**: **Đến** nhận một mặt phẳng (Chọn, rồi nhấp vào nó) hoặc một mặt phẳng tham chiếu. Mặt song song với phác thảo cho độ sâu chính xác; mặt nghiêng cắt đầu mút theo độ dốc. Nếu mặt nằm sau phác thảo: "… Thử Đảo chiều."
- **Đến mặt kế tiếp**: dừng ở mặt phẳng đầu tiên của khối mà phần đùn gặp (mặt cong không được hỗ trợ ở đây, và thông báo nói như vậy).
- **Đến đỉnh**: dừng ngang một đỉnh (nhấp gần đầu mút của một cạnh) hoặc một đặc trưng điểm.
- **Lệch so với mặt**: giống Đến mặt, nhưng dừng cách mặt một khoảng **Lệch (mm)** (đo vuông góc với mặt).

### Hai hướng, độ thuôn, một đường bao

- **Hướng thứ hai** (Theo độ sâu): cũng đùn **Độ sâu thứ hai (mm)** về phía bên kia của phác thảo.
- **Độ thuôn (°)**: các cạnh nghiêng vào trong khi đi (âm: ra ngoài), giống như độ nghiêng khuôn; chỉ một hướng. Chưa xây dựng trong phiên bản này (cần kernel chính xác): để ở 0.
- **Vùng**: **Chọn vùng**, rồi nhấp vào bên trong các vòng để đùn; chỉ những vùng đó được dùng (một vòng tròn trong hình vuông: nhấp bên trong vòng tròn cho một trụ, giữa hai hình cho một tấm có lỗ). **Tất cả** quay về mọi vòng.

Bên dưới các mục này, **Kích thước phác thảo** liệt kê các kích thước điều khiển của phác thảo, để bạn đổi kích thước profile mà không cần mở phác thảo.

:::note
**Xuyên suốt chỉ dùng cho cắt.** Khối đắp đặt là Xuyên suốt sẽ lỗi với "Xuyên suốt chỉ dùng cho cắt. Dùng một độ sâu cho khối đắp." Chuyển đặc trưng từ Cắt về Đắp sẽ tự đổi Xuyên suốt thành Theo độ sâu.
:::

## Cắt một hốc

1. Nhấp vào mặt phẳng bạn muốn cắt vào. Mặt được tô sáng, và bảng bên phải hiển thị **Mặt**.
2. Chọn {{ui:Phác thảo trên mặt này}} (hoặc {{ui:Phác thảo}} trên thanh công cụ).
3. Vẽ đường bao của hốc, ví dụ một hình chữ nhật, và ghi kích thước.
4. Chọn {{ui:Thoát}}.
5. Chọn {{ui:Cắt}}. Nó bắt đầu với **Xuyên suốt**: nó loại bỏ vật liệu xuyên suốt chi tiết.
6. Với một hốc, đặt **Kết thúc** thành **Theo độ sâu** và gõ **Độ sâu (mm)**.

Cắt đi vào vật liệu, ra xa mặt bạn đã vẽ phác thảo lên. Nếu thanh trạng thái báo "Không có gì để cắt ở phía đó của phác thảo. Thử hướng khác.", đánh dấu **Đảo chiều**.

Phác thảo nằm trên đáy của hốc sẽ theo đáy: đổi độ sâu hốc và phác thảo sẽ di chuyển theo.

## Kéo hoặc đẩy toàn bộ một mặt

Để làm một mặt nổi ra hoặc lõm vào, bạn không cần vẽ đường viền của nó. Nhấp vào mặt phẳng, rồi trong bảng bên phải:

- {{ui:Đùn từ nó}} kéo mặt ra: PartCraft thêm một phác thảo trên mặt, chứa đường viền của nó (các lỗ trong mặt vẫn là lỗ), và một Đùn 10 mm.
- {{ui:Cắt vào nó}} đẩy mặt vào trong: cùng phác thảo và một Cắt đi nửa chừng vào chi tiết.

Cả hai là một bước: {{key:Mod+Z}} xóa phác thảo và đặc trưng cùng lúc. Đặc trưng mới được chọn, nên gõ một số ngay và nhấn {{key:Enter}} để đặt độ sâu. Đường viền được sao chép thành đường thẳng và cung cố định: nó không theo các thay đổi sau đó trên mặt. Nếu một phần đường viền không sao chép được (đường cong tự do), phác thảo sẽ mở ra với phần đã sao chép được; hoàn thiện nó, rồi chọn {{ui:Thoát}} và {{ui:Đùn}} hoặc {{ui:Cắt}}.

## Profile có đảo

Một phác thảo có thể chứa nhiều vòng kín. Các vòng nằm cạnh nhau thành các khối đắp (hoặc cắt) riêng; một vòng nằm trong vòng khác thành một lỗ xuyên qua khối đắp. Ví dụ, một hình chữ nhật có hai vòng tròn bên trong đùn thành một tấm với hai lỗ.

Để chỉ dùng một số vòng, chọn chúng bằng **Vùng** (ở trên); một đặc trưng khác có thể dùng các vòng còn lại của cùng phác thảo.

## Chỉnh sửa sau

- Nhấp vào "Extrude1" trong lịch sử để mở lại cài đặt của nó.
- Nhấp đúp vào phác thảo của nó (thụt vào bên dưới) để mở phác thảo; đóng lại để dựng lại.
- Xem [Thay đổi chi tiết qua lịch sử](topic:edit-history) để tắt, quay lại, sắp xếp lại và xóa.

## Thông báo thường gặp

| Thông báo | Cần làm gì |
|---|---|
| "Phác thảo không có profile kín để đùn." | Phác thảo không có vòng kín nào gồm các đường liền. Lấp các khoảng hở, hoặc bỏ đánh dấu đường dựng bằng {{key:Q}} |
| "Profile hở: một đầu tại (x, y) không nối với đâu." | Mở phác thảo và nối đầu đó với đường tiếp theo |
| "Chưa có gì để cắt." | Cắt cần một khối đặc để cắt. Tạo khối đắp trước |
| "Sau thao tác này không còn gì của chi tiết." | Cắt đã loại bỏ mọi thứ. Kiểm tra kích thước và hướng của nó |

Xem thêm ở [Khắc phục sự cố](topic:troubleshooting).
