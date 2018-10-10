var chai = require("chai");
var assert = chai.assert;






var jsonToArray = function(bd){
  
  var body = JSON.stringify(bd)
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
    "count": 7006,
    "page": 1,
    "first": 1,
    "last": 30,
    "hits": 30,
    "carrier": 0,
    "pageCount": 100,
    "Items": [
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
          "itemName": "看護・医療系大学〈国公立 西日本〉 2019 (No.169) （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168239",
          "itemPrice": 2808,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社発行年月：2018年10月 予約締切日：2018年06月04日 ISBN：9784325225393 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15514062/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5393/9784325225393.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5393/9784325225393.jpg?_ex=128x128"
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
          "itemName": "宮崎大学（教育学部・医学部〈看護学科〉・工学部・農学部・地域資源創成学部）（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168258",
          "itemPrice": 2376,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社ミヤザキ ダイガク キョウイクガクブ イガクブ カンゴガッカ コウガク 発行年月：2018年09月 予約締切日：2018年06月04日 サイズ：全集・双書 ISBN：9784325225317 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15514081/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5317/9784325225317.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5317/9784325225317.jpg?_ex=128x128"
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
          "itemName": "上智大学 総合人間科学部〈社会学科〉 法学部〈法律学科・地球環境法学科〉 経済学部〈経営学科〉 外国語学部〈英語学科・フランス語学科・イスパニア語学科・ロシア語学科〉 2019年版 (大学入試シリーズ)[本/雑誌] / 教学社",
          "catchcopy": "【送料無料選択可】",
          "itemCode": "neowing-r:12609757",
          "itemPrice": 2592,
          "itemCaption": "★書籍商品の購入に関するご注意コチラ↓より、初回盤・特典の詳細、在庫情報・出荷状況をご確認ください。＜内容＞※こちらの商品は出版社からのお取り寄せになる場合がございます。商品によりましては、お届けまでに時間がかかる場合やお届けできない場合もございます。＜商品詳細＞商品番号：NEOBK-2254473Kyogaku Sha / Jochidaigaku Sogo Ningen Kagaku Bu ＜Shakai Gakka＞ Hogakubu ＜Horitsu Gakka Chikyu Kankyo Hogaku Ka＞ Keizaigakubu ＜Keiei Gakka＞ Gaikoku Go Gakubu ＜Eigo Gakka Furansugo Gakka Isu Pa Nia Go Gakka Russia Gogaku Ka＞ 2019 Nemban (Daigaku Nyushi Series)メディア：本/雑誌発売日：2018/07JAN：9784325226260上智大学 総合人間科学部〈社会学科〉 法学部〈法律学科・地球環境法学科〉 経済学部〈経営学科〉 外国語学部〈英語学科・フランス語学科・イスパニア語学科・ロシア語学科〉 2019年版 (大学入試シリーズ)[本/雑誌] / 教学社2018/07発売",
          "itemUrl": "https://item.rakuten.co.jp/neowing-r/neobk-2254473/",
          "shopUrl": "https://www.rakuten.co.jp/neowing-r/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/neowing-r/cabinet/item_img_1227/neobk-2254473.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/neowing-r/cabinet/item_img_1227/neobk-2254473.jpg?_ex=128x128"
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
          "shopName": "CD＆DVD NEOWING",
          "shopCode": "neowing-r",
          "genreId": "208919",
          "tagIds": []
        }
      },
      {
        "Item": {
          "itemName": "東北医科薬科大学（医学部・薬学部）（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168259",
          "itemPrice": 3672,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社トウホク イカ ヤッカ ダイガク イガクブ ヤクガクブ 発行年月：2018年09月 予約締切日：2018年06月04日 サイズ：全集・双書 ISBN：9784325225560 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15514082/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5560/9784325225560.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5560/9784325225560.jpg?_ex=128x128"
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
          "itemName": "目白大学・目白大学短期大学部（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168245",
          "itemPrice": 2138,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社メジロ ダイガク メジロ ダイガク タンキ ダイガクブ 発行年月：2018年08月 予約締切日：2018年06月04日 サイズ：全集・双書 ISBN：9784325227588 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15514068/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7588/9784325227588.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7588/9784325227588.jpg?_ex=128x128"
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
          "itemName": "貴重赤色本革　羊皮★赤色 羊革50cmロンググローブ●本革手袋:貴重の赤本革【smtb-k】【kb】サイズ　S〜XXL　までご用意　限定数量",
          "catchcopy": "★貴重の赤本革となります！！",
          "itemCode": "auc-masayaa:10000458",
          "itemPrice": 5162,
          "itemCaption": "商品説明 素材 羊革 サイズ ■サイズ用意：レディースサイズS〜XXL ■中指先端から長さ：約50cm ■ご希望のサイズをお選び下さいませ。 特徴 ★★柔らかい羊革で製造しております、多少ゆったりめとなります。（個人差はあります）★貴重の赤色本革となります！！ 注意 ★画面上と実物では多少色具合が異なって見える場合もございますのでご了承ください。★寸法の若干の誤差はご容赦願います。★素材の特性上、多少色の濃淡及び色落ちが生じることがあります。（注意！！）在庫品のため多少革のよれ、しわ等がある場合がございます、また少々汚れがあるかもしれませんがご了承の上お買い求め下さいませ。売り切り商品 ★こちらはメール便（保障がありませんご了承下さい不安の方は注2を）にての配達となります（時間、日にち指定は出来ません）★注）お届け先の表札が宛名と異なる場合は返送されますのでご注意願います、返送されてきた場合は別途料金が発生致しますのでご了承下さいませ。★注2）（お急ぎの方、商品不着、保障なしが不安という方は配送方法選択で（手袋のみ宅配便500）を選択下さいませ。500円にて宅配便配送させて頂きます（沖縄、離島、北海道以外）。★注3）こちらと他商品（ブーツ、ウィッグなど）の同梱包の場合、（手袋の同梱包は送料無料です）送料無料（メール便）となりませんのでご了承下さいませ。",
          "itemUrl": "https://item.rakuten.co.jp/auc-masayaa/74666888/",
          "shopUrl": "https://www.rakuten.co.jp/auc-masayaa/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/auc-masayaa/cabinet/imgrc0063982584.jpg?_ex=64x64"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/auc-masayaa/cabinet/imgrc0063982585.jpg?_ex=64x64"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/auc-masayaa/cabinet/imgrc0063982588.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/auc-masayaa/cabinet/imgrc0063982584.jpg?_ex=128x128"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/auc-masayaa/cabinet/imgrc0063982585.jpg?_ex=128x128"
            },
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/auc-masayaa/cabinet/imgrc0063982588.jpg?_ex=128x128"
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
          "affiliateRate": 5,
          "startTime": "",
          "endTime": "",
          "reviewCount": 0,
          "reviewAverage": 0,
          "pointRate": 1,
          "pointRateStartTime": "",
          "pointRateEndTime": "",
          "giftFlag": 0,
          "shopName": "マサヤージャパン",
          "shopCode": "auc-masayaa",
          "genreId": "403755",
          "tagIds": [
            1003799
          ]
        }
      },
      {
        "Item": {
          "itemName": "大分大学（教育学部・経済学部・医学部〈看護学科〉・理工学部・福祉健康科学部）（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168402",
          "itemPrice": 2138,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社オオイタ ダイガク キョウイクガクブ ケイザイガクブ イガクブ カンゴ 発行年月：2018年09月 予約締切日：2018年06月04日 サイズ：全集・双書 ISBN：9784325225294 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15514225/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5294/9784325225294.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5294/9784325225294.jpg?_ex=128x128"
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
          "itemName": "埼玉大学（文系） 2019 (No.37) （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168163",
          "itemPrice": 2138,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社発行年月：2018年10月 予約締切日：2018年06月04日 ISBN：9784325224099 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15513986/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/4099/9784325224099.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/4099/9784325224099.jpg?_ex=128x128"
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
          "itemName": "日本大学（生産工学部・工学部） 2019 (No.375) （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168218",
          "itemPrice": 2138,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社発行年月：2018年10月 予約締切日：2018年06月04日 ISBN：9784325227205 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15514041/",
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
          "itemName": "日本女子大学（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168142",
          "itemPrice": 2484,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社ニホン ジョシ ダイガク 発行年月：2018年07月 予約締切日：2018年06月04日 サイズ：全集・双書 ISBN：9784325227298 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15513965/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7298/9784325227298.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7298/9784325227298.jpg?_ex=128x128"
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
          "itemName": "センター試験過去問研究化学（2018年版） （センター赤本シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:18565138",
          "itemPrice": 950,
          "itemCaption": "センター赤本シリーズ 教学社 世界思想社BKSCPN_【bookーfestivalーthr】 センター シケン カコモン ケンキュウ カガク 発行年月：2017年04月 サイズ：全集・双書 ISBN：9784325217602 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/14894675/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7602/9784325217602.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7602/9784325217602.jpg?_ex=128x128"
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
          "reviewCount": 4,
          "reviewAverage": 4.75,
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
          "itemName": "【中古】 法政大学(2018年版) 情報科学部・デザイン工学部・理工学部・生命科学部−A方式 大学入試シリーズ388／教学社編集部(編者) 【中古】afb",
          "catchcopy": "",
          "itemCode": "bookoffonline:15070508",
          "itemPrice": 548,
          "itemCaption": "教学社編集部(編者)販売会社/発売会社：教学社/ 発売年月日：2017/07/30JAN：9784325221227",
          "itemUrl": "https://item.rakuten.co.jp/bookoffonline/0018908454/",
          "shopUrl": "https://www.rakuten.co.jp/bookoffonline/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/2323/0018908454l.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/bookoffonline/cabinet/2323/0018908454l.jpg?_ex=128x128"
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
          "itemName": "佐賀大学（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168283",
          "itemPrice": 2268,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社サガ ダイガク 発行年月：2018年10月 予約締切日：2018年06月04日 サイズ：全集・双書 ISBN：9784325225225 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15514106/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5225/9784325225225.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5225/9784325225225.jpg?_ex=128x128"
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
          "itemName": "九州歯科大学 2019 (No.150) （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168350",
          "itemPrice": 3024,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社発行年月：2018年10月 予約締切日：2018年06月04日 ISBN：9784325225201 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15514173/",
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
          "itemName": "茨城大学（理系） 2019 (No.28) （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168252",
          "itemPrice": 2138,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社発行年月：2018年10月 予約締切日：2018年06月04日 ISBN：9784325224006 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15514075/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/4006/9784325224006.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/4006/9784325224006.jpg?_ex=128x128"
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
          "itemName": "立教大学（全学部日程）（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168064",
          "itemPrice": 2268,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社リッキョウ ダイガク ゼンガクブ ニッテイ 発行年月：2018年06月 予約締切日：2018年06月04日 サイズ：全集・双書 ISBN：9784325227649 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15513887/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7649/9784325227649.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7649/9784325227649.jpg?_ex=128x128"
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
          "itemName": "芝浦工業大学（前期日程、英語資格・検定試験利用方式）（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168048",
          "itemPrice": 2138,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社シバウラ コウギョウ ダイガク ゼンキ ニッテイ エイゴ シカク ケンテイ シ 発行年月：2018年10月 予約締切日：2018年06月04日 サイズ：全集・双書 ISBN：9784325226178 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15513851/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/6178/9784325226178.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/6178/9784325226178.jpg?_ex=128x128"
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
          "itemName": "福岡大学（人文学部・法学部・経済学部・商学部・理学部・工学部・医学部〈看護学科〉（2019） （大学入試シリーズ）",
          "catchcopy": "【楽天ブックスならいつでも送料無料】",
          "itemCode": "book:19168067",
          "itemPrice": 2376,
          "itemCaption": "大学入試シリーズ 教学社 世界思想社フクオカ ダイガク ジンブンガクブ ホウガクブ ケイザイガクブ ショ 発行年月：2018年10月 予約締切日：2018年06月04日 サイズ：全集・双書 ISBN：9784325229070 本 語学・学習参考書 学習参考書・問題集 高校・大学受験",
          "itemUrl": "https://item.rakuten.co.jp/book/15513890/",
          "shopUrl": "https://www.rakuten.co.jp/book/",
          "smallImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9070/9784325229070.jpg?_ex=64x64"
            }
          ],
          "mediumImageUrls": [
            {
              "imageUrl": "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9070/9784325229070.jpg?_ex=128x128"
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