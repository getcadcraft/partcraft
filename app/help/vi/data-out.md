---
title: Xuất dữ liệu: bảng dữ liệu, trường và lưới
summary: Lưu bảng dữ liệu của một thân được tạo dưới dạng JSON hoặc PDF, trường của nó dưới dạng ảnh VTK (.vti) hoặc tập mức OpenVDB (.vdb), và bề mặt của nó dưới dạng lưới VTK (.vtu) cho ParaView và các công cụ phân tích khác, và lưới dưới dạng 3MF mang dữ liệu của bộ tạo. Cùng một chi tiết luôn ghi cùng các tệp.
keywords: xuất, bảng dữ liệu, json, pdf, vti, vtu, vtk, paraview, 3mf, trường, khoảng cách có dấu, fea, cfd, siêu dữ liệu, openvdb
from: 817b4579
---

Trong không gian làm việc {{ui:Kỹ thuật}}, hoặc trong thuộc tính của một thân được tạo, mở **Xuất dữ liệu**:

| Nút | Tệp | Dùng cho |
|---|---|---|
| Bảng dữ liệu (JSON) | `.json` | Mọi đầu vào, mọi số kèm đơn vị và nguồn, các kiểm tra, dấu vân tay lưới. Được sắp xếp, không có thời gian: cùng một chi tiết cho cùng một tệp. |
| Bảng dữ liệu (PDF) | `.pdf` | Cùng nội dung trên giấy, trải qua bao nhiêu trang cần thiết. |
| Trường (.vti) | `.vti` | Chi tiết dưới dạng khoảng cách có dấu (âm bên trong) và mặt nạ bên trong trên một lưới điểm: một tệp ảnh VTK cho ParaView và các công cụ xây dựng trên VTK. Nó được tạo từ bề mặt của thân ở kích thước voxel của đầu vào bộ tạo, nên mất chút thời gian, và một thân trên 400 000 tam giác quá lớn cho trang này: hãy lưu trường từ kịch bản (`field_bake`) thay thế. |
| Tập mức (.vdb) | `.vdb` | Cùng trường dưới dạng tập mức OpenVDB: một cây thưa chỉ giữ dải voxel mỏng quanh bề mặt, cho các công cụ đọc OpenVDB (bộ kết xuất, mô phỏng và chương trình 3D). Kích thước voxel và đơn vị là của bộ tạo (mm), dải hẹp là phần hoạt động, bên trong là âm. Được tạo từ bề mặt như `.vti`, với cùng giới hạn 400 000 tam giác; một tệp trên 1.5 GB sẽ bị từ chối (dùng kích thước voxel lớn hơn). Tệp có định dạng OpenVDB 224, không nén ngoài việc đóng gói giá trị hoạt động của OpenVDB, nên mọi trình đọc OpenVDB đều mở được. |
| Bề mặt (.vtu) | `.vtu` | Các tam giác, với diện tích và pháp tuyến của mỗi tam giác. |
| 3MF kèm dữ liệu bộ tạo | `.3mf` | Lưới theo mm cho phần mềm cắt lát (slicer), với bộ tạo, đầu vào của nó và (đối với lưới phân cấp) dải thành của nó dưới dạng siêu dữ liệu trong tệp. |

Không có gì trong các tệp này đến từ đồng hồ hay máy tính, nên bạn có thể so sánh hai tệp từng byte: một byte thay đổi nghĩa là chi tiết đã thay đổi.

## Chưa xây dựng

- Một `.vti` hoặc `.vdb` của trường ở kích thước voxel khác với của bộ tạo.
- Đọc các tệp `.vdb` vào (chỉ có ghi là đã xây dựng).
