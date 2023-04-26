<template>
    <!-- <div>

        <select v-model="flightType">
            <option value="one-way flight">One-way Flight</option>
            <option value="return flight">Return Flight</option>
        </select>
        
          <input type="date" v-model="departureDate">
          <input type="date" v-model="returnDate" :disabled="!isReturn">
        
          <button :disabled="!canBook" @click="book">Book</button>
        
          <p>{{ canBook ? '' : 'Return date must be after departure date.' }}</p>

    </div> -->
    <div>
        <img class="w-100" src="../../assets/Heros/Hero-hotel.webp" alt="">
    </div>
    <div class=" d-flex justify-content-center m-5 alibaba rounded position-relative " dir="rtl">
        <div class="col-12 container position-absolute bottomed">
            <div>
                <div
                    class="row align-content-between d-flex justify-content-center border text-center mb-3 bg-light rounded p-1">
                    <div class="col-2 TicketHov">
                        <router-link class="rotlink" to="/">
                            <i class="bi bi-airplane-engines col-3 fs-3"></i>
                            <h6>پرواز</h6>
                        </router-link>
                    </div>
                    <div class="col-2 TicketHov">
                        <router-link class="rotlink" to="/train">
                            <i class="bi bi-train-front col-3 fs-3"></i>
                            <h6>قطار</h6>
                        </router-link>
                    </div>
                    <div class="col-2 TicketHov">
                        <router-link class="rotlink" to="/bus">
                            <i class="bi bi-bus-front col-3 fs-3"></i>
                            <h6>اتوبوس</h6>
                        </router-link>
                    </div>
                    <div class="col-2 TicketHov">
                        <router-link class="rotlink" to="hotel">
                            <i class="bi bi-building col-3 fs-3"></i>
                            <h6>هتل</h6>
                        </router-link>
                    </div>
                    <div class="col-2 TicketHov">
                        <router-link class="rotlink" to="tour">
                            <i class="bi bi-geo-fill col-3 fs-3"></i>
                            <h6>تور</h6>
                        </router-link>
                    </div>
                </div>
            </div>
            <select v-model="flightType" class="border text-center rounded">
                <option value="one-way flight">یک طرفه</option>
                <option value="return flight">رفت و برگشت</option>
            </select>
            <form class="row g-2 p-3  border text-center rounded">
                <div class="col-md-5">
                    <div class="input-group mb-3">
                        <div class="input-group">
                            <input id="cityName" type="text" placeholder="شهر مبدا را انتخاب کنید" aria-label="First name"
                                class="form-control p-2 rounded">
                            <input type="text" placeholder="شهر مقصد" aria-label="Last name"
                                class="form-control p-2 rounded">
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="input-group mb-3">
                        <div class="input-group">
                            <date-picker color="rgb(218,165,32)" locale="fa,en" placeholder="تاریخ رفت"
                                aria-label="First name" class="form-control datestyle rounded"
                                v-model="departureDate"></date-picker>
                            <!-- <input type="date" placeholder="تاریخ رفت" aria-label="First name" class="form-control p-2 rounded" v-model="departureDate"> -->
                            <date-picker color="rgb(218,165,32)" locale="fa,en" type="date" placeholder="تاریخ برگشت "
                                aria-label="Last name" class="form-control datestyle rounded" v-model="returnDate"
                                :disabled="!isReturn"></date-picker>
                            <!-- <input type="date" placeholder="تاریخ برگشت +" aria-label="Last name"
                        class="form-control p-2 rounded" v-model="returnDate" :disabled="!isReturn"> -->
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <input type="number" class="form-control" id="exampleFormControlInput1"
                        placeholder=" تعداد مسافران (عدد) ">
                </div>
                <div class="col-md-1">
                    <!-- <button class="btn btn-primary" type="submit">جست و جو</button> -->
                    <button class="btn btn-gold" :disabled="!canBook" @click="book">ثبت بلیط</button>
                </div>
                <p>{{ canBook ? '' : 'توجه : تاریخ برگشت باید بعد از تاریخ رفت ثبت گردد.' }}</p>
            </form>
        </div>
    </div>
</template>
<script>
import DatePicker from 'vue3-persian-datetime-picker'
import { ref } from 'vue'
export default {
    components: {
        DatePicker
    },
    name: 'HeroCard',
    setup() {

    },
}
</script>
<script setup>
import { computed } from 'vue'
const flightType = ref('one-way flight')
const departureDate = ref('1402/02/05')
const returnDate = ref("")

const isReturn = computed(() => flightType.value === 'return flight')

const canBook = computed(
    () =>
        !isReturn.value ||
        returnDate.value > departureDate.value
)

function book() {
    alert(
        isReturn.value
            ? `بلیط رفت شما در تاریخ  ${departureDate.value} و بلیط برگشت شما در تاریخ  ${returnDate.value} با موفقیت ثبت شد .`
            : `بلیط شما در تاریخ  ${departureDate.value} با موفقیت ثبت شد.`
    )
}
console.log(DatePicker.format);

// function stringToDate(str) {
//   const [y, m, d] = str.split('-')
//   return new Date(+y, m - 1, +d)
// }

// function dateToString(date) {
//   return (
//     date.getFullYear() +
//     '-' +
//     pad(date.getMonth() + 1) +
//     '-' +
//     pad(date.getDate())
//   )
// }

// function pad(n, s = String(n)) {
//   return s.length < 2 ? `0${s}` : s
// }


</script>
<style>
@font-face {
    font-family: alibaba;
    src: url(../../assets/Fonts/alibaba-regular.woff2);
}

.alibaba {
    font-family: alibaba, Arial, Helvetica, sans-serif !important;
}

.bottomed {
    top: -90px;
}

* {
    box-sizing: border-box;
}

.btn-gold {
    background-color: goldenrod;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.datestyle {
    outline: none;
    border: none;
}

.TicketHov:hover {
    color: rgb(204, 155, 30);
    cursor: pointer;
}

.btn-gold:hover {
    background-color: rgb(255, 183, 0);
    color: white;
}
</style>