export const OMIKUJI_DATA = [
  {
    type: "great_blessing",
    label: "大吉",
    title: "天が味方する最強運",
    love: "運命の糸が絡まり合う！素敵な出会いが向こうから全速力で来る！",
    work: "あなたのアイデアが世界を変える！？努力が報われまくる日。",
    other: "臨時収入で財布が閉まらないかも！？心臓の準備を！",
    color: "#ffd700", // Gold
  },
  {
    type: "middle_blessing",
    label: "中吉",
    title: "かなりイケてる運勢",
    love: "少しの勇気で恋愛映画の主役に！アタックあるのみ！",
    work: "計画を実行に移す時！周りがあなたを放っておかない。",
    other: "健康運も絶好調。マラソンなら完走できそう。",
    color: "#ff4500", // Orange Red
  },
  {
    type: "small_blessing",
    label: "小吉",
    title: "ささやかな幸せの予感",
    love: "友達以上恋人未満の関係に進展あり？",
    work: "小さな成果が積み重なって山となる。コツコツが吉。",
    other: "金運は控えめだけど、おごってもらえるかも？",
    color: "#32cd32", // Lime Green
  },
  {
    type: "blessing",
    label: "吉",
    title: "安定こそ最強の武器",
    love: "焦らず進めば、愛はゆっくり育つもの。",
    work: "慎重さが成功の鍵。石橋を叩いて渡れば落ちない！",
    other: "健康運良好。野菜を食べるとさらに良し。",
    color: "#1e90ff", // Dodger Blue
  },
  {
    type: "half_blessing",
    label: "半吉",
    title: "今は力を溜める時",
    love: "相手の出方を見るのが吉。押してダメなら引いてみろ。",
    work: "今日は小休止。コーヒーブレイクで閃きがあるかも。",
    other: "金運は貯金に吉。500円玉貯金を始めよう。",
    color: "#dda0dd", // Plum
  },
  {
    type: "ending_blessing",
    label: "末吉",
    title: "これから登り坂",
    love: "出会いは少し遠回り。角を曲がる時は要注意。",
    work: "努力は裏切らない。今は根を張る時期。",
    other: "健康運注意。夜更かしは肌の大敵。",
    color: "#808080", // Gray
  },
  {
    type: "curse",
    label: "凶",
    title: "波乱の予感…！",
    love: "焦りは禁物。今は一人時間を楽しむのが吉。",
    work: "失敗は成功の母。ミスしても笑って誤魔化せ…ないかも。",
    other: "金運は節約一択。無駄遣いは封印せよ。",
    color: "#4b0082", // Indigo
  },
  {
    type: "great_curse",
    label: "大凶",
    title: "逆にレア！？最底辺からの逆襲",
    love: "人間関係に注意信号！余計な一言が命取り。",
    work: "大きなトラブルの予感。ホウレンソウ（報告・連絡・相談）を徹底せよ！",
    other: "健康運も注意。今日は早く寝て明日リセットだ！",
    color: "#000000", // Black
  },
];

export const getRandomOmikuji = () => {
  const randomIndex = Math.floor(Math.random() * OMIKUJI_DATA.length);
  return OMIKUJI_DATA[randomIndex];
};
