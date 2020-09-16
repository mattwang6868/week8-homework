<template>
    <div>
      <div class="modal-dialog modal-xl">
            <div class="modal-content ">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">訂單詳情</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="m-2 text-left">訂單編號{{order.created.timestamp}}</div>
                <span class="border-bottom"></span>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0">品名</th>
                      <th scope="col" class="border-0">數量</th>
                      <th scope="col" class="border-0">單價</th>
                      <th scope="col" class="border-0">小計</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-bottom border-top" v-for="item in order.products" :key="item.id">
                      <td scope="row" class="border-0 px-0 font-weight-normal py-4">
                        <img :src="item.product.imageUrl[0]"  alt="" style="width: 90px; height: 90px; object-fit: cover;">
                        <p class="mb-0 font-weight-bold ml-3 d-inline-block" >{{item.product.title}}</p>
                      </td>
                      <td class="border-0 align-middle" style="max-width: 160px;">
                        <div class="input-group ">
                          <div class="input-group-prepend">
                            <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1" :disabled="item.quantity === 1" @click="quantityUpdate(item.quantity -1)">
                              <i class="fas fa-minus"></i>
                            </button>
                          </div>
                          <input type="text" class="form-control border-0 text-center my-auto shadow-none" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"
                          :value="item.quantity" @keyup.enter="quantityUpdate($event.target.value,item.id )">
                          <div class="input-group-append">
                            <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2"  @click="quantityUpdate(item.quantity +1)">
                              <i class="fas fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="border-0 align-middle"><p class="mb-0 ml-auto">{{item.product.price}}</p></td>
                      <td class="border-0 align-middle"><p class="mb-0 ml-auto">{{item.product.price*item.quantity}}</p></td>
                    </tr>
                  </tbody>
                </table>
                <div class="p-4 mb-4" >
                  <h4 class="font-weight-bold mb-4 text-right">結 算</h4>
                  <div class="d-flex justify-content-between mt-4">
                    <p class="mb-0 h4 font-weight-bold">Total</p>
                    <p class="mb-0 h4 font-weight-bold">NT${{ order.amount }}</p>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal" @click="update()">更新訂單</button>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['order', 'status'],
  data () {
    return {
      quantity: ''
    }
  },
  methods: {
    quantityUpdate (id) {
      console.log(id)
    },
    update () {

    }
  },
  created () {
  }
}
</script>
