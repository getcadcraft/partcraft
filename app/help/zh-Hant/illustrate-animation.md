---
title: 為手冊製作動畫
summary: 在某個時間為零件（位置、顯示或隱藏、不透明度、顏色）與攝影機設定關鍵影格，錄製爆炸視圖的步驟，依序播放各視圖，然後在此播放或儲存為影片。
keywords: 說明圖, 動畫, 關鍵影格, 時間軸, 爆炸動畫, 攝影機, 影片, webm, mp4, 播放
from: df4f91f9
---

開啟{{ui:Animation}}區段：

- {{ui:Key everything}}、{{ui:Key the selected parts}}與{{ui:Key the camera}}會在目前時間儲存現況：每個零件的位置、是否顯示、其不透明度與顏色，以及攝影機。變更場景、移動{{ui:Time}}滑桿後再次設定關鍵影格：動畫即會從一個關鍵影格過渡到下一個。
- {{ui:Record the exploded view}}會為場景爆炸視圖的每個步驟新增一個關鍵影格，每步一秒，接續於既有內容之後。
- {{ui:Views as camera stops}}會依序播放各視圖：攝影機移至每個視圖並停留片刻，零件則採用各視圖的外觀。

{{ui:Play}}、{{ui:Pause}}、{{ui:Stop}}與{{ui:Loop}}會在視圖中播放動畫；每個零件與攝影機的關鍵影格會列於清單中（點選關鍵影格可跳至其時間）。{{ui:Save video}}會寫出 WebM 或 MP4（視瀏覽器是否支援編碼），或將影格以 PNG 圖片儲存於 ZIP 中。

動畫以 ModelCraft 動畫工作區所使用的相同格式保存。目前其曲線編輯器與剪輯仍屬於 ModelCraft。
