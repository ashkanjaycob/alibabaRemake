<template>
    <div class="container m-5 alibaba " dir="rtl">
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
            <div class="col-md-3">
                <div class="input-group mb-3">
                    <div class="input-group">
                        <input type="text" placeholder="تاریخ رفت" aria-label="First name" class="form-control p-2 rounded">
                        <input type="text" placeholder="تاریخ برگشت +" aria-label="Last name"
                            class="form-control p-2 rounded">
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder=" تعداد مسافران ">
            </div>
            <div class="col-md-2">
                <button class="btn btn-primary" type="submit">جست و جو</button>
            </div>
        </form>

    </div>
</template>
<script>
export default {
    name: 'HeroCard'
}
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
</style>