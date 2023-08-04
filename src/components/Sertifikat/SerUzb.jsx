import './sertifikat.css'
import { Table } from 'react-bootstrap'

export const SerUzb = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const code = queryParameters.get("code")
  
  return (
    <div className='sertifikat'>
       <h3>Shartnoma raqami {code} <br /> <span>(ta'minot)</span></h3>
       <p className='date'>
         <span> Toshkent.</span>
         {/* <span>24.07.2023</span> */}
       </p>

       <p>MCH "VITAL WORLD" bundan keyin "Yetkazib beruvchi" deb yuritiladi, bosh direktor Usmanxo'jaev S.F. bir tomondan, Nizom asosida ish yurituvchi, boshqa tomondan, _____________ asosida ish yurituvchi _____________________________________ vakili, bundan keyin “Xaridor” deb yuritiladigan _________________________________, boshqa tomondan, ushbu shartnomani quyidagicha tuzdilar:</ p>

       <h4>1.Shartnomaning predmeti</h4>
       <p>1.1 Yetkazib beruvchi bundan keyin “Tovarlar” deb ataladigan mahsulotlarni ishlab chiqarish va xaridorning mulkiga topshirish majburiyatini oladi va Xaridor quyidagi mahsulotlarni qabul qilish majburiyatini oladi:</p>
       <p>1.2. 18,9 litr hajmdagi PET yoki polikarbonat butilkalardagi mahsulotlarni yetkazib berishda idishni keyinchalik Yetkazib beruvchiga qaytarish sharti bilan almashtirish mumkin (qayta foydalanish mumkin) va vaqtincha foydalanishga o‘tkaziladi.</p>
       <p>1.3.Konteyner almashtirilishi mumkin (buzilgan yoki yo'qolgan taqdirda har bir konteyner uchun 60 000 so'm undiriladi</p>

       
      <Table striped bordered>
                    <thead>
                      <tr>
                        <th>№</th>
                        <th>Наименование товара</th>
                        <th>Ед. изм</th>
                        <th>Кол-во</th>
                        <th>Цена</th>
                        <th>Стоимость поставки</th>
                        <th>ставка</th>
                        <th>Сумма</th>
                        <th>Стоимость поставки с учетом НДС</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>1</td>
                          <td>Вода питьевая «VITALWATER» в 18.9 л.</td>
                          <td>шт</td>
                          <td></td>
                          <td>28 000</td>  
                          <td></td>  
                          <td>12 %</td>  
                          <td></td>  
                          <td></td>  
                        </tr>
                        <tr>
                          <td></td>
                          <td>Итого:</td>
                          <td></td>
                          <td></td>
                          <td></td>   
                        </tr>
                    </tbody>
                  </Table>

       <h4> 2. Yetkazib berish shartlari va tartibi </h4>
       <p>2.1. To'langan mahsulotlarni etkazib berish alohida partiyalarda, xaridorning iltimosiga binoan 3 kundan ortiq bo'lmagan muddatda amalga oshiriladi<br />
2.2. To'langan mahsulotlarni yetkazib berish Yetkazib beruvchi tomonidan o'z hisobidan va o'z mablag'lari hisobidan Xaridorning arizada ko'rsatilgan manziliga ma'muriy chegaralar doirasida soat 09:00 dan 18:00 gacha amalga oshiriladi. <br />
2.4. Hajmi 18,9 litr bo'lgan tovarlar butilkalarda etkazib beriladi, ular almashtirilishi mumkin bo'lgan qayta ishlatiladigan idishlar bo'lib, Tovarning keyingi partiyasini etkazib berish vaqtida Yetkazib beruvchiga qaytarilishi kerak. Shishalar Xaridor tomonidan butilkalar qabul qilingan holatda, normal eskirgan holda qaytarilishi kerak. <br />
2.5. Qayta foydalanish mumkin bo'lgan qadoqlash yo'qolgan yoki shikastlangan bo'lsa, undan keyingi foydalanish imkonsiz bo'lsa, Xaridor Yetkazib beruvchiga 1.1.3-bandga muvofiq miqdorda kafolat depozitini to'lashi shart. ushbu shartnomaning bandi. Agar sotuvchining vakili qayta foydalanish mumkin bo'lgan idish uning keyingi ishlashini imkonsiz qiladigan holatda ekanligini aniqlasa, qayta foydalanish mumkin bo'lgan idish keyingi muomalaga qabul qilinmaydi, xususan: <br />
-yoriqlar, chiplar, tirnalgan shakldagi mexanik shikastlanishlar: <br />
-Har qanday hidli shishani sotib olish: <br />
- Shishaning har qanday moddalar bilan ifloslanishi: <br />
- Shisha ichida tiqin klapandan tashqari har qanday narsaning mavjudligi: <br />
-Tabiiy manbadan (buloq, quduq) yoki suv ta'minotidan bir shisha suvda foydalaning.
<span>boshqa holat: </span>
2.6. Xaridorning buyurtmasida Tovarning nomi (assortimenti), miqdori va Tovar etkazib berilishi kerak bo'lgan manzil ko'rsatilishi kerak. <br />
2.7. Xaridor Tovarga telefon orqali yoki yozma ravishda soat 09-00 dan 18-00 gacha buyurtma berishi mumkin, shu jumladan quyidagi raqamlarga kechayu kunduz SMS yuborish). <br />
2.8. Buyurtma Xaridor tovarni yetkazib berishdan bir kun oldin buyurtma berishi kerak.
</p>



<h4> 3. Shartnomaning umumiy summasi, tovarning narxi va hisob-kitoblar tartibi</h4>

<p>3.1. Shartnomaning umumiy summasi: QQS bilan 28 000 so'm, <br />
3.2. Mahsulot birligiga to'g'ridan-to'g'ri narx: birlashtirilgan narxlar ro'yxatida, berilgan schyot-fakturalarda yoki schyot-fakturalarda ko'rsatilgan. “Tovar”ning har bir partiyasining narxi, miqdori, assortimenti va tannarxi Xaridorning iltimosiga binoan belgilanadi. Mahsulotlar narxi elektr energiyasi va xom ashyo narxlarining o'zgarishi munosabati bilan o'zgarishi mumkin. <br />
3.3. Yetkazib beruvchi Xaridorni majburiy ravishda xabardor qilgan holda Tovar narxini o'zgartirishga haqli. Tovarning yangi narxi tomonlarning qo'shimcha kelishuvida belgilanadi. <br />
3.4. “Xaridor” shartnoma summasining 100 foizi miqdorida avans to‘lovini amalga oshiradi, shuningdek “Tovar”ning har bir partiyasining 100 foizi miqdorida avans to‘lovini amalga oshiradi. <br />
3.5. Mahsulotlar uchun to‘lov barcha depozitlar, shaxsiy va boshqa bank hisobvaraqlari, shuningdek, qonun hujjatlarida taqiqlanmagan boshqa to‘lov manbalari, jumladan, bank plastik kartalari orqali amalga oshirilishi mumkin.</p>

<h4> 4. Tomonlarning huquq va majburiyatlari</h4>

<p>4.1. Yetkazib beruvchi: <br />
4.1.2. Xaridorga buyurtmada nazarda tutilgan sifatli, miqdor va assortimentdagi Tovarlarni topshirish. <br />
4.1.3. Sifatsiz Tovar yetkazib berilgan taqdirda, uni sifatli Tovarga almashtiring yoki Yetkazib beruvchiga to'langan past sifatli Tovar qiymatini Xaridorga qaytaring. <br />
4.1.4. To'lov kechiktirilgan taqdirda, "Yetkazib beruvchi" narxni, miqdorni, etkazib berish muddatini o'zgartirishga, shuningdek ushbu Shartnoma bo'yicha mahsulotlarni etkazib berishni rad etishga haqli. <br />
4.2. Xaridor: <br />
4.2.1. Yetkazib berilgan T3var narxini to'lang. <br />
4.2.2. Tovarlarning keyingi partiyasini yetkazib berish vaqtida bo‘sh butilkalarni qaytaring.</p>

<h4> 5. Tomonlarning javobgarligi</h4>
<p>5.1. Ushbu shartnoma bo‘yicha majburiyatlarni bajarmaganlik yoki lozim darajada bajarmaganlik uchun tomonlar O‘zbekiston Respublikasining amaldagi qonunchiligiga muvofiq javobgar bo‘ladilar. <br />
5.2. Agar Xaridor ushbu bandni bajarmagan bo'lsa, Yetkazib beruvchi tovarlarni noto'g'ri etkazib berish uchun javobgar emas. <br />
5.3. "Xaridor" almashtiriladigan (qayta ishlatiladigan) qadoqlash - 19 litr hajmli PET yoki polikarbonat idishlarining xavfsizligi uchun javobgardir. <br />
5.4. Ushbu shartnoma taraflaridan hech biri ikkinchi tomon oldida fors-major holatlari tufayli majburiyatlarni bajarmaganligi uchun javobgar emas.</p>

<h4> 6. Fors-major holatlari</h4>
<p>6.1. Agar bu kutilmagan holatlar tufayli sodir bo'lgan bo'lsa, tomonlar ushbu shartnoma bo'yicha majburiyatlarni qisman yoki to'liq bajarishdan ozod qilinadi. <br />
6.2. Kutilmagan holatlarga tomonlar javobgar bo'lmagan va ta'sir qila olmaydigan hodisalar kiradi, masalan, zilzilalar, suv toshqini, harbiy harakatlar, hukumat qarorlari yoki hukumat buyruqlari, bu yuk tashishni imkonsiz qiladi.
mahsulotlar, shuningdek, sel va qor yog'ishi, chunki zavod joylashgan joy tog'li</p>

<h4>7. Nizolarni hal qilish </h4>
<p>7.1. Ushbu Shartnomani bajarish jarayonida yuzaga kelishi mumkin bo'lgan nizolar va kelishmovchiliklar, agar iloji bo'lsa, tomonlar o'rtasidagi muzokaralar yo'li bilan hal qilinadi. <br />
7.2. Nizolarni muzokaralar yo‘li bilan hal etishning iloji bo‘lmasa, taraflar ularni O‘zbekiston Respublikasining amaldagi qonunchiligiga muvofiq hal qilinadigan Toshkent viloyati xo‘jalik sudiga ko‘rib chiqish uchun taqdim etadilar.</p>

<h4>8. Shartnomaning amal qilish muddati va bekor qilinishi</h4>
<p>8.1. Ushbu shartnoma tomonlar imzolagan paytdan boshlab kuchga kiradi va tomonlardan biri Shartnomani bekor qilish istagini bildirmaguncha amal qiladi.
8.2. Shartnoma tomonlarning kelishuvi bo'yicha muddatidan oldin yoki tomonlardan biri shartnomani bekor qilish to'g'risida ariza bergan kundan boshlab 10 kundan keyin bekor qilinishi mumkin. <br />
8.3. Shartnomani bekor qilish tomonlarni Shartnomani tuzish vaqtida yuzaga kelgan majburiyatlarni bajarishdan ozod etmaydi. <br />
8.4. Shartnoma bekor qilingan taqdirda tomonlar Shartnoma bekor qilingan kundan boshlab 10 bank kuni ichida o‘zaro hisob-kitoblarni amalga oshiradilar.</p>

<h4>9. Turli xil </h4>
<p>9.1. Shishalardan VITAL SUV ichimlik suvini quyish uchun ishlatiladigan sanitariya-texnik vositalar Xaridorning iltimosiga binoan Yetkazib beruvchi tomonidan amalga oshirilishi mumkin. <br />
9.2. Xaridor sanitarizatsiyadan bosh tortsa yoki xaridor belgilangan muddatda sanitariya-gigienani ta'minlamasa, Yetkazib beruvchi Uskuna orqali quyilgan VITAL SUV ichimlik suvi sifatining talab qilinadigan sifat standartlariga muvofiqligi uchun javobgar bo'lmaydi. <br />
9.3. Shartnomaga kiritilgan barcha o'zgartirish va qo'shimchalar yozma ravishda amalga oshiriladi, Tomonlar tomonidan imzolanadi va imzolangan paytdan boshlab ular Shartnomaning ajralmas qismi hisoblanadi. <br />
9.4. Ushbu Bitim bilan tartibga solinadigan barcha masalalarda Tomonlar O‘zbekiston Respublikasining amaldagi qonunchiligiga amal qiladilar. <br />
9.5. Ushbu Shartnoma bir xil yuridik kuchga ega boʻlgan ikki nusxada tuzilgan, har bir Tomon uchun bir nusxadan.</p>

<h4>10. Tomonlarning yuridik manzillari va to‘lov rekvizitlari.</h4>

<Table striped bordered>
                    <thead>
                      <tr>
                        <th>ПОСТАВЩИК</th>
                        <th>ПОКУПАТЕЛЬ</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>МЧЖ «VITALWORLD» <br />
Адрес: Toshkent viloyati, Zangiota tumani, <br /> 
Mustaqillik 2-tor ko`chasi, 1 "A" uy, <br />
Р/с: 2020 8000 4009 4748 9001   <br />       
в АКБ «InfinBank» Зангиатинском ф-л, Ташкент обл. <br />
ИНН: 305879129 <br />
МФО: 01080 <br />
ОКЭД: 11070 <br /> <br /> <br />

Директор ________________   Усманходжаев С.Ф. <br />
/подпись/</td>
                          <td>Имущество принял: <br />

Адрес: _______________________________________________ <br />
Тел:__________________________________________________ <br />
Р/с:__________________________________________________ <br />
Банк________________________________________________ <br />
Город_________________ МФО _______________________ <br />
ИНН__________________ ОКЭД _______________________ <br /> <br /> <br />
              
              ____________________________________ <br />
                         М.П          /подпись/</td>
                        </tr>
                    </tbody>
                  </Table>
     </div>
  )
}