// const admin = require("firebase-admin");

// const serviceAccount = require("./serviceAccountKey.json"); // đường dẫn đến file này trong thư mục, có thể để như này và thay đổi lại nội dung trong file cũng được
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://upload-file-demo-d1beb.firebaseio.com", // Thay thế bằng URL của dự án Firebase, có dạng: https://<projectId>.firebaseio.com, chỗ <projectID> thì thay bằng id của dự án trong firebase của mình
// });

// const db = admin.firestore();
// const backupData = {};

// db.collection("users")
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       backupData[doc.id] = doc.data();
//     });

//     const fs = require("fs");
//     // có thể đổi tên file backup.json, muốn lưu vào file nào thì đổi tên tương ứng.
//     fs.writeFileSync("backup.json", JSON.stringify(backupData, null, 2));
//     console.log("Sao lưu dữ liệu thành công.");
//   })
//   .catch((error) => {
//     console.error("Lỗi khi sao lưu dữ liệu:", error);
//   });


const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://upload-file-demo-d1beb.firebaseio.com", // Thay thế bằng URL của dự án
});

const auth = admin.auth();
const backupData = {};

auth.listUsers()
  .then((listUsersResult) => {
    listUsersResult.users.forEach((userRecord) => {
      // Trích xuất thông tin xác thực của người dùng và lưu vào backupData
      backupData[userRecord.uid] = {
        email: userRecord.email,
        // Thêm các thông tin khác mà bạn muốn sao lưu
      };
    });

    const fs = require("fs");
    // Lưu dữ liệu sao lưu vào tệp JSON, có thể đổi tên tệp theo ý muốn.
    fs.writeFileSync("authBackup.json", JSON.stringify(backupData, null, 2));
    console.log("Sao lưu thông tin xác thực thành công.");
  })
  .catch((error) => {
    console.error("Lỗi khi sao lưu thông tin xác thực:", error);
  });
