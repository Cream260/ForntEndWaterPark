<template>
  <div class="offer-card">
    <h1 class="title">การฝึกอบรมไลฟ์การ์ดในน้ำตื้นและสระว่ายน้ำระดับสากล</h1>
    <div class="details">
      <div class="detail" style="margin-right: 4%; font-size: 18px;">อายุ 15 ปีขึ้นไป</div>
      <div class="detail" style=" font-size: 18px;">ใบรับรองอาชีพ</div>
    </div>
    <div class="price">ราคาต่อคน 6,888 บาท</div>
    <div style="margin-top: 20%;">
      <div class="image-container">
        <img class="corner-image" src="../../images/Event/lifeguardIcon2.png">
      </div>
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
  font-size: 24px;
  margin-bottom: 20px;
}

.details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.detail {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 6px 20px;
  border-radius: 35px;
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
