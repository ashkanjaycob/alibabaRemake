<template>
    <div class="mt-3"> 
        <h6 class="alibabaF ">سایر خدمات علی بابا</h6>
        <div class="alibaba  row d-flex justify-content-between">

            <div class="col-3 m-2 card py-3 pointer">
                <h6 class="card-title px-" ><i class="bi bi-chevron-left px-5 fs-6"></i>  تور گروهی </h6>
            </div>
            <div class="col-3 m-2 card py-3 pointer">
                <h6 class="card-title px-"><i class="bi bi-chevron-left px-5 fs-6"></i> ویزای سفر</h6>
            </div>
            <div class="col-3 m-2 card py-3 pointer">
                <h6 class="card-title px-"> <i class="bi bi-chevron-left px-5 fs-6"></i> بیمه مسافرتی</h6>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "IndexCard"

}
</script>
<style>
@font-face {
    font-family: alibabaF;
    src: url(../assets/Fonts/alibaba-bold.woff2);
}

.alibabaF {
    font-family: alibabaF, Arial, Helvetica, sans-serif !important;
}
.pointer {
    cursor: pointer;
}
</style>