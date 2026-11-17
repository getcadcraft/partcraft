---
title: Mở một chi tiết tiêu chuẩn
summary: Bắt đầu một chi tiết từ bu lông, vít, đai ốc, vòng đệm, chốt, ổ bi hoặc then có kích thước theo tiêu chuẩn, với mọi cỡ trong bảng tiêu chuẩn là một cấu hình.
keywords: chi tiết tiêu chuẩn, bu lông, vít, lục giác, đai ốc, vòng đệm, chốt, chốt định vị, ổ bi, ổ bi cầu, then, then song song, chi tiết ghép nối, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, mẫu, thư viện
from: b9e2811f
---

PartCraft mở sẵn các chi tiết cơ khí thông dụng: kích thước lấy từ bảng của các tiêu chuẩn, và mỗi cỡ trong bảng là một cấu hình mà bạn có thể chuyển sang.

## Mở một chi tiết

1. Nhấn {{ui:Standard part}} trong nhóm {{ui:File}}.
2. Trong {{ui:Part}}, chọn loại, ví dụ {{ui:Vít đầu lục giác (ISO 4017)}}.
3. Trong {{ui:Size}}, chọn cỡ, ví dụ `M10 × 40`.
4. Nhấn {{ui:Open}}.

Chi tiết mở ra như một chi tiết mới, chưa lưu. Lưu để giữ lại ({{key:Mod+S}}).

| Chi tiết | Tiêu chuẩn | Tham số |
|---|---|---|
| Vít đầu lục giác, bu lông lục giác | ISO 4017, ISO 4014, ASME B18.2.1 (inch) | `d` cỡ ren, `s` khoảng cách giữa các mặt, `k` chiều cao đầu, `l` chiều dài |
| Đai ốc lục giác | ISO 4032, ASME B18.2.2 (inch) | `d`, `s`, `height` |
| Vòng đệm phẳng | ISO 7089 | `d1` trong, `d2` ngoài, `h` độ dày |
| Chốt song song | ISO 2338 | `d`, `l` |
| Ổ bi rãnh sâu | ISO 15 | `d` lòng, `D` ngoài, `B` bề rộng |
| Then song song | DIN 6885-1, dạng A | `b` bề rộng, `h` chiều cao, `l` chiều dài |

## Đổi cỡ

Mỗi cỡ là một cấu hình (xem [Cấu hình và bảng thiết kế](topic:design-tables)): mở {{ui:Parameters}} và chọn một cỡ khác, hoặc đổi một tham số, chẳng hạn `l` để có vít dài hơn, rồi lưu nó thành cấu hình riêng của bạn.

## Những gì được mô hình hóa

- Vít và bu lông: đầu lục giác và thân trơn. Đai ốc: lục giác có lỗ với cỡ danh nghĩa của ren. Ren không được mô hình hóa; thêm ren bằng {{ui:Thread}} nếu cần (xem [Ren](topic:threads)).
- Chốt: một trụ trơn; các vát mép đầu bị bỏ qua.
- Ổ bi: chỉ bao ngoài (một vòng có lòng, đường kính ngoài và bề rộng), đó là những gì bạn cần để đặt một ổ bi.
- Then: then đầu tròn.

Vật liệu của chi tiết là thép, nên bảng khối lượng hiển thị trọng lượng của nó. Bánh răng chưa được xây dựng ở đây: PartCraft không có đặc trưng răng, và một đĩa không phải là bánh răng. CadCraft vẽ bánh răng theo quy ước bản vẽ, và thư viện có chúng dưới dạng bản vẽ.
