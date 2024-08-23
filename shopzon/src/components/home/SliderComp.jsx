import React from 'react'
import Slider from 'react-slick';


const SliderComp = () => {
  const settings = {
    dots: false, //slider altındaki noktalar 
    infinite: true,
    speed: 500,
    autoplay: true, //otomatik kendisinin belirli süre sonra kayması
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (

    <div>
      <div className='flex items-center justify-center text-2xl'>Bu Haftanın Trend Ürünleri</div>
      <Slider {...settings}>
        <div className='!flex items-center bg-gray-100 px-6'>
          <div>
            <div className='text-3xl font-bold'>Spor Ayakkabısı</div>
            <div className='my-2'>Rahat, dayanıklı, zamana meydan okuyan bu stilin 1 numara olması boşuna değil. 1980'lerin klasik yapısı, dayanıklı deri ve ripstop kumaşlarla bir araya gelerek sağlam bir yapı oluşturur. Nike Air yastıklama uzun süreli rahatlık sunarken yansıtıcı ayrıntılar ve buz mavisi dış taban, hem sahadayken hem de hareket halindeyken giyebileceğin göz alıcı bir stil kazandırır.</div>
            <div className='border rounded-full cursor-pointer text-1xl w-[100px] h-10 flex items-center justify-center bg-gray-300'>İncele</div>
          </div>
          <img  src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/58e2c1a3-73df-4761-81e2-7cba45a5f183/initiator-ayakkab%C4%B1s%C4%B1-jKr5LX.png' alt='' ></img>
        </div>
        <div className='!flex items-center bg-gray-100 px-6'>
          <div>
            <div className='text-3xl font-bold'>Spor Ayakkabısı</div>
            <div className='my-2'>Rahat, dayanıklı, zamana meydan okuyan bu stilin 1 numara olması boşuna değil. 1980'lerin klasik yapısı, dayanıklı deri ve ripstop kumaşlarla bir araya gelerek sağlam bir yapı oluşturur. Nike Air yastıklama uzun süreli rahatlık sunarken yansıtıcı ayrıntılar ve buz mavisi dış taban, hem sahadayken hem de hareket halindeyken giyebileceğin göz alıcı bir stil kazandırır.</div>
            <div className='border rounded-full cursor-pointer text-1xl w-[100px] h-10 flex items-center justify-center bg-gray-300'>İncele</div>
          </div>
          <img src='https://1.kixify.com/sites/default/files/imagecache/product_full/product/2023/05/15/p_34578121_199085909_111814.jpg' alt=''></img>
        </div>
        <div className='!flex items-center bg-gray-100 px-6'>
          <div>
            <div className='text-3xl font-bold'>Spor Ayakkabısı</div>
            <div className='my-2'>Rahat, dayanıklı, zamana meydan okuyan bu stilin 1 numara olması boşuna değil. 1980'lerin klasik yapısı, dayanıklı deri ve ripstop kumaşlarla bir araya gelerek sağlam bir yapı oluşturur. Nike Air yastıklama uzun süreli rahatlık sunarken yansıtıcı ayrıntılar ve buz mavisi dış taban, hem sahadayken hem de hareket halindeyken giyebileceğin göz alıcı bir stil kazandırır.</div>
            <div className='border rounded-full cursor-pointer text-1xl w-[100px] h-10 flex items-center justify-center bg-gray-300'>İncele</div>
          </div>
          <img src='https://1.kixify.com/sites/default/files/imagecache/product_full/product/2023/05/15/p_34578121_199085909_111814.jpg' alt=''></img>
        </div>
        <div className='!flex items-center bg-gray-100 px-6'>
          <div>
            <div className='text-3xl font-bold'>Spor Ayakkabısı</div>
            <div className='my-2'>Rahat, dayanıklı, zamana meydan okuyan bu stilin 1 numara olması boşuna değil. 1980'lerin klasik yapısı, dayanıklı deri ve ripstop kumaşlarla bir araya gelerek sağlam bir yapı oluşturur. Nike Air yastıklama uzun süreli rahatlık sunarken yansıtıcı ayrıntılar ve buz mavisi dış taban, hem sahadayken hem de hareket halindeyken giyebileceğin göz alıcı bir stil kazandırır.</div>
            <div className='border rounded-full cursor-pointer text-1xl w-[100px] h-10 flex items-center justify-center bg-gray-300'>İncele</div>
          </div>
          <img src='https://media.karousell.com/media/photos/products/2023/9/30/nike_dunk_low_diffused_taupe_1696063730_bee70f16_progressive.jpg' alt=''></img>
        </div>
        <div className='!flex items-center bg-gray-100 px-6'>
          <div>
            <div className='text-3xl font-bold'>Spor Ayakkabısı</div>
            <div className='my-2'>Rahat, dayanıklı, zamana meydan okuyan bu stilin 1 numara olması boşuna değil. 1980'lerin klasik yapısı, dayanıklı deri ve ripstop kumaşlarla bir araya gelerek sağlam bir yapı oluşturur. Nike Air yastıklama uzun süreli rahatlık sunarken yansıtıcı ayrıntılar ve buz mavisi dış taban, hem sahadayken hem de hareket halindeyken giyebileceğin göz alıcı bir stil kazandırır.</div>
            <div className='border rounded-full cursor-pointer text-1xl w-[100px] h-10 flex items-center justify-center bg-gray-300'>İncele</div>
          </div>
          <img src='https://1.kixify.com/sites/default/files/imagecache/product_full/product/2023/05/15/p_34578121_199085909_111814.jpg' alt=''></img>
        </div>
        <div className='!flex items-center bg-gray-100 px-6'>
          <div>
            <div className='text-3xl font-bold'>Spor Ayakkabısı</div>
            <div className='my-2'>Rahat, dayanıklı, zamana meydan okuyan bu stilin 1 numara olması boşuna değil. 1980'lerin klasik yapısı, dayanıklı deri ve ripstop kumaşlarla bir araya gelerek sağlam bir yapı oluşturur. Nike Air yastıklama uzun süreli rahatlık sunarken yansıtıcı ayrıntılar ve buz mavisi dış taban, hem sahadayken hem de hareket halindeyken giyebileceğin göz alıcı bir stil kazandırır.</div>
            <div className='border rounded-full cursor-pointer text-1xl w-[100px] h-10 flex items-center justify-center bg-gray-300'>İncele</div>
          </div>
          <img src='https://cms-cdn.thesolesupplier.co.uk/2023/10/nike-dunk-low-next-nature-daybreak-purple-fz4349-100_w672_h672_pad_.jpg.webp' alt=''></img>
        </div>
      </Slider>
    </div>
  )
}

export default SliderComp
