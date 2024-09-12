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



            // sertakan semua code yg telah dibuat di return
            return {
                
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


            // sertakan semua code yg telah dibuat di return
            return {

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



            // sertakan semua code yg telah dibuat di return
            return {

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

            // sertakan semua code yg telah dibuat di return
            return {

            }
        },

        
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
        }
    };
});
