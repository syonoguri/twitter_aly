var chai = require("chai");
var assert = chai.assert;






var jsonToArray = function(body){
  
  var analysisResultR = JSON.parse(body);
  var resultArrayR = [];
  // 該当商品が無かった場合の処理
  if(analysisResultR["Items"][0]==undefined) {
    resultArrayR[0] = "Error:このキーワードでヒットする商品がありません。";
    return resultArrayR;
  }
  // 検索でヒットした商品のタイトルを配列に格納
  for(var i=0; i<30; i++){    
    resultArrayR.push(analysisResultR["Items"][i]["Item"]["itemName"]);
    // 検索結果が30商品に満たなかった場合の処理
    if(analysisResultR["Items"][i+1] == undefined) return resultArrayR;}
  return resultArrayR;
}




describe("楽天のテスト",function(){
  var bd ={
    "count": 6963,
    "page": 1,
    "first": 1,
    "last": 30,
    "hits": 30,
    "carrier": 0,
    "pageCount": 100,
    "Items": [
      {
        "Item": {
          "itemName": "センター試験過去問研究英語（2019年版） （センター赤本シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19112377",
          "itemPrice": 950,
          "itemCaption": "センター赤本シリーズ 教学社 世界思想社センター シケン カコモン ケンキュウ エイゴ 発行年月：2018年04月 予約締切日：2018年04月12日 サイズ：全集・双書 ISBN：9784325223603 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15454915/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3603/9784325223603.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3603/9784325223603.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "センター試験過去問研究数学1・A／2・B（2019年版） （センター赤本シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19113117",
          "itemPrice": 950,
          "itemCaption": "センター赤本シリーズ 教学社 世界思想社センター シケン カコモン ケンキュウ スウガク イチ エイ ニ ビー 発行年月：2018年04月 予約締切日：2018年04月13日 サイズ：全集・双書 ISBN：9784325223610 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15455735/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3610/9784325223610.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3610/9784325223610.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 1,
          "reviewAverage": 5,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "センター試験過去問研究国語（2019年版） （センター赤本シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19098312",
          "itemPrice": 950,
          "itemCaption": "センター赤本シリーズ 教学社 世界思想社センター シケン カコモン ケンキュウ コクゴ 発行年月：2018年04月 予約締切日：2018年04月05日 サイズ：全集・双書 ISBN：9784325223627 本 語学・学習参考書 語学学習 日本語 語学・学習参考書 学習参考書・問題集 高校・大学受験 人文・思想・社会 教育・福祉 教育",
          "itemUrl": "https://item.rakuten.co.jp/book/15441204/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3627/9784325223627.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3627/9784325223627.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 1,
          "reviewAverage": 5,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "センター試験過去問研究化学（2019年版） （センター赤本シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19100320",
          "itemPrice": 950,
          "itemCaption": "センター赤本シリーズ 教学社 世界思想社センター シケン カコモン ケンキュウ カガク 発行年月：2018年04月 予約締切日：2018年04月06日 サイズ：全集・双書 ISBN：9784325223702 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15442012/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3702/9784325223702.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3702/9784325223702.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "センター試験過去問研究日本史B（2019年版） （センター赤本シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19100321",
          "itemPrice": 950,
          "itemCaption": "センター赤本シリーズ 教学社 世界思想社センター シケン カコモン ケンキュウ ニホンシ ビー 発行年月：2018年04月 予約締切日：2018年04月06日 サイズ：全集・双書 ISBN：9784325223634 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15442011/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3634/9784325223634.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3634/9784325223634.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "センター試験過去問研究生物（2019年版） （センター赤本シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19099729",
          "itemPrice": 950,
          "itemCaption": "センター赤本シリーズ 教学社 世界思想社センター シケン カコモン ケンキュウ セイブツ 発行年月：2018年04月 予約締切日：2018年04月05日 サイズ：全集・双書 ISBN：9784325223719 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15441209/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3719/9784325223719.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3719/9784325223719.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "センター試験過去問研究政治・経済／倫理，政治・経済（2019年版） （センター赤本シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19098315",
          "itemPrice": 950,
          "itemCaption": "センター赤本シリーズ 教学社 世界思想社センター シケン カコモン ケンキュウ セイジ ケイザイ リンリ セイジ ケイザイ 発行年月：2018年04月 予約締切日：2018年04月05日 サイズ：全集・双書 ISBN：9784325223689 本 語学・学習参考書 学習参考書・問題集 高校・大学受験 人文・思想・社会 その他",
          "itemUrl": "https://item.rakuten.co.jp/book/15441208/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3689/9784325223689.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3689/9784325223689.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "早稲田大学（基幹理工学部・創造理工学部・先進理工学部）（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19139140",
          "itemPrice": 2138,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社ワセダ ダイガク キカン リコウガクブ ソウゾウ リコウガクブ センシン 発行年月：2018年05月 予約締切日：2018年05月09日 サイズ：全集・双書 ISBN：9784325227779 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15483887/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7779/9784325227779.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7779/9784325227779.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "センター試験過去問研究地理B（2019年版） （センター赤本シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19098305",
          "itemPrice": 950,
          "itemCaption": "センター赤本シリーズ 教学社 世界思想社センター シケン カコモン ケンキュウ チリ ビー 発行年月：2018年04月 予約締切日：2018年04月05日 サイズ：全集・双書 ISBN：9784325223658 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15441205/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3658/9784325223658.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3658/9784325223658.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 1,
          "reviewAverage": 5,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "センター試験過去問研究物理（2019年版） （センター赤本シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19112376",
          "itemPrice": 950,
          "itemCaption": "センター赤本シリーズ 教学社 世界思想社センター シケン カコモン ケンキュウ ブツリ 発行年月：2018年04月 予約締切日：2018年04月12日 サイズ：全集・双書 ISBN：9784325223696 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15454916/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3696/9784325223696.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3696/9784325223696.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "梅肉エキス 紀州の赤本 粒(100g)【紀州の赤本】【送料無料】",
          "catchcopy": "梅肉エキス 紀州の赤本 粒 / 紀州の赤本☆送料無料☆",
          "itemCode": "rakuten24:10095730",
          "itemPrice": 3897,
          "itemCaption": "お店TOP＞健康食品＞植物由来サプリメント＞梅(ウメ)＞梅肉エキス＞梅肉エキス 紀州の赤本 粒 (100g)☆送料無料☆【梅肉エキス 紀州の赤本 粒の商品詳細】ムメフラールを多く含む梅肉エキスです。紀州の青梅を使用して作られています。【梅肉エキス 紀州の赤本 粒の原材料】・原材料名：梅肉エキス、甘藷、米粉、でん粉、食物繊維【栄養成分】・原材料名：梅肉エキス、甘藷、米粉、でん粉、食物繊維【ブランド】紀州の赤本【発売元、製造元、輸入元又は販売元】中野BC富士食研事業部中野BC富士食研事業部広告文責：Rakuten Direct株式会社電話：050-5577-5043[野菜・果実 サプリメント/ブランド：紀州の赤本/]　",
          "itemUrl": "https://item.rakuten.co.jp/rakuten24/e060961h/",
          "shopUrl": "https://www.rakuten.co.jp/rakuten24/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/rakuten24/cabinet/006/4904250110006.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/rakuten24/cabinet/006/4904250110006.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 0,
          "asurakuClosingTime": "",
          "asurakuArea": "",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 26,
          "reviewAverage": 4.85,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "楽天24",
          "shopCode": "rakuten24",
          "genreId": "208172",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "秋田県立大学 2019 (No.21) （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168288",
          "itemPrice": 2052,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社発行年月：2018年10月 予約締切日：2018年06月04日 ISBN：9784325223931 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15514111/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/noimage_01.gif?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/noimage_01.gif?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 0,
          "asurakuClosingTime": "",
          "asurakuArea": "",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "東京薬科大学（生命科学部）（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168466",
          "itemPrice": 3024,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社トウキョウ ヤッカ ダイガク セイメイ カガクブ 発行年月：2018年07月 予約締切日：2018年06月04日 サイズ：全集・双書 ISBN：9784325226949 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15514289/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/6949/9784325226949.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/6949/9784325226949.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "【梅肉エキス】紀州の赤本カプセル115g(約300カプセル)【梅エキス 南高梅 健康食品 和歌山 紀州】[730260]",
          "catchcopy": "【梅肉エキス】紀州の赤本カプセル115g(約300カプセル)",
          "itemCode": "chokyuan:10000330",
          "itemPrice": 5940,
          "itemCaption": "紀州産南高梅を一粒一粒丁寧にすり潰した梅果汁を長時間　煮詰めてできる梅肉エキス紀州の赤本。紀州の赤本には、私たちの体を健康に保ってくれる有機酸が50%以上も含まれています。ムメフラールこの有機酸の働きが民間伝承的に梅肉エキスは「体にいい」といわれる理由のひとつです。また、梅肉エキスにしか含まれないサラサラ物質「ムメフラール」が健康サラサラ生活を助けます。 ■選べる梅エキス（和歌山県産南高梅使用） 梅100%で飲みやすい！ 製法特許により梅真珠は梅の果肉粉末と梅エキスを練り合わせて粒にしました。 【メール便(郵便受け投函)送料無料】 販売価格(税込)： 3,240 円 家族で健康に飲みたい！ 梅100%の梅の粒。家族一緒に、毎日多めにお召し上がりの方に3か月分を一袋にいたしました。 【メール便(郵便受け投函)送料無料】 販売価格(税込)： 9,234 円 世界一の酸っぱさを実感 世界一酸っぱいといわれる梅エキス。何も加えず100%梅のまま瓶詰しました。 【クロネコヤマト宅急便 送料無料】 販売価格(税込)： 5,400 円 ちょっぴり食べやすく… 南高梅を煮詰めた梅エキスに蜂蜜を加えました。お子様にもおすすめです。 販売価格(税込)： 2,700 円 酸っぱさゼロで健康に！ 南高梅を煮詰めた梅エキスをカプセルに詰め、酸っぱさを感じずにお飲み頂けるようにいたしました。 販売価格(税込)： 5,940 円 2つの健康成分配合！ 南高梅を煮詰めた梅エキスとアントシアニンを豊富に含む紫サツマイモを加え粒状にいたしました。 販売価格(税込)： 5,184 円",
          "itemUrl": "https://item.rakuten.co.jp/chokyuan/018320/",
          "shopUrl": "https://www.rakuten.co.jp/chokyuan/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/chokyuan/cabinet/umeshinjyu/akahon/1st_ekisucap_115.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/chokyuan/cabinet/umeshinjyu/akahon/1st_ekisucap_115.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 1,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 0,
          "asurakuClosingTime": "",
          "asurakuArea": "",
          "affiliateRate": 5,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "紀州の梅酒・日本酒の通販 長久庵",
          "shopCode": "chokyuan",
          "genreId": "208172",
          "tagIds": [
            1000708,
            1004143
          ]
        }
      },
      {
        "Item": {
          "itemName": "京都教育大学 2019 (No.102) （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168328",
          "itemPrice": 2052,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社発行年月：2018年10月 予約締切日：2018年06月04日 ISBN：9784325224730 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15514151/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/4730/9784325224730.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/4730/9784325224730.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 0,
          "asurakuClosingTime": "",
          "asurakuArea": "",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "自治医科大学（看護学部）／東京慈恵会医科大学（医学部＜看護学科＞）（2017） （大学入試シリーズ　268）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:18210216",
          "itemPrice": 3024,
          "itemCaption": "大学入試シリーズ　268 教学社 世界思想社268 ジチ イカ ダイガク カンゴガクブ トウキョウ ジケイカイ イカ タ 発行年月：2016年09月 サイズ：全集・双書 ISBN：9784325208914 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/14481194/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8914/9784325208914.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8914/9784325208914.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "【梅肉エキス】紀州の赤本純正150g【梅エキス 南高梅 健康食品 和歌山 紀州】[730320]",
          "catchcopy": "【梅肉エキス】紀州の赤本純正150g",
          "itemCode": "chokyuan:10000328",
          "itemPrice": 5400,
          "itemCaption": "梅の成分であるクエン酸をはじめとする有機酸がギュッと濃縮した世界一酸っぱい食品で、健康維持に役立つということで梅の産地和歌山県みなべ地方では、各家庭でも自家製の梅肉エキスが作られています。70gの梅肉エキス純正を作るのにはなんと3.5kgもの紀州産南高梅の青梅が必要です。梅肉エキスは梅の成分だけで塩分は一切含まれていないので健康に役立つ食品として注目されています。 ■選べる梅エキス（和歌山県産南高梅使用） 梅100%で飲みやすい！ 製法特許により梅真珠は梅の果肉粉末と梅エキスを練り合わせて粒にしました。 販売価格(税込)： 3,240 円 家族で健康に飲みたい！ 梅100%の梅の粒。家族一緒に、毎日多めにお召し上がりの方に3か月分を一袋にいたしました。 販売価格(税込)： 9,234 円 世界一の酸っぱさを実感 世界一酸っぱいといわれる梅エキス。何も加えず100%梅のまま瓶詰しました。 販売価格(税込)： 5,400 円 ちょっぴり食べやすく… 南高梅を煮詰めた梅エキスに蜂蜜を加えました。お子様にもおすすめです。 販売価格(税込)： 2,700 円 酸っぱさゼロで健康に！ 南高梅を煮詰めた梅エキスをカプセルに詰め、酸っぱさを感じずにお飲み頂けるようにいたしました。 販売価格(税込)： 5,940 円 2つの健康成分配合！ 南高梅を煮詰めた梅エキスとアントシアニンを豊富に含む紫サツマイモを加え粒状にいたしました。 販売価格(税込)： 5,184 円",
          "itemUrl": "https://item.rakuten.co.jp/chokyuan/018280/",
          "shopUrl": "https://www.rakuten.co.jp/chokyuan/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/chokyuan/cabinet/umeshinjyu/akahon/1st_ekisu150.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/chokyuan/cabinet/umeshinjyu/akahon/1st_ekisu150.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 1,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 1,
          "shipOverseasArea": "ワールドワイド",
          "asurakuFlag": 0,
          "asurakuClosingTime": "",
          "asurakuArea": "",
          "affiliateRate": 5,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "紀州の梅酒・日本酒の通販 長久庵",
          "shopCode": "chokyuan",
          "genreId": "208172",
          "tagIds": [
            1000708,
            1004143
          ]
        }
      },
      {
        "Item": {
          "itemName": "静岡大学（前期日程）（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168065",
          "itemPrice": 2138,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社シズオカ ダイガク ゼンキ ニッテイ 発行年月：2018年09月 予約締切日：2018年06月04日 サイズ：全集・双書 ISBN：9784325224532 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15513888/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/4532/9784325224532.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/4532/9784325224532.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "神戸松蔭女子学院大学（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168487",
          "itemPrice": 2138,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社コウベ ショウイン ジョシ ガクイン ダイガク 発行年月：2018年08月 予約締切日：2018年06月04日 サイズ：全集・双書 ISBN：9784325228530 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15514310/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8530/9784325228530.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8530/9784325228530.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "【中古】 東海大学　医学部を除く(2017年版) 大学入試シリーズ326／教学者編集部(編者) 【中古】afb",
          "catchcopy": "",
          "itemCode": "bookoffonline:14932302",
          "itemPrice": 1042,
          "itemCaption": "教学者編集部(編者)販売会社/発売会社：教学社発売年月日：2016/09/01JAN：9784325209492",
          "itemUrl": "https://item.rakuten.co.jp/bookoffonline/0018756337/",
          "shopUrl": "https://www.rakuten.co.jp/bookoffonline/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/1832/0018756337l.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/1832/0018756337l.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 1,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 1,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 0,
          "asurakuClosingTime": "",
          "asurakuArea": "",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "ブックオフオンライン楽天市場店",
          "shopCode": "bookoffonline",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "一橋大学（前期日程）（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19165339",
          "itemPrice": 2268,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社ヒトツバシ ダイガク ゼンキ ニッテイ 発行年月：2018年06月 予約締切日：2018年05月30日 サイズ：全集・双書 ISBN：9784325224266 本 語学・学習参考書 学習参考書・問題集 高校・大学受験 人文・思想・社会 教育・福祉 教育",
          "itemUrl": "https://item.rakuten.co.jp/book/15510387/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/4266/9784325224266.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/4266/9784325224266.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 0,
          "asurakuClosingTime": "",
          "asurakuArea": "",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "【中古】 転職の赤本 ／鈴木康弘【著】 【中古】afb",
          "catchcopy": "",
          "itemCode": "bookoffonline:12271541",
          "itemPrice": 822,
          "itemCaption": "鈴木康弘【著】販売会社/発売会社：エンターブレイン/角川グループパブリッシング発売年月日：2012/12/14JAN：9784047284531",
          "itemUrl": "https://item.rakuten.co.jp/bookoffonline/0016943428/",
          "shopUrl": "https://www.rakuten.co.jp/bookoffonline/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/350/0016943428l.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/350/0016943428l.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 1,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 1,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 0,
          "asurakuClosingTime": "",
          "asurakuArea": "",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "ブックオフオンライン楽天市場店",
          "shopCode": "bookoffonline",
          "genreId": "209071",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "青山学院大学（法学部〈A方式〉・国際政治経済学部ー個別学部日程）（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168085",
          "itemPrice": 2268,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社アオヤマ ガクイン ダイガク ホウガクブ エイ ホウシキ コクサイ セイジ ケ 発行年月：2018年06月 予約締切日：2018年06月04日 サイズ：全集・双書 ISBN：9784325225614 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15513908/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5614/9784325225614.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5614/9784325225614.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "早稲田大学（文学部）（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19139133",
          "itemPrice": 2138,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社ワセダ ダイガク ブンガクブ 発行年月：2018年05月 予約締切日：2018年05月09日 サイズ：全集・双書 ISBN：9784325227700 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15483880/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7700/9784325227700.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7700/9784325227700.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "首都大学東京（理系）（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168057",
          "itemPrice": 2484,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社シュト ダイガク トウキョウ リケイ 発行年月：2018年08月 予約締切日：2018年06月04日 サイズ：全集・双書 ISBN：9784325224297 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15513880/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/4297/9784325224297.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/4297/9784325224297.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "帝京大学（医学部）（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168168",
          "itemPrice": 3456,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社テイキョウ ダイガク イガクブ 発行年月：2018年07月 予約締切日：2018年06月04日 サイズ：全集・双書 ISBN：9784325226734 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15513991/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/6734/9784325226734.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/6734/9784325226734.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "相模女子大学・相模女子大学短期大学部（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168442",
          "itemPrice": 1944,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社サガミ ジョシ ダイガク サガミ ジョシ ダイガク タンキ ダイガクフ 発行年月：2018年08月 予約締切日：2018年06月04日 サイズ：全集・双書 ISBN：9784325226123 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15514265/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/6123/9784325226123.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/6123/9784325226123.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "摂南大学（理工学部・薬学部・看護学部）（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168364",
          "itemPrice": 2138,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社セツナン ダイガク リコウガクブ ヤクガクブ カンゴガクブ 発行年月：2018年07月 予約締切日：2018年06月04日 サイズ：全集・双書 ISBN：9784325228592 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15514187/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8592/9784325228592.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8592/9784325228592.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 0,
          "asurakuClosingTime": "",
          "asurakuArea": "",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 3,
          "pointRateStartTime": "2018-10-05 00:00",
          "pointRateEndTime": "2018-10-15 23:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "【中古】 上智大学(2018年版) 神学部・総合人間科学部〈心理学科・看護学科〉・経済学部〈経済学科〉・外国語学部〈ドイツ語学科・ポルトガル語学科〉 大学入試シリーズ 【中古】afb",
          "catchcopy": "",
          "itemCode": "bookoffonline:15069254",
          "itemPrice": 822,
          "itemCaption": "教学社編集部(編者)販売会社/発売会社：教学社発売年月日：2017/07/30JAN：9784325220121",
          "itemUrl": "https://item.rakuten.co.jp/bookoffonline/0018906957/",
          "shopUrl": "https://www.rakuten.co.jp/bookoffonline/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/2323/0018906957l.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/2323/0018906957l.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 1,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 1,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 0,
          "asurakuClosingTime": "",
          "asurakuArea": "",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "ブックオフオンライン楽天市場店",
          "shopCode": "bookoffonline",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "明治大学（文学部ー一般選抜入試）（2018） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:18641044",
          "itemPrice": 2138,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社BKSCPN_【bookーfestivalーthr】 メイジ ダイガク ブンガクブ イッパン センバツ ニュウシ 発行年月：2017年06月 サイズ：全集・双書 ISBN：9784325221333 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15022529/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/1333/9784325221333.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/1333/9784325221333.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "12:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/宮城県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 2,
          "reviewAverage": 4,
          "pointRate": 5,
          "pointRateStartTime": "2018-10-05 10:00",
          "pointRateEndTime": "2018-10-10 09:59",
          "giftFlag": 0,
          "shopName": "楽天ブックス",
          "shopCode": "book",
          "genreId": "208919",
          "tagIds": []
        }
      }
    ],
    "GenreInformation": [],
    "TagInformation": []
  }
  var notext = {
    "error": "wrong_parameter",
    "error_description": "keyword or itemCode is essential parameter, or set genreId value except 0. To search for items in shop, please give your shopCode and set genreId to 0"
  }
  var noresult = {
    "count": 0,
    "page": 1,
    "first": 0,
    "last": 0,
    "hits": 0,
    "carrier": 0,
    "pageCount": 0,
    "Items": [],
    "GenreInformation": [],
    "TagInformation": []
  }
  var biyoushi = {
    "count": 9,
    "page": 1,
    "first": 1,
    "last": 9,
    "hits": 9,
    "carrier": 0,
    "pageCount": 1,
    "Items": [
      {
        "Item": {
          "itemName": "【中古】 美容師試験問題と解説 / 受験研究会 / 新星出版社 [単行本]【ネコポス発送】",
          "catchcopy": "【最短で翌日お届け。通常24時間以内発送、午後1時までは当日発送】",
          "itemCode": "mottainaihonpo:10484629",
          "itemPrice": 403,
          "itemCaption": "著者：受験研究会出版社：新星出版社サイズ：単行本ISBN-10：4405021104ISBN-13：9784405021105■通常24時間以内に発送可能です。午後1時までのご注文は通常当日出荷。■ネコポスで送料は1点なら188円です。2点は218円。3点は278円。4点は318円。5点以上は600円になります。※2,500円以上の購入で送料無料。※多数ご購入頂いた場合は、宅配便での発送になる場合があります。■ただいま、しおり、カレンダーをプレゼントしております。■送料無料の「もったいない本舗本店」もご利用ください。メール便送料無料です。■中古品ではございますが、良好なコンディションです。決済は、クレジットカード、楽天バンクがご利用可能です。※楽天バンク決済の場合、当日正午までの注文が当日発送となります。■万が一品質に不備が有った場合は、返金対応。■クリーニング済み。■商品画像に「帯」が付いているものがありますが、中古品のため、実際の商品には付いていない場合がございます。■”s1、s2”などの番号は、弊社管理番号です。どちらでもご購入いただけます。■商品状態の表記につきまして・非常に良い：　　使用されてはいますが、　　非常にきれいな状態です。　　書き込みや線引きはありません。・良い：　　比較的綺麗な状態の商品です。　　ページやカバーに欠品はありません。　　文章を読むのに支障はありません。・可：　　文章が問題なく読める状態の商品です。　　マーカーやペンで書込があることがあります。　　商品の痛みがある場合があります。",
          "itemUrl": "https://item.rakuten.co.jp/mottainaihonpo/4405021104/",
          "shopUrl": "https://www.rakuten.co.jp/mottainaihonpo/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/mottainaihonpo/cabinet/05833200/bkvnzadps26larn9.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/mottainaihonpo/cabinet/05833200/bkvnzadps26larn9.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 1,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "13:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/富山県/石川県/福井県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/京都府/大阪府/兵庫県/奈良県/宮城県/山形県/福島県/茨城県/栃木県",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "もったいない本舗　お急ぎ便店",
          "shopCode": "mottainaihonpo",
          "genreId": "101934",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "【中古】 美容師試験問題と解説 / 受験研究会 / 新星出版社 [単行本]【メール便送料無料】【あす楽対応】",
          "catchcopy": "【メール便送料無料、通常24時間以内発送、午後1時までは当日発送】",
          "itemCode": "comicset:11020615",
          "itemPrice": 403,
          "itemCaption": "著者：受験研究会出版社：新星出版社サイズ：単行本ISBN-10：4405021104ISBN-13：9784405021105■通常24時間以内に発送可能です。午後1時までのご注文は通常当日出荷。■メール便は、1冊から送料無料です。※宅配便の場合、2,500円以上送料無料です。※あす楽ご希望の方は、宅配便をご選択下さい。※「代引き」ご希望の方は宅配便をご選択下さい。■ただいま、しおり、カレンダーをプレゼントしております。■お急ぎの方は「もったいない本舗　お急ぎ便店」をご利用ください。最短翌日配送、手数料188円から■中古品ではございますが、良好なコンディションです。決済は、クレジットカード、代引き等、各種決済方法がご利用可能です。■万が一品質に不備が有った場合は、返金対応。■クリーニング済み。■商品画像に「帯」が付いているものがありますが、中古品のため、実際の商品には付いていない場合がございます。■”s1、s2”などの番号は、弊社管理番号です。どちらでもご購入いただけます。■商品状態の表記につきまして・非常に良い：　　使用されてはいますが、　　非常にきれいな状態です。　　書き込みや線引きはありません。・良い：　　比較的綺麗な状態の商品です。　　ページやカバーに欠品はありません。　　文章を読むのに支障はありません。・可：　　文章が問題なく読める状態の商品です。　　マーカーやペンで書込があることがあります。　　商品の痛みがある場合があります。",
          "itemUrl": "https://item.rakuten.co.jp/comicset/4405021104/",
          "shopUrl": "https://www.rakuten.co.jp/comicset/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/comicset/cabinet/05114726/bkvnzadps26larn9.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/comicset/cabinet/05114726/bkvnzadps26larn9.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 1,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 1,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "13:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/富山県/石川県/福井県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/京都府/大阪府/兵庫県/奈良県/宮城県/山形県/福島県/茨城県/栃木県",
          "affiliateRate": 1.1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "もったいない本舗　楽天市場店",
          "shopCode": "comicset",
          "genreId": "101934",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "『中古』美容師 試験問題と解説 (国家・資格シリーズ 45)",
          "catchcopy": "「初版発行日」1994/12/22 「著者」内海 修也 (著) 「出版社」弘文社",
          "itemCode": "kyoudo2014:13023826",
          "itemPrice": 154208,
          "itemCaption": "内海 修也 (著)、1994-12-22、弘文社、180P 【ご注文をお考えのお客様へ】本文以外に目次などに捺印、記名などある場合があります。装丁、カバーは初版発行の商品と異なる場合があります。詳細について不明な点があればお気軽にお問い合わせ下さい。表記の発行年は初版発行年であり実際の商品は異なる場合があります。また、古書の為、経年並みの劣化（ヤケ、シミ、ハガシ跡、小ヤブレ等）はご了承下さいませ。その他、特に表記のない場合、カバー、箱等がついてない場合があります。倉庫より取り寄せし、商品の最終確認してからの配送となりますので、受注後商品の発送開始までに約5日程度かかる場合がございます。きちんと梱包して発送します。こちらの商品は他でも併売の為、品切れの際は速やかに返金します。又、領収書が必要な場合はお気軽にお申し付け下さい。一般のご注文以外に大学・公共機関のご注文も承ります。なお弊社の過失が明白である場合を除き、返品は基本的にお受けいたしかねます。万が一返品の場合は弊社規定によるものとさせていただきます。ご利用お待ちしております",
          "itemUrl": "https://item.rakuten.co.jp/kyoudo2014/81200054907/",
          "shopUrl": "https://www.rakuten.co.jp/kyoudo2014/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/kyoudo2014/cabinet/04012717/04036293/img67504721.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/kyoudo2014/cabinet/04012717/04036293/img67504721.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 1,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 0,
          "asurakuClosingTime": "",
          "asurakuArea": "",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "KSC",
          "shopCode": "kyoudo2014",
          "genreId": "203063",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "『中古』美容師 試験問題と解説 (国家・資格シリーズ 45)",
          "catchcopy": "「初版発行日」1994/12/22 「著者」内海 修也 (著) 「出版社」弘文社",
          "itemCode": "kyoudo2014:13448128",
          "itemPrice": 9989,
          "itemCaption": "「初版発行日」1994/12/22 「著者」内海 修也 (著) 「出版社」弘文社477031180X",
          "itemUrl": "https://item.rakuten.co.jp/kyoudo2014/86348328/",
          "shopUrl": "https://www.rakuten.co.jp/kyoudo2014/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/kyoudo2014/cabinet/04012717/04036293/img67504721.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/kyoudo2014/cabinet/04012717/04036293/img67504721.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 1,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 0,
          "asurakuClosingTime": "",
          "asurakuArea": "",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "KSC",
          "shopCode": "kyoudo2014",
          "genreId": "203063",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "【中古】 美容師試験 問題と解説 ／産業・労働(その他) 【中古】afb",
          "catchcopy": "",
          "itemCode": "bookoffonline:11995648",
          "itemPrice": 198,
          "itemCaption": "産業・労働(その他)販売会社/発売会社：新星出版社/ 発売年月日：1994/08/25JAN：9784405021105",
          "itemUrl": "https://item.rakuten.co.jp/bookoffonline/0015339333/",
          "shopUrl": "https://www.rakuten.co.jp/bookoffonline/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/1/r_noimg.gif?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/1/r_noimg.gif?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 1,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 1,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 0,
          "asurakuClosingTime": "",
          "asurakuArea": "",
          "affiliateRate": 1,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "ブックオフオンライン楽天市場店",
          "shopCode": "bookoffonline",
          "genreId": "208725",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "練習用カットウィッグ 3台セットカットウイッグ マネキンヘッド カットマネキン フェザー 高品質人毛100％ 実技試験 美容師",
          "catchcopy": "人毛100％でこの価格！美容師試験を受験する学生さん＆新人美容師さん応援キャンペーン",
          "itemCode": "syarepark:10000116",
          "itemPrice": 11480,
          "itemCaption": "【送料無料とさせていただきます】美容師試験を受験する学生さん！新人美容師さん！応援キャンペーン お求めになるなら今です！まとめ買いのチャンス！人毛高騰の為、人毛100％のカットウイッグがこの価格で手に入るのはラストチャンスです。クランプは付属しておりません。 *****************************************************************容器やパッケージデザインの一部が、 お客様への事前の告知なしに変更する場合があります。 中身・成分等の変更はありませんので、ご了承下さい。*****************************************************************",
          "itemUrl": "https://item.rakuten.co.jp/syarepark/cutwig-001/",
          "shopUrl": "https://www.rakuten.co.jp/syarepark/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/cutwig/imgrc0067423517.jpg?_ex=64x64"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185551.jpg?_ex=64x64"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185552.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/cutwig/imgrc0067423517.jpg?_ex=128x128"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185551.jpg?_ex=128x128"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185552.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "14:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/富山県/石川県/福井県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/京都府/大阪府/兵庫県/奈良県/和歌山県/宮城県/山形県/福島県/茨城県/栃木県",
          "affiliateRate": 2,
          "startTime": "",
          "endTime": "",
          "reviewCount": 3,
          "reviewAverage": 3.67,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "まつげエクステ専門店シャレパーク",
          "shopCode": "syarepark",
          "genreId": "200056",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "練習用カットウィッグ1台期間限定お試し価格カットウイッグ マネキンヘッド カットマネキン フェザー 高品質人毛100％ 実技試験 美容師",
          "catchcopy": "人毛100％でこの価格！美容師試験を受験する学生さん＆新人美容師さん応援キャンペーンまず使ってみて下さい！",
          "itemCode": "syarepark:10000595",
          "itemPrice": 3480,
          "itemCaption": "人毛100％・はえぎわ・耳もしっかりしています美容師試験を受験する学生さん！新人美容師さん！応援キャンペーン お求めになるなら今です！まとめ買いのチャンス！人毛高騰の為、人毛100％のカットウイッグがこの価格で手に入るのはラストチャンスです。クランプは付属しておりません。 *****************************************************************容器やパッケージデザインの一部が、 お客様への事前の告知なしに変更する場合があります。 中身・成分等の変更はありませんので、ご了承下さい。*****************************************************************",
          "itemUrl": "https://item.rakuten.co.jp/syarepark/cutwig-002/",
          "shopUrl": "https://www.rakuten.co.jp/syarepark/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185550.jpg?_ex=64x64"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185551.jpg?_ex=64x64"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185552.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185550.jpg?_ex=128x128"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185551.jpg?_ex=128x128"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185552.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 1,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "14:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/富山県/石川県/福井県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/京都府/大阪府/兵庫県/奈良県/和歌山県/宮城県/山形県/福島県/茨城県/栃木県",
          "affiliateRate": 2,
          "startTime": "",
          "endTime": "",
          "reviewCount": 5,
          "reviewAverage": 4.2,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "まつげエクステ専門店シャレパーク",
          "shopCode": "syarepark",
          "genreId": "204236",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "練習用カットウィッグ 6台セットカットウイッグ マネキンヘッド カットマネキン フェザー 高品質人毛100％ 実技試験 美容師",
          "catchcopy": "人毛100％でこの価格！美容師試験を受験する学生さん＆新人美容師さん応援キャンペーン",
          "itemCode": "syarepark:10000630",
          "itemPrice": 22680,
          "itemCaption": "【送料無料とさせていただきます】美容師試験を受験する学生さん！新人美容師さん！応援キャンペーン お求めになるなら今です！まとめ買いのチャンス！ 人毛高騰の為、人毛100％のカットウイッグがこの価格で手に入るのはラストチャンスです。クランプは付属しておりません。 *****************************************************************容器やパッケージデザインの一部が、 お客様への事前の告知なしに変更する場合があります。 中身・成分等の変更はありませんので、ご了承下さい。*****************************************************************",
          "itemUrl": "https://item.rakuten.co.jp/syarepark/cutwig-006/",
          "shopUrl": "https://www.rakuten.co.jp/syarepark/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/cutwig/imgrc0067423518.jpg?_ex=64x64"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185551.jpg?_ex=64x64"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185552.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/cutwig/imgrc0067423518.jpg?_ex=128x128"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185551.jpg?_ex=128x128"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185552.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "ワールドワイド",
          "asurakuFlag": 1,
          "asurakuClosingTime": "14:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/富山県/石川県/福井県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/京都府/大阪府/兵庫県/奈良県/和歌山県/宮城県/山形県/福島県/茨城県/栃木県",
          "affiliateRate": 2,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "まつげエクステ専門店シャレパーク",
          "shopCode": "syarepark",
          "genreId": "200056",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "練習用カットウィッグ 20台セットカットウイッグ マネキンヘッド カットマネキン フェザー 高品質人毛100％ 実技試験 美容師",
          "catchcopy": "人毛100％でこの価格！美容師試験を受験する学生さん＆新人美容師さん応援キャンペーン",
          "itemCode": "syarepark:10000631",
          "itemPrice": 75600,
          "itemCaption": "【送料無料とさせていただきます】美容師試験を受験する学生さん！新人美容師さん！応援キャンペーン お求めになるなら今です！まとめ買いのチャンス！人毛高騰の為、人毛100％のカットウイッグがこの価格で手に入るのはラストチャンスです。クランプは付属しておりません。 *****************************************************************容器やパッケージデザインの一部が、 お客様への事前の告知なしに変更する場合があります。 中身・成分等の変更はありませんので、ご了承下さい。*****************************************************************",
          "itemUrl": "https://item.rakuten.co.jp/syarepark/cutwig-020/",
          "shopUrl": "https://www.rakuten.co.jp/syarepark/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/cutwig/imgrc0067423519.jpg?_ex=64x64"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185551.jpg?_ex=64x64"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185552.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/cutwig/imgrc0067423519.jpg?_ex=128x128"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185551.jpg?_ex=128x128"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/syarepark/cabinet/wig/imgrc0067185552.jpg?_ex=128x128"
            }
          ],
          "affiliateUrl": "",
          "shopAffiliateUrl": "",
          "imageFlag": 1,
          "availability": 1,
          "taxFlag": 0,
          "postageFlag": 0,
          "creditCardFlag": 1,
          "shopOfTheYearFlag": 0,
          "shipOverseasFlag": 0,
          "shipOverseasArea": "",
          "asurakuFlag": 1,
          "asurakuClosingTime": "14:00",
          "asurakuArea": "群馬県/埼玉県/千葉県/東京都/神奈川県/新潟県/富山県/石川県/福井県/山梨県/長野県/岐阜県/静岡県/愛知県/三重県/滋賀県/京都府/大阪府/兵庫県/奈良県/和歌山県/宮城県/山形県/福島県/茨城県/栃木県",
          "affiliateRate": 2,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "まつげエクステ専門店シャレパーク",
          "shopCode": "syarepark",
          "genreId": "200056",
          "tagIds": []
        }
      }
    ],
    "GenreInformation": [],
    "TagInformation": []
  }
  it("JSONから配列へ：ノーマル", function(){
    assert.isArray(jsonToArray(bd));
  });
  it("JSONから配列へ：無入力", function(){
    assert.isArray(jsonToArray(notext));
  });
  it("JSONから配列へ：ヒット商品なし", function(){
    assert.isArray(jsonToArray(noresult));
  });
  it("JSONから配列へ：ヒット商品数が３０以下", function(){
    assert.isArray(jsonToArray(biyoushi));
  });
});


//-----------------------------------------------------------------------

/*
var analysisResult = JSON.parse(body);
var resultArray = [];
for(var i in analysisResult){
    resultArray.push(i+":"+analysisResult[i]);
}
var resultOutput = resultArray.join(" , ");
res.render("result",{result: resultOutput})
*/