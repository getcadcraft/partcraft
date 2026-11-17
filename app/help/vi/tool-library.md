---
title: Thư viện dao
summary: Lưu các dao bạn dùng trong trình duyệt để mọi chi tiết đều có thể dùng chúng, và chuyển thư viện dao giữa các máy tính dưới dạng tệp JSON.
keywords: thư viện dao, dao, xuất, nhập, JSON, lưu dao, số T, dao phay ngón, dao của xưởng
from: 8b9f2483
---

Thẻ **Dao** của Gia công liệt kê các dao của chi tiết. Dưới **Thư viện dao**, bạn có thể giữ các dao của riêng mình vượt ra ngoài một chi tiết:

- {{ui:Lưu dao này}} thêm dao đã chọn vào **Dao đã lưu**; {{ui:Lưu mọi dao của chi tiết này}} thêm tất cả. Dao đã lưu được giữ trong trình duyệt này và có mặt ở mọi chi tiết. Một dao bạn đã lưu (cùng loại, kích thước, số rãnh và các ghi đè) sẽ không được lưu hai lần.
- {{ui:Thêm vào chi tiết này}} đưa dao đã lưu được chọn vào chi tiết. Nếu số T của nó đã được một dao khác trong chi tiết dùng, nó nhận số trống kế tiếp và panel báo điều đó. {{ui:Gỡ khỏi thư viện của tôi}} bỏ nó khỏi danh sách đã lưu (không bỏ khỏi các chi tiết đã có nó).
- {{ui:Xuất dao…}} ghi các dao của chi tiết thành một tệp `.json`; {{ui:Nhập dao…}} thêm các dao của một tệp như vậy vào chi tiết, theo cùng quy tắc (dao đã có sẵn thì bỏ qua, số T đã bị chiếm thì chuyển đi). Tệp chứa kích thước, số rãnh, vật liệu và các ghi đè tốc độ cắt và lượng ăn dao bạn đã gõ; nó không có id. Dùng nó để chuyển dao của xưởng sang máy tính khác hoặc tặng cho đồng nghiệp.

Nếu trình duyệt không giữ được thư viện (bộ nhớ tắt hoặc đã đầy), khi lưu sẽ báo như vậy và {{ui:Xuất dao…}} là cách giữ lại bằng tệp. Tệp phải là thư viện dao PartCraft của phiên bản này hoặc cũ hơn, có tối đa 500 dao với kích thước hợp lệ; mọi tệp khác bị từ chối kèm lý do.

Tốc độ cắt và lượng ăn dao đi kèm dao chỉ là giá trị khởi đầu; xem [Tạo đường dao và G-code](topic:manufacture).
