---
title: Bề mặt tự do (NURBS)
summary: Đường cong và bề mặt mượt bên cạnh chi tiết — chuyển tiếp, quét, mạng đường cong, miếng vá bốn cạnh, pha trộn, cắt — với liên tục G0, G1 và G2 đo trên bề mặt chính xác, khối đặc với hợp, trừ và giao được ghi vào chi tiết, khung nhìn vằn và độ cong, mặt khớp với bản quét với sai số được đo, và tệp STEP hoặc IGES. Được giữ trong tệp chi tiết.
keywords: nurbs, quét, kỹ thuật ngược, khớp, lưới thành bề mặt, đám điểm, stl, cắt, đã cắt, lỗ, khoét, khối đặc, boolean, hợp, trừ, giao, khâu, kín, ghi, tự do, bề mặt, b-spline, bspline, đường cong, spline, chuyển tiếp, ray, mạng, coons, miếng vá, pha trộn, liên tục, g0, g1, g2, tiếp tuyến, độ cong, vằn ngựa, điểm điều khiển, nút, bậc, step, iges, class A, thân tàu, làm mượt
from: 64ed5196
---

Không gian làm việc **Bề mặt** tạo các đường cong và bề mặt mượt dùng cho vỏ sản phẩm, thân xe và thân tàu thủy: NURBS, cùng toán học mà các trình mô hình bề mặt khác dùng. Mọi thứ được đo trên bề mặt chính xác, không bao giờ trên các tam giác bạn thấy. Kích thước tính bằng milimét, như phần còn lại của PartCraft.

Chọn **Bề mặt** trong hộp **Không gian làm việc**. Thanh công cụ có {{ui:Đường cong}}, {{ui:Chuyển tiếp}}, {{ui:Quét}}, {{ui:Khớp}} và {{ui:Vằn ngựa}}; mọi lệnh nằm trong bảng bên phải. Mỗi lệnh cho biết nó còn cần gì: nhấp đường cong hoặc bề mặt trong khung nhìn (gần một cạnh hoặc một đầu khi được yêu cầu) hoặc chọn chúng trong danh sách; gõ các điểm, hoặc nhấp chúng trên mặt chi tiết (ngoài chi tiết chúng rơi xuống mặt đất), rồi nhấn Enter.

Đường cong và bề mặt được lưu trong tệp chi tiết cùng khối đặc. Chúng không thay đổi đặc trưng của chi tiết: bảng có **Hoàn tác** và **Làm lại** riêng, mỗi bước là một lệnh.

## Đường cong

- **Đường cong qua các điểm** đi qua mọi điểm bạn nhấp. **Đường cong theo điểm điều khiển** thay vào đó đi theo một lồng điểm.
- **Chèn nút**, **Tăng bậc** và **Giảm bậc** đổi cách mô tả đường cong mà không làm nó di chuyển (việc giảm bị từ chối khi đường cong sẽ di chuyển quá dung sai). **Dựng lại đường cong** cho nó một số điểm điều khiển mới và cho biết nó đã di chuyển bao xa.
- **Khớp đường cong** làm đầu của một đường cong gặp đầu của đường khác với G0 (chạm), G1 (cùng hướng) hoặc G2 (cùng độ cong nữa). **Pha trộn đường cong** thêm một đường cong mới giữa hai đầu, G1 hoặc G2.

## Bề mặt

- **Chuyển tiếp** qua hai hoặc nhiều đường cong, **Bề mặt kẻ** giữa hai đường cong, **Đùn đường cong**, **Quay tròn đường cong**.
- **Quét theo một ray** đưa một prôfin dọc theo đường dẫn mà không xoắn nó; **Quét theo hai ray** giữ hai đầu của prôfin trên cả hai ray. Các mặt quét được khớp: kết quả cho biết nó bám sát mặt quét thật đến mức nào.
- **Bề mặt từ mạng đường cong** đi qua một lưới đường cong (mỗi đường cắt mỗi đường khác đúng một lần). **Miếng vá từ bốn cạnh** lấp đầy bốn đường cong gặp nhau ở các góc.
- **Khớp bề mặt** làm một cạnh bề mặt gặp mặt kề với G0, G1 hoặc G2; **Pha trộn bề mặt** thêm một bề mặt giữa hai cạnh.
- **Dời mặt**, **Kéo dài mặt** (bề mặt tiếp tục theo hướng đang có), **Dựng lại mặt**.

## Kiểm tra chất lượng

Bảng **Cạnh chung** liệt kê mọi cạnh mà hai bề mặt cùng có, với khe hở (mm), góc giữa chúng (°) và bước nhảy độ cong (1/mm), và cho biết nó đạt G0, G1 hay G2. Cạnh kém hơn yêu cầu của bạn sẽ hiện trong **Vấn đề** kèm cách sửa **Khớp**. Các vạch **Vằn ngựa** và màu **độ cong** lấy từ bề mặt chính xác: vạch chạy liền mạch qua một cạnh nghĩa là G1; vạch còn giữ nguyên bề rộng nghĩa là G2.

G0–G2 được đo tại 33 điểm mỗi cạnh. **Không đo G3 và chất lượng "class A"** và không được khẳng định.

## Cắt bề mặt

Nhóm **Cắt** cắt một bề mặt mà không đổi hình dạng của nó: bề mặt giữ tất cả điểm điều khiển, và chỉ phần bên trong đường bao được hiển thị, đếm và ghi. **Cắt theo hình chữ nhật** và **Cắt bằng đường tròn** làm việc trên một phần (0 đến 1) của bề mặt theo mỗi hướng, nên không cần chọn trong khung nhìn; **Cắt bằng đường cong** nhận một đường cong kín nằm trên bề mặt (nó được chiếu vào bề mặt, và bị từ chối bằng lời khi hở hoặc cách xa hơn dung sai). Đánh dấu **Khoét lỗ** để xóa phần bên trong đường bao; bỏ đánh dấu để chỉ giữ phần bên trong. Một bề mặt có thể có một đường bao được giữ và số lỗ tùy ý; đường bao cắt đường khác sẽ bị từ chối. **Bỏ cắt** hiển thị lại toàn bộ bề mặt. **Hoàn tác** của bảng hoàn lại thao tác cắt như mọi bước khác.

STEP mang phần cắt dưới dạng biên của mặt, và IGES dưới dạng bề mặt đã cắt (thực thể 144); cả hai đều đọc lại được.

## Khối đặc và Boolean

Nhóm **Khối đặc** biến bề mặt thành thân kín và kết hợp chúng. Ở đây một khối đặc là tập các bề mặt của chính bảng mà cùng nhau khép kín một thể tích; các mặt của nó vẫn là bề mặt NURBS chính xác cùng phần cắt.

- **Khối hộp đặc**, **Khối trụ đặc** và **Khối cầu đặc** tạo một khối từ kích thước nhập vào (mm): một hộp gồm sáu mặt phẳng, một trụ gồm một mặt tròn và hai đầu phẳng cắt theo đường tròn, một cầu gồm một bề mặt quay.
- **Khối đặc từ bề mặt** gom các bề mặt do bạn tạo. Chọn chúng, hoặc không chọn gì để dùng mọi bề mặt đang hiện mà chưa nằm trong khối đặc nào. Chúng được khâu lại trong dung sai: nếu không khép kín, không có gì thay đổi và bảng cho biết còn bao nhiêu cạnh hở và chúng phải gặp nhau gần đến đâu.
- **Hợp**, **Trừ** (khối đặc thứ hai được lấy khỏi khối thứ nhất) và **Giao** (chỉ phần cả hai cùng có) nhận hai khối đặc: nhấp một mặt của mỗi khối trong khung nhìn, hoặc nhấn **Chọn** trong danh sách **Khối đặc**. Đánh dấu **Giữ hai khối đặc** để giữ chúng bên cạnh kết quả.

Boolean giữ mọi mặt trên bề mặt chính xác của nó và cắt nó bằng các đường bao cắt mới dọc theo giao tuyến. Dòng kết quả cho các số đo: các điểm của bộ máy khối đặc phải dịch chuyển bao nhiêu để nằm trên bề mặt chính xác (không bao giờ vượt quá dung sai), các điểm giao cách cả hai bề mặt bao nhiêu (thường vài phần triệu milimét), thể tích, và liệu các mặt mới có khép kín lại khi được khâu lại từ bề mặt chính xác hay không. Thể tích được đo trên tam giác trong dung sai (0.05 mm trừ khi bạn đặt khác), nên thể tích của cầu hay trụ đọc thấp hơn một chút so với giá trị chính xác: dung sai nhỏ hơn sẽ sát hơn. Boolean không thể thực hiện gọn (các khối đặc không có gì chung, một đường bao sẽ cắt chính nó) bị từ chối bằng lời và không thay đổi gì. Một Boolean là một bước của **Hoàn tác** của bảng.

- Trong danh sách **Khối đặc**, **Tách nhóm** giữ các mặt như bề mặt thường; thùng rác xóa khối đặc và các mặt của nó.

## Bo góc và làm dày

**Bo góc giữa các mặt** làm tròn cạnh nơi hai mặt của một khối đặc gặp nhau: chọn hai mặt (trong khung nhìn, hoặc bằng **Chọn** trong danh sách), nhập **bán kính** và, với bán kính thay đổi dọc cạnh, **bán kính ở đầu** (0 giữ một bán kính). Một quả cầu có bán kính đó lăn dọc cạnh, chạm cả hai mặt; bo góc là cung tròn chính xác mà nó để lại tại mỗi điểm, được nối thành một bề mặt, và hai mặt được cắt ở chỗ quả cầu chạm. Cạnh ngoài mất vật liệu, góc trong thì thêm vật liệu. Dòng kết quả cho biết những gì đã đo: bề mặt bo góc cách quả cầu lăn bao xa giữa các điểm mà nó được dựng từ đó (điểm được thêm cho đến khi nằm trong một phần tư dung sai), góc lớn nhất giữa bo góc và mỗi mặt dọc theo các đường tiếp xúc, và các số giống như Hợp. Một bán kính không vừa (quả cầu sẽ rời khỏi một mặt, hoặc một mặt cong chặt hơn bán kính) bị từ chối, nêu tên mặt, và không có gì thay đổi.

**Bo góc nhiều cạnh** làm tròn nhiều cạnh trong một bước: chọn hai mặt của cạnh đầu tiên, rồi hai mặt của cạnh kế tiếp, và cứ thế (một mặt có thể nằm trong nhiều cặp, ví dụ mặt trên của một hộp ở bốn cặp); mọi cạnh nhận bán kính bạn nhập. Mỗi phần bo được tính trên khối đặc như lúc đầu, rồi chúng được cắt lần lượt, nên thứ tự không quan trọng. Nơi hai cạnh được bo gặp nhau tại một góc mà các cạnh khác vẫn sắc, hai bo góc chạy vào nhau dọc theo đường giao của chúng (một đường gấp). Nơi ba cạnh ngoài được bo của ba mặt phẳng vuông góc với nhau gặp nhau với một bán kính, góc đó là một **miếng vá cầu** tiếp tuyến với cả ba bo góc (bỏ đánh dấu **Góc** để có góc gấp thay thế); một cạnh phải dài ít nhất gấp đôi bán kính khi cả hai đầu của nó là các góc như vậy. Dòng kết quả cho biết có bao nhiêu cạnh đã được bo và các góc ra sao. Các cạnh trong cũng có thể được bo cùng lúc, nhưng kết quả không khép kín lại chỉ được báo cáo (dòng báo điều đó), nên cần kiểm tra.

**Làm dày thành khối đặc** cho một bề mặt độ dày: chọn nó, nhập **độ dày**, và đánh dấu **Phía bên kia** để mở rộng về hướng ngược lại. Mặt dời được khớp với bề mặt và đo so với nó (dòng kết quả cho chênh lệch lớn nhất so với độ dày); các thành đi theo mọi cạnh và mọi đường bao cắt. Nếu bề mặt cong chặt hơn độ dày ở phía đó, hoặc một phần khác của nó nằm gần hơn độ dày, nó bị từ chối, nêu tên bề mặt và vị trí, và không có gì thay đổi.

## Ghi khối đặc vào chi tiết

**Ghi** (trên thanh công cụ Bề mặt), hoặc **Ghi vào chi tiết** trong danh sách **Khối đặc**, biến khối đặc thành một thân của chi tiết, giống cách một STL đã mở trở thành thân: chọn khối đặc, có **thêm vào** chi tiết, **cắt** khỏi nó hay **giao** với nó, và dung sai (các tam giác có thể lệch khỏi bề mặt chính xác bao xa). Đó là một bước Hoàn tác của chi tiết và xuất hiện trong danh sách đặc trưng như một nhập tên theo khối đặc. Chi tiết giữ các tam giác, nên nó mở và dựng lại mà không cần bề mặt; khối đặc chính xác vẫn ở Bề mặt, nên bạn có thể ghi lại sau khi thay đổi.

## Tệp

Xuất **STEP** (AP242) hoặc **IGES** với các đường cong và bề mặt đúng như chúng là (đường cong và bề mặt B-spline, không biến thành tam giác nào). Mỗi bề mặt là một mặt riêng, với phần cắt của nó; một khối đặc được ghi thành một vỏ kín, mỗi cạnh được chia sẻ bởi hai mặt của nó như các chương trình CAD khác mong đợi (dòng trạng thái cho biết có bao nhiêu khối đặc được xuất theo cách đó). Trong IGES, cùng khối đặc là một B-rep khối đặc đa tạp (thực thể 186 trên vỏ kín 514, mặt 510, vòng 508, một danh sách cạnh 504 và một danh sách đỉnh 502); một khối đặc có các mặt không ghép cạnh với cạnh được ghi thành các mặt riêng, và dòng báo điều đó. **Nhập…** đọc lại khối đặc như vậy thành khối đặc, từ STEP và từ IGES.

## Làm mượt đường thân tàu

**Làm mượt** (trên thanh công cụ Bề mặt) đo mọi đường cong trên hình dạng chính xác của nó — điểm uốn (nơi nó đổi từ cong theo hướng này sang hướng kia), độ cong lớn nhất, bước nhảy độ cong tại các nút và độ gồ ghề của nó — và dựng lại những đường có điểm uốn hoặc bước nhảy với ít điểm điều khiển nhất mà vẫn nằm trong dung sai bạn đặt và không thêm điểm uốn. Vẽ các mặt cắt sườn, đường nước và mặt cắt dọc như đường cong, làm mượt chúng, rồi **Chuyển tiếp** thân tàu qua các mặt cắt sườn và kiểm tra bằng **Vằn ngựa**. Các đường cong chưa mượt cũng hiện trong **Vấn đề** với cách sửa **Làm mượt đường cong này**. Một đường được định sẵn đổi hướng (mặt cắt hình chữ S) giữ điểm uốn đó. Lượng chiếm nước, tâm và cánh tay hồi phục của thân tàu đến từ phần khối đặc: xem công cụ thủy tĩnh.

## Bề mặt từ bản quét (kỹ thuật ngược)

Mở chi tiết chứa lưới quét (một STL đã mở hoặc một thân đã ghi), chọn **Bề mặt** trong hộp **Không gian làm việc**, và trong nhóm **Quét** chọn **Khớp bề mặt với bản quét**; lưới đã dựng của chi tiết chính là bản quét. Công cụ tìm **mặt phẳng**, **trụ**, **cầu** và **nón** (các bề mặt chính xác mà chi tiết gia công được tạo thành; mỗi dòng hiển thị bán kính hoặc nửa góc nó tìm được), tìm **bo góc** (cạnh và góc được bo: một trụ hoặc cầu nhỏ tiếp tuyến với hai hoặc nhiều mặt khác, hiển thị với bán kính và các mặt nó nối), **bo góc vành** (một xuyến: cạnh được bo nơi một mặt phẳng gặp trụ hoặc nón, hiển thị với bán kính và bán kính vòng), và **bo góc biến đổi** (một cạnh được bo mà bán kính thay đổi dọc theo nó, hiển thị với bán kính ở mỗi đầu), khớp **một miếng vá tự do** vào một phần mượt, cong nhẹ, và cắt mọi mặt theo đường bao của phần bản quét mà nó đến từ đó, nên lỗ và góc được giữ. Tùy chọn: **dung sai** (điểm bản quét có thể cách mặt phẳng hoặc trụ bao xa, tính bằng mm, và vẫn thuộc về nó, cũng là mục tiêu cho miếng vá tự do), **mảnh nhỏ nhất** (một phần diện tích bề mặt) và **số mặt tối đa**. Cùng bản quét và tùy chọn luôn cho cùng các mặt.

Kết quả là một bảng, mỗi mặt một dòng: loại của nó, có bao nhiêu tam giác nó đến từ đó, và sai số **đo từ bản quét đến mặt** (rms, lớn nhất, và phần điểm nằm trong dung sai). Các điểm được đo là các đỉnh của bản quét và trung điểm mỗi tam giác. Sai số không được đo theo chiều ngược lại (mặt đến bản quét), nên một mặt vươn ra ngoài bản quét sẽ không hiện. Ghi chú dưới bảng cũng cho biết có bao nhiêu diện tích quá nhỏ để khớp. Trong khung nhìn, các điểm bản quét được tô màu theo **bản đồ lệch** của chúng: xanh trên mặt, xanh lá ở nửa đường dung sai, đỏ ở dung sai hoặc hơn (bỏ đánh dấu **Hiện bản đồ lệch** để ẩn). Các mảnh gập về chính nó (ví dụ một ống kín được khớp bằng miếng vá tự do) được liệt kê là không khớp, không bao giờ bị ép thành một bề mặt.

**Khâu bề mặt thành khối đặc** khâu mọi bề mặt đang hiện mà chưa nằm trong khối đặc nào thành một khối đặc kín. Các mặt quét chỉ gặp nhau trong phạm vi sai số của chính bản quét, nên nó thử khoảng cách nối nhỏ nhất để khép kín (không bao giờ vượt quá **khoảng cách khâu** bạn đặt) và bị từ chối bằng lời khi các mặt không khép kín. Nó không bao giờ vá lấp một khe hở. Một hộp có cạnh bo sẽ khâu được khi các bo góc của nó được tìm thấy như các mặt riêng; khoảng cách nối đã khép kín nằm trong kết quả. Khối đặc khi đó làm việc với Hợp, Trừ, Giao và **Ghi vào chi tiết**.

Điều nó không làm: **bo góc vành** (một xuyến) chỉ được tìm quanh trục của một trụ hoặc nón đã tìm thấy, và **bo góc biến đổi** chỉ dọc theo một cạnh khá thẳng (các tiết diện của nó được cắt vuông theo một hướng); ở nơi khác chúng xuất hiện như miếng vá tự do khi đủ mượt, và nếu không thì bị bỏ; cầu, nón và bo góc được tìm bằng lấy mẫu ngẫu nhiên, nên một cái rất nhỏ (vài tam giác) có thể bị bỏ sót; bản đồ lệch hiển thị khoảng cách từ bản quét đến các mặt, không theo chiều ngược lại; bản quét rất lớn (trên 300,000 tam giác) bị từ chối ở đây. Các mặt của trụ quay đủ một vòng được cắt quanh lỗ, với đường nối đặt nơi không có lỗ. Kiểm tra mọi mặt với bản quét của bạn trước khi dựa vào nó.

## Chưa xây dựng

Bo tròn các cạnh gặp nhau tại một góc của mặt cong hoặc với các bán kính khác nhau (pha trộn đỉnh), bo góc giữa các mặt không gặp nhau, bo góc trong kết thúc trên một mặt nghiêng hoặc cong, Boolean và bo góc được tính trên bề mặt mà không có tam giác (ở đây bộ máy khối đặc làm việc trên tam giác trong dung sai, và mọi điểm sau đó được đặt lại trên bề mặt chính xác), một thân đã ghi mà theo các bề mặt khi chúng thay đổi, cắt một bề mặt bằng bề mặt khác ngoài Boolean, lấp lỗ có hơn bốn cạnh, chiếu đường cong lên bề mặt.
