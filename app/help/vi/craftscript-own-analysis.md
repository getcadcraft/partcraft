---
title: Viết phân tích của riêng bạn
summary: Xây dựng một phân tích dưới dạng các kịch bản trong không gian làm việc Kịch bản: tạo lưới cho chi tiết, lắp ráp và giải, hiển thị trường và biểu đồ hội tụ, kiểm tra kết quả với tính toán tay, và giữ các bước thành kịch bản riêng chia sẻ biến.
keywords: phân tích riêng, phân tích tùy chỉnh, kịch bản FEA, phần tử hữu hạn, lắp ráp, độ cứng, điều kiện biên, giải, pcg, thưa, trường, hậu xử lý, hội tụ, xác minh, tính toán tay, kiểm tra, quy trình
from: 0f471a8e
---

Một phân tích trong không gian làm việc Kịch bản là vài kịch bản ngắn trao đổi biến cho nhau. Bắt đầu từ một [hàm thư viện](topic:craftscript-library) gần với nhu cầu của bạn, tạo bản sao và thay đổi nó; hoặc xây dựng từ đầu như dưới đây.

## 1. Lưới

```
model = part();                  % chi tiết bạn đang mô hình, dưới dạng mô hình
m = tetmesh(model, 4);           % tứ diện rộng khoảng 4 mm
show(m)
```

Kiểm tra lưới trong khung nhìn trước khi đi tiếp: {{key:F}} vừa khung nó, và {{ui:eye}} trong **Đang hiển thị** sẽ ẩn chi tiết.

## 2. Lắp ráp và giải

Viết vòng lặp phần tử trong kịch bản (nó đọc giống như sách giáo khoa), và để các phần nặng cho các hàm tích hợp: ma trận phần tử, lắp ráp thưa từ bộ ba (triplet), và bộ giải gradient liên hợp với bộ tiền điều kiện. Một hàm thư viện như `static_tet` (khi thư viện đã có nó) là một ví dụ đầy đủ để sao chép.

## 3. Hiển thị kết quả

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % một giá trị cho mỗi nút
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Phạm vi của chú giải có thể nhập vào hoặc đặt lại về {{ui:Tự động}}.
- Nhấp vào lưới để đọc các giá trị tại một nút.
- Biểu đồ giữ cùng `'id'` được cập nhật tại chỗ, vì vậy hãy in và vẽ biểu đồ bên trong vòng lặp để theo dõi hội tụ.

## 4. Kiểm tra

So sánh với điều bạn đã biết: độ võng đầu mút của dầm công-xôn với PL³/3EI, một tấm có lỗ với hệ số tập trung ứng suất của nó, các phản lực với các tải. Viết kiểm tra thành kịch bản riêng để nó chạy lại sau mỗi thay đổi:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Giữ lại

- Mỗi bước có thể là một thẻ kịch bản riêng: chúng chia sẻ biến, nên hãy chạy lần lượt.
- Kịch bản được lưu trong chi tiết. Đánh dấu **Lưu các biến cùng với chi tiết** trên tab Biến để giữ cả kết quả (tối đa 32 MB).
- {{ui:Lưu}} trong nhóm Kịch bản tải một kịch bản xuống để chia sẻ; {{ui:Mở}} đưa một kịch bản vào.
