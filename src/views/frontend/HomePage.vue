<template>
  <div class="">
    <div class="position-relative">
      <div class="position-absolute" style="top:0; bottom:0; left:0; right:0;
      background-image: url(https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=60);
      background-position: center center; opacity: 0.3;"></div>
      <div class="container d-flex flex-column" style="min-height: 100vh;">
        <div class="row justify-content-center my-auto">
          <div class="col-md-4 text-center">
            <h2 class="h1">827 Music Studio</h2>
            <p class=" mb-0 mt-3">" 生活即是音樂，音樂充滿生活 "</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <img
              src="https://images.unsplash.com/photo-1531651750200-b2c2b3ddc876?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              class="card-img-top rounded-0"
              alt="..."/>
            <div class="card-body text-center">
              <h4>音樂錄製</h4>
              <div class="d-flex justify-content-between ">
                <p class="card-text text-muted mb-0 mx-auto">
                  錄下自己的聲音，記錄自己的生活
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <img
              src="https://images.unsplash.com/photo-1509170051686-83f8efd35a31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body text-center">
              <h4>吉他課程</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0 mx-auto">
                  想學吉他？ 那就開始吧
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <img
              src="https://images.unsplash.com/photo-1459305272254-33a7d593a851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body text-center">
              <h4>樂器販售</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0 mx-auto">
                  不知道一開始要買什麼吉他？慢慢挑選吧
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light mt-5">
      <div class="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center mt-3">
                  <h3>精選品牌</h3>
                  <p class="my-5">Fender,Gibson,Taylor,Ibanez，Music man,G&L...不知道要選擇什麼品牌嗎?歡迎到店免費試彈，喜歡再帶走</p>
                  <p><small>—827—</small></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center mt-3">
                  <h3>堅強師資</h3>
                  <p class="my-5">提供專業的音樂教學課程，教學項目包括民謠吉他彈唱、Fingerstyle、詞曲創作、烏克麗麗、古典吉他、電吉他</p>
                  <p><small>—827—</small></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center mt-3">
                  <h3>聽聽音樂</h3>
                  <p class="my-5">對於音樂的堅持與熱愛，我們從來不曾妥協，會不會樂器無所謂，帶杯咖啡帶著耳朵及心靈來放鬆聽音樂吧</p>
                  <p><small>—827—</small></p>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls"  role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <div class="container my-5">
      <div class="row">
        <div class="col-md-6">
          <img src="https://images.unsplash.com/photo-1561446289-4112a4f79116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">音樂錄製</h4>
          <p class="text-muted">827 music studio 提供簡易Demo錄製混音<br>留下屬於你自己的歌曲</p>
          <button href="#" class="btn btn-outline-dark" @click="goRecorginPage()">了解更多</button>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <img src="https://images.unsplash.com/photo-1581002717195-cca66bd40314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">吉他課程</h4>
          <p class="text-muted">827 music studio 一對一吉他教學<br>為您量身打造專屬課程</p>
          <button href="#" class="btn btn-outline-dark" @click="goGuitarLessonPage()">了解更多</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data () {
    return {}
  },
  methods: {
    goRecorginPage () {
      this.$router.push('/recording')
    },
    goGuitarLessonPage () {
      this.$router.push('/lesson')
    }
  }
}
</script>
