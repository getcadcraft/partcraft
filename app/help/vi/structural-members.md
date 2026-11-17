---
title: Khung từ thép hình
summary: Đặt thép hình dọc theo các đường của một hoặc nhiều phác thảo để tạo khung hàn: góc cắt xéo hoặc đối đầu, các cấu kiện được cắt vừa khít tại chỗ gặp nhau, nắp đầu, bản gân và danh sách cắt có chiều dài và góc đầu.
keywords: khung hàn, cấu kiện kết cấu, khung, khung thép, ống, ống vuông, hss, rhs, shs, ống tròn, chs, dầm cánh rộng, dầm chữ i, dầm w, ipe, hea, heb, thép chữ c, upn, thép góc, cắt xéo, mối đối đầu, cắt vừa, nắp đầu, bản gân, danh sách cắt
from: 59071e5a
---

**Cấu kiện kết cấu** đặt một thép hình dọc theo mọi đường của các phác thảo bạn chọn. Vẽ khung bằng các đường (mỗi đường là một cấu kiện), rồi chọn tiết diện: các cấu kiện được dựng, góc của chúng được cắt và kéo dài, và danh sách cắt cho biết cần cắt mỗi đoạn dài bao nhiêu và ở góc nào.

## Tạo một khung

1. Vẽ khung bằng các đường trong một phác thảo, ví dụ một hình chữ nhật trên mặt phẳng trên. Các đường được đánh dấu là hình học dựng sẽ bị bỏ qua.
2. Khi phác thảo được chọn, chọn {{ui:More}} › {{ui:Structural member}}. Mỗi đường của phác thảo sẽ có một cấu kiện.
3. Trong bảng, chọn **Họ** và **Khổ** của tiết diện. Các họ là các bảng AISC (W, S, C, L, ống HSS, Ống) và EN 10365 (IPE, HEA, HEB, UPN).

### Khung trong 3D

Các đường từ nhiều phác thảo tạo thành một khung: hình chữ nhật trên cùng được phác thảo trên một mặt phẳng ở phía trên, còn các chân được phác thảo trên các mặt phẳng đứng, gặp nhau ở đầu mút trong 3D. Trong bảng, dưới **Dọc theo các đường của**, đánh dấu từng phác thảo mà các cấu kiện theo đường của nó. Các đầu gặp nhau trong phạm vi một micromét sẽ được nối.

## Đặt tiết diện trên đường của nó

- **Xoay (°)** quay tiết diện quanh đường của nó. Một dầm đứng với chiều cao hướng thẳng lên (trên một cấu kiện thẳng đứng, chiều cao của nó hướng về phía trước).
- **Trên đường** chọn điểm nào của tiết diện nằm trên đường: tâm, hoặc một góc hay điểm giữa một cạnh của đường bao tiết diện. "Giữa đáy" đặt khung nằm trên mặt phẳng phác thảo thay vì xuyên qua nó.

## Góc và mối nối

| Chỗ các cấu kiện gặp nhau | Điều xảy ra |
|---|---|
| Hai cấu kiện nối đầu với đầu, **Góc: Cắt xéo** | Cả hai được cắt trên mặt phẳng nằm giữa chúng, như khung ảnh |
| Hai cấu kiện nối đầu với đầu, **Góc: Đối đầu** | Cấu kiện thứ nhất chạy tiếp đến mặt xa của cấu kiện thứ hai; cấu kiện thứ hai được cắt vuông góc tại mặt gần của cấu kiện thứ nhất |
| Một cấu kiện kết thúc tại giữa một cấu kiện khác (chữ T) | Nó được cắt vừa khít với mặt ngoài của cấu kiện kia |
| Ba cấu kiện trở lên kết thúc tại một điểm | Cấu kiện đầu tiên chạy vuông góc qua các cấu kiện khác; các cấu kiện còn lại được cắt vừa khít với nó |

Cấu kiện đầu tiên là cấu kiện có đường xuất hiện trước: các đường giữ thứ tự chúng được vẽ, từng phác thảo theo thứ tự các phác thảo đã được đánh dấu.

## Nắp đầu và bản gân

- **Nắp đầu** đóng mọi đầu tự do bằng một bản có đường bao của tiết diện, độ dày bạn đặt, nằm ngoài đầu.
- **Bản gân** đặt một bản tam giác tại mọi góc nơi hai cấu kiện gặp nhau tạo góc: **Kích thước bản gân** dọc theo mỗi cấu kiện tính từ góc, **Độ dày bản gân** theo chiều ngang, căn giữa trên mặt phẳng của góc.

## Danh sách cắt

Bảng liệt kê mọi đoạn, các đoạn giống nhau được nhóm lại: tiết diện, chiều dài (từ điểm dài đến điểm dài, như khi bạn đánh dấu để cưa), cách cắt từng đầu (vuông, một góc lệch khỏi vuông, hoặc cắt vừa khít), và chúng thuộc cấu kiện nào. Nắp đầu và bản gân được liệt kê cùng kích thước của chúng. {{ui:Save the cut list (CSV)}} lưu nó cho bảng tính.

Một cấu kiện được cắt vừa khít với ống có góc bo tròn sẽ đi vào một chút bán kính góc của ống đó, nên chiều dài điểm dài của nó dài hơn khoảng cách giữa các mặt vài milimét.

## Giới hạn

- Cấu kiện chỉ theo đường thẳng; cung tròn và spline trong phác thảo bị bỏ qua.
- Các mối nối được cắt, không hàn: không vẽ mối hàn, và khung là một khối đặc duy nhất.
- Các tiết diện được vẽ theo kích thước của bảng: hình W có bo chân, hình S và thép chữ C có cánh song song, ống có bán kính góc; lỗ, chuẩn bị đầu và khe hàn không được tạo sẵn cho bạn.
- Cấu kiện kết cấu được dựng bằng nhân lưới. Khi bật nhân chính xác (chỉ dành cho nhà phát triển), chúng sẽ thông báo điều đó và không được dựng.
