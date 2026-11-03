export const fields = [
  {
    "key": "business",
    "label": "どのような事業・サポートサービスですか？",
    "type": "radio",
    "required": true,
    "options": [
      "パーソナルジム",
      "パーソナルピラティス",
      "ピラティス・ヨガスタジオ",
      "総合ジム・フィットネスクラブ",
      "食生活改善サービス",
      "エステサロン",
      "栄養相談サービス",
      "ダイエット・食事コーチングサービス",
      "個人・出張トレーナー",
      "オンライン指導",
      "開業準備中",
      "その他"
    ]
  },
  {
    "key": "role",
    "label": "あなたのお立場を教えてください。",
    "type": "radio",
    "options": [
      "経営者・代表",
      "店長・マネージャー",
      "トレーナー・インストラクター",
      "管理栄養士・栄養士",
      "エステティシャン・カウンセラー",
      "食事・生活習慣コーチ",
      "その他"
    ]
  },
  {
    "key": "members",
    "label": "食事・歩数・体重などの管理を支援する人数はどのくらいですか？",
    "help": "現在または今後の想定でお答えください。",
    "type": "radio",
    "required": true,
    "options": [
      "0人・未定",
      "1〜10人",
      "11〜30人",
      "31〜50人",
      "51〜100人",
      "101人以上"
    ]
  },
  {
    "key": "support",
    "label": "現在、食事・歩数・体重などの記録確認や管理の支援を行っていますか？",
    "type": "radio",
    "required": true,
    "options": [
      "通常の会費に含めて提供",
      "別料金で提供",
      "必要なときだけ対応",
      "今後提供したい",
      "提供する予定はない"
    ]
  },
  {
    "key": "tracking",
    "label": "現在、利用者と一緒に確認・管理しているものは何ですか？",
    "type": "check",
    "options": [
      "食事内容・カロリー・PFC",
      "歩数・日常の活動量",
      "体重・体脂肪などの変化",
      "運動・トレーニングの記録",
      "今は管理していない",
      "その他"
    ],
    "exclusive": "今は管理していない"
  },
  {
    "key": "tools",
    "label": "食事・歩数・体重などの記録を、今はどのように確認していますか？",
    "type": "check",
    "options": [
      "LINE・DM",
      "メール",
      "紙・口頭",
      "スプレッドシート",
      "食事・体重・歩数の記録アプリ",
      "専用の利用者管理システム",
      "利用者のスマートフォンを対面で確認",
      "受け取っていない",
      "その他"
    ],
    "exclusive": "受け取っていない"
  },
  {
    "key": "time",
    "label": "1人あたりの記録確認・管理・返信に、週どれくらいかかりますか？",
    "type": "radio",
    "options": [
      "5分未満",
      "5〜15分",
      "16〜30分",
      "31〜60分",
      "60分を超える",
      "対応していない・分からない"
    ]
  },
  {
    "key": "challenges",
    "label": "特に困っていることは何ですか？",
    "help": "食事・歩数・体重などの管理について、優先度の高いものを3つまで。困りごとがない場合も選べます。",
    "type": "check",
    "required": true,
    "maxChoices": 3,
    "options": [
      "記録や写真が散らばる",
      "食事・歩数・体重をまとめて把握しにくい",
      "確認・返信に時間がかかる",
      "利用者が記録を続けにくい",
      "前回の指導内容を追いにくい",
      "複数スタッフで情報を共有しにくい",
      "変化を説明する資料づくり",
      "導入費用・利用者の負担",
      "特に困っていない",
      "その他"
    ],
    "exclusive": "特に困っていない"
  },
  {
    "key": "problem_detail",
    "label": "最近困った場面があれば、教えてください。",
    "type": "text",
    "maxLength": 800,
    "help": "任意。具体例があると開発の参考になります。利用者の個人情報は書かないでください。"
  },
  {
    "key": "ideal",
    "label": "どんな管理サービス・機能があれば活用したいですか？",
    "type": "text",
    "maxLength": 800,
    "help": "任意。食事・歩数・体重の管理や、今の方法で足りないことを自由に教えてください。必要ない場合は、その理由でも構いません。"
  },
  {
    "key": "features",
    "label": "CaloWayで使いたい機能はありますか？",
    "type": "check",
    "required": true,
    "maxChoices": 3,
    "help": "優先度の高いものを3つまで。共有・管理機能は企画段階です。食事写真は担当者には共有しません。「今は必要ない」も選べます。",
    "options": [
      "食事内容・量・カロリー・PFCの一覧（日別グラフ）",
      "体重の推移・グラフ",
      "歩数の共有・推移グラフ",
      "食事・歩数・体重をまとめた週次AIレポート",
      "記録に基づく食事候補の提案",
      "前回の目標・指導メモの引き継ぎ",
      "利用者向けコメントの下書き",
      "記録が途切れた利用者の把握",
      "目標の設定・達成状況の確認",
      "スタッフ間の担当者共有",
      "PDF・データ書き出し",
      "今は必要ない",
      "その他"
    ],
    "exclusive": "今は必要ない"
  },
  {
    "key": "feature_detail",
    "label": "選択肢以外に欲しい機能や、具体的な使い方を教えてください。",
    "type": "text",
    "maxLength": 800,
    "help": "任意。「こんなことができれば使いたい」という条件も歓迎します。"
  },
  {
    "key": "interest",
    "label": "そもそも、利用者の食事・歩数・体重をまとめて管理するサービスは必要ですか？",
    "type": "radio",
    "required": true,
    "options": [
      "今すぐ必要だと感じる",
      "条件が合えば活用したい",
      "あると便利だが必須ではない",
      "今の方法で十分なので必要ない",
      "こうした管理自体を行う予定がない",
      "まだ判断できない"
    ]
  },
  {
    "key": "need_reason",
    "label": "必要・不要と感じた理由を教えてください。",
    "type": "text",
    "maxLength": 800,
    "help": "任意。今の方法で十分、管理の必要がない、利用者が使わなさそうなど、率直なご意見をお聞かせください。"
  },
  {
    "key": "budget",
    "label": "どのくらいの月額までなら、利用を検討できますか？",
    "type": "radio",
    "required": true,
    "help": "最初に回答した人数を管理する想定で、事業者全体が支払う管理機能の月額（税込）の上限を教えてください。利用者1人あたりの金額ではありません。個人向け有料機能の月390円は別料金です。",
    "options": [
      "無料なら検討できる（有料は難しい）",
      "1〜2,999円／月",
      "3,000〜4,999円／月",
      "5,000〜9,999円／月",
      "10,000〜19,999円／月",
      "20,000円／月以上も検討できる",
      "金額に関係なく必要ない",
      "機能・効果を見ないと分からない"
    ]
  },
  {
    "key": "budget_detail",
    "label": "希望の月額や、金額に見合うための条件があれば教えてください。",
    "type": "text",
    "maxLength": 800,
    "help": "任意。例：20人を月3,000円で管理できれば使いたい。"
  },
  {
    "key": "pricing",
    "label": "この予定価格を見て、どう感じますか？",
    "type": "radio",
    "required": true,
    "options": [
      "利用を検討できる",
      "機能・効果を確認してから判断したい",
      "高いと感じる",
      "少人数向けのプランがほしい",
      "料金に関係なく今は必要ない",
      "分からない"
    ],
    "help": "無料枠を含む事業者向け3プランと、個人向け有料機能が別料金であることを踏まえてお答えください。"
  },
  {
    "key": "plan",
    "label": "検討するとしたら、どのプランですか？",
    "type": "radio",
    "options": [
      "フリー：5人まで・無料",
      "スタンダード：30人まで・月4,980円（税込）",
      "プロ：100人まで・月9,800円（税込）",
      "100人より多い枠",
      "利用を検討していない・未定"
    ]
  },
  {
    "key": "barriers",
    "label": "導入するために必要な条件や、ほかに伝えたいことはありますか？",
    "type": "text",
    "maxLength": 800,
    "help": "任意。価格、操作、利用者への説明、他ツールとの連携など、率直にお聞かせください。"
  },
  {
    "key": "gym_name",
    "label": "店舗名・サービス名・屋号",
    "type": "short",
    "maxLength": 120
  },
  {
    "key": "name",
    "label": "お名前",
    "type": "short",
    "maxLength": 80
  },
  {
    "key": "email",
    "label": "メールアドレス",
    "type": "email",
    "maxLength": 254
  },
  {
    "key": "instagram",
    "label": "Instagramのユーザー名",
    "type": "short",
    "maxLength": 80
  }
];
export function validateAnswers(input) {
 const issues=[];const answers={};
 if(!input||typeof input!=='object'||Array.isArray(input)) return {issues:[{key:'form',message:'回答形式を確認してください。'}],answers};
 for(const f of fields){let v=input[f.key];
  if(f.type==='check'){
   if(v===undefined)v=[];
   if(!Array.isArray(v)||v.some(x=>typeof x!=='string'||!f.options.includes(x))||new Set(v).size!==v.length){issues.push({key:f.key,message:f.label+' 選択内容を確認してください。'});continue;}
   if(f.required&&!v.length)issues.push({key:f.key,message:f.label+' 1つ以上選んでください。'});
   if(v.length>(f.maxChoices||f.options.length))issues.push({key:f.key,message:f.label+' '+f.maxChoices+'つまで選んでください。'});
   if(f.exclusive&&v.includes(f.exclusive)&&v.length>1)issues.push({key:f.key,message:'「'+f.exclusive+'」は単独で選んでください。'});
  }else{
   if(v===undefined)v='';
   if(typeof v!=='string'){issues.push({key:f.key,message:'入力内容を確認してください。'});continue;}
   v=v.trim();
   if(f.required&&!v)issues.push({key:f.key,message:f.label+' 選んでください。'});
   if(f.options&&v&&!f.options.includes(v))issues.push({key:f.key,message:'選択内容を確認してください。'});
   if(v.length>(f.maxLength||200))issues.push({key:f.key,message:f.label+' 文字数を減らしてください。'});
   if(f.type==='email'&&v&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))issues.push({key:f.key,message:'メールアドレスの形式を確認してください。'});
   if(f.key==='instagram'&&v&&!/^@?[a-zA-Z0-9._]{1,30}$/.test(v))issues.push({key:f.key,message:'InstagramはURLではなくユーザー名を入力してください。'});
  }answers[f.key]=v;
 }
 for(const k of ['interview','updates','privacy']){
  const v=input[k];if(v!==undefined&&typeof v!=='boolean')issues.push({key:k,message:'同意の選択を確認してください。'});
  answers[k]=v===true;
 }
 if(!answers.privacy)issues.push({key:'privacy',message:'回答の取り扱いを確認してください。'});
 if((answers.interview||answers.updates)&&!answers.email&&!answers.instagram)issues.push({key:'email',message:'連絡を希望する場合は、メールまたはInstagramのユーザー名を入力してください。'});
 return {issues,answers};
}
