import  './shopping.css'

function ShopCard({number,cost,image,des}){
    return(<div className='goods_Shadow'>
    <div className='goods_bg'>
        <div className='goods_number'>Goods {number??0}</div>
        <div className='goods_cost'><span style={{color:'#F7FF1A'}}>$</span>{cost??0}</div>
        <div className='goods_image_shadow'>
            <div className='goods_image'><img src={image} width='60rem'/></div></div>
        <div className='goods_des_shadow'>
            <div className='goods_des'>{des??'还没有描述哦'}</div></div>
        <div className='goods_buy_shadow'>
            <button className='goods_buy'><img src='/buybtn.png' width='45rem'/></button></div>
    </div>
    </div>)

}

export function Shop({point}){
    return(<>
    <div className="shop_icon">
        <img src='/shopping.png' width='45rem' className='shop_img'/>
        <div className='money'>{point??'0'}<span style={{color:'#F7FF1A'}}>$</span></div>
    </div>
    <div className='shop_bg_shadow'>
    <div className='shop_bg'>
        <ShopCard number={1} cost={114} image='/btc.png' des='这东西应该没有实体吧，对的'/>
        <ShopCard number={2} cost={514} image='/rocket.png' des='传奇机长，准备起飞！'/>
        <ShopCard number={2} cost={514} image='/rocket.png' des='传奇机长，准备起飞！'/>
    </div></div>

   
    </>)
}

/* <div className='up_scrollbar_button'><img src='./upArrow.png' width='50rem'/></div>
    <div className='down_scrollbar_button'><img src='./downArrow.png' width='50rem'/></div> */