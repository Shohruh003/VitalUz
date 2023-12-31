import { Client } from '../../Hooks/Client'
import './sertifikat.css'
import { Table } from 'react-bootstrap'

export const SerRus = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const code = queryParameters.get("code")
  const {client} = Client()
  return (
    <div className='sertifikat'>
      <h3>Договор № {code} <br /> <span>(поставки)</span></h3>
      <p className='date'>
        <span>  г. Ташкент.</span>
        <span>{client.date} г</span>
      </p>

      <p>МЧЖ «VITAL WORLD» именуемый в дальнейшем “Поставщик “, в лице Генерального директора       Усманходжаев С.Ф. действующего на основании Устава ,с одной стороны, и _________________________________, именуемый в дальнейшем “Покупатель “,в лице _____________________________________, действующий на основании_____________, с другой стороны, заключили настоящий договор о следующем:</p>

      <h4>1.Предмет Договора</h4>
      <p>1.1 Поставщик обязуется произвести и передавать в собственность Покупателю продукцию, в дальнейшем именуемую «Товаром», а Покупатель обязуется принимать нижеследующею продукцию:</p>
      <p>1.2. При поставке продукции в ПЭТ или поликарбонатных бутылях объёмом 18.9 литров, тара является обменной (многооборотной) и передаётся во временное пользование, с условием дальнейшего возврата тары обратно Поставщику.</p>
      <p>1.3.Тара является обменной (при повреждении либо утере взымается 60 000 сум за каждую тару</p>

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

      <h4> 2. Сроки и порядок доставки</h4>
      <p>2.1. Доставка оплаченной  продукции  осуществляется отдельными партиями, в объёме по заявке Покупателя в срок не превышающей 3-ти дней <br />
2.2. Доставка оплаченной продукции осуществляется Поставщиком своими силами и за свой счёт  по указанному  заявке адресу Покупателя в пределах административных границ с 09 :00 до  18:00. <br />
2.4. Товар ёмкостью 18.9 литров поставляется в бутылях, являющихся обменной многооборотной тарой и подлежащих возврату Поставщику в момент доставки очередной партии Товара. Бутыли должны быть возвращены Покупателем в состоянии, в котором бутыли были получены с учётом нормального износа. <br />
2.5. В случае утери или повреждения многооборотной тары, повлекший невозможность ее дальнейшего использования, Покупатель  обязан оплатить Поставщику залоговую стоимость в размере согласно 1.1.3. пункта настоящего договора. Многооборотная тара не принимается в дальнейший оборот, если представителем Продавца установлено, что многооборотная тара находится в состоянии, делающим невозможной ее последующую эксплуатацию, в частности: <br />
-Механические повреждения в виде трещин, сколов, царапин: <br />
-Приобретение бутылью любого запаха: <br />
-Загрязнение бутыли любыми субстанциями: <br />
-Наличие любых предметов внутри бутыли, за исключением клапана пробки: <br />
-Использование в бутыли воды из природного источника (родник, колодец), или водопровода.
<span>другие обстоятельство: </span>
2.6. Заказ Покупателя должен содержать наименование (ассортимент), количество Товара и адрес, по которому должен быть поставлен Товар.  <br />
2.7. Покупатель может заказать Товар по телефону или письменно с 09-00 до 18-00 в т. ч SMS отправка на нижеприведённые номера круглосуточно). <br />
2.8. Заказ Покупатель должен заказать на один день раньше до доставки Товара.
</p>



<h4> 3. Общая сумма Договора, цена товара и порядок расчетов </h4>

<p>3.1. Общая сумма договора составляет: 28 000 cум с НДС, <br />
3.2. Цена за единицу продукции составляет: указывается в единых прайс –листах, выставленных счётах или счётах-фактурах. Цена, количество, ассортимент и стоимость каждой партии «Товара», определяются по заявке Покупателя. Цена продукции может изменяться в связи с изменением цен на электроэнергию и на сырье. <br />
3.3. Поставщик вправе изменить цену на Товар, с обязательным уведомлением Покупателя. Новая цена Товара фиксируется в дополнительном соглашении сторон. <br />
3.4. «Покупатель» производит предоплату в размере 100% от суммы договора, а также произвести предоплату в размере 100% каждой партии «Товара». <br />
3.5. Оплата за продукцию может осуществляться со всех депозитах, лицевых и других банковских счетов, а также других не запрещенных законодательством источников платежей, в том числе банковских пластиковых карточек.</p>

<h4>   4. Права и обязанности сторон</h4>

<p>4.1. Поставщик обязан: <br />
4.1.2. Передать покупателю Товар надлежащего качества, и в обусловленном заказом Покупателя количестве и  ассортименте. <br />
4.1.3. В случае поставки Товара ненадлежащего качество, заменит его качественным Товаром либо возвратить Покупателю оплаченную Поставщику стоимость некачественного Товара. <br />
4.1.4. В случае задержке оплаты «Поставщик» имеет право изменит цену, количество, срок поставки, а также отказаться от доставки продукции по настоящему Договору. <br />
4.2. Покупатель обязан: <br />
4.2.1. Оплатить стоимость поставленного Т3вара.	 <br />
4.2.2. Возвратить пустые бутыли в момент поставки очередной партии Товара.</p>

<h4>   5. Ответственность сторон</h4>
<p>5.1. За неисполнение или ненадлежащее исполнение обязательств по настоящему договору стороны несут ответственность в соответствии с действующим законодательством РУз. <br />
5.2. Поставщик не несёт ответственности за доставку Товара ненадлежащим образом, в случае несоблюдения покупателем пункта 2 Договора. <br />
5.3. «Покупатель» несёт ответственность за сохранность обменной (многооборотной) тары- ПЕТ или поликарбонатных бутыль объёмом 19 литров. <br />
5.4. Ни одна из сторон настоящего договора не несет ответственности перед другой стороной за невыполнение обязательств, обусловленных обстоятельствами непреодолимой силы.</p>

<h4>  6. Форс-мажор</h4>
<p>6.1. Стороны освобождаются от частичного или полного исполнения обязательств по настоящему договору, если это произошло вследствие непредвиденных обстоятельств. <br />
6.2. К непредвиденным обстоятельством относятся события, за возникновения которых стороны не несут   ответственности   и на которые не могут оказать влияния, например  землетрясения, наводнения, военные действия, правительственные постановления или распоряжения государственных органов, делающих невозможным отгрузку 
продукции, а также селевые потоки и снегопады, так как месторасположение завода горная местность</p>

<h4>7.Порядокразрешения споров </h4>
<p>7.1. Споры и разногласия, которые могут возникнуть при исполнении настоящего Договора, будут по возможности разрешаться путем переговоров между сторонами. <br />
7.2. В случае невозможности разрешения споров путем переговоров стороны, передают их на рассмотрение в экономический суд по Ташкентской области, где они решаются в соответствии с действующим законодательством РУз.</p>

<h4>8. Срок действия и расторжение договора</h4>
<p>8.1. Настоящий договор вступает в силу с момента его подписания сторонами и действует до момента, пока одна из сторон не заявит о своем желания расторгнуть Договор
8.2. Договор может быт расторгнут досрочно по соглашению сторон либо по истечении 10 дней с момента подачи   одной   из сторон заявления о расторжении Договора. <br />
8.3. Прекращение действия Договора не освобождает стороны от выполнения обязательств, возникших в момент действия Договора. <br />
8.4. В случае прекращения действия Договора стороны в течение 10 банковских дней с даты прекращения действия Договора производят взаимный расчет.</p>

<h4>9. Прочие условия </h4>
<p>9.1. Санитарная обработка Оборудование, используемого для разлива питьевой воды «VITAL WATER» из Бутылей, может проводиться Поставщиком по заказу Покупателя. <br />
9.2. В случае отказа Покупателя от санитарной обработки или не провидения Покупателем санитарной   обработки   в установленный срок, Поставщик не несет ответственности за соответствие качества разливаемой  через Оборудование питьевой воды «VITAL WATER» требуемым стандартам качества. <br />
9.3. Все изменения и дополнения к Договору оформляются в письменной форме, подписываются Сторонами и с момента подписания являются неотъемлемой частью Договора. <br />
9.4. Во всем, что урегулировано настоящим Договором, Стороны руководствуются действующим законодательством Республики Узбекистан. <br />
9.5. Настоящий Договор составлен в двух экземплярах, имеющих одинаковую юридическую силу, по одному экземпляру для каждой из Сторон.</p>

<h4>10. Юридические адреса и платежные реквизиты сторон.</h4>

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