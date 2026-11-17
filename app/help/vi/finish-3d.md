---
title: Hoàn thiện 3D: song song và scallop
summary: Hoàn thiện toàn bộ bề mặt cong của mô hình bằng dao phay đầu cầu, đầu bo góc hoặc đầu phẳng, theo các đường song song ở góc bạn đặt, hoặc theo các lượt cách nhau một khoảng đã định để phần gờ giữa chúng giữ đúng chiều cao bạn yêu cầu. Những gì các đường chạy đảm bảo, và những gì chúng không đảm bảo.
keywords: hoàn thiện 3d, hoàn thiện, song song, raster, scallop, scallop không đổi, cusp, đầu cầu, đầu bo góc, bề mặt, dung sai, bước tiến, độ dốc, phôi để lại, drop cutter, vết cắt lố
from: e1587d0a
---

Hai thao tác trong Manufacture cắt **toàn bộ bề mặt mô hình** với dao giữ thẳng đứng (ba trục). Chúng không cần chọn điểm nào: chúng làm việc trên mọi phần của mô hình có thể nhìn thấy từ trên. Phá thô chi tiết trước (thích ứng hoặc hốc); một lượt hoàn thiện trên phôi chưa cắt sẽ cảnh báo rằng nó sẽ cắt sâu.

## Song song

Các đường thẳng xuyên qua mô hình ở **góc** bạn đặt, cách nhau **bước tiến** (một phần của đường kính dao). Mỗi đường bám theo bề mặt: đầu dao cao đúng mức cần thiết để không phần nào của dao thấp hơn mô hình, và đường được cắt mịn hơn ở nơi bề mặt cong. Khi bật **Zig-zag**, dao giữ xuống giữa các đường ở nơi nó có thể làm vậy an toàn (kiểm tra dọc đường di chuyển); nếu không thì dao nâng lên.

- **Dung sai**: một đoạn thẳng của đường có thể lệch bao xa so với chiều cao đầu dao thật (một nửa được dùng làm giới hạn ở giữa mỗi đoạn). Mặc định 0.01 mm.
- **Chỉ ở nơi bề mặt có độ dốc từ … đến … (°)**: chỉ hoàn thiện vùng thoải hoặc chỉ vùng dốc. Nơi bề mặt nằm ngoài phạm vi, đường bị bỏ qua và dao nâng lên.
- **Phôi để lại**: mô hình được dời ra bởi khoảng đó (dao được nới ra bằng chính nó: chính xác cho dao đầu cầu và đầu bo góc; dao đầu phẳng để lại ít nhất bằng đó).
- **Đáy**: không cắt phía dưới z này.

## Scallop

Các lượt giữ khoảng cách không đổi trên bề mặt với nhau, nên phần gờ (scallop) để lại giữa hai lượt kề nhau có **chiều cao** bạn yêu cầu. Khoảng cách được tính từ chiều cao và bán kính bi: s = 2·√(2·R·h − h²), ví dụ khoảng 0.69 mm giữa các lượt cho bi Ø6 và gờ 0.02 mm. Dao đầu bo góc dùng bán kính góc của nó. Dao phay đầu phẳng bị từ chối: nó không có gờ để định cỡ.

Các lượt bắt đầu **từ cạnh của mô hình, đi vào trong** hoặc **từ đỉnh của nó, đi xuống**. Chúng là các đường đồng mức khoảng cách trên bề mặt (không phải đường đồng mức theo độ cao), nên trên mặt dốc chúng gần nhau khi nhìn từ trên, còn trên mặt phẳng chúng cách xa nhau. Khoảng cách được đo trên một lưới phủ bề mặt và chính xác trong khoảng 1 %; chiều cao gờ chính xác nơi bề mặt phẳng hoặc cong nhẹ, và xấp xỉ nơi nó cong nhanh. **Phay thuận** (climb) giữ phía cao hơn của bề mặt ở bên phải dao.

## Đường chạy tốt đến đâu

Những gì các bài kiểm tra kiểm chứng, bằng các công thức đóng hoặc một tìm kiếm vét cạn độc lập trên vùng che của dao:

- Chiều cao đầu dao dưới dao là chính xác với dao đầu cầu, đầu bo góc và đầu phẳng trên mặt, cạnh và góc của lưới, và không bao giờ cao hơn chiều cao thật; với các đường song song, đường chạy nằm trong dung sai so với nó, không có vết cắt lố nào sâu hơn mức đó.
- Độ dài đường chạy trên mặt phẳng nghiêng khớp với công thức đóng; các lượt scallop trên mặt phẳng cách nhau đúng khoảng yêu cầu, và gờ giữa chúng ra đúng chiều cao yêu cầu.
- Mô phỏng phôi không cho thấy vết cắt lố nào sau một lượt và cho thấy các gờ còn lại.

Đường chạy này không phải là gì: chúng là các lượt hoàn thiện cơ bản, không phải toàn bộ những gì một hệ thống sản xuất cung cấp.

- Chưa xây dựng: đường đồng mức theo z (waterline), dọn góc và bút chì, các lượt xuyên tâm và xoắn ốc, chiếu một đường cong lên bề mặt, phát hiện vùng phẳng, gia công phần còn lại, kiểm tra va chạm giữa giá kẹp và chuôi dao, và mọi sự nghiêng của dao.
- Tâm dao luôn ở trên mô hình: các đường dừng ở cạnh của mô hình thay vì chạy ra ngoài nó, nên một thành đứng ngay tại cạnh không được hoàn thiện đến chân của nó.
- Không thấy các phần lõm xuống (undercut): bề mặt là thứ dao gặp từ trên.
- Mô hình là lưới từ kernel, nên các đường chạy theo lưới (dung sai dây cung của nó khoảng 0.0002 đường chéo của chi tiết), không phải theo bề mặt chính xác.
- Hoàn thiện một mô hình lớn ở dung sai mịn tạo ra một chương trình dài với nhiều đường di chuyển ngắn. Kiểm tra đầu ra trong trình mô phỏng của chính máy bạn trước khi cắt.
