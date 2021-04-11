# PATİKA.DEV FRONT-END EĞİTİMİ
Başlangıç Tarihi 09/04/2021 15:08   
Yazan: Cengizhan Parlak [GitHub](github.com/cengizhanparlak " ")
<hr>

## *İçerik* <a id=icerik></a>

## 1) [Patika eğitim notları](#patika-notlar)

* [Araçlar, IDE Ayarları, Eklentiler](#notlar-araclar)
  * [Yararlı VS Code kısayolları](#yararli-kisayollar)
* [HTML](#notlar-html)
  * [Dil alakasız notlar](#Dil-alakasız-notlar)
  * [Dille alakalı notlar](#Dille-alakalı-notlar)
* [CSS](#notlar-css)
  * [Dil alakasız notlar](#Dil-alakasız-notlar)
  * [Dille alakalı notlar](#Dille-alakalı-notlar)
* [JavaScript](#notlar-js)
  * [Dil alakasız notlar](#Dil-alakasız-notlar)
  * [Dille alakalı notlar](#Dille-alakalı-notlar)

## 2) [Patika eğitimi için kaynaklar](#patika-kaynaklar)

* [Yardımcı Araçlar, IDE Ayarları, Eklentiler](#kaynaklar-araclar)
  * [VS Code Eklentileri](#kaynaklar-eklentiler)
  * [Uygulamalar ve Web Siteleri](#kaynaklar-siteler)
* [HTML](#kaynaklar-html)
* [CSS](#kaynaklar-css)
* [JavaScript](#kaynaklar-js)

# [&#8593;](#icerik) PATİKA.DEV FRONT-END EĞİTİMİ NOTLARI <a id="patika-notlar"></a>

Eğitim süresince görülen derslerde alınan notlar yer almaktadır. IDE kullanımı üzerine kısayollar da dahil olmak üzere "faydalı" olduğuduna inandığım çoğu bilgi burada almakta.

# [&#8593;](#icerik) Araçlar, IDE Ayarları, Eklentiler <a id="notlar-araclar"></a> 

Kod yazımında kullanılan ek araçlar, kullanımları üzerine notlar. IDE Ayarları ve eklentiler; nasıl kullanılması gerektiği ve özellikleri hakkında notlar

## Yararlı VS Code kısayolları <a id="yararli-kisayollar"/></a> 
* `Ctrl + Shift + P` VS Code ayarlarında arama yapmanızı sağlar
* `Ctrl + P` workspace içindeki dosya ve klasörleri aramanızı sağlar
* `Ctrl + Shift + N` yeni bir VS Code penceresi açar
* `Ctrl + Shift + E` workspace dosyalarını seçebilirsiniz
* `Ctrl + B`  sidebar'ı kapatıp açabilirsiniz
* `Ctrl + K V` kısayolu ile sağ kısımda yeni ön izleme açılabilir
* `Ctrl + Shift + V` kısayolu ile ön izleme aynı tab grubunda açılır
* `Ctrl + Shift + K` satır silinir
* `Alt + Shift + F` ile kod düzenlemesi yapılabilir.
* `Ctrl + K + C` ile satır yorum satırı haline getirilir.
* `Ctrl + Space` ile IntelliSense'in olduğu herhangi bir editörde o satır için önerilenler kısmını tekrar açabilirsiniz.
* `Ctrl + 1/2/3` tab grupları arasında gezinti yapmayı sağlar
* `Ctrl + Alt + sağ/sol ok` açık olan tabı sağ gruba taşır. sağda açık grup yoksa ekranı ikiye böler ve yeni grup açar
* `Alt + LClick` seçilen sayıda satırdaki yeri aynı anda değiştirmek için kullanılır. (Multiline editing)
* `Ctrl + P`
* `Ctrl + P`
* `Ctrl + P`
* `Ctrl + P`

## IDE AYARLARI

* `Ctrl + N` ile bulunduğunuz klasörde hızlıca dosya açmak için şu adımlar yapılmalı
  1. VS Code ayarlarında (`Ctrl + Shift + P`) şu dosyayı aratıp açın 
  
         Preferences: Open Keyboard Shortcuts (JSON)
  2. Aşağıdaki kodu yapıştırıp dosyayı kaydedin
        
          [
            { 
              "key": "ctrl+n", 
              "command": "explorer.  newFile" },
           ]
           
* `Ctrl + Alt + N` ile workspace'de hızlıca klasör yaratmak için yukarıdaki adımı takip edin. 2. adımda süslü parantezden virgül koyup şu kodu ekleyin 

      { 
        "key": "ctrl+alt+n", 
        "command": "explorer.newFolder" },
  
  Her ikisini de eklediyseniz kod şöyle olmalı 
  
      [
          { 
          "key": "ctrl+n", "command": "explorer.newFile" }, 
          { 
          "key": "ctrl+alt+n", "command": "explorer.    newFolder" },
      ]

*   `Ctrl + Tab` ve `Ctrl + Shift + Tab` ile sırayla sekme gezintisi yapmak için `settings.json` içine ekleyin 

        {
            "key": "ctrl+tab", 
            "command": "workbench.action.nextEditorInGroup" },
        {
            "key": "ctrl+shift+tab",
            "command": "workbench.action.previousEditorInGroup" },

# [&#8593;](#icerik) HTML  <a id="notlar-html"></a> 
* Dil alakasız notlar  
  * "! + Enter" kısayolunu VS Code'da çalıştırmak için açılan `.html` uzantılı dosyanın Language Mode'u HTML olarak seçilmelidir. (Varsayılan olarak django-html seçilme ihtimalinden dolayı.)
  * `.html` uzantılı dosyalar için html modunu bir ve son kez değiştirmek için: 
    1. Aşağıdaki mavi bardan HTML kısmına tıklayın.
    2. Yukarıda açılan bölümde Configure File Association for '.html' seçeneğine tıklayın
    3. Arama kısmına "html" yazarak html seçeneğini varsayılan dosya konfigürasyonu olarak belirleyin.



* Dille alakalı notlar 
  * HTML'de Semantic Markup ve Presentational Markup olmak üzere 2 çeşit işaretleme bulunabilir:
    * Presentational Markup: Gösterimsel İşaretleme anlamına gelir ve etiketlemenin yalnızca "görünüş olarak" özelliklerinin değiştirildiğini belli eder.
      
    * Semantic Markup: Anlamsal İşaretleme anlamına gelir ve etiketleme yapılan özelliğin, HTML kodlarını yorumlayan farklı web siteleri, araçlar ve uygulamalar tarafından anlam olarak da önem kazandığına işaret eder. (örneğine Semantic Markup ile işaretlenmiş bir etiketin ekran okuyucusunda vurgulanması gibi)

    İki işaretleme arasında SEO olarak ise bir fark yoktur. [Link](https://youtu.be/awto_wCeOJ4 "Is there a difference between the `strong` and `b` tags in terms of SEO?")
    * `<strong>` ve `<b>` kapamalı etiketlerinin farkı bulunamkta. Arama motorları ve HTML kodunu yorumlayan, inceleyen araçlar için `<strong>` etiketi metnin önemini belirtir. `<b>` etiketi ise sadece metni kalınlaştırır. `<strong>` etiketi metnin, ekran okuyucular tarafından "nasıl" okunması gerektiği konusunda bilgi verir.
    
    * `style` HTML dökümanı işlenirken ve görüntülenirken sayfa sırayla işlendiği için her zaman sırasıyla en altta kalan stil belirlemeleri baskın gelecektir. (Aynı element için birden fazla style olması durumunda)
  *  `id` attribute'u HTML sayfası boyunca yalnızca 1 öğeye verilebilir. Daha sonra bu öğeye spesifik olarak erişmekte kullanılabilir.
  *  `class` attribute'u HTML sayfası boyunca aynı özellikleri taşıması istenen (aynı sınıfta olması gereken) öğelere verilir. Birden çok öğeye verilebilir. Her birinde değiştirmek istediğimiz bir özellik olduğunda hepsini kolayca tek bir class ismiyle değiştirebiliriz.
  * Googl Font'larını siteye koyarken html'e eklediğimiz `<link>` tag'ı `head` içinde ilk satırda yer almalı.

## [&#8593;](#icerik) CSS <a id="notlar-css"></a> 

* Dil alakasız notlar

* Dille alakalı notlar
  * Bir HTML elementi kendini kapsayan elementin (parent elementi) stil özelliklerine sahip olur.
  * Google Font'larını siteye eklerken `@import` yerine `<link>` tagını kullanmalısınız. Performans olarak link tercih edilmekte ve önerilmekte.
  * 
  * 
  * 
  * 
  * 
  * 
  * 

## [&#8593;](#icerik) JavaScript <a id="notlar-js"></a> 

* 
* 
* 
* 
* 
* 

# [&#8593;](#icerik) PATİKA.DEV FRONT-END EĞİTİMİ İÇİN KAYNAKLAR <a id="patika-kaynaklar"></a>

Bu başlık altında kullanılabilecek kaynaklar yer almaktadır. Yararlı VS Code eklentileri, site tasarlamasında kullanılabilecek yardımcı araçlar, web siteleri; yapılması gereken IDE ayarları da bu başlıkta yazılmıştır.

# [&#8593;](#icerik)Yardımcı Araçlar, IDE Ayarları, Eklentiler <a id="kaynaklar-araclar"></a>

  * ## VS Code Eklentileri <a id="kaynaklar-eklentiler"></a>

    * Live Preview [link](https://marketplace.visualstudio.com/items?itemName=tht13.html-preview-vscode "HTML Preview") (HTML dosyasında yaptığınız değişiklikleri VS Code üzerinde canlı olarak görebilirsiniz. `Ctrl + K V` kısayolu ile sağ kısımda ön izleme açabilirsiniz)
    * Paste Image [link](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image "Paste Image") (`Ctrl + Alt + V` ile ekran görüntülerini markdown dosyalarına doğrudan yapıştırabilirsiniz)

* ## Uygulamalar ve Web Siteleri <a id="kaynaklar-siteler"></a>

  * remipsumlorem
  * remipsumlorem

## [&#8593;](#icerik) HTML <a id="kaynaklar-html"></a>

* remipsumlorem
* remipsumlorem
* remipsumlorem

## [&#8593;](#icerik) CSS <a id="kaynaklar-css"></a>

* remipsumlorem
* remipsumlorem
* remipsumlorem

## [&#8593;](#icerik) JavaScript <a id="kaynaklar-js"></a>

* remipsumlorem
* remipsumlorem
* remipsumlorem