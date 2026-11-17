---
title: Gân và tấm góc
summary: Gia cố chi tiết bằng một gân vẽ như một đường: nó lấp đầy từ đường đó đến các thành, dày một độ dày đặt trên mặt phẳng phác thảo, về phía bạn chọn.
keywords: gân, tấm góc, bản, gia cố, thanh chống, giá đỡ, tấm, góc, thành mỏng, tăng cường
from: 5c218881
---

:::note
**Chưa xây dựng trong phiên bản này.** Gân cần một kernel hình học chính xác, mà phiên bản PartCraft này không có: nó dựng mọi chi tiết bằng kernel lưới. [Chưa xây dựng](topic:not-built-yet) cho biết nên làm gì thay thế. Phần còn lại của trang này mô tả nó khi hoạt động với một kernel chính xác.
:::

Một **gân** (hay tấm góc) là một thành mỏng làm cứng chi tiết, như tam giác bên trong góc của một giá đỡ chữ L. Bạn chỉ vẽ cạnh tự do của nó: PartCraft lấp khoảng giữa đường đó và các thành. Nó cần **kernel chính xác** (xem [Kernel lưới](topic:solid-kernels)).

## Thêm một gân

1. Tạo một mặt phẳng đi qua giữa nơi gân đặt (với một giá đỡ sâu 40, một mặt phẳng cách trước phác thảo 20: xem [Mặt phẳng, trục và điểm tham chiếu](topic:reference-geometry)).
2. Phác thảo trên nó **một đường** từ thành đến thành — hoặc vài đường nối tiếp nhau cho một cạnh gân uốn. Đường có thể dừng cách các thành: hai đầu của nó được kéo dài cho đến khi gặp chúng.
3. Chọn phác thảo và chọn {{ui:Thêm}} › {{ui:Gân}}.

Gân lấp đầy từ đường đến các thành về phía giữa chi tiết, nên một tấm góc sẽ nằm trong góc bên trong. Nếu phía đó mở và phía kia kín, PartCraft sẽ lật nó cho bạn và thông báo.

## Cài đặt

- **Độ dày (mm)** là độ dày của gân theo mặt phẳng phác thảo. Nó có thể được điều khiển bởi một tham số.
- **Độ dày** (lựa chọn bên dưới nó): **Căn giữa trên mặt phẳng phác thảo**, **Trước mặt phẳng** (dọc theo pháp tuyến của nó) hoặc **Sau mặt phẳng**.
- **Lật** lấp đầy phía bên kia của đường.

## Thông báo

- **Ở phía này, cạnh của gân không bao giờ chạm vào thân** — không có gì khép kín trong khoảng trống phía đó: đánh dấu hoặc bỏ đánh dấu **Lật**, hoặc di chuyển đường để có các thành giới hạn nó.
- **Gân cần một chuỗi đường hở duy nhất trong phác thảo của nó** — phác thảo có một hình kín, một cung hoặc một spline, hoặc các đường không nối đầu với đầu.
- **Cạnh của gân chạy bên trong thân tại đó** — đường nằm bên trong khối; hãy vẽ nó trong khoảng trống giữa các thành.
