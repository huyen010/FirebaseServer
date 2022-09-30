var admin = require("firebase-admin");

var serviceAccount = require("./key.json");

// đăng ký server trong trang service account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-e290f-default-rtdb.asia-southeast1.firebasedatabase.app"
});

// payload

var payload = { 
    notification: { 
      title: "Đây là Thông báo 2", 
      body: "Đây là nội dung của thông báo." ,
      // click_action: "https://www.google.com/"
    },
    data:{
        click_action: "https://www.google.com/"
    }
  }; 
  
  var options = { 
    priority: "high", 
    timeToLive: 60 * 60 * 24,
    // webpush: "https://www.google.com/"
  };
  topic = 'abcd'
  registrationToken = 'e5v9-Wc0gEPqD_q0Mc0UjB:APA91bEJcsIWQkT2ojWTgBEKDSxPz0Xeu1wjwQ_hccq8CTKapxMUEXrrix35lyLHdxNOSTmMKYnjb8CN6OblGd55oL9arjwRV3S5oOzsYO8WntYvI4aNIC10Nu_sD6lGAXWuN4LFp9iy'
//   đăng ký topic
  // admin.messaging().subscribeToTopic(registrationToken, topic)
  // .then(function(response) {
  //   console.log("Successfully subscribed to topic:", response);
  // })
  // .catch(function(error) {
  //   console.log("Error subscribing to topic:", error);
  // });

// gửi thông báo tới 1 device
//   admin.messaging().sendToDevice(registrationToken, payload, options)
//   .then(function(response) {
//     console.log("Successfully sent message:", response);
//   })
//   .catch(function(error) {
//     console.log("Error sending message:", error);
//   });

// hủy đăng ký topic


// gửi message tới topic
admin.messaging().sendToTopic(topic, payload,options)
  .then(function(response) {
    console.log(payload)
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });
