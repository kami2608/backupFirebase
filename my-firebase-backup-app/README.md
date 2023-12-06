
- B1: cd đến thư mục my-firebase-backup-app rồi mở terminal chạy câu lệnh "npm install"
- B2: chạy câu lệnh "npm install firebase-admin" để cài đặt thư viện Firebase Admin SDK
- B3: Trong dự án firebase đã tạo, vào phần setting của project, chọn tab "Service accounts", cuộn xuống sẽ có phần firebase admin sdk, nhấn nút "Generate new private key", sau đó lưu file tải xuống là "serviceAccountKey.json", thay thế file này với file có sẵn.
- B4: Trong file backupFirestore sửa lại như chú thích
- B5: run mỗi file backupFirestore.js thôi, nếu backup thành công thì trong terminal sẽ trả về "Sao lưu dữ liệu thành công.", và sẽ sinh ra file backup.json
