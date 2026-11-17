---
title: Quay lại và tiến tới qua lịch sử
summary: Di chuyển thanh quay lại lên xuống từng đặc trưng một để xem chi tiết được dựng, chèn đặc trưng vào giữa, và trở về cuối.
keywords: quay lại, rollback, tiến tới, thanh quay lại, đi từng bước qua lịch sử, chèn đặc trưng, đóng băng, lịch sử
from: 9a366cae
---

Thanh quay lại quyết định phần lịch sử nào được dựng. Các đặc trưng nằm dưới nó bị làm xám và không được dựng; đặc trưng mới được thêm vào tại thanh.

## Đi từng đặc trưng một

Khi chi tiết đang hiển thị trên màn hình (không có phác thảo hay bản vẽ nào đang mở):

| Thao tác | Kết quả |
|---|---|
| {{key:[}} hoặc nút mũi tên lên cạnh tên chi tiết | Thanh di chuyển lên một đặc trưng |
| {{key:]}} hoặc nút mũi tên xuống | Thanh di chuyển xuống một đặc trưng |
| {{key:End}} hoặc nút đưa thanh về cuối | Mọi đặc trưng được dựng lại |

Thanh trạng thái cho biết thanh đang ở đâu, ví dụ "Thanh quay lại sau Sketch1: đã dựng 1 trên 2 đặc trưng". Các nút tắt khi thanh không thể di chuyển thêm theo hướng đó.

Bạn cũng có thể chọn {{ui:Quay lại đến đây}} trên bất kỳ đặc trưng nào, hoặc nhấp **Thanh quay lại · tiến tới** trong lịch sử.

## Chèn đặc trưng vào giữa

1. Lùi thanh cho tới khi nó nằm đúng chỗ đặc trưng mới thuộc về.
2. Thêm đặc trưng: nó được đưa vào tại thanh.
3. Nhấn {{key:End}} để dựng phần còn lại của lịch sử lên trên nó.

Mỗi lần di chuyển thanh là một bước bạn có thể hoàn tác bằng {{key:Mod+Z}}. Vị trí của thanh được lưu trong tệp, nên một chi tiết có thể được gửi đi ở trạng thái đã quay lại. Công cụ dòng lệnh cũng di chuyển nó: `partcraft rollback part.json` và `partcraft forward part.json --end`.
