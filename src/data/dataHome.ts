export enum ELoaiNC {
  Bac, Nam, Trung
}

// export const data = {
//   itemsHome: [
//     {
//       "id": 1,
//       "title": "Hiển",
//       "subtitle": "Vi-ô-lông thứ nhất",
//       "image": require('../../assets/img/Rectangle24.png'),
//       "type": ELoaiNC.Bac,
//       "description": "Day la noi dung cua Hien",
//       "interesting": 'Day la su thu vi cua Hien',
//       "bigImage": require('../../assets/img/image1.png'),
//       "idMusicYtb": 'mLI_QxszYrU',
//       "audioMusic": [
//         {
//           "id": 1,
//           'music': require("../../assets/music/Xungdoicuoithoi.mp3"),
//         },
//         {
//           "id": 2,
//           'music': require("../../assets/music/Song-Gio-Jack-K-ICM.mp3"),
//         },
//       ]
//     }, 
//     {
//       "id": 2,
//       "title": "Quân",
//       "subtitle": "Vi-ô-lông thứ hai",
//       "image": require('../../assets/img/Rectangle25.png'),
//       "type": ELoaiNC.Bac,
//       "description": "Day la noi dung cua Quan",
//       "interesting": 'Day la su thu vi cua Quan',
//       "bigImage": require('../../assets/img/image2.png'),
//       "idMusicYtb": 'mLI_QxszYrU',
//       "audioMusic": [
//         {
//           "id": 1,
//           'music': require("../../assets/music/Xungdoicuoithoi.mp3"),
//         },
//       ]
//     },
//     {
//       "id": 3,
//       "title": "Thức",
//       "subtitle": "Vi-ô-lông thứ ba",
//       "image": require('../../assets/img/Rectangle26.png'),
//       "type": ELoaiNC.Bac,
//       "description": "Day la noi dung cua Thuc",
//       "interesting": 'Day la su thu vi cua Thuc',
//       "bigImage": require('../../assets/img/image2.png'),
//       "idMusicYtb": 'mLI_QxszYrU',
//       "audioMusic": [
//         {
//           "id": 1,
//           'music': require("../../assets/music/Xungdoicuoithoi.mp3"),
//         },
//       ]
//     },
//     {
//       "id": 4,
//       "title": "Cuong",
//       "subtitle": "Vi-ô-lông thứ ba",
//       "image": require('../../assets/img/Rectangle26.png'),
//       "type": ELoaiNC.Bac,
//       "description": "Day la noi dung cua Cuong",
//       "interesting": 'Day la su thu vi cua Cuong',
//       "bigImage": require('../../assets/img/image2.png'),
//       "idMusicYtb": 'mLI_QxszYrU',
//       "audioMusic": [
//         {
//           "id": 1,
//           'music': require("../../assets/music/Xungdoicuoithoi.mp3"),
//         },
//       ]
//     },
//     {
//       "id": 5,
//       "title": "Long",
//       "subtitle": "Vi-ô-lông thứ I",
//       "image": require('../../assets/img/Rectangle24.png'),
//       "type": ELoaiNC.Nam,
//       "description": "Day la noi dung cua Long",
//       "interesting": 'Day la su thu vi cua Long',
//       "bigImage": require('../../assets/img/image2.png'),
//       "idMusicYtb": 'mLI_QxszYrU',
//       "audioMusic": [
//         {
//           "id": 1,
//           'music': require("../../assets/music/Song-Gio-Jack-K-ICM.mp3"),
//         },
//       ]
//     },
//     {
//       "id": 6,
//       "title": "Tuấn",
//       "subtitle": "Vi-ô-lông thứ II",
//       "image": require('../../assets/img/Rectangle25.png'),
//       "type": ELoaiNC.Nam,
//       "description": "Day la noi dung cua Tuan",
//       "interesting": 'Day la su thu vi cua Tuan',
//       "bigImage": require('../../assets/img/image2.png'),
//       "idMusicYtb": 'mLI_QxszYrU',
//       "audioMusic": [
//         {
//           "id": 1,
//           'music': require("../../assets/music/Xungdoicuoithoi.mp3"),
//         },
//       ]
//     },
//     {
//       "id": 7,
//       "title": "Hoàng",
//       "subtitle": "Vi-ô-lông thứ III",
//       "image": require('../../assets/img/Rectangle26.png'),
//       "type": ELoaiNC.Nam,
//       "description": "Day la noi dung cua Hoang",
//       "interesting": 'Day la su thu vi cua Hoang',
//       "bigImage": require('../../assets/img/image2.png'),
//       "idMusicYtb": 'mLI_QxszYrU',
//       "audioMusic": [
//         {
//           "id": 1,
//           'music': require("../../assets/music/Song-Gio-Jack-K-ICM.mp3"),
//         },
//       ]
//     },
//     {
//       "id": 8,
//       "title": "Hoàng",
//       "subtitle": "Vi-ô-lông thứ III",
//       "image": require('../../assets/img/Rectangle26.png'),
//       "type": ELoaiNC.Trung,
//       "description": "Day la noi dung cua Hoang",
//       "interesting": 'Day la su thu vi cua Hoang',
//       "bigImage": require('../../assets/img/image2.png'),
//       "idMusicYtb": 'mLI_QxszYrU',
//       "audioMusic": [
//         {
//           "id": 1,
//           'music': require("../../assets/music/Song-Gio-Jack-K-ICM.mp3"),
//         },
//       ]
//     },
//   ],
// }

export const data = {
  itemsHome: [
  //Miền Nam
    {
      
      "id": 1,
      "title": "Đàn nguyệt",
      "subtitle": "Nhạc cụ dây gẩy",
      "image": require('../../assets/img/Dannguyet.jpg'),
      "type": ELoaiNC.Nam,
      "description": 'Đàn Nguyệt, còn được gọi là đàn Kìm, đàn Vọng nguyệt cầm hoặc Quân tử cầm, là một nhạc cụ dây gảy của dân tộc Việt. Tên gọi Đàn Nguyệt xuất phát từ hình dạng của nó, với mặt đàn hình tròn giống như mặt trăng. Lịch sử và nguồn gốc: Đàn Nguyệt có nguồn gốc từ Trung Quốc và sau đó được du nhập vào Việt Nam. Theo sách xưa, đàn nguyên thủy có 4 dây (đàn nguyệt Trung Quốc), sau rút lại còn 2 dây. Cấu trúc và thiết kế: Đàn Nguyệt có hai dây, thuộc bộ dây chi gảy của dân tộc Việt. Mặt đàn và đáy đàn được làm từ gỗ nhẹ, xốp, có đường kính khoảng 30 cm. Thành đàn thấp khoảng 5 cm - 6 cm, có thể để trơn hay khảm trai. Hộp đàn kín hoàn toàn, không có lỗ thoát âm như đa số các loại đàn dây gảy khác. Âm thanh và phong cách chơi: Đàn Nguyệt với nhiều ngón kỹ thuật độc đáo như nhấn, luyến, vê… có nhiều khả năng độc tấu và hòa tấu. Màu âm của Đàn Nguyệt tươi sáng, rộn ràng, tình cảm, và rất đa dạng trong việc diễn tả các trạng thái cảm xúc âm nhạc. Vai trò và sự phát triển trong âm nhạc dân tộc: Đàn Nguyệt được sử dụng rộng rãi trong âm nhạc dân gian cũng như trong lễ nhạc cung đình. Nó giữ một vị trí rất quan trọng trong sinh hoạt âm nhạc của người Việt.',
      "interesting": ' Trước đây, dây của đàn Nguyệt được làm từ tơ tằm, nhưng ngày nay chúng thường được làm từ dây nylon hoặc dây thép',
      "bigImage": require('../../assets/img/Dannguyetbigimage.jpg'),
      "idMusicYtb": 'wpXmgdqgqWo',
      "audioMusic": [
      {
        "id": 1,
        'music': require("../../assets/music/Dannguyetaudio1.mp3"),
      },
      {
        "id": 2,
        'music': require("../../assets/music/Dannguyetaudio2.mp3"),
      },
      ]
    },

    {
      "id": 2,
      "title": "Đàn tranh",
      "subtitle": "Nhạc cụ truyền thống của người phương Đông",
      "image": require('../../assets/img/dantranh.png'),
      "type": ELoaiNC.Nam,
      "description": 'Đàn Tranh, còn được gọi là đàn Thập Lục hay đàn có trụ chắn, là một nhạc cụ dây gảy của Việt Nam. Đàn Tranh có 16 dây, do đó còn được gọi là Đàn Thập Lục. Lịch sử và nguồn gốc: Đàn Tranh có nguồn gốc từ đàn Gu Zheng (cổ tranh) cổ Trung Hoa và được du nhập vào Việt Nam khoảng thế kỷ XIII, đời nhà Trần. Cấu trúc và thiết kế: Đàn Tranh có một hộp âm dài từ 104 đến 120 cm. Mặt trên và mặt dưới của hộp âm thường được làm từ gỗ hông. Cầu đàn, ngựa đàn, trục đàn và hai chân nhỏ được làm từ gỗ cứng. Dây đàn được làm từ thép và có đường kính khác nhau, được điều chỉnh theo thang âm ngũ cung. Âm thanh và phong cách chơi: Âm sắc của Đàn Tranh trong trẻo, thanh thoát, có thể nhấn nhá rất mềm mại. Ngoài khả năng diễn tấu giai điệu, ngón chơi truyền thống của đàn Tranh là những quãng tám rải hoặc chập và ngón đặc trưng nhất là vuốt trên các dây là ngón á. Vai trò và sự phát triển trong âm nhạc dân tộc: Đàn Tranh được sử dụng rộng rãi trong nhiều thể loại âm nhạc như dàn nhạc Tài tử, Cải lương, dàn nhạc Chèo, dàn Nhã nhạc, dàn nhạc dân tộc tổng hợp…. Nó giữ một vị trí rất quan trọng trong sinh hoạt âm nhạc của người Việt.',
      "interesting": 'Đàn Tranh truyền thống có 16 dây, nhưng vào cuối những năm 1950, nhạc sĩ và nhà thiết kế nhạc cụ Nguyễn Vĩnh Bảo đã bắt đầu thiết kế và chế tạo các loại đàn có 17, 19 và 21 dây. Đến cuối những năm 1980, phiên bản 17 dây đã trở thành phiên bản tiêu chuẩn được sử dụng rộng rãi trên toàn Việt Nam. Các loại đàn lớn hơn với 22, 24 và 25 dây cũng đã được chế tạo trong những năm 1980 và 19901. Điều này cho thấy sự phát triển và thích ứng của nhạc cụ với thời gian và công nghệ.',
      "bigImage": require('../../assets/img/dantranhbigimage.jpg'),
      "idMusicYtb": 'qUfAdG1Z_bA',
      "audioMusic": [
        {
        "id": 1,
        'music': require("../../assets/music/Dantranh1.mp3"),
        },
        {
        "id": 2,
        'music': require("../../assets/music/Dantranh2.mp3"),
        },
      ]
    },

    {
      "id": 3,
      "title": "Đàn cò",
      "subtitle": "Nhạc cụ thuộc bộ dây",
      "image": require('../../assets/img/danco.jpg'),
      "type": ELoaiNC.Nam,
      "description": 'Đàn cò là một nhạc cụ dân tộc Việt Nam với hai dây. Nó có hình dáng giống một con cò, với phần trục dây chỉa xuống tựa giống mỏ con cò. Lịch sử và nguồn gốc: Đàn cò, còn được gọi là đàn nhị, là một trong những nhạc cụ có tuổi thọ lâu đời nhất trong âm nhạc dân gian truyền thống của Việt Nam. Cấu trúc và thiết kế: Đàn cò có hình dáng giống một con cò, với phần trục dây chỉa xuống tựa giống mỏ con cò. Hộp âm của nó thường được phủ ở một đầu bằng da rắn. Âm thanh và phong cách chơi: Đàn cò có thể hòa âm hiệu quả với các loại đàn khác mà không cần sự hỗ trợ của các nhạc cụ phương Tây và điện tử. Vai trò và sự phát triển trong âm nhạc dân tộc: Đàn cò đóng vai trò quan trọng trong dàn nhạc dân tộc Việt Nam từ trước đến nay. Nó được sử dụng trong các dàn nhạc phường bát âm, ngũ âm, nhã nhạc, chầu văn, sắc bùa, nhặc tài tử, cải lương, dàn nhạc dân tộc tổng hợp, dân ca.',
      "interesting": 'Người dân Nam Bộ gọi là “Đàn Cò” vì đàn có hình dáng giống như con cò, tiếng đàn nghe lảnh lót như tiếng cò.',
      "bigImage": require('../../assets/img/dancobigimage.jpg'),
      "idMusicYtb": 'zDP2KlhQg_s',
      "audioMusic": [
        {
        "id": 1,
        'music': require("../../assets/music/danco1.mp3"),
        },
        {
        "id": 2,
        'music': require("../../assets/music/danco2.mp3"),
        },
      ]
    },

    {
      "id": 4,
      "title": "Đàn sến",
      "subtitle": "Nhạc khí dây gẩy",
      "image": require('../../assets/img/dansen.jpg'),
      "type": ELoaiNC.Nam,
      "description": 'Đàn sến là một nhạc cụ dây gẩy của Việt Nam với hai dây và một cổ đàn mảnh mai có các phím nổi. Nó bắt nguồn từ Tần Cầm Trung Quốc và chủ yếu được sử dụng trong âm nhạc truyền thống của miền Nam Việt Nam. Lịch sử và nguồn gốc: Đàn sến xuất phát từ Tần cầm (秦琴, Bính âm: Qín qín), là một nhạc cụ dây gẩy có nguồn gốc từ Trung Quốc. Khi du nhập vào Việt Nam, đàn có tên gọi là đàn sến, thường dùng trong các dàn nhạc sân khấu tuồng, cải lương, đờn ca tài tử. Cấu trúc và thiết kế: Hộp đàn hình hoa mai sáu cánh hoặc hình lục giác, đường kính 28 cm. Mặt đàn và đáy đàn làm bằng gỗ nhẹ, xốp, để mộc. Thành đàn dày 6 cm, làm bằng gỗ cứng. Cần đàn dài 70 cm, trên mặt đàn có 17 phím bấm. Âm thanh và phong cách chơi: Tần cầm Trung Quốc vì dây bằng nilon bọc thép, nó được lên cách nhau một quãng 4 hoặc quãng 5: Do - Fa - Do1 hoặc Do - Sol - Do1. Trong khi đàn sến Việt Nam là dây nilon (cước) nên chỉ có 2 dây thì âm thanh sẽ là: Fa - Do1 hoặc Sol - Do1. Vai trò và sự phát triển trong âm nhạc dân tộc: Đàn sến chủ yếu được sử dụng trong âm nhạc truyền thống của miền Nam Việt Nam. Nó đã được bản địa hóa qua 7, 8 thế kỷ người Việt dùng và tạo cho nó phong cách đặc thù trong thủ pháp, ngón đàn, tay nhấn nhá, trong thang âm điệu thức.',
      "interesting": 'Đàn sến ra đời vào năm 223 Trước Công nguyên và không ai biết danh tính của người sáng chế. Do đàn có nguồn gốc từ thời nhà Tần nên mới có tên gọi là Tần cầm.',
      "bigImage": require('../../assets/img/dansenbigimage.jpg'),
      "idMusicYtb": 'ofC0iv_v6Fo',
      "audioMusic": [
        {
        "id": 1,
        'music': require("../../assets/music/dansen1.mp3"),
        },
      ]
    },

    {
      "id": 6,
      "title": "Đàn đá",
      "subtitle": "Nhạc cụ gõ",
      "image": require('../../assets/img/danda.jpg'),
      "type": ELoaiNC.Trung,
      "description": 'Đàn đá là một nhạc cụ gõ cổ nhất của Việt Nam và là một trong những loại nhạc cụ cổ sơ nhất của loài người. Lịch sử và nguồn gốc: Đàn đá được phát hiện lần đầu tiên vào năm 1949 tại Ndut Liêng Krak, Đắk Lắk, Tây Nguyên. Những thanh đá này sau đó được nghiên cứu bởi giáo sư âm nhạc André Schaeffner tại Paris. Đến nay, người ta đã tìm thấy khoảng 200 thanh đàn đá rải rác ở các tỉnh Đắk Lắk, Khánh Hòa, Đồng Nai, Ninh Thuận, Lâm Đồng, Sông Bé và Phú Yên. Cấu trúc và thiết kế: Đàn đá được làm từ các thanh đá với kích thước dài, ngắn, dày, mỏng khác nhau. Thanh đá dài, to, dày có âm vực trầm trong khi thanh đá ngắn, nhỏ, mỏng thì tiếng thanh. Âm thanh và phong cách chơi: Âm thanh của đàn đá rất đặc biệt. Ở âm vực cao, tiếng đàn đá thánh thót xa xăm. Ở âm vực trầm, đàn đá vang như tiếng dội của vách đá. Vai trò và sự phát triển trong âm nhạc dân tộc: Đàn đá đã được UNESCO xếp vào danh sách các nhạc cụ trong Không gian văn hóa Cồng Chiêng Tây Nguyên. Hiện nay, lạo đàn này còn xuất hiện chủ yếu ở vùng Tây Nguyên như một nhạc cụ không thể thiếu tại nơi đây.',
      "interesting": 'Các nhà khoa học cho biết những thanh đá để làm đàn này có tuổi đời khoảng 3.000 năm. Đặc biệt, có một bộ đàn đã được giữ qua 7 thế hệ bởi dòng họ Ksiêng (người Mạ) tại buôn Bù Đơ thuộc xã Lộc Bắc, huyện Bảo Lộc, tỉnh Lâm Đồng.',
      "bigImage": require('../../assets/img/dandabigimage.jpg'),
      "idMusicYtb": 'qmKfo4T0O_w',
      "audioMusic": [
        {
        "id": 1,
        'music': require("../../assets/music/danda1.mp3"),
        },
        {
        "id": 2,
        'music': require("../../assets/music/danda2.mp3"),
        },
      ]
    },

    {
      "id": 7,
      "title": "Cồng chiêng",
      "subtitle": "Nhạc cụ gõ",
      "image": require('../../assets/img/congchien.jpg'),
      "type": ELoaiNC.Trung,
      "description": 'Cồng chiêng là nhạc cụ Châu Á thuộc bộ gõ, được làm bằng đồng thau, hình tròn như chiếc nón quai thao, đường kính khoảng từ 20 cm đến 60 cm. Lịch sử và nguồn gốc: Cồng có thể có nguồn gốc từ khu Tây Vực (nay là Tân Cương) thuộc Trung Quốc vào thế kỷ thứ 6. Nhưng từ “cồng” xuất phát từ phiên âm tiếng Java tại tiểu quốc Java thuộc Indonesia ngày nay. Cấu trúc và thiết kế: Cồng chiêng làm bằng đồng thau hoặc hợp kim đồng thiếc, với tỉ lệ của các hợp kim rất khác nhau tùy theo nơi đúc. Hình tròn ở giữa hơi phồng lên, chung quanh có bờ gọi là thành. Có ba loại cồng: những chiếc cồng bị treo ít nhiều phẳng, các đĩa tròn bằng kim loại treo theo phương thẳng đứng bằng dây thừng đi qua những lỗ gần rìa đỉnh; chiêng hoặc núm cồng có một đỉnh trung tâm và thường bị treo và chơi theo chiều ngang; chiếc cồng có hình bát, và nghỉ ngơi trên đệm và thuộc về chuông hơn cồng chiêng. Âm thanh và phong cách chơi: Người ta dùng dùi gỗ có quấn vải mềm (hoặc dùng tay) để đánh cồng, chiêng. Công nhân tạo ra hai loại âm thanh riêng biệt. Một chiêng với một bề mặt phẳng rất rung động ở nhiều chế độ, tạo ra “sự sụp đổ” chứ không phải là một ghi chép được điều chỉnh. Vai trò và sự phát triển trong âm nhạc dân tộc Một đặc điểm khá nổi bật là cồng chiêng tại các nước này không còn được xem như là vật thông linh giữa con người và trời đất mà đã chính thức trở thành nhạc cụ dân gian hay cung đình.',
      "interesting": 'Cồng chiêng của người Khmer Campuchia chỉ có hai người diễn tấu với 2 dàn cồng, mỗi dàn gồm 16 chiếc cồng nhỏ xếp trên một giá sắt hình bán nguyệt. Riêng cồng chiêng Philippines,như Gangsa của các dân tộc Kalinga hay Igorot gồm 6 cồng phẳng, người đánh cồng di chuyển đôi chút và có những động tác gần như múa.',
      "bigImage": require('../../assets/img/congchienbigimage.jpg'),
      "idMusicYtb": 'woN7XQlKgak',
      "audioMusic": [
        {
        "id": 1,
        'music': require("../../assets/music/congchien1.mp3"),
        },
      ]
    },

    {
      "id": 8,
      "title": "Đàn T’rưng",
      "subtitle": "Nhạc cụ gõ",
      "image": require('../../assets/img/trung.png'),
      "type": ELoaiNC.Trung,
      "description": "T’Rưng là một loại đàn gỗ dùng trong âm nhạc dân tộc của người Gia-rai và Ba ở Tây Nguyên Việt Nam. Nó được làm từ các ống tre ngắn khác nhau về kích thước. Lịch sử và nguồn gốc: T’Rưng gắn liền với cuộc sống tinh thần của nhiều nhóm dân tộc thiểu số ở Tây Nguyên Việt Nam. Nó đã trở thành một biểu tượng cộng đồng và đặc trưng cho vùng Tây Nguyên của Việt Nam. Cấu trúc và thiết kế: Đàn T'rưng làm bằng một số ống tre lồ ô hay nứa ngộ có kích cỡ khác nhau. Đàn t'rưng chuyên nghiệp có khoảng 12 đến 16 ống xếp thành hàng trên giá đàn theo thứ tự đi dần lên từ ống lớn đến ống nhỏ, từ ống dài đến ống ngắn (loại đàn t'rưng dân gian chỉ có 5 ống với cách xếp ngược lại, ống trên cao lớn rồi đi dần xuống là những ống nhỏ hơn). Nhìn chung, ống có đường kính từ 3 đến 4 cm, dài từ 40 đến 70 cm. Mỗi đầu ống đều bịt kín do còn nguyên các đầu mấu, đầu kia được gọt vát một phần ống để tạo âm theo chuỗi hàng âm của người dân tộc. Âm thanh và phong cách chơi: Âm thanh của T’Rưng rất sống động và đẹp. Nó thường được sử dụng trong các buổi lễ hội, đặc biệt là trong các bộ lạc Tây Nguyên. Vai trò và sự phát triển trong âm nhạc dân tộc: T’Rưng thường được chơi trong các buổi tụ tập buổi tối tại nhà chung xung quanh đống lửa với các chàng trai và cô gái trẻ hát và nhảy múa vui vẻ. Âm thanh của cồng và T’Rưng cũng hòa quyện vào nhau tại các bữa tiệc cưới và lễ hội làng.",
      "interesting": 'Theo thời gian, đàn T’Rưng đã được cải tiến rất nhiều. Nhiều ống hơn đã được thêm vào, và đôi khi có đến 48 ống được sắp xếp trong ba hàng có khả năng biểu diễn các phần phức tạp của âm nhạc hiện đại trong khi vẫn giữ được âm điệu truyền thống',
      "bigImage": require('../../assets/img/trungbigimage.png'),
      "idMusicYtb": 'Mq4aHAhLytI',
      "audioMusic": [
        {
        "id": 1,
        'music': require("../../assets/music/trung1.mp3"),
        },
        {
        "id": 2,
        'music': require("../../assets/music/trung2.mp3"),
        },
      ]
    },

    {
      "id": 9,
      "title": "Khèn",
      "subtitle": "Nhạc khí của người Mông",
      "image": require('../../assets/img/khen.jpg'),
      "type": ELoaiNC.Bac,
      "description": "Khèn là một nhạc cụ dân tộc đặc trưng của Việt Nam, đặc biệt là trong văn hóa của người Mông. Lịch sử và nguồn gốc: Trong truyền thuyết của người Mông, khèn được tạo ra từ một gia đình có 6 người con, ai cũng hát hay, sáo giỏi.\nKhi họ đều có gia đình, những lúc không hợp đủ cả 6 người, tiếng sáo trở nên rời rạc, lạc điệu. Họ đã bàn nhau chế tác ra thứ nhạc cụ hợp nhất nhiều thứ. Người anh cả nghĩ ra cái bầu, anh thứ hai nghĩ ra ống thổi dài, 4 người còn lại nghĩ ra những ống thổi tiếp theo. Tất cả là 6 ống, thay cho 6 anh em. Cấu trúc và thiết kế: Khèn có cấu trúc khá phức tạp gồm nhiều ống trúc xếp cạnh nhau. Một đầu cắm xuyên qua bầu gỗ hình bắp chuối làm hộp cộng hưởng. Khèn bè thường có cấu tạo ống theo số chẵn. Tùy theo dân tộc mà nó có 6, 8, 10, 12 hoặc 14 ống nứa tép. Âm thanh và phong cách chơi: Tiếng khèn khi ngân lên, kèm theo các vũ điệu thể hiện được sự tinh tế, khéo léo của người con trai Mông. Thông qua tiếng khèn, qua từng động tác, người biểu diễn để lại những ấn tượng khó quên đến với người nghe và người xem. Vai trò và sự phát triển trong âm nhạc dân tộc: Khèn có mặt hầu hết trong mọi mặt đời sống sinh hoạt, văn hóa và tâm linh của người Mông. Người Mường thổi khèn đệm cho những điệu hát, người H’Mông dùng tiếng khèn để giao duyên trai gái.",
      "interesting": 'Khèn không chỉ là một nhạc cụ để gửi gắm, thổ lộ tâm tình; tiếng khèn được xem như sợi dây kết nối giữa cõi trần và thế giới tâm linh. Đối với người Mông, tiếng khèn luôn được mở đầu cho tất cả. Tiếng khèn còn thay lời của những người đang sống để nói chuyện với người dưới cõi âm.',
      "bigImage": require('../../assets/img/khenbigimage.jpg'),
      "idMusicYtb": 'LzO7umOBTCk',
      "audioMusic": [
        {
        "id": 1,
        'music': require("../../assets/music/khen1.mp3"),
        },
      ]
    },

    {
      "id": 10,
      "title": "Đàn đáy",
      "subtitle": "Nhạc cụ cổ truyền có 3 dây",
      "image": require('../../assets/img/danday.jpg'),
      "type": ELoaiNC.Bac,
      "description": "Đàn đáy, còn gọi là Vô đề cầm, là một loại nhạc cụ dân tộc cổ truyền của người Việt. Nó có 3 dây, phần cán rất dài và mặt sau của thùng âm có một lỗ lớn. Lịch sử và nguồn gốc: Không rõ đàn đáy xuất hiện lần đầu vào thời điểm nào nhưng nó đã có mặt ít nhất 500 năm. Theo phó giáo sư tiến sĩ Thụy Loan, thì các mảng điêu khắc ở đình Lỗ Hạnh, đình Hoàng Xá và đền Tam Lang (niên đại thế kỷ 16-18) cho ta biết đàn đáy đã xuất hiện phổ biến trong dân gian từ thời nhà Mạc. Cấu trúc và thiết kế: Đàn đáy có 4 bộ phận chính: Bầu đàn, còn gọi là thùng đàn: bằng gỗ, hình thang cân. Cần đàn: dài 1,10-1,30 m gắn phía trên từ 10 đến 12 phím đàn bằng tre nhưng đàn đáy cổ có 16 phím. Đầu đàn: hình lá đề, hốc luồn dây có 3 trục chỉnh dây. Dây đàn: 3 dây bằng tơ se. Âm thanh và phong cách chơi: Âm thanh của đàn đáy mang chút buồn man mác. Đàn đáy có âm vực rộng hơn 2 quãng tám, âm sắc giống đàn tranh geomungo của Triều Tiên, ấm áp dịu ngọt và có thể diễn tả tình cảm sâu sắc. Vai trò và sự phát triển trong âm nhạc dân tộc: Đàn đáy được sử dụng chủ yếu tại miền Bắc Việt Nam và là một trong những nhạc cụ đi kèm được sử dụng trong ca trù.",
      "interesting": 'Đàn đáy có tên gốc là “đàn không đáy” tức “vô đề cầm”, vì nó không có đáy (hậu đàn). Người ta gọi tắt là đàn đáy lâu ngày thành tên chính thức như hiện nay.',
      "bigImage": require('../../assets/img/dandaybigimage.jpg'),
      "idMusicYtb": 'fVWIOTQL9bk',
      "audioMusic": [
        {
        "id": 1,
        'music': require("../../assets/music/danday1.mp3"),
        },
      ]
    },

    {
      "id": 11,
      "title": "Đàn tính",
      "subtitle": "Nhạc cụ dây của người Tày",
      "image": require('../../assets/img/dantinh.png'),
      "type": ELoaiNC.Bac,
      "description": "Đàn tính, còn được gọi là tính tẩu, là một loại nhạc cụ dây có xuất xứ từ Trung Quốc. Ở Việt Nam, đàn tính được sử dụng bởi người Tày ở tỉnh Lạng Sơn. Lịch sử và nguồn gốc: Đàn tính xuất phát từ thiên cầm của người Choang ở Trung Quốc. Ban đầu, nó được sử dụng bởi các phù thủy để chữa trị tai họa và bệnh tật. Sau này, hoạt động hát múa cũng như phép thuật này đã phát triển thành một hoạt động giải trí hàng loạt, nhưng vẫn được gọi là hát, chơi và nhảy. Cấu trúc và thiết kế: Đàn tính có từ hai đến bốn dây trong từ hai đến bốn khóa. Dây đàn được làm từ tơ tằm, nylon hoặc dây sắt. Đàn tính truyền thống có chiều dài khoảng 120 cm. Cần đàn dọc giống như cây gậy được làm từ gỗ, được chạm khắc với các họa tiết rồng. Âm thanh và phong cách chơi: Đàn tính được sử dụng bởi các thầy cúng trong các buổi gọi hồn với hy vọng rằng đàn được thần linh điều khiển. Vai trò và sự phát triển trong âm nhạc dân tộc: Năm 2007, Bộ Văn hóa, Thể thao và Du lịch Việt Nam đã lên một kế hoạch để quảng bá nhạc cụ này, cũng như phong cách hát “Then” thường đi kèm với đàn tính. Một hội thảo đã khuyến nghị việc chuyển các bài hát truyền thống thành bản ghi và thực hiện các bản ghi âm, và yêu cầu các trường nghệ thuật địa phương cung cấp thêm hướng dẫn về loại hình âm nhạc này.",
      "interesting": 'Hát Then và đàn Tính bắt nguồn từ cuộc sống lao động của người Tày cổ. Theo quan niệm dân gian, Then có nghĩa là Thiên, Thiên tức là “trời”, được coi là điệu hát của thần tiên truyền lại.',
      "bigImage": require('../../assets/img/dantinhbigimage.jpg'),
      "idMusicYtb": 'r62P1avqfGo',
      "audioMusic": [
        {
        "id": 1,
        'music': require("../../assets/music/dantinh1.mp3"),
        },
        {
        "id": 2,
        'music': require("../../assets/music/dantinh2.mp3"),
        },
      ]
    },
    ]
}