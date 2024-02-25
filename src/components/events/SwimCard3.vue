<template>
  <div class="offer-card">
    <h1 class="title">หลักสูตร การว่ายน้ำ ขั้นพื้นฐาน</h1>
    <div class="details">
      <div class="detail" style="margin-right: 4%; font-size: 18px;">อายุ 5-12 ปี</div>
      <div class="detail" style=" font-size: 18px;">ใบรับรองการฝึก</div>
    </div>
    <div class="price">ราคาเต็ม 1,799 บาท</div>
    <div class="image-container">
      <img class="corner-image" src="../../images/Event/swimmer.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfferCard',
  // You can include data, methods, computed properties, etc., here.
};
</script>

<style scoped>
.offer-card {
  position: relative;
  border-radius: 20px;
  margin-left: 20px;
  margin-top: 20px;
  width: 300px; /* Adjust as necessary */
  color: white; /* Adjust as necessary */
  font-family: 'Kanit', sans-serif;
}

.title {
  font-size: 26px;
  margin-bottom: 20px;
}

.details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.detail {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 15px 13px;
  border-radius: 35px;
  margin-right: 18px ;
}


.price {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.image-container {
  position: absolute;
  top: 210px;
  right: 10px;
}

.corner-image {
  width: 65px; /* Adjust as necessary */
  height: auto;
}
</style>
