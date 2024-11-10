# ToDo App

ToDoApp, yapılacaklar listesi yönetimini sağlayan bir uygulamadır. Kullanıcılar, görev ekleme, görev tamamlama ve filtreleme (tüm, aktif, tamamlanan) gibi işlevleri kullanarak yapılacaklarını kolayca takip edebilirler.

## Proje Özellikleri

- Yeni görev ekleme
- Görev tamamlama veya tamamlanma durumunu değiştirme
- Görevleri filtreleme (tüm, aktif, tamamlanan)
- Tamamlanan görevleri temizleme

## Kullanılan Teknolojiler

- **React** - Kullanıcı arayüzü geliştirme
- **Formik** - Form yönetimi ve doğrulama
- **Yup** - Form doğrulama şemaları oluşturma
- **UUID** - Benzersiz ID oluşturma
- **CSS** - Stil yönetimi

## Proje Kurulumu

1. Bu projeyi klonlayın:

   ```bash
   git clone https://github.com/yasarcandamli/ToDoApp.git
   cd ToDoApp
   ```

2. Gerekli paketleri yükleyin:

   ```bash
   npm install
   ```

3. Projeyi başlatın:

   ```bash
   npm run dev
   ```

4. Tarayıcınızda `http://localhost:5173` adresine gidin.

## Proje Yapısı

- **App.js**: Uygulamanın ana bileşeni, `TodoProvider` ile `TodoContext` sağlanır ve `Header`, `Content`, `Footer` bileşenleri burada çağrılır.
- **contexts/ToDoContext.js**: Görevleri yönetmek için context API ile durum yönetimi yapılır.
- **components/Form/index.js**: Görev eklemek için form bileşeni.
- **components/TodoList.js**: Eklenen görevlerin listelendiği bileşen.
- **components/ContentFooter.js**: Görevlerin sayısını gösteren ve filtreleme seçeneklerini içeren bileşen.
- **components/Footer.js**: Projeye ilişkin bilgi ve bağlantılar sunar.
- **components/Content.js**: `TodoList` ve `ContentFooter` bileşenlerini bir araya getirir.

## Kullanım

1. **Yeni Görev Ekleme**: Ekranın üst kısmında yer alan "What needs to be done?" alanına bir görev girin ve enter tuşuna basın.
2. **Görev Tamamlama**: Bir görevi tamamlamak için görevin yanındaki onay kutusunu işaretleyin.
3. **Filtreleme**: "All", "Active" ve "Completed" filtrelerini kullanarak görevleri duruma göre listeleyin.
4. **Tamamlanan Görevleri Temizleme**: "Clear completed" düğmesine tıklayarak tamamlanan tüm görevleri kaldırın.
