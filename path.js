/* Lộ trình HSK 3.0. Giờ là dải lập kế hoạch (không phải bảng giờ của CTI).
   Từ và chữ theo đề cương tháng 11/2025, có hiệu lực tháng 7/2026. */
const PATH_STAGES = [
  {
    id: "nen",
    title: "Nền",
    kicker: "Trước khi vào cấp",
    words: "Pinyin và bốn thanh",
    hours: "30 tối · khoảng 22 giờ nếu mỗi tối 45 phút",
    months: "1 tháng",
    blurb: [
      "Người chưa biết gì bắt đầu ở buổi 1. Tuần 1 chỉ tai và miệng: bốn thanh, rồi vần, rồi phụ âm. Chưa chữ, chưa hội thoại.",
      "Tuần 2 đến 4 mỗi tối một mẫu câu. Video giáo trình có nhiều câu hơn bài. Câu không nằm trong phần tiếng Việt thì bỏ qua.",
      "Xong 30 buổi rồi hãy mở HSK 1. Vòng này lấy câu để nói được. Vòng HSK 1 học lại đúng thứ tự sách. Âm sai mà nhảy cóp từ thì các cấp sau nghe không ra."
    ]
  },
  {
    id: "hsk1",
    title: "HSK 1",
    kicker: "Sơ cấp",
    words: "300 từ, nhận khoảng 246 chữ",
    hours: "80–150 giờ từ số 0, gồm cả phần nền",
    months: "khoảng 4–6 tháng ở mức 45 phút mỗi tối",
    blurb: [
      "Giáo trình mới có 15 bài. Trang này dạy đúng 15 bài đó, cộng một bài thi thử.",
      "Mỗi bài là 4 tối: xem, nói, nhận chữ, nghe lại. 16 bài × 4 tối ≈ 64 tối, khoảng 48 giờ. Cộng 30 tối nền là khoảng 70 giờ. Dải để đỗ là 80–150 giờ, nên sau khi hết bài vẫn ôn sổ từ và nghe lại video thêm vài tuần.",
      "HSK 1 kiểm tra nghe và đọc. Cấp này chưa viết bài, chưa nói trong phòng thi. Số câu trên đề chính thức hãy xem lúc đăng ký ở chinesetest.cn.",
      "Kỳ thi HSK 3.0 đầu tiên là 13/12/2026. Từ số 0 không kịp kỳ đó.",
      "Vòng nền đã lấy vài câu của các bài này để nói được việc hằng ngày. Vòng này học lại đúng thứ tự sách, bốn tối một bài, thêm chữ và nghe. Video ngắn là Hoa Thư. Lớp dài là thầy Hiếu, xem 25 phút rồi dừng."
    ]
  },
  {
    id: "hsk2",
    title: "HSK 2",
    kicker: "Sơ cấp",
    words: "500 từ cộng dồn, viết khoảng 100 chữ",
    hours: "150–300 giờ từ số 0",
    months: "thêm khoảng 2–4 tháng sau HSK 1, ở mức 45 phút",
    blurb: [
      "15 bài theo giáo trình HSK 2 mới, rồi một buổi ôn ngữ pháp.",
      "Mỗi bài vẫn là 4 tối. Hết 16 bài là khoảng 48 giờ. Phần giờ còn lại của cấp là viết tay 100 chữ và nghe chậm mỗi tuần.",
      "Từ HSK 2 phòng thi có phần viết. Nói vẫn chưa phải bài nói riêng. Bài nói ghép vào từ HSK 3.",
      "Cả 15 bài là thầy Vũ Đức Hiếu trên kênh Mini88, giảng tiếng Việt. Lớp dài hơn một giờ. Mức 30 phút xem 25 phút đầu. Mức 60 phút xem khoảng 50 phút rồi dừng."
    ]
  },
  {
    id: "hsk3",
    title: "HSK 3",
    kicker: "Sơ cấp, cửa hội thoại",
    words: "1.000 từ cộng dồn, viết khoảng 250 chữ",
    hours: "300–500 giờ từ số 0",
    months: "khoảng 7–12 tháng từ số 0, ở 10 giờ mỗi tuần",
    blurb: [
      "Sau HSK 2 còn khoảng 150–250 giờ. 500 từ mới của cấp này, nhịp bền là 25 từ một tuần, khoảng 20 tuần chỉ để gặp từ.",
      "Sáu bài dưới đây là xương ngữ pháp và cách nghe. Chúng không chứa đủ 500 từ. Từ ngoài bài cho vào sổ theo nhịp 25 từ, mỗi từ một câu, ôn khi đến hạn.",
      "Video là thầy Hiếu và cô Khoai Tây. Sáu bài không chứa đủ 500 từ mới.",
      "Phòng thi cấp 3 có nghe, đọc, viết, và một bài nói khoảng 15 phút."
    ]
  },
  {
    id: "hsk4",
    title: "HSK 4",
    kicker: "Trung cấp",
    words: "2.000 từ cộng dồn, viết khoảng 400 chữ",
    hours: "500–1.000 giờ từ số 0",
    months: "khoảng 1–2 năm từ số 0 nếu 10 giờ mỗi tuần",
    blurb: [
      "1.000 từ mới. Nhịp 35 từ một tuần là gần 30 tuần, và từ này phải gặp trong câu chứ không phải trong cột.",
      "Ba bài dưới đây là cách học của cấp và hai buổi nghe. Ngữ pháp then chốt nằm trong bài đầu. Giờ còn lại là đọc đoạn ngắn mỗi tối và kể lại bằng miệng.",
      "Chưa có lớp miễn phí trọn bộ HSK 4 của người Việt. Ba bài là thầy Hiếu luyện nghe và cách làm bài. Đừng tick xong cấp khi hết video."
    ]
  },
  {
    id: "hsk5",
    title: "HSK 5",
    kicker: "Trung cấp cao",
    words: "3.600 từ cộng dồn, viết khoảng 550 chữ",
    hours: "1.000–1.500 giờ từ số 0",
    months: "khoảng 2–3 năm từ số 0 nếu 10 giờ mỗi tuần",
    blurb: [
      "1.600 từ mới. Cửa của cấp này là tốc độ đọc và nghe một lần, không phải thêm một bảng ngữ pháp.",
      "Mỗi tuần: 5 tối đọc một trang sách dễ, tra tối đa 8 từ. 2 tối nghe một đoạn 3 phút, ba vòng, rồi nói lại ý. 25 từ mới trong câu, không học danh sách trần.",
      "Hai bài là cách nghe của cô Khoai Tây và thầy Hiếu. Chưa có lớp miễn phí trọn bộ HSK 5 bằng tiếng Việt. Từ vẫn lấy từ trang bạn đọc."
    ]
  },
  {
    id: "hsk6",
    title: "HSK 6",
    kicker: "Cao cấp",
    words: "khoảng 5.400 từ cộng dồn, viết khoảng 700 chữ",
    hours: "1.500–2.500 giờ từ số 0",
    months: "khoảng 3–5 năm từ số 0 nếu 10 giờ mỗi tuần",
    blurb: [
      "Khoảng 1.800 từ mới, hầu hết là ghép chữ đã biết. Bài thi đọc nhanh và viết một đoạn.",
      "Mỗi tuần vẫn 45–60 phút: 4 tối đọc bài dài, 2 tối nghe một lần không tua, 1 tối viết 150 chữ rồi sửa lỗi ngữ pháp đã học.",
      "Bài nghe là thầy Hiếu. Bài sách là Tiếng Trung 247, giảng tiếng Việt. Bài nói là thầy Hiếu nhìn tranh. Hết ba bài là cửa vào, chưa phải xong cấp."
    ]
  },
  {
    id: "hsk79",
    title: "HSK 7–9",
    kicker: "Bậc cao, một kỳ thi chung",
    words: "11.000 từ cộng dồn, viết khoảng 1.200 chữ",
    hours: "3.000–5.000 giờ trở lên từ số 0",
    months: "khoảng 6–10 năm nếu 10 giờ mỗi tuần",
    blurb: [
      "Ba bậc dùng chung một đề: nghe, đọc, viết, nói, và dịch sang tiếng Trung.",
      "Chưa có bộ video miễn phí của người Việt dạy hết từng bài tới bậc 9. Trang này là nhịp học, không phải 200 bài giả.",
      "Mỗi tuần 7 tối: 4 tối đọc bài thật và viết lại ý, 2 tối nghe 5 phút ba vòng, 1 tối nói hoặc dịch một đoạn ngắn sang tiếng Trung. Từ mới khoảng 20 từ một tuần. Theo nhịp đó, 5.600 từ mới mất nhiều năm. Đó đúng với dải giờ, không phải lịch rút gọn."
    ]
  }
];


function buoi(p) {
  return {
    id: p.id,
    stage: p.stage,
    week: p.week,
    title: p.title,
    mark: p.mark,
    promise: p.promise,
    kicker: p.kicker,
    videoLead: p.videoLead || "Dừng sau câu mẫu và nói lại. Giáo viên trong video là người Việt. Phần tiếng Việt ở dưới khóa luật của bài.",
    gateOral: p.gateOral !== false && !(p.oral && p.oral.length === 0),
    exam: p.exam || false,
    plan: p.plan || [
      { m: "Tối 1", tier: 30, t: "Xem video. Dừng để nhái. Đọc phần giảng." },
      { m: "Tối 2", tier: 30, t: "Nói các câu mẫu không nhìn chữ." },
      { m: "Tối 3", tier: 30, t: "Nhận mặt chữ của từ mới. Cấp 2 trở đi viết tay 5 chữ, nét lấy từ video." },
      { m: "Tối 4", tier: 30, t: "Nghe lại không nhìn. Làm quiz. Tick đủ bốn tối rồi bấm xong bài." }
    ],
    oral: p.oral === undefined ? [
      "Tối 1. Đã xem video và đọc phần giảng.",
      "Tối 2. Nói được câu mẫu không nhìn chữ.",
      "Tối 3. Nhận ra chữ của từ mới trong bài.",
      "Tối 4. Nghe lại một lượt và làm quiz."
    ] : p.oral,
    videos: p.videos,
    blocks: p.blocks,
    vocab: p.vocab,
    lines: p.lines,
    quiz: p.quiz
  };
}

function V(z, p, vi, note) {
  const o = { z: z, p: p, vi: vi, tier: 30 };
  if (note) o.note = note;
  return o;
}
function S(z, p, vi) {
  return { z: z, p: p, vi: vi, tier: 30 };
}
function Q(prompt, choices, answer, why, speak) {
  const o = { tier: 30, prompt: prompt, choices: choices, answer: answer, why: why };
  if (speak) o.speak = speak;
  return o;
}
function clip(id, title, channel, min, tier, start, end, note) {
  const v = { id: id, title: title, channel: channel, min: min, tier: tier };
  if (start) v.start = start;
  if (end) v.end = end;
  if (note) v.note = note;
  return v;
}
function long30(id, title, channel, note) {
  return clip(id, title, channel, 25, 30, 0, 1500, note || "Lớp dài hơn một giờ. Tối nay xem 25 phút đầu, rồi đọc phần tiếng Việt.");
}
function long60(id, title, channel) {
  return clip(id, title, channel, 50, 60, 0, 3000, "Xem thêm tới phút 50. Phần còn để tối ôn, đừng cố hết trong một đêm.");
}

const PATH_LESSONS = [
  buoi({
    id: "hsk1-01", stage: "hsk1", week: 1, mark: "你好",
    kicker: "HSK 1 · Bài 1/15",
    title: "AI小语，你好",
    promise: "Chào đúng người, đúng thanh. Biết 你好 không phải câu hỏi sức khỏe.",
    videos: [
      clip("wKs7QWaaxdU", "Bài 1, xin chào", "Tiếng Trung Hoa Thư", 6, 30, null, null, "Giảng tiếng Việt, đúng bài giáo trình mới."),
      clip("0EWVpMQf8o0", "Lớp bài 1, thầy Hiếu", "Mini88", 25, 45, 0, 1500, "Thầy người Việt. Lớp dài. Tối nay 25 phút đầu.")
    ],
    blocks: [
      { h: "Chào", tier: 30, lines: [
        "你好 trong câu đọc **ní hǎo**. Hai thanh 3 đứng cạnh, tiếng trước lên thanh 2. Đừng đọc ní hǎo thành nǐ hǎo cho đủ dấu trên giấy.",
        "您好 là nín hǎo, thanh 2, dùng với thầy cô và người lớn tuổi. 您 không phải thanh 3, nên không có biến thanh 3+3.",
        "你好 là lời chào, không phải hỏi khỏe. Muốn hỏi khỏe thì để sau, khi đã có câu riêng.",
        "喂 chỉ dùng khi nhấc máy. Gặp mặt mà nói 喂 là gọi như gọi điện.",
        "Tên trong sách là nhân vật. Bạn vẫn nói tên Việt: 我叫 Trí. Bài sau khóa câu tên."
      ]}
    ],
    vocab: [
      V("你好", "nǐ hǎo", "chào", "Trong câu đọc ní hǎo."),
      V("您好", "nín hǎo", "chào kính trọng", "您 thanh 2."),
      V("请问", "qǐngwèn", "xin hỏi"),
      V("老师", "lǎoshī", "giáo viên", "Tiếng sau nhẹ."),
      V("谢谢", "xièxie", "cảm ơn", "Tiếng sau nhẹ."),
      V("再见", "zàijiàn", "tạm biệt")
    ],
    lines: [
      S("你好！", "ní hǎo!", "Chào bạn."),
      S("老师，您好！", "lǎoshī, nín hǎo!", "Thưa thầy, chào thầy."),
      S("请问，你是学生吗？", "qǐngwèn, nǐ shì xuésheng ma?", "Xin hỏi, bạn là học sinh không?")
    ],
    quiz: [
      Q("你好 nói trong câu nghe gần âm nào?", ["nǐ hǎo, giữ cả hai thanh 3", "ní hǎo", "nī hǎo", "nì hǎo"], 1, "3+3: tiếng trước lên thanh 2."),
      Q("Chào giáo viên thì nói gì?", ["你好, vì ngắn hơn", "您好, nín hǎo", "喂, 老师", "老师是你好"], 1, "您 thanh 2. 喂 là điện thoại."),
      Q("喂 dùng khi nào?", ["Gặp mặt buổi sáng", "Nhấc điện thoại", "Tạm biệt", "Cảm ơn"], 1, "Gặp mặt dùng 你好 hoặc 您好."),
      Q("Tên của bạn trong khóa này", ["Phải đổi thành tên trong sách", "Vẫn là tên Việt", "Phải là hai chữ Hán", "Bỏ tên, chỉ nói nước"], 1, "我叫 cộng tên của bạn.")
    ]
  }),
  buoi({
    id: "hsk1-02", stage: "hsk1", week: 2, mark: "叫",
    kicker: "HSK 1 · Bài 2/15",
    title: "我叫李文",
    promise: "Hỏi tên và nói tên. Biết 呢 là hỏi lại, không phải 吗.",
    videos: [
      clip("mcmJCnWwuAI", "Bài 2, tôi tên là", "Tiếng Trung Hoa Thư", 7, 30, null, null, "Giảng tiếng Việt, đúng bài giáo trình mới."),
      clip("qlBY4dD0BOo", "Lớp bài 2, thầy Hiếu", "Mini88", 25, 45, 0, 1500, "Thầy người Việt. Lớp dài. Tối nay 25 phút đầu.")
    ],
    blocks: [
      { h: "Tên", tier: 30, lines: [
        "我叫 Trí。你叫什么名字？",
        "什么 đứng trước danh từ nó hỏi: 什么名字, tên gì. Đừng đưa 什么 xuống cuối như tiếng Việt.",
        "呢 hỏi lại phần vừa nói. 我是学生。你呢？ Bạn thì sao. Không thêm 吗 vào câu đã có 什么.",
        "很高兴认识你. 认识 tiếng sau thường nhẹ. 高兴 là vui, không có 是 phía trước."
      ]}
    ],
    vocab: [
      V("叫", "jiào", "tên là"),
      V("什么", "shénme", "gì", "Tiếng sau nhẹ."),
      V("名字", "míngzi", "tên", "Tiếng sau nhẹ."),
      V("呢", "ne", "còn bạn thì sao", "Nhẹ. Hỏi lại."),
      V("认识", "rènshi", "quen", "Tiếng sau nhẹ."),
      V("高兴", "gāoxìng", "vui")
    ],
    lines: [
      S("我叫 Trí。", "wǒ jiào Trí.", "Tôi tên Trí."),
      S("你叫什么名字？", "nǐ jiào shénme míngzi?", "Bạn tên là gì?"),
      S("我是学生，你呢？", "wǒ shì xuésheng, nǐ ne?", "Tôi là học sinh, còn bạn?"),
      S("很高兴认识你。", "hěn gāoxìng rènshi nǐ.", "Rất vui được gặp bạn.")
    ],
    quiz: [
      Q("Câu hỏi tên", ["你是什么名字吗？", "你叫什么名字？", "你名字是叫吗？", "什么你叫名字？"], 1, "叫 + 什么名字. Câu đã có 什么 thì không thêm 吗."),
      Q("我是学生，你呢？ nghĩa là", ["Bạn có phải học sinh không", "Còn bạn thì sao", "Bạn tên là gì", "Bạn không phải học sinh"], 1, "呢 hỏi lại y như vế trước."),
      Q("很高兴认识你 có 是 không?", ["我是很高兴认识你", "Không đặt 是 trước 高兴", "是 đứng sau 高兴", "Đổi 高兴 thành 是"], 1, "Tính từ không đi với 是.")
    ]
  }),
  buoi({
    id: "hsk1-03", stage: "hsk1", week: 3, mark: "人",
    kicker: "HSK 1 · Bài 3/15",
    title: "我是中国人",
    promise: "Nói quốc tịch trọn cụm 越南人, và hỏi người nước nào.",
    videos: [
      clip("l96XuqDrqcs", "Bài 3, tôi là người Trung Quốc", "Tiếng Trung Hoa Thư", 8, 30, null, null, "Giảng tiếng Việt, đúng bài giáo trình mới."),
      clip("xLqq_PmZ72s", "Lớp bài 3, thầy Hiếu", "Mini88", 25, 45, 0, 1500, "Thầy người Việt. Lớp dài. Tối nay 25 phút đầu.")
    ],
    blocks: [
      { h: "Người nước nào", tier: 30, lines: [
        "我是越南人。 Phải có 人. 我是越南 là cụt, như nói tôi là nước Việt Nam.",
        "你是哪国人？ 哪 hỏi lựa trong một loại. 什么 hỏi cái tên. Nước thì dùng 哪国.",
        "哪 thanh 3 đứng trước 国 thanh 2 thì chỉ hạ, không nhấc. Nghe video.",
        "中国人, 越南人. 中国 là Trung Quốc. 汉语 và 中文 đều là tiếng Trung. Cấp này gặp 中国人 là đủ."
      ]}
    ],
    vocab: [
      V("中国", "Zhōngguó", "Trung Quốc"),
      V("中国人", "Zhōngguó rén", "người Trung Quốc"),
      V("越南", "Yuènán", "Việt Nam"),
      V("越南人", "Yuènán rén", "người Việt Nam"),
      V("哪", "nǎ", "nào"),
      V("人", "rén", "người")
    ],
    lines: [
      S("我是越南人。", "wǒ shì Yuènán rén.", "Tôi là người Việt Nam."),
      S("你是哪国人？", "nǐ shì nǎ guó rén?", "Bạn là người nước nào?"),
      S("我不是中国人。", "wǒ bú shì Zhōngguó rén.", "Tôi không phải người Trung Quốc.")
    ],
    quiz: [
      Q("Câu đúng", ["我是越南。", "我是越南人。", "我越南是人。", "我是人越南。"], 1, "Quốc tịch là nước + 人."),
      Q("Hỏi nước thì dùng", ["什么国", "哪国", "谁国", "几国"], 1, "哪 chọn trong các nước."),
      Q("我不是, chữ 不 đọc", ["bù shì", "bú shì", "bū shì", "bu shì, nhẹ"], 1, "不 trước thanh 4 thành bú.")
    ]
  }),
  buoi({
    id: "hsk1-04", stage: "hsk1", week: 4, mark: "有",
    kicker: "HSK 1 · Bài 4/15",
    title: "我有两个孩子",
    promise: "Nói có và không có. Đếm người bằng 两 và 个.",
    videos: [
      clip("yH17TS-87LI", "Bài 4, tôi có hai người con", "Tiếng Trung Hoa Thư", 8, 30, null, null, "Giảng tiếng Việt, đúng bài giáo trình mới."),
      clip("XpO0udvpPrA", "Lớp bài 4, thầy Hiếu", "Mini88", 25, 45, 0, 1500, "Thầy người Việt. Đây là phần sau của bài. 25 phút rồi dừng.")
    ],
    blocks: [
      { h: "Có", tier: 30, lines: [
        "我有两个孩子。 Hai người thì 两, không phải 二. 二 dùng khi đếm: 二十, và trong số điện thoại.",
        "一个 đọc yí gè, vì 个 thanh 4 kéo 一 thành thanh 2.",
        "Phủ định của 有 là 没有. Không nói 不有.",
        "你有孩子吗？ 我没有。 Có thể trả lời cụt 没有.",
        "儿子 con trai, 女儿 con gái. 女 trong 女 và 女儿 là ü, chu môi, không phải u."
      ]}
    ],
    vocab: [
      V("有", "yǒu", "có"),
      V("没有", "méiyǒu", "không có"),
      V("孩子", "háizi", "con, trẻ", "Tiếng sau nhẹ."),
      V("两", "liǎng", "hai, trước lượng từ"),
      V("个", "gè", "cái, người", "Lượng từ chung."),
      V("女儿", "nǚ ér", "con gái", "nǚ là ü.")
    ],
    lines: [
      S("我有两个孩子。", "wǒ yǒu liǎng gè háizi.", "Tôi có hai con."),
      S("你有姐姐吗？", "nǐ yǒu jiějie ma?", "Bạn có chị không?"),
      S("我没有姐姐。", "wǒ méiyǒu jiějie.", "Tôi không có chị."),
      S("我有一个女儿。", "wǒ yǒu yí gè nǚ'ér.", "Tôi có một con gái.")
    ],
    quiz: [
      Q("Hai người bạn", ["二个朋友", "两个朋友", "两朋友", "二个个朋友"], 1, "Trước 个 dùng 两."),
      Q("Không có chị", ["我不有姐姐。", "我没有姐姐。", "我不是有姐姐。", "我没了姐姐。"], 1, "有 phủ định bằng 没有."),
      Q("一个 đọc", ["yī gè", "yí gè", "yì gè", "yí ge, cả hai nhẹ"], 1, "一 trước thanh 4 thành yí.")
    ]
  }),
  buoi({
    id: "hsk1-05", stage: "hsk1", week: 5, mark: "休息",
    kicker: "HSK 1 · Bài 5/15",
    title: "今天我休息",
    promise: "Nói hôm nay là thứ mấy và hôm nay nghỉ.",
    videos: [
      clip("xsNg1dmby4c", "Bài 5, hôm nay tôi nghỉ", "Tiếng Trung Hoa Thư", 8, 30, null, null, "Giảng tiếng Việt, đúng bài giáo trình mới."),
      clip("0Fuy2UBT220", "Lớp bài 5, thầy Hiếu", "Mini88", 25, 45, 0, 1500, "Thầy người Việt. Lớp dài. Tối nay 25 phút đầu.")
    ],
    blocks: [
      { h: "Ngày và nghỉ", tier: 30, lines: [
        "今天我休息。 Nghỉ không cần 是. 休息 là động từ.",
        "今天星期一。 Chủ nhật là 星期日 hoặc 星期天, không có 星期七.",
        "星期一 là thứ Hai, 星期二 thứ Ba, lần lượt tới 星期六 thứ Bảy.",
        "昨天, 今天, 明天 đứng trước động từ. 我明天不休息。",
        "工作 là đi làm. 我今天工作。"
      ]}
    ],
    vocab: [
      V("今天", "jīntiān", "hôm nay"),
      V("明天", "míngtiān", "ngày mai"),
      V("昨天", "zuótiān", "hôm qua"),
      V("休息", "xiūxi", "nghỉ"),
      V("星期", "xīngqī", "tuần, thứ"),
      V("工作", "gōngzuò", "làm việc")
    ],
    lines: [
      S("今天我休息。", "jīntiān wǒ xiūxi.", "Hôm nay tôi nghỉ."),
      S("今天星期一。", "jīntiān xīngqī yī.", "Hôm nay thứ Hai."),
      S("我明天不工作。", "wǒ míngtiān bù gōngzuò.", "Ngày mai tôi không đi làm.")
    ],
    quiz: [
      Q("Chủ nhật", ["星期七", "星期日", "星期八", "昨天星期"], 1, "Không có thứ bảy cộng một."),
      Q("今天我休息 thiếu gì không?", ["Thiếu 是", "Đủ, 休息 là động từ", "Thiếu 吗", "Thiếu 了"], 1, "Không chèn 是 trước động từ."),
      Q("星期一 là", ["Chủ nhật", "Thứ Hai", "Thứ Bảy", "Tuần sau"], 1, "一 trong 星期 là thứ Hai.")
    ]
  }),
  buoi({
    id: "hsk1-06", stage: "hsk1", week: 6, mark: "多少",
    kicker: "HSK 1 · Bài 6/15",
    title: "你的手机号是多少",
    promise: "Hỏi số và đọc số từng chữ. Biết 的 nằm giữa người và đồ.",
    videos: [
      clip("ICLaRB3D8mI", "Bài 6, số điện thoại", "Tiếng Trung Hoa Thư", 10, 30, null, null, "Giảng tiếng Việt, đúng bài giáo trình mới."),
      clip("FjwFTNNBY44", "Lớp bài 6, thầy Hiếu", "Mini88", 25, 45, 0, 1500, "Thầy người Việt. Lớp dài. Tối nay 25 phút đầu.")
    ],
    blocks: [
      { h: "Số của ai", tier: 30, lines: [
        "你的手机号是多少？ 的 nằm giữa người sở hữu và vật: 我的书, sách của tôi. Tiếng Việt để của sau. Tiếng Trung để người trước.",
        "Số điện thoại, giá, tuổi người lớn dùng 多少. 几 dùng cho số ít, thường dưới mười, như 几个人, 几点.",
        "Đọc từng chữ số. 一 một mình là yī. Trong dãy số, nhiều người đọc 一 thành yāo để khỏi lẫn với 七. Cả hai đều được hiểu.",
        "零 là số 0."
      ]}
    ],
    vocab: [
      V("手机", "shǒujī", "điện thoại"),
      V("号", "hào", "số"),
      V("多少", "duōshao", "bao nhiêu", "Tiếng sau nhẹ."),
      V("的", "de", "của", "Nhẹ. Người + 的 + vật."),
      V("电话", "diànhuà", "điện thoại, cuộc gọi"),
      V("零", "líng", "số không")
    ],
    lines: [
      S("你的手机号是多少？", "nǐ de shǒujī hào shì duōshao?", "Số điện thoại của bạn là bao nhiêu?"),
      S("我的号是零九零。", "wǒ de hào shì líng jiǔ líng.", "Số của tôi là không chín không."),
      S("这是我的书。", "zhè shì wǒ de shū.", "Đây là sách của tôi.")
    ],
    quiz: [
      Q("Sách của tôi", ["书我的", "我的书", "我书的", "的我书"], 1, "Người, rồi 的, rồi vật."),
      Q("Hỏi số điện thoại bằng", ["几", "多少", "什么号吗", "哪"], 1, "Dãy số dùng 多少."),
      Q("Câu nào thừa 吗?", ["你的号是多少吗？", "你是老师吗？", "你有书吗？", "你休息吗？"], 0, "Đã có 多少 thì không thêm 吗.")
    ]
  }),
  buoi({
    id: "hsk1-07", stage: "hsk1", week: 7, mark: "下班",
    kicker: "HSK 1 · Bài 7/15",
    title: "我晚上六点半下班",
    promise: "Nói giờ tan làm. 2 giờ là 两点.",
    videos: [
      clip("zujzJV4HvC8", "Bài 7, tan làm lúc sáu giờ rưỡi", "Tiếng Trung Hoa Thư", 9, 30, null, null, "Giảng tiếng Việt, đúng bài giáo trình mới."),
      clip("RIdWB_rCFDc", "Lớp bài 7, thầy Hiếu", "Mini88", 25, 45, 0, 1500, "Thầy người Việt. Đây là phần sau của bài. 25 phút rồi dừng.")
    ],
    blocks: [
      { h: "Giờ", tier: 30, lines: [
        "我晚上六点半下班。 Giờ đứng trước động từ.",
        "两点 là 2 giờ. Không nói 二点. 两 và 点 đều thanh 3, đọc gần liáng diǎn.",
        "六点半 là sáu giờ rưỡi. 十分 là mười phút: 六点十分.",
        "上班 đi làm, 下班 tan làm.",
        "上午 buổi sáng, 下午 buổi chiều, 晚上 buổi tối. 晚上 tiếng sau thường nhẹ."
      ]}
    ],
    vocab: [
      V("点", "diǎn", "giờ"),
      V("半", "bàn", "rưỡi"),
      V("分", "fēn", "phút"),
      V("晚上", "wǎnshang", "buổi tối", "Tiếng sau nhẹ."),
      V("下班", "xiàbān", "tan làm"),
      V("上班", "shàngbān", "đi làm")
    ],
    lines: [
      S("我晚上六点半下班。", "wǒ wǎnshang liù diǎn bàn xiàbān.", "Tôi tan làm lúc sáu giờ rưỡi tối."),
      S("现在两点。", "xiànzài liǎng diǎn.", "Bây giờ là hai giờ."),
      S("我上午九点上班。", "wǒ shàngwǔ jiǔ diǎn shàngbān.", "Tôi đi làm lúc chín giờ sáng.")
    ],
    quiz: [
      Q("2 giờ", ["二点", "两点", "两小时", "第二点"], 1, "Đồng hồ dùng 两. Hai thanh 3, đọc liáng diǎn."),
      Q("六点半 là", ["6 giờ 30 phút, tức sáu rưỡi", "6 phút rưỡi", "16 giờ", "6 giờ kém 30"], 0, "半 sau 点 là rưỡi."),
      Q("Tan làm", ["上班", "下班", "休息班", "工作点"], 1, "下 là ra, hết ca.")
    ]
  }),
  buoi({
    id: "hsk1-08", stage: "hsk1", week: 8, mark: "在",
    kicker: "HSK 1 · Bài 8/15",
    title: "我爸爸也在医院工作",
    promise: "Nói chỗ làm. 也 đứng trước động từ. 在 là ở, rồi mới đến việc.",
    videos: [
      clip("rlkouVKDY3M", "Bài 8, bố tôi cũng làm ở bệnh viện", "Tiếng Trung Hoa Thư", 8, 30, null, null, "Giảng tiếng Việt, đúng bài giáo trình mới."),
      clip("xwPm4Tcuj9I", "Lớp bài 8, thầy Hiếu", "Mini88", 25, 45, 0, 1500, "Thầy người Việt. Lớp dài. Tối nay 25 phút đầu.")
    ],
    blocks: [
      { h: "Ở đâu làm gì", tier: 30, lines: [
        "我爸爸也在医院工作。 Thứ tự: ai, cũng, ở đâu, làm gì.",
        "也 đứng trước động từ, không đứng đầu câu.",
        "在 + chỗ + động từ. 我在学校学习。 Khác với 是. 是 là là. 在 là ở.",
        "和 nối hai danh từ: 爸爸和妈妈. Đừng dùng 和 để nối hai câu như và trong tiếng Việt.",
        "医生 là bác sĩ. 医院 là bệnh viện."
      ]}
    ],
    vocab: [
      V("也", "yě", "cũng"),
      V("在", "zài", "ở"),
      V("医院", "yīyuàn", "bệnh viện"),
      V("医生", "yīshēng", "bác sĩ"),
      V("和", "hé", "và, giữa hai danh từ"),
      V("爸爸", "bàba", "bố", "Tiếng sau nhẹ.")
    ],
    lines: [
      S("我爸爸也在医院工作。", "wǒ bàba yě zài yīyuàn gōngzuò.", "Bố tôi cũng làm ở bệnh viện."),
      S("我在学校学习。", "wǒ zài xuéxiào xuéxí.", "Tôi học ở trường."),
      S("爸爸和妈妈都是医生。", "bàba hé māma dōu shì yīshēng.", "Bố và mẹ đều là bác sĩ.")
    ],
    quiz: [
      Q("Câu đúng", ["我也在医院工作。", "也我在医院工作。", "我在也医院工作。", "我医院在工作也。"], 0, "也 ngay trước cụm động từ."),
      Q("在 khác 是", ["在 là ở, 是 là là", "Hai chữ một nghĩa", "在 chỉ dùng với người", "是 chỉ dùng với chỗ"], 0, "我是医生。我在医院工作。"),
      Q("和 trong bài này nối", ["Hai câu", "Hai danh từ", "Câu hỏi", "Phủ định"], 1, "爸爸和妈妈.")
    ]
  }),
  buoi({
    id: "hsk1-09", stage: "hsk1", week: 9, mark: "学习",
    kicker: "HSK 1 · Bài 9/15",
    title: "我明天上午在学校学习",
    promise: "Xếp được thời gian, chỗ, rồi việc, trong một câu.",
    videos: [
      clip("xbnBxfxpWsE", "Bài 9, sáng mai tôi học ở trường", "Tiếng Trung Hoa Thư", 8, 30, null, null, "Giảng tiếng Việt, đúng bài giáo trình mới."),
      clip("LLVwnHrmUXc", "Lớp bài 9, thầy Hiếu", "Mini88", 25, 45, 0, 1500, "Thầy người Việt. Lớp dài. Tối nay 25 phút đầu.")
    ],
    blocks: [
      { h: "Thứ tự câu", tier: 30, lines: [
        "我明天上午在学校学习。 Ai, khi nào, ở đâu, làm gì.",
        "Đừng nói 我学习在学校明天. Chỗ và giờ không đứng sau động từ như tiếng Anh.",
        "学习 là học, động từ. 学校 là trường, danh từ.",
        "中文 và 汉语 đều dùng được cho tiếng Trung. Khóa này nói 中文 cũng được, 汉语 cũng được, đừng trộn trong một câu cho rối."
      ]}
    ],
    vocab: [
      V("学习", "xuéxí", "học"),
      V("学校", "xuéxiào", "trường"),
      V("上午", "shàngwǔ", "buổi sáng"),
      V("下午", "xiàwǔ", "buổi chiều"),
      V("中文", "Zhōngwén", "tiếng Trung"),
      V("汉语", "Hànyǔ", "tiếng Trung")
    ],
    lines: [
      S("我明天上午在学校学习。", "wǒ míngtiān shàngwǔ zài xuéxiào xuéxí.", "Sáng mai tôi học ở trường."),
      S("我学习中文。", "wǒ xuéxí Zhōngwén.", "Tôi học tiếng Trung."),
      S("今天下午我不上班。", "jīntiān xiàwǔ wǒ bú shàngbān.", "Chiều nay tôi không đi làm.")
    ],
    quiz: [
      Q("Câu đúng", ["我学习明天在学校。", "我明天在学校学习。", "我在学习学校明天。", "明天学习我学校在。"], 1, "Khi nào, ở đâu, rồi động từ."),
      Q("学校 và 学习", ["学校 là trường, 学习 là học", "Một nghĩa", "学校 là động từ", "学习 là nơi chốn"], 0, "Nhìn bộ 习 là việc, 校 là chỗ."),
      Q("不上班, 不 đọc", ["bù", "bú", "bū", "nhẹ"], 1, "不 đứng trước 上, và 上 là thanh 4, nên đọc bú.")
    ]
  }),
  buoi({
    id: "hsk1-10", stage: "hsk1", week: 10, mark: "便宜",
    kicker: "HSK 1 · Bài 10/15",
    title: "这儿的苹果真便宜",
    promise: "Khen giá và phân biệt mua với bán.",
    videos: [
      clip("gqSISP7O42Y", "Bài 10, táo ở đây thật rẻ", "Tiếng Trung Hoa Thư", 9, 30, null, null, "Giảng tiếng Việt, đúng bài giáo trình mới."),
      clip("N1T-h3WxUjQ", "Lớp bài 10, thầy Hiếu", "Mini88", 25, 45, 0, 1500, "Thầy người Việt. Lớp dài. Tối nay 25 phút đầu.")
    ],
    blocks: [
      { h: "Giá", tier: 30, lines: [
        "这儿的苹果真便宜。 真 đứng trước tính từ để khen hoặc chê mạnh. Không thêm 是.",
        "这儿 là nói của miền Bắc, có er. 这里 nói cũng được, cùng nghĩa ở đây.",
        "买 mǎi là mua, thanh 3. 卖 mài là bán, thanh 4. Khác mỗi thanh.",
        "块 là đồng, nói giá. 太贵了 là đắt quá. 了 ở đây là sắc thái, không phải việc đã xong.",
        "这个多少钱？ một cái bao nhiêu tiền."
      ]}
    ],
    vocab: [
      V("这儿", "zhèr", "ở đây", "也可以说这里 zhèlǐ."),
      V("苹果", "píngguǒ", "táo"),
      V("真", "zhēn", "thật, đứng trước tính từ"),
      V("便宜", "piányi", "rẻ", "Tiếng sau thường nhẹ."),
      V("买", "mǎi", "mua"),
      V("卖", "mài", "bán"),
      V("块", "kuài", "đồng")
    ],
    lines: [
      S("这儿的苹果真便宜。", "zhèr de píngguǒ zhēn piányi.", "Táo ở đây rẻ thật."),
      S("这个多少钱？", "zhè ge duōshao qián?", "Cái này bao nhiêu tiền?"),
      S("太贵了，我不要。", "tài guì le, wǒ bú yào.", "Đắt quá, tôi không lấy.")
    ],
    quiz: [
      Q("买 và 卖", ["买 là mua thanh 3, 卖 là bán thanh 4", "Cùng nghĩa", "买 là bán", "卖 thanh 3"], 0, "Nghe một mình từng chữ trong video."),
      Q("真便宜 có cần 很 không?", ["Phải thêm 很", "真 đã đứng trước tính từ", "Phải thêm 是", "真 đứng cuối câu"], 1, "真 hoặc 很, không chồng cả hai cho một lời khen."),
      Q("太贵了, chữ 了", ["Việc đã xong", "Sắc thái của 太", "Số nhiều", "Câu hỏi"], 1, "太…了 là một cụm. 了 hoàn thành học ở bài 14.")
    ]
  }),
  buoi({
    id: "hsk1-11", stage: "hsk1", week: 11, mark: "呢",
    kicker: "HSK 1 · Bài 11/15",
    title: "我读大学呢",
    promise: "Nói đang trong việc gì, và hỏi bằng cách lặp động từ thay vì lúc nào cũng 吗.",
    videos: [
      clip("jlwx4wFg_x4", "Bài 11, tôi đang học đại học", "Tiếng Trung Hoa Thư", 8, 30, null, null, "Giảng tiếng Việt, đúng bài giáo trình mới."),
      clip("esJHKHt5sHw", "Lớp bài 11, thầy Hiếu", "Mini88", 25, 45, 0, 1500, "Thầy người Việt. Lớp dài. Tối nay 25 phút đầu.")
    ],
    blocks: [
      { h: "Đang học, và hỏi xoay", tier: 30, lines: [
        "我读大学呢。 呢 ở đây là tình huống hiện tại: tôi đang học đại học. Không phải hỏi lại.",
        "呢 cuối câu cũng có thể hỏi lại, như bài 2. Phân biệt bằng câu: nếu trước đó chưa có việc để hỏi lại, 呢 là đang ở trong việc.",
        "你读不读大学？ Là hỏi có học đại học không. Không thêm 吗. Đây là câu lặp có-không.",
        "读 là đọc, cũng là theo học."
      ]}
    ],
    vocab: [
      V("读", "dú", "đọc, theo học"),
      V("大学", "dàxué", "đại học"),
      V("呢", "ne", "đang trong việc, hoặc hỏi lại", "Nhẹ. Nghĩa tùy câu."),
      V("学生", "xuésheng", "học sinh, sinh viên", "Tiếng sau nhẹ.")
    ],
    lines: [
      S("我读大学呢。", "wǒ dú dàxué ne.", "Tôi đang học đại học."),
      S("你读不读大学？", "nǐ dú bu dú dàxué?", "Bạn có học đại học không?"),
      S("我不读大学，我工作。", "wǒ bù dú dàxué, wǒ gōngzuò.", "Tôi không học đại học, tôi đi làm.")
    ],
    quiz: [
      Q("我读大学呢 là", ["Bạn có học không", "Tôi đang học đại học", "Đại học ở đâu", "Tôi đã học xong"], 1, "呢 tình huống hiện tại."),
      Q("Câu lặp đúng", ["你读大学吗不？", "你读不读大学？", "你不读吗大学？", "你吗读大学？"], 1, "Động từ, 不, động từ. Không thêm 吗."),
      Q("Câu đã có 什么 thì", ["Thêm 吗 cho lịch sự", "Không thêm 吗", "Đổi 什么 thành 呢", "Thêm 不 ở cuối"], 1, "Một câu một cách hỏi.")
    ]
  }),
  buoi({
    id: "hsk1-12", stage: "hsk1", week: 12, mark: "雪",
    kicker: "HSK 1 · Bài 12/15",
    title: "昨天下雪了",
    promise: "Nói trời vừa chuyển: mưa, tuyết, lạnh. Tách 了 này khỏi 了 của việc đã làm.",
    videos: [
      clip("aJrbs_uo2ig", "Bài 12, hôm qua trời có tuyết", "Tiếng Trung Hoa Thư", 7, 30, null, null, "Giảng tiếng Việt, đúng bài giáo trình mới."),
      clip("t-US9NFYzZQ", "Lớp bài 12, thầy Hiếu", "Mini88", 25, 45, 0, 1500, "Thầy người Việt. Lớp dài. Tối nay 25 phút đầu.")
    ],
    blocks: [
      { h: "Trời đổi", tier: 30, lines: [
        "昨天下雪了。 了 báo tình huống mới: tuyết đã rơi, trời đã đổi.",
        "下雨了 cũng vậy. Chưa mưa thì 不下雨, không có 了.",
        "太冷了。 太…了 là mức độ. Đừng thấy 了 là tưởng việc đã xong.",
        "Bài 14 mới dùng 了 sau động từ có vật: 看了一个电影. Tối nay đừng trộn hai 了 vào một câu."
      ]}
    ],
    vocab: [
      V("下雪", "xià xuě", "tuyết rơi"),
      V("下雨", "xià yǔ", "mưa"),
      V("了", "le", "tình huống mới", "Nhẹ. Khác 了 hoàn thành ở bài 14."),
      V("太", "tài", "quá"),
      V("冷", "lěng", "lạnh"),
      V("热", "rè", "nóng")
    ],
    lines: [
      S("昨天下雪了。", "zuótiān xià xuě le.", "Hôm qua có tuyết."),
      S("下雨了。", "xià yǔ le.", "Mưa rồi."),
      S("太冷了。", "tài lěng le.", "Lạnh quá.")
    ],
    quiz: [
      Q("昨天下雪了, 了 báo", ["Tuyết là vật đã mua", "Tình huống mới, tuyết đã rơi", "Câu hỏi", "Số nhiều"], 1, "Trời đổi trạng thái."),
      Q("太热了 có phải việc đã xong không?", ["Phải, vì có 了", "Không, đây là 太…了", "了 đứng sai chỗ", "Phải đổi thành 过"], 1, "太 và 了 đi cặp cho mức độ."),
      Q("Chưa mưa", ["不下雨了", "不下雨", "没下雨了", "下雨不"], 1, "Phủ định trạng thái dùng 不, bỏ 了.")
    ]
  }),
  buoi({
    id: "hsk1-13", stage: "hsk1", week: 13, mark: "请",
    kicker: "HSK 1 · Bài 13/15",
    title: "请给我一杯茶",
    promise: "Gọi món. Tách 能 và 可以. Nhái ba thanh 3, đừng ngồi tính.",
    videos: [
      clip("M0_nliT_wxQ", "Bài 13, cho tôi một cốc trà", "Tiếng Trung Hoa Thư", 9, 30, null, null, "Giảng tiếng Việt, đúng bài giáo trình mới."),
      clip("UEjvdjMvaSY", "Lớp bài 13, thầy Hiếu", "Mini88", 25, 45, 0, 1500, "Thầy người Việt. Đây là phần sau của bài. 25 phút rồi dừng.")
    ],
    blocks: [
      { h: "Gọi và xin phép", tier: 30, lines: [
        "请给我一杯茶。 请, 给, 我 đều thanh 3. Đừng tính tay. Nhái video, nghe gần qíng gěi wǒ.",
        "一杯 đọc yì bēi, vì 杯 thanh 1, 一 trước thanh 1 thành thanh 4.",
        "能 là sức hoặc hoàn cảnh: 我不能去, tôi không đi được. 可以 là được phép: 可以进来吗, vào được không.",
        "想 là muốn, trong đầu. 要 là lấy, gọi, khi đã quyết. 我要一杯茶 là tôi lấy một tách."
      ]}
    ],
    vocab: [
      V("请", "qǐng", "mời, làm ơn"),
      V("给", "gěi", "cho"),
      V("杯", "bēi", "tách, cốc"),
      V("茶", "chá", "trà"),
      V("能", "néng", "có thể, về sức hoặc hoàn cảnh"),
      V("可以", "kěyǐ", "được phép", "以 thường nhẹ.")
    ],
    lines: [
      S("请给我一杯茶。", "qǐng gěi wǒ yì bēi chá.", "Làm ơn cho tôi một tách trà."),
      S("我要一杯水。", "wǒ yào yì bēi shuǐ.", "Tôi lấy một cốc nước."),
      S("可以进来吗？", "kěyǐ jìnlái ma?", "Vào được không?")
    ],
    quiz: [
      Q("一杯茶, 一 đọc", ["yī", "yí", "yì", "yāo"], 2, "杯 thanh 1, 一 thành yì."),
      Q("Vào được không, hỏi phép", ["我能是进来", "可以进来吗", "进来可以是", "能吗进来"], 1, "可以 là phép. 吗 cuối câu."),
      Q("请给我, ba thanh 3", ["Tính từng chữ trên giấy", "Nhái video", "Đọc cả ba là thanh 1", "Bỏ 请"], 1, "Chuỗi thanh 3 dài, tai hơn công thức.")
    ]
  }),
  buoi({
    id: "hsk1-14", stage: "hsk1", week: 14, mark: "了",
    kicker: "HSK 1 · Bài 14/15",
    title: "我看了一个电影",
    promise: "Nói việc đã làm xong, và phủ định bằng 没, không có 了.",
    videos: [
      clip("eq8Af6SevmY", "Bài 14, tôi đã xem một bộ phim", "Tiếng Trung Hoa Thư", 8, 30, null, null, "Giảng tiếng Việt, đúng bài giáo trình mới."),
      clip("48H6w5ytpQI", "Lớp bài 14, thầy Hiếu", "Mini88", 25, 45, 0, 1500, "Thầy người Việt. Lớp dài. Tối nay 25 phút đầu.")
    ],
    blocks: [
      { h: "Đã làm", tier: 30, lines: [
        "我看了一个电影。 了 ngay sau động từ, trước vật, là việc đã hoàn thành.",
        "一个 đọc yí gè.",
        "Phủ định: 我没看电影。 Có 没 thì bỏ 了. Không nói 我没看了电影.",
        "了 của bài 12 đứng cuối, báo trời hoặc tình huống đổi. 了 tối nay đứng sau động từ có vật. Một câu chỉ một việc."
      ]}
    ],
    vocab: [
      V("看", "kàn", "xem"),
      V("电影", "diànyǐng", "phim"),
      V("了", "le", "việc đã xong", "Sau động từ, trước vật."),
      V("没", "méi", "chưa, không, cho việc đã"),
      V("听", "tīng", "nghe")
    ],
    lines: [
      S("我看了一个电影。", "wǒ kàn le yí gè diànyǐng.", "Tôi đã xem một phim."),
      S("我没看电影。", "wǒ méi kàn diànyǐng.", "Tôi chưa xem phim."),
      S("昨天我听了音乐。", "zuótiān wǒ tīng le yīnyuè.", "Hôm qua tôi đã nghe nhạc.")
    ],
    quiz: [
      Q("Chưa xem phim", ["我不看了电影。", "我没看电影。", "我没看了电影。", "我不了看电影。"], 1, "没, và bỏ 了."),
      Q("了 hoàn thành đứng", ["Cuối câu, sau tính từ", "Sau động từ, trước vật", "Trước chủ ngữ", "Thay cho 的"], 1, "看了一个电影."),
      Q("一个电影, 一 đọc", ["yī gè", "yí gè", "yì gè", "yāo gè"], 1, "个 thanh 4.")
    ]
  }),
  buoi({
    id: "hsk1-15", stage: "hsk1", week: 15, mark: "见",
    kicker: "HSK 1 · Bài 15/15",
    title: "大兴机场见",
    promise: "Hẹn gặp. Tách 也 và 还.",
    videos: [
      clip("OQAySzLI7wA", "Bài 15, gặp ở sân bay Đại Hưng", "Tiếng Trung Hoa Thư", 9, 30, null, null, "Giảng tiếng Việt, đúng bài giáo trình mới."),
      clip("BqwWGA_y260", "Lớp bài 15, thầy Hiếu", "Mini88", 25, 45, 0, 1500, "Thầy người Việt. Đây là phần sau của bài. 25 phút rồi dừng.")
    ],
    blocks: [
      { h: "Hẹn", tier: 30, lines: [
        "大兴机场见。 见 ở đây là gặp lại, hẹn gặp. 再见 cũng là 见.",
        "我也去。 也 là cùng một việc với người khác.",
        "我还想去北京。 还 là thêm một việc nữa. 还 đọc hái, thanh 2, không đọc huán.",
        "明天上午机场见。 Giờ trước, chỗ trước, 见 cuối."
      ]}
    ],
    vocab: [
      V("机场", "jīchǎng", "sân bay"),
      V("见", "jiàn", "gặp"),
      V("还", "hái", "còn, thêm", "Thanh 2."),
      V("也", "yě", "cũng"),
      V("飞机", "fēijī", "máy bay"),
      V("明天", "míngtiān", "ngày mai")
    ],
    lines: [
      S("大兴机场见。", "Dàxīng jīchǎng jiàn.", "Gặp ở sân bay Đại Hưng."),
      S("我也去。", "wǒ yě qù.", "Tôi cũng đi."),
      S("我还想去北京。", "wǒ hái xiǎng qù Běijīng.", "Tôi còn muốn đi Bắc Kinh.")
    ],
    quiz: [
      Q("还 trong 我还想去 đọc", ["hái", "huán", "hái, thanh 3", "hàn"], 0, "Nghĩa còn, thêm, là hái thanh 2."),
      Q("也 và 还", ["也 là cùng việc, 还 là thêm việc", "Một nghĩa", "还 là phủ định", "也 chỉ đứng cuối"], 0, "我也去。我还想去。"),
      Q("机场见 là", ["Nhìn sân bay", "Hẹn gặp ở sân bay", "Sân bay đóng", "Hỏi đường"], 1, "见 cuối câu hẹn là gặp nhau.")
    ]
  }),
  buoi({
    id: "hsk1-thi", stage: "hsk1", week: 16, mark: "试",
    kicker: "HSK 1 · Thi thử",
    title: "Thi thử cấp 1",
    promise: "Mười câu gộp các bẫy của 15 bài. Không phải đề chính thức.",
    exam: true,
    gateOral: false,
    videoLead: "Video này chỉ ôn bài 10 đến 12. Phần quiz mới là cả cấp.",
    plan: [
      { m: "20 phút", tier: 30, t: "Làm 10 câu, không mở bài cũ." },
      { m: "15 phút", tier: 30, t: "Câu sai thì nói lại câu đúng." },
      { m: "10 phút", tier: 45, t: "Xem video ôn nếu còn giờ." }
    ],
    oral: [],
    videos: [clip("fpndEC2ZFCQ", "Ôn ngữ pháp sơ cấp", "Khoai Tây yêu tiếng Trung", 19, 45, null, null, "Cô người Việt. Không thay cho bài kiểm tra của trang.")],
    blocks: [
      { h: "Cách đọc điểm", tier: 30, lines: [
        "8/10 trở lên: mở HSK 2 được. Vẫn nghe lại video cấp 1 trong vài tuần, vì dải giờ đỗ là 80–150 giờ từ số 0.",
        "6 hoặc 7: làm lại bài của câu sai, rồi thi lại.",
        "Dưới 6: quay lại bài 1 đến bài 8. Đừng thêm từ cấp 2.",
        "Đề thật trên chinesetest.cn. Bài này chỉ bắt lỗi ngữ pháp đã học."
      ]}
    ],
    vocab: [],
    lines: [],
    quiz: [
      Q("你好 trong câu", ["nǐ hǎo", "ní hǎo", "nín hǎo", "nì hǎo"], 1, "3+3."),
      Q("Quốc tịch", ["我是越南。", "我是越南人。", "我越南人是。", "我有越南。"], 1, "Phải có 人."),
      Q("Không có chị", ["我不有姐姐。", "我没有姐姐。", "我不是姐姐。", "我没了姐姐。"], 1, "没有."),
      Q("2 giờ", ["二点", "两点", "两分", "二点钟个"], 1, "Đồng hồ dùng 两."),
      Q("Sách của tôi", ["书的我", "我的书", "我书", "的书我"], 1, "Người + 的 + vật."),
      Q("Mua", ["卖 mài", "买 mǎi", "看 kàn", "给 gěi"], 1, "买 thanh 3."),
      Q("Bạn có học đại học không, kiểu lặp", ["你读大学吗不？", "你读不读大学？", "你吗读大学？", "你不读吗？"], 1, "Không thêm 吗."),
      Q("Chưa xem phim", ["我没看了电影。", "我没看电影。", "我不看了电影。", "我没了看电影。"], 1, "没 bỏ 了."),
      Q("一杯, 一 đọc", ["yī", "yí", "yì", "yāo"], 2, "杯 thanh 1."),
      Q("我也去 và 我还想去", ["也 cùng việc, 还 thêm việc", "Ngược lại", "Cả hai là phủ định", "还 đọc huán"], 0, "还 là hái.")
    ]
  }),

  buoi({
    id: "hsk2-01", stage: "hsk2", week: 1, mark: "请",
    kicker: "HSK 2 · Bài 1/15",
    title: "她请我们吃了北京烤鸭",
    promise: "Mời ai làm gì, và nói bữa đó đã diễn ra.",
    videos: [
      long30("fC-p-9nWTWo", "Bài 1, thầy Hiếu giảng tiếng Việt", "Mini88"),
      long60("fC-p-9nWTWo", "Bài 1, xem tiếp", "Mini88")
    ],
    blocks: [{ h: "Mời", tier: 30, lines: [
      "她请我们吃了北京烤鸭。 请 + người + động từ: mời ai làm gì.",
      "了 sau 吃 là bữa đã ăn. Phủ định không mời, chưa ăn: 她没请我们, bỏ 了.",
      "我们 là chúng tôi hoặc chúng ta. Nghe câu mới biết. Cấp này chưa cần tách."
    ]}],
    vocab: [
      V("请", "qǐng", "mời"),
      V("我们", "wǒmen", "chúng tôi, chúng ta", "们 nhẹ."),
      V("吃", "chī", "ăn"),
      V("北京", "Běijīng", "Bắc Kinh")
    ],
    lines: [
      S("她请我们吃饭。", "tā qǐng wǒmen chī fàn.", "Cô ấy mời chúng tôi ăn cơm."),
      S("昨天她请我们吃了饭。", "zuótiān tā qǐng wǒmen chī le fàn.", "Hôm qua cô ấy đã mời chúng tôi ăn.")
    ],
    quiz: [
      Q("Mời ai làm gì", ["请 + người + động từ", "请 ở cuối câu", "请 thay cho 是", "请 + 了 + người"], 0, "请我们吃饭."),
      Q("Chưa mời", ["她不请了我们。", "她没请我们。", "她没请了我们。", "她请不我们。"], 1, "没, bỏ 了.")
    ]
  }),
  buoi({
    id: "hsk2-02", stage: "hsk2", week: 2, mark: "还是",
    kicker: "HSK 2 · Bài 2/15",
    title: "还是打车去吧",
    promise: "Chọn một trong hai bằng 还是. Rủ bằng 吧.",
    videos: [
      long30("3WdTqnooSDo", "Bài 2, thầy Hiếu giảng tiếng Việt", "Mini88"),
      long60("3WdTqnooSDo", "Bài 2, xem tiếp", "Mini88")
    ],
    blocks: [{ h: "Chọn", tier: 30, lines: [
      "我们坐地铁还是打车？ 还是 là hoặc trong câu hỏi, bắt chọn.",
      "坐地铁或者打车都可以。 或者 là hoặc trong câu kể, không bắt chọn.",
      "还是打车去吧。 吧 cuối câu là rủ, giọng xuống nhẹ. 吧 không phải 吗."
    ]}],
    vocab: [
      V("还是", "háishi", "hay là, khi phải chọn"),
      V("或者", "huòzhě", "hoặc, trong câu kể"),
      V("打车", "dǎ chē", "bắt taxi"),
      V("吧", "ba", "rủ, nhẹ")
    ],
    lines: [
      S("坐地铁还是打车？", "zuò dìtiě háishi dǎ chē?", "Đi tàu hay bắt xe?"),
      S("还是打车去吧。", "háishi dǎ chē qù ba.", "Thôi bắt xe đi.")
    ],
    quiz: [
      Q("Câu hỏi bắt chọn dùng", ["或者", "还是", "也", "和"], 1, "还是 trong câu hỏi."),
      Q("吧 cuối câu 去吧 là", ["Hỏi có-không", "Rủ", "Phủ định", "Đã xong"], 1, "Khác 吗.")
    ]
  }),
  buoi({
    id: "hsk2-03", stage: "hsk2", week: 3, mark: "想",
    kicker: "HSK 2 · Bài 3/15",
    title: "我想去西安旅游",
    promise: "Nói muốn đi đâu. Tách 想 và 要.",
    videos: [
      long30("CH5AC4A1bgg", "Bài 3", "Mini88"),
      long60("CH5AC4A1bgg", "Bài 3, xem tiếp", "Mini88")
    ],
    blocks: [{ h: "Muốn", tier: 30, lines: [
      "我想去西安旅游。 想 là muốn, chưa chắc đã đặt vé.",
      "我要去 là tôi sẽ đi, quyết rồi, hoặc tôi cần đi.",
      "去 + chỗ + làm gì: 去西安旅游. Chỗ đứng trước việc.",
      "旅游 là đi chơi, đi du lịch, động từ."
    ]}],
    vocab: [
      V("想", "xiǎng", "muốn"),
      V("要", "yào", "sẽ, cần, lấy"),
      V("旅游", "lǚyóu", "du lịch"),
      V("去", "qù", "đi", "qù là ü, không phải cu.")
    ],
    lines: [
      S("我想去西安旅游。", "wǒ xiǎng qù Xī'ān lǚyóu.", "Tôi muốn đi Tây An chơi."),
      S("你想去哪儿？", "nǐ xiǎng qù nǎr?", "Bạn muốn đi đâu?")
    ],
    quiz: [
      Q("想 và 要", ["想 là muốn, 要 là quyết hoặc cần", "Một nghĩa", "想 là đã đi", "要 không đi với 去"], 0, "我想去 chưa chắc đã đi."),
      Q("去西安旅游, chỗ đứng", ["Sau 旅游", "Giữa 去 và việc", "Đầu câu", "Thay cho 想"], 1, "去 + chỗ + động từ.")
    ]
  }),
  buoi({
    id: "hsk2-04", stage: "hsk2", week: 4, mark: "穿",
    kicker: "HSK 2 · Bài 4/15",
    title: "你穿红色很好看",
    promise: "Nói màu và đồ đang mặc. Tính từ không có 是.",
    videos: [
      long30("E4cEs3Ez0v8", "Bài 4", "Mini88"),
      long60("E4cEs3Ez0v8", "Bài 4, xem tiếp", "Mini88")
    ],
    blocks: [{ h: "Màu", tier: 30, lines: [
      "你穿红色很好看。 穿 là mặc. 红色 là màu đỏ, danh từ màu.",
      "很好看. Có 很, không có 是. 你是很好看 mới là câu người mới hay bịa, thừa 是.",
      "好看 là đẹp, dùng cho người và đồ. 漂亮 cũng là đẹp, gặp trong video thì nhận, nói 好看 cũng được."
    ]}],
    vocab: [
      V("穿", "chuān", "mặc"),
      V("红色", "hóngsè", "màu đỏ"),
      V("好看", "hǎokàn", "đẹp, nhìn ổn"),
      V("黑", "hēi", "đen")
    ],
    lines: [
      S("你穿红色很好看。", "nǐ chuān hóngsè hěn hǎokàn.", "Bạn mặc đỏ trông đẹp."),
      S("这件衣服是黑色的。", "zhè jiàn yīfu shì hēisè de.", "Áo này màu đen.")
    ],
    quiz: [
      Q("你穿红色很好看, chỗ sai nếu thêm 是", ["Thêm 是 trước 很", "Không thêm 是", "Bỏ 很", "Đưa 红色 xuống cuối"], 0, "Tính từ không cần 是."),
      Q("穿 là", ["Cởi", "Mặc", "Mua", "Giặt"], 1, "穿红色 mặc đồ đỏ.")
    ]
  }),
  buoi({
    id: "hsk2-05", stage: "hsk2", week: 5, mark: "第一次",
    kicker: "HSK 2 · Bài 5/15",
    title: "第一次去朋友家",
    promise: "Nói lần đầu, và việc xảy ra lúc nào bằng 的时候.",
    videos: [
      long30("U6BADh12hy0", "Bài 5", "Mini88"),
      long60("U6BADh12hy0", "Bài 5, xem tiếp", "Mini88")
    ],
    blocks: [{ h: "Lần đầu", tier: 30, lines: [
      "这是我第一次去中国朋友家。 第一次 đứng sau 是, trước động từ.",
      "去朋友家的时候, 我买了水果。 的时候 là lúc. Mệnh đề thời gian đứng trước việc chính.",
      "Nhà người Trung, khách hay mang chút quả. Không cần học thuộc lễ. Câu thì học đúng."
    ]}],
    vocab: [
      V("第一次", "dì yī cì", "lần đầu"),
      V("的时候", "de shíhou", "lúc", "候 thường nhẹ."),
      V("朋友", "péngyou", "bạn", "Tiếng sau nhẹ."),
      V("家", "jiā", "nhà")
    ],
    lines: [
      S("这是我第一次去朋友家。", "zhè shì wǒ dì yī cì qù péngyou jiā.", "Đây là lần đầu tôi đến nhà bạn."),
      S("去的时候我买了水果。", "qù de shíhou wǒ mǎi le shuǐguǒ.", "Lúc đi tôi đã mua hoa quả.")
    ],
    quiz: [
      Q("的时候 đứng", ["Cuối câu, sau việc chính", "Sau mệnh đề thời gian, trước việc chính", "Thay cho 了", "Trước chủ ngữ của cả bài"], 1, "去的时候, 我买了水果."),
      Q("第一次", ["第 + số + 次", "次 ở đầu", "只说一", "用个"], 0, "第一次, 第二次.")
    ]
  }),
  buoi({
    id: "hsk2-06", stage: "hsk2", week: 6, mark: "生日",
    kicker: "HSK 2 · Bài 6/15",
    title: "生日快乐",
    promise: "Nói ngày tháng và chúc sinh nhật.",
    videos: [
      long30("ygPfObiE3K0", "Bài 6", "Mini88"),
      long60("ygPfObiE3K0", "Bài 6, xem tiếp", "Mini88")
    ],
    blocks: [{ h: "Ngày", tier: 30, lines: [
      "今天几月几号？ Tháng rồi ngày: 三月五号 là 5 tháng 3.",
      "号 và 日 đều là ngày. Nói 号 là đủ.",
      "生日快乐。 祝你生日快乐。 祝 + người + điều chúc.",
      "生日 là sinh nhật, không phải 生日快乐 đảo chữ."
    ]}],
    vocab: [
      V("生日", "shēngrì", "sinh nhật"),
      V("快乐", "kuàilè", "vui"),
      V("月", "yuè", "tháng"),
      V("号", "hào", "ngày"),
      V("祝", "zhù", "chúc")
    ],
    lines: [
      S("今天几月几号？", "jīntiān jǐ yuè jǐ hào?", "Hôm nay ngày mấy tháng mấy?"),
      S("祝你生日快乐。", "zhù nǐ shēngrì kuàilè.", "Chúc bạn sinh nhật vui.")
    ],
    quiz: [
      Q("5 tháng 3", ["五月三号", "三月五号", "三号五月", "三月五个"], 1, "Tháng trước, ngày sau."),
      Q("祝你生日快乐, 祝 đi với", ["Người, rồi điều chúc", "Chỉ điều chúc", "Cuối câu", "Phủ định"], 0, "祝 + người + câu chúc.")
    ]
  }),
  buoi({
    id: "hsk2-07", stage: "hsk2", week: 7, mark: "得",
    kicker: "HSK 2 · Bài 7/15",
    title: "他打得很好",
    promise: "Khen cách làm bằng 得. Đừng nhét tân ngữ vào giữa 得.",
    videos: [
      long30("E45Cc2DISjI", "Bài 7", "Mini88"),
      long60("E45Cc2DISjI", "Bài 7, xem tiếp", "Mini88")
    ],
    blocks: [{ h: "得", tier: 30, lines: [
      "他篮球打得很好。 Hoặc 他打篮球打得很好。 Tân ngữ không đứng giữa động từ và 得.",
      "Câu sai hay gặp: 他打得篮球很好. 得 phải sát tính từ chấm điểm.",
      "得 này đọc de, nhẹ. Khác 得 děi là phải, cấp sau mới dùng."
    ]}],
    vocab: [
      V("得", "de", "được, cách làm", "Nhẹ. Sau động từ, trước tính từ."),
      V("篮球", "lánqiú", "bóng rổ"),
      V("打", "dǎ", "đánh, chơi một số môn")
    ],
    lines: [
      S("他篮球打得很好。", "tā lánqiú dǎ de hěn hǎo.", "Anh ấy chơi bóng rổ rất tốt."),
      S("你说得很好。", "nǐ shuō de hěn hǎo.", "Bạn nói rất tốt.")
    ],
    quiz: [
      Q("Câu đúng", ["他打得篮球很好。", "他篮球打得很好。", "他打篮球得很好。", "他很好打得篮球。"], 1, "Tân ngữ đưa lên trước, hoặc lặp động từ."),
      Q("得 trong bài này đọc", ["děi, phải", "de, nhẹ", "dé", "được thanh 2"], 1, "de nhẹ khi chấm cách làm.")
    ]
  }),
  buoi({
    id: "hsk2-08", stage: "hsk2", week: 8, mark: "虽然",
    kicker: "HSK 2 · Bài 8/15",
    title: "虽然忘了，但是我记得",
    promise: "Nhượng bộ đủ cả hai vế 虽然 và 但是.",
    videos: [
      long30("oVw6OB8wVuY", "Bài 8", "Mini88"),
      long60("oVw6OB8wVuY", "Bài 8, xem tiếp", "Mini88")
    ],
    blocks: [{ h: "Tuy", tier: 30, lines: [
      "虽然我忘了，但是他记得。 Có 虽然 thì nên có 但是. Đừng chỉ một vế như tiếng Việt đôi khi nói.",
      "因为…所以… là vì nên. 所以 không đi với 虽然.",
      "忘了 là đã quên, 了 tình huống. 记得 là còn nhớ, 得 ở đây dính vào từ, không phải công thức bài 7."
    ]}],
    vocab: [
      V("虽然", "suīrán", "tuy"),
      V("但是", "dànshì", "nhưng"),
      V("因为", "yīnwèi", "vì"),
      V("所以", "suǒyǐ", "nên"),
      V("记得", "jìde", "nhớ", "得 nhẹ, dính trong từ.")
    ],
    lines: [
      S("虽然我忘了，但是他记得。", "suīrán wǒ wàng le, dànshì tā jìde.", "Tuy tôi quên, nhưng anh ấy nhớ."),
      S("因为下雨，所以我没去。", "yīnwèi xià yǔ, suǒyǐ wǒ méi qù.", "Vì mưa nên tôi không đi.")
    ],
    quiz: [
      Q("虽然 đi với", ["所以", "但是", "还是", "的时候"], 1, "虽然…但是…"),
      Q("因为下雨，所以我没去, 没因为", ["Việc đã định rồi bỏ", "Không đi, phủ định quá khứ", "Mưa là tính từ", "所以 nghĩa là tuy"], 1, "没去, không có 了.")
    ]
  }),
  buoi({
    id: "hsk2-09", stage: "hsk2", week: 9, mark: "去买",
    kicker: "HSK 2 · Bài 9/15",
    title: "我去买杯奶茶",
    promise: "Đi để làm một việc. 去 rồi việc.",
    videos: [
      long30("UPLNXXERIJY", "Bài 9", "Mini88"),
      long60("UPLNXXERIJY", "Bài 9, xem tiếp", "Mini88")
    ],
    blocks: [{ h: "Đi mua", tier: 30, lines: [
      "我去买杯奶茶。 去 + động từ: đi làm việc đó.",
      "一杯 đọc yì bēi. Nói tắt 杯 cũng gặp trong lời nói. Bài này nghe cả hai.",
      "奶茶 là trà sữa. 买 là mua."
    ]}],
    vocab: [
      V("奶茶", "nǎichá", "trà sữa"),
      V("买", "mǎi", "mua"),
      V("杯", "bēi", "cốc"),
      V("去", "qù", "đi")
    ],
    lines: [
      S("我去买杯奶茶。", "wǒ qù mǎi bēi nǎichá.", "Tôi đi mua cốc trà sữa."),
      S("你去哪儿？", "nǐ qù nǎr?", "Bạn đi đâu?")
    ],
    quiz: [
      Q("去买, thứ tự", ["买去", "去 rồi mới mua", "买 ở đầu", "去 cuối câu"], 1, "去 + việc."),
      Q("买 thanh", ["1", "2", "3", "4"], 2, "mǎi thanh 3, 卖 là mài thanh 4.")
    ]
  }),
  buoi({
    id: "hsk2-10", stage: "hsk2", week: 10, mark: "快",
    kicker: "HSK 2 · Bài 10/15",
    title: "快考试了",
    promise: "Nói việc sắp tới bằng 快…了 hoặc 要…了.",
    videos: [
      long30("zXzopdNLhAM", "Bài 10, phần 2, thầy Hiếu", "Mini88", "Phần 2 của bài sắp thi. Thầy người Việt. 25 phút đầu."),
      long60("zXzopdNLhAM", "Bài 10, xem tiếp", "Mini88")
    ],
    blocks: [{ h: "Sắp", tier: 30, lines: [
      "快考试了。 hoặc 要考试了。 Việc sắp xảy ra. 了 cuối câu là đổi sang trạng thái sắp.",
      "Không nói 快了考试. 了 ở cuối.",
      "考试 là thi. 准备 là chuẩn bị: 我在准备考试."
    ]}],
    vocab: [
      V("快", "kuài", "sắp, trong 快…了"),
      V("要", "yào", "sắp, trong 要…了"),
      V("考试", "kǎoshì", "thi"),
      V("准备", "zhǔnbèi", "chuẩn bị")
    ],
    lines: [
      S("快考试了。", "kuài kǎoshì le.", "Sắp thi rồi."),
      S("我在准备考试。", "wǒ zài zhǔnbèi kǎoshì.", "Tôi đang ôn thi.")
    ],
    quiz: [
      Q("Sắp thi", ["考试快了。", "快考试了。", "了快考试。", "考试了快。"], 1, "快 + việc + 了."),
      Q("了 trong 快考试了", ["Việc đã thi xong", "Sắp bước vào việc", "Phủ định", "Câu hỏi"], 1, "Khác 看了电影.")
    ]
  }),
  buoi({
    id: "hsk2-11", stage: "hsk2", week: 11, mark: "最",
    kicker: "HSK 2 · Bài 11/15",
    title: "我最喜欢中餐",
    promise: "So mức thích bằng 最 và 更.",
    videos: [
      long30("gJOjWL1A_1w", "Bài 11", "Mini88"),
      long60("gJOjWL1A_1w", "Bài 11, xem tiếp", "Mini88")
    ],
    blocks: [{ h: "Nhất", tier: 30, lines: [
      "我最喜欢中餐。 最 là nhất, đứng trước động từ hoặc tính từ.",
      "这个更好。 更 là hơn, khi đã có mốc. 最 là đỉnh trong nhóm.",
      "喜欢 tiếng sau thường nhẹ."
    ]}],
    vocab: [
      V("最", "zuì", "nhất"),
      V("更", "gèng", "hơn"),
      V("喜欢", "xǐhuan", "thích", "Tiếng sau nhẹ."),
      V("中餐", "Zhōngcān", "món Trung")
    ],
    lines: [
      S("我最喜欢中餐。", "wǒ zuì xǐhuan Zhōngcān.", "Tôi thích món Trung nhất."),
      S("这个更好。", "zhège gèng hǎo.", "Cái này tốt hơn.")
    ],
    quiz: [
      Q("最 đứng", ["Cuối câu", "Trước động từ hoặc tính từ", "Thay cho 很", "Sau 了"], 1, "最喜欢, 最好."),
      Q("更 và 最", ["更 là hơn, 最 là nhất", "Một nghĩa", "最 là phủ định", "更 chỉ dùng với 比"], 0, "更好, 最好.")
    ]
  }),
  buoi({
    id: "hsk2-12", stage: "hsk2", week: 12, mark: "比",
    kicker: "HSK 2 · Bài 12/15",
    title: "这儿比北京冷",
    promise: "So sánh bằng 比. Phủ định thường bằng 没有.",
    videos: [
      long30("X_L6PIOQSMA", "Bài 12", "Mini88"),
      long60("X_L6PIOQSMA", "Bài 12, xem tiếp", "Mini88")
    ],
    blocks: [{ h: "Hơn", tier: 30, lines: [
      "这儿比北京冷。 A 比 B + tính từ. Tính từ không thêm 很.",
      "冷得多 là lạnh hơn nhiều. 多 đứng sau tính từ.",
      "这儿没有北京冷。 là chỗ này không lạnh bằng Bắc Kinh. Đừng dùng 不比 cho nghĩa đó. 不比 là không hơn, sắc thái khác, để sau."
    ]}],
    vocab: [
      V("比", "bǐ", "hơn"),
      V("冷", "lěng", "lạnh"),
      V("得多", "de duō", "hơn nhiều", "得 nhẹ."),
      V("没有", "méiyǒu", "không bằng, trong so sánh")
    ],
    lines: [
      S("这儿比北京冷。", "zhèr bǐ Běijīng lěng.", "Ở đây lạnh hơn Bắc Kinh."),
      S("这儿没有北京冷。", "zhèr méiyǒu Běijīng lěng.", "Ở đây không lạnh bằng Bắc Kinh.")
    ],
    quiz: [
      Q("So hơn", ["A 比 B + tính từ", "A 很 B", "B 比 A đứng cuối", "A 是比 B"], 0, "Không thêm 很 sau 比."),
      Q("Không lạnh bằng", ["不比冷", "没有…冷", "不是冷", "没了冷"], 1, "没有 + mốc + tính từ.")
    ]
  }),
  buoi({
    id: "hsk2-13", stage: "hsk2", week: 13, mark: "爱",
    kicker: "HSK 2 · Bài 13/15",
    title: "我们爱上课",
    promise: "Tách 爱 và 喜欢. Nói môn học.",
    videos: [
      long30("w4jGZFQ3Cpo", "Bài 13", "Mini88"),
      long60("w4jGZFQ3Cpo", "Bài 13, xem tiếp", "Mini88")
    ],
    blocks: [{ h: "Thích mạnh", tier: 30, lines: [
      "我喜欢中文。 là thích. 我爱中文。 mạnh hơn, gần với yêu, dùng cho việc rất gắn.",
      "Cấp này nói 喜欢 là an toàn. 爱 nghe trong video thì nhận.",
      "上课 là lên lớp. 下课 là tan lớp."
    ]}],
    vocab: [
      V("爱", "ài", "yêu, thích mạnh"),
      V("喜欢", "xǐhuan", "thích"),
      V("上课", "shàng kè", "lên lớp"),
      V("下课", "xià kè", "tan lớp")
    ],
    lines: [
      S("我们喜欢中文课。", "wǒmen xǐhuan Zhōngwén kè.", "Chúng tôi thích môn tiếng Trung."),
      S("现在下课了。", "xiànzài xià kè le.", "Bây giờ tan lớp rồi.")
    ],
    quiz: [
      Q("Nói thích cho an toàn", ["爱", "喜欢", "是", "要"], 1, "爱 mạnh hơn, dễ quá lời."),
      Q("下课 là", ["Lên lớp", "Tan lớp", "Thi", "Nghỉ cả tuần"], 1, "下 là hết tiết.")
    ]
  }),
  buoi({
    id: "hsk2-14", stage: "hsk2", week: 14, mark: "过",
    kicker: "HSK 2 · Bài 14/15",
    title: "一个人过春节",
    promise: "Nói đã từng, bằng 过. Phủ định 没…过.",
    videos: [
      long30("RpG5M3WvtPw", "Bài 14", "Mini88"),
      long60("RpG5M3WvtPw", "Bài 14, xem tiếp", "Mini88")
    ],
    blocks: [{ h: "Đã từng", tier: 30, lines: [
      "我去过北京。 过 là kinh nghiệm, không chỉ một lần đã xong.",
      "我没去过北京。 Có 过 thì phủ định bằng 没, không thêm 了.",
      "一个人 là một mình. 春节 là Tết Nguyên đán.",
      "过节 là ăn Tết, đón lễ. 过 này là trải qua lễ, khác 过 kinh nghiệm nhưng cùng chữ. Nghe câu."
    ]}],
    vocab: [
      V("过", "guo", "đã từng", "Nhẹ, sau động từ."),
      V("一个人", "yí gè rén", "một mình"),
      V("春节", "Chūnjié", "Tết"),
      V("过节", "guò jié", "ăn Tết, đón lễ")
    ],
    lines: [
      S("我去过北京。", "wǒ qù guo Běijīng.", "Tôi đã từng đến Bắc Kinh."),
      S("我没去过中国。", "wǒ méi qù guo Zhōngguó.", "Tôi chưa từng đến Trung Quốc.")
    ],
    quiz: [
      Q("Chưa từng đi", ["我不去过。", "我没去过。", "我没去了过。", "我不过去。"], 1, "没…过, không 了."),
      Q("一个人", ["Một người khách", "Một mình", "Người thứ nhất", "Có một con"], 1, "做某事的时候只有自己.")
    ]
  }),
  buoi({
    id: "hsk2-15", stage: "hsk2", week: 15, mark: "再",
    kicker: "HSK 2 · Bài 15/15",
    title: "我想再去一次",
    promise: "Tách 再 và 又. Đếm lần bằng 次.",
    videos: [
      long30("2LCq3afDr2A", "Bài 15", "Mini88"),
      long60("2LCq3afDr2A", "Bài 15, xem tiếp", "Mini88")
    ],
    blocks: [{ h: "Lần nữa", tier: 30, lines: [
      "我想再去一次中国。 再 là lần nữa, việc chưa tới hoặc việc mình định.",
      "我昨天又去了。 又 là lại, việc đã xảy ra thêm lần nữa.",
      "一次, 两次. 次 là lần. 两 trước 次, không phải 二, khi nói hai lần trong lời thường: 两次."
    ]}],
    vocab: [
      V("再", "zài", "lại, việc chưa tới"),
      V("又", "yòu", "lại, việc đã xảy ra"),
      V("次", "cì", "lần"),
      V("一次", "yí cì", "một lần")
    ],
    lines: [
      S("我想再去一次。", "wǒ xiǎng zài qù yí cì.", "Tôi muốn đi thêm một lần."),
      S("他昨天又来了。", "tā zuótiān yòu lái le.", "Hôm qua anh ấy lại đến.")
    ],
    quiz: [
      Q("Việc định làm lần nữa", ["又", "再", "过", "还是"], 1, "再 cho tương lai hoặc ý định."),
      Q("Việc hôm qua xảy ra thêm lần nữa", ["再", "又", "最", "更"], 1, "又 + đã xảy ra."),
      Q("一次, 一 đọc", ["yī", "yí", "yì", "yāo"], 1, "次 thanh 4, 一 thành yí.")
    ]
  }),
  buoi({
    id: "hsk2-on", stage: "hsk2", week: 16, mark: "法",
    kicker: "HSK 2 · Ôn",
    title: "Ôn ngữ pháp cấp 2",
    promise: "Một lượt các bẫy 还是, 得, 比, 过, 再. Rồi mới mở cấp 3.",
    videos: [
      clip("TaHVp1sJ5OQ", "Đề thử HSK 2", "Mini88", 25, 30, 0, 1500, "Thầy Hiếu. Đề thử của lớp, không phải đề chính thức. Tối nay 25 phút."),
      clip("CJUjcgOdb94", "Từ HSK 2 bản 3.0", "Khoai Tây yêu tiếng Trung", 25, 45, 0, 1500, "Cô người Việt. Nghe và nói lại. Một video chưa đủ 500 từ.")
    ],
    blocks: [{ h: "Năm bẫy", tier: 30, lines: [
      "还是 chọn trong câu hỏi. 或者 kể.",
      "打得很好, không nhét tân ngữ sau 得.",
      "比 rồi tính từ trần. Không bằng thì 没有.",
      "没去过, không 了.",
      "再 chưa tới, 又 đã rồi."
    ]}],
    vocab: [],
    lines: [
      S("我们打车还是坐地铁？", "wǒmen dǎ chē háishi zuò dìtiě?", "Mình bắt xe hay đi tàu?"),
      S("这儿比北京冷得多。", "zhèr bǐ Běijīng lěng de duō.", "Ở đây lạnh hơn Bắc Kinh nhiều.")
    ],
    quiz: [
      Q("他汉语说得很好, câu này", ["Đúng", "Sai vì 得", "Sai vì thiếu 是", "Sai vì 很"], 0, "Tân ngữ 汉语 đứng trước, động từ rồi 得."),
      Q("我没去过上海", ["Thừa 过", "Đúng", "Phải thêm 了", "Phải đổi 没 thành 不"], 1, "没…过.")
    ]
  }),

  buoi({
    id: "hsk3-phap", stage: "hsk3", week: 1, mark: "把",
    kicker: "HSK 3 · Ngữ pháp",
    title: "Chín điểm hay gặp ở cấp 3",
    promise: "Tối nay khóa 把. 被, bổ ngữ, 越来越, 一边 và 除了 nằm trong phần tiếng Việt, mỗi điểm một câu. Một tối chưa thuộc hết.",
    videos: [long30("zGKwMzV7P-w", "把, thầy Hiếu", "Mini88", "Thầy người Việt, giáo trình HSK 3. Bài này đi vào 把. 被 và các điểm khác nằm ở phần tiếng Việt nếu lớp chưa nói tới.")],
    blocks: [
      { h: "把 và 被", tier: 30, lines: [
        "我把书放在桌子上。 把 đưa vật lên trước động từ khi việc xử lý vật đó: để, làm, làm xong. Động từ không được trần. Phải có chỗ hoặc kết quả phía sau.",
        "杯子被他打破了。 被 là bị. Người làm đứng sau 被, có thể bỏ nếu không cần nói ai.",
        "Đừng dùng 把 cho mọi câu có tân ngữ. 我看书 không cần 把."
      ]},
      { h: "Bổ ngữ và càng", tier: 30, lines: [
        "听懂 là nghe mà hiểu. 懂 là kết quả. 看完 là xem hết.",
        "听得懂 là nghe nổi, có khả năng. 听不懂 là không nghe nổi. 得 hoặc 不 chen giữa động từ và kết quả.",
        "越来越冷 là càng ngày càng lạnh. 一边走一边说 là vừa đi vừa nói.",
        "除了茶，我还喝水。 除了…以外…还… là ngoài ra còn. Cấp này nhớ 还 đi cùng.",
        "又 là lại, đã xảy ra. 再 là sẽ lại. Cấp 2 đã có, cấp 3 dùng trong chuyện dài hơn."
      ]}
    ],
    vocab: [
      V("把", "bǎ", "đưa vật lên trước động từ"),
      V("被", "bèi", "bị"),
      V("懂", "dǒng", "hiểu"),
      V("完", "wán", "hết, xong"),
      V("越来越", "yuè lái yuè", "càng ngày càng"),
      V("一边", "yìbiān", "vừa"),
      V("除了", "chúle", "ngoài")
    ],
    lines: [
      S("我把书放在桌子上。", "wǒ bǎ shū fàng zài zhuōzi shang.", "Tôi để sách lên bàn."),
      S("我听不懂。", "wǒ tīng bu dǒng.", "Tôi nghe không hiểu."),
      S("天气越来越冷。", "tiānqì yuè lái yuè lěng.", "Trời càng ngày càng lạnh.")
    ],
    quiz: [
      Q("我把书放在桌子上, vì sao có 把", ["Câu nào cũng cần 把", "Việc xử lý vật và có chỗ phía sau", "把 là bị", "把 thay 的"], 1, "Động từ không trần."),
      Q("听不懂 là", ["Nghe rồi hiểu", "Không nghe nổi, không hiểu", "Không muốn nghe", "Đã nghe xong"], 1, "不 chen giữa 听 và 懂."),
      Q("越来越冷", ["Lạnh nhất", "Càng ngày càng lạnh", "Lạnh hơn Bắc Kinh", "Sắp lạnh"], 1, "Không cần 比.")
    ]
  }),
  buoi({
    id: "hsk3-lien", stage: "hsk3", week: 2, mark: "连",
    kicker: "HSK 3 · Liên từ",
    title: "Nối câu dài",
    promise: "因为, 虽然, 不但, 一…就. Nói đủ hai vế.",
    videos: [clip("Lprrm_h-d28", "Liên từ hay gặp", "Khoai Tây yêu tiếng Trung", 8, 30, null, null, "Cô người Việt. Video ngắn hơn bài. Mẫu chưa kịp nói thì đọc phần tiếng Việt.")],
    blocks: [{ h: "Đủ hai vế", tier: 30, lines: [
      "因为下雨，所以我没去。 Vì nên. Có thể bớt một vế khi nói, nhưng lúc viết hãy đủ.",
      "虽然冷，但是我去。 Tuy nhưng.",
      "他不但会说中文，而且会写。 Không những mà còn. 而且 không đổi thành 但是.",
      "我一到家就吃饭。 Vừa mới… thì đã. 一 và 就 đi cặp."
    ]}],
    vocab: [
      V("不但", "búdàn", "không những"),
      V("而且", "érqiě", "mà còn"),
      V("就", "jiù", "thì, ngay"),
      V("一…就…", "yī … jiù …", "vừa… thì…")
    ],
    lines: [
      S("我一到家就吃饭。", "wǒ yí dào jiā jiù chī fàn.", "Vừa về đến nhà là tôi ăn."),
      S("他不但会说，而且会写。", "tā búdàn huì shuō, érqiě huì xiě.", "Anh ấy không những nói được mà còn viết được.")
    ],
    quiz: [
      Q("不但 đi với", ["但是", "而且", "所以", "还是"], 1, "不但…而且…"),
      Q("一到家就吃饭, 就 báo", ["Việc xảy ra ngay sau", "Phủ định", "So sánh", "Bị động"], 0, "一…就…")
    ]
  }),
  buoi({
    id: "hsk3-dian", stage: "hsk3", week: 3, mark: "点",
    kicker: "HSK 3 · Mức độ",
    title: "有点儿 và 一点儿",
    promise: "Đứng trước tính từ hay sau động từ, hai chữ này khác chỗ.",
    videos: [long30("xr5kzGDbKiI", "Nói hay đến mức nào, thầy Hiếu", "Mini88", "Thầy người Việt. Lớp nói về mức độ của hành động. Hai mẫu 有点儿 và 一点儿 khóa ở phần tiếng Việt, vì chưa có video tiếng Việt ngắn đúng hai mẫu này.")],
    blocks: [{ h: "Một chút", tier: 30, lines: [
      "有点儿冷。 Hơi lạnh, thường là điều không vừa ý. 有点儿 đứng trước tính từ.",
      "请说慢一点儿。 Một chút, đứng sau tính từ hoặc động từ, khi nhờ hoặc so.",
      "Đừng nói 一点儿冷 cho nghĩa hơi lạnh. Chỗ đứng đổi nghĩa."
    ]}],
    vocab: [
      V("有点儿", "yǒu diǎnr", "hơi, trước tính từ"),
      V("一点儿", "yì diǎnr", "một chút, sau")
    ],
    lines: [
      S("今天有点儿冷。", "jīntiān yǒu diǎnr lěng.", "Hôm nay hơi lạnh."),
      S("请说慢一点儿。", "qǐng shuō màn yì diǎnr.", "Làm ơn nói chậm một chút.")
    ],
    quiz: [
      Q("Hơi đắt, không vui", ["一点儿贵", "有点儿贵", "很一点儿贵", "贵有点"], 1, "有点儿 trước tính từ."),
      Q("慢 một chút", ["有点儿慢说", "慢一点儿", "一点儿慢在前", "不点慢"], 1, "一点儿 đứng sau.")
    ]
  }),
  buoi({
    id: "hsk3-nghe1", stage: "hsk3", week: 4, mark: "听",
    kicker: "HSK 3 · Nghe 1",
    title: "Nghe câu cấp 3, phần đầu",
    promise: "25 phút nghe. Ghi 10 từ chưa có trong sổ, mỗi từ một câu.",
    videos: [long30("JlSmmg-TAb8", "HSK 3 bài 1, thầy Hiếu", "Mini88", "Thầy người Việt. Giáo trình chuẩn bản cũ. Nghe 25 phút, đừng coi là đủ 500 từ của cấp 3.0.")],
    blocks: [{ h: "Cách nghe tối nay", tier: 30, lines: [
      "Vòng 1, không nhìn chữ, ghi ý bạn bắt được.",
      "Vòng 2, nhìn phụ đề của video nếu có, sửa lại.",
      "Chọn 10 từ mới. Viết chữ, pinyin, một câu. Bấm xong bài để chúng vào sổ, tối mai đến hạn.",
      "Đừng xem hết hai giờ trong một đêm."
    ]}],
    vocab: [],
    lines: [],
    quiz: [
      Q("Tối nay việc đúng là", ["Xem hết video hai giờ", "Nghe 25 phút và lấy 10 từ", "Bỏ sổ từ", "Học 100 từ trần"], 1, "Nhịp 25 từ một tuần bắt đầu từ những từ này."),
      Q("Video này so với đề cương 2025", ["Đủ hết từ cấp 3 mới", "Là danh sách cấp cũ, dùng để nghe câu", "Là cấp 6", "Không có câu"], 1, "2.0 khoảng 300 từ mới. 3.0 khoảng 500.")
    ]
  }),
  buoi({
    id: "hsk3-nghe2", stage: "hsk3", week: 5, mark: "听",
    kicker: "HSK 3 · Nghe 2",
    title: "Nghe câu cấp 3, phần sau",
    promise: "Cùng cách với phần đầu. 10 từ nữa.",
    videos: [long30("4NA5qv19k2E", "HSK 3 bài 8, thầy Hiếu", "Mini88", "Thầy người Việt. Nghe tiếp một bài khác, 25 phút. Vẫn là giáo trình bản cũ.")],
    blocks: [{ h: "Cách nghe", tier: 30, lines: [
      "Không mở phần 1 lại trừ khi 10 từ hôm trước vẫn không nhớ.",
      "Sau khi nghe, nói lại 5 câu không nhìn.",
      "Từ trùng với sổ thì bỏ qua, lấy từ khác."
    ]}],
    vocab: [],
    lines: [],
    quiz: [
      Q("Từ đã có trong sổ", ["Thêm lại cho đủ 10", "Bỏ qua, lấy từ chưa có", "Xóa sổ", "Đổi nghĩa"], 1, "Sổ không cần hai thẻ một từ."),
      Q("Nói lại câu", ["Nhìn chữ đọc", "Không nhìn, 5 câu", "Chỉ viết", "Bỏ"], 1, "Miệng vẫn là cửa của khóa này.")
    ]
  }),
  buoi({
    id: "hsk3-thi", stage: "hsk3", week: 6, mark: "测",
    kicker: "HSK 3 · Kiểm",
    title: "Bài kiểm ngữ pháp trước cấp 4",
    promise: "Làm cùng video. Sai điểm nào thì quay lại bài ngữ pháp, chưa mở cấp 4.",
    videos: [long30("3dYQOPKn-lY", "HSK 3 bài 15, thầy Hiếu", "Mini88", "Thầy người Việt. Ôn bằng một bài cuối giáo trình bản cũ. Không phải đề chính thức, chưa phải đỗ cấp 3.")],
    blocks: [{ h: "Cách dùng", tier: 30, lines: [
      "Dừng sau mỗi câu, nói lại, rồi mới nghe tiếp.",
      "Câu chưa học: ghi lại, không tính là đã biết.",
      "Ba câu cấp 3 sai cùng một điểm thì học lại bài đó tuần sau."
    ]}],
    vocab: [],
    lines: [],
    quiz: [
      Q("Câu thầy nói mà bạn chưa học", ["Đoán cho có điểm", "Ghi lại, không tính là đã biết", "Mở cấp 5 ngay", "Xóa sổ"], 1, "Bài này chỉ để biết lỗ hổng cấp 3."),
      Q("Ba câu sai cùng một điểm", ["Bỏ qua", "Học lại bài đó", "Đổi sang cấp 6", "Học thêm 200 từ trong một tối"], 1, "Sửa lỗ, rồi mới thêm từ.")
    ]
  }),

  buoi({
    id: "hsk4-nhip", stage: "hsk4", week: 1, mark: "词",
    kicker: "HSK 4 · Nhịp",
    title: "Cách mang 1.000 từ mới",
    promise: "Một tối hiểu nhịp. Các tối sau lặp, không cần bài mới.",
    videos: [long30("a2MYVWfFjAQ", "Cách làm trắc nghiệm HSK 4, thầy Hiếu", "Mini88", "Thầy người Việt. Đây là cách làm bài, không phải đủ 1.000 từ mới. Từ vẫn theo nhịp 35 từ một tuần.")],
    blocks: [{ h: "Bảy tối của một tuần cấp 4", tier: 30, lines: [
      "Tối 1 và 2: 15 từ mới, mỗi từ một câu có 把 hoặc bổ ngữ nếu câu chịu được. Không thì câu thẳng.",
      "Tối 3: nghe 25 phút, không tua chữ. Ghi ý.",
      "Tối 4: đọc một đoạn khoảng 200 chữ. Tra tối đa 8 từ.",
      "Tối 5: kể lại đoạn đó bằng 8 câu nói, không viết trước.",
      "Tối 6: viết 80 chữ. Đọc lại, tìm một câu có 是 trước tính từ thì xóa 是.",
      "Tối 7: ôn sổ. Từ sai hai lần thì viết lại câu.",
      "35 từ một tuần thì 1.000 từ mất khoảng 30 tuần. Đó là phần từ. Giờ nghe và đọc nằm trong cùng 7 tối."
    ]}],
    vocab: [
      V("不仅", "bùjǐn", "không những", "Cặp với 而且, cùng họ với 不但."),
      V("无论", "wúlùn", "dù", "Thường đi với 都."),
      V("即使", "jíshǐ", "cho dù", "Đi với 也."),
      V("原来", "yuánlái", "hóa ra, vốn")
    ],
    lines: [
      S("无论多忙，他都学习。", "wúlùn duō máng, tā dōu xuéxí.", "Dù bận đến đâu anh ấy cũng học."),
      S("原来是他。", "yuánlái shì tā.", "Hóa ra là anh ấy.")
    ],
    quiz: [
      Q("无论 thường đi với", ["都 hoặc 也", "但是", "比", "把"], 0, "无论…都…"),
      Q("1.000 từ mới, nhịp trong bài", ["100 từ một tối", "khoảng 35 từ một tuần", "học trần trong một tháng", "bỏ từ, chỉ xem video"], 1, "30 tuần là phần từ, nghe đọc nằm trong tuần đó."),
      Q("Hết video cách làm bài", ["Đủ 1.000 từ mới", "Chưa đủ cấp. Nhịp vẫn khoảng 35 từ một tuần", "Là cấp 1", "Không cần sổ từ"], 1, "Đừng tick xong cấp khi hết video.")
    ]
  }),
  buoi({
    id: "hsk4-lop", stage: "hsk4", week: 2, mark: "课",
    kicker: "HSK 4 · Lớp",
    title: "Một buổi lớp cấp 4",
    promise: "Nhái câu thầy nói. Chưa cần hiểu hết từ.",
    videos: [clip("en83uqkMiwY", "Nghe và nhắc lại", "Mini88", 15, 30, null, null, "Thầy người Việt. Nhắc lại từng câu. Từ lạ ghi vào sổ, tối mai ôn.")],
    blocks: [{ h: "Cách xem", tier: 30, lines: [
      "Vòng 1 nhái thanh, chưa dịch.",
      "Vòng 2 dừng ở câu có từ mới, viết một câu của bạn cùng từ đó.",
      "Muốn xem thêm thì mở kênh Mini88, mỗi tối một bài, rồi 20 phút nói. Đừng xếp năm bài trong một đêm."
    ]}],
    vocab: [],
    lines: [],
    quiz: [
      Q("Tối nay ưu tiên", ["Dịch hết trước khi nghe", "Nhái câu, rồi mới ghi từ", "Bỏ video", "Viết 500 chữ"], 1, "Tai trước, từ sau."),
      Q("Năm video một đêm", ["Đúng nhịp", "Quá tải, mỗi tối một bài lớp", "Bắt buộc", "Thay cho sổ từ"], 1, "10 phút video, 20 phút nói.")
    ]
  }),
  buoi({
    id: "hsk4-lop2", stage: "hsk4", week: 3, mark: "课",
    kicker: "HSK 4 · Lớp 2",
    title: "Buổi lớp tiếp",
    promise: "Cùng cách nhái. Kiểm tra bạn còn nhớ câu của buổi trước.",
    videos: [long30("f96pUFHShjQ", "Nghe và nhắc lại, phần dài", "Mini88", "Thầy người Việt. 25 phút, nhắc lại từng câu rồi dừng.")],
    blocks: [{ h: "Trước khi mở video", tier: 30, lines: [
      "Nói lại 5 câu của buổi lớp trước, không nhìn.",
      "Câu nào gãy thì viết vào giấy, xem video mới sau.",
      "Hết video, chọn một mẫu câu thầy vừa dùng và đặt một câu về việc của bạn hôm nay."
    ]}],
    vocab: [],
    lines: [],
    quiz: [
      Q("Trước video mới", ["Mở luôn", "Nói 5 câu buổi trước", "Xóa sổ", "Đổi cấp"], 1, "Cấp 4 hỏng vì quên, không phải vì thiếu video."),
      Q("Sau video", ["Tắt máy", "Đặt một câu về việc hôm nay", "Xem thêm ba bài", "Chỉ tra từ điển"], 1, "Câu của bạn mới vào sổ.")
    ]
  }),

  buoi({
    id: "hsk5-tu", stage: "hsk5", week: 1, mark: "读",
    kicker: "HSK 5 · Đọc",
    title: "Mẻ từ đầu, và cách đọc một trang",
    promise: "Nghe một mẻ từ, rồi đọc theo luật tra ít.",
    videos: [
      clip("LKIn-hh4Ccg", "Cách luyện nghe", "Khoai Tây yêu tiếng Trung", 7, 30, null, null, "Cô người Việt. Chưa có lớp miễn phí trọn bộ HSK 5 bằng tiếng Việt. Tối nay lấy cách nghe, từ mới vẫn lấy từ trang bạn đọc.")
    ],
    blocks: [{ h: "Luật đọc", tier: 30, lines: [
      "Một trang. Tra tối đa 8 từ. Từ thứ 9 bỏ qua, đoán bằng câu.",
      "Đọc xong, đóng trang, nói bằng tiếng Việt đoạn đó nói gì. Rồi nói lại bằng 5 câu tiếng Trung.",
      "25 từ mới mỗi tuần, lấy từ trang bạn đọc, không lấy từ danh sách trần.",
      "Nghe audio sách một tối khác, không cùng tối với đọc, kẻo tai dựa vào chữ."
    ]}],
    vocab: [],
    lines: [],
    quiz: [
      Q("Tra từ trong một trang", ["Tra hết", "Tối đa 8 từ", "Không tra từ nào", "Chỉ tra tên riêng"], 1, "Tra nhiều thì không đọc được."),
      Q("Nghe và đọc", ["Cùng một tối cho nhanh", "Hai tối khác nhau", "Bỏ nghe", "Chỉ nghe nhạc"], 1, "Tai không được dựa vào chữ.")
    ]
  }),
  buoi({
    id: "hsk5-nghe", stage: "hsk5", week: 2, mark: "听",
    kicker: "HSK 5 · Nghe",
    title: "Nghe một lần",
    promise: "Tập nghe không tua, vì phòng thi cấp này không đọc lại nhiều.",
    videos: [long30("kKf5YtDIIkY", "Nghe rồi trả lời, thầy Hiếu", "Mini88", "Thầy người Việt. Luyện HSKK, không phải đề HSK 5 chính thức. Vòng 1 không nhìn chữ.")],
    blocks: [{ h: "Ba vòng", tier: 30, lines: [
      "Vòng 1: không chữ, ghi ý bằng tiếng Việt.",
      "Vòng 2: vẫn không chữ, thêm chi tiết.",
      "Vòng 3: mở chữ, khoanh từ bạn nghe sai thanh.",
      "Đoạn 3 phút làm kỹ hơn đoạn 25 phút nghe lướt. Mỗi tuần một đoạn 3 phút theo đúng ba vòng."
    ]}],
    vocab: [],
    lines: [],
    quiz: [
      Q("Vòng 1", ["Mở phụ đề", "Không chữ", "Vừa đọc vừa nghe", "Tua từng từ"], 1, "Phòng thi không có chữ chạy."),
      Q("Đoạn cần làm kỹ mỗi tuần", ["Cả sách", "Một đoạn khoảng 3 phút", "Hai giờ", "Chỉ từ đơn"], 1, "Ba vòng trên đoạn ngắn.")
    ]
  }),

  buoi({
    id: "hsk6-nghe", stage: "hsk6", week: 1, mark: "听",
    kicker: "HSK 6 · Nghe",
    title: "Nghe một lần rồi nhắc lại",
    promise: "Nghe một lần, nhắc lại, rồi mới nhìn chữ. Đúng kiểu tai của cấp 6.",
    videos: [clip("en83uqkMiwY", "Nghe và nhắc lại", "Mini88", 15, 30, null, null, "Thầy người Việt. Luyện tai cấp cao. Chưa có lớp nghe chủ đề sức khỏe của người Việt để gắn vào bài này.")],
    blocks: [{ h: "Cách nghe", tier: 30, lines: [
      "Nghe câu hỏi của thầy trước, rồi mới nghe đoạn.",
      "Chọn đáp án. Sau đó mở chữ nếu video có, tìm một từ bạn nghe nhầm thanh.",
      "Viết 5 câu về việc hôm nay, dùng từ vừa gặp. Sai ngữ pháp thì sửa bằng các mẫu đã học, đừng bịa mẫu mới.",
      "Muốn nghe tiếp thì mở kênh Mini88, mỗi tối một bài, rồi 20 phút nói hoặc viết."
    ]}],
    vocab: [],
    lines: [],
    quiz: [
      Q("Thứ tự", ["Đọc chữ trước", "Nghe câu hỏi, nghe đoạn, rồi mới xem chữ", "Xem đáp án trước", "Bỏ câu hỏi"], 1, "Một lần, như phòng thi."),
      Q("Sau bài", ["Năm buổi nữa ngay", "Viết 5 câu của bạn", "Học 200 từ", "Đổi sang bậc 9"], 1, "Từ phải vào câu của bạn.")
    ]
  }),
  buoi({
    id: "hsk6-bai1", stage: "hsk6", week: 2, mark: "文",
    kicker: "HSK 6 · Bài sách",
    title: "Bài 1 giáo trình, phần tiếng Việt",
    promise: "Học một bài sách với cô giảng tiếng Việt. Nửa đầu, khoảng 19 phút.",
    videos: [
      clip("KfUhOx_-ROI", "孩子给我们的启示, phần 1", "Tiếng Trung 247", 19, 30, null, null, "Giáo trình chuẩn HSK 6 đang phổ biến. Đề cương 2025 nhiều từ hơn một chút, nhưng bài này đúng tầm cấp 6."),
      clip("eyx4CagWlLQ", "Phần 2 của cùng bài", "Tiếng Trung 247", 65, 60, null, null, "Chỉ mở khi có một giờ. Xem 40 phút rồi dừng, phần còn để tuần sau.")
    ],
    blocks: [{ h: "Cách học một bài sách cấp 6", tier: 30, lines: [
      "Đừng chép cả bài. Chép 8 từ bạn sẽ dùng được, và 2 câu dài.",
      "Câu dài: tìm chủ ngữ và động từ chính trước, rồi mới dịch.",
      "Hết phần 1, đóng video, kể lại ý bài trong 6 câu.",
      "Tuần sau mới mở phần 2. Giữa hai phần, đọc lại 8 từ trong sổ."
    ]}],
    vocab: [],
    lines: [],
    quiz: [
      Q("Dịch câu dài", ["Dịch từng chữ từ trái sang", "Tìm chủ ngữ và động từ chính trước", "Bỏ câu dài", "Tra hết từ"], 1, "Câu cấp 6 gãy nếu dịch word-by-word."),
      Q("Phần 2", ["Xem ngay trong đêm", "Tuần sau", "Bỏ", "Xem trước phần 1"], 1, "8 từ cần một tuần trong sổ.")
    ]
  }),
  buoi({
    id: "hsk6-de", stage: "hsk6", week: 3, mark: "卷",
    kicker: "HSK 6 · Đề nghe",
    title: "Nói theo tranh",
    promise: "Nghe một lần, nói lại, không dừng ở câu dễ.",
    videos: [
      long30("Sa3qr1eU1OI", "Nhìn tranh và nói, thầy Hiếu", "Mini88", "Thầy người Việt. Luyện nói HSKK, không phải đề nghe HSK 6 chính thức. Các đề mẫu miễn phí đang có là giáo viên người Trung, nên không gắn vào đây.")
    ],
    blocks: [{ h: "Luật phòng", tier: 30, lines: [
      "Không tua lại. Sai thì đánh dấu, nghe tiếp.",
      "Hết lượt nói mới nghe lại đáp án trong video.",
      "Câu nào gãy thì ghi lại. Tuần sau nói lại đúng câu đó, vẫn không nhìn chữ ở vòng đầu.",
      "Đây là luyện nói, không phải điểm đỗ. Cấp 6 cần nhiều bài đọc và nhiều đề nữa."
    ]}],
    vocab: [],
    lines: [],
    quiz: [
      Q("Giữa đề", ["Tua lại câu vừa rồi", "Đánh dấu và nghe tiếp", "Mở đáp án", "Nghỉ 20 phút"], 1, "Một lần."),
      Q("Sai nhiều", ["Lên bậc 7", "Nghe lại cùng đề tuần sau, vẫn một lần", "Bỏ nghe", "Chỉ học từ đơn"], 1, "Sửa tai trên cùng một đề trước.")
    ]
  })
];
