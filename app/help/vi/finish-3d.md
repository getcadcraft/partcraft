---
title: Hoàn thiện 3D: song song và scallop
summary: Hoàn thiện toàn bộ bề mặt cong của mô hình bằng dao phay đầu cầu, đầu tròn góc hoặc đầu phẳng, theo các đường song song ở góc bất kỳ hoặc theo các lượt cách nhau một khoảng đã đặt để gờ giữa chúng giữ đúng chiều cao bạn yêu cầu. Những gì đường chạy đảm bảo, và những gì không.
keywords: hoàn thiện 3d, hoàn thiện, song song, raster, scallop, scallop không đổi, đỉnh gờ, dao đầu cầu, dao đầu tròn góc, bề mặt, dung sai, bước ngang, độ dốc, phôi để lại, drop cutter, cắt lẹm
from: 942d2341
---

Hai thao tác trong {{ui:Gia công}} cắt **toàn bộ bề mặt mô hình** với dao giữ thẳng đứng (ba trục). Chúng không cần chọn đối tượng: chúng làm việc trên toàn bộ phần mô hình có thể nhìn thấy từ trên. Thô chi tiết trước (thích ứng hoặc túi); một lượt hoàn thiện trên phôi chưa cắt sẽ cảnh báo rằng nó sẽ cắt sâu.

## Song song

Các đường thẳng ngang mô hình theo **góc** bạn đặt, cách nhau **bước ngang** (một phần của đường kính dao). Mỗi đường bám theo bề mặt: đầu dao cao vừa đủ để không phần nào của dao đi xuống dưới mô hình, và đường được cắt mịn hơn ở những nơi bề mặt uốn cong. Khi bật **Zig-zag**, dao giữ ở trạng thái hạ giữa các đường nếu có thể làm vậy an toàn (được kiểm tra dọc theo đường di chuyển); nếu không, dao nâng lên.

- **Dung sai**: đoạn thẳng của một đường có thể lệch khỏi chiều cao đầu dao thực bao nhiêu (nửa giá trị được dùng làm giới hạn tại giữa mỗi đoạn). Mặc định 0.01 mm.
- **Chỉ ở nơi bề mặt có độ dốc từ … đến … (°)**: chỉ hoàn thiện các vùng thoải hoặc chỉ các vùng dốc. Nơi bề mặt nằm ngoài khoảng này, đường bị bỏ qua và dao nâng lên.
- **Lượng dư để lại**: mô hình được dời ra một khoảng bằng giá trị này (dao được nới ra bằng chính giá trị đó: chính xác với dao đầu cầu và đầu tròn góc; dao đầu phẳng để lại ít nhất lượng đó).
- **Đáy**: không cắt gì dưới cao độ z này.

## Scallop

Các lượt giữ một khoảng cách không đổi trên bề mặt từ nhau, sao cho gờ (scallop) để lại giữa hai lượt kề nhau có **chiều cao** bạn yêu cầu. Khoảng cách được tính từ chiều cao và bán kính viên bi: s = 2·√(2·R·h − h²), ví dụ khoảng 0.69 mm giữa các lượt với bi Ø6 và gờ 0.02 mm. Dao đầu tròn góc dùng bán kính góc của nó. Dao phay đầu phẳng bị từ chối vì nó không có gờ để tính kích thước.

Các lượt bắt đầu **từ cạnh mô hình, đi vào trong** hoặc **từ đỉnh mô hình, đi xuống**. Chúng là các đường đồng mức của khoảng cách trên bề mặt (không phải của chiều cao), nên trên mặt nghiêng chúng gần nhau khi nhìn từ trên, còn trên mặt phẳng chúng cách xa nhau. Khoảng cách được đo trên lưới phủ bề mặt và chính xác khoảng 1 %; chiều cao gờ là chính xác ở nơi bề mặt phẳng hoặc cong nhẹ, và là xấp xỉ ở nơi bề mặt cong nhanh. **Cắt thuận (climb)** giữ phía cao hơn của bề mặt ở bên phải của dao.

## Đường chạy tốt đến đâu

Các kiểm tra kiểm tra những gì, bằng công thức đóng hoặc bằng tìm kiếm vét cạn độc lập trên vết của dao:

- Chiều cao đầu dao dưới dao là chính xác với dao đầu cầu, đầu tròn góc và đầu phẳng trên mặt, cạnh và góc của lưới, và không bao giờ cao hơn chiều cao thực; với các đường song song, đường chạy nằm trong dung sai đó, không có cắt lẹm nào sâu hơn.
- Độ dài đường chạy trên mặt phẳng nghiêng khớp với công thức đóng; các lượt scallop trên mặt phẳng cách nhau đúng khoảng đã yêu cầu và gờ giữa chúng có chiều cao như yêu cầu.
- Mô phỏng phôi không cho thấy cắt lẹm nào sau một lượt và hiển thị các gờ còn lại.

Các đường chạy này không phải là toàn bộ những gì một hệ thống sản xuất cung cấp; chúng là các lượt hoàn thiện cơ bản.

- Chưa xây dựng: hoàn thiện theo đường mực nước (z không đổi), làm sạch bằng bút chì và góc, lượt xuyên tâm và xoắn ốc, chiếu đường cong lên bề mặt, phát hiện vùng phẳng, kiểm tra va chạm đế dao và chuôi dao. Thô và gia công phần còn lại là các thao tác riêng ([Thô 3D và gia công phần còn lại](topic:rough-3d)); dao nghiêng là [hoàn thiện 5 trục](topic:multi-axis#5-axis-finishing).
- Tâm dao giữ trên mô hình: các đường dừng ở cạnh mô hình thay vì chạy ra ngoài nó, nên một thành đứng ngay tại cạnh không được hoàn thiện tới chân của nó.
- Phần lõm ngược (undercut) không được nhìn thấy: bề mặt là thứ dao gặp từ trên.
- Mô hình là lưới từ nhân, nên các đường chạy theo lưới (dung sai dây cung khoảng 0.0002 đường chéo của chi tiết), không theo bề mặt chính xác.
- Hoàn thiện một mô hình lớn với dung sai mịn tạo ra chương trình dài với nhiều đường di chuyển ngắn. Kiểm tra đầu ra trong bộ mô phỏng của máy trước khi cắt.
