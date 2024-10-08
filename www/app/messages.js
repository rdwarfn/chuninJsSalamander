
// 
define(function () {
    return {
        // 01. test materi variables
        testVariables () {
            /**
             * data: fistName, lastName, age
             * 
             * Tugas:
             * 1. Buatlah var dgn nama pada data
             */

            var firstName; // undefined
            var lastName = "Indratama"
            var age = 17


            return {
                firstName,
                lastName,
                age
            }
        },

        // 02. test materi constants
        testConstants () {
            /**
             * dataUserLogin: id, username, address, password, email
             * 
             * Tugas:
             * 1. Buatlah constants dgn nama pada dataUserLogin,
             *    dngn masing" aturan penamaan yg telah dijelaskan pada
             *    materi constants.
             * 
             * 2. Cobalah untuk mencoba mengganti nilai password
             */

            // tulis code dibawah ini
            const id = 1;
            const username = "Hariz";
            const address = "Jl. Raya Pondok Cabe";
            const password = "12345";
            const email = "jschunin@gmail.com";




            // sertakan semua code yg telah dibuat di return
            return {
                id,
                username,
                address,
                password,
                email
            }
        },


        // 03. test materi string
        testString () {
            /**
             * dataUserLocation: address, subDistrict, district, city, province, postcode
             * 
             * Tugas:
             * 1. Buatlah var dgn nama pada dataUserLocation,
             *    dngn menggunakan single atau double quotes
             * 2. Buatlah constants dngn nama addresses,
             *    yg nilainya menyatukan var address, subDistrict & district,
             *    yg setiap var yg disatukan diakhiri dngn special char backslash newline
             * 3. Buatlah constants dngn nama locations,
             *    yg nilainya menyatukan constant addresses,
             *    var city, province dan postcode
             * 
             * Catatan:
             * - lihat kembali file materi
             * - Gunakan string interpolasi pada tugas 3
             */

            // tulis code dibawah ini
            var address = "Taman Anggrek Residence";
            var subDistrict = "Tanjung Duren Selatan";
            var district = "Grogol Petamburan";
            var province = "DKI Jakarta";
            var postCode = "11470";

            const addresses = `${address} \n${subDistrict} \n${district}\n`;
            const locations = `${addresses} ${province} ${postCode}`



            // sertakan semua code yg telah dibuat di return
            return {
              addresses,
              locations

            }
        },


        // 04. test undefined values
        testUndefinedValues () {
            /**
             * Tugas:
             * 1. Buatlah dua var tanpa di assign value
             *    dngn penamaan bebas
             * 2. Buatlah constants dngn nama
             *    isEqualUndefined_(nama var yg telah dibuat di tugas.1),
             *    isEqualNull_(nama var yg telah dibuat di tugas.1).
             *    Assign masing" constants dgn perbandingan menggunakan ==,
             *    Sesuaikan nilai yg dibandingkan dgn nama constants nya
             * 
             * Catatan: lihat kembali file materi
             */

            // tulis code dibawah ini
            var favouriteSong;
            var favouriteBand;
        
            const isEqualUndefined_favouriteSong = favouriteSong == undefined;
            const isEqualUndefined_favouriteBand = favouriteBand == undefined;
            const isEqualNull_favouriteSong = favouriteSong == null;
            const isEqualNull_favouriteBand = favouriteBand == null;
        
            return {
                favouriteSong,
                favouriteBand,
                isEqualUndefined_favouriteSong,
                isEqualUndefined_favouriteBand,
                isEqualNull_favouriteSong,
                isEqualNull_favouriteBand
            }
        },


        // 05. test boolean values
        testBooleanValues () {
            /**
             * dataMerkPhone: nokia, samsung, realme, huawei
             * 
             * Tugas:
             * 1. Buatlah var dgn nama pada dataMerkPhone,
             *    masing" nanti nya memiliki sifat nilai 2 true, 2 false.
             *    nilai yg di assign tidak boleh secara langsung nilai boolean.
             *    sbg referensi nilai yg di assign adalah nomer (integer atau string) versi os hp nya
             * 2. Buatlah constants dng nama
             *    is(nama var)True, dan is(nama var)False.
             * 
             * Catatan:
             *  - Lihat kembali materi
             *  - Gunakan fungsi Boolean(), dlm assign nilai pada tugas.2
             */

            // tulis code dibawah ini
            
            
                var dataMerkPhone = {
                    nokia: "12",
                    samsung: "8",
                    realme: "10",
                    huawei: "7"
                   };
               
               const resultBoolean = {
               isNokiaTrue : Boolean(dataMerkPhone.nokia),
               isSamsungTrue : Boolean(dataMerkPhone.samsung),
               isRealmeTrue : Boolean(dataMerkPhone.realme),
               isHuaweiTrue : Boolean(dataMerkPhone.huawei),
               isNokiaFalse : Boolean(!dataMerkPhone.nokia),
               isSamsungFalse : Boolean(!dataMerkPhone.samsung),
               isRealmeFalse : Boolean(!dataMerkPhone.realme),
               isHuaweiFalse : Boolean(!dataMerkPhone.huawei)
   
               }
               
               // sertakan semua code yg telah dibuat di return
               return {
                   dataMerkPhone,
                   resultBoolean,
                   
               };

            
            },
            
             
        

        // 06. test instanceof operator
        testInstanceofOperator () {
            // const dataTasks = [{
            //     "Stage": "In Progress",
            //     "Assigned To": null,
            //     "Task URL": new String("https://app.puhun.com/workflows/2ylSaZ/tasks/ooCwnZ"),
            //     "Company ID": new Number(42),
            //     "Company Name": "Haris Corp",
            //     "Number of Employees": "10",
            //     "Contract Value": 10000.00,
            //     "Expected Close Date": "2024-09-13",
            //     "International": new Boolean(false)
            // }]
            const dataTasks = {
                "Stage": "In Progress",
                "Assigned To": null,
                "Task URL": new String("https://app.puhun.com/workflows/2ylSaZ/tasks/ooCwnZ"),
                "Company ID": new Number(42),
                "Company Name": "Haris Corp",
                "Number of Employees": "10",
                "Contract Value": 10000.00,
                "Expected Close Date": "2024-09-13",
                "International": new Boolean(false)
            }

            /**
             * Tugas:
             * 1. Buatlah var dgn nama pada dataTasks
             * 2. Buatlah masing" constants nya dgn nama
             *    is(var nama)(tipe data).
             *    Cek masing" nilai pada constants
             *    menggunakan perbandingan yg telah dipelajari.
             *    Nilai akhir adlh boolean.
             * 
             * Catatan:
             *   - Cek kembali materi" sebelumnya
             *   - Nama harus mengikuti konvensi penamaan pd JS
             *   - Tidak boleh menggunakan fungsi Boolean()
             *   - Bandingkan tipe data untuk mendapat hasil boolean
             */

            // tulis code dibawah ini
            var dataTaksk = {
                stage: new String ("In Progress"),
                assignedTo: new Number (null),
                taskUrl: new String ("https://app.puhun.com/workflows/2ylSaZ/tasks/ooCwnZ"),
                companyId: new Number (42),
                companyName: new String ("Haris Corp"),
                numberOfEmployees: new Number (10),
                contractValue: new Number (10000.00),
                expectedCloseDate: new String ("2024-09-13"),
                international: new Boolean (false)

            };

            const isStage = dataTaksk.stage instanceof String;
            const isAssignedToNumber = dataTaksk.assignedTo instanceof Number;
            const isTaskUrl = dataTaksk.taskUrl instanceof String;
            const isCompanyId = dataTaksk.companyId instanceof Number;
            const isCompanyName = dataTaksk.companyName instanceof String;
            const isNumberOfEmployees = dataTaksk.numberOfEmployees instanceof Number;
            const isContractValue = dataTaksk.contractValue instanceof Number;
            const isExpectedCloseDate = dataTaksk.expectedCloseDate instanceof String;
            const isInternasional = dataTaksk.international instanceof Boolean;


            // sertakan semua code yg telah dibuat di return
            return {
                isStage,
                isAssignedToNumber,
                isTaskUrl,
                isCompanyId,
                isCompanyName,
                isNumberOfEmployees,
                isContractValue,
                isExpectedCloseDate,
                isInternasional
            }
        },

        testStringInterpolasiDateObject() {
            // membuat objek tanggal
            const currentDate = new Date();
            const postedDate = new Date("2019-10-16")
            const updatedDate = new Date("2023-1-3")

            // membuat array nama bulan
            const monthFullName = [
                "Januari",
                "Februari",
                "Maret",
                "April",
                "Mei",
                "Juni",
                "Juli",
                "Agustus",
                "September",
                "Oktober",
                "November",
                "Desember"
            ];
            const monthShortName = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "Mei",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Okt",
                "Nov",
                "Des"
            ];

            //mengambil bagian-bagian dari waktu

            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            const day = currentDate.getDate();
            const shortYear = String(year).slice(-2);
            const postedYear = postedDate.getFullYear();
            const postedMonth = postedDate.getMonth();
            const postedDay = postedDate.getDate();
            const updatedYear = updatedDate.getFullYear();
            const updatedMonth = updatedDate.getMonth();
            const updatedDay = updatedDate.getDate();

            // menggunakan string interpolasi
            const fullMonth = `Terakhir diperbarui: ${day} ${monthFullName[month]} ${year}`;
            const shortMonth = `${monthShortName[month]} ${day}'${shortYear}`;
            const monthCustom = `Posted On ${monthShortName[postedMonth]} ${postedDay}, ${postedYear} Updated On ${monthShortName[updatedMonth]} ${updatedDay}, ${updatedYear}`

            return {
                fullMonth,
                shortMonth,
                monthCustom
            }

        },


        // 07. test date objects
        
        testDateObjects () {
          
            const dataComments = [
                {
                    "author" : "gus.hilmi@puhun.com",
                    "body" : "Shalom shalom shalom. Get ready jamaah!, ibadah metaverse segera dimulai",
                    "timestamp" : "2024-09-20T03:53:15.708Z"
                },
                {
                    "author" : "jamaah.haris@puhun.com",
                    "body" : "Siapp paboss @Gus Hilmi",
                    "timestamp" : "2024-09-20T09:57:24.937Z"
                },
                {
                    "author": "jamaah.ridwan@puhun.com",
                    "body": "Siapp ngentod, eh guru @Gus Hilmi",
                    "timestamp": "2024-09-20T09:57:24.937Z"
                }
            ]

            /**
             * Terdapat data balikan api comments
             * Tugas:
             * 1. Buatlah seperti contoh seperti gambar tugas-date_objects.png.
             *
             * Catatan:
             * 1. Lihat kembali materi" dan testCase" sebelumnya sbg acuan
             * 2. Tidak perlu sama seperti gambar, boleh improve dan buat sekreatif mungkin.
             *    Tunjukan pesonamu, shalom
             */
            // dataComments.forEach(function(date) {
            //   date.timestamp = moment(date.timestamp).format("D MMM YYYY h:mm") 
            // });

            const authorHilmi = dataComments[0]
            const authorHariz = dataComments[1]
            const authorRidwan = dataComments[2]


            return {
                dataComments,
                authorHariz,
                authorHilmi,
                authorRidwan
            }
            
        },


        // 08. test ++ operator & loop and iteration
        // Plerlonte: Plus Operator & Loop and Iteration
        testPlerlonte () {

            const dataGusJokes = [
                {
                    "category":"science",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"1",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/1",
                    "value":"Kenapa air laut asin??,\nKarena ikannya pada keringetan."
                },
                {
                    "category":"food",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"2",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/2",
                    "value":"Suku..suku apa yang banyak berkeliaran di mall??,\nSuku-riti."
                },
                {
                    "category":"science",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"3",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/3",
                    "value":"Kenapa dokter jika akan mengoperasi mulutnya ditutup??,\nKarena kalo matanya yang ditutup itu bajak laut."
                },
                {
                    "category":"food",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"4",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/4",
                    "value":"Hewan.. hewan apa yang deket banget sama temen??,\nA Crab."
                },
                {
                    "category":"sports",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"5",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/5",
                    "value":"Siapa pemain bola yang punya usaha pengobatan??,\nDavid Bekam."
                },
                {
                    "category":"science",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"6",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/6",
                    "value":"Apa yang badannya hijau, kepalanya merah, jalannya mundur??,\nObat nyamuk bakar."
                },
                {
                    "category":"science",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"7",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/7",
                    "value":"Kenapa di keyboard komputer ada tulisan ‘ENTER’??,\nKarena kalau tulisannya ‘ENTAR’, programnya nggak jalan-jalan."
                }
            ];

            /**
             * Terdapat dataGusJokes seperti diatas
             * 
             * Tugas:
             * 1. Print semua data attribute yg ada
             * 2. Hitung berapa category yg ada
             * 
             * Catatan:
             * -  Data attribute yg wajib diprint: category, value dan created_at,
             *    Sisa nya optional
             * -  Format data attribute yg bernilai date,
             *    boleh berkreasi spy lebih mudah dibaca jamaah
             * -  Lihat kembali test" yg pernah dikerjakan
             */
            const dataJoke = dataGusJokes

            return {
                dataJoke
            }   
        },

        // 08. test ++ operator & loop and iteration
        // Plerlonte: Plus Operator & Loop and Iteration
        testPlerlonteDoWhile () {

            const dataGusJokes = [
                {
                    "category":"science",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"1",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/1",
                    "value":"Kenapa air laut asin??,\nKarena ikannya pada keringetan."
                },
                {
                    "category":"food",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"2",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/2",
                    "value":"Suku..suku apa yang banyak berkeliaran di mall??,\nSuku-riti."
                },
                {
                    "category":"science",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"3",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/3",
                    "value":"Kenapa dokter jika akan mengoperasi mulutnya ditutup??,\nKarena kalo matanya yang ditutup itu bajak laut."
                },
                {
                    "category":"food",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"4",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/4",
                    "value":"Hewan.. hewan apa yang deket banget sama temen??,\nA Crab."
                },
                {
                    "category":"sports",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"5",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/5",
                    "value":"Siapa pemain bola yang punya usaha pengobatan??,\nDavid Bekam."
                },
                {
                    "category":"science",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"6",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/6",
                    "value":"Apa yang badannya hijau, kepalanya merah, jalannya mundur??,\nObat nyamuk bakar."
                },
                {
                    "category":"science",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"7",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/7",
                    "value":"Kenapa di keyboard komputer ada tulisan ‘ENTER’??,\nKarena kalau tulisannya ‘ENTAR’, programnya nggak jalan-jalan."
                }
            ];

            /**
             * Terdapat dataGusJokes seperti diatas
             * 
             * Tugas:
             * 0. Print menggunakan do..while dan while
             * 1. Print semua data attribute yg ada
             * 2. Hitung berapa category yg ada
             * 3. Untuk while, pada attribute id
             *    dikalikan 2
             * 
             * Catatan:
             * -  Format data attribute yg bernilai date,
             *    Sen, 30 Sep 2024 pukul 11.38
             *    boleh berkreasi spy lebih mudah dibaca jamaah
             * -  Lihat kembali test" yg pernah dikerjakan
             */
            const dataJoke = dataGusJokes
            
            return {
                dataJoke
            }   
        },


        // 08. example: test plerlonte DOM
        testPlerlonteDom () {
            const dataGusJokes = [
                {
                    "imageUrl": "https://www.shutterstock.com/image-photo/underwater-photography-funny-looking-parrot-600w-2444525305.jpg",
                    "imageMeta": "Gus joke underwater",
                    "category":"science",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"1",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/1",
                    "value":"Kenapa air laut asin??,\nKarena ikannya pada keringetan."
                },
                {
                    "imageUrl": "https://www.shutterstock.com/image-photo/jakarta-indonesia-july-6-2013-260nw-2377697137.jpg",
                    "imageMeta": "Gus joke undermarket",
                    "category":"food",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"2",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/2",
                    "value":"Suku..suku apa yang banyak berkeliaran di mall??,\nSuku-riti."
                },
                {
                    "imageUrl": "https://www.shutterstock.com/image-photo/funny-doctor-isolated-on-white-260nw-133809956.jpg",
                    "imageMeta": "Gus joke undertaker",
                    "category":"science",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"3",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/3",
                    "value":"Kenapa dokter jika akan mengoperasi mulutnya ditutup??,\nKarena kalo matanya yang ditutup itu bajak laut."
                },
                {
                    "imageUrl": "https://www.shutterstock.com/image-photo/crabeating-macaque-baby-infant-sticking-260nw-2347171827.jpg",
                    "imageMeta": "Gus joke understand",
                    "category":"food",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"4",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/4",
                    "value":"Hewan.. hewan apa yang deket banget sama temen??,\nA Crab."
                },
                {
                    "imageUrl": "https://www.shutterstock.com/image-photo/nerdy-guy-trying-do-exercise-260nw-1562276911.jpg",
                    "imageMeta": "Gus joke underngentod",
                    "category":"sports",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"5",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/5",
                    "value":"Siapa pemain bola yang punya usaha pengobatan??,\nDavid Bekam."
                },
                {
                    "imageUrl": "https://www.shutterstock.com/image-photo/smouldering-repellent-spiral-mosquitoes-protection-260nw-2343936507.jpg",
                    "imageMeta": "Gus joke underdeck",
                    "category":"science",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"6",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/6",
                    "value":"Apa yang badannya hijau, kepalanya merah, jalannya mundur??,\nObat nyamuk bakar."
                },
                {
                    "imageUrl": "https://www.shutterstock.com/image-photo/french-bulldog-sits-desk-office-260nw-1930042943.jpg",
                    "imageMeta": "Gus joke underdog",
                    "category":"science",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"7",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/7",
                    "value":"Kenapa di keyboard komputer ada tulisan ‘ENTER’??,\nKarena kalau tulisannya ‘ENTAR’, programnya nggak jalan-jalan."
                }
            ];

            return {
                dataGusJokes
            }
        },

        // 08.1 example: test plerlonte DOM
        testDisplayImage () {
            const dataBand = [
                {
                    "imageUrl": "https://www.shutterstock.com/image-photo/underwater-photography-funny-looking-parrot-600w-2444525305.jpg",
                    "imageMeta": "Gus joke underwater",
                    "category":"science",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"1",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/1",
                    "value":"Kenapa air laut asin??,\nKarena ikannya pada keringetan."
                },
                {
                    "imageUrl": "https://images.unsplash.com/photo-1579935110464-fcd041be62d0?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "imageMeta": "Gus joke undermarket",
                    "category":"food",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"2",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/2",
                    "value":"Suku..suku apa yang banyak berkeliaran di mall??,\nSuku-riti."
                },
                {
                    "imageUrl": "https://www.shutterstock.com/image-photo/funny-doctor-isolated-on-white-260nw-133809956.jpg",
                    "imageMeta": "Gus joke undertaker",
                    "category":"science",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"3",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/3",
                    "value":"Kenapa dokter jika akan mengoperasi mulutnya ditutup??,\nKarena kalo matanya yang ditutup itu bajak laut."
                },
                {
                    "imageUrl": "https://media.gettyimages.com/id/909775822/photo/cooked-crab-in-briefcase.jpg?s=1024x1024&w=gi&k=20&c=leb7vgqwyMrztC0C-5zULN6LcLkwPLNn6YOKplY3GU0=",
                    "imageMeta": "Gus joke understand",
                    "category":"food",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"4",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/4",
                    "value":"Hewan.. hewan apa yang deket banget sama temen??,\nA Crab."
                },
                {
                    "imageUrl": "https://media.gettyimages.com/id/460493284/photo/david-beckham.jpg?s=1024x1024&w=gi&k=20&c=qUNIo-ck3J5rUpuuem1iPlvM8SrhMGVNNb2dEfWjSc0=",
                    "imageMeta": "Gus joke underngentod",
                    "category":"sports",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"5",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/5",
                    "value":"Siapa pemain bola yang punya usaha pengobatan??,\nDavid Bekam."
                },
                {
                    "imageUrl": "https://media.gettyimages.com/id/885051462/photo/leek-and-potato-soup-in-bowl.jpg?s=2048x2048&w=gi&k=20&c=DEaJvE7N_Lex0JZP0Ufs2WN1aIa0BECYJ9LMKXI_5ic=",
                    "imageMeta": "Gus joke underdeck",
                    "category":"food",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"6",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/6",
                    "value":"Bubur apa yang bisa di gedein terus di kecilin??\nBubur zoom zoom xixixi"
                },
                {
                    "imageUrl": "https://www.shutterstock.com/image-photo/french-bulldog-sits-desk-office-260nw-1930042943.jpg",
                    "imageMeta": "Gus joke underdog",
                    "category":"science",
                    "created_at":"2024-09-26T23:57:02.522Z",
                    "id":"7",
                    "updated_at":"2024-09-26T23:57:02.522Z",
                    "url":"https://gus.puhun.com/khutbah/7",
                    "value":"Kenapa di keyboard komputer ada tulisan ‘ENTER’??,\nKarena kalau tulisannya ‘ENTAR’, programnya nggak jalan-jalan."
                }
            ];

            return {
                dataBand
            }
        }

    };
});
