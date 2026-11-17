---
title: Chạy từ ổ USB
summary: Các công cụ kỹ thuật ghi những gì và ghi ở đâu, để CadCraft Studio chạy được từ USB hoặc từ bất kỳ thư mục nào mà không cần trình cài đặt và không cần quyền quản trị: cài đặt, bộ tạo, bộ nhớ đệm và tệp chi tiết, và những gì nằm lại trên USB.
keywords: usb, di động, không cần trình cài đặt, quản trị viên, quản trị, cài đặt, thư mục dữ liệu, bộ tạo, nơi ghi tệp, ngoại tuyến, quyền riêng tư, truy cập máy chủ
from: 263efc79
---

Các công cụ kỹ thuật (bộ tạo, thư viện kỹ thuật, các bước kiểm tra và tệp dữ liệu) **không cần quyền quản trị viên** và **không cần trình cài đặt**. Chúng chỉ ghi những gì được liệt kê ở đây, và không ghi gì khác.

| Nội dung | Nơi lưu giữ |
|---|---|
| Các chi tiết của bạn, cùng khối đã dựng, bảng dữ liệu và kết quả kiểm tra | Tệp chi tiết bạn lưu (`.partcraft.json`), ở nơi bạn lưu nó. |
| Bộ tạo bạn đã mở từ tệp | Trong bộ nhớ riêng của ứng dụng: bộ nhớ cục bộ của trình duyệt khi dùng trên trang web, và thư mục `data` nằm cạnh chương trình trong Studio di động. Tối đa 20. |
| Cài đặt (kích thước voxel bạn đặt, số luồng bộ giải, bố cục) | Cùng bộ nhớ riêng của ứng dụng. |
| Bảng dữ liệu, trường, lưới | Chỉ ở nơi bạn lưu chúng: tệp tải xuống được lưu vào nơi bạn chọn. |

Các công cụ **không tự thực hiện kết nối mạng**: các bộ tạo đi kèm là tệp trong thư mục riêng của ứng dụng; thư viện và các bước kiểm tra chạy trên máy tính của bạn, trong một tiến trình nền không thể kết nối mạng; và dữ liệu kỹ thuật (tính chất của nước và không khí, vật liệu) nằm sẵn bên trong ứng dụng. Bộ tạo bạn mở từ một tệp được đọc trên máy tính của bạn và không được gửi đi đâu cả.

## Bản zip Windows di động và Linux

Studio di động cho Windows giữ cài đặt, bộ nhớ đệm và tiện ích bổ sung trong thư mục `data` cạnh chương trình. AppImage Linux giữ chúng ngay bên cạnh nó khi có một tệp tên `portable` nằm cạnh; nếu không có tệp đó, nó dùng thư mục chính của bạn. Không có dạng di động cho Mac: hệ thống không cho phép ứng dụng được tải về ghi vào chính thư mục chứa nó. Ghi chú di động riêng của vỏ ứng dụng (trợ giúp `Studio`) liệt kê những gì chương trình ghi.

## Truy cập máy chủ

Không có gì ở đây yêu cầu truy cập máy chủ. Máy in, máy nối tiếp và thiết bị USB là riêng biệt: chúng chỉ hỏi khi một tác vụ cần đến chúng, mỗi thiết bị một lần, và không có gì trong bộ tạo hay các bước kiểm tra chạm vào chúng.
