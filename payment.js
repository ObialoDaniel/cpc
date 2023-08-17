    
        function makePayment() 
        {
            FlutterwaveCheckout({
            public_key: "FLWPUBK_TEST-a005cfa1113396a1223fa7a04e98d514-X",
            tx_ref: "titanic-48981487343MDI0NzMx",
            amount: 500,
            currency: "NGN",
            payment_options: "card, mobilemoneyghana, ussd",
            redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
            meta: {
                consumer_id: 1,
                consumer_mac: "92a3-912ba-1192a",
            },
            customer: {
                email: "rose@unsinkableship.com",
                phone_number: "08102909304",
                name: "Rose DeWitt Bukater",
            },
            customizations: {
                title: "The CPC Admission Payment",
                description: "Payment for Admission Fee",
                logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
            },
            })
        }
        
      