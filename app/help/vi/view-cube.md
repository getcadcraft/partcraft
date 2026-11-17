---
title: Khối xem
summary: Nhấp vào một mặt, cạnh hoặc góc của khối ở góc khung nhìn để nhìn từ đó, kéo để xoay quanh, xoay vòng la bàn, đi quanh một khung nhìn chính diện, và quay về khung nhìn chủ.
keywords: khối xem, viewcube, khối, la bàn, bắc, khung nhìn chủ, khung nhìn tiêu chuẩn, trên, trước, phải, đẳng trắc, góc, cạnh, xoay quanh, xoay khung nhìn, biểu tượng trục, chỉ báo góc, điều hướng
from: afc33dc7
---

Khối xem nằm ở góc trên bên phải của khung nhìn 3D (không có khi đang phác thảo hoặc trên tờ bản vẽ). Nó xoay theo khung nhìn, nên luôn cho biết bạn đang nhìn theo hướng nào: {{ui:Trên}} là phía +Y của chi tiết (mặt phẳng Trên), {{ui:Trước}} là phía +Z (mặt phẳng Trước hướng về bạn khi bạn nhìn vào nó), {{ui:Phải}} là phía +X. Nó vẫn trong suốt cho đến khi bạn trỏ vào nó.

## Nhìn từ một mặt, một cạnh hoặc một góc

1. Trỏ vào khối. Phần chi tiết dưới con trỏ sáng lên: giữa một mặt, một cạnh (nó sáng trên cả hai mặt chung cạnh đó) hoặc một góc (trên cả ba mặt).
2. Nhấp vào. Khung nhìn xoay để nhìn từ đó, giữ nguyên tâm và mức thu phóng.

Có 26 vị trí để nhấp: 6 mặt ({{ui:Trên}}, {{ui:Dưới}}, {{ui:Trước}}, {{ui:Quay lại}}, {{ui:Trái}}, {{ui:Phải}}), 12 cạnh và 8 góc. Một góc cho khung nhìn ba phần tư cổ điển; một cạnh cho khung nhìn nằm giữa hai mặt.

Nhấp {{ui:Trước}}, {{ui:Trên}} hoặc {{ui:Phải}} cho cùng các khung nhìn như {{ui:Khung nhìn}} trên thanh công cụ, nhưng không phóng để vừa khung.

## Xoay bằng cách kéo khối

Kéo khối để xoay khung nhìn, giống như xoay quanh chính khung nhìn. Một thao tác kéo không bao giờ bị coi là nhấp, nên bạn có thể nắm khối ở bất kỳ đâu.

## Vòng la bàn

Vòng dưới khối mang các chữ B, Đ, N và T.

- **Kéo vòng** để xoay mô hình quanh trục đứng, như thể nó đứng trên bàn xoay. Vòng đi theo con trỏ.
- **Nhấp một chữ** để nhìn từ phía đó, giữ độ dốc khi bạn nhìn xuống. Trong khung nhìn thẳng từ trên, chữ bạn nhấp sẽ nằm ở đáy màn hình.

## Khung nhìn chính diện: mũi tên

Khi bạn nhìn thẳng vào một mặt, các mũi tên nhỏ xuất hiện quanh khối:

- Bốn **tam giác** đưa mặt ở phía đó ra phía trước: tam giác phía trên khối cho thấy mặt từng ở trên đỉnh, và tương tự.
- Hai **mũi tên cong** ở góc trên bên phải xoay hình một phần tư vòng theo chiều kim đồng hồ hoặc ngược lại, mà không đổi mặt bạn đang nhìn. Dùng chúng để xoay mặt bằng sao cho một bức tường dài chạy ngang màn hình.

## Trang chủ

Nút hình ngôi nhà ở góc trên bên trái của khối quay về khung nhìn ba phần tư và vừa khung chi tiết. {{key:Home}} làm điều tương tự khi khối đang có tiêu điểm bàn phím.

## Với bàn phím

{{key:Tab}} đến khối, rồi:

| Phím | Chức năng |
|---|---|
| {{key:left}} / {{key:right}} | chọn một mặt, cạnh hoặc góc quanh khối, theo bước một phần tám vòng (trình đọc màn hình cho biết đó là gì) |
| {{key:up}} / {{key:down}} | chọn vị trí cao hơn hoặc thấp hơn, lên đến {{ui:Trên}} hoặc xuống đến {{ui:Dưới}} |
| {{key:Enter}} hoặc {{key:Space}} | nhìn từ vị trí đã chọn |
| {{key:Shift+left}} / {{key:Shift+right}} | xoay khung nhìn một phần tư vòng quanh trục đứng |
| {{key:Home}} | khung nhìn chủ |
| {{key:Esc}} | rời khỏi khối |

Các phím nhấn trên khối ở lại với khối: chúng không khởi động công cụ PartCraft.

## Biểu tượng trục hoặc không gì cả

Mở {{ui:Cài đặt}} ({{key:Mod+,}}), thẻ {{ui:PartCraft}}, và đặt **Chỉ báo góc** thành {{ui:Khối xem}} (mặc định), {{ui:Biểu tượng trục}} (một dấu X, Y, Z nhỏ ở góc dưới bên trái: X đỏ, Y xanh lá, Z xanh dương) hoặc {{ui:Không có}}. Trình duyệt này ghi nhớ lựa chọn. Xem [Cài đặt PartCraft](topic:settings#corner-indicator).

:::note
Khối hiển thị chi tiết đúng như PartCraft dựng: Y hướng lên, nên {{ui:Trên}} của khối là mặt phẳng Trên. Các chữ la bàn chỉ để xoay; một chi tiết không có hướng bắc.
:::
