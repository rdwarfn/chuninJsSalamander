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
            var nokia = "12";
            var samsung = "8";
            var realme = "10";
            var huawei = "7"

            const isNokiaTrue = Boolean(nokia)
            const isSamsungTrue = Boolean(samsung)
            const isRealmeTrue = Boolean(realme)
            const isHuaweiTrue = Boolean(huawei)
            const isNokiaFalse = Boolean()
            const isSamsungFalse = Boolean()
            const isRealmeFalse = Boolean()
            const isHuaweiFalse = Boolean()
            
            // sertakan semua code yg telah dibuat di return
            return {
              isNokiaTrue,
              isSamsungTrue,
              isRealmeTrue,
              isHuaweiTrue,
              isNokiaFalse,
              isSamsungFalse,
              isRealmeFalse,
              isHuaweiFalse

            }
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

<<<<<<< HEAD
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

=======
        
        // 06. test instanceof operator
        testInstanceofOperator () {
            const dataTasks = [{
                "Stage": "In Progress",
                "Assigned To": null,
                "Task URL": new String("https://app.puhun.com/workflows/2ylSaZ/tasks/ooCwnZ"),
                "Company ID": new Number(42),
                "Company Name": "Haris Corp",
                "Number of Employees": "10",
                "Contract Value": 10000.00,
                "Expected Close Date": "2024-09-13",
                "International": new Boolean(false)
            }]

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

            // sertakan semua code yg telah dibuat di return
            return {
                
            }
>>>>>>> 00686ea09255cbcad751a4255e45d78a75e32562
        }
        
    };
});
