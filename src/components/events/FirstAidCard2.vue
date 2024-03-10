<template>
  <div class="offer-card">
    <h1 class="title">หลักสูตร First aid,CPR & AED ระดับสากล</h1>
    <div class="details">
      <div class="detail" style="font-size: 10px;">อายุ 12 ปีขึ้นไป</div>
      <div class="detail" style="margin-right: 3%; font-size: 10px;">ใบรับรองอาชีพ</div>
    </div>
    <div class="price">ราคาต่อคน 2,850 บาท</div>
    <!-- <div style="margin-top: 20%;"> -->
      <div class="image-container">
        <img class="corner-image" src="../../images/Event/firstAid&CPR.png">
      </div>
    <!-- </div> -->
    
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
  margin-top: 10px;
  height: 100px;
  width: 100px; /* Adjust as necessary */
  color: white; /* Adjust as necessary */
  font-family: 'Kanit', sans-serif;
  width: fit-content;
}

.title {
  font-size: 20px;
}

.details {
  display: flex;
  
  margin-bottom: 10px;
}

.detail {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px 18px;
  border-radius: 35px;
  margin-right: 10px 
}


.price {
  font-size: 18px;
  font-weight: bold;
}

.image-container {
  position: absolute;
  top: 172px;
  right: 12px;
}

.corner-image {
  width: 50px; /* Adjust as necessary */
  height: auto;
}
</style>
