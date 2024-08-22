import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import Modal from "../components/Modal"
import Input from '../components/Input'
import Button from '../components/Button'
import { createDataFunc, updateDataFunc } from '../redux/dataSlice'
import { modalFunc } from '../redux/modalSlice'
import { useLocation, useNavigate } from 'react-router-dom'


const Product = () => {
  const { modal } = useSelector(state => state.modal);
  const { data,keyword } = useSelector(state => state.data);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState({ name: "", price: "", url: "" })

  const onChangeFunc = (e, type) => {
    if (type == "url") {
      setProductInfo(prev => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }));

    } else {
      setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value })); /*prev/ürün içerisinde tüm elemanları gez ve sonra tüm ürünleri al name yerine value degerini ver*/
    }
  }
  let loc = location?.search.split('=')[1]
  // sayfa yüklendiğinde yani useeffect olduğunda

  useEffect(() => {
    if (loc) {
      setProductInfo(data.find(dt => dt.id == loc))

    }
  }, [loc])

  console.log(data, "data")

  const buttonFunc = () => {
    dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }))
    dispatch(modalFunc()); //modal kapanmasını istedim.
    setProductInfo('')
    
  }

  const buttonUpdateFunc = () => {
    dispatch(updateDataFunc({ ...productInfo, id: loc }))
    dispatch(modalFunc());
    navigate('/') //güncelleme işlemi bittikten sonra yeniden endpointin ana sf gitmesini sağlar.
    setProductInfo('')
  }


  const contentModal = (
    <>
      <Input value={productInfo.name} type={"text"} placeholder={"Ürün Ekle"} name={"name"} id={"name"} onChange={e => onChangeFunc(e, "name")} />
      <Input value={productInfo.price} type={"text"} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={e => onChangeFunc(e, "price")} />
      <Input type={"file"} placeholder={"Resim Seç"} name={"url"} id={"url"} onChange={e => onChangeFunc(e, "url")} />
      <Button btntext={loc ? "Ürün Güncelle" : "Ürün oluştur"} onClick={loc ? buttonUpdateFunc : buttonFunc}></Button>
    </>
  )

  const filteredItems = data.filter(dt => dt.name.toLowerCase().includes(keyword));

  return (
    <div>
      <div className='flex items-center flex-wrap'>
        {
          filteredItems?.map((dt, i) => (
            <ProductCard key={i} dt={dt}></ProductCard>
          ))
        }
      </div>

      {modal && <Modal content={contentModal} title={loc ? "Ürün Güncelle" : "Ürün oluştur"} />}  {/*eğer modal değeri true ise bana bir component dönsün*/}

    </div>
  )
}

export default Product
