const WEEKS = [
  { n: 1, title: "Tai và miệng", aim: "Đọc được pinyin và không trộn bốn thanh. Tuần này chưa nhồi chữ." },
  { n: 2, title: "Câu đầu tiên", aim: "Chào, xin lỗi, nói tên, nói mình là người Việt Nam." },
  { n: 3, title: "Một ngày", aim: "Gia đình, thứ, giờ, ăn uống, hỏi đường." },
  { n: 4, title: "Việc thật", aim: "Hỏi giá, gọi món, nói việc đã làm, nhận mặt 15 chữ." }
];

const SOURCES = [
  ["Khoai Tây yêu tiếng Trung", "Phát âm và ngữ pháp sơ cấp, cô người Việt", "https://www.youtube.com/@KhoaiTayyeutiengTrung"],
  ["Thành Luân", "Pinyin và giáo trình, thầy người Việt", "https://www.youtube.com/watch?v=Kns4tHYy_2Q"],
  ["Mini88", "Lớp HSK 3.0, thầy Vũ Đức Hiếu", "https://www.youtube.com/watch?v=fC-p-9nWTWo"],
  ["Tiếng Trung Hoa Thư", "15 bài HSK 1 mới, giảng tiếng Việt", "https://www.youtube.com/playlist?list=PLvZSm_gd_2xuqMVqHOcgn2iDxHguHdGcA"],
  ["Trung tâm SOFL", "Ngữ pháp sơ cấp, tiếng Việt", "https://www.youtube.com/playlist?list=PLbIrEl7MFPM2Xd_Cdv6kDbJ97E2QMoyoI"],
  ["Tiếng Trung 247", "Bài đọc cấp cao, tiếng Việt", "https://www.youtube.com/watch?v=KfUhOx_-ROI"]
];

const LESSONS = [
  {
    id: 1, week: 1, title: "Bốn thanh, bốn nghĩa", mark: "mā",
    promise: "Nghe và nói được mā má mǎ mà, và biết vì sao không được gắn thanh Trung vào thanh Việt.",
    plan: [
      { m: "11 phút", tier: 30, t: "Xem video bốn thanh của cô Khoai Tây. Dừng sau mỗi thanh, nói lại 5 lần." },
      { m: "7 phút", tier: 30, t: "Đọc bảng so sánh. Không học mẹo 'thanh này = thanh Việt'." },
      { m: "8 phút", tier: 30, t: "Bốn chữ 妈 麻 马 骂. Nhìn miệng trong video, không nhìn giọng máy." },
      { m: "7 phút", tier: 30, t: "Làm quiz. Sai câu nào, nói lại câu đó." },
      { m: "8 phút", tier: 45, t: "Đoạn thanh điệu của thầy Thành Luân. Nhái, đừng dịch." },
    ],
    videos: [
      { id: "wtDtix05YmI", title: "Bốn thanh", channel: "Khoai Tây yêu tiếng Trung", min: 11, tier: 30, note: "Cô người Việt. Dừng sau mỗi thanh và nói lại. Đừng gắn thanh Trung vào thanh Việt." },
      { id: "EpSs4cdSML0", title: "Đoạn thanh điệu", channel: "Thành Luân", min: 8, tier: 45, start: 2154, end: 2635, note: "Thầy người Việt. Video dài. Chỉ xem đoạn thanh điệu, khoảng phút 36 đến phút 44, rồi dừng." }
    ],
    blocks: [
      {
        h: "Việc duy nhất của buổi này",
        tier: 30,
        lines: [
          "Chữ Trung là hình. Pinyin là cách ghi âm bằng chữ Latin. Tuần này bạn học âm, chưa học viết.",
          "Cùng một âm **ma**, bốn thanh là bốn từ. Sai thanh là sai nghĩa, không phải sai 'chút xíu'."
        ]
      },
      {
        h: "Đừng dịch thanh Việt sang thanh Trung",
        tier: 30,
        table: {
          head: ["Thanh", "Hình", "Người Việt hay làm", "Cách giữ"],
          rows: [
            ["1 mā", "Cao, phẳng, giữ nguyên", "Hạ giọng như thanh ngang", "Kéo dài ở vùng cao, như đang giữ nốt"],
            ["2 má", "Từ giữa kéo lên", "Bật ngắn như thanh sắc", "Đi lên chậm hơn, dài hơn"],
            ["3 mǎ", "Hạ xuống, rồi mới nhấc", "Đọc thành thanh hỏi, gãy và ngắn", "Khi đứng một mình mới nhấc. Trong câu, thường chỉ hạ"],
            ["4 mà", "Từ cao rơi dốc", "Đọc thành thanh huyền, thấp và kéo", "Rơi nhanh. Đừng nằm lì ở dưới"],
            ["Nhẹ", "Ngắn, bám vào tiếng trước", "Gán cho nó một thanh đầy đủ", "mama: tiếng sau nhỏ và ngắn"]
          ]
        }
      },
      {
        h: "Cách nhái",
        tier: 30,
        lines: [
          "Nghe một âm trong video. Bấm tạm dừng. Nói năm lần. Thu bằng điện thoại, nghe lại cạnh video.",
          "Giọng máy trên trang này chỉ để ôn chữ ở các buổi sau. Buổi này lấy tai từ miệng cô trong video."
        ]
      }
    ],
    vocab: [
      { z: "妈", p: "mā", vi: "mẹ", tier: 30, note: "Thanh 1. Cũng là tiếng sau trong 妈妈, tiếng sau đọc nhẹ." },
      { z: "麻", p: "má", vi: "tê; gai", tier: 30, note: "Thanh 2. Học để tách thanh, chưa cần dùng trong câu." },
      { z: "马", p: "mǎ", vi: "ngựa", tier: 30, note: "Thanh 3 trọn vì đứng một mình." },
      { z: "骂", p: "mà", vi: "mắng", tier: 30, note: "Thanh 4." }
    ],
    lines: [
      { z: "妈", p: "mā", vi: "mẹ", tier: 30 },
      { z: "麻", p: "má", vi: "tê", tier: 30 },
      { z: "马", p: "mǎ", vi: "ngựa", tier: 30 },
      { z: "骂", p: "mà", vi: "mắng", tier: 30 },
      { z: "妈妈", p: "māma", vi: "mẹ. Tiếng sau nhẹ.", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "mā và mà khác nhau chỗ nào?", choices: ["Chỉ khác cách viết, nghĩa như nhau", "Khác thanh nên khác nghĩa", "Chỉ khác tốc độ nói", "Một bên là tiếng Quảng Đông"], answer: 1, why: "Bốn thanh của ma là bốn từ: mẹ, tê, ngựa, mắng." },
      { tier: 30, prompt: "Thanh 3 khi đứng một mình thì sao?", choices: ["Cao và phẳng", "Rơi dốc từ đầu", "Hạ xuống rồi mới nhấc lên", "Không có cao độ"], answer: 2, why: "Đó là hình hạ-rồi-nhấc. Trong câu, trước thanh khác, thường chỉ hạ." },
      { tier: 30, prompt: "Người Việt dễ gán thanh 4 vào thanh nào?", choices: ["Thanh sắc", "Thanh hỏi", "Thanh huyền", "Thanh ngã"], answer: 2, why: "Thanh huyền thấp và dài. Thanh 4 bắt đầu cao rồi rơi dốc." },
      { tier: 30, prompt: "妈妈 đọc thế nào?", choices: ["Hai tiếng đều thanh 1, dài bằng nhau", "Tiếng đầu thanh 1, tiếng sau nhẹ và ngắn", "Hai tiếng đều thanh 4", "Tiếng đầu thanh 3"], answer: 1, why: "māma. Tiếng sau là thanh nhẹ, không phải thêm một thanh đầy đủ." },
      { tier: 45, speak: "马", prompt: "Nghe rồi chọn nghĩa.", choices: ["mẹ", "ngựa", "mắng", "tê"], answer: 1, why: "马 mǎ là ngựa, thanh 3." },
      { tier: 45, prompt: "Tuần này việc đúng là gì?", choices: ["Viết 50 chữ mỗi ngày", "Khóa tai và miệng với pinyin", "Học thuộc 150 từ HSK 1", "Bỏ thanh, chỉ cần người nghe đoán"], answer: 1, why: "Một tháng 30–60 phút không đủ để vừa phát âm vừa nhồi hết HSK 1. Âm đi trước." }
    ]
  },
  {
    id: 2, week: 1, title: "Thanh nhẹ và cặp thanh", mark: "nǐ hǎo",
    promise: "Nói được 你好 đúng biến thanh, và biết thanh 3 trong câu thường không nhấc lên.",
    plan: [
      { m: "8 phút", tier: 30, t: "Xem video thanh nhẹ và biến thanh." },
      { m: "8 phút", tier: 30, t: "Nói 你好, 很好, 可以. Mỗi cụm 8 lần." },
      { m: "7 phút", tier: 30, t: "Đọc luật thanh 3 ngắn. Nói 你是, 我是." },
      { m: "7 phút", tier: 30, t: "Quiz." },
      { m: "8 phút", tier: 45, t: "Nghe lại đoạn biến thanh. Nói 你好, 很好, 可以, mỗi cụm 8 lần." },
      { m: "8 phút", tier: 60, t: "Thu bốn cặp māma, nǐ hǎo, nǐ shì, wǒ shì. Nghe lại cạnh video." }
    ],
    videos: [
      { id: "wtDtix05YmI", title: "Biến thanh, 一 và 不", channel: "Khoai Tây yêu tiếng Trung", min: 3, tier: 30, start: 500, end: 685, note: "Cùng video buổi 1. Tua tới phút 8, phần biến thanh. Cô người Việt." }
    ],
    blocks: [
      {
        h: "Hai luật dùng mỗi ngày",
        tier: 30,
        lines: [
          "**Ba cộng ba.** Hai thanh 3 đứng cạnh nhau: tiếng đầu đọc thành thanh 2. 你好 nǐ hǎo nghe thành ní hǎo. 很好 thành hén hǎo. 可以 thành ké yǐ.",
          "**Thanh 3 ngắn.** Thanh 3 đứng trước thanh 1, 2 hoặc 4 thì chỉ hạ, không nhấc. 你是: nǐ hạ xuống rồi sang shì. Nhấc lên nghe sẽ bị diễn.",
          "Thanh nhẹ không có hình riêng. Nó ngắn, thấp hơn một chút so với tiếng trước. Gặp trong 吗, 的, 了 và tiếng sau của 妈妈."
        ]
      },
      {
        h: "Luyện cặp, đừng luyện thanh rời mãi",
        tier: 30,
        lines: [
          "Trong câu, thanh sống theo cặp. Tối nay chỉ cần bốn cặp: māma, nǐ hǎo, nǐ shì, wǒ shì.",
          "Bốn cặp này là cụm đóng. Nhái cả cục. Phụ âm bên trong học ở buổi 5 và buổi 6, chưa tách từng chữ cái hôm nay.",
          "Nếu video cô giáo nói nhanh, hạ tốc độ YouTube xuống 0,75. Vẫn phải tự nói, không chỉ nghe."
        ]
      }
    ],
    vocab: [
      { z: "你好", p: "nǐ hǎo", vi: "xin chào", tier: 30, note: "Hai thanh 3. Đọc gần như ní hǎo." },
      { z: "很好", p: "hěn hǎo", vi: "rất tốt; cũng là cách nối 'tốt'", tier: 30, note: "Cũng là 3+3, đọc hén hǎo." },
      { z: "可以", p: "kěyǐ", vi: "được", tier: 30, note: "3+3, đọc ké yǐ. Buổi 26 mới dùng trong câu quyền." },
      { z: "是", p: "shì", vi: "là", tier: 30, note: "Thanh 4. 你是 = thanh 3 ngắn + thanh 4." },
      { z: "我", p: "wǒ", vi: "tôi", tier: 30, note: "Thanh 3. Trước 是 thì chỉ hạ." }
    ],
    lines: [
      { z: "你好。", p: "nǐ hǎo.", vi: "Xin chào. Đọc ní hǎo.", tier: 30 },
      { z: "很好。", p: "hěn hǎo.", vi: "Tốt. Đọc hén hǎo.", tier: 30 },
      { z: "可以。", p: "kěyǐ.", vi: "Được. Đọc ké yǐ.", tier: 30 },
      { z: "我是。", p: "wǒ shì.", vi: "Tôi là. Thanh 3 chỉ hạ.", tier: 30 },
      { z: "你是。", p: "nǐ shì.", vi: "Bạn là.", tier: 45 },
      { z: "妈妈。", p: "māma.", vi: "Mẹ. Tiếng sau nhẹ.", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "你好 đọc sát thực tế nhất là cách nào?", choices: ["nǐ rồi hǎo, cả hai đều nhấc lên rõ", "ní hǎo", "nī hāo", "nì hào"], answer: 1, why: "Luật 3+3: tiếng đầu lên thanh 2, tiếng sau giữ thanh 3." },
      { tier: 30, prompt: "你是, thanh của 你 trong câu này?", choices: ["Nhấc lên trọn như khi đứng một mình", "Chỉ hạ xuống, không nhấc", "Thành thanh 4", "Thành thanh nhẹ"], answer: 1, why: "Trước thanh khác, thanh 3 thường chỉ hạ. Đó là thanh 3 ngắn." },
      { tier: 30, prompt: "可以 thuộc luật nào?", choices: ["Thanh nhẹ", "3+3 nên tiếng đầu thành thanh 2", "不 đổi thanh", "Một đổi thanh"], answer: 1, why: "kě và yǐ đều thanh 3. Đọc ké yǐ." },
      { tier: 30, prompt: "妈妈, tiếng nào nhẹ?", choices: ["Tiếng đầu", "Tiếng sau", "Cả hai", "Không tiếng nào"], answer: 1, why: "mā giữ thanh 1, ma phía sau ngắn và nhẹ." },
      { tier: 45, prompt: "很好 và 你好 giống nhau chỗ nào?", choices: ["Cùng nghĩa", "Cùng là cặp 3+3", "Cùng là thanh 4", "Không có biến thanh"], answer: 1, why: "Khác nghĩa, cùng luật đọc: tiếng đầu thành thanh 2." },
      { tier: 45, prompt: "Thanh nhẹ giống âm nào dưới đây?", choices: ["Một thanh 4 rất mạnh", "Một tiếng ngắn bám vào tiếng trước", "Luôn cao và phẳng", "Luôn là thanh 2"], answer: 1, why: "Không gán cho nó hình thanh đầy đủ." }
    ]
  },
  {
    id: 3, week: 1, title: "Vần a, e, i", mark: "a e i",
    promise: "Tách được a, e, i. Không đọc e thành e tiếng Việt, không đọc i thành i sau phụ âm cuộn.",
    plan: [
      { m: "10 phút", tier: 30, t: "Xem video vần a và vần e. Dừng, nhái từng âm." },
      { m: "8 phút", tier: 30, t: "Đọc ba lỗi miệng bên dưới. Nói lại a, e, i." },
      { m: "6 phút", tier: 30, t: "Bốn từ giữ lại. Nói kèm thanh." },
      { m: "6 phút", tier: 30, t: "Quiz." },
      { m: "11 phút", tier: 45, t: "Đoạn vần của thầy Thành Luân, khoảng phút 13 đến phút 25. Nhái a, e, i." },
      { m: "5 phút", tier: 60, t: "Thu a, e, i, mỗi âm 5 lần. Nghe lại cạnh video cô Khoai Tây." }
    ],
    videos: [
      { id: "WMhUK8apn6E", title: "Vần a, o, e, i", channel: "Khoai Tây yêu tiếng Trung", min: 10, tier: 30, start: 57, end: 656, note: "Cô người Việt. Đoạn từ vần a tới trước vần u." },
      { id: "EpSs4cdSML0", title: "Vần, thầy đọc chậm", channel: "Thành Luân", min: 11, tier: 45, start: 808, end: 1489, note: "Thầy người Việt. Chỉ đoạn vận mẫu, khoảng phút 13 đến phút 25, rồi dừng." }
    ],
    blocks: [
      {
        h: "Ba miệng",
        tier: 30,
        lines: [
          "**a** mở miệng như đang khám họng. To hơn a tiếng Việt một chút.",
          "**e** không phải e trong 'em', cũng không phải ơ. Lưỡi hơi lùi, miệng nửa mở, gần âm giữa. Nghe video rồi nhái, đừng đọc theo chữ.",
          "**i** là i căng, môi cười nhẹ. Luật quan trọng để buổi 6: sau z, c, s, zh, ch, sh, r, chữ i trên mặt giấy không còn là i này. Tối nay chỉ lấy i sau b, p, m, d, t, n, l, j, q, x."
        ]
      },
      {
        h: "Vần ghép hay gặp",
        tier: 30,
        lines: [
          "ai như 'ai' nhưng a mở hơn. ei gần 'ây' ngắn. ao là a rồi khép thành o, không phải 'ao' tiếng Việt tròn sẵn.",
          "Chưa cần thuộc hết. Chọn đúng miệng trước, từ vựng để tuần sau."
        ]
      }
    ],
    vocab: [
      { z: "八", p: "bā", vi: "tám", tier: 30, note: "a mở, thanh 1." },
      { z: "茶", p: "chá", vi: "trà", tier: 30, note: "a mở, thanh 2. Tuần 3 sẽ dùng khi gọi nước." },
      { z: "吃", p: "chī", vi: "ăn", tier: 45, note: "i sau ch không phải i cười. Nghe trong video vần. Giữ từ này cho buổi ăn." },
      { z: "米", p: "mǐ", vi: "gạo", tier: 30, note: "i đúng, thanh 3." }
    ],
    lines: [
      { z: "八", p: "bā", vi: "tám", tier: 30 },
      { z: "茶", p: "chá", vi: "trà", tier: 30 },
      { z: "米", p: "mǐ", vi: "gạo", tier: 30 },
      { z: "啊", p: "ā", vi: "à, âm cảm thán, miệng a", tier: 30 },
      { z: "吃", p: "chī", vi: "ăn", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "a trong bā phải thế nào?", choices: ["Khép môi tròn", "Mở miệng lớn", "Đọc như e trong 'em'", "Đọc như ư"], answer: 1, why: "a mở. Nếu khép môi, âm thành o hoặc u." },
      { tier: 30, prompt: "e trong pinyin nên học bằng cách nào?", choices: ["Đọc e như trong 'em'", "Đọc ơ của tiếng Việt là xong", "Nhái video, vì không trùng một nguyên âm Việt", "Bỏ qua, ít dùng"], answer: 2, why: "e tiếng Trung là âm giữa, không phải e và cũng không hẳn ơ." },
      { tier: 30, prompt: "米 là thanh mấy?", choices: ["1", "2", "3", "4"], answer: 2, why: "mǐ, thanh 3." },
      { tier: 30, prompt: "i sau ch, như trong 吃, tối nay xử lý sao?", choices: ["Đọc i cười như 米", "Biết là một i khác, nghe kỹ ở buổi 6", "Đọc thành ư", "Không tồn tại"], answer: 1, why: "Sau zh ch sh r z c s, chữ i trên giấy không phải nguyên âm i. Buổi 6 mới tách." },
      { tier: 45, prompt: "茶 đọc là?", choices: ["chā", "chá", "chǎ", "chà"], answer: 1, why: "chá, thanh 2." },
      { tier: 45, prompt: "ai và ao khác nhau chủ yếu ở?", choices: ["Thanh điệu", "Độ mở cuối vần: i đóng trước, o đóng tròn hơn", "Hơi bật", "Thanh nhẹ"], answer: 1, why: "Hai vần khác miệng. Nghe lại đoạn finals nhóm a nếu còn lẫn." }
    ]
  },
  {
    id: 4, week: 1, title: "Vần o, u và ü", mark: "ü",
    promise: "Tách u và ü. Đọc được qù là 'qu' chu môi, không phải 'cu'.",
    plan: [
      { m: "8 phút", tier: 30, t: "Xem đoạn u và đoạn ü. Cả hai đều bắt buộc." },
      { m: "8 phút", tier: 30, t: "Tập ü: nói i, giữ lưỡi, chu môi. Làm 2 phút." },
      { m: "6 phút", tier: 30, t: "Nói 女, 去, 月. Mỗi từ 8 lần." },
      { m: "6 phút", tier: 30, t: "Quiz." },
      { m: "9 phút", tier: 45, t: "Nói lại 女, 去, 月. Thu âm và nghe xem ü đã chu môi chưa." }
    ],
    videos: [
      { id: "WMhUK8apn6E", title: "Vần o", channel: "Khoai Tây yêu tiếng Trung", min: 3, tier: 30, start: 262, end: 422, note: "Cô người Việt. Đoạn vần o." },
      { id: "WMhUK8apn6E", title: "Vần u và ü", channel: "Khoai Tây yêu tiếng Trung", min: 5, tier: 30, start: 656, end: 940, note: "Cùng video. Đoạn u rồi ü. Sau j, q, x, y, chữ u trên giấy đọc là ü." }
    ],
    blocks: [
      {
        h: "ü là âm mới, u thì không",
        tier: 30,
        lines: [
          "**u** chu môi, giống u tiếng Việt vừa phải. **ü** giữ lưỡi của i, chỉ chu môi thêm. Nếu lưỡi lùi theo môi, bạn đang nói u.",
          "Cách thử: kéo dài i. Giữ lưỡi dính vị trí đó. Từ từ chu môi. Âm đổi thành ü mà lưỡi không được thụt.",
          "Trên mặt giấy, sau j, q, x, y người ta viết u nhưng đọc ü. **去 qù không đọc 'cu'.** 月 yuè không đọc 'duệ'."
        ]
      },
      {
        h: "Luật viết cho đỡ hoảng",
        tier: 30,
        lines: [
          "Có dấu ü khi đứng sau n hoặc l: nǚ, lǜ. Vì nu và nü là hai âm khác nhau.",
          "Sau j q x y thì bỏ hai chấm, vì các âm này không đi với u thật. Thấy ju, qu, xu, yu là đọc ü."
        ]
      }
    ],
    vocab: [
      { z: "女", p: "nǚ", vi: "nữ; con gái", tier: 30, note: "ü có dấu vì sau n. Hán Việt: nữ." },
      { z: "去", p: "qù", vi: "đi", tier: 30, note: "Viết u, đọc ü. Thanh 4." },
      { z: "月", p: "yuè", vi: "tháng; mặt trăng", tier: 30, note: "yuè, üe. Hán Việt: nguyệt." },
      { z: "路", p: "lù", vi: "đường", tier: 45, note: "u thật, để đặt cạnh 绿 lǜ. Hán Việt: lộ." },
      { z: "绿", p: "lǜ", vi: "xanh lá", tier: 45, note: "ü, thanh 4." }
    ],
    lines: [
      { z: "女", p: "nǚ", vi: "nữ", tier: 30 },
      { z: "去", p: "qù", vi: "đi", tier: 30 },
      { z: "月", p: "yuè", vi: "tháng / mặt trăng", tier: 30 },
      { z: "五", p: "wǔ", vi: "năm. u thật, thanh 3.", tier: 30 },
      { z: "路", p: "lù", vi: "đường, u thật", tier: 45 },
      { z: "绿", p: "lǜ", vi: "xanh lá, ü", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "ü khác u ở đâu?", choices: ["ü môi không tròn, u môi tròn", "ü lưỡi như i và môi tròn; u lưỡi lùi và môi tròn", "Chỉ khác thanh điệu", "ü là thanh nhẹ của u"], answer: 1, why: "Giữ lưỡi của i, chu môi. Lùi lưỡi là thành u." },
      { tier: 30, prompt: "去 viết qù. Đọc thế nào?", choices: ["cu, thanh 4", "qu với ü, thanh 4", "ku, thanh 1", "xu, thanh 2"], answer: 1, why: "Sau q, chữ u là ü. Không đọc 'cu' của tiếng Việt." },
      { tier: 30, prompt: "Vì sao nǚ giữ hai chấm, còn qù không?", choices: ["Vì qù là thanh 4", "Vì sau n, ü và u đều có thể có; sau q thì u luôn là ü", "Vì người Trung bỏ dấu khi viết tay", "Hai từ cùng âm"], answer: 1, why: "n + u và n + ü là hai âm. j q x y không đi với u thật nên bỏ chấm cho gọn." },
      { tier: 30, prompt: "月 đọc là?", choices: ["yuē", "yué", "yuě", "yuè"], answer: 3, why: "yuè, thanh 4." },
      { tier: 45, prompt: "路 và 绿 khác âm nào?", choices: ["lù và lǜ, u với ü", "Chỉ khác thanh", "Cùng ü", "Một bên là r"], answer: 0, why: "路 lù là u. 绿 lǜ là ü. Cùng thanh 4." },
      { tier: 45, prompt: "五 là môi nào?", choices: ["ü", "u", "i", "e"], answer: 1, why: "wǔ là u, thanh 3." }
    ]
  },
  {
    id: 5, week: 1, title: "Hơi bật: b p m f d t n l g k h", mark: "b / p",
    promise: "Phân biệt được phụ âm không bật hơi và có bật hơi. Tay trước miệng phải cảm nhận được.",
    plan: [
      { m: "7 phút", tier: 30, t: "Xem video phát âm tổng. Nhìn hơi và môi, bỏ qua từ khó." },
      { m: "10 phút", tier: 30, t: "Luyện trên bảng âm của trang. Mỗi cặp b/p, d/t, g/k: 6 lần, tay trước miệng." },
      { m: "7 phút", tier: 30, t: "Đọc đoạn 'b tiếng Trung không phải b tiếng Việt'." },
      { m: "6 phút", tier: 30, t: "Quiz." },
      { m: "9 phút", tier: 45, t: "Đoạn phụ âm của thầy Thành Luân, khoảng phút 4 đến phút 13. Chỉ lấy b/p, d/t, g/k." },
      { m: "8 phút", tier: 60, t: "Thu ba cặp bā/pà, duō/tuō, gē/kē. Hơi phải ra ở cột có bật." }
    ],
    videos: [
      { id: "MB-cIJBxAtE", title: "Thanh mẫu", channel: "Khoai Tây yêu tiếng Trung", min: 17, tier: 30, note: "Cô người Việt. Tối nay ưu tiên b/p, d/t, g/k. Hết 17 phút thì dừng." },
      { id: "EpSs4cdSML0", title: "Phụ âm b đến h", channel: "Thành Luân", min: 9, tier: 45, start: 240, end: 808, note: "Thầy người Việt. Đoạn thanh mẫu đầu, khoảng phút 4 đến phút 13." }
    ],
    blocks: [
      {
        h: "b tiếng Trung không kêu như b tiếng Việt",
        tier: 30,
        lines: [
          "b, d, g tiếng Trung là âm không rung thanh quản, và không bật hơi. p, t, k bật hơi mạnh.",
          "Gần nhất với người Việt: **đ gần d**, **t gần t**. Còn b thì đừng rung cổ họng. Nó gần một chữ p không thổi.",
          "Cách thử cổ điển vẫn đúng: cầm tờ giấy mỏng trước miệng. Nói ba và pa. pa phải làm giấy động. ba thì không."
        ]
      },
      {
        h: "Ba cặp tối nay",
        tier: 30,
        table: {
          head: ["Không bật", "Có bật", "Việc của miệng"],
          rows: [
            ["bā 八 tám", "pà 怕 sợ", "p thổi. b không thổi, không rung cổ"],
            ["duō 多 nhiều", "tuō 拖 kéo", "d như đ. t bật hơi như t"],
            ["gē 哥 anh", "kē 科 khoa", "g không thổi. k thổi, giống k/c hơi mạnh"]
          ]
        }
      },
      {
        h: "m f n l h thì đỡ hơn",
        tier: 30,
        lines: [
          "m, n, l gần tiếng Việt. f hơi răng trên và môi dưới, như f, không phải ph của một số vùng.",
          "h là hơi từ họng, giống h. Đừng biến thành kh.",
          "w và y chưa phải họ khó. w như u có hơi, gặp trong 我. y như i có hơi, gặp trong 一.",
          "Các từ 怕, 多, 拖, 科 chỉ để tách âm. Thuộc thì tốt, quên thì chưa sao. 八 và 哥 sẽ gặp lại."
        ]
      }
    ],
    vocab: [
      { z: "八", p: "bā", vi: "tám", tier: 30 },
      { z: "怕", p: "pà", vi: "sợ", tier: 45, note: "Cặp với b. p bật hơi, thanh 4." },
      { z: "多", p: "duō", vi: "nhiều", tier: 30, note: "d không bật hơi. Hán Việt: đa." },
      { z: "哥", p: "gē", vi: "anh trai", tier: 30, note: "Sẽ vào bài gia đình. g không bật hơi." },
      { z: "科", p: "kē", vi: "khoa, môn", tier: 45, note: "k bật hơi. Hán Việt: khoa." }
    ],
    lines: [
      { z: "八", p: "bā", vi: "tám, không bật hơi", tier: 30 },
      { z: "怕", p: "pà", vi: "sợ, có bật hơi", tier: 30 },
      { z: "多", p: "duō", vi: "nhiều", tier: 30 },
      { z: "哥", p: "gē", vi: "anh", tier: 30 },
      { z: "拖", p: "tuō", vi: "kéo, t bật hơi", tier: 45 },
      { z: "科", p: "kē", vi: "khoa", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "Giấy trước miệng động mạnh khi nói âm nào?", choices: ["b", "p", "m", "n"], answer: 1, why: "p bật hơi. b không." },
      { tier: 30, prompt: "d tiếng Trung gần âm Việt nào hơn?", choices: ["t bật hơi", "đ", "gi", "x"], answer: 1, why: "d không bật hơi, gần đ. t mới là âm bật hơi." },
      { tier: 30, prompt: "Vì sao không nên đọc b như b tiếng Việt?", choices: ["Vì b Trung thường không rung thanh quản", "Vì b Trung là thanh 3", "Vì b Trung đọc như v", "Vì b chỉ đứng cuối từ"], answer: 0, why: "b Trung là p không thổi, không phải b rung cổ." },
      { tier: 30, prompt: "哥 và 科 khác nhau trước hết ở?", choices: ["Vần", "Hơi bật của g và k", "Thanh điệu", "ü và u"], answer: 1, why: "Cùng gē/kē thanh 1. k có luồng hơi, g không." },
      { tier: 45, prompt: "多 đọc là?", choices: ["dō", "duō", "duó", "dù"], answer: 1, why: "duō, thanh 1, vần uo." },
      { tier: 45, prompt: "h trong hệ này là?", choices: ["Kh từ họng, có tắc", "Hơi h, không biến thành kh", "Giống f", "Giống s"], answer: 1, why: "h là hơi. khật thành tắc là sang k." }
    ]
  },
  {
    id: 6, week: 1, title: "Ba họ khó: zh ch sh, z c s, j q x", mark: "zh / j / z",
    promise: "Tách ba chỗ lưỡi. Không đọc zh thành tr, không rung r, không đọc qu thành cu.",
    plan: [
      { m: "8 phút", tier: 30, t: "Xem đoạn ba họ phụ âm của thầy Thành Luân. Dừng sau mỗi phụ âm." },
      { m: "8 phút", tier: 30, t: "Đọc bảng ba cột. Nói zhī zī jī, mỗi âm 5 lần." },
      { m: "5 phút", tier: 30, t: "Riêng r: không rung lưỡi, không đọc zên." },
      { m: "5 phút", tier: 30, t: "Quiz." },
      { m: "5 phút", tier: 45, t: "Video thầy Hiếu, nghe tách z, c, s. Làm theo đáp án trong video." },
      { m: "8 phút", tier: 60, t: "Nói zhī, zī, jī, mỗi âm 5 lần. Sai họ nào thì tua lại đúng đoạn của thầy Thành Luân." }
    ],
    videos: [
      { id: "Kns4tHYy_2Q", title: "j q x, zh ch sh r, z c s", channel: "Thành Luân", min: 8, tier: 30, start: 549, end: 1045, note: "Thầy người Việt. Đoạn ba họ khó, khoảng phút 9 đến phút 17, rồi dừng." },
      { id: "qhBLmGltpkI", title: "Nghe phân biệt z c s", channel: "Mini88", min: 2, tier: 45, note: "Thầy Hiếu. Nghe và nhắc lại. Có đáp án trong video." }
    ],
    blocks: [
      {
        h: "Ba chỗ lưỡi",
        tier: 30,
        table: {
          head: ["Họ", "Lưỡi", "Cảm giác với người Việt", "Đừng"],
          rows: [
            ["z c s", "Đầu lưỡi sát răng cửa", "z như 'dz', c như 'ts' có hơi, s như s", "Đừng đọc z thành d hay gi"],
            ["zh ch sh r", "Lưỡi cuộn, thân lưỡi lên", "Không có sẵn trong tiếng Việt", "Đừng đọc zh thành tr, sh thành s, r thành r rung"],
            ["j q x", "Mặt lưỡi sát lợi, môi hơi cười, có màu ü", "j gần 'ch' nhưng lưỡi ở trước; q là j có hơi; x gần s mỏng", "Đừng đọc qu, xu thành cu, su"]
          ]
        }
      },
      {
        h: "r và chữ i giả",
        tier: 30,
        lines: [
          "r trong 人 không rung. Cũng không phải z của giọng Bắc. Lưỡi cuộn như zh, cho khí đi qua, thành một r mềm.",
          "Trong zhi, chi, shi, ri, zi, ci, si, chữ i không phải nguyên âm i. Nó chỉ là chỗ tựa của phụ âm. Đừng thêm một chữ i cười phía sau."
        ]
      }
    ],
    vocab: [
      { z: "是", p: "shì", vi: "là", tier: 30, note: "sh cuộn lưỡi. Đã gặp ở buổi 2." },
      { z: "吃", p: "chī", vi: "ăn", tier: 30, note: "ch cuộn, có hơi. i ở đây không phải i cười." },
      { z: "人", p: "rén", vi: "người", tier: 30, note: "r không rung. Hán Việt: nhân." },
      { z: "三", p: "sān", vi: "ba", tier: 30, note: "s đầu lưỡi. Hán Việt: tam." },
      { z: "七", p: "qī", vi: "bảy", tier: 30, note: "q có hơi, phía sau là i. Hán Việt: thất." },
      { z: "西", p: "xī", vi: "tây", tier: 45, note: "x mỏng. Hán Việt: tây." },
      { z: "字", p: "zì", vi: "chữ", tier: 45, note: "z đầu răng, thanh 4." }
    ],
    lines: [
      { z: "是", p: "shì", vi: "là", tier: 30 },
      { z: "吃", p: "chī", vi: "ăn", tier: 30 },
      { z: "人", p: "rén", vi: "người", tier: 30 },
      { z: "三", p: "sān", vi: "ba", tier: 30 },
      { z: "七", p: "qī", vi: "bảy", tier: 45 },
      { z: "去", p: "qù", vi: "đi, ü", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "zh và z khác nhau trước hết ở?", choices: ["Thanh điệu", "Chỗ lưỡi: zh cuộn, z ở răng cửa", "ü và u", "Hơi bật của p"], answer: 1, why: "Cùng một họ tắc-xát, khác vị trí lưỡi." },
      { tier: 30, prompt: "人, lỗi cần tránh là?", choices: ["Rung lưỡi như r, hoặc đọc thành zên", "Mở miệng quá to", "Đọc thanh 1", "Thêm ü"], answer: 0, why: "rén: r mềm, lưỡi cuộn, không rung, không thành z." },
      { tier: 30, prompt: "Trong 吃, chữ i nghĩa là?", choices: ["Nguyên âm i cười rõ", "Chỗ tựa của phụ âm ch, không thêm i", "ü", "e"], answer: 1, why: "i sau zh ch sh r z c s không phải nguyên âm i của 米." },
      { tier: 30, prompt: "q trong 七 là họ nào?", choices: ["z c s", "zh ch sh", "j q x", "b p m"], answer: 2, why: "qī: mặt lưỡi phía trước, có hơi, nguyên âm i." },
      { tier: 45, prompt: "去 và 吃 khác họ phụ âm nào?", choices: ["q và ch", "Cùng ch", "Cùng x", "z và s"], answer: 0, why: "去 là q + ü. 吃 là ch cuộn lưỡi." },
      { tier: 45, prompt: "x gần cảm giác nào hơn?", choices: ["Một s mỏng, lưỡi ở trước", "Một sh cuộn", "Một kh", "Một m"], answer: 0, why: "x là sát mỏng. sh mới cuộn lưỡi." }
    ]
  },
  {
    id: 7, week: 1, title: "Ôn tai", mark: "听",
    promise: "Tự biết âm nào đã chắc và âm nào phải mang sang tuần sau. Chưa thêm từ mới.",
    plan: [
      { m: "8 phút", tier: 30, t: "Xem lại video bốn thanh. Chỉ nói thanh còn sai." },
      { m: "10 phút", tier: 30, t: "Đọc lại bốn luật ở bảng âm: thanh 3, ü, hơi bật, ba họ lưỡi." },
      { m: "6 phút", tier: 30, t: "Tự kiểm phía dưới. Cái nào không, ghi vào ô yếu." },
      { m: "6 phút", tier: 30, t: "Quiz tuần. Sai thì quay lại đúng buổi, đừng học thêm từ." },
      { m: "16 phút", tier: 45, t: "Video ôn vần. Dừng ở vần còn dính, rồi thoát." },
      { m: "17 phút", tier: 60, t: "Video ôn phụ âm. Chỉ phụ âm còn sai, rồi thoát." }
    ],
    videos: [
      { id: "wtDtix05YmI", title: "Ôn bốn thanh", channel: "Khoai Tây yêu tiếng Trung", min: 11, tier: 30, note: "Nếu buổi 1 đã xem, chỉ nói lại thanh còn sai." },
      { id: "WMhUK8apn6E", title: "Ôn vần", channel: "Khoai Tây yêu tiếng Trung", min: 16, tier: 45, note: "Ôn vần còn dính. Hết video thì dừng." },
      { id: "MB-cIJBxAtE", title: "Ôn phụ âm", channel: "Khoai Tây yêu tiếng Trung", min: 17, tier: 60, note: "Chỉ mở khi còn một giờ. Ôn phụ âm còn sai rồi thoát." }
    ],
    blocks: [
      {
        h: "Chuẩn để sang tuần 2",
        tier: 30,
        lines: [
          "Bạn không cần phát âm đẹp. Bạn cần người nghe khỏi phải đoán giữa các cặp sau: bốn thanh của ma, ní hǎo, ü trong 去, p có hơi, r không rung, zh khác z khác j.",
          "Nếu hai mục trở lên trong phần tự kiểm còn không, tối mai chưa học chào hỏi. Làm lại buổi của mục đó. Một tuần âm vững đáng hơn một tháng từ phát âm sai.",
          "Ô yếu nằm ở cuối buổi. Viết bằng tiếng Việt cũng được, ví dụ 'r vẫn rung', 'thanh 3 vẫn thành thanh hỏi'."
        ]
      }
    ],
    vocab: [],
    lines: [
      { z: "妈", p: "mā", vi: "thanh 1", tier: 30 },
      { z: "麻", p: "má", vi: "thanh 2", tier: 30 },
      { z: "马", p: "mǎ", vi: "thanh 3", tier: 30 },
      { z: "骂", p: "mà", vi: "thanh 4", tier: 30 },
      { z: "你好", p: "nǐ hǎo", vi: "ní hǎo", tier: 45 },
      { z: "去", p: "qù", vi: "ü, không phải cu", tier: 45 },
      { z: "人", p: "rén", vi: "r không rung", tier: 45 },
      { z: "是", p: "shì", vi: "sh cuộn", tier: 45 }
    ],
    oral: [
      "Tôi nói được bốn thanh của ma mà không nhìn bảng.",
      "你好 tôi đọc thành ní hǎo, không nhấc cả hai tiếng.",
      "去 tôi chu môi kiểu ü, không đọc cu.",
      "p làm giấy động, b thì không.",
      "人 tôi không rung lưỡi.",
      "Tôi chỉ ra được một âm còn yếu để ôn lại, hoặc tôi không còn âm nào trong danh sách này."
    ],
    quiz: [
      { tier: 30, prompt: "Trước khi học câu, cặp nào phải tách được?", choices: ["Chữ phồn thể và giản thể", "Bốn thanh, ü/u, hơi bật, zh/z/j", "200 từ HSK 1", "Viết tên bằng chữ"], answer: 1, why: "Đó là cửa tuần 1. Từ vựng chưa phải cửa này." },
      { tier: 30, prompt: "你好 thuộc luật nào?", choices: ["不 đổi thanh", "3+3", "Một đổi thành thanh 4", "Thanh nhẹ cả hai tiếng"], answer: 1, why: "Hai thanh 3. Tiếng đầu thành thanh 2." },
      { tier: 30, prompt: "qù là âm nào?", choices: ["cu", "qu đọc ü", "ku", "xu"], answer: 1, why: "Sau q, u viết tắt của ü." },
      { tier: 30, prompt: "Nếu r vẫn rung và ü vẫn thành u, tối mai nên làm gì?", choices: ["Sang chào hỏi, tai sẽ tự vào", "Làm lại buổi 4 và buổi 6", "Học 30 chữ Hán để bù", "Bỏ pinyin, chỉ nghe phim"], answer: 1, why: "Hai lỗi này không tự hết khi nhồi từ. Sửa miệng trước." },
      { tier: 45, prompt: "Thanh 3 trong 我是?", choices: ["Nhấc trọn", "Chỉ hạ", "Thành thanh 1", "Mất hẳn"], answer: 1, why: "Trước thanh 4, thanh 3 ngắn." },
      { tier: 45, prompt: "i trong shì là?", choices: ["i cười như 米", "Chỗ tựa của sh, không thêm i", "ü", "a"], answer: 1, why: "shì không có nguyên âm i phía sau." }
    ]
  },
  {
    id: 8, week: 2, title: "Chào và tạm biệt", mark: "你好",
    promise: "Chào đúng buổi và tạm biệt được. Biết 你好 không phải câu hỏi 'bạn khỏe không'.",
    plan: [
      { m: "13 phút", tier: 30, t: "Xem bài chào. Dừng mỗi câu, nói theo." },
      { m: "7 phút", tier: 30, t: "Đọc phần tiếng Việt. Chú ý 您好 và biến thanh." },
      { m: "5 phút", tier: 30, t: "Nói 6 câu. Thu một vòng." },
      { m: "5 phút", tier: 30, t: "Quiz." },
      { m: "6 phút", tier: 45, t: "Video chào ngắn của Hoa Thư, nhái lại." },
      { m: "9 phút", tier: 60, t: "Video tạm biệt, nếu buổi còn dài." }
    ],
    videos: [
      { id: "fwtEopTZK8M", title: "Chào hỏi", channel: "Khoai Tây yêu tiếng Trung", min: 13, tier: 30, note: "Cô người Việt. Tối nay lấy phần chào. Tên khóa ở buổi 10." },
      { id: "wKs7QWaaxdU", title: "Bài 1, xin chào", channel: "Tiếng Trung Hoa Thư", min: 6, tier: 45, note: "Giảng tiếng Việt, giáo trình HSK 1 mới." },
      { id: "IXlgfF75tMk", title: "Tạm biệt ngoài đời", channel: "Khoai Tây yêu tiếng Trung", min: 9, tier: 60, note: "Cô người Việt. 再见 vẫn học. Video chỉ thêm cách tạm biệt khi đã thân." }
    ],
    blocks: [
      {
        h: "Chào thì nói thế này",
        tier: 30,
        lines: [
          "你好 là xin chào, dùng rộng. Nó không có nghĩa 'bạn có khỏe không'. Muốn hỏi thăm, người học giáo trình hay nói 你好吗. Ngoài đời, bạn bè thường không mở đầu bằng câu đó.",
          "Gặp người lớn, khách, thầy cô: 您好. 您 đọc nín, thanh 2, không phải nǐ. 您好 vì thế không rơi vào luật 3+3.",
          "早上好 chào buổi sáng. 晚上好 chào buổi tối. 晚安 là chúc ngủ ngon khi đã chia tay về đêm, không phải câu chào lúc mới gặp.",
          "再见 là tạm biệt lịch sự, học là dùng được. Với bạn bè, người ta cũng nói 拜拜 bàibài. Một câu là đủ: học 再见 trước."
        ]
      }
    ],
    vocab: [
      { z: "你好", p: "nǐ hǎo", vi: "xin chào", tier: 30, note: "Đọc ní hǎo." },
      { z: "您好", p: "nín hǎo", vi: "xin chào, lịch sự", tier: 30, note: "您 là nín, thanh 2." },
      { z: "早上好", p: "zǎoshang hǎo", vi: "chào buổi sáng", tier: 30 },
      { z: "晚上好", p: "wǎnshang hǎo", vi: "chào buổi tối", tier: 30, note: "晚 thanh 3 ngắn vì đứng trước tiếng nhẹ." },
      { z: "再见", p: "zàijiàn", vi: "tạm biệt", tier: 30 },
      { z: "晚安", p: "wǎn'ān", vi: "chúc ngủ ngon", tier: 45 }
    ],
    lines: [
      { z: "你好！", p: "nǐ hǎo!", vi: "Xin chào.", tier: 30 },
      { z: "您好！", p: "nín hǎo!", vi: "Xin chào ạ.", tier: 30 },
      { z: "早上好！", p: "zǎoshang hǎo!", vi: "Chào buổi sáng.", tier: 30 },
      { z: "晚上好！", p: "wǎnshang hǎo!", vi: "Chào buổi tối.", tier: 30 },
      { z: "再见！", p: "zàijiàn!", vi: "Tạm biệt.", tier: 45 },
      { z: "晚安。", p: "wǎn'ān.", vi: "Chúc ngủ ngon.", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "你好 nghĩa sát nhất là?", choices: ["Bạn khỏe không?", "Xin chào", "Chúc ngủ ngon", "Cảm ơn"], answer: 1, why: "Nó là lời chào. Hỏi khỏe là câu khác, và ít dùng để mở đầu với bạn bè." },
      { tier: 30, prompt: "您好, 您 đọc là?", choices: ["nǐ, thanh 3", "nín, thanh 2", "nì, thanh 4", "ní, thanh 2 nhưng không có n cuối"], answer: 1, why: "nín. Vì thanh 2, cụm 您好 không biến thanh kiểu 3+3." },
      { tier: 30, prompt: "Gặp người lúc 7 giờ tối, câu chào đúng buổi là?", choices: ["早上好", "晚上好", "晚安, ngay khi vừa gặp", "再见, để chào"], answer: 1, why: "晚上好. 晚安 dùng khi chúc ngủ, thường lúc đã tạm biệt." },
      { tier: 30, prompt: "再见 dùng để?", choices: ["Cảm ơn", "Xin lỗi", "Tạm biệt", "Hỏi tên"], answer: 2, why: "zàijiàn, tạm biệt." },
      { tier: 45, prompt: "晚安 khác 晚上好 chỗ nào?", choices: ["Không khác", "晚安 chúc ngủ ngon; 晚上好 là chào buổi tối", "晚安 chỉ nói với thầy cô", "晚上好 chỉ nói trong điện thoại"], answer: 1, why: "Một câu là chào, một câu là chúc lúc đi ngủ." },
      { tier: 45, speak: "你好", prompt: "Nghe và chọn.", choices: ["Tạm biệt", "Xin chào", "Cảm ơn", "Xin lỗi"], answer: 1, why: "你好 là xin chào." }
    ]
  },
  {
    id: 9, week: 2, title: "Cảm ơn và xin lỗi", mark: "谢谢",
    promise: "Nói được cảm ơn, không có gì, xin lỗi, không sao. Biết 不 trong 不客气 đã đổi thanh.",
    plan: [
      { m: "10 phút", tier: 30, t: "Xem video cảm ơn. Nhái từng câu." },
      { m: "8 phút", tier: 30, t: "Học 对不起 và 没关系 trong phần chữ, nói 8 lần." },
      { m: "6 phút", tier: 30, t: "Nói mini: cảm ơn, đáp, xin lỗi, đáp." },
      { m: "6 phút", tier: 30, t: "Quiz." },
      { m: "8 phút", tier: 45, t: "Nói đủ bốn câu: cảm ơn, không có gì, xin lỗi, không sao. Không nhìn chữ." },
      { m: "6 phút", tier: 60, t: "Nói 喂 như khi nghe máy, rồi 你好 như khi gặp ngoài đường. Hai câu này khác việc." }
    ],
    videos: [
      { id: "gAApeHeoBOU", title: "Cảm ơn", channel: "Mini88", min: 25, tier: 30, start: 0, end: 1500, note: "Thầy Hiếu, người Việt. Lớp dài. Tối nay 25 phút đầu, phần cảm ơn, rồi dừng." }
    ],
    blocks: [
      {
        h: "Bốn câu then chốt",
        tier: 30,
        lines: [
          "谢谢 cảm ơn. Tiếng sau nhẹ: xièxie. Đáp lại bằng 不客气, đọc **bú kèqi**. 不 vốn thanh 4, đứng trước thanh 4 của 客 thì lên thanh 2. Buổi 11 sẽ gom luật này.",
          "对不起 xin lỗi. 不 trong từ này thường đọc nhẹ: duìbuqǐ. Đáp 没关系, không sao.",
          "请 là mời hoặc làm ơn, đứng trước việc: 请坐 mời ngồi, nếu bạn muốn thêm một câu. Tối nay 请 một mình, như 'xin' khi đưa đồ cũng nghe được.",
          "喂 là alo khi nghe máy, thanh 4. Không dùng 喂 để chào người vừa gặp mặt."
        ]
      }
    ],
    vocab: [
      { z: "谢谢", p: "xièxie", vi: "cảm ơn", tier: 30 },
      { z: "不客气", p: "bú kèqi", vi: "không có gì", tier: 30, note: "不 lên thanh 2 vì 客 là thanh 4." },
      { z: "对不起", p: "duìbuqǐ", vi: "xin lỗi", tier: 30, note: "不 đọc nhẹ trong từ này." },
      { z: "没关系", p: "méi guānxi", vi: "không sao", tier: 30 },
      { z: "请", p: "qǐng", vi: "mời; làm ơn", tier: 30 },
      { z: "喂", p: "wèi", vi: "alo", tier: 45, note: "Khi nghe điện thoại, không phải lời chào ngoài đường." }
    ],
    lines: [
      { z: "谢谢！", p: "xièxie!", vi: "Cảm ơn!", tier: 30 },
      { z: "不客气。", p: "bú kèqi.", vi: "Không có gì.", tier: 30 },
      { z: "对不起。", p: "duìbuqǐ.", vi: "Xin lỗi.", tier: 30 },
      { z: "没关系。", p: "méi guānxi.", vi: "Không sao.", tier: 30 },
      { z: "请。", p: "qǐng.", vi: "Mời / xin.", tier: 45 },
      { z: "喂？", p: "wèi?", vi: "Alo?", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "Đáp lại 谢谢 bằng câu nào?", choices: ["对不起", "不客气", "再见", "早上好"], answer: 1, why: "不客气: không có gì." },
      { tier: 30, prompt: "不客气, thanh của 不 là?", choices: ["4, bù", "2, bú, vì tiếng sau thanh 4", "Nhẹ luôn", "1"], answer: 1, why: "客 kè thanh 4 kéo 不 lên thanh 2." },
      { tier: 30, prompt: "对不起 nghĩa là?", choices: ["Cảm ơn", "Xin lỗi", "Tạm biệt", "Không sao"], answer: 1, why: "Xin lỗi. Câu đáp là 没关系." },
      { tier: 30, prompt: "喂 dùng khi nào?", choices: ["Chào người lớn ngoài đường", "Alo, khi nghe máy", "Chúc ngủ ngon", "Xin lỗi"], answer: 1, why: "wèi là alo. Chào mặt đối mặt dùng 你好 hoặc 您好." },
      { tier: 45, prompt: "没关系 đáp cho câu nào?", choices: ["谢谢", "对不起", "再见", "晚上好"], answer: 1, why: "Không sao, đáp lời xin lỗi. Cảm ơn thì đáp 不客气." },
      { tier: 45, speak: "谢谢", prompt: "Nghe và chọn.", choices: ["Xin lỗi", "Cảm ơn", "Không sao", "Mời"], answer: 1, why: "谢谢 là cảm ơn." }
    ]
  },
  {
    id: 10, week: 2, title: "Tôi tên là", mark: "我叫",
    promise: "Hỏi tên và nói tên. Nói được 我是学生 hoặc việc của mình bằng một danh từ.",
    plan: [
      { m: "10 phút", tier: 30, t: "Xem video hỏi tên. Dừng ở mỗi câu hỏi." },
      { m: "8 phút", tier: 30, t: "Ghép câu với tên thật của bạn. Nói chậm." },
      { m: "6 phút", tier: 30, t: "Phân biệt 是 đi với danh từ." },
      { m: "6 phút", tier: 30, t: "Quiz." },
      { m: "10 phút", tier: 45, t: "Video hỏi tên của cô Khoai Tây. Lấy câu hỏi tên, khoảng 10 phút rồi dừng." },
      { m: "6 phút", tier: 60, t: "Nói 很高兴认识你 tám lần. Cụm này nằm ở phần nói, không có video riêng." }
    ],
    videos: [
      { id: "mcmJCnWwuAI", title: "Tôi tên là", channel: "Tiếng Trung Hoa Thư", min: 7, tier: 30, note: "Giảng tiếng Việt. Tên trong sách là nhân vật. Bạn nói tên Việt." },
      { id: "R4n_JK4N--Y", title: "Bạn tên là gì", channel: "Khoai Tây yêu tiếng Trung", min: 17, tier: 45, note: "Cô người Việt. Giáo trình cũ, lấy câu hỏi tên." }
    ],
    blocks: [
      {
        h: "Khung câu",
        tier: 30,
        lines: [
          "我叫 + tên. Tên Việt cứ nói chậm, một nhịp: 我叫 Trí. Không cần lấy tên Trung. Nếu đối phương không kịp, nói lại từng tiếng.",
          "你叫什么名字？ Bạn tên là gì? 什么 là cái gì, 名字 là tên. Câu đã có 什么 thì không thêm 吗.",
          "是 nối với danh từ: 我是学生 tôi là học sinh, 我是老师 tôi là giáo viên. Tính từ không đi con đường này. 'Tôi bận' không phải 我是忙. Để buổi 11.",
          "你呢？ Còn bạn? Rất đáng tiền, vì đảo hội thoại được mà chỉ thêm hai tiếng."
        ]
      }
    ],
    vocab: [
      { z: "叫", p: "jiào", vi: "tên là; gọi là", tier: 30 },
      { z: "什么", p: "shénme", vi: "cái gì", tier: 30, note: "me nhẹ." },
      { z: "名字", p: "míngzi", vi: "tên", tier: 30 },
      { z: "学生", p: "xuéshēng", vi: "học sinh, sinh viên", tier: 30, note: "Hán Việt: học sinh. x đọc họ j-q-x." },
      { z: "老师", p: "lǎoshī", vi: "giáo viên", tier: 30, note: "Hán Việt: lão sư. Thanh 3 của 老 chỉ hạ trước thanh 1." },
      { z: "呢", p: "ne", vi: "còn… thì sao", tier: 30, note: "你呢 = còn bạn?" }
    ],
    lines: [
      { z: "你叫什么名字？", p: "nǐ jiào shénme míngzi?", vi: "Bạn tên là gì?", tier: 30 },
      { z: "我叫 Trí。", p: "wǒ jiào Trí.", vi: "Tôi tên là Trí.", tier: 30 },
      { z: "你呢？", p: "nǐ ne?", vi: "Còn bạn?", tier: 30 },
      { z: "我是学生。", p: "wǒ shì xuéshēng.", vi: "Tôi là học sinh.", tier: 30 },
      { z: "我是老师。", p: "wǒ shì lǎoshī.", vi: "Tôi là giáo viên.", tier: 45 },
      { z: "很高兴认识你。", p: "hěn gāoxìng rènshi nǐ.", vi: "Rất vui được gặp bạn.", tier: 60 }
    ],
    quiz: [
      { tier: 30, prompt: "Câu hỏi tên đúng là?", choices: ["你叫什么名字吗？", "你叫什么名字？", "你是叫吗？", "你名字是什么叫？"], answer: 1, why: "Đã có 什么 thì không thêm 吗." },
      { tier: 30, prompt: "我是学生 đúng vì?", choices: ["学生 là tính từ", "是 đứng trước danh từ", "是 đứng cuối câu", "学生 là thanh nhẹ"], answer: 1, why: "Là + danh từ: 我是 + 学生." },
      { tier: 30, prompt: "你呢 dùng để?", choices: ["Xin lỗi", "Đảo câu hỏi lại cho đối phương", "Tạm biệt", "Đếm số"], answer: 1, why: "Còn bạn? Nói sau khi mình đã trả lời." },
      { tier: 30, prompt: "老师, âm sh là họ nào?", choices: ["s đầu răng", "sh lưỡi cuộn", "x", "j"], answer: 1, why: "shì cuộn lưỡi, đã luyện buổi 6." },
      { tier: 45, speak: "我是学生", prompt: "Nghe và chọn nghĩa.", choices: ["Tôi là giáo viên", "Tôi là học sinh", "Tôi tên là học sinh", "Bạn là học sinh"], answer: 1, why: "我 là tôi, 学生 là học sinh." },
      { tier: 45, prompt: "Tên Việt trong câu 我叫 nên nói?", choices: ["Thật nhanh để giấu đi", "Chậm, một nhịp, nói lại nếu họ chưa kịp", "Phải đổi thành tên Trung", "Không được nói tên"], answer: 1, why: "Giữ tên của bạn. Chậm là đủ." }
    ]
  },
  {
    id: 11, week: 2, title: "Là, không, và câu hỏi 吗", mark: "吗",
    promise: "Làm câu kể, câu phủ định và câu hỏi có-không. Không đặt 是 trước tính từ.",
    plan: [
      { m: "11 phút", tier: 30, t: "Xem video đại từ. Nhái ông ấy, cô ấy, họ." },
      { m: "8 phút", tier: 30, t: "Đọc ba khung câu. Viết miệng 6 câu." },
      { m: "6 phút", tier: 30, t: "Nói phần nói theo." },
      { m: "5 phút", tier: 30, t: "Quiz." },
      { m: "6 phút", tier: 45, t: "Đặt ba câu với 吗: là giáo viên không, bận không, là học sinh không." },
      { m: "8 phút", tier: 60, t: "Nói một câu kể, một câu phủ định, một câu hỏi. Cùng một việc, ví dụ bận." }
    ],
    videos: [
      { id: "fpndEC2ZFCQ", title: "Ngữ pháp sơ cấp", channel: "Khoai Tây yêu tiếng Trung", min: 19, tier: 30, note: "Cô người Việt. Lấy phần 是, câu hỏi 吗, và tính từ không đứng với 是. Hết phần đó thì dừng." }
    ],
    blocks: [
      {
        h: "Ba khung, thuộc lòng",
        tier: 30,
        lines: [
          "Kể với danh từ: 他是老师。 Cô ấy cũng vậy: 她是学生。 他 và 她 đều đọc tā. Khác ở chữ, không khác ở miệng.",
          "我很忙 có hai thanh 3 đứng cạnh: 我 và 很. 我 đọc lên thanh 2, thành wó hěn máng. 很 đứng trước máng (thanh 2) nên chỉ hạ, không nhấc.",
          "Phủ định: đặt 不 trước 是 hoặc trước tính từ. 她不是老师。 我不忙。",
          "Hỏi có-không: thêm 吗, không đảo ngữ. 你是学生吗？ 你忙吗？",
          "Tính từ: 我很忙。 Không nói 我是忙. 很 ở đây thường chỉ là cầu nối, chưa chắc đã là 'rất'. Muốn phủ định thì bỏ 很: 我不忙。",
          "也 là cũng, đứng trước cụm 是 hoặc trước tính từ: 我也是学生。 我也很忙。"
        ]
      },
      {
        h: "不 đổi thanh, lần này cho chắc",
        tier: 30,
        lines: [
          "不 một mình là bù, thanh 4. Trước thanh 4 thì thành bú. 不是 đọc bú shì, vì 是 là thanh 4.",
          "Trước thanh 1, 2, 3 thì giữ bù. 不忙 là bù máng, máng thanh 2."
        ]
      }
    ],
    vocab: [
      { z: "他", p: "tā", vi: "anh ấy, ông ấy", tier: 30 },
      { z: "她", p: "tā", vi: "cô ấy, bà ấy", tier: 30, note: "Cùng âm với 他." },
      { z: "们", p: "men", vi: "dấu số nhiều", tier: 45, note: "他们 họ. men nhẹ." },
      { z: "吗", p: "ma", vi: "đánh dấu câu hỏi có-không", tier: 30, note: "Nhẹ. Không dùng khi câu đã có 什么, 谁, 哪里." },
      { z: "不", p: "bù", vi: "không", tier: 30, note: "Trước thanh 4 đọc bú." },
      { z: "也", p: "yě", vi: "cũng", tier: 30 },
      { z: "很", p: "hěn", vi: "rất; cầu nối trước tính từ", tier: 30 },
      { z: "忙", p: "máng", vi: "bận", tier: 30 }
    ],
    lines: [
      { z: "他是老师。", p: "tā shì lǎoshī.", vi: "Anh ấy là giáo viên.", tier: 30 },
      { z: "她不是老师。", p: "tā bú shì lǎoshī.", vi: "Cô ấy không phải giáo viên.", tier: 30 },
      { z: "你是学生吗？", p: "nǐ shì xuéshēng ma?", vi: "Bạn là học sinh không?", tier: 30 },
      { z: "我很忙。", p: "wǒ hěn máng.", vi: "Tôi bận.", tier: 30 },
      { z: "我不忙。", p: "wǒ bù máng.", vi: "Tôi không bận.", tier: 45 },
      { z: "我也是学生。", p: "wǒ yě shì xuéshēng.", vi: "Tôi cũng là học sinh.", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "Câu đúng cho 'tôi bận'?", choices: ["我是忙。", "我很忙。", "我忙是。", "我是很忙吗。"], answer: 1, why: "Tính từ không đi với 是 trong câu kể kiểu này. Dùng 很." },
      { tier: 30, prompt: "不是 đọc sát là?", choices: ["bù shì", "bú shì", "bū shì", "bu shī"], answer: 1, why: "是 thanh 4, 不 lên thanh 2." },
      { tier: 30, prompt: "你忙吗 đúng vì?", choices: ["Đảo ngữ như tiếng Anh", "Thêm 吗, giữ nguyên trật tự", "必须 có 什么", "吗 đứng đầu câu"], answer: 1, why: "Câu hỏi có-không: cuối câu thêm 吗." },
      { tier: 30, prompt: "他 và 她?", choices: ["Khác nghĩa và khác âm", "Khác chữ, cùng âm tā", "他 là số nhiều", "她 đọc tāi"], answer: 1, why: "Nghe không phân biệt được. Chữ mới phân biệt." },
      { tier: 45, prompt: "我也是学生, 也 đứng ở đâu?", choices: ["Cuối câu", "Trước 是", "Trước 我", "Thay cho 是"], answer: 1, why: "也 đứng trước cụm vị ngữ: 也是学生." },
      { tier: 45, prompt: "Câu nào thừa 吗?", choices: ["你是老师吗？", "你忙吗？", "你叫什么名字吗？", "她是学生吗？"], answer: 2, why: "什么 đã làm thành câu hỏi. Không thêm 吗." }
    ]
  },
  {
    id: 12, week: 2, title: "Tôi là người Việt Nam", mark: "越南人",
    promise: "Nói quốc tịch và hỏi 'bạn là người nước nào'.",
    plan: [
      { m: "12 phút", tier: 30, t: "Xem video quốc tịch. Có thể dừng ở phút 12 nếu hết giờ, rồi làm từ." },
      { m: "8 phút", tier: 30, t: "Khóa câu 我是越南人。 Nói 10 lần với tên nước." },
      { m: "5 phút", tier: 30, t: "Hỏi 你是哪国人？ rồi tự đáp." },
      { m: "5 phút", tier: 30, t: "Quiz." },
      { m: "8 phút", tier: 45, t: "Nói lại câu trong video, đổi thành 越南人. Mỗi câu 5 lần." }
    ],
    videos: [
      { id: "l96XuqDrqcs", title: "Tôi là người nước nào", channel: "Tiếng Trung Hoa Thư", min: 8, tier: 30, note: "Giảng tiếng Việt. Trong video là 中国人. Bạn đổi thành 越南人." }
    ],
    blocks: [
      {
        h: "Một công thức",
        tier: 30,
        lines: [
          "Tên nước + 人 = người nước đó. 中国人 người Trung Quốc. 越南人 người Việt Nam.",
          "我是越南人。 Đủ rồi. Đừng nói 我是越南, vì câu đó thiếu 人 và nghe như 'tôi là nước Việt Nam'.",
          "你是哪国人？ 哪 là nào, thanh 3. Câu đã có 哪, không thêm 吗.",
          "中国 Zhōngguó, Hán Việt Trung Quốc. 越南 Yuènán, Việt Nam. 人 rén, nhân. Bộ nhớ Hán Việt giúp nghĩa, không giúp miệng. Miệng vẫn phải theo thanh Trung."
        ]
      }
    ],
    vocab: [
      { z: "中国", p: "Zhōngguó", vi: "Trung Quốc", tier: 30, note: "Hán Việt: Trung Quốc." },
      { z: "人", p: "rén", vi: "người", tier: 30 },
      { z: "中国人", p: "Zhōngguórén", vi: "người Trung Quốc", tier: 30 },
      { z: "越南", p: "Yuènán", vi: "Việt Nam", tier: 30 },
      { z: "越南人", p: "Yuènánrén", vi: "người Việt Nam", tier: 30 },
      { z: "哪", p: "nǎ", vi: "nào", tier: 30 },
      { z: "美国", p: "Měiguó", vi: "Mỹ", tier: 45 },
      { z: "日本", p: "Rìběn", vi: "Nhật Bản", tier: 45, note: "Hán Việt: Nhật Bản." },
      { z: "英国", p: "Yīngguó", vi: "Anh", tier: 60 }
    ],
    lines: [
      { z: "你是哪国人？", p: "nǐ shì nǎ guó rén?", vi: "Bạn là người nước nào?", tier: 30 },
      { z: "我是越南人。", p: "wǒ shì Yuènánrén.", vi: "Tôi là người Việt Nam.", tier: 30 },
      { z: "我不是中国人。", p: "wǒ bú shì Zhōngguórén.", vi: "Tôi không phải người Trung Quốc.", tier: 30 },
      { z: "他也是越南人。", p: "tā yě shì Yuènánrén.", vi: "Anh ấy cũng là người Việt Nam.", tier: 45 },
      { z: "她是日本人吗？", p: "tā shì Rìběn rén ma?", vi: "Cô ấy là người Nhật không?", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "Câu đúng?", choices: ["我是越南。", "我越南人是。", "我是越南人。", "我是人越南。"], answer: 2, why: "我是 + tên nước + 人." },
      { tier: 30, prompt: "你是哪国人, có thêm 吗 không?", choices: ["Thêm ở cuối", "Không, vì đã có 哪", "Thêm sau 是", "Đổi 哪 thành 吗"], answer: 1, why: "哪 đã là từ hỏi." },
      { tier: 30, prompt: "中国人 nghĩa là?", choices: ["Tiếng Trung", "Người Trung Quốc", "Ở Trung Quốc", "Họ Trung"], answer: 1, why: "人 biến tên nước thành người nước đó. Tiếng Trung là 汉语, buổi 26." },
      { tier: 30, prompt: "不是 trong 我不是中国人 đọc?", choices: ["bù shì", "bú shì", "bú sì", "bū shī"], answer: 1, why: "是 thanh 4, 不 thành bú." },
      { tier: 45, prompt: "越南, thanh đúng là?", choices: ["yuē nán", "yuè nán", "yuè nǎn", "yuě nàn"], answer: 1, why: "Yuènán: thanh 4 rồi thanh 2." },
      { tier: 45, prompt: "Hán Việt giúp gì?", choices: ["Thay cho thanh điệu", "Gợi nghĩa, miệng vẫn phải học riêng", "Chỉ dùng với chữ cổ", "Không liên quan gì đến từ Trung"], answer: 1, why: "中 quốc, 人 nhân gợi nghĩa. Âm hiện đại khác âm Việt." }
    ]
  },
  {
    id: 13, week: 2, title: "Số, tuổi, điện thoại", mark: "25",
    promise: "Đếm tới 99, nói tuổi, và đọc số điện thoại từng chữ số.",
    plan: [
      { m: "7 phút", tier: 30, t: "Xem video đếm. Dừng, đếm theo từ 1 đến 10 rồi 20, 21." },
      { m: "10 phút", tier: 30, t: "Học quy tắc 11–99 trong bảng. Nói tuổi của bạn." },
      { m: "7 phút", tier: 30, t: "Đọc số điện thoại thật, từng số, chậm." },
      { m: "6 phút", tier: 30, t: "Quiz." },
      { m: "8 phút", tier: 45, t: "Đọc số máy của bạn từng chữ, hai lần, không nhìn." },
      { m: "25 phút", tier: 60, t: "Lớp của thầy Hiếu. Xem 25 phút rồi dừng. Số đã chắc thì chỉ đọc số máy của bạn." }
    ],
    videos: [
      { id: "ICLaRB3D8mI", title: "Số điện thoại", channel: "Tiếng Trung Hoa Thư", min: 10, tier: 30, note: "Giảng tiếng Việt. Bài số máy của giáo trình mới." },
      { id: "FjwFTNNBY44", title: "Lớp số điện thoại", channel: "Mini88", min: 25, tier: 60, start: 0, end: 1500, note: "Thầy Hiếu. Lớp dài. 25 phút đầu rồi dừng." }
    ],
    blocks: [
      {
        h: "Đếm thì có quy tắc",
        tier: 30,
        table: {
          head: ["Việc", "Cách", "Ví dụ"],
          rows: [
            ["1–10", "Học thuộc từng từ", "一 yī, 二 èr, 三 sān, 四 sì, 五 wǔ, 六 liù, 七 qī, 八 bā, 九 jiǔ, 十 shí"],
            ["11–19", "十 + số", "十一 11, 十九 19"],
            ["20, 30, 40", "số + 十", "二十, 三十, 四十"],
            ["21, 35, 99", "số + 十 + số", "二十一, 三十五, 九十九"],
            ["0", "零 líng", "Trong số điện thoại"]
          ]
        }
      },
      {
        h: "Hai và tuổi",
        tier: 30,
        lines: [
          "Đếm và đọc số tuổi dùng 二: 二十岁 hai mươi tuổi. 两 dùng trước lượng từ, buổi 22: 两个人 hai người. Đừng nói 二个人.",
          "Hỏi tuổi người lớn: 你多大？ Không hỏi 你几岁, câu đó dành cho trẻ em, hỏi người lớn dễ thất lễ.",
          "我二十五岁。 Không dùng 年 cho tuổi. 岁 là tuổi.",
          "Số điện thoại đọc từng chữ số. 一 có thể đọc yāo cho khỏi lẫn với 七. Biết là đủ, chưa cần thuộc."
        ]
      }
    ],
    vocab: [
      { z: "一", p: "yī", vi: "một", tier: 30 },
      { z: "二", p: "èr", vi: "hai, khi đếm", tier: 30 },
      { z: "三", p: "sān", vi: "ba", tier: 30 },
      { z: "四", p: "sì", vi: "bốn", tier: 30 },
      { z: "五", p: "wǔ", vi: "năm", tier: 30 },
      { z: "六", p: "liù", vi: "sáu", tier: 30 },
      { z: "七", p: "qī", vi: "bảy", tier: 30 },
      { z: "八", p: "bā", vi: "tám", tier: 30 },
      { z: "九", p: "jiǔ", vi: "chín", tier: 30 },
      { z: "十", p: "shí", vi: "mười", tier: 30 },
      { z: "零", p: "líng", vi: "số 0", tier: 30 },
      { z: "两", p: "liǎng", vi: "hai, trước lượng từ", tier: 30, note: "两个, không nói 二个." },
      { z: "岁", p: "suì", vi: "tuổi", tier: 30 },
      { z: "多大", p: "duō dà", vi: "bao nhiêu tuổi, với người lớn", tier: 30 },
      { z: "电话", p: "diànhuà", vi: "điện thoại", tier: 45, note: "Hán Việt: điện thoại." },
      { z: "多少", p: "duōshao", vi: "bao nhiêu", tier: 45 }
    ],
    lines: [
      { z: "一、二、三、四、五。", p: "yī, èr, sān, sì, wǔ.", vi: "Một đến năm.", tier: 30 },
      { z: "六、七、八、九、十。", p: "liù, qī, bā, jiǔ, shí.", vi: "Sáu đến mười.", tier: 30 },
      { z: "你多大？", p: "nǐ duō dà?", vi: "Bạn bao nhiêu tuổi?", tier: 30 },
      { z: "我二十五岁。", p: "wǒ èrshíwǔ suì.", vi: "Tôi 25 tuổi.", tier: 30 },
      { z: "十一。", p: "shíyī.", vi: "Mười một.", tier: 45 },
      { z: "电话是零九零。", p: "diànhuà shì líng jiǔ líng.", vi: "Số máy là không chín không.", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "21 nói thế nào?", choices: ["二十一", "二一", "二十十", "两十一"], answer: 0, why: "2 chục là 二十, rồi thêm 一." },
      { tier: 30, prompt: "Hỏi tuổi một người lớn?", choices: ["你几岁？", "你多大？", "你是岁吗？", "你年多大？"], answer: 1, why: "你多大. 你几岁 dùng với trẻ em." },
      { tier: 30, prompt: "我二十五岁, từ chỉ tuổi là?", choices: ["年", "岁", "点", "号"], answer: 1, why: "岁. 年 là năm, chưa cần buổi này." },
      { tier: 30, prompt: "Hai người, sau này nói?", choices: ["二个人", "两个人", "二人个", "两人个"], answer: 1, why: "Trước lượng từ 个 dùng 两. Đếm 2 vẫn là 二." },
      { tier: 45, prompt: "11 là?", choices: ["一十", "十一", "十十", "一十一"], answer: 1, why: "11 đến 19: 十 + số." },
      { tier: 45, prompt: "Trong điện thoại, 一 đôi khi đọc yāo để?", choices: ["Lịch sự hơn", "Khỏi lẫn với 七", "Thành thanh 3", "Chỉ dùng ở Việt Nam"], answer: 1, why: "yāo và qī dễ tách hơn khi đường truyền ồn. Biết là đủ." }
    ]
  },
  {
    id: 14, week: 2, title: "Tự giới thiệu trong 30 giây", mark: "说",
    promise: "Nói một mạch: chào, tên, người Việt Nam, tuổi hoặc việc, vui được gặp, tạm biệt.",
    plan: [
      { m: "8 phút", tier: 30, t: "Không xem video vội. Nói thử một vòng không nhìn chữ." },
      { m: "10 phút", tier: 30, t: "Xem video cụm câu. Nhặt câu bạn còn thiếu." },
      { m: "7 phút", tier: 30, t: "Nói lại đủ đoạn. Tick ô tự kiểm." },
      { m: "5 phút", tier: 30, t: "Quiz ngắn." },
      { m: "10 phút", tier: 45, t: "Thu âm điện thoại, nghe lại, sửa một thanh." }
    ],
    videos: [
      { id: "qlBY4dD0BOo", title: "Nhắc lại tên và chào", channel: "Mini88", min: 25, tier: 30, start: 0, end: 1500, note: "Thầy Hiếu. Không học thêm câu mới. Nói lại phần chào và tên, rồi dừng ở phút 25." }
    ],
    blocks: [
      {
        h: "Đoạn mục tiêu",
        tier: 30,
        lines: [
          "你好。我叫 Trí。我是越南人。我二十五岁。我是学生。很高兴认识你。再见。",
          "Đổi tuổi và 学生 cho đúng việc của bạn. Nếu chưa có từ cho nghề, bỏ câu đó, đừng bịa.",
          "很高兴认识你 là cụm mới tối nay: rất vui được gặp bạn. 高兴 vui, 认识 quen biết. Học cả câu, đừng tách vụn nếu đang mệt."
        ]
      }
    ],
    vocab: [
      { z: "高兴", p: "gāoxìng", vi: "vui", tier: 30 },
      { z: "认识", p: "rènshi", vi: "quen, biết mặt", tier: 30, note: "shi nhẹ." },
      { z: "朋友", p: "péngyou", vi: "bạn bè", tier: 45, note: "you nhẹ. Hán Việt: bằng hữu." }
    ],
    lines: [
      { z: "你好。我叫 Trí。", p: "nǐ hǎo. wǒ jiào Trí.", vi: "Xin chào. Tôi tên là Trí.", tier: 30 },
      { z: "我是越南人。", p: "wǒ shì Yuènánrén.", vi: "Tôi là người Việt Nam.", tier: 30 },
      { z: "我二十五岁。", p: "wǒ èrshíwǔ suì.", vi: "Tôi 25 tuổi.", tier: 30 },
      { z: "很高兴认识你。", p: "hěn gāoxìng rènshi nǐ.", vi: "Rất vui được gặp bạn.", tier: 30 },
      { z: "再见。", p: "zàijiàn.", vi: "Tạm biệt.", tier: 45 }
    ],
    oral: [
      "Tôi chào được bằng 你好 mà không nhìn bài.",
      "Tôi nói được tên bằng 我叫.",
      "Tôi nói được 我是越南人.",
      "Tôi nói được tuổi bằng 岁, hoặc tôi cố ý bỏ câu tuổi.",
      "Tôi nói được 很高兴认识你 hoặc tôi bỏ câu này vì chưa chắc thanh.",
      "Tôi kết bằng 再见."
    ],
    quiz: [
      { tier: 30, prompt: "Thứ tự tự nhiên nhất?", choices: ["再见。我叫。你好。", "你好。我叫…。我是越南人。", "我是越南。你好名字。", "你呢。对不起。"], answer: 1, why: "Chào, tên, rồi mới đến quốc tịch." },
      { tier: 30, prompt: "很高兴认识你 nghĩa là?", choices: ["Xin lỗi, tôi không rảnh", "Rất vui được gặp bạn", "Bạn bao nhiêu tuổi", "Tôi không phải người Việt"], answer: 1, why: "Cụm khi mới quen." },
      { tier: 30, prompt: "Nếu chưa có từ chỉ nghề, nên?", choices: ["Bịa một câu cho đủ", "Bỏ câu nghề", "Nói tiếng Việt chen vào", "Dùng 忙 thay nghề"], answer: 1, why: "Đoạn ngắn và đúng còn hơn đoạn dài bịa." },
      { tier: 30, prompt: "认识 trong cụm này đọc?", choices: ["rèn shí, cả hai đầy đủ và nặng", "rènshi, tiếng sau nhẹ", "rén shi thanh 1", "liàn shi"], answer: 1, why: "shi nhẹ." },
      { tier: 45, prompt: "Buổi ôn này thêm từ mới để làm gì?", choices: ["Để đủ 50 từ", "Chỉ một cụm cần cho đoạn nói", "Để thay tuần 1", "Không có từ nào cả"], answer: 1, why: "很高兴认识你 là cụm gắn vào bài nói, không phải một chủ đề mới." },
      { tier: 45, prompt: "Nghe lại bản thu để sửa gì trước?", choices: ["Một thanh đang sai", "Tất cả chữ Hán", "Dấu câu", "Tốc độ cho bằng người bản ngữ ngay"], answer: 0, why: "Một lỗi thanh mỗi tối. Đừng sửa mười thứ." }
    ]
  },
  {
    id: 15, week: 3, title: "Gia đình", mark: "家",
    promise: "Giới thiệu bố mẹ, anh chị em. Hỏi 'có không' bằng 有 và 吗.",
    plan: [
      { m: "12 phút", tier: 30, t: "Xem video gia đình. Nhái từ gọi người." },
      { m: "8 phút", tier: 30, t: "Ghép gia đình thật của bạn, chỉ những người bạn có từ." },
      { m: "5 phút", tier: 30, t: "Hỏi và đáp 有…吗 / 没有." },
      { m: "5 phút", tier: 30, t: "Quiz." },
      { m: "6 phút", tier: 45, t: "Nói sáu từ gọi người trong nhà, không nhìn. Sai từ nào thì xem lại từ đó." }
    ],
    videos: [
      { id: "yH17TS-87LI", title: "Tôi có hai người con", channel: "Tiếng Trung Hoa Thư", min: 8, tier: 30, note: "Giảng tiếng Việt. Lấy từ gia đình. Câu của bạn dùng số người thật trong nhà." }
    ],
    blocks: [
      {
        h: "Gọi người trong nhà",
        tier: 30,
        lines: [
          "家 là nhà, cũng là gia đình. 这是我妈妈。 Đây là mẹ tôi. Với người thân, thường không chèn 的: nói 我妈妈, không cần 我的妈妈. 的 để buổi 24, với đồ vật.",
          "爸爸, 妈妈, 哥哥, 姐姐, 弟弟, 妹妹. Tiếng sau của các từ này đọc nhẹ.",
          "有 là có. 没有 là không có. 你有姐姐吗？ 我有姐姐。 我没有弟弟。",
          "Câu 我有一个哥哥 ở mức 60 phút là cụm nhái cả cục. Luật 一 đổi thanh và chữ 个 học kỹ ở buổi 22.",
          "谁 là ai. 她是谁？ Cô ấy là ai? Câu có 谁 thì không thêm 吗."
        ]
      }
    ],
    vocab: [
      { z: "家", p: "jiā", vi: "nhà; gia đình", tier: 30 },
      { z: "爸爸", p: "bàba", vi: "bố", tier: 30 },
      { z: "妈妈", p: "māma", vi: "mẹ", tier: 30 },
      { z: "哥哥", p: "gēge", vi: "anh trai", tier: 30 },
      { z: "姐姐", p: "jiějie", vi: "chị gái", tier: 30 },
      { z: "弟弟", p: "dìdi", vi: "em trai", tier: 30 },
      { z: "妹妹", p: "mèimei", vi: "em gái", tier: 30 },
      { z: "有", p: "yǒu", vi: "có", tier: 30 },
      { z: "没有", p: "méiyǒu", vi: "không có", tier: 30 },
      { z: "谁", p: "shéi", vi: "ai", tier: 30, note: "Cũng nghe shuí. Học một cách: shéi." },
      { z: "这", p: "zhè", vi: "này", tier: 45, note: "这是… = đây là. Buổi 24 sẽ đào sâu." }
    ],
    lines: [
      { z: "这是我妈妈。", p: "zhè shì wǒ māma.", vi: "Đây là mẹ tôi.", tier: 30 },
      { z: "这是我爸爸。", p: "zhè shì wǒ bàba.", vi: "Đây là bố tôi.", tier: 30 },
      { z: "你有姐姐吗？", p: "nǐ yǒu jiějie ma?", vi: "Bạn có chị không?", tier: 30 },
      { z: "我没有弟弟。", p: "wǒ méiyǒu dìdi.", vi: "Tôi không có em trai.", tier: 30 },
      { z: "她是谁？", p: "tā shì shéi?", vi: "Cô ấy là ai?", tier: 45 },
      { z: "我有一个哥哥。", p: "wǒ yǒu yí gè gēge.", vi: "Tôi có một anh trai.", tier: 60 }
    ],
    quiz: [
      { tier: 30, prompt: "我没有弟弟 nghĩa là?", choices: ["Tôi có em trai", "Tôi không có em trai", "Em trai tôi không ở nhà", "Tôi là em trai"], answer: 1, why: "没有 = không có." },
      { tier: 30, prompt: "Với mẹ, câu tự nhiên hơn?", choices: ["我的妈妈是这", "这是我妈妈", "这我是妈妈", "妈妈是我的这"], answer: 1, why: "这是我妈妈. Người thân thường bỏ 的." },
      { tier: 30, prompt: "她是谁, thêm 吗?", choices: ["Có", "Không, đã có 谁", "Thêm hai 吗", "Đổi 谁 thành 吗"], answer: 1, why: "谁 đã là từ hỏi." },
      { tier: 30, prompt: "姐姐 là?", choices: ["em gái", "chị gái", "anh trai", "em trai"], answer: 1, why: "姐姐 chị gái. 妹妹 em gái. 哥哥 anh. 弟弟 em trai." },
      { tier: 45, prompt: "Tiếng sau trong 爸爸 thường?", choices: ["Thanh 4 đầy", "Nhẹ", "Thanh 1", "Thanh 2"], answer: 1, why: "bàba, tiếng sau nhẹ. Giống 妈妈, 哥哥." },
      { tier: 45, speak: "妈妈", prompt: "Nghe và chọn.", choices: ["bố", "mẹ", "chị", "em"], answer: 1, why: "妈妈 là mẹ." }
    ]
  },
  {
    id: 16, week: 3, title: "Hôm nay, ngày mai, thứ", mark: "今天",
    promise: "Nói hôm nay là thứ mấy, và đặt được hôm qua / hôm nay / ngày mai vào câu.",
    plan: [
      { m: "9 phút", tier: 30, t: "Xem video hôm nay, ngày mai, hôm qua." },
      { m: "8 phút", tier: 30, t: "Học công thức 星期 + số. Nói thứ của hôm nay." },
      { m: "7 phút", tier: 30, t: "Ba buổi: sáng, chiều, tối. Đặt vào một câu." },
      { m: "6 phút", tier: 30, t: "Quiz." },
      { m: "8 phút", tier: 45, t: "Nói hôm nay là thứ mấy, rồi một câu có 上午, 下午 hoặc 晚上." }
    ],
    videos: [
      { id: "xsNg1dmby4c", title: "Hôm nay tôi nghỉ", channel: "Tiếng Trung Hoa Thư", min: 8, tier: 30, note: "Giảng tiếng Việt. Lấy hôm nay, ngày mai, và nghỉ." }
    ],
    blocks: [
      {
        h: "Thứ thì cộng số",
        tier: 30,
        lines: [
          "星期一 thứ Hai, 星期二 thứ Ba, cứ thế đến 星期六 thứ Bảy. Chủ nhật nói 星期天 hoặc 星期日. Không phải 星期七.",
          "今天星期一。 Hôm nay thứ Hai. Không cần 是, câu danh từ kiểu này nói được. 今天是星期一 cũng đúng. Học một kiểu: có 是, cho khỏi phân vân: 今天是星期一。",
          "时间 đứng sau người, trước việc: 我今天很忙。 我明天不忙。 Đừng ném 今天 ra cuối câu.",
          "上午 buổi sáng tính theo lịch (khoảng trước trưa), 下午 buổi chiều, 晚上 buổi tối. 现在 là bây giờ."
        ]
      }
    ],
    vocab: [
      { z: "今天", p: "jīntiān", vi: "hôm nay", tier: 30 },
      { z: "明天", p: "míngtiān", vi: "ngày mai", tier: 30 },
      { z: "昨天", p: "zuótiān", vi: "hôm qua", tier: 30 },
      { z: "星期", p: "xīngqī", vi: "tuần; thứ", tier: 30, note: "星期一 = thứ Hai." },
      { z: "现在", p: "xiànzài", vi: "bây giờ", tier: 30, note: "Hán Việt gợi: hiện tại." },
      { z: "上午", p: "shàngwǔ", vi: "buổi sáng", tier: 30 },
      { z: "下午", p: "xiàwǔ", vi: "buổi chiều", tier: 30 },
      { z: "晚上", p: "wǎnshang", vi: "buổi tối", tier: 30 }
    ],
    lines: [
      { z: "今天是星期一。", p: "jīntiān shì xīngqīyī.", vi: "Hôm nay thứ Hai.", tier: 30 },
      { z: "我今天很忙。", p: "wǒ jīntiān hěn máng.", vi: "Hôm nay tôi bận.", tier: 30 },
      { z: "我明天不忙。", p: "wǒ míngtiān bù máng.", vi: "Ngày mai tôi không bận.", tier: 30 },
      { z: "现在是晚上。", p: "xiànzài shì wǎnshang.", vi: "Bây giờ là buổi tối.", tier: 30 },
      { z: "昨天是星期天。", p: "zuótiān shì xīngqītiān.", vi: "Hôm qua chủ nhật.", tier: 45 },
      { z: "我上午很忙。", p: "wǒ shàngwǔ hěn máng.", vi: "Buổi sáng tôi bận.", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "Thứ Hai là?", choices: ["星期七", "星期一", "星期天", "星期日"], answer: 1, why: "Thứ Hai đến thứ Bảy dùng số 1–6. Chủ nhật là 星期天 hoặc 星期日." },
      { tier: 30, prompt: "Câu tự nhiên hơn?", choices: ["我很忙今天。", "我今天很忙。", "今天我是忙。", "我是今天忙。"], answer: 1, why: "Thời gian sau chủ ngữ, trước tính từ. Và tính từ đi với 很, không đi với 是." },
      { tier: 30, prompt: "晚上 là?", choices: ["buổi sáng", "buổi chiều", "buổi tối", "bây giờ"], answer: 2, why: "晚上 buổi tối. 上午 sáng. 下午 chiều. 现在 bây giờ." },
      { tier: 30, prompt: "昨天 nghĩa là?", choices: ["hôm nay", "ngày mai", "hôm qua", "tuần sau"], answer: 2, why: "zuótiān hôm qua. jīntiān hôm nay. míngtiān ngày mai." },
      { tier: 45, prompt: "Chủ nhật nói thế nào?", choices: ["星期七", "星期天", "星期八", "月天"], answer: 1, why: "星期天 hoặc 星期日." },
      { tier: 45, prompt: "现在是下午 nghĩa là?", choices: ["Hôm qua là sáng", "Bây giờ là buổi chiều", "Ngày mai buổi tối", "Hôm nay thứ Hai"], answer: 1, why: "现在 bây giờ, 下午 buổi chiều." }
    ]
  },
  {
    id: 17, week: 3, title: "Bây giờ mấy giờ", mark: "三点",
    promise: "Hỏi giờ và nói giờ chẵn, giờ rưỡi, giờ hơn bằng phút.",
    plan: [
      { m: "15 phút", tier: 30, t: "Xem video xem giờ. Buổi 30 phút thì dừng ở phút 15, phần giờ và phút." },
      { m: "7 phút", tier: 30, t: "Nói giờ thật trên đồng hồ của bạn theo ba mẫu." },
      { m: "4 phút", tier: 30, t: "Quiz." },
      { m: "8 phút", tier: 45, t: "Nói lại ba mốc: giờ chẵn, giờ rưỡi, giờ hơn. Không mở video mới." }
    ],
    videos: [
      { id: "zujzJV4HvC8", title: "Tan làm lúc sáu giờ rưỡi", channel: "Tiếng Trung Hoa Thư", min: 9, tier: 30, note: "Giảng tiếng Việt. Khóa được 六点半 là đủ cho buổi ngắn." }
    ],
    blocks: [
      {
        h: "Ba mẫu là đủ sống",
        tier: 30,
        lines: [
          "现在几点？ Bây giờ mấy giờ? 几 là mấy, cho số nhỏ mình đoán được, như giờ trong ngày.",
          "Giờ chẵn: 现在三点。 3 giờ. 2 giờ nói 两点, dùng 两, không nói 二点. 两 và 点 đều thanh 3, nên đọc liáng diǎn.",
          "Rưỡi: thêm 半. 三点半 là 3:30. Nửa đứng sau giờ.",
          "Phút: 三点十分 là 3:10. Mẫu là giờ + 点 + số phút + 分.",
          "12 giờ là 十二点. 点 ở đây thanh 3 ngắn."
        ]
      }
    ],
    vocab: [
      { z: "点", p: "diǎn", vi: "giờ", tier: 30 },
      { z: "分", p: "fēn", vi: "phút", tier: 30 },
      { z: "半", p: "bàn", vi: "rưỡi", tier: 30 },
      { z: "几", p: "jǐ", vi: "mấy", tier: 30, note: "Dùng khi số nhỏ, như giờ. Tuổi người lớn thì không dùng 几岁." },
      { z: "分钟", p: "fēnzhōng", vi: "phút, khoảng thời gian", tier: 45, note: "十分钟 = mười phút đồng hồ." }
    ],
    lines: [
      { z: "现在几点？", p: "xiànzài jǐ diǎn?", vi: "Bây giờ mấy giờ?", tier: 30 },
      { z: "现在三点。", p: "xiànzài sān diǎn.", vi: "Bây giờ 3 giờ.", tier: 30 },
      { z: "现在两点。", p: "xiànzài liǎng diǎn.", vi: "Bây giờ 2 giờ. Miệng đọc liáng diǎn.", tier: 30 },
      { z: "现在三点半。", p: "xiànzài sān diǎn bàn.", vi: "Bây giờ 3 giờ rưỡi.", tier: 30 },
      { z: "现在三点十分。", p: "xiànzài sān diǎn shí fēn.", vi: "Bây giờ 3 giờ 10.", tier: 45 },
      { z: "十二点。", p: "shí'èr diǎn.", vi: "12 giờ.", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "3:30 nói thế nào?", choices: ["半三点", "三点半", "三点三十点", "三十三点"], answer: 1, why: "Giờ + 点 + 半." },
      { tier: 30, prompt: "2:00 nói thế nào?", choices: ["二点", "两点", "二十点", "两十"], answer: 1, why: "2 giờ là 两点." },
      { tier: 30, prompt: "现在几点 dùng 几 vì?", choices: ["Giờ là số lớn không đoán được", "Giờ trong ngày là số nhỏ", "几 nghĩa là không", "几 là thanh nhẹ"], answer: 1, why: "几 cho lượng nhỏ mình trông đợi, như số giờ." },
      { tier: 30, prompt: "3:10 là?", choices: ["三点十分", "十分三点", "三点十", "十三点"], answer: 0, why: "点 rồi đến phút và 分." },
      { tier: 45, prompt: "十二点 là mấy giờ?", choices: ["2 giờ", "10 giờ", "12 giờ", "20 giờ"], answer: 2, why: "十二 là 12, 点 là giờ." },
      { tier: 45, prompt: "分 trong 三点十分 là?", choices: ["giờ", "phút", "giây", "ngày"], answer: 1, why: "分 là phút. 点 là giờ." }
    ]
  },
  {
    id: 18, week: 3, title: "Ăn, uống, thích", mark: "吃",
    promise: "Nói muốn uống gì, thích ăn gì, và khen ngon bằng một câu.",
    plan: [
      { m: "10 phút", tier: 30, t: "Xem video ăn và uống. Nhái 吃 喝." },
      { m: "8 phút", tier: 30, t: "Ghép 3 câu thật: bạn muốn uống gì tối nay." },
      { m: "6 phút", tier: 30, t: "Nói theo." },
      { m: "6 phút", tier: 30, t: "Quiz." },
      { m: "6 phút", tier: 45, t: "Nói 我想喝茶 và 我不喝茶. Gọi món trong quán để buổi 19." }
    ],
    videos: [
      { id: "XlCHTAR6RJA", title: "Bạn ăn gì", channel: "Trung tâm SOFL", min: 6, tier: 30, note: "Giảng tiếng Việt. Giáo trình cũ. Lấy câu ăn và uống." }
    ],
    blocks: [
      {
        h: "Muốn và thích",
        tier: 30,
        lines: [
          "吃 ăn, 喝 uống. 我想喝茶。 Tôi muốn uống trà. 想 là muốn theo ý thích.",
          "我喜欢米饭。 Tôi thích cơm. 喜欢: tiếng sau nhẹ.",
          "好吃 là ngon. 米饭很好吃。 Nhớ tính từ đi với 很 trong câu kể.",
          "你喝水吗？ Bạn uống nước không? 水 là nước. Hán Việt: thủy.",
          "Miền Bắc hay chào nhau 吃饭了吗, gốc là hỏi đã ăn chưa. Biết để đừng bối rối khi nghe. Chưa cần dùng."
        ]
      }
    ],
    vocab: [
      { z: "吃", p: "chī", vi: "ăn", tier: 30 },
      { z: "喝", p: "hē", vi: "uống", tier: 30 },
      { z: "茶", p: "chá", vi: "trà", tier: 30 },
      { z: "水", p: "shuǐ", vi: "nước", tier: 30, note: "Hán Việt: thủy." },
      { z: "米饭", p: "mǐfàn", vi: "cơm", tier: 30 },
      { z: "想", p: "xiǎng", vi: "muốn", tier: 30, note: "Ý muốn. Khác 要 ở buổi 26." },
      { z: "喜欢", p: "xǐhuan", vi: "thích", tier: 30 },
      { z: "好吃", p: "hǎochī", vi: "ngon", tier: 30 }
    ],
    lines: [
      { z: "我想喝茶。", p: "wǒ xiǎng hē chá.", vi: "Tôi muốn uống trà.", tier: 30 },
      { z: "我喜欢米饭。", p: "wǒ xǐhuan mǐfàn.", vi: "Tôi thích cơm.", tier: 30 },
      { z: "米饭很好吃。", p: "mǐfàn hěn hǎochī.", vi: "Cơm ngon.", tier: 30 },
      { z: "你喝水吗？", p: "nǐ hē shuǐ ma?", vi: "Bạn uống nước không?", tier: 30 },
      { z: "我不喝茶。", p: "wǒ bù hē chá.", vi: "Tôi không uống trà.", tier: 45 },
      { z: "你想吃什么？", p: "nǐ xiǎng chī shénme?", vi: "Bạn muốn ăn gì?", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "我想喝茶 nghĩa là?", choices: ["Tôi đang uống trà", "Tôi muốn uống trà", "Tôi không có trà", "Trà rất ngon"], answer: 1, why: "想 + động từ = muốn làm." },
      { tier: 30, prompt: "Câu kể 'cơm ngon' nên là?", choices: ["米饭是好吃", "米饭很好吃", "好吃是米饭", "米饭吃好是"], answer: 1, why: "Tính từ đi với 很: 很好吃." },
      { tier: 30, prompt: "喝 đi với từ nào?", choices: ["米饭", "茶", "老师", "星期"], answer: 1, why: "喝 uống. Trà, nước thì uống. Cơm thì 吃." },
      { tier: 30, prompt: "你想吃什么, có 吗 không?", choices: ["Có, cuối câu", "Không, đã có 什么", "Có, sau 想", "Đổi 想 thành 吗"], answer: 1, why: "什么 đã hỏi rồi." },
      { tier: 45, prompt: "我不喝茶, 不 đứng ở đâu?", choices: ["Sau 茶", "Trước 喝", "Đầu câu thay 我", "Cuối câu"], answer: 1, why: "不 đứng trước động từ." },
      { tier: 45, speak: "茶", prompt: "Nghe và chọn.", choices: ["cơm", "nước lọc", "trà", "ngon"], answer: 2, why: "茶 chá là trà." }
    ]
  },
  {
    id: 19, week: 3, title: "Trong quán ăn", mark: "饭店",
    promise: "Gọi được một món và một thức uống, rồi bảo tính tiền.",
    plan: [
      { m: "15 phút", tier: 30, t: "Xem video quán ăn. Nhái câu gọi đồ và tính tiền." },
      { m: "7 phút", tier: 30, t: "Đóng vai: bạn là khách, nói 4 câu." },
      { m: "4 phút", tier: 30, t: "Quiz." },
      { m: "5 phút", tier: 45, t: "Thêm 一杯 và nói lại câu gọi nước." }
    ],
    videos: [
      { id: "M0_nliT_wxQ", title: "Cho tôi một cốc trà", channel: "Tiếng Trung Hoa Thư", min: 9, tier: 30, note: "Giảng tiếng Việt. Lấy gọi món và 请. Tính tiền nằm ở phần tiếng Việt." }
    ],
    blocks: [
      {
        h: "Bốn câu trong quán",
        tier: 30,
        lines: [
          "服务员 là nhân viên. Gọi họ bằng từ này, hoặc chỉ nói câu cần nói.",
          "我要茶。 Tôi lấy trà. 要 ở đây là 'lấy, gọi món', ngắn hơn 想. Cả hai đều dùng được. Tối nay khóa 我要…",
          "请给我水。 Làm ơn cho tôi nước. 给 gěi là cho.",
          "买单。 Tính tiền. Nhiều nơi cũng nói 结账. Học một câu: 买单.",
          "饭店 trong giáo trình là quán ăn. Ngoài đời nó cũng có thể là khách sạn-nhà hàng. Với tháng này, nghe 饭店 thì nghĩ tới chỗ vào ăn.",
          "一杯水 một ly nước. 杯 là ly. 一 trước thanh 1 đọc yì: yì bēi. Luật đủ sẽ ở buổi 22. Tối nay học cả cụm.",
          "请给我 là ba thanh 3 nối nhau. Đừng ngồi tính. Nhái trong video, nghe gần qíng gěi wǒ."
        ]
      }
    ],
    vocab: [
      { z: "饭店", p: "fàndiàn", vi: "quán ăn", tier: 30, note: "Hán Việt: phạn điếm. Ngoài đời cũng có thể chỉ khách sạn ăn uống." },
      { z: "服务员", p: "fúwùyuán", vi: "nhân viên phục vụ", tier: 30 },
      { z: "要", p: "yào", vi: "lấy; cần", tier: 30 },
      { z: "给", p: "gěi", vi: "cho", tier: 30 },
      { z: "买单", p: "mǎidān", vi: "tính tiền", tier: 30 },
      { z: "钱", p: "qián", vi: "tiền", tier: 30 },
      { z: "杯", p: "bēi", vi: "ly, cốc", tier: 45 },
      { z: "多少钱", p: "duōshao qián", vi: "bao nhiêu tiền", tier: 45, note: "Buổi 25 sẽ luyện trong lúc mua." }
    ],
    lines: [
      { z: "服务员。", p: "fúwùyuán.", vi: "Làm ơn cho nhân viên (gọi).", tier: 30 },
      { z: "我要茶。", p: "wǒ yào chá.", vi: "Tôi lấy trà.", tier: 30 },
      { z: "请给我水。", p: "qǐng gěi wǒ shuǐ.", vi: "Cho tôi nước.", tier: 30 },
      { z: "买单。", p: "mǎidān.", vi: "Tính tiền.", tier: 30 },
      { z: "我要一杯水。", p: "wǒ yào yì bēi shuǐ.", vi: "Tôi lấy một ly nước.", tier: 45 },
      { z: "这个多少钱？", p: "zhège duōshao qián?", vi: "Cái này bao nhiêu tiền?", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "Trong quán, 'tôi lấy trà' nói?", choices: ["我是茶", "我要茶", "我茶要", "茶是我"], answer: 1, why: "我要 + món." },
      { tier: 30, prompt: "买单 là lúc nào?", choices: ["Lúc vào cửa", "Lúc gọi nhân viên tính tiền", "Lúc hỏi đường", "Lúc chào buổi sáng"], answer: 1, why: "买单 = tính tiền." },
      { tier: 30, prompt: "请给我水, 给 nghĩa là?", choices: ["ăn", "cho", "mua", "đắt"], answer: 1, why: "给 là cho. 请给我 = làm ơn cho tôi." },
      { tier: 30, prompt: "饭店 trong bài này coi là?", choices: ["nhà ga", "chỗ vào ăn", "trường học", "số điện thoại"], answer: 1, why: "Tháng này gặp 饭店 thì hiểu là quán ăn trong bài." },
      { tier: 45, prompt: "一杯水, 一 đọc thành?", choices: ["yī, vì đang đếm", "yì, vì 杯 thanh 1", "yí, vì 杯 thanh 4", "bú"], answer: 1, why: "一 trước thanh 1, 2, 3 đọc yì. 杯 là thanh 1. Buổi 22 gom đủ luật." },
      { tier: 45, prompt: "服务员 là?", choices: ["thực đơn", "nhân viên", "tiền", "cơm"], answer: 1, why: "Người bạn gọi khi cần đồ hoặc tính tiền." }
    ]
  },
  {
    id: 20, week: 3, title: "Ở đâu, đi đâu", mark: "在",
    promise: "Nói mình đang ở nhà, đang đi học, và hỏi một chỗ ở đâu.",
    plan: [
      { m: "7 phút", tier: 30, t: "Xem video 在. Khóa đúng một nghĩa: ở tại." },
      { m: "8 phút", tier: 30, t: "Nói 4 câu: ở nhà, ở đâu, đi học, trường ở đâu." },
      { m: "5 phút", tier: 30, t: "Đọc lỗi trật tự. Thời gian và chỗ đứng trước động từ chính." },
      { m: "5 phút", tier: 30, t: "Quiz." },
      { m: "5 phút", tier: 45, t: "Video hỏi đường ngắn." }
    ],
    videos: [
      { id: "xbnBxfxpWsE", title: "Sáng mai tôi học ở trường", channel: "Tiếng Trung Hoa Thư", min: 8, tier: 30, note: "Giảng tiếng Việt. Lấy 在 và chỗ chốn." },
      { id: "TZ8I_Zk1uj0", title: "Bạn đi đâu", channel: "Trung tâm SOFL", min: 16, tier: 45, note: "Giảng tiếng Việt. Giáo trình cũ. Lấy câu hỏi đường." }
    ],
    blocks: [
      {
        h: "Ở và đi",
        tier: 30,
        lines: [
          "在 + chỗ = ở tại. 我在家。 Tôi ở nhà. 你在哪里？ Bạn ở đâu?",
          "哪里 là đâu. Hai thanh 3 nên miệng đọc ná lǐ, hoặc nói nǎli cho tiếng sau nhẹ. Giọng Bắc Kinh thường nói 哪儿 nǎr. Cùng nghĩa. Tháng này bạn nói 哪里, nghe 哪儿 thì vẫn hiểu.",
          "去 là đi tới. 我去学校。 Tôi đi học / đi tới trường. 学校 ở sau 去, vì nó là đích.",
          "Hỏi chỗ: 学校在哪里？ Trường ở đâu? 饭店在哪里？",
          "怎么 là thế nào. 怎么走 đi bằng cách nào. Để dành nếu còn sức, chưa cần chỉ đường rẽ trái phải."
        ]
      }
    ],
    vocab: [
      { z: "在", p: "zài", vi: "ở", tier: 30, note: "Hán Việt: tại." },
      { z: "哪里", p: "nǎlǐ", vi: "đâu", tier: 30, note: "Đọc ná lǐ vì 3+3, hoặc nǎli." },
      { z: "去", p: "qù", vi: "đi tới", tier: 30 },
      { z: "学校", p: "xuéxiào", vi: "trường", tier: 30, note: "Hán Việt: học hiệu." },
      { z: "怎么", p: "zěnme", vi: "thế nào", tier: 45 },
      { z: "走", p: "zǒu", vi: "đi, bước", tier: 45 }
    ],
    lines: [
      { z: "我在家。", p: "wǒ zài jiā.", vi: "Tôi ở nhà.", tier: 30 },
      { z: "你在哪里？", p: "nǐ zài nǎlǐ?", vi: "Bạn ở đâu?", tier: 30 },
      { z: "我去学校。", p: "wǒ qù xuéxiào.", vi: "Tôi đi tới trường.", tier: 30 },
      { z: "学校在哪里？", p: "xuéxiào zài nǎlǐ?", vi: "Trường ở đâu?", tier: 30 },
      { z: "饭店在哪里？", p: "fàndiàn zài nǎlǐ?", vi: "Quán ăn ở đâu?", tier: 45 },
      { z: "怎么走？", p: "zěnme zǒu?", vi: "Đi thế nào?", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "我在家 nghĩa là?", choices: ["Tôi đi nhà", "Tôi ở nhà", "Nhà của tôi đâu", "Tôi không có nhà"], answer: 1, why: "在 + chỗ = đang ở đó." },
      { tier: 30, prompt: "你在哪里, thêm 吗?", choices: ["Thêm", "Không thêm", "Thêm 什么 nữa", "Đổi 在 thành 是"], answer: 1, why: "哪里 đã là từ hỏi." },
      { tier: 30, prompt: "我去学校, 学校 là?", choices: ["chỗ xuất phát, đứng trước 去", "đích, đứng sau 去", "thời gian", "câu hỏi"], answer: 1, why: "去 + đích." },
      { tier: 30, prompt: "哪儿 và 哪里?", choices: ["Khác nghĩa", "Cùng nghĩa 'đâu', khác giọng", "哪儿 là 'khi nào'", "哪里 là 'thế nào'"], answer: 1, why: "Bạn nói 哪里. Nghe 哪儿 thì vẫn là đâu." },
      { tier: 45, prompt: "怎么走 hỏi điều gì?", choices: ["Mấy giờ", "Đi bằng cách nào", "Bao nhiêu tiền", "Bạn là ai"], answer: 1, why: "怎么 thế nào, 走 đi." },
      { tier: 45, prompt: "学校 có Hán Việt gợi nghĩa là?", choices: ["học + hiệu, trường", "thủy + quả", "điện + thoại", "bằng + hữu"], answer: 0, why: "学 học, 校 hiệu. Miệng vẫn là xuéxiào." }
    ]
  },
  {
    id: 21, week: 3, title: "Rủ một việc", mark: "吧",
    promise: "Rủ được một câu: cùng đi, và đáp được 'được' hoặc 'tôi bận'.",
    plan: [
      { m: "8 phút", tier: 30, t: "Tự dựng hội thoại 6 câu trước khi mở video." },
      { m: "11 phút", tier: 30, t: "Xem video hẹn gặp. Lấy câu rủ và câu hẹn, sửa câu bạn vừa dựng." },
      { m: "6 phút", tier: 30, t: "Nói lại và tick tự kiểm." },
      { m: "5 phút", tier: 30, t: "Quiz." },
      { m: "6 phút", tier: 45, t: "Đáp 好, 可以, và 我很忙. Mỗi câu 5 lần, không nhìn." }
    ],
    videos: [
      { id: "OQAySzLI7wA", title: "Hẹn gặp ở sân bay", channel: "Tiếng Trung Hoa Thư", min: 9, tier: 30, note: "Giảng tiếng Việt. Lấy câu rủ và câu hẹn." }
    ],
    blocks: [
      {
        h: "Một lời rủ",
        tier: 30,
        lines: [
          "吧 đứng cuối câu khiến câu thành lời rủ hoặc lời đề nghị, giọng mềm. 我们走吧。 Mình đi thôi.",
          "我们 là chúng ta, chúng tôi. men nhẹ.",
          "一起 là cùng nhau. 我们一起去吧。 Mình cùng đi nhé.",
          "Đáp nhận: 好的。 Được. Đáp từ chối bằng thứ đã biết: 我今天很忙。 hoặc 我不能去, 能 sẽ chính thức ở buổi 26. Tối nay từ chối bằng 很忙 là đủ.",
          "Đừng thêm từ mới ngoài đoạn này. Buổi ôn mà phình từ thì tuần sau quên sạch."
        ]
      }
    ],
    vocab: [
      { z: "我们", p: "wǒmen", vi: "chúng ta, chúng tôi", tier: 30 },
      { z: "一起", p: "yìqǐ", vi: "cùng nhau", tier: 30, note: "一 trước thanh 3 đọc yì." },
      { z: "吧", p: "ba", vi: "nhé, thôi", tier: 30, note: "Cuối câu rủ. Nhẹ." },
      { z: "好的", p: "hǎo de", vi: "được, vâng", tier: 30 }
    ],
    lines: [
      { z: "现在几点？", p: "xiànzài jǐ diǎn?", vi: "Mấy giờ rồi?", tier: 30 },
      { z: "我们走吧。", p: "wǒmen zǒu ba.", vi: "Mình đi thôi.", tier: 30 },
      { z: "我们一起去学校吧。", p: "wǒmen yìqǐ qù xuéxiào ba.", vi: "Mình cùng đi học nhé.", tier: 30 },
      { z: "好的。", p: "hǎo de.", vi: "Được.", tier: 30 },
      { z: "我今天很忙。", p: "wǒ jīntiān hěn máng.", vi: "Hôm nay tôi bận.", tier: 45 },
      { z: "明天吧。", p: "míngtiān ba.", vi: "Để ngày mai nhé.", tier: 45 }
    ],
    oral: [
      "Tôi hỏi được 现在几点.",
      "Tôi rủ được bằng 吧.",
      "Tôi đáp 好的 hoặc từ chối bằng 我今天很忙.",
      "Tôi không mở sổ từ giữa chừng khi nói đoạn này."
    ],
    quiz: [
      { tier: 30, prompt: "我们走吧, 吧 làm gì?", choices: ["Hỏi có-không như 吗", "Làm câu thành lời rủ", "Phủ định", "Chỉ quá khứ"], answer: 1, why: "吧 cuối câu rủ. 吗 mới là hỏi có-không." },
      { tier: 30, prompt: "Từ chối khéo bằng thứ đã học?", choices: ["我今天很忙", "我是忙今天", "不客气走", "你好吧老师"], answer: 0, why: "Hôm nay tôi bận. Đủ lịch sự cho tháng này." },
      { tier: 30, prompt: "一起 nghĩa là?", choices: ["một mình", "cùng nhau", "ngày mai", "ở nhà"], answer: 1, why: "yìqǐ cùng nhau." },
      { tier: 30, prompt: "好的 là?", choices: ["không được", "được, vâng", "bao nhiêu tiền", "xin lỗi"], answer: 1, why: "Lời nhận ngắn." },
      { tier: 45, prompt: "我们, men đọc?", choices: ["thanh 1 đầy", "nhẹ", "thanh 4", "thanh 3 nhấc"], answer: 1, why: "men thanh nhẹ, giống 们 trong 他们." },
      { tier: 45, prompt: "明天吧 nghĩa gần là?", choices: ["Tối qua nhé", "Để ngày mai nhé", "Mấy giờ ngày mai, hỏi chi tiết", "Ngày mai tôi không đi, chắc chắn"], answer: 1, why: "吧 giữ giọng đề nghị. Muốn từ chối hẳn thì nói 很忙 hoặc 不去." }
    ]
  },
  {
    id: 22, week: 4, title: "Có, không có, một cái", mark: "个",
    promise: "Dùng 个, và đọc đúng 一 cùng 不 khi chúng đổi thanh.",
    plan: [
      { m: "14 phút", tier: 30, t: "Xem video 'có không'. Nhái câu có 有." },
      { m: "8 phút", tier: 30, t: "Học bảng 一 và 不. Nói 6 ví dụ to." },
      { m: "4 phút", tier: 30, t: "Quiz." },
      { m: "6 phút", tier: 45, t: "Đặt 3 câu thật: một anh, một bạn, không có em." }
    ],
    videos: [
      { id: "XpO0udvpPrA", title: "Có hai người con", channel: "Mini88", min: 25, tier: 30, start: 0, end: 1500, note: "Thầy Hiếu. Lấy 有 và lượng từ. Lớp dài, 25 phút rồi dừng." }
    ],
    blocks: [
      {
        h: "个 và hai luật thanh",
        tier: 30,
        lines: [
          "个 là cái, người, đơn vị đếm chung của tháng này. 一个人 một người. 一个朋友 một người bạn.",
          "你有哥哥吗？ đã học. Tối nay thêm số: 我有一个哥哥。",
          "没有 giữ nguyên khi phủ định 有. Không nói 不有."
        ]
      },
      {
        h: "一 và 不",
        tier: 30,
        table: {
          head: ["Khi nào", "Đọc", "Ví dụ"],
          rows: [
            ["一 đếm một mình, hoặc cuối số", "yī", "一, 十一, 二十一"],
            ["一 trước thanh 4", "yí", "一个 yí gè, 一块 yí kuài"],
            ["一 trước thanh 1, 2, 3", "yì", "一天 yì tiān, 一杯 yì bēi, 一点 yì diǎn"],
            ["不 trước thanh 1, 2, 3", "bù", "不忙 bù máng, 不去 bù qù"],
            ["不 trước thanh 4", "bú", "不是 bú shì, 不要 bú yào"]
          ]
        }
      }
    ],
    vocab: [
      { z: "个", p: "gè", vi: "cái; đơn vị đếm chung", tier: 30 },
      { z: "朋友", p: "péngyou", vi: "bạn", tier: 30 },
      { z: "一天", p: "yì tiān", vi: "một ngày", tier: 45, note: "天 thanh 1 nên 一 đọc yì." },
      { z: "不要", p: "bú yào", vi: "đừng; không lấy", tier: 45, note: "要 thanh 4, 不 thành bú." }
    ],
    lines: [
      { z: "我有一个哥哥。", p: "wǒ yǒu yí gè gēge.", vi: "Tôi có một anh trai.", tier: 30 },
      { z: "我有一个朋友。", p: "wǒ yǒu yí gè péngyou.", vi: "Tôi có một người bạn.", tier: 30 },
      { z: "我没有妹妹。", p: "wǒ méiyǒu mèimei.", vi: "Tôi không có em gái.", tier: 30 },
      { z: "你有朋友吗？", p: "nǐ yǒu péngyou ma?", vi: "Bạn có bạn không?", tier: 30 },
      { z: "我不要茶。", p: "wǒ bú yào chá.", vi: "Tôi không lấy trà.", tier: 45 },
      { z: "一天。", p: "yì tiān.", vi: "Một ngày.", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "一个, 一 đọc là?", choices: ["yī", "yí", "yì", "bú"], answer: 1, why: "个 thanh 4, 一 lên thanh 2: yí gè." },
      { tier: 30, prompt: "一天, 一 đọc là?", choices: ["yī", "yí", "yì", "bú"], answer: 2, why: "天 thanh 1, 一 đọc yì." },
      { tier: 30, prompt: "Phủ định của 有 là?", choices: ["不有", "没有", "不是有", "没是"], answer: 1, why: "没有. Không nói 不有." },
      { tier: 30, prompt: "不要, thanh của 不?", choices: ["bù", "bú", "bū", "nhẹ bắt buộc"], answer: 1, why: "要 thanh 4." },
      { tier: 45, prompt: "两个人 hay 二个人?", choices: ["二个人", "两个人", "Cả hai đều sai", "二十个人 mới đúng cho 'hai người'"], answer: 1, why: "Trước 个 dùng 两." },
      { tier: 45, prompt: "我有一个朋友 nghĩa là?", choices: ["Tôi là bạn", "Tôi có một người bạn", "Bạn tôi không có", "Một người là bạn tôi, câu bị động"], answer: 1, why: "有 + số + 个 + danh từ." }
    ]
  },
  {
    id: 23, week: 4, title: "Mệt, lạnh, đẹp", mark: "太…了",
    promise: "Nói cảm giác và mức độ. Khóa cụm 太…了 như một cục, chưa phân tích 了.",
    plan: [
      { m: "9 phút", tier: 30, t: "Xem video tính từ. Lấy 真. Mẫu 太…了 đọc ở phần tiếng Việt." },
      { m: "10 phút", tier: 30, t: "Học 5 tính từ. Nói một câu thật về hôm nay." },
      { m: "8 phút", tier: 30, t: "Luyện 太热了, 太累了 như cụm." },
      { m: "6 phút", tier: 30, t: "Quiz." },
      { m: "6 phút", tier: 45, t: "Nói một câu 很 và một câu 太…了 về hôm nay. Không thêm từ mới." }
    ],
    videos: [
      { id: "gqSISP7O42Y", title: "Táo ở đây thật rẻ", channel: "Tiếng Trung Hoa Thư", min: 9, tier: 30, note: "Giảng tiếng Việt. Lấy tính từ với 真. Mẫu 太…了 nằm ở phần tiếng Việt." }
    ],
    blocks: [
      {
        h: "Tính từ và một cụm than",
        tier: 30,
        lines: [
          "今天很热。 Hôm nay nóng. Vẫn là 很, không phải 是.",
          "太…了 là quá mức, có màu than. 我太累了。 Tôi mệt quá. Học cả khung. 了 trong khung này chưa phải 'đã làm xong'. Buổi 27 mới là 了 hoàn thành. Đừng trộn.",
          "大 to, 小 nhỏ. 好看 đẹp, dễ nhìn. 冷 lạnh. Hán Việt: đại, tiểu, hảo, lãnh.",
          "她很好看。 Câu kể bình thường. 太大了。 Câu than. Hai việc khác nhau."
        ]
      }
    ],
    vocab: [
      { z: "太", p: "tài", vi: "quá", tier: 30 },
      { z: "冷", p: "lěng", vi: "lạnh", tier: 30 },
      { z: "热", p: "rè", vi: "nóng", tier: 30 },
      { z: "累", p: "lèi", vi: "mệt", tier: 30 },
      { z: "大", p: "dà", vi: "to", tier: 30, note: "Hán Việt: đại." },
      { z: "小", p: "xiǎo", vi: "nhỏ", tier: 30, note: "Hán Việt: tiểu." },
      { z: "好看", p: "hǎokàn", vi: "đẹp, dễ nhìn", tier: 45 }
    ],
    lines: [
      { z: "今天很热。", p: "jīntiān hěn rè.", vi: "Hôm nay nóng.", tier: 30 },
      { z: "今天很冷。", p: "jīntiān hěn lěng.", vi: "Hôm nay lạnh.", tier: 30 },
      { z: "我太累了。", p: "wǒ tài lèi le.", vi: "Tôi mệt quá.", tier: 30 },
      { z: "太大了。", p: "tài dà le.", vi: "To quá.", tier: 30 },
      { z: "她很好看。", p: "tā hěn hǎokàn.", vi: "Cô ấy trông ổn / đẹp.", tier: 45 },
      { z: "这个太小了。", p: "zhège tài xiǎo le.", vi: "Cái này nhỏ quá.", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "今天很冷, vì sao không dùng 是?", choices: ["冷 là danh từ", "Câu tính từ dùng 很, không dùng 是", "是 chỉ dùng buổi tối", "冷 là quá khứ"], answer: 1, why: "我是 chỉ nối danh từ. Tính từ: 很冷, hoặc phủ định 不冷." },
      { tier: 30, prompt: "我太累了 thuộc kiểu nào?", choices: ["Đã làm xong một việc", "Than 'quá mệt', học cả cụm 太…了", "Câu hỏi", "Phủ định"], answer: 1, why: "Đừng thấy 了 là nghĩ ngay 'đã'. Khung 太…了 là mức độ." },
      { tier: 30, prompt: "大 và 小?", choices: ["nóng và lạnh", "to và nhỏ", "mệt và vui", "ăn và uống"], answer: 1, why: "大 to, 小 nhỏ." },
      { tier: 30, prompt: "热 nghĩa là?", choices: ["lạnh", "nóng", "nhỏ", "đẹp"], answer: 1, why: "热 nóng. 冷 lạnh." },
      { tier: 45, prompt: "好看 tách nghĩa từng tiếng thì gần là?", choices: ["tốt + nhìn", "ăn + cơm", "ở + nhà", "đi + học"], answer: 0, why: "好 và 看. Cả từ nghĩa là đẹp, dễ nhìn. 看 sẽ là 'xem' ở buổi 27." },
      { tier: 45, prompt: "太小了 là?", choices: ["hơi nhỏ, khách quan", "nhỏ quá", "không nhỏ", "cái nhỏ nhất, so sánh"], answer: 1, why: "太…了 mang giọng quá mức." }
    ]
  },
  {
    id: 24, week: 4, title: "Của tôi, cái này, cái kia", mark: "的",
    promise: "Nói 'sách của tôi', 'cái này', 'cái kia', và hỏi của ai.",
    plan: [
      { m: "8 phút", tier: 30, t: "Xem video 的 và 也. Lấy chỗ đứng của 的." },
      { m: "8 phút", tier: 30, t: "Xoay 的: đồ thì có 的, mẹ thì thôi." },
      { m: "5 phút", tier: 30, t: "Nói 4 câu với một đồ thật trên bàn." },
      { m: "5 phút", tier: 30, t: "Quiz." },
      { m: "8 phút", tier: 60, t: "Chỉ vào một đồ thật, nói 这是我的… và 那是… Không mở video mới." }
    ],
    videos: [
      { id: "rlkouVKDY3M", title: "Bố tôi cũng làm ở bệnh viện", channel: "Tiếng Trung Hoa Thư", min: 8, tier: 30, note: "Giảng tiếng Việt. Lấy 的 và 也." }
    ],
    blocks: [
      {
        h: "的 không phải lúc nào cũng xuất hiện",
        tier: 30,
        lines: [
          "Đồ vật: người + 的 + đồ. 我的书 sách của tôi. Trật tự ngược tiếng Việt. Tiếng Việt nói 'sách của tôi', tiếng Trung nói 'tôi-của sách'.",
          "Người thân: bỏ 的. 我妈妈, không cần 我的妈妈.",
          "这这个 này, 那个 kia. 个 dính vào: zhège, nàge. 这是我的书。 那是你的书吗？",
          "那是谁的？ Cái đó của ai? 谁的 = của ai.",
          "这是什么？ Đây là cái gì? Vẫn không thêm 吗."
        ]
      }
    ],
    vocab: [
      { z: "的", p: "de", vi: "của", tier: 30, note: "Nhẹ. Đứng sau người, trước đồ." },
      { z: "这", p: "zhè", vi: "này", tier: 30 },
      { z: "那", p: "nà", vi: "kia", tier: 30 },
      { z: "书", p: "shū", vi: "sách", tier: 30, note: "sh cuộn lưỡi." },
      { z: "这个", p: "zhège", vi: "cái này", tier: 30 },
      { z: "那个", p: "nàge", vi: "cái kia", tier: 45 }
    ],
    lines: [
      { z: "这是我的书。", p: "zhè shì wǒ de shū.", vi: "Đây là sách của tôi.", tier: 30 },
      { z: "那是你的书吗？", p: "nà shì nǐ de shū ma?", vi: "Kia là sách của bạn không?", tier: 30 },
      { z: "这是什么？", p: "zhè shì shénme?", vi: "Đây là cái gì?", tier: 30 },
      { z: "那是谁的？", p: "nà shì shéi de?", vi: "Cái đó của ai?", tier: 30 },
      { z: "这是我妈妈。", p: "zhè shì wǒ māma.", vi: "Đây là mẹ tôi. Không 的.", tier: 45 },
      { z: "我的朋友也很忙。", p: "wǒ de péngyou yě hěn máng.", vi: "Bạn tôi cũng bận.", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "'Sách của tôi' nói thế nào?", choices: ["书我的", "我的书", "我书的", "的我书"], answer: 1, why: "Người + 的 + đồ." },
      { tier: 30, prompt: "这是我妈妈, 的 thì sao?", choices: ["Bắt buộc 我的妈妈", "Bỏ 的 với người thân", "的 đứng cuối câu", "Đổi 的 thành 吗"], answer: 1, why: "我妈妈 là cách thường nói." },
      { tier: 30, prompt: "那是谁的 hỏi gì?", choices: ["Kia bao nhiêu tiền", "Kia của ai", "Kia ở đâu", "Kia có ngon không"], answer: 1, why: "谁的 = của ai." },
      { tier: 30, prompt: "这个 là?", choices: ["cái kia", "cái này", "cái gì", "của ai"], answer: 1, why: "这 + 个. 那个 là cái kia." },
      { tier: 45, prompt: "这是什么吗, câu này?", choices: ["Đúng", "Thừa 吗", "Thiếu 的", "Phải đảo 是"], answer: 1, why: "什么 đã hỏi. Bỏ 吗." },
      { tier: 45, prompt: "书, phụ âm đầu là?", choices: ["s đầu răng", "sh cuộn", "x", "j"], answer: 1, why: "shū, họ zh ch sh r." }
    ]
  },
  {
    id: 25, week: 4, title: "Bao nhiêu tiền", mark: "块",
    promise: "Hỏi giá, nói đắt quá, và phân biệt mua với bán bằng thanh điệu.",
    plan: [
      { m: "12 phút", tier: 30, t: "Xem video mua hàng. Nhái câu hỏi giá." },
      { m: "8 phút", tier: 30, t: "Luyện 买 / 卖 như một cặp thanh. Nói giá một món thật." },
      { m: "5 phút", tier: 30, t: "Quiz." },
      { m: "6 phút", tier: 45, t: "Hỏi giá một món thật: 这个多少钱？ Rồi đáp bằng 块." },
      { m: "8 phút", tier: 60, t: "Nói một câu mua và một câu bán. 买 và 卖 chỉ khác thanh." }
    ],
    videos: [
      { id: "N1T-h3WxUjQ", title: "Hỏi giá", channel: "Mini88", min: 25, tier: 30, start: 0, end: 1500, note: "Thầy Hiếu. Lấy 多少钱 và 块. Lớp dài, 25 phút rồi dừng." }
    ],
    blocks: [
      {
        h: "Giá thì nói thế này",
        tier: 30,
        lines: [
          "这个多少钱？ Cái này bao nhiêu tiền? 多少 cho lượng không nhỏ, như giá tiền. Khác 几 của số giờ.",
          "二十五块。 25 đồng. 块 là cách nói khẩu ngữ của nhân dân tệ. 一块 đọc yí kuài vì 块 thanh 4.",
          "太贵了。 Đắt quá. Cụm 太…了 của buổi 23. 便宜 là rẻ, tiếng sau nhẹ: piányi.",
          "买 mǎi thanh 3 là mua. 卖 mài thanh 4 là bán. Cặp này chỉ khác thanh. Nói chậm.",
          "太贵了。我不要。 Tôi không lấy. 不要 đọc bú yào."
        ]
      }
    ],
    vocab: [
      { z: "买", p: "mǎi", vi: "mua", tier: 30, note: "Thanh 3. Cặp với 卖." },
      { z: "卖", p: "mài", vi: "bán", tier: 30, note: "Thanh 4." },
      { z: "块", p: "kuài", vi: "đồng, khẩu ngữ", tier: 30 },
      { z: "贵", p: "guì", vi: "đắt", tier: 30, note: "Hán Việt: quý." },
      { z: "便宜", p: "piányi", vi: "rẻ", tier: 30 },
      { z: "多少钱", p: "duōshao qián", vi: "bao nhiêu tiền", tier: 30 }
    ],
    lines: [
      { z: "这个多少钱？", p: "zhège duōshao qián?", vi: "Cái này bao nhiêu tiền?", tier: 30 },
      { z: "二十五块。", p: "èrshíwǔ kuài.", vi: "25 đồng.", tier: 30 },
      { z: "太贵了。", p: "tài guì le.", vi: "Đắt quá.", tier: 30 },
      { z: "我不要。", p: "wǒ bú yào.", vi: "Tôi không lấy.", tier: 30 },
      { z: "这个很便宜。", p: "zhège hěn piányi.", vi: "Cái này rẻ.", tier: 45 },
      { z: "你买什么？", p: "nǐ mǎi shénme?", vi: "Bạn mua gì?", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "买 và 卖 khác nhau ở?", choices: ["Phụ âm", "Thanh 3 và thanh 4", "vần a và ü", "Một bên là thanh nhẹ"], answer: 1, why: "mǎi mua, mài bán." },
      { tier: 30, prompt: "Hỏi giá bằng câu nào?", choices: ["这个几钱？", "这个多少钱？", "这个是钱吗？", "钱这个多大？"], answer: 1, why: "多少钱. 几 không dùng cho giá." },
      { tier: 30, prompt: "一块, 一 đọc?", choices: ["yī", "yí", "yì", "bú"], answer: 1, why: "块 thanh 4." },
      { tier: 30, prompt: "太贵了。我不要。 là tình huống nào?", choices: ["Xin lỗi vì đến muộn", "Chê đắt và không lấy", "Hỏi đường", "Giới thiệu tên"], answer: 1, why: "Đắt quá, tôi không lấy." },
      { tier: 45, prompt: "便宜 đọc?", choices: ["pián yí, cả hai đầy", "piányi, tiếng sau nhẹ", "biànyì", "péngyi"], answer: 1, why: "yi nhẹ." },
      { tier: 45, speak: "买", prompt: "Nghe. Từ này là?", choices: ["bán", "mua", "đắt", "rẻ"], answer: 1, why: "买 mǎi là mua. Nếu giọng máy không rõ thanh 3, tin dấu thanh hơn tin máy." }
    ]
  },
  {
    id: 26, week: 4, title: "Muốn, biết, được phép", mark: "会",
    promise: "Tách 想, 要, 会, 能, 可以. Nói được 'tôi nói được một chút tiếng Trung'.",
    plan: [
      { m: "12 phút", tier: 30, t: "Xem video 会. 能 và 可以 nằm ở phần tiếng Việt." },
      { m: "10 phút", tier: 30, t: "Đọc bảng năm từ. Đặt một câu cho mỗi từ, dù câu rất ngắn." },
      { m: "4 phút", tier: 30, t: "Khóa câu 我会说一点汉语。" },
      { m: "4 phút", tier: 30, t: "Quiz." },
      { m: "5 phút", tier: 45, t: "Nói 我会说一点汉语 tám lần, không nhìn." }
    ],
    videos: [
      { id: "2AEBhTxaomU", title: "Tôi biết nói tiếng Trung", channel: "Khoai Tây yêu tiếng Trung", min: 17, tier: 30, note: "Cô người Việt. Giáo trình cũ. Lấy 会. 能 và 可以 nằm ở phần tiếng Việt." }
    ],
    blocks: [
      {
        h: "Năm từ không phải một từ",
        tier: 30,
        table: {
          head: ["Từ", "Việc nó làm", "Câu"],
          rows: [
            ["想", "muốn, theo ý", "我想喝茶。"],
            ["要", "lấy, cần, sẽ gọi món", "我要这个。"],
            ["会", "biết làm, kỹ năng đã học", "我会说汉语。"],
            ["能", "làm được vì điều kiện", "我今天不能去。"],
            ["可以", "được phép, hoặc 'được'", "可以。"]
          ]
        }
      },
      {
        h: "Câu của tháng này",
        tier: 30,
        lines: [
          "我会说一点汉语。 Tôi nói được một chút tiếng Trung. 一点 một chút, 一 đọc yì vì 点 thanh 3.",
          "汉语 là tiếng Trung. Ngoài đời 中文 cũng rất hay gặp, cùng việc. Nói một từ: 汉语.",
          "我今天不能去。 Hôm nay tôi không đi được. 能 phủ định là 不能, 不 giữ bù vì 能 thanh 2.",
          "可以 một mình là 'được'. 不可以 là không được."
        ]
      }
    ],
    vocab: [
      { z: "会", p: "huì", vi: "biết cách", tier: 30 },
      { z: "能", p: "néng", vi: "có thể, làm được", tier: 30 },
      { z: "可以", p: "kěyǐ", vi: "được", tier: 30, note: "Đọc ké yǐ." },
      { z: "说", p: "shuō", vi: "nói", tier: 30 },
      { z: "汉语", p: "Hànyǔ", vi: "tiếng Trung", tier: 30 },
      { z: "一点", p: "yìdiǎn", vi: "một chút", tier: 30 },
      { z: "英语", p: "Yīngyǔ", vi: "tiếng Anh", tier: 45 }
    ],
    lines: [
      { z: "我会说一点汉语。", p: "wǒ huì shuō yìdiǎn Hànyǔ.", vi: "Tôi nói được một chút tiếng Trung.", tier: 30 },
      { z: "我想喝茶。", p: "wǒ xiǎng hē chá.", vi: "Tôi muốn uống trà.", tier: 30 },
      { z: "我要这个。", p: "wǒ yào zhège.", vi: "Tôi lấy cái này.", tier: 30 },
      { z: "我今天不能去。", p: "wǒ jīntiān bù néng qù.", vi: "Hôm nay tôi không đi được.", tier: 30 },
      { z: "可以。", p: "kěyǐ.", vi: "Được. Đọc ké yǐ.", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "'Tôi biết nói tiếng Trung' dùng từ nào?", choices: ["能说, vì thời tiết cho phép", "会说, vì là kỹ năng", "可以人", "是说"], answer: 1, why: "会 cho kỹ năng đã học. 能 cho điều kiện. 可以 cho phép." },
      { tier: 30, prompt: "我今天不能去, vì sao dùng 能?", choices: ["Đi học là một kỹ năng mới", "Hôm nay điều kiện không cho đi", "能 nghĩa là muốn uống", "能 là thanh nhẹ"], answer: 1, why: "不能去 = không thể đi, do việc hôm nay, không phải 'chưa học cách đi'." },
      { tier: 30, prompt: "一点, 一 đọc là?", choices: ["yī", "yí", "yì", "bú"], answer: 2, why: "点 thanh 3, 一 đọc yì." },
      { tier: 30, prompt: "可以 đứng một mình nghĩa là?", choices: ["không", "được", "ngày mai", "bao nhiêu"], answer: 1, why: "Đáp ngắn: được. Nhớ đọc ké yǐ." },
      { tier: 45, prompt: "我要这个 gần với tình huống nào?", choices: ["Giới thiệu quốc tịch", "Chỉ vào món và bảo lấy món đó", "Hỏi mấy giờ", "Xin lỗi"], answer: 1, why: "要这个 = lấy cái này." },
      { tier: 45, prompt: "汉语 và 中文 ở mức tháng này?", choices: ["Trái nghĩa", "Cùng chỉ tiếng Trung trong lời nói hàng ngày", "汉语 là người Trung, 中文 là chữ Nhật", "Một bên là thanh nhẹ"], answer: 1, why: "Nói 汉语 là đủ. Nghe 中文 thì hiểu cùng việc." }
    ]
  },
  {
    id: 27, week: 4, title: "Hôm qua tôi đã", mark: "了",
    promise: "Nói một việc đã làm hôm qua, và phủ định việc đó bằng 没, không bằng 不了.",
    plan: [
      { m: "10 phút", tier: 30, t: "Xem video 了. Chỉ lấy kiểu 'làm xong'." },
      { m: "8 phút", tier: 30, t: "Nói 3 câu thật về hôm qua. Đúng thì giữ, sai thì bỏ." },
      { m: "6 phút", tier: 30, t: "Luyện cặp 看了 / 没看." },
      { m: "6 phút", tier: 30, t: "Quiz." }
    ],
    videos: [
      { id: "aJrbs_uo2ig", title: "Hôm qua trời có tuyết", channel: "Tiếng Trung Hoa Thư", min: 7, tier: 30, note: "Giảng tiếng Việt. Lấy 了 của việc đã xong." }
    ],
    blocks: [
      {
        h: "Một kiểu 了 thôi",
        tier: 30,
        lines: [
          "Hôm nay chỉ học 了 hoàn thành: việc đã xảy ra. Mẫu: chủ ngữ + động từ + 了 + đồ. 我吃了米饭。 Tôi đã ăn cơm. 昨天我看了电影。 Hôm qua tôi đã xem phim.",
          "Phủ định thì đổi hệ: dùng 没, bỏ 了. 我没看电影。 Tôi chưa xem / đã không xem phim. Đừng nói 我不看了电影.",
          "了 trong 太累了 hôm trước là một khung khác. Cùng chữ, khác việc. Thấy 太…了 thì nghĩ 'quá'. Thấy động từ + 了 + đồ thì nghĩ 'đã làm'.",
          "看 là xem. 电影 là phim. 听 là nghe, để dành nếu còn sức."
        ]
      }
    ],
    vocab: [
      { z: "了", p: "le", vi: "đã, việc xong", tier: 30, note: "Nhẹ. Mẫu buổi này: động từ + 了 + đồ." },
      { z: "看", p: "kàn", vi: "xem", tier: 30 },
      { z: "电影", p: "diànyǐng", vi: "phim", tier: 30, note: "Hán Việt: điện ảnh." },
      { z: "没", p: "méi", vi: "chưa, không (với việc đã/chưa xảy ra)", tier: 30 },
      { z: "听", p: "tīng", vi: "nghe", tier: 45 }
    ],
    lines: [
      { z: "我吃了米饭。", p: "wǒ chī le mǐfàn.", vi: "Tôi đã ăn cơm.", tier: 30 },
      { z: "昨天我看了电影。", p: "zuótiān wǒ kàn le diànyǐng.", vi: "Hôm qua tôi đã xem phim.", tier: 30 },
      { z: "我没看电影。", p: "wǒ méi kàn diànyǐng.", vi: "Tôi không xem phim.", tier: 30 },
      { z: "你喝了吗？", p: "nǐ hē le ma?", vi: "Bạn uống chưa?", tier: 45 },
      { z: "我没喝。", p: "wǒ méi hē.", vi: "Tôi chưa uống.", tier: 45 },
      { z: "我太累了。", p: "wǒ tài lèi le.", vi: "Câu này không phải quá khứ. Đây là 'quá mệt'.", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "Câu đúng cho 'hôm qua tôi xem phim rồi'?", choices: ["昨天我看了电影。", "昨天我了看电影。", "昨天我看电了影。", "昨天我是看了。"], answer: 0, why: "Động từ + 了 + tân ngữ: 看了电影." },
      { tier: 30, prompt: "'Tôi không xem phim' theo kiểu đã/chưa?", choices: ["我不看了电影。", "我没看电影。", "我不是看电影了。", "我没有了电影看不。"], answer: 1, why: "没 + động từ, không thêm 了." },
      { tier: 30, prompt: "太累了 và 看了电影, 了?", choices: ["Cùng một việc ngữ pháp", "Hai việc khác nhau, đừng trộn", "Đều là câu hỏi", "Đều đọc tài"], answer: 1, why: "太…了 là than. 看了 là việc đã xảy ra." },
      { tier: 30, prompt: "电影 nghĩa là?", choices: ["điện thoại", "phim", "trường", "tiền"], answer: 1, why: "diànyǐng, điện ảnh, tức phim." },
      { tier: 45, prompt: "你喝了吗 hỏi?", choices: ["Bạn có muốn uống không, tương lai", "Bạn uống chưa", "Bạn là nước không", "Uống ở đâu"], answer: 1, why: "了 + 吗 hỏi việc đã xảy ra chưa." },
      { tier: 45, prompt: "昨天 đứng ở đâu trong 昨天我看了电影?", choices: ["Cuối câu bắt buộc", "Đầu câu hoặc sau chủ ngữ, trước động từ", "Giữa 看 và 了", "Sau 电影"], answer: 1, why: "Thời gian không đứng sau tân ngữ trong mẫu này." }
    ]
  },
  {
    id: 28, week: 4, title: "Mười lăm chữ đầu", mark: "人",
    promise: "Nhận mặt 15 chữ, biết nghĩa, và viết được 8 chữ đơn trong không khí.",
    plan: [
      { m: "11 phút", tier: 30, t: "Xem video nét của cô Khoai Tây. Dừng, viết bằng ngón tay lên bàn." },
      { m: "8 phút", tier: 30, t: "Thuộc 8 chữ dễ: một, hai, ba, người, to, miệng, tốt, trung." },
      { m: "6 phút", tier: 30, t: "Quiz nhận mặt." },
      { m: "16 phút", tier: 45, t: "Video cách nhớ chữ. Không thêm chữ ngoài 15 chữ của buổi." },
      { m: "8 phút", tier: 60, t: "Viết lại 8 chữ dễ, không nhìn. Nét nào quên thì mở lại video nét, đừng đoán." }
    ],
    videos: [
      { id: "HI3WbiEXVJo", title: "Quy tắc nét", channel: "Khoai Tây yêu tiếng Trung", min: 11, tier: 30, note: "Cô người Việt. Xem thứ tự nét trong video, rồi viết 15 chữ của buổi. Đừng đoán nét." },
      { id: "tODE90ncH1A", title: "Cách nhớ chữ", channel: "Khoai Tây yêu tiếng Trung", min: 16, tier: 45, note: "Cô người Việt. Cách nhớ, không thêm chữ mới ngoài 15 chữ của buổi." }
    ],
    blocks: [
      {
        h: "Viết ít, nhận mặt đúng",
        tier: 30,
        lines: [
          "Tháng này chữ là để nhận, không phải để viết văn. Mỗi chữ: nói âm, nói nghĩa, nhìn nét trong video.",
          "Tám chữ viết tay được, vì nét ít. Viết trên giấy một lần rồi thôi, đừng chép phạt.",
          "一 một nét ngang, trái sang phải. 二 nét trên rồi nét dưới. 三 từ trên xuống. 人 nét phẩy trái rồi nét mác phải. 大 một nét ngang, rồi như 人. 口 nét sổ trái, nét ngang-gập cạnh trên và phải, rồi nét ngang đáy. 木 nét ngang, nét sổ, nét phẩy, nét mác. 中 viết 口 trước, nét sổ xuyên giữa sau.",
          "日 月 水 火 我 你 好: xem thứ tự nét trong video. Đừng đoán. Đoán nét là tập một thói khó bỏ."
        ]
      }
    ],
    vocab: [
      { z: "一", p: "yī", vi: "một", tier: 30, sv: "nhất" },
      { z: "二", p: "èr", vi: "hai", tier: 30, sv: "nhị" },
      { z: "三", p: "sān", vi: "ba", tier: 30, sv: "tam" },
      { z: "人", p: "rén", vi: "người", tier: 30, sv: "nhân" },
      { z: "大", p: "dà", vi: "to", tier: 30, sv: "đại" },
      { z: "口", p: "kǒu", vi: "miệng", tier: 30, sv: "khẩu" },
      { z: "好", p: "hǎo", vi: "tốt", tier: 30, sv: "hảo" },
      { z: "中", p: "zhōng", vi: "giữa; Trung", tier: 30, sv: "trung" },
      { z: "日", p: "rì", vi: "ngày; mặt trời", tier: 45, sv: "nhật" },
      { z: "月", p: "yuè", vi: "tháng; mặt trăng", tier: 45, sv: "nguyệt" },
      { z: "水", p: "shuǐ", vi: "nước", tier: 45, sv: "thủy" },
      { z: "火", p: "huǒ", vi: "lửa", tier: 45, sv: "hỏa" },
      { z: "木", p: "mù", vi: "gỗ, cây", tier: 45, sv: "mộc" }
    ],
    lines: [
      { z: "一 二 三", p: "yī èr sān", vi: "một, hai, ba", tier: 30 },
      { z: "人", p: "rén", vi: "người", tier: 30 },
      { z: "大 小", p: "dà xiǎo", vi: "to, nhỏ", tier: 30 },
      { z: "中国", p: "Zhōngguó", vi: "Trung Quốc", tier: 30 },
      { z: "水", p: "shuǐ", vi: "nước", tier: 45 },
      { z: "好", p: "hǎo", vi: "tốt", tier: 45 }
    ],
    quiz: [
      { tier: 30, prompt: "人 nghĩa là?", choices: ["miệng", "người", "gỗ", "lửa"], answer: 1, why: "rén, người. 口 mới là miệng." },
      { tier: 30, prompt: "中 trong 中国 gợi Hán Việt nào?", choices: ["trung", "thủy", "hỏa", "nhật"], answer: 0, why: "中 trung, 国 quốc." },
      { tier: 30, prompt: "Viết 三, thứ tự nét?", choices: ["Dưới lên trên", "Trên xuống dưới, ba nét ngang", "Một nét sổ", "Viết vòng tròn"], answer: 1, why: "Ba nét ngang, từ trên xuống." },
      { tier: 30, prompt: "月 đã gặp với nghĩa nào?", choices: ["chỉ là mặt trăng, không phải tháng", "tháng hoặc mặt trăng", "ngày trong tuần", "tiền"], answer: 1, why: "yuè. Trong ngày tháng, 月 là tháng." },
      { tier: 45, prompt: "水 và 火?", choices: ["nước và lửa", "gỗ và miệng", "người và to", "một và hai"], answer: 0, why: "水 thủy, 火 hỏa." },
      { tier: 45, prompt: "Với chữ khó như 我, 你, việc đúng là?", choices: ["Đoán nét cho nhanh", "Xem video rồi mới viết theo", "Bỏ âm, chỉ vẽ cho đẹp", "Viết 50 lần ngay tối nay"], answer: 1, why: "Thứ tự nét học từ mắt, không đoán." }
    ]
  },
  {
    id: 29, week: 4, title: "Ba tình huống", mark: "说",
    promise: "Đi hết quán ăn, làm quen, và một lời rủ. Được nhìn câu mẫu sau khi đã thử.",
    plan: [
      { m: "6 phút", tier: 30, t: "Nói tình huống 1 không nhìn mẫu. Kẹt từ nào thì nhớ từ đó." },
      { m: "6 phút", tier: 30, t: "Tình huống 2, rồi tình huống 3." },
      { m: "8 phút", tier: 30, t: "Mở câu mẫu, nói lại đúng câu bạn vừa kẹt." },
      { m: "5 phút", tier: 30, t: "Quiz nhẹ." },
      { m: "9 phút", tier: 30, t: "Video tạm biệt. Nếu buổi 8 đã xem rồi, chỉ nhái lại 再见." }
    ],
    videos: [
      { id: "M0_nliT_wxQ", title: "Vào quán", channel: "Tiếng Trung Hoa Thư", min: 9, tier: 30, note: "Tình huống 1. Xem rồi nói lại, không nhìn chữ." },
      { id: "mcmJCnWwuAI", title: "Gặp người mới", channel: "Tiếng Trung Hoa Thư", min: 7, tier: 30, note: "Tình huống 2. Chào và nói tên." },
      { id: "OQAySzLI7wA", title: "Rủ đi", channel: "Tiếng Trung Hoa Thư", min: 9, tier: 30, note: "Tình huống 3. Rủ và hẹn chỗ." }
    ],
    blocks: [
      {
        h: "Cách làm ba tình huống",
        tier: 30,
        lines: [
          "Đọc tình huống. Gập câu mẫu. Nói bằng từ bạn có. Im lặng vài giây cũng được, đừng chuyển sang tiếng Việt.",
          "Sau đó mới mở mẫu. Sửa một câu, không sửa cả bài cho đến khi thuộc như kịch.",
          "Câu mẫu cố ý chỉ dùng từ trong tháng. Nếu bạn nói được ý khác, vẫn đúng, miễn thanh không đổ."
        ]
      }
    ],
    scenes: [
      {
        title: "Vào quán",
        you: "Bạn chào nhân viên, lấy một trà, hỏi giá, nói đắt quá nhưng vẫn lấy, rồi tính tiền.",
        model: [
          { z: "你好。", p: "nǐ hǎo.", vi: "Xin chào." },
          { z: "我要一杯茶。", p: "wǒ yào yì bēi chá.", vi: "Tôi lấy một ly trà." },
          { z: "这个多少钱？", p: "zhège duōshao qián?", vi: "Bao nhiêu tiền?" },
          { z: "太贵了。我要。", p: "tài guì le. wǒ yào.", vi: "Đắt quá. Tôi vẫn lấy." },
          { z: "买单。谢谢。", p: "mǎidān. xièxie.", vi: "Tính tiền. Cảm ơn." }
        ]
      },
      {
        title: "Gặp người mới",
        you: "Chào, nói tên, nói mình là người Việt Nam, nói tuổi hoặc bỏ qua, nói biết một chút tiếng Trung.",
        model: [
          { z: "你好。我叫 Trí。", p: "nǐ hǎo. wǒ jiào Trí.", vi: "Xin chào. Tôi tên là Trí." },
          { z: "我是越南人。", p: "wǒ shì Yuènánrén.", vi: "Tôi là người Việt Nam." },
          { z: "我二十五岁。", p: "wǒ èrshíwǔ suì.", vi: "Tôi 25 tuổi." },
          { z: "我会说一点汉语。", p: "wǒ huì shuō yìdiǎn Hànyǔ.", vi: "Tôi nói được một chút tiếng Trung." },
          { z: "很高兴认识你。", p: "hěn gāoxìng rènshi nǐ.", vi: "Rất vui được gặp bạn." }
        ]
      },
      {
        title: "Rủ đi",
        you: "Hỏi mấy giờ, rủ cùng đi, đối phương bận, bạn dời sang ngày mai.",
        model: [
          { z: "现在几点？", p: "xiànzài jǐ diǎn?", vi: "Mấy giờ rồi?" },
          { z: "我们一起去吧。", p: "wǒmen yìqǐ qù ba.", vi: "Mình cùng đi nhé." },
          { z: "我今天不能去。", p: "wǒ jīntiān bù néng qù.", vi: "Hôm nay tôi không đi được." },
          { z: "明天吧。", p: "míngtiān ba.", vi: "Để ngày mai." },
          { z: "好的。再见。", p: "hǎo de. zàijiàn.", vi: "Được. Tạm biệt." }
        ]
      }
    ],
    vocab: [],
    lines: [
      { z: "我要一杯茶。", p: "wǒ yào yì bēi chá.", vi: "Tôi lấy một ly trà.", tier: 30 },
      { z: "我会说一点汉语。", p: "wǒ huì shuō yìdiǎn Hànyǔ.", vi: "Tôi nói được một chút.", tier: 30 },
      { z: "明天吧。", p: "míngtiān ba.", vi: "Ngày mai nhé.", tier: 30 },
      { z: "买单。", p: "mǎidān.", vi: "Tính tiền.", tier: 30 }
    ],
    oral: [
      "Tôi đi hết tình huống quán mà không mở mẫu ngay từ đầu.",
      "Tôi nói được câu quốc tịch không nhìn chữ.",
      "Tôi rủ bằng 吧 và đáp được một lời từ chối.",
      "Tôi biết một câu mình còn sai thanh, để mang vào bài kiểm tra ngày mai như việc cần ôn, không phải như thất bại."
    ],
    quiz: [
      { tier: 30, prompt: "我要一杯茶, 一 đọc?", choices: ["yī", "yí", "yì", "bú"], answer: 2, why: "杯 thanh 1, 一 đọc yì." },
      { tier: 30, prompt: "Đối phương nói 我今天不能去. Bạn có thể đáp?", choices: ["多少钱", "明天吧", "对不起是老师", "两点半米饭"], answer: 1, why: "Dời sang ngày mai là đủ hội thoại." },
      { tier: 30, prompt: "买单 đứng ở đâu trong quán?", choices: ["Lúc chào tên", "Lúc trả tiền", "Lúc hỏi quốc tịch", "Lúc nói giờ"], answer: 1, why: "Tính tiền." },
      { tier: 30, prompt: "很高兴认识你 dùng khi?", choices: ["Trả tiền", "Mới gặp, vui được quen", "Hỏi giờ", "Chê đắt"], answer: 1, why: "Câu của lúc làm quen." },
      { tier: 45, prompt: "Việc của buổi này là?", choices: ["Thêm 30 từ mới", "Nói lại bằng từ đã có", "Viết một đoạn 200 chữ", "Học HSK 3"], answer: 1, why: "Ôn nói. Không mở chủ đề mới." },
      { tier: 45, prompt: "我们一起去吧 thiếu đích thì vẫn?", choices: ["Sai ngữ pháp hoàn toàn", "Nghe được, nếu hai người đang biết đi đâu", "Phải thêm 吗", "Phải đổi 吧 thành 了"], answer: 1, why: "Nếu ngữ cảnh đã rõ, đích có thể không nói lại." }
    ]
  },
  {
    id: 30, week: 4, title: "Bài kiểm tra tháng", mark: "试",
    exam: true,
    promise: "20 câu. Biết phần nền đã chắc chỗ nào. Không học thêm từ mới tối nay.",
    plan: [
      { m: "25 phút", tier: 30, t: "Làm 20 câu. Không mở sổ từ. Xong mới xem đáp án." },
      { m: "5 phút", tier: 30, t: "Ghi lại câu sai thành một danh sách, tối đa 5 dòng." },
      { m: "15 phút", tier: 45, t: "Nếu muốn nghe trước, xem video ôn ngữ pháp của cô Khoai Tây, rồi mới làm bài." },
      { m: "10 phút", tier: 60, t: "Nói lại đoạn tự giới thiệu một lần, thu âm." }
    ],
    videos: [
      { id: "fpndEC2ZFCQ", title: "Ôn ngữ pháp sơ cấp", channel: "Khoai Tây yêu tiếng Trung", min: 19, tier: 45, note: "Cô người Việt. Nghe để nhớ khung câu. Không trùng từng chữ với bài kiểm tra." }
    ],
    blocks: [
      {
        h: "Cách chấm",
        tier: 30,
        lines: [
          "17–20 câu: đủ chắc để mở HSK 1 trên trang chủ. Phần nền chưa phải đề HSK.",
          "12–16 câu: làm lại buổi 7, buổi 14 và buổi 21, rồi bấm làm lại bài này. Đừng mở thêm từ.",
          "Dưới 12: tuần 1 còn hổng. HSK 1 chưa mở. Quay lại đúng buổi của câu sai, nhất là thanh, ü, và 是 với tính từ.",
          "Điểm nằm trên máy bạn. Không có bảng xếp hạng, không có tài khoản."
        ]
      },
      {
        h: "Sang HSK 1",
        tier: 30,
        lines: [
          "Mở cấp HSK 1 trên trang chủ. Mỗi bài bốn tối. Video là giáo viên người Việt.",
          "HSK 1 mới khoảng 300 từ và khoảng 80–150 giờ từ số 0. 30 tối nền mới khoảng 22 giờ.",
          "Bấm xong bài kiểm tra này chưa phải đỗ HSK 1."
        ]
      }
    ],
    vocab: [],
    lines: [
      { z: "你好。我叫 Trí。我是越南人。", p: "nǐ hǎo. wǒ jiào Trí. wǒ shì Yuènánrén.", vi: "Đoạn tối thiểu.", tier: 30 },
      { z: "我会说一点汉语。", p: "wǒ huì shuō yìdiǎn Hànyǔ.", vi: "Tôi nói được một chút tiếng Trung.", tier: 30 }
    ],
    quiz: [
      { tier: 30, speak: "妈", prompt: "Nghe. Chọn nghĩa.", choices: ["ngựa", "mẹ", "mắng", "tê"], answer: 1, why: "妈 mā thanh 1, mẹ." },
      { tier: 30, prompt: "你好 thực tế đọc gần với?", choices: ["nǐ hǎo, nhấc cả hai", "ní hǎo", "nī hāo", "nì hào"], answer: 1, why: "Luật 3+3." },
      { tier: 30, prompt: "去 viết qù. Người Việt cần tránh đọc thành?", choices: ["ü", "cu", "thanh 4", "một tiếng"], answer: 1, why: "u sau q là ü, không phải cu." },
      { tier: 30, prompt: "Câu đúng?", choices: ["我是忙。", "我很忙。", "我忙是。", "是我忙很。"], answer: 1, why: "Tính từ đi với 很." },
      { tier: 30, prompt: "Câu đúng?", choices: ["我是越南。", "我是越南人。", "越南我是人。", "我人是越南。"], answer: 1, why: "我是 + nước + 人." },
      { tier: 30, prompt: "Tôi 25 tuổi.", choices: ["我二十五岁。", "我二十五年。", "我两十五岁。", "岁我二十五。"], answer: 0, why: "Tuổi dùng 岁. 25 dùng 二, không dùng 两." },
      { tier: 30, prompt: "Hai người bạn.", choices: ["二个朋友", "两个朋友", "二十个朋友, nếu chỉ hai", "两朋友个"], answer: 1, why: "两 + 个." },
      { tier: 30, prompt: "Hỏi tuổi người lớn.", choices: ["你几岁？", "你多大？", "你是岁吗？", "你岁什么？"], answer: 1, why: "你多大. 几岁 dùng với trẻ em." },
      { tier: 30, prompt: "我没有姐姐 nghĩa là?", choices: ["Tôi là chị", "Tôi không có chị", "Chị tôi bận", "Tôi có một chị"], answer: 1, why: "没有 = không có." },
      { tier: 30, prompt: "3:30.", choices: ["半三点", "三点半", "三点三十点", "三十三"], answer: 1, why: "Số giờ + 点 + 半." },
      { tier: 30, prompt: "我想喝茶.", choices: ["Tôi đang bán trà", "Tôi muốn uống trà", "Tôi không có trà", "Trà quá đắt"], answer: 1, why: "想 + 喝." },
      { tier: 30, prompt: "太贵了.", choices: ["Rẻ quá", "Đắt quá", "Cho tôi tính tiền, lịch sự", "Không có tiền"], answer: 1, why: "贵 đắt, trong khung 太…了." },
      { tier: 30, prompt: "卖 là?", choices: ["mua, thanh 3", "bán, thanh 4", "đắt, thanh 4", "rẻ"], answer: 1, why: "卖 mài bán. 买 mǎi mua." },
      { tier: 30, prompt: "Sách của tôi.", choices: ["书我的", "我的书", "我书", "的书我"], answer: 1, why: "我的书. Người thân thì mới bỏ 的." },
      { tier: 30, prompt: "我会说一点汉语.", choices: ["Tôi là người Trung Quốc", "Tôi nói được một chút tiếng Trung", "Tôi muốn một quyển sách", "Tôi không được nói"], answer: 1, why: "会 là kỹ năng. 一点 một chút. 汉语 tiếng Trung." },
      { tier: 30, prompt: "Hôm qua tôi không xem phim.", choices: ["昨天我没看电影。", "昨天我不看了电影。", "昨天我看了没电影。", "昨天没有我是电影。"], answer: 0, why: "没 + động từ, không thêm 了." },
      { tier: 30, prompt: "一个, thanh của 一?", choices: ["yī", "yí", "yì", "bù"], answer: 1, why: "个 thanh 4 nên yí." },
      { tier: 30, prompt: "不是, thanh của 不?", choices: ["bù", "bú", "yí", "nhẹ bắt buộc trong mọi từ"], answer: 1, why: "是 thanh 4, 不 thành bú." },
      { tier: 30, prompt: "人 là chữ nào?", choices: ["miệng", "người", "nước", "lửa"], answer: 1, why: "人 rén người." },
      { tier: 30, prompt: "再见 dùng để?", choices: ["xin lỗi", "cảm ơn", "tạm biệt", "hỏi giờ"], answer: 2, why: "zàijiàn tạm biệt." }
    ]
  }
];
