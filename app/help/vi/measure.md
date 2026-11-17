---
title: Đo khoảng cách, góc và khối lượng
summary: Nhấn hai thứ trong khung nhìn để có khoảng cách nhỏ nhất, góc và ΔX ΔY ΔZ; đọc chiều dài cạnh, đường kính lỗ, diện tích mặt hoặc tọa độ điểm; lấy thể tích, khối lượng, khối tâm và mô-men quán tính của một chi tiết hoặc lắp ráp.
keywords: đo, khoảng cách, khoảng cách nhỏ nhất, góc, chiều dài, bán kính, đường kính, diện tích, tọa độ, delta, kiểm tra, thuộc tính khối lượng, khối lượng, trọng lượng, khối tâm, quán tính, mô-men quán tính, mật độ, vật liệu
from: 20bda0b7
---

**Đo** hoạt động trên mô hình trong mọi không gian làm việc (Thiết kế, Tạo hình, Mô phỏng, Sinh tạo, Gia công) và trong lắp ráp. Nó nằm trong menu {{ui:Khung nhìn}} của nhóm **Xem**, hoặc nhấn {{key:M}}. Một bảng mở ở góc trên bên trái của khung nhìn.

## Đo một đối tượng

Nhấn một đỉnh, một cạnh hoặc một mặt. Bảng hiển thị:

- **Một điểm** (đỉnh, trung điểm cạnh hoặc tâm vòng tròn): X, Y, Z của nó.
- **Một cạnh**: thẳng, tròn hoặc cong, và chiều dài của nó; với vòng tròn còn có bán kính, đường kính và tâm.
- **Một mặt**: phẳng, trụ, nón và tương tự, cùng diện tích; pháp tuyến của mặt phẳng; bán kính và đường kính của trụ (kích thước của lỗ). Diện tích là của các mặt nhỏ mà nhân lưới tạo ra.
- **Toàn bộ vật thể**: giữ {{key:Shift}} và nhấn chi tiết. Bạn nhận được thể tích, diện tích, khối lượng và quán tính của nó (xem bên dưới).

Con trỏ bắt vào đỉnh, trung điểm cạnh và tâm vòng tròn trong vòng 10 điểm ảnh; một chấm xanh nhỏ hiện điểm bắt trước khi bạn nhấn. Để chọn tâm lỗ, hãy trỏ vào giữa lỗ; để chọn mép của nó (vòng tròn), hãy trỏ vào mép.

## Đo giữa hai đối tượng

Nhấn đối tượng thứ hai. Bảng bổ sung:

- **Khoảng cách nhỏ nhất** và hai điểm gần nhất, được vẽ trong khung nhìn với một đường nối giữa chúng.
- **ΔX, ΔY, ΔZ** từ điểm gần nhất thứ nhất đến điểm thứ hai.
- **Góc** giữa hai mặt phẳng (giữa các pháp tuyến của chúng, 0–180°), giữa hai cạnh thẳng hoặc hai trục (0–90°), hoặc giữa một cạnh và một mặt.
- **Khe hở giữa các mặt phẳng** với hai mặt phẳng song song, **Tâm tới tâm** với hai vòng tròn hoặc lỗ, **Trục tới trục** với hai lỗ hoặc trụ song song.

Lần nhấn thứ ba bắt đầu một cặp mới. {{key:Esc}} xóa các lựa chọn; {{key:Esc}} lần nữa (hoặc {{ui:Đóng}}) đóng Đo. {{ui:Sao chép}} đặt kết quả lên bộ nhớ tạm dưới dạng văn bản phân tách bằng tab, sẵn sàng dán vào bảng tính.

### Độ chính xác

PartCraft dựng chi tiết bằng nhân lưới, nên khoảng cách được tính trên các mặt nhỏ của lưới và bảng ghi **gần đúng: theo các mặt nhỏ**: chính xác với mặt phẳng và giữa các đỉnh, hơi lệch với mặt cong. Cài đặt **Đường cong** mịn hơn sẽ làm chúng gần hơn. Đo chính xác trên bề mặt thật cần nhân chính xác: chưa được xây dựng trong phiên bản này.

## Thuộc tính khối lượng

Chọn {{ui:Thuộc tính khối lượng}} trong bảng hoặc trong menu {{ui:Khung nhìn}}. Với một chi tiết, chọn **Vật liệu** trong bảng (thép, nhôm, nhựa và các loại khác với mật độ thông thường). Trong lắp ráp, mỗi chi tiết dùng vật liệu đặt trong thuộc tính của nó (chọn chi tiết, rồi **Vật liệu**), và kết quả là cho tất cả chi tiết cùng nhau.

Bảng hiển thị khối lượng, thể tích, diện tích, khối tâm, tensor quán tính (Ixx, Iyy, Izz và các tích Ixy, Iyz, Ixz, tính bằng kg·mm², quanh khối tâm theo các trục thế giới) và các mô-men chính. Không có vật liệu, nó hiển thị cùng giá trị trên một đơn vị mật độ (mm⁵) và không có khối lượng.

Các số là chính xác cho khối đặc được lát mặt mà nhân lưới dựng (mặt cong là các mặt nhỏ), nên một chi tiết tròn sẽ ra thấp hơn một chút, và bảng cũng nói như vậy. Mật độ vật liệu là giá trị thông thường trong sổ tay; một hợp kim hoặc mác thực tế có thể khác vài phần trăm.

## Giới hạn

- Bắt điểm có thể tìm thấy một điểm bị che sau hình học khác; hãy kiểm tra bảng cho biết đúng điều bạn muốn.
- Đo sẽ đóng khi bạn mở phác thảo hoặc tờ bản vẽ, hoặc chuyển không gian làm việc.
