<template>
    <div class="shopItem">
        <ul class="shopList">
            <li v-for="item,index in stateData">
                <span
                 class="checkBox"
                  :class="{'isChecked':item.checked == true}"
                  @click="changeChecked(item)"
                  >√</span> 
                <div class="shopImg">
                    <img :src="item.imgURL" />
                </div>
                <div class="shopCarItemInfo">
                    <h3 class="shopTitle">{{item.title}}</h3>
                    <h5 class="shopCarSubTitle">{{item.info}}</h5>
                    <div class="shopCarMoney">
                        <span>￥</span><span class="shopCarItemMoney">{{item.price}}</span>
                        <span class="hasNum">×</span>
                         <span class="shopCarItemNum">{{item.num}}</span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="shopCarFooter" v-show="$store.state.dataList&&$store.state.dataList.length==0?false:true">
            <span
             class="checkBox"
             :class="{'isChecked':isCheckedAll}"
             @click="checkAll()">√</span> 
            <span class="ischangeNum">已选   </span>
            <span class="changeNum">{{$store.getters.changeNum}}  </span>
            <span class="ischangeNum"> 件</span>
            <div class="allMoney">
                <span>合计       :</span>
                <span class="moneyIco">￥</span><span class="moneyIco">{{$store.getters.totalMoney.totalMoney}}</span>
            </div>
            <div class="goMoney" @click="noBuy">现在结算</div>
        </div>
        <NoShop v-show="$store.state.dataList&&$store.state.dataList.length==0?true:false"></NoShop>
    </div>
</template>

<script>
import NoShop from '../noSHop/noShop'
    export default {
        components:{ NoShop },
        data(){
            return {
                stateData:this.$store.state.dataList,
                isCheckAll:false
            }
        },
        methods:{
            changeChecked(item){
                this.$store.commit('changeChecked',{
                    checkItem:item.info
                })
            },
            checkAll(){
                this.$store.commit('checkAll',{
                    isCheckedAll:this.isCheckedAll
                })
            },
            noBuy(){
                alert('支付接口暂未开放 ^_^')
            }
        },
        created(){
            console.log(this.$store.state.dataList)
        },
        computed:{
            isCheckedAll(){
                return this.stateData&&this.stateData.every(item => item.checked == true)

            },
            
        }
    }
</script>

<style>

.shopItem p{
    height:3rem;
    font-size:.8rem;
    color:red;
    line-height:3rem;
    border-bottom:1px solid #d9d9d9;
    padding-left:.6rem;
    box-sizing:border-box;
    font-weight:700;
}
.shopItem .shopList{
    width:100%;
}
.shopItem .shopList li{
    width:100%;
    padding:.8rem .6rem;
    border-bottom:1px solid #d9d9d9;
    overflow:hidden;
    box-sizing:border-box;
}
.shopList li .checkBox{
    float:left;
    width:1.2rem;
    height:1.2rem;
    text-align:center;
    color:#fff;
    font-size:.9rem;
    line-height:1.2rem;
    border:1px solid gray;
    border-radius:50%;
    margin-top:40px;
}
.shopList li .isChecked{

    background:#4a4ade; 
    color:#fff;
}
.shopList li .shopImg{
    float:left;
    width:6rem;
    height:6rem;
    margin-left:.5rem;
}
.shopList li .shopImg img{
    width:100%;
    height:100%;
}
.shopList li .shopCarItemInfo{
    float:left;
    width:60%;
    margin-top:1rem;
}
.shopList li .shopCarItemInfo .shopTitle{
    width:100%;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
    font-weight:700;
    font-size:.9rem;
}
.shopList li .shopCarItemInfo .shopCarSubTitle{
    color:gray;
    line-height:1.5rem;
    font-weight:600;
    font-size:.8rem;
}
.shopList li .shopCarItemInfo .shopCarMoney{
    color:red;
}
.shopList li .shopCarItemInfo .hasNum{
    margin-left:.3rem;
    color:gray;
}
.shopList li .shopCarItemInfo .shopCarItemNum{
    color:gray;
}
.shopCarFooter{

    padding-left:.7rem;
    overflow:hidden;
    position:fixed;
    left:0;
    bottom:55px;
    width:100%;
    height:3.7rem;
    background:#ededed;
}
.shopCarFooter .checkBox{
    float:left;
    width:1.2rem;
    height:1.2rem;
    text-align:center;
    color:#fff;
    font-size:.9rem;
    line-height:1.2rem;
    border:1px solid gray;
    border-radius:50%;
    margin-top:1.3rem;
    margin-right:.6rem;
}
.shopCarFooter .isChecked{
    background:#4a4ade; 
    color:#fff;
}
.shopCarFooter .ischangeNum{
    float:left;
    color:gray;
    font-size:.8rem;
    line-height:3.7rem;
}
.shopCarFooter .changeNum{
float:left;
    font-size:1rem;
    font-weight:950;
    line-height:3.7rem;
    color:gray;
}
.shopCarFooter .allMoney{
    float:left;
    line-height:3.7rem;
    margin-left:2.4rem;
    color:gray;
}
.shopCarFooter .moneyIco{
    color:red;
}
.shopCarFooter .goMoney{
    float:right;
    width:25%;
    height:2.7rem;
    margin-right:1.5rem;
    line-height:2.7rem;
    color:#fff;
    text-align:center;
    background:#0000ffb3;
    border-radius:.7rem;
    margin-top:.6rem;
}
</style>