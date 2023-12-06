const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json"); // đường dẫn đến file này trong thư mục, có thể để như này và thay đổi lại nội dung trong file cũng được
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://upload-file-demo-d1beb.firebaseio.com", // Thay thế bằng URL của dự án Firebase, có dạng: https://<projectId>.firebaseio.com, chỗ <projectID> thì thay bằng id của dự án trong firebase của mình
});

const db = admin.firestore();
const backupData = {};

db.collection("users")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      backupData[doc.id] = doc.data();
    });

    const fs = require("fs");
    // có thể đổi tên file backup.json, muốn lưu vào file nào thì đổi tên tương ứng.
    fs.writeFileSync("backup.json", JSON.stringify(backupData, null, 2));
    console.log("Sao lưu dữ liệu thành công.");
  })
  .catch((error) => {
    console.error("Lỗi khi sao lưu dữ liệu:", error);
  });
