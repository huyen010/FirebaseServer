var FCM = require('fcm-node');
    var serverKey = 'AAAAioNz434:APA91bFCMUaxRSkVg0h7YuIHFaxHLGU_20mCwcWIV2TyXYjU7JzcmA-_1AeRO79GGUsNn4BTzP2rCGeI_1LnrDruDw7VW9xEXKvMKHgbGrOBoMvRqVj8QHDQP6WzK7njSmaSDpdka3GZ';
    var fcm = new FCM(serverKey);

    var message = {
	to:'e5v9-Wc0gEPqD_q0Mc0UjB:APA91bEJcsIWQkT2ojWTgBEKDSxPz0Xeu1wjwQ_hccq8CTKapxMUEXrrix35lyLHdxNOSTmMKYnjb8CN6OblGd55oL9arjwRV3S5oOzsYO8WntYvI4aNIC10Nu_sD6lGAXWuN4LFp9iy',
        notification: {
            title: 'NotifcatioTestAPP',
            body: '{"Message from node js app"}',
        },

        data: { //you can send only notification or only data(or include both)
            title: 'ok cdfsdsdfsd',
            body: '{"name" : "okg ooggle ogrlrl","product_id" : "123","final_price" : "0.00035"}'
        },
        webpush: {
            fcmOptions: {
              link: "https://google.com"
            }
        }

    };

    fcm.send(message, function(err, response) {
        if (err) {
            console.log("Something has gone wrong!"+err);
			console.log("Respponse:! "+response);
        } else {
            // showToast("Successfully sent with response");
            console.log("Successfully sent with response: ", response);
        }

    });