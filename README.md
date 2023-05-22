## Build olan dosyası deploy etmek için
### 1.build dosyası /var/www/word-web/builde kopyalanır
cp -r build /var/www/word-web

### 2.nginix tekrar başlatılır.
sudo service nginx restart
