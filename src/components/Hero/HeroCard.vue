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


    <div class="container m-5 alibaba " dir="rtl">
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
                        <input type="text" placeholder="شهر مقصد" aria-label="Last name" class="form-control p-2 rounded">
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="input-group mb-3">
                    <div class="input-group">
                        <date-picker locale="fa,en"  placeholder="تاریخ رفت" aria-label="First name" class="form-control datestyle rounded" v-model="departureDate"></date-picker>
                        <!-- <input type="date" placeholder="تاریخ رفت" aria-label="First name" class="form-control p-2 rounded" v-model="departureDate"> -->
                        <date-picker  locale="fa,en" type="date" placeholder="تاریخ برگشت " aria-label="Last name"
                        class="form-control datestyle rounded" v-model="returnDate" :disabled="!isReturn"></date-picker>
                        <!-- <input type="date" placeholder="تاریخ برگشت +" aria-label="Last name"
                        class="form-control p-2 rounded" v-model="returnDate" :disabled="!isReturn"> -->
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder=" تعداد مسافران (عدد) ">
            </div>
            <div class="col-md-1">
                <!-- <button class="btn btn-primary" type="submit">جست و جو</button> -->
                <button  class="btn btn-gold" :disabled="!canBook" @click="book">ثبت بلیط</button>
            </div>
            <p>{{ canBook ? '' : 'توجه : تاریخ برگشت باید بعد از تاریخ رفت ثبت گردد.' }}</p>
        </form>
        
    </div>
</template>
<script>
import DatePicker from 'vue3-persian-datetime-picker'
import {ref} from 'vue'
export default {
    components:{
        DatePicker
    } ,
    name: 'HeroCard',
    setup() {

    } , 
}
</script>
<script setup>
import { computed } from 'vue'
const flightType = ref('one-way flight')
const departureDate = ref('1402/02/05')
const returnDate = ref("")

const isReturn = computed(() => flightType.value === 'return flight')

const canBook = computed (
  () => 
    !isReturn.value ||
    returnDate.value  > departureDate.value
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


</style>